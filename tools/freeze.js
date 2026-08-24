/**
 * freeze.js -- pin the corpus and its oracle to one citable fingerprint.
 *
 * Everything downstream -- obfuscation levels, baseline runs, model runs, the
 * numbers in the paper -- is only comparable if the 50 corpus files and the 50
 * test suites they are scored against did not move underneath. Individual
 * digests already live in dataset/00_raw/SOURCES.json and tests/SOURCES.json;
 * this reduces both to a SINGLE hash that can be quoted in the paper and
 * re-checked by a reader.
 *
 *   node tools/freeze.js --write     record the ground truth as frozen
 *   node tools/freeze.js             verify the ground truth has not drifted
 *   node tools/freeze.js --stages [--write]   same, for dataset/01_obfuscated
 *
 * The obfuscated stages get their OWN lock file. Folding them into
 * CORPUS.lock.json would change its fingerprint, and that fingerprint is
 * already quoted as the identifier of corpus v1.0.
 */
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const stages = process.argv.includes('--stages');
const LOCK = stages
  ? path.join(ROOT, 'dataset/01_obfuscated/STAGES.lock.json')
  : path.join(ROOT, 'CORPUS.lock.json');
const write = process.argv.includes('--write');

const sha256 = (buf) => crypto.createHash('sha256').update(buf).digest('hex');
const read = (p) => fs.readFileSync(path.join(ROOT, p));

const corpusSrc = JSON.parse(read('dataset/00_raw/SOURCES.json'));
const testSrc = stages ? [] : JSON.parse(read('tests/SOURCES.json'));
const conditions = stages
  ? Object.keys(JSON.parse(read('dataset/01_obfuscated/CONDITIONS.json'))).sort()
  : [];

const corpus = (stages
  ? conditions.flatMap((c) => corpusSrc.map((r) => ({ ...r, stage: c })))
  : corpusSrc
).map((r) => ({
  stage: r.stage,
  id: r.id,
  package: `${r.npm_package}@${r.npm_version}`,
  entry: r.entry_path,
  category: r.category,
  bytes: r.bytes,
  sha256: sha256(read(r.stage ? `dataset/01_obfuscated/${r.stage}/${r.id}.js` : `dataset/00_raw/${r.id}.js`)),
})).sort((a, b) => `${a.stage || ''}${a.id}`.localeCompare(`${b.stage || ''}${b.id}`));

const tests = testSrc.map((r) => ({
  id: r.id,
  source: r.test_source,
  pin: r.pin,
  ref: r.ref_name,
  files: r.files.map((f) => ({ path: f.path, sha256: sha256(read(`tests/upstream/${r.id}/${f.path}`)) }))
    .sort((a, b) => a.path.localeCompare(b.path)),
})).sort((a, b) => a.id.localeCompare(b.id));

// One line per artefact, in a fixed order, hashed. Anything that changes a byte
// of the corpus or of a vendored test changes this.
const canonical = [
  // The stage name is only present in stages mode. Adding it unconditionally
  // changed the ground-truth fingerprint away from the published ff4a5551,
  // which the verifier immediately caught -- exactly its job.
  ...corpus.map((c) => `corpus ${c.stage ? `${c.stage} ` : ''}${c.id} ${c.package} ${c.sha256}`),
  ...tests.flatMap((t) => t.files.map((f) => `test ${t.id} ${f.path} ${f.sha256}`)),
].join('\n');
const fingerprint = sha256(Buffer.from(canonical, 'utf8'));

if (write) {
  const lock = {
    version: stages ? 'stages-1.0' : '1.0',
    frozen: new Date().toISOString().slice(0, 10),
    note: stages
      ? 'Obfuscated stages frozen. Produced by obfuscate_dataset.js from corpus '
        + 'v1.0 with a fixed seed; see dataset/01_obfuscated/CONDITIONS.json for '
        + 'the exact options. Re-run tools/freeze.js --stages to confirm.'
      : 'Corpus and oracle frozen for the experimental runs. Re-run '
        + 'tools/freeze.js to confirm a later checkout is the same artefact.',
    fingerprint,
    counts: {
      functions: corpus.length,
      byCategory: corpus.reduce((a, c) => ({ ...a, [c.category]: (a[c.category] || 0) + 1 }), {}),
      conditions: stages ? conditions : undefined,
      corpusBytes: corpus.reduce((a, c) => a + c.bytes, 0),
      vendoredTestFiles: tests.reduce((a, t) => a + t.files.length, 0),
    },
    environment: { node: process.version, jest: require(path.join(ROOT, 'package.json')).devDependencies.jest },
    corpus,
    tests,
  };
  fs.writeFileSync(LOCK, `${JSON.stringify(lock, null, 2)}\n`);
  console.log(`[+] frozen as v${lock.version} (${lock.frozen})`);
  console.log(`    fingerprint ${fingerprint}`);
  console.log(`    ${corpus.length} functions, ${lock.counts.vendoredTestFiles} vendored test files`);
  console.log(`    -> ${path.relative(ROOT, LOCK)}`);
  process.exit(0);
}

if (!fs.existsSync(LOCK)) {
  console.error(`[X] no ${path.basename(LOCK)}; run: node tools/freeze.js${stages ? ' --stages' : ''} --write`);
  process.exit(1);
}
const lock = JSON.parse(fs.readFileSync(LOCK, 'utf8'));
const drift = [];

if (lock.fingerprint !== fingerprint) {
  const was = Object.fromEntries(lock.corpus.map((c) => [c.id, c.sha256]));
  for (const c of corpus) {
    if (!(c.id in was)) drift.push(`corpus ${c.id}: not in the frozen set`);
    else if (was[c.id] !== c.sha256) drift.push(`corpus ${c.id}: content changed`);
  }
  for (const id of Object.keys(was)) if (!corpus.some((c) => c.id === id)) drift.push(`corpus ${id}: missing`);

  const twas = Object.fromEntries(lock.tests.flatMap((t) => t.files.map((f) => [`${t.id}/${f.path}`, f.sha256])));
  const tnow = Object.fromEntries(tests.flatMap((t) => t.files.map((f) => [`${t.id}/${f.path}`, f.sha256])));
  for (const k of Object.keys(tnow)) {
    if (!(k in twas)) drift.push(`test ${k}: not in the frozen set`);
    else if (twas[k] !== tnow[k]) drift.push(`test ${k}: content changed`);
  }
  for (const k of Object.keys(twas)) if (!(k in tnow)) drift.push(`test ${k}: missing`);
}

console.log(`frozen      v${lock.version} (${lock.frozen})`);
console.log(`expected    ${lock.fingerprint}`);
console.log(`actual      ${fingerprint}`);
for (const d of drift.slice(0, 20)) console.log(`  [X] ${d}`);
if (drift.length > 20) console.log(`  ... and ${drift.length - 20} more`);
console.log(`\n[${drift.length === 0 && lock.fingerprint === fingerprint ? 'PASS' : 'FAIL'}] corpus and oracle match the frozen artefact`);
process.exit(drift.length === 0 && lock.fingerprint === fingerprint ? 0 : 1);
