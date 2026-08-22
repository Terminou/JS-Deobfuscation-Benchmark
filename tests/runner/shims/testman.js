/**
 * testman -> Jest.  natural-compare (func_06) only.
 *
 * testman is a fluent chain: describe(x).it(y).equal(a, b).equal(...).done().
 * The chain's arguments are evaluated eagerly -- the module under test has
 * already run by the time .equal() is reached -- so the shim records the
 * computed operands and replays the COMPARISONS inside a Jest test. That keeps
 * the call sequence identical to upstream while letting Jest own reporting.
 *
 * Upstream's .done() calls process.exit(); here it just flushes registration.
 */
const assert = require('assert');

function create() {
  let suite = 'testman';
  let current = null;
  const cases = [];

  const api = {
    describe(name) { suite = name; return api; },
    it(name) { current = { name, checks: [] }; cases.push(current); return api; },
    // .run(fn) mutates state the following assertions depend on (natural-compare
    // sets String.alphabet this way), so it must fire immediately, as upstream's
    // eager chain does.
    run(fn) { fn(); return api; },
    equal(a, b, m) { current.checks.push(() => assert.strictEqual(a, b, m)); return api; },
    notEqual(a, b, m) { current.checks.push(() => assert.notStrictEqual(a, b, m)); return api; },
    deepEqual(a, b, m) { current.checks.push(() => assert.deepStrictEqual(a, b, m)); return api; },
    ok(v, m) { current.checks.push(() => assert.ok(v, m)); return api; },
    done() {
      global.describe(suite, () => {
        for (const c of cases) global.it(c.name, () => c.checks.forEach((fn) => fn()));
      });
      return api;
    },
  };
  return api;
}

module.exports = create();
