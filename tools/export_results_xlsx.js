/**
 * export_results_xlsx.js -- write all scored runs to an Excel workbook.
 *
 *   node tools/export_results_xlsx.js
 *   node tools/export_results_xlsx.js --runs results/runs_v2 --out results/all_test_results.xlsx
 */
const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const ROOT = path.resolve(__dirname, '..');
const argv = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = argv.indexOf(`--${name}`);
  return i === -1 ? fallback : argv[i + 1];
};

const RUNS_DIR = path.resolve(ROOT, opt('runs', 'results/runs_v2'));
const OUT = path.resolve(ROOT, opt('out', 'results/all_test_results.xlsx'));

const corpus = JSON.parse(fs.readFileSync(path.join(ROOT, 'dataset/00_raw/SOURCES.json'), 'utf8'));
const meta = Object.fromEntries(corpus.map((r) => [r.id, r]));

const strength = {};
const strengthPath = path.join(ROOT, 'tools/oracle-strength-report.jsonl');
if (fs.existsSync(strengthPath)) {
  const acc = {};
  for (const line of fs.readFileSync(strengthPath, 'utf8').split('\n').filter(Boolean)) {
    const r = JSON.parse(line);
    if (r.verdict === 'no-mutant') continue;
    acc[r.id] = acc[r.id] || [0, 0];
    acc[r.id][1] += 1;
    if (r.verdict !== 'SURVIVED') acc[r.id][0] += 1;
  }
  for (const [id, [k, n]] of Object.entries(acc)) strength[id] = Math.round((100 * k) / n);
}

if (!fs.existsSync(RUNS_DIR)) {
  console.error(`no runs directory: ${RUNS_DIR}`);
  process.exit(1);
}

const runFiles = fs.readdirSync(RUNS_DIR).filter((f) => f.endsWith('.json')).sort();
const runs = runFiles.map((f) => {
  const data = JSON.parse(fs.readFileSync(path.join(RUNS_DIR, f), 'utf8'));
  const base = f.replace(/\.json$/, '');
  const sep = base.lastIndexOf('__');
  return {
    file: f,
    tool: base.slice(0, sep),
    stage: base.slice(sep + 2),
    ...data,
  };
});

const stages = ['identity', 'low', 'medium', 'high'];
const tools = [...new Set(runs.map((r) => r.tool))].sort();
const ids = corpus.map((r) => r.id).sort();

// --- Sheet 1: every scored file -------------------------------------------
const detailRows = [];
for (const run of runs) {
  for (const r of run.results) {
    const m = meta[r.id] || {};
    detailRows.push({
      tool: run.tool,
      stage: run.stage,
      target_dir: run.target,
      function_id: r.id,
      function_index: m.index ?? '',
      category: m.category ?? '',
      npm_package: m.npm_package ?? '',
      npm_version: m.npm_version ?? '',
      outcome: r.outcome,
      passed: r.outcome === 'pass' ? 'Y' : 'N',
      duration_ms: r.ms,
      duration_s: Number((r.ms / 1000).toFixed(2)),
      test_blocks: r.tests,
      scoring_timeout_s: run.timeoutMs / 1000,
      oracle_strength_pct: strength[r.id] ?? '',
      raw_corpus_bytes: m.bytes ?? '',
    });
  }
}
detailRows.sort((a, b) =>
  a.tool.localeCompare(b.tool)
  || stages.indexOf(a.stage) - stages.indexOf(b.stage)
  || a.function_id.localeCompare(b.function_id));

// --- Sheet 2: summary pass rate --------------------------------------------
const summaryRows = [{ note: 'Per-file binary Pass Rate. Source: score_stage.js outcomes.' }];
for (const tool of tools) {
  const row = { tool };
  for (const stage of stages) {
    const run = runs.find((r) => r.tool === tool && r.stage === stage);
    if (!run) { row[stage] = ''; continue; }
    const pass = run.results.filter((x) => x.outcome === 'pass').length;
    row[stage] = `${pass}/50 (${(100 * pass / 50).toFixed(0)}%)`;
  }
  summaryRows.push(row);
}

// --- Sheet 3: outcome counts at high ---------------------------------------
const outcomeRows = [{ note: 'Outcome breakdown at the high obfuscation stage.' }];
for (const tool of tools) {
  const run = runs.find((r) => r.tool === tool && r.stage === 'high');
  if (!run) continue;
  const row = { tool };
  for (const o of ['pass', 'fail', 'load-error', 'timeout']) {
    row[o] = run.results.filter((x) => x.outcome === o).length;
  }
  row.pass_rate = `${run.results.filter((x) => x.outcome === 'pass').length}/50`;
  outcomeRows.push(row);
}

// --- Sheet 4: by category at high ------------------------------------------
const cats = ['algorithms', 'validation', 'collections', 'crypto'];
const catRows = [{ note: 'Passes per category at high (e.g. 14/15).' }];
for (const tool of tools) {
  const run = runs.find((r) => r.tool === tool && r.stage === 'high');
  if (!run) continue;
  const row = { tool };
  for (const c of cats) {
    const rs = run.results.filter((x) => meta[x.id]?.category === c);
    const pass = rs.filter((x) => x.outcome === 'pass').length;
    row[c] = rs.length ? `${pass}/${rs.length}` : '';
  }
  catRows.push(row);
}

// --- Sheet 5: per-function matrix (high) -----------------------------------
const matrixHeader = { function_id: 'function_id', category: 'category', npm_package: 'package' };
for (const tool of tools) matrixHeader[`${tool}__high`] = `${tool} (high)`;
const matrixRows = ids.map((id) => {
  const m = meta[id];
  const row = {
    function_id: id,
    category: m.category,
    npm_package: `${m.npm_package}@${m.npm_version}`,
    oracle_strength_pct: strength[id] ?? '',
  };
  for (const tool of tools) {
    const run = runs.find((r) => r.tool === tool && r.stage === 'high');
    const hit = run?.results.find((x) => x.id === id);
    row[`${tool}__high`] = hit?.outcome ?? '';
  }
  return row;
});

// --- Sheet 6: failures only ------------------------------------------------
const failureRows = detailRows
  .filter((r) => r.passed === 'N')
  .map((r) => ({
    tool: r.tool,
    stage: r.stage,
    function_id: r.function_id,
    category: r.category,
    outcome: r.outcome,
    duration_s: r.duration_s,
    test_blocks: r.test_blocks,
    oracle_strength_pct: r.oracle_strength_pct,
  }));

// --- Sheet 7: metadata -----------------------------------------------------
const infoRows = [
  { field: 'generated_at', value: new Date().toISOString() },
  { field: 'corpus_fingerprint', value: 'ff4a5551e43cfd6e9576a0d3134810616175a93f2af9930eaed45d2c85523484' },
  { field: 'obfuscation_stages_fingerprint', value: 'd90486d1eaa23fa4f7107cdbeb8218b49b3b7a48603a40616a9139ca4e8c0fa4' },
  { field: 'obfuscator', value: 'javascript-obfuscator@5.6.0' },
  { field: 'scoring_runtime', value: 'Node 18.12.1' },
  { field: 'deobfuscation_runtime', value: 'Node 22+ (tools/deobfuscators/)' },
  { field: 'runs_directory', value: path.relative(ROOT, RUNS_DIR) },
  { field: 'run_files', value: runFiles.join(', ') },
  { field: 'scoring_timeout_s', value: String(runs[0]?.timeoutMs / 1000 ?? '') },
  { field: 'outcome_definitions', value: 'pass=tests green; fail=assertions failed; load-error=did not parse/load; timeout=killed at limit' },
  { field: 'notes', value: 'runs_v2 used serial scoring (--jobs 2, 1800s). See results/ast_baselines.md.' },
];

const wb = XLSX.utils.book_new();
const add = (name, rows) => XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(rows), name);

add('All Results', detailRows);
add('Summary', summaryRows);
add('Outcomes (high)', outcomeRows);
add('By Category (high)', catRows);
add('Per Function (high)', matrixRows);
add('Failures Only', failureRows);
add('Metadata', infoRows);

fs.mkdirSync(path.dirname(OUT), { recursive: true });
XLSX.writeFile(wb, OUT);

console.log(`wrote ${path.relative(ROOT, OUT)}`);
console.log(`  ${detailRows.length} result rows (${tools.length} tools x ${stages.length} stages x 50 files)`);
console.log(`  ${failureRows.length} non-pass rows`);
