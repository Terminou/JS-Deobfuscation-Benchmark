/**
 * report.js -- one line per corpus function: does its official suite pass, how
 * many assertions ran, and how much wrongness that suite can actually catch.
 *
 * `npm test` answers "50/50" in aggregate. This answers it per function, which
 * is what you need before trusting any individual result -- a PASS on a suite
 * with 1 assertion and 20 % oracle strength is not the same evidence as a PASS
 * on one with 900 assertions and 100 %.
 *
 *   node tools/report.js                 print the table
 *   node tools/report.js --md            also write docs/TEST_REPORT.md
 *   node tools/report.js --csv           also write docs/test-report.csv
 *   TARGET_DIR=dataset/01_obfuscated/level_3 node tools/report.js
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const TARGET = process.env.TARGET_DIR || 'dataset/00_raw';
const WANT_MD = process.argv.includes('--md');
const WANT_CSV = process.argv.includes('--csv');

const src = JSON.parse(fs.readFileSync(path.join(ROOT, 'dataset/00_raw/SOURCES.json'), 'utf8'));
const tsrc = JSON.parse(fs.readFileSync(path.join(ROOT, 'tests/SOURCES.json'), 'utf8'));
const testMeta = Object.fromEntries(tsrc.map((r) => [r.id, r]));

const pkg = Object.fromEntries(src.map((r) => [r.id, `${r.npm_package}@${r.npm_version}`]));
const cat = Object.fromEntries(src.map((r) => [r.id, r.category]));

// Oracle strength, if it has been measured.
const strength = {};
const report = path.join(ROOT, 'tools/oracle-strength-report.jsonl');
if (fs.existsSync(report)) {
  const acc = {};
  for (const line of fs.readFileSync(report, 'utf8').split('\n').filter(Boolean)) {
    const r = JSON.parse(line);
    if (r.verdict === 'no-mutant') continue;
    acc[r.id] = acc[r.id] || [0, 0];
    acc[r.id][1] += 1;
    if (r.verdict !== 'SURVIVED') acc[r.id][0] += 1;
  }
  for (const [id, [k, n]] of Object.entries(acc)) strength[id] = Math.round((100 * k) / n);
}

// Runtime assertion counts, written per test file by tests/runner/setup.js.
const COUNT_DIR = path.join(os.tmpdir(), 'deobf-assertion-counts');
fs.rmSync(COUNT_DIR, { recursive: true, force: true });

const out = path.join(os.tmpdir(), `report-${process.pid}.json`);
spawnSync('npx', ['jest', '--json', '--outputFile', out, '--silent'], {
  cwd: ROOT, env: { ...process.env, TARGET_DIR: TARGET }, encoding: 'utf8', maxBuffer: 128 * 1024 * 1024,
});
if (!fs.existsSync(out)) { console.error('[X] jest produced no report'); process.exit(1); }
const jest = JSON.parse(fs.readFileSync(out, 'utf8'));
fs.rmSync(out, { force: true });

const asserts = {};
if (fs.existsSync(COUNT_DIR)) {
  for (const f of fs.readdirSync(COUNT_DIR)) {
    const rec = JSON.parse(fs.readFileSync(path.join(COUNT_DIR, f), 'utf8'));
    asserts[rec.id] = rec.assertions;
  }
}

const rows = jest.testResults.map((t) => {
  const id = path.basename(t.name).replace('.test.js', '');
  const failed = t.assertionResults.filter((a) => a.status === 'failed').length;
  return {
    id,
    pkg: pkg[id] || '?',
    cat: (cat[id] || '?').slice(0, 11),
    tests: t.assertionResults.length,
    asserts: asserts[id],
    failed,
    ok: failed === 0 && t.status !== 'failed',
    oracle: strength[id],
  };
}).sort((a, b) => a.id.localeCompare(b.id));

console.log(`TARGET_DIR = ${TARGET}\n`);
console.log(`     ${'function'.padEnd(28)}${'package'.padEnd(26)}${'blocks'.padStart(7)}${'assertions'.padStart(12)}${'oracle'.padStart(8)}`);
console.log('     ' + '-'.repeat(81));
for (const r of rows) {
  const mark = r.ok ? ' ok ' : 'FAIL';
  const o = r.oracle === undefined ? '   -' : `${r.oracle}%`.padStart(4);
  const warn = r.oracle !== undefined && r.oracle < 50 ? '  <- weak oracle' : '';
  const a = r.asserts === undefined ? '-' : String(r.asserts);
  console.log(`[${mark}] ${r.id.padEnd(28)}${r.pkg.padEnd(26)}${String(r.tests).padStart(7)}${a.padStart(12)}${o.padStart(8)}${warn}`);
}

const bad = rows.filter((r) => !r.ok);
const total = rows.reduce((a, r) => a + r.tests, 0);
console.log('     ' + '-'.repeat(81));
const totalAsserts = rows.reduce((a, r) => a + (r.asserts || 0), 0);
console.log(`\n${rows.length - bad.length}/${rows.length} functions pass their official suite`);
console.log(`${total} Jest test blocks, ${totalAsserts} assertions actually executed`);
console.log('');
console.log('assertions are COUNTED AT RUNTIME, not parsed out of the source: every');
console.log('assertion library funnels through one method, and that method is wrapped.');
console.log('A low block count is not a weak suite -- is-base64 runs its checks inside one.');
console.log('Oracle strength is still the number to judge by: it is measured by injecting');
console.log('faults into the corpus file and seeing whether the suite notices.');
if (bad.length) console.log(`failing: ${bad.map((r) => r.id).join(', ')}`);
const measured = rows.filter((r) => r.oracle !== undefined);
if (measured.length) {
  const weak = measured.filter((r) => r.oracle < 50);
  console.log(`oracle strength measured for ${measured.length} functions; ${weak.length} below 50 % (${weak.map((r) => r.id).join(', ') || 'none'})`);
}
// --- optional file output, for the paper's appendix -------------------------
function writeFiles() {
  const measured = rows.filter((r) => r.oracle !== undefined);
  const strength = measured.length
    ? Math.round(measured.reduce((a, r) => a + r.oracle, 0) / measured.length)
    : 0;

  if (WANT_MD) {
    const out = [];
    out.push('# Unit Test Report');
    out.push('');
    out.push(`Generated by \`node tools/report.js --md\` against \`${TARGET}\`.`);
    out.push('');
    out.push(`- Functions: **${rows.length}**, passing their official suite: **${rows.length - bad.length}**`);
    out.push(`- Jest blocks: **${total}**, assertions executed: **${totalAsserts}**`);
    out.push(`- Mean oracle strength: **${strength}%** (per-function mutation score)`);
    out.push('');
    out.push('Every suite is the upstream package maintainer\'s own, vendored byte-identical');
    out.push('from a pinned artifact; digests are in `tests/SOURCES.json`. "Oracle" is the');
    out.push('share of injected faults the suite detects — see `docs/TESTS.md` §5.1.');
    out.push('');
    out.push('| # | Function | Package | Category | Test source | Blocks | Assertions | Oracle | Result |');
    out.push('|---|---|---|---|---|---|---|---|---|');
    for (const r of rows) {
      const m = testMeta[r.id] || {};
      const pin = m.ref_name ? `\`${m.ref_name}\`` : 'tarball';
      out.push(`| ${r.id.split('_')[1]} | \`${r.id}\` | ${r.pkg} | ${r.cat} | ${m.test_source || '?'} ${pin} | ${r.tests} | ${r.asserts ?? '-'} | ${r.oracle === undefined ? '—' : r.oracle + '%'} | ${r.ok ? 'pass' : 'FAIL'} |`);
    }
    out.push('');
    out.push('Blocks are Jest test blocks, not assertions: several suites run many checks');
    out.push('inside one block. Assertions are counted at runtime. Judge a suite by Oracle.');
    out.push('');
    const dest = path.join(ROOT, 'docs/TEST_REPORT.md');
    fs.writeFileSync(dest, `${out.join('\n')}\n`);
    console.log(`\nwrote ${path.relative(ROOT, dest)}`);
  }

  if (WANT_CSV) {
    const head = 'id,package,version,category,test_source,test_pin,blocks,assertions,oracle_percent,result';
    const lines = rows.map((r) => {
      const m = testMeta[r.id] || {};
      return [r.id, (m.npm_package || ''), (m.npm_version || ''), r.cat,
        (m.test_source || ''), (m.ref_name || 'tarball'), r.tests, r.asserts ?? '',
        r.oracle ?? '', r.ok ? 'pass' : 'fail'].join(',');
    });
    const dest = path.join(ROOT, 'docs/test-report.csv');
    fs.writeFileSync(dest, `${head}\n${lines.join('\n')}\n`);
    console.log(`wrote ${path.relative(ROOT, dest)}`);
  }
}
writeFiles();

process.exit(bad.length === 0 ? 0 : 1);
