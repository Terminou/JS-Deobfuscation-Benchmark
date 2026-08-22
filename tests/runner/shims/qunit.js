/**
 * QUnit -> Jest, for the two lodash suites (func_31, func_32).
 *
 * lodash ships ONE 806 KB test/test.js covering every method; the per-method
 * blocks it contains are the official tests for the standalone lodash.compact /
 * lodash.chunk packages. tests/harness/lodash_block.js slices the relevant
 * QUnit.module out of the vendored file and evaluates it against this shim.
 */
function makeAssert() {
  return {
    expect: () => {},          // assertion counting is QUnit bookkeeping, not an oracle
    deepEqual: (a, b, m) => expect(a).toEqual(b),
    notDeepEqual: (a, b, m) => expect(a).not.toEqual(b),
    strictEqual: (a, b, m) => expect(a).toBe(b),
    notStrictEqual: (a, b, m) => expect(a).not.toBe(b),
    equal: (a, b, m) => expect(a == b).toBe(true),      // eslint-disable-line eqeqeq
    notEqual: (a, b, m) => expect(a != b).toBe(true),   // eslint-disable-line eqeqeq
    ok: (v, m) => expect(Boolean(v)).toBe(true),
    notOk: (v, m) => expect(Boolean(v)).toBe(false),
    raises: (fn) => expect(fn).toThrow(),
    throws: (fn) => expect(fn).toThrow(),
    push: () => {},
  };
}

const QUnit = {
  module: (name) => { QUnit._current = name; },
  test: (name, fn) => {
    const suite = QUnit._current || 'qunit';
    global.test(`${suite} :: ${name}`, () => fn(makeAssert()));
  },
  skip: (name, fn) => global.test.skip(`${QUnit._current} :: ${name}`, () => {}),
  assert: makeAssert(),
  config: { asyncRetries: 0 },
  _current: null,
};

module.exports = QUnit;
module.exports.makeAssert = makeAssert;
