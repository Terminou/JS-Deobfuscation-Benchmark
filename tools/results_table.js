/**
 * results_table.js -- collect every scored stage into one table.
 *
 * Reads the per-run JSON that score_stage.js writes with --json, so the table
 * is assembled from recorded runs rather than re-executed here. Also breaks the
 * results down by corpus category, because a tool that only fails on crypto is
 * telling you something a single average hides.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const RUNS = path.join(ROOT, 'results/runs');
const category = Object.fromEntries(
  JSON.parse(fs.readFileSync(path.join(ROOT, 'dataset/00_raw/SOURCES.json'), 'utf8'))
    .map((r) => [r.id, r.category])
);

if (!fs.existsSync(RUNS)) { console.error(`no runs in ${path.relative(ROOT, RUNS)}`); process.exit(1); }
const runs = fs.readdirSync(RUNS).filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(fs.readFileSync(path.join(RUNS, f), 'utf8')));

const key = (r) => r.target.replace('dataset/02_deobfuscated/', '').replace('dataset/01_obfuscated/', 'NONE/');
const tools = [...new Set(runs.map((r) => key(r).split('/')[0]))].sort();
const stages = ['identity', 'low', 'medium', 'high'];

const pct = (rs) => `${(100 * rs.filter((x) => x.outcome === 'pass').length / rs.length).toFixed(0)}%`;

console.log('PASS RATE (dosya basina ikili)\n');
console.log('tool'.padEnd(30) + stages.map((s) => s.padStart(10)).join(''));
console.log('-'.repeat(30 + 10 * stages.length));
for (const t of tools) {
  const row = stages.map((s) => {
    const run = runs.find((r) => key(r) === `${t}/${s}`);
    return (run ? pct(run.results) : '-').padStart(10);
  });
  console.log(t.padEnd(30) + row.join(''));
}

console.log('\n\nKATEGORIYE GORE (yalnizca high)\n');
const cats = ['algorithms', 'validation', 'collections', 'crypto'];
console.log('tool'.padEnd(30) + cats.map((c) => c.slice(0, 11).padStart(13)).join(''));
console.log('-'.repeat(30 + 13 * cats.length));
for (const t of tools) {
  const run = runs.find((r) => key(r) === `${t}/high`);
  if (!run) continue;
  const row = cats.map((c) => {
    const rs = run.results.filter((x) => category[x.id] === c);
    return (rs.length ? `${rs.filter((x) => x.outcome === 'pass').length}/${rs.length}` : '-').padStart(13);
  });
  console.log(t.padEnd(30) + row.join(''));
}

console.log('\n\nSONUC TURLERI (high)\n');
console.log('tool'.padEnd(30) + ['pass', 'fail', 'load-error', 'timeout'].map((o) => o.padStart(12)).join(''));
console.log('-'.repeat(30 + 48));
for (const t of tools) {
  const run = runs.find((r) => key(r) === `${t}/high`);
  if (!run) continue;
  const row = ['pass', 'fail', 'load-error', 'timeout']
    .map((o) => String(run.results.filter((x) => x.outcome === o).length).padStart(12));
  console.log(t.padEnd(30) + row.join(''));
}
