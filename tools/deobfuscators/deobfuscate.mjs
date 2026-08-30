/**
 * deobfuscate.mjs -- run an AST deobfuscator over every obfuscated stage.
 *
 * Runs on Node 22+ because webcrack and restringer require it; the corpus and
 * its tests are frozen on Node 18.12.1 and are NOT moved. That split is safe
 * because a deobfuscator only rewrites a file — where the rewrite happened does
 * not affect how the result is scored.
 *
 * Each file is handled in its own child process. Deobfuscators execute parts of
 * the input to evaluate string decoders (webcrack depends on isolated-vm for
 * exactly this), so hostile or merely pathological input can hang them. One
 * hung file must cost one file, not the run.
 *
 *   node deobfuscate.mjs webcrack              all stages
 *   node deobfuscate.mjs webcrack high         one stage
 *
 * Writes dataset/02_deobfuscated/<tool>/<stage>/func_*.js and a RESULTS.json
 * recording, per file, whether the tool produced output and how long it took.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const STAGES_DIR = path.join(ROOT, 'dataset/01_obfuscated');
const OUT_ROOT = path.join(ROOT, 'dataset/02_deobfuscated');

const TIMEOUT_MS = 120_000;
const JOBS = 4;

const [tool = 'webcrack', ...only] = process.argv.slice(2);
const stages = ['identity', 'low', 'medium', 'high'].filter((s) => !only.length || only.includes(s));

/** One file, one child process, so a hang is contained. */
function runOne(tool, inFile, outFile) {
  return new Promise((resolve) => {
    const started = Date.now();
    const child = spawn(process.execPath, [path.join(HERE, 'worker.mjs'), tool, inFile, outFile], { cwd: HERE });
    let err = '';
    const timer = setTimeout(() => { child.kill('SIGKILL'); resolve({ ok: false, why: 'timeout', ms: Date.now() - started }); }, TIMEOUT_MS);
    child.stderr.on('data', (d) => { err += d; });
    child.on('close', (code) => {
      clearTimeout(timer);
      resolve(code === 0
        ? { ok: true, ms: Date.now() - started }
        : { ok: false, why: err.split('\n')[0].slice(0, 120) || `exit ${code}`, ms: Date.now() - started });
    });
  });
}

const summary = {};

for (const stage of stages) {
  const inDir = path.join(STAGES_DIR, stage);
  const outDir = path.join(OUT_ROOT, tool, stage);
  fs.mkdirSync(outDir, { recursive: true });
  const files = fs.readdirSync(inDir).filter((f) => /^func_\d{2}_.+\.js$/.test(f)).sort();

  const results = [];
  let next = 0;
  await Promise.all(Array.from({ length: JOBS }, async () => {
    while (next < files.length) {
      const f = files[next++];
      const r = await runOne(tool, path.join(inDir, f), path.join(outDir, f));
      results.push({ file: f, ...r });
      if (!r.ok) console.log(`    [X] ${stage}/${f}: ${r.why}`);
    }
  }));

  results.sort((a, b) => a.file.localeCompare(b.file));
  const ok = results.filter((r) => r.ok).length;
  const bytes = results.filter((r) => r.ok)
    .reduce((a, r) => a + fs.statSync(path.join(outDir, r.file)).size, 0);
  const inBytes = files.reduce((a, f) => a + fs.statSync(path.join(inDir, f)).size, 0);
  summary[stage] = { tool, produced: ok, of: files.length, inBytes, outBytes: bytes, ratio: Number((bytes / inBytes).toFixed(2)), results };

  console.log(`[+] ${tool}/${stage.padEnd(9)} ${ok}/${files.length} produced  `
    + `${(inBytes / 1024).toFixed(0)} KB -> ${(bytes / 1024).toFixed(0)} KB (${(bytes / inBytes).toFixed(2)}x)  `
    + `slowest ${(Math.max(...results.map((r) => r.ms)) / 1000).toFixed(1)}s`);
}

const outPath = path.join(OUT_ROOT, tool, 'RESULTS.json');
const prev = fs.existsSync(outPath) ? JSON.parse(fs.readFileSync(outPath, 'utf8')) : {};
fs.writeFileSync(outPath, `${JSON.stringify({ ...prev, ...summary }, null, 2)}\n`);
console.log(`\nrecorded -> ${path.relative(ROOT, outPath)}`);
console.log('now score each stage on the frozen runtime (Node 18):');
for (const s of stages) console.log(`  TARGET_DIR=dataset/02_deobfuscated/${tool}/${s} npm run score`);
