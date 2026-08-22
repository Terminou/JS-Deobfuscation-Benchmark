/**
 * Make should.js's PROPERTY form actually assert.
 *
 * luhn's official suite is written as
 *
 *     luhn.validate(number).should.be.true;      // note: no call
 *
 * In should.js v13 `.true` is a METHOD, so the property form evaluates a getter
 * chain and asserts nothing. All 26 such assertions in that suite are dead: the
 * corpus file can return the wrong answer for every credit-card number and the
 * suite still reports 36 passing tests. Verified by mutating luhn's
 * `(total % 10) === 0` to `=== 1` -- untouched, the suite stayed green.
 *
 * This is an upstream defect, not a harness one, but leaving it in place would
 * put a false PASS into Pass Rate -- the one direction this benchmark must never
 * err in. So each boolean-ish assertion is redefined as a getter that performs
 * the assertion on access and returns a callable, keeping the `.true()` call
 * form working. The vendored file is not touched.
 */
const should = require('should');

const PROPERTY_FORM = [
  'true', 'false', 'ok', 'empty', 'null', 'undefined', 'NaN', 'Infinity',
  'Array', 'Object', 'String', 'Number', 'Boolean', 'Function', 'Error',
];

const proto = should.Assertion.prototype;

for (const name of PROPERTY_FORM) {
  const original = proto[name];
  if (typeof original !== 'function') continue;

  Object.defineProperty(proto, name, {
    configurable: true,
    get() {
      const self = this;
      // Property form: assert now.
      original.call(self);
      // Call form: `.true()` still works, and asserting twice is harmless.
      const callable = (...args) => original.apply(self, args);
      callable.should = self;
      return callable;
    },
  });
}

module.exports = should;
