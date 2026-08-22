/**
 * mutation.js -- does each suite actually DETECT a wrong implementation?
 *
 * check_oracle_wiring.js only asks whether a suite notices a module that does NOTHING. That
 * is a much weaker question than it looks: luhn's official suite passed
 * sanity.js while being completely blind, because all 26 of its assertions used
 * should.js's property form and never fired (see tests/runner/shims/should-strict.js).
 * A no-op module tripped it for an unrelated reason; a plausibly-wrong module
 * sailed straight through.
 *
 * So this makes small SEMANTIC edits to each corpus file -- flip a comparison,
 * shift a boundary, negate a boolean -- and checks the suite goes red. A mutant
 * that SURVIVES is either a hole in the oracle or an equivalent mutant; both
 * want a human look.
 *
 *   node tools/measure_oracle_strength.js                    # every corpus file
 *   node tools/measure_oracle_strength.js func_24 func_45    # a subset
 *   node tools/measure_oracle_strength.js --per-file 5       # more mutants each
 *   node tools/measure_oracle_strength.js --jobs 8           # more parallelism
 *
 * Results stream to tools/oracle-strength-report.jsonl as they happen, so a run that
 * is interrupted still leaves everything it had finished.
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const vm = require('vm');
const { spawn } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const RAW = path.join(ROOT, 'dataset/00_raw');
const JEST = path.join(ROOT, 'node_modules/.bin/jest');
const REPORT = path.join(ROOT, 'tools/oracle-strength-report.jsonl');

// --- argument parsing -------------------------------------------------------
const argv = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = argv.indexOf(`--${name}`);
  return i === -1 ? fallback : Number(argv[i + 1]);
};
const PER_FILE = flag('per-file', 3);
const JOBS = flag('jobs', Math.max(2, Math.min(4, os.cpus().length - 1)));
// Generous: func_45_crc32 and func_46_adler32 legitimately take ~40 s each.
// Anything past this is a mutant that hangs -- which counts as detected, since
// a stuck module is not a passing one.
const TIMEOUT_MS = flag('timeout', 180) * 1000;
const only = argv.filter((a) => a.startsWith('func_'));

// --- mutators ---------------------------------------------------------------
// Mutation happens on the AST, not on text. A regex-based mutator looks fine
// until you read what it produced: the first run of this script "mutated" the
// URL inside a licence comment (`arr-flatten <https://github.com/...>` -> `<=`)
// and reported the suite as having a hole. 24 of 36 `<`-survivors were comments
// or regex character classes. An AST walk can only touch real operators and
// literals, so a surviving mutant means something.
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

const BINARY = { '===': '!==', '!==': '===', '==': '!=', '!=': '==', '<': '<=', '>': '>=', '<=': '<', '>=': '>', '+': '-', '-': '+' };
const LOGICAL = { '&&': '||', '||': '&&' };

/**
 * Collect candidate edits: one entry per mutable node, described by the path
 * through the AST so it can be re-applied to a fresh parse.
 */
function collectSites(ast, source) {
  const lines = source.split('\n');
  // Bundler plumbing, not behaviour: flipping `__esModule` changes nothing a
  // suite could observe, and it wasted a mutant slot on every esbuild/tsc
  // output in the corpus while reporting a hole that was not there.
  const isPlumbing = (node) => {
    const line = node.loc ? lines[node.loc.start.line - 1] || '' : '';
    return line.includes('__esModule');
  };
  const sites = [];
  traverse(ast, {
    BinaryExpression(p) {
      const to = BINARY[p.node.operator];
      if (to) sites.push({ kind: 'binary', from: p.node.operator, to, loc: p.node.loc });
    },
    LogicalExpression(p) {
      const to = LOGICAL[p.node.operator];
      if (to) sites.push({ kind: 'logical', from: p.node.operator, to, loc: p.node.loc });
    },
    BooleanLiteral(p) {
      if (isPlumbing(p.node)) return;
      sites.push({ kind: 'boolean', from: String(p.node.value), to: String(!p.node.value), loc: p.node.loc });
    },
    NumericLiteral(p) {
      // Off-by-one on a real numeric literal -- boundaries are where
      // deobfuscation most often goes subtly wrong.
      sites.push({ kind: 'number', from: String(p.node.value), to: String(p.node.value + 1), loc: p.node.loc });
    },
  });
  return sites;
}

function applySite(source, filename, target) {
  const ast = parser.parse(source, { sourceType: 'script', allowReturnOutsideFunction: true });
  const lines = source.split('\n');
  const isPlumbing = (node) => {
    const line = node.loc ? lines[node.loc.start.line - 1] || '' : '';
    return line.includes('__esModule');
  };
  let n = 0;
  let applied = false;
  const bump = (p, set) => {
    if (n++ !== target.index) return;
    set(p);
    applied = true;
  };
  traverse(ast, {
    BinaryExpression(p) { if (BINARY[p.node.operator]) bump(p, () => { p.node.operator = BINARY[p.node.operator]; }); },
    LogicalExpression(p) { if (LOGICAL[p.node.operator]) bump(p, () => { p.node.operator = LOGICAL[p.node.operator]; }); },
    BooleanLiteral(p) { if (isPlumbing(p.node)) return; bump(p, () => { p.node.value = !p.node.value; }); },
    NumericLiteral(p) { bump(p, () => { p.node.value += 1; }); },
  });
  if (!applied) return null;
  return generate(ast, { comments: true, compact: false }, source).code;
}

function parses(source, filename) {
  try {
    new vm.Script(source, { filename });
    return true;
  } catch {
    return false;
  }
}

function mutantsFor(source, filename, limit) {
  let ast;
  try {
    ast = parser.parse(source, { sourceType: 'script', allowReturnOutsideFunction: true });
  } catch (err) {
    return [];
  }
  const sites = collectSites(ast, source);
  if (sites.length === 0) return [];

  // Spread the chosen sites across the file rather than clustering them at the
  // top, so a suite that only exercises the entry path cannot look thorough.
  const step = Math.max(1, Math.floor(sites.length / limit));
  const chosen = [];
  for (let i = 0; i < sites.length && chosen.length < limit; i += step) chosen.push(i);

  const out = [];
  for (const index of chosen) {
    const site = sites[index];
    let mutated;
    try {
      mutated = applySite(source, filename, { index });
    } catch (err) {
      continue;
    }
    if (!mutated || mutated === source || !parses(mutated, filename)) continue;
    out.push({
      mutator: `${site.kind}:${site.from}->${site.to}`,
      line: site.loc ? site.loc.start.line : 0,
      source: mutated,
    });
  }
  return out;
}

// --- running ----------------------------------------------------------------
function runSuite(id, stageDir) {
  return new Promise((resolve) => {
    const child = spawn(JEST, [id, '--silent', '--testFailureExitCode', '0', '--ci'], {
      cwd: ROOT,
      env: { ...process.env, TARGET_DIR: stageDir },
    });
    let out = '';
    const timer = setTimeout(() => {
      child.kill('SIGKILL');
      resolve({ verdict: 'timeout', out });
    }, TIMEOUT_MS);
    child.stdout.on('data', (d) => { out += d; });
    child.stderr.on('data', (d) => { out += d; });
    child.on('close', () => {
      clearTimeout(timer);
      if (/^FAIL/m.test(out)) resolve({ verdict: 'killed', out });
      else if (/^PASS/m.test(out)) resolve({ verdict: 'SURVIVED', out });
      else resolve({ verdict: 'no-run', out });
    });
  });
}

// stdout can buffer when piped; writeSync keeps progress visible and on disk
// even if the run is interrupted.
const say = (line) => fs.writeSync(1, `${line}\n`);

async function main() {
  const files = fs.readdirSync(RAW)
    .filter((f) => /^func_\d{2}_.+\.js$/.test(f))
    .filter((f) => only.length === 0 || only.some((o) => f.startsWith(o)))
    .sort();

  // Build the work list up front so progress is countable.
  const jobs = [];
  for (const file of files) {
    const id = file.replace(/\.js$/, '');
    const source = fs.readFileSync(path.join(RAW, file), 'utf8');
    const muts = mutantsFor(source, file, PER_FILE);
    if (muts.length === 0) jobs.push({ id, file, mutator: '-', source: null });
    else for (const m of muts) jobs.push({ id, file, mutator: m.mutator, line: m.line, source: m.source });
  }

  fs.writeFileSync(REPORT, '');
  say(`${files.length} corpus files -> ${jobs.length} mutants, ${JOBS} parallel, ${TIMEOUT_MS / 1000}s cap`);
  say('');

  const results = [];
  let next = 0;
  let done = 0;

  async function worker(slot) {
    // Each slot keeps its own stage directory and rewrites one file per job.
    const stage = fs.mkdtempSync(path.join(os.tmpdir(), `deobf-mut-${slot}-`));
    for (const f of files) fs.copyFileSync(path.join(RAW, f), path.join(stage, f));

    while (true) {
      const i = next++;
      if (i >= jobs.length) break;
      const job = jobs[i];

      if (job.source === null) {
        const rec = { ...job, verdict: 'no-mutant' };
        results.push(rec);
        fs.appendFileSync(REPORT, `${JSON.stringify(rec)}\n`);
        say(`[ ? ] ${(++done + '/' + jobs.length).padEnd(8)} ${job.id.padEnd(28)} no applicable mutation`);
        continue;
      }

      fs.writeFileSync(path.join(stage, job.file), job.source);
      const { verdict } = await runSuite(job.id, stage);
      fs.copyFileSync(path.join(RAW, job.file), path.join(stage, job.file)); // restore

      const rec = { id: job.id, mutator: job.mutator, line: job.line, verdict };
      results.push(rec);
      fs.appendFileSync(REPORT, `${JSON.stringify(rec)}\n`);
      const mark = verdict === 'killed' ? '+' : verdict === 'timeout' ? 'T' : 'X';
      say(`[ ${mark} ] ${(++done + '/' + jobs.length).padEnd(8)} ${job.id.padEnd(28)} ${(job.mutator + '@' + job.line).padEnd(26)} ${verdict}`);
    }
    fs.rmSync(stage, { recursive: true, force: true });
  }

  await Promise.all(Array.from({ length: JOBS }, (_, s) => worker(s)));

  // --- report ---------------------------------------------------------------
  const byFile = new Map();
  for (const r of results) {
    if (!byFile.has(r.id)) byFile.set(r.id, []);
    byFile.get(r.id).push(r);
  }
  const survivors = results.filter((r) => r.verdict === 'SURVIVED');
  const weak = [...byFile.entries()].filter(([, rs]) => rs.some((r) => r.verdict === 'SURVIVED'));
  const noMutant = [...byFile.entries()].filter(([, rs]) => rs.every((r) => r.verdict === 'no-mutant'));

  say('');
  say(`killed    : ${results.filter((r) => r.verdict === 'killed').length}/${results.filter((r) => r.verdict !== 'no-mutant').length} mutants`);
  say(`timeout   : ${results.filter((r) => r.verdict === 'timeout').length} (counted as detected -- a stuck module is not a pass)`);
  say(`SURVIVED  : ${survivors.length}`);
  say(`no mutant : ${noMutant.length} file(s)`);
  say('');
  if (weak.length) {
    say('Suites with at least one surviving mutant -- inspect by hand:');
    for (const [id, rs] of weak) {
      const s = rs.filter((r) => r.verdict === 'SURVIVED').map((r) => `${r.mutator} (line ${r.line})`);
      say(`  ${id.padEnd(28)} survived: ${s.join(', ')}`);
    }
  } else {
    say('No survivors: every mutated corpus file was detected by its own suite.');
  }
  say('');
  say(`full record: ${path.relative(ROOT, REPORT)}`);
  process.exit(survivors.length === 0 ? 0 : 1);
}

main();
