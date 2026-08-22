/**
 * verify_dataset.js -- authoritative CommonJS loadability gate.
 *
 * Every stage of the pipeline (00_raw, 01_obfuscated/level_N,
 * 02_deobfuscated/<model>_<strategy>) must clear this before the Jest suite is
 * allowed to run against it. A file that does not `require()` cannot produce a
 * meaningful pass rate -- it would be scored as a semantic failure when it is
 * really a harness failure, which is exactly the confound the Ground Truth Rule
 * in Section 4 exists to prevent.
 *
 *   node tools/verify_dataset.js                       # defaults to dataset/00_raw
 *   TARGET_DIR=dataset/01_obfuscated/level_3 node tools/verify_dataset.js
 */
const fs = require('fs');
const path = require('path');

const targetDir = process.env.TARGET_DIR || 'dataset/00_raw';
const absDir = path.resolve(__dirname, '..', targetDir);

if (!fs.existsSync(absDir)) {
  console.error(`[X] target directory does not exist: ${absDir}`);
  process.exit(1);
}

const files = fs
  .readdirSync(absDir)
  .filter((f) => /^func_\d{2}_.+\.js$/.test(f))
  .sort();

if (files.length === 0) {
  console.error(`[X] no func_NN_*.js files found in ${targetDir}`);
  process.exit(1);
}

const results = [];

for (const file of files) {
  const abs = path.join(absDir, file);
  const record = { file, ok: false, shape: '', detail: '' };
  try {
    // Fresh load each time so one module's cached state cannot mask another's failure.
    delete require.cache[require.resolve(abs)];
    const mod = require(abs);
    const resolved = mod && mod.default ? mod.default : mod;
    const type = typeof resolved;

    if (type === 'function') {
      record.shape = `function/${resolved.length}`;
    } else if (type === 'object' && resolved !== null) {
      const keys = Object.keys(resolved);
      const callable = keys.filter((k) => typeof resolved[k] === 'function');
      record.shape = `object/${keys.length}k/${callable.length}fn`;
      if (callable.length === 0) {
        record.detail = 'exports no callable member';
      }
    } else {
      record.shape = type;
      record.detail = 'export is neither function nor object';
    }
    record.ok = record.detail === '';
  } catch (err) {
    record.detail = `${err.name}: ${String(err.message).split('\n')[0]}`;
  }
  results.push(record);
}

const failed = results.filter((r) => !r.ok);

for (const r of results) {
  const flag = r.ok ? '[+]' : '[X]';
  console.log(`${flag} ${r.file.padEnd(30)} ${r.shape.padEnd(20)} ${r.detail}`);
}

console.log(
  `\n[${failed.length === 0 ? 'PASS' : 'FAIL'}] ${results.length - failed.length}/${results.length} ` +
    `modules load as CommonJS from ${targetDir}`
);

if (failed.length > 0) {
  process.exit(1);
}
