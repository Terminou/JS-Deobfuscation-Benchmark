/**
 * sanity.js -- prove the oracle is actually wired to the corpus.
 *
 * "50/50 suites pass" is worthless if a suite would pass no matter what the
 * module does -- a mis-generated stub, a shim that swallows assertions, or a
 * test that never reaches the subject would all look identical to success.
 *
 * So: build a saboteur stage where every corpus file is replaced by a no-op
 * export, point TARGET_DIR at it, and require EVERY suite to fail. Any suite
 * that still passes is a hole in the oracle, not a pass.
 *
 *   node tools/check_oracle_wiring.js
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const RAW = path.join(ROOT, 'dataset/00_raw');
const stage = fs.mkdtempSync(path.join(os.tmpdir(), 'deobf-sanity-'));

const ids = fs.readdirSync(RAW).filter((f) => /^func_\d{2}_.+\.js$/.test(f));
for (const file of ids) {
  fs.writeFileSync(path.join(stage, file), [
    '// Saboteur stand-in: exports a callable that does nothing and answers',
    '// nothing. Any suite that passes against this is not testing its subject.',
    'function noop() {}',
    'module.exports = new Proxy(noop, { get: () => noop });',
    '',
  ].join('\n'));
}

// Jest writes its PASS/FAIL reporter lines to stderr, so both streams matter.
const run = spawnSync('npx', ['jest', '--silent', '--testFailureExitCode', '0'], {
  cwd: ROOT,
  env: { ...process.env, TARGET_DIR: stage },
  encoding: 'utf8',
  maxBuffer: 256 * 1024 * 1024,
});
const out = `${run.stdout || ''}${run.stderr || ''}`;

// Jest prints each result line twice (live, then in the summary); dedupe.
const uniq = (re) => [...new Set([...out.matchAll(re)].map((m) => m[1].trim()))];
const passing = uniq(/^PASS\s+(.*)$/gm);
const failing = uniq(/^FAIL\s+(.*)$/gm);

console.log(`saboteur stage: ${stage}`);
console.log(`suites that correctly FAILED against a no-op module: ${failing.length}`);
console.log(`suites that still PASSED (oracle holes):             ${passing.length}`);
for (const p of passing) console.log(`  [HOLE] ${p}`);

fs.rmSync(stage, { recursive: true, force: true });
process.exit(passing.length === 0 ? 0 : 1);
