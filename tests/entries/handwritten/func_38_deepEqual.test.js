/**
 * func_38_deepEqual -- official upstream suite of fast-deep-equal@3.1.3.
 *
 * HAND-WRITTEN ENTRY (see docs/TESTS.md §4.3). The CASES are upstream's,
 * byte-identical: spec/tests.js is required as-is. Only the driver is rewritten,
 * because upstream's spec/index.spec.js runs the same cases against FOUR
 * published builds -- index.js, react.js, es6/index.js, es6/react.js -- and the
 * corpus contains one file, index.js. Pointing the es6 builds at it would fail
 * on Map/Set cases only that build claims to support, scoring a build difference
 * as a semantic failure.
 *
 * Below is upstream's own testCases() with the three inapplicable build
 * combinations dropped; assertions and case data are unchanged.
 */
const assert = require('assert');
const loadTarget = require('../../runner/load-target');

const equal = loadTarget('func_38_deepEqual');
const suiteTests = require('../../upstream/func_38_deepEqual/spec/tests.js');

describe('equal - standard tests', () => {
  suiteTests.forEach((suite) => {
    describe(suite.description, () => {
      suite.tests.forEach((test) => {
        (test.skip ? it.skip : it)(test.description, () => {
          assert.strictEqual(equal(test.value1, test.value2), test.equal);
        });
        (test.skip ? it.skip : it)(`${test.description} (reverse arguments)`, () => {
          assert.strictEqual(equal(test.value2, test.value1), test.equal);
        });
      });
    });
  });
});
