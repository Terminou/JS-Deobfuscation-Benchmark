/**
 * vows -> Jest.  toposort (func_07) is the only vows suite.
 *
 * A vows batch is {context: {topic: fn, 'vow name': fn(err, value), ...}}. The
 * topic runs once per context; a synchronous topic that throws is not a
 * failure in vows -- the thrown Error becomes the value the vows assert on
 * (toposort's cycle-detection tests rely on exactly that), so the shim mirrors
 * it as vow(err, err) instead of letting the throw escape.
 *
 * `.run()` is neutralised: upstream's callback calls process.exit(), which
 * would tear down the Jest worker mid-run.
 */
const assert = require('assert');

// vows extends node's assert with its own macros; the suite calls
// assert.instanceOf, which core assert does not provide.
if (!assert.instanceOf) {
  assert.instanceOf = function (actual, expected, message) {
    if (!(actual instanceof expected)) {
      throw new assert.AssertionError({
        actual, expected, operator: 'instanceOf',
        message: message || `expected an instance of ${expected.name}, got ${actual}`,
      });
    }
  };
}
if (!assert.isArray) assert.isArray = (a, m) => assert.instanceOf(a, Array, m);
if (!assert.isFunction) assert.isFunction = (a, m) => assert.strictEqual(typeof a, 'function', m);
if (!assert.isTrue) assert.isTrue = (a, m) => assert.strictEqual(a, true, m);
if (!assert.isFalse) assert.isFalse = (a, m) => assert.strictEqual(a, false, m);

function walk(context) {
  let cached;
  let computed = false;
  const resolveTopic = () => {
    if (!computed) {
      computed = true;
      if (typeof context.topic === 'function') {
        try {
          cached = { err: null, value: context.topic.call({}) };
        } catch (err) {
          cached = { err, value: err };
        }
      } else {
        cached = { err: null, value: context.topic };
      }
    }
    return cached;
  };

  for (const [key, value] of Object.entries(context)) {
    if (key === 'topic' || key === 'teardown') continue;
    if (typeof value === 'function') {
      global.it(key, () => {
        const { err, value: topic } = resolveTopic();
        value.call({}, err, topic);
      });
    } else if (value && typeof value === 'object') {
      global.describe(key, () => walk(value));
    }
  }
}

function describe(name) {
  const suite = {
    results: { broken: 0, errored: 0, honored: 0, pending: 0, total: 0 },
    addBatch(batch) {
      for (const [contextName, context] of Object.entries(batch)) {
        global.describe(`${name} :: ${contextName}`, () => walk(context));
      }
      return suite;
    },
    addVows: (batch) => suite.addBatch(batch),
    run: () => suite,        // never invoke upstream's process.exit() callback
    export: () => suite,
  };
  return suite;
}

module.exports = { describe, assert };
