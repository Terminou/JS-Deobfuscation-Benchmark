/**
 * assertion-counter.js -- count assertions that actually EXECUTE.
 *
 * The report used to show Jest test BLOCKS, which understates several suites
 * badly: is-base64 runs 28 checks inside a single block, and the mukla shim
 * collapses 68 nested blocks into one. Counting assertion calls statically out
 * of the source was worse -- it reported "~0" for is-url and rfdc, whose checks
 * are `assume(...)` and destructured `({ is, same })` calls a regex cannot see.
 *
 * So they are counted at runtime instead, by wrapping the one method every
 * assertion in each library funnels through. Each test file writes its own
 * total on the way out; tools/report.js sums them.
 *
 * Anything not wrapped simply is not counted -- the number is a floor, never an
 * invention.
 */
const fs = require('fs');
const os = require('os');
const path = require('path');

/**
 * The tally is kept ON THE `assert` MODULE OBJECT, which looks odd and is not.
 *
 * Jest resets the module registry for every test file, but core modules like
 * `assert` are shared across them -- that is exactly why the wrapper installed
 * during the first file is still in place for the fiftieth. The consequence is
 * that the wrapper keeps calling the FIRST file's copy of this module, so a
 * module-level counter recorded every later file as zero. `process` is no
 * better: Jest sandboxes it per file, so the stale wrapper and the current file
 * see different objects.
 *
 * The `assert` object is the one thing both provably share -- the wrapper is
 * attached to it. So the count lives there.
 */
const KEY = '__deobfAssertionCount';
const store = require('assert');   // proven shared across Jest's per-file registries
const bump = () => { store[KEY] = (store[KEY] || 0) + 1; };
const reset = () => { store[KEY] = 0; };
const add = (n) => { store[KEY] = (store[KEY] || 0) + n; };

/** Wrap one method so it counts and then behaves exactly as before. */
function instrument(owner, key) {
  if (!owner || typeof owner[key] !== 'function' || owner[key].__counted) return false;
  const original = owner[key];
  const wrapper = function (...args) {
    bump();
    return original.apply(this, args);
  };
  wrapper.__counted = true;
  try {
    owner[key] = wrapper;
    return true;
  } catch {
    return false;
  }
}

// --- the funnels ------------------------------------------------------------
// Only the assertion FUNCTIONS. Wrapping everything on the module also wrapped
// AssertionError (a class -- `new` through an .apply wrapper throws) and
// assert.strict (a callable object whose own methods would be lost).
/**
 * node's assert, wrapped in place.
 *
 * The originals are captured FIRST and re-exported as `raw`, because the harness
 * shims call assert internally while also counting through guard(); without an
 * unwrapped copy every tape/tap/ava assertion would be counted twice.
 *
 * `assert(value)` -- the module called as a function, which is how is-url's
 * suite asserts -- cannot be wrapped in place: other modules already hold the
 * reference. Redirecting `require('assert')` through a counting shim was tried
 * and reverted; it puts node's assert in a different realm from the sandbox, so
 * `assert.throws(fn, new TypeError(...))` stops recognising the TypeError. That
 * suite is therefore undercounted, and the report says so.
 */
const ASSERT_METHODS = [
  'ok', 'equal', 'notEqual', 'strictEqual', 'notStrictEqual',
  'deepEqual', 'notDeepEqual', 'deepStrictEqual', 'notDeepStrictEqual',
  'throws', 'doesNotThrow', 'rejects', 'doesNotReject',
  'ifError', 'match', 'doesNotMatch', 'fail',
];
const nodeAssert = require('assert');
const RAW_KEY = '__deobfRawAssert';

// The originals must be stashed on the shared module too. This file is
// re-evaluated for every test file while `assert` is not, so from the second
// file onwards the methods are already wrapped and there is nothing left to
// capture -- a local copy came out empty and broke ten suites.
if (!nodeAssert[RAW_KEY]) {
  const captured = { AssertionError: nodeAssert.AssertionError };
  for (const name of ASSERT_METHODS) {
    if (typeof nodeAssert[name] === 'function') captured[name] = nodeAssert[name];
  }
  Object.defineProperty(nodeAssert, RAW_KEY, { value: captured, enumerable: false });
}
const raw = nodeAssert[RAW_KEY];

for (const name of ASSERT_METHODS) instrument(nodeAssert, name);
if (nodeAssert.strict) for (const name of ASSERT_METHODS) instrument(nodeAssert.strict, name);

const tryLib = (id, get) => { try { get(require(id)); } catch { /* not installed for this suite */ } };
tryLib('chai',      (m) => instrument(m.Assertion.prototype, 'assert'));
tryLib('should',    (m) => instrument(m.Assertion.prototype, 'assert'));
tryLib('expect.js', (m) => instrument(m.Assertion.prototype, 'assert'));
tryLib('assume',    (m) => instrument(Object.getPrototypeOf(m(1)), 'test'));

// --- where the totals go ----------------------------------------------------
const DIR = path.join(os.tmpdir(), 'deobf-assertion-counts');
fs.mkdirSync(DIR, { recursive: true });

module.exports = {
  raw,
  bump,
  reset,
  add,
  /**
   * Called once per test file, after everything in it has run.
   */
  flush(testPath) {
    const id = path.basename(testPath || 'unknown').replace('.test.js', '');
    fs.writeFileSync(
      path.join(DIR, `${id}.json`),
      JSON.stringify({ id, assertions: store[KEY] || 0 }),
    );
  },
  DIR,
};
