/**
 * obfuscate_dataset.js -- produce the obfuscated stages from the frozen corpus.
 *
 * The obfuscator is an instrument here, not a variable of interest: the paper
 * compares AST-based deobfuscators against LLMs, and this only has to supply
 * the material. So there is ONE obfuscator, and its own documented presets are
 * used rather than hand-rolled configurations -- "why these levels?" is then
 * answered by the tool's documentation instead of by our judgement.
 *
 *   node obfuscate_dataset.js                 all conditions
 *   node obfuscate_dataset.js identity low    a subset
 *
 * Writes dataset/01_obfuscated/<condition>/func_*.js plus CONDITIONS.json,
 * which records the exact options used -- that file is the paper's appendix.
 *
 * Every condition must then clear the gate before it is used:
 *   TARGET_DIR=dataset/01_obfuscated/<condition> npm run score    -> 50/50
 */
const fs = require('fs');
const path = require('path');
const JsObfuscator = require('javascript-obfuscator');

const ROOT = __dirname;
const RAW = path.join(ROOT, 'dataset/00_raw');
const OUT = path.join(ROOT, 'dataset/01_obfuscated');
const VERSION = require('javascript-obfuscator/package.json').version;

// Fixed, or the obfuscator randomises names on every run and nothing downstream
// is reproducible -- which would make freezing the corpus pointless.
const SEED = 20260824;

/**
 * Applied to every condition, including the tool's own presets.
 *
 * `target: 'node'` -- the presets ship 'browser', but the corpus is CommonJS
 * Node modules; the wrong target can emit browser-only code and the failure
 * would look like a deobfuscation failure.
 *
 * The three disabled options are ANTI-TAMPERING features, not comprehension
 * barriers, and each corrupts the measurement:
 *   selfDefending       -- reformatted code enters an infinite loop, so the
 *                          js-beautify baseline would hang on every file and
 *                          score self-protection rather than formatting.
 *                          (verified: beautified high-preset output never
 *                          terminates; with this off it runs fine)
 *   debugProtection     -- injects a `debugger` loop on a 4 s interval, which
 *                          shows up as a timeout rather than a real failure
 *   disableConsoleOutput-- replaces the console methods, suppressing test output
 */
const COMMON = {
  seed: SEED,
  target: 'node',
  selfDefending: false,
  debugProtection: false,
  disableConsoleOutput: false,
};

/** Everything off: a parse-and-reprint, plus minification. Not obfuscation --
 *  this is the pipeline's sanity check and every tool should score 100 % on it. */
const IDENTITY = {
  compact: true,
  controlFlowFlattening: false,
  deadCodeInjection: false,
  numbersToExpressions: false,
  simplify: false,
  splitStrings: false,
  stringArray: false,
  transformObjectKeys: false,
  renameGlobals: false,
  renameProperties: false,
  unicodeEscapeSequence: false,
};

const CONDITIONS = {
  identity: { ...IDENTITY, ...COMMON },
  low: { ...JsObfuscator.getOptionsByPreset('low-obfuscation'), ...COMMON },
  medium: { ...JsObfuscator.getOptionsByPreset('medium-obfuscation'), ...COMMON },
  high: { ...JsObfuscator.getOptionsByPreset('high-obfuscation'), ...COMMON },
};

const wanted = process.argv.slice(2).filter((a) => a in CONDITIONS);
const run = wanted.length ? wanted : Object.keys(CONDITIONS);

const files = fs.readdirSync(RAW).filter((f) => /^func_\d{2}_.+\.js$/.test(f)).sort();
const record = {};

for (const condition of run) {
  const dir = path.join(OUT, condition);
  fs.mkdirSync(dir, { recursive: true });
  const stats = [];

  for (const file of files) {
    const source = fs.readFileSync(path.join(RAW, file), 'utf8');
    let code;
    try {
      code = JsObfuscator.obfuscate(source, CONDITIONS[condition]).getObfuscatedCode();
    } catch (err) {
      console.error(`[X] ${condition}/${file}: ${err.message.split('\n')[0]}`);
      continue;
    }
    fs.writeFileSync(path.join(dir, file), code);
    stats.push({ file, from: source.length, to: code.length, x: code.length / source.length });
  }

  const from = stats.reduce((a, s) => a + s.from, 0);
  const to = stats.reduce((a, s) => a + s.to, 0);
  const worst = stats.slice().sort((a, b) => b.to - a.to)[0];
  record[condition] = {
    obfuscator: `javascript-obfuscator@${VERSION}`,
    seed: SEED,
    files: stats.length,
    totalBytesRaw: from,
    totalBytes: to,
    inflation: Number((to / from).toFixed(2)),
    largestFile: worst && { file: worst.file, bytes: worst.to, x: Number(worst.x.toFixed(1)) },
    options: CONDITIONS[condition],
  };

  console.log(
    `[+] ${condition.padEnd(9)} ${String(stats.length).padStart(2)} files  `
    + `${(to / 1024).toFixed(0).padStart(5)} KB  ${(to / from).toFixed(2)}x  `
    + `largest ${worst ? `${worst.file} ${(worst.to / 1024).toFixed(0)} KB (${worst.x.toFixed(1)}x)` : '-'}`
  );
}

const provPath = path.join(OUT, 'CONDITIONS.json');
const existing = fs.existsSync(provPath) ? JSON.parse(fs.readFileSync(provPath, 'utf8')) : {};
fs.writeFileSync(provPath, `${JSON.stringify({ ...existing, ...record }, null, 2)}\n`);

console.log(`\noptions recorded -> ${path.relative(ROOT, provPath)}`);
console.log('gate each condition before use:');
for (const c of run) console.log(`  TARGET_DIR=dataset/01_obfuscated/${c} npm run score`);
