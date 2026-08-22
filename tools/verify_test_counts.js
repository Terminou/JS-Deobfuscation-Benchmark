/**
 * verify_test_counts.js -- guard against a suite that silently shrinks.
 *
 * Jest reports PASS when every test that RAN passed. It says nothing about
 * tests that never registered. Three suites in this corpus build their cases
 * from the module under test (func_15, func_43, func_44) and drop to zero when
 * it misbehaves; a partial drop -- 400 cases instead of 918 -- would be reported
 * as a clean PASS with half the oracle silently missing.
 *
 * This was not hypothetical. A repository reorganisation left the generated
 * entries pointing at a stale path; 44 of 50 suites failed to load, the run
 * reported "1664 passed" with no failures visible in the summary tail, and
 * tools/check_oracle_wiring.js still said all 50 suites were detected -- because
 * a suite that cannot load also counts as FAIL.
 *
 *   node tools/verify_test_counts.js --record    # freeze the baseline from 00_raw
 *   node tools/verify_test_counts.js             # compare the current run to it
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const BASELINE = path.join(__dirname, 'test-count-baseline.json');
const record = process.argv.includes('--record');

const out = path.join(os.tmpdir(), `jest-counts-${process.pid}.json`);
const run = spawnSync('npx', ['jest', '--json', '--outputFile', out, '--silent'], {
  cwd: ROOT,
  env: { ...process.env, TARGET_DIR: process.env.TARGET_DIR || 'dataset/00_raw' },
  encoding: 'utf8',
  maxBuffer: 128 * 1024 * 1024,
});
if (!fs.existsSync(out)) {
  console.error('[X] jest produced no report');
  console.error(`${run.stdout || ''}${run.stderr || ''}`.slice(-2000));
  process.exit(1);
}
const report = JSON.parse(fs.readFileSync(out, 'utf8'));
fs.rmSync(out, { force: true });

const counts = {};
for (const t of report.testResults) {
  counts[path.basename(t.name).replace('.test.js', '')] = t.assertionResults.length;
}

if (record) {
  fs.writeFileSync(BASELINE, `${JSON.stringify(counts, null, 2)}\n`);
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  console.log(`[+] baseline recorded: ${Object.keys(counts).length} suites, ${total} tests -> ${path.relative(ROOT, BASELINE)}`);
  process.exit(0);
}

if (!fs.existsSync(BASELINE)) {
  console.error('[X] no baseline; run: node tools/verify_test_counts.js --record');
  process.exit(1);
}
const expected = JSON.parse(fs.readFileSync(BASELINE, 'utf8'));

const problems = [];
for (const [id, n] of Object.entries(expected)) {
  const got = counts[id];
  if (got === undefined) problems.push(`${id}: suite did not run at all (expected ${n} tests)`);
  else if (got !== n) problems.push(`${id}: ${got} tests ran, baseline says ${n}`);
}
for (const id of Object.keys(counts)) {
  if (!(id in expected)) problems.push(`${id}: new suite, not in baseline (re-record if intended)`);
}

const totalNow = Object.values(counts).reduce((a, b) => a + b, 0);
const totalExp = Object.values(expected).reduce((a, b) => a + b, 0);
console.log(`suites : ${Object.keys(counts).length} / ${Object.keys(expected).length}`);
console.log(`tests  : ${totalNow} / ${totalExp}`);
for (const p of problems) console.log(`  [X] ${p}`);
console.log(`\n[${problems.length === 0 ? 'PASS' : 'FAIL'}] every suite registered the number of tests it did on 00_raw`);
process.exit(problems.length === 0 ? 0 : 1);
