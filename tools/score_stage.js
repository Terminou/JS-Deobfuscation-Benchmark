/**
 * score_stage.js -- score one pipeline stage, one suite at a time, under a
 * hard wall-clock limit.
 *
 * `npx jest` cannot be used to score a stage that may contain hostile code.
 * Jest's `testTimeout` only bounds a test BODY; a corpus file that loops at
 * module load hangs the worker forever, because the loop runs while the test
 * file is still being evaluated. That is not hypothetical -- two mutants of
 * dijkstrajs and priorityqueuejs did exactly this during a mutation run, and
 * obfuscated or model-generated files will do it far more often.
 *
 * So every suite runs as its own child process with a timeout. A hang costs one
 * suite, not the run, and it is recorded as its own outcome rather than being
 * mistaken for a semantic failure:
 *
 *   pass        suite green
 *   fail        suite ran and assertions failed        -> semantic difference
 *   load-error  suite could not even start             -> file did not parse/load
 *   timeout     killed at the limit                    -> did not terminate
 *
 * Those four are the outcome taxonomy the results table needs; collapsing them
 * into "fail" makes level-3 numbers uninterpretable.
 *
 *   node tools/score_stage.js
 *   TARGET_DIR=dataset/01_obfuscated/level_3 node tools/score_stage.js
 *   node tools/score_stage.js --timeout 30 --jobs 6 --json out.json
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const JEST = path.join(ROOT, 'node_modules/.bin/jest');
const TARGET = process.env.TARGET_DIR || 'dataset/00_raw';

const argv = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = argv.indexOf(`--${name}`);
  return i === -1 ? fallback : argv[i + 1];
};
// 600 s, set from the worst observed case with margin -- not from intuition.
//
// Obfuscation is not free at run time. func_13_mersenneTwister runs in 6 s on the
// raw corpus; at `high` three consecutive measurements gave 75 s, 76 s and 135 s,
// and under contention from a parallel run it passed 580 s without finishing. Its
// suite loops millions of times and every string access now goes through an array
// lookup, so its cost swings with JIT warm-up and machine load.
//
// That variance is the real hazard: at the original 60 s default the SAME module
// scored `pass` in one run and `timeout` in the next, which would make Pass Rate
// non-deterministic. The limit has to sit far enough above the worst case that
// noise cannot cross it -- 600 s is ~4x the slowest clean measurement. The rest of
// the corpus is nowhere near: median 0.5 s, second slowest 6.6 s.
//
// So the limit is a MEASUREMENT PARAMETER, not just a hang guard, and the value
// used must be reported with the results. A `timeout` outcome means "did not
// finish within N seconds", never "did not terminate".
const TIMEOUT_MS = Number(opt('timeout', 600)) * 1000;
const JOBS = Number(opt('jobs', Math.max(2, Math.min(6, os.cpus().length - 1))));
const JSON_OUT = opt('json', null);

const entries = ['tests/entries/generated', 'tests/entries/handwritten']
  .flatMap((d) => fs.readdirSync(path.join(ROOT, d)).map((f) => ({ dir: d, file: f })))
  .filter((e) => e.file.endsWith('.test.js'))
  .sort((a, b) => a.file.localeCompare(b.file));

/** Kill the child AND everything it spawned; a bare child.kill leaves workers. */
function killGroup(child) {
  try { process.kill(-child.pid, 'SIGKILL'); } catch { /* group already gone */ }
  try { child.kill('SIGKILL'); } catch { /* already dead */ }
}

function runOne(entry) {
  return new Promise((resolve) => {
    const id = entry.file.replace('.test.js', '');
    const started = Date.now();
    // --testPathPattern rather than a positional path: a positional argument ends
    // up in the child's process.argv, and a vendored suite that parses argv
    // (arr-union does) then sees it as its own.
    // detached:true puts the child in its own process GROUP. Jest spawns worker
    // processes, and killing only the jest binary leaves those workers spinning:
    // a run that timed out once left 33 orphaned jest processes behind, which
    // then poisoned every later timing measurement and eventually made spawn
    // fail with EAGAIN. The whole group has to go.
    const child = spawn(JEST, ['--testPathPattern', `${entry.dir}/${entry.file}`.replace(/[.]/g, '\\.'), '--silent', '--ci'], {
      cwd: ROOT,
      env: { ...process.env, TARGET_DIR: TARGET },
      detached: true,
    });
    let out = '';
    const timer = setTimeout(() => {
      // SIGKILL, not SIGTERM: a process spinning in a synchronous loop never
      // reaches an event-loop turn and will ignore a polite signal.
      killGroup(child);
      resolve({ id, outcome: 'timeout', ms: Date.now() - started, tests: 0 });
    }, TIMEOUT_MS);
    child.stdout.on('data', (d) => { out += d; });
    child.stderr.on('data', (d) => { out += d; });
    child.on('close', () => {
      clearTimeout(timer);
      const ms = Date.now() - started;
      const m = out.match(/Tests:\s+(.*)/);
      const tests = m ? (m[1].match(/(\d+) total/) || [0, 0])[1] : 0;
      let outcome;
      if (/Test suite failed to run/.test(out)) outcome = 'load-error';
      else if (/^PASS/m.test(out)) outcome = 'pass';
      else if (/^FAIL/m.test(out)) outcome = 'fail';
      else outcome = 'load-error';
      resolve({ id, outcome, ms, tests: Number(tests) });
    });
  });
}

(async () => {
  console.log(`TARGET_DIR = ${TARGET}   timeout ${TIMEOUT_MS / 1000}s   ${JOBS} parallel\n`);
  const results = [];
  let next = 0;
  const worker = async () => {
    while (next < entries.length) {
      const e = entries[next++];
      const r = await runOne(e);
      results.push(r);
      const mark = { pass: ' ok ', fail: 'FAIL', 'load-error': 'LOAD', timeout: 'HANG' }[r.outcome];
      console.log(`[${mark}] ${r.id.padEnd(30)} ${String(r.tests).padStart(5)} tests  ${(r.ms / 1000).toFixed(1)}s`);
    }
  };
  await Promise.all(Array.from({ length: JOBS }, worker));

  results.sort((a, b) => a.id.localeCompare(b.id));
  const by = (o) => results.filter((r) => r.outcome === o);
  console.log('');
  console.log(`pass       : ${by('pass').length}/${results.length}`);
  console.log(`fail       : ${by('fail').length}   ${by('fail').map((r) => r.id).join(', ')}`);
  console.log(`load-error : ${by('load-error').length}   ${by('load-error').map((r) => r.id).join(', ')}`);
  console.log(`timeout    : ${by('timeout').length}   ${by('timeout').map((r) => r.id).join(', ')}`);
  console.log(`\nPass Rate (per file, binary) = ${(100 * by('pass').length / results.length).toFixed(1)}%`);

  if (JSON_OUT) {
    fs.writeFileSync(path.resolve(ROOT, JSON_OUT),
      `${JSON.stringify({ target: TARGET, timeoutMs: TIMEOUT_MS, results }, null, 2)}\n`);
    console.log(`wrote ${JSON_OUT}`);
  }
  process.exit(by('pass').length === results.length ? 0 : 1);
})();
