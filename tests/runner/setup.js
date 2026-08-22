/**
 * Jest setup shared by every official suite.
 *
 * Three accommodations, none of which touch an assertion:
 *   1. `context` -- a mocha BDD global Jest does not define (priorityqueuejs).
 *   2. `should`  -- extends Object.prototype; mersenne-twister's suite uses
 *      `value.should.be.exactly(...)` without requiring it, as mocha users do.
 *      Loaded through shims/should-strict so its property form asserts.
 *   3. Jest rejects a test body that returns a non-promise. Several upstream
 *      suites are written as `it('x', () => expect(a).to.equal(b))`, where the
 *      arrow implicitly returns a chai Assertion. Dropping that return value is
 *      a reporting concern only -- promises are still awaited.
 */
// should-strict also makes should.js's property form (`x.should.be.true`, with
// no call) actually assert -- see tests/shims/should-strict.js. Without it,
// luhn's 26 property-form assertions are dead and the suite passes a broken
// module.
require('./shims/should-strict');

// Count assertions that actually run, so the report can show something more
// meaningful than Jest's block count. See tests/runner/assertion-counter.js.
const counter = require('./assertion-counter');
counter.reset();                    // per-file tally; see assertion-counter.js
const jestExpect = global.expect;   // four suites replace global.expect with expect.js
const testPath = jestExpect.getState().testPath;
// Jest zeroes its own assertionCalls after EVERY test, so it has to be harvested
// per test rather than once at the end -- that is why the jasmine-style suites
// (is-uuid, jwt-decode, ...) previously counted zero.
afterEach(() => {
  try { counter.add(jestExpect.getState().assertionCalls || 0); } catch { /* none */ }
});
afterAll(() => counter.flush(testPath));

global.context = global.describe;

/**
 * mocha gives a test body a `this` carrying timeout()/slow()/retries(); Jest
 * gives it nothing. denque's suite calls `this.timeout(20000)`. These are
 * scheduling hints, not assertions, so honouring them as no-ops changes no
 * outcome -- jest.config.js sets the real timeout.
 */
const mochaContext = {
  timeout() { return this; },
  slow() { return this; },
  retries() { return this; },
  skip() { return this; },
};

function preserveArity(fn, original) {
  Object.defineProperty(fn, 'length', { value: original.length, configurable: true });
  return fn;
}

function ignoreNonPromiseReturn(register) {
  const wrapped = (name, fn, timeout) => {
    if (typeof fn !== 'function') return register(name, fn, timeout);
    const body = preserveArity(function (...args) {
      // Jest already binds `this` to an object, just not one with mocha's
      // methods, so the two are merged rather than one replacing the other.
      const ctx = this && typeof this === 'object'
        ? Object.assign(Object.create(this), mochaContext)
        : mochaContext;
      const result = fn.apply(ctx, args);
      return result && typeof result.then === 'function' ? result : undefined;
    }, fn);
    return register(name, body, timeout);
  };
  for (const key of Object.keys(register)) wrapped[key] = register[key];
  wrapped.only = typeof register.only === 'function' ? ignoreNonPromiseReturn(register.only) : register.only;
  wrapped.skip = register.skip;
  wrapped.todo = register.todo;
  wrapped.each = register.each;
  wrapped.failing = register.failing;
  wrapped.concurrent = register.concurrent;
  return wrapped;
}

/**
 * A suite may declare, in tests/harness/suites.js, assertions that cannot run
 * under this harness for a reason unrelated to the code under test. They are
 * turned into Jest skips here -- visible in the report, attributable to a
 * recorded reason -- rather than being deleted from the vendored file.
 */
function honourSkipList(register) {
  const wrapped = (name, fn, timeout) => {
    const skip = global.__SKIP_TESTS__;
    if (Array.isArray(skip) && skip.includes(name)) return register.skip(name, fn, timeout);
    return register(name, fn, timeout);
  };
  for (const key of Object.keys(register)) wrapped[key] = register[key];
  wrapped.only = register.only;
  wrapped.skip = register.skip;
  wrapped.todo = register.todo;
  wrapped.each = register.each;
  wrapped.failing = register.failing;
  wrapped.concurrent = register.concurrent;
  return wrapped;
}

global.it = honourSkipList(ignoreNonPromiseReturn(global.it));
global.test = global.it;

beforeEach(() => {});
