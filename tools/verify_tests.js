/**
 * verify_tests.js -- prove the vendored suites are still the maintainers'.
 *
 * The benchmark's central claim is that Pass Rate is scored by tests we did not
 * write. That claim is only as good as the guarantee that nothing under
 * tests/upstream/ has drifted, so every vendored file is re-hashed here and
 * compared against the digest recorded at fetch time.
 *
 * Generated harness stubs live in the same directories on purpose (module
 * resolution needs them there); they are NOT in the provenance file and are
 * reported separately, so vendored and synthesised code can never be confused.
 *
 *   node tools/verify_tests.js
 */
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const records = JSON.parse(fs.readFileSync(path.join(ROOT, 'tests/SOURCES.json'), 'utf8'));
const SUITES = require('../tests/runner/suites');

let checked = 0;
const problems = [];

for (const rec of records) {
  for (const file of rec.files) {
    const abs = path.join(ROOT, 'tests/upstream', rec.id, file.path);
    checked += 1;
    if (!fs.existsSync(abs)) {
      problems.push(`${rec.id}/${file.path}: missing (re-run fetch_tests.py)`);
      continue;
    }
    const actual = crypto.createHash('sha256').update(fs.readFileSync(abs)).digest('hex');
    if (actual !== file.sha256) {
      problems.push(`${rec.id}/${file.path}: MODIFIED — sha256 ${actual} != ${file.sha256}`);
    }
  }
}

const stubs = Object.entries(SUITES).flatMap(([id, spec]) =>
  spec.stubs.map((s) => `${id}/${typeof s === 'string' ? s : s.path}`));

// Orphans: directories for suites that are no longer in the corpus. A swap
// renames the id, so the retired package's tests stay on disk looking official.
// Twenty-one had accumulated -- three from swaps, the rest macOS " 2" copies.
const known = new Set(records.map((r) => r.id));
const orphans = fs.readdirSync(path.join(ROOT, 'tests/upstream'))
  .filter((d) => fs.statSync(path.join(ROOT, 'tests/upstream', d)).isDirectory())
  .filter((d) => !known.has(d));
const missingStubs = stubs.filter((s) => !fs.existsSync(path.join(ROOT, 'tests/upstream', s)));

console.log(`vendored files verified : ${checked - problems.length}/${checked}`);
console.log(`generated harness stubs : ${stubs.length - missingStubs.length}/${stubs.length}`);
console.log(`orphan directories   : ${orphans.length}`);
for (const d of orphans) console.log(`  [X] tests/upstream/${d} belongs to no suite -- delete it`);
for (const s of missingStubs) console.log(`  [X] stub missing: ${s} (run: node tests/runner/build.js)`);
for (const p of problems) console.log(`  [X] ${p}`);

const ok = problems.length === 0 && missingStubs.length === 0 && orphans.length === 0;
console.log(`\n[${ok ? 'PASS' : 'FAIL'}] upstream suites are byte-identical to their pinned sources`);
process.exit(ok ? 0 : 1);
