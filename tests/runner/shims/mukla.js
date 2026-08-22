/**
 * mukla -> Jest.  hex-color-regex (func_29) only.
 *
 * mukla nests test() blocks arbitrarily deep and puts its assertions
 * (test.equal) in the leaves rather than in a registered test body. Jest cannot
 * register a test from inside a running test, so the outermost block becomes
 * one Jest test and every nested block runs inline within it. Granularity is
 * lost; the assertions -- which are what the oracle is -- are unchanged.
 */
const assert = require('assert');

let inside = false;

function test(title, fn) {
  if (typeof fn !== 'function') return test;
  if (inside) {
    fn();
    return test;
  }
  global.it(title, () => {
    inside = true;
    try { fn(); } finally { inside = false; }
  });
  return test;
}

test.equal = (a, b, m) => assert.strictEqual(a, b, m);
test.notEqual = (a, b, m) => assert.notStrictEqual(a, b, m);
test.deepEqual = (a, b, m) => assert.deepStrictEqual(a, b, m);
test.ok = (v, m) => assert.ok(v, m);
test.strictEqual = test.equal;
test.throws = (fn, m) => assert.throws(fn, m);
test.ifError = (e) => assert.ifError(e);

module.exports = test;
