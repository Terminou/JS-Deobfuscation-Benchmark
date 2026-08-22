/**
 * dead_assertions.js -- find assertions that cannot fail.
 *
 * Some assertion libraries expose a check as a METHOD, so writing it as a bare
 * property evaluates a getter chain and asserts nothing. luhn's official suite
 * is written entirely that way:
 *
 *     luhn.validate(number).should.be.true;     // no call -- asserts nothing
 *
 * All 26 of its assertions were dead. The corpus file could return the wrong
 * answer for every credit-card number and the suite still reported 36 passes.
 * Mutation testing eventually finds this, but a run takes minutes; this scan
 * takes a second and says exactly which line is at fault.
 *
 * chai is deliberately not flagged: there `.to.be.true` IS an asserting getter.
 *
 *   node tools/check_dead_assertions.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const prov = JSON.parse(fs.readFileSync(path.join(ROOT, 'tests/SOURCES.json'), 'utf8'));

// library -> [detector, property-form rule, whether the harness already fixes it]
const RULES = [
  {
    lib: 'should.js',
    uses: /require\(\s*['"]should['"]|\.should\b/,
    // .should.be.true / .should.not.be.ok / .should.be.Array  -- with no call
    dead: /\.should(?:\.\w+)*?\.(true|false|ok|empty|null|undefined|NaN|Infinity|Array|Object|String|Number|Boolean|Function|Error)\s*(?![\s\S]{0,2}\()/g,
    mitigated: 'tests/runner/shims/should-strict.js makes the property form assert',
  },
  {
    lib: 'expect.js',
    uses: /require\(\s*['"]expect\.js['"]/,
    dead: /\.to(?:\.\w+)*?\.(ok|empty|throwException|throwError)\s*(?![\s\S]{0,2}\()/g,
    mitigated: null,
  },
];

let findings = 0;
let mitigated = 0;

for (const rec of prov) {
  for (const file of rec.files) {
    const abs = path.join(ROOT, 'tests/upstream', rec.id, file.path);
    if (!fs.existsSync(abs)) continue;
    const src = fs.readFileSync(abs, 'utf8');

    for (const rule of RULES) {
      if (!rule.uses.test(src)) continue;
      const hits = [...src.matchAll(rule.dead)];
      if (hits.length === 0) continue;

      const lines = hits.map((h) => src.slice(0, h.index).split('\n').length);
      const label = rule.mitigated ? 'MITIGATED' : 'DEAD';
      if (rule.mitigated) mitigated += hits.length; else findings += hits.length;

      console.log(`[${label}] ${rec.id} :: ${file.path}`);
      console.log(`          ${rule.lib}, ${hits.length} property-form assertion(s), lines ${lines.slice(0, 8).join(', ')}${lines.length > 8 ? ', …' : ''}`);
      if (rule.mitigated) console.log(`          covered by: ${rule.mitigated}`);
    }
  }
}

console.log('');
console.log(`unmitigated dead assertions : ${findings}`);
console.log(`mitigated by a harness shim : ${mitigated}`);
console.log(`\n[${findings === 0 ? 'PASS' : 'FAIL'}] no assertion is silently unable to fail`);
process.exit(findings === 0 ? 0 : 1);
