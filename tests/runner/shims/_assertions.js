/**
 * Shared assertion object for the callback-style runners (tape, tap, ava).
 *
 * These runners hand the test body a `t` and count assertions; Jest instead
 * expects throw-on-failure. The shim keeps the UPSTREAM SEMANTICS rather than
 * Jest's: `equal` is `===` (not Object.is, so NaN !== NaN as tape has it) and
 * `deepEqual` is assert.deepStrictEqual. Loosening either would make a suite
 * accept an obfuscation artefact it should reject, which would inflate Pass
 * Rate -- the one direction this benchmark must never err in.
 */
const assert = require('assert');

/**
 * node-tap's `same`, reproduced.
 *
 * tap compares STRUCTURE and ignores the constructor: rfdc's suite clones an
 * `arguments` object and compares it with an array, which tap accepts. Both
 * assert.deepStrictEqual and the legacy assert.deepEqual reject that pair
 * ("Expected array but received object"), so neither is a faithful stand-in.
 * This walks own enumerable keys and compares leaves loosely, which is what
 * tsame -- the library tap uses -- does.
 */
function looseDeepEqual(a, b, seen = new Map()) {
  if (a === b) return true;
  // eslint-disable-next-line eqeqeq
  if (a == null || b == null) return a == b;
  if (typeof a !== 'object' || typeof b !== 'object') return a == b; // eslint-disable-line eqeqeq

  if (seen.get(a) === b) return true;   // tolerate cycles
  seen.set(a, b);

  if (a instanceof Date || b instanceof Date) return Number(a) === Number(b);
  if (a instanceof RegExp || b instanceof RegExp) return String(a) === String(b);

  const ka = Object.keys(a);
  const kb = Object.keys(b);
  if (ka.length !== kb.length) return false;
  return ka.every((k) => Object.prototype.hasOwnProperty.call(b, k) && looseDeepEqual(a[k], b[k], seen));
}

function fail(actual, expected, operator, message) {
  throw new assert.AssertionError({ actual, expected, operator, message, stackStartFn: fail });
}

function makeT(ctl, opts = {}) {
  const bump = () => ctl.bump();
  const guard = (fn) => (...args) => {
    try {
      fn(...args);
    } catch (err) {
      ctl.reject(err);
      return;
    }
    bump();
  };

  const t = {
    // --- equality -----------------------------------------------------------
    equal: guard((a, b, m) => { if (a !== b) fail(a, b, '===', m || `expected ${b}, got ${a}`); }),
    notEqual: guard((a, b, m) => { if (a === b) fail(a, b, '!==', m || `expected not ${b}`); }),
    deepEqual: guard((a, b, m) => assert.deepStrictEqual(a, b, m)),
    notDeepEqual: guard((a, b, m) => assert.notDeepStrictEqual(a, b, m)),
    deepLooseEqual: guard((a, b, m) => {
      if (!looseDeepEqual(a, b)) fail(a, b, 'same', m || 'structures differ');
    }),
    notDeepLooseEqual: guard((a, b, m) => {
      if (looseDeepEqual(a, b)) fail(a, b, 'notSame', m || 'structures are the same');
    }),

    // --- truthiness ---------------------------------------------------------
    ok: guard((v, m) => { if (!v) fail(v, true, 'ok', m || `expected truthy, got ${v}`); }),
    notOk: guard((v, m) => { if (v) fail(v, false, 'notOk', m || `expected falsy, got ${v}`); }),

    // --- errors -------------------------------------------------------------
    throws: guard((fn, expected, m) => {
      if (typeof expected === 'string') { m = expected; expected = undefined; }
      assert.throws(fn, expected, m);
    }),
    doesNotThrow: guard((fn, expected, m) => {
      if (typeof expected === 'string') { m = expected; expected = undefined; }
      assert.doesNotThrow(fn, expected, m);
    }),
    error: guard((err, m) => { if (err) fail(err, undefined, 'error', m || String(err)); }),

    // --- bookkeeping --------------------------------------------------------
    pass: guard(() => {}),
    fail: guard((m) => fail(undefined, undefined, 'fail', m || 't.fail()')),
    plan: (n) => ctl.plan(n),
    end: (err) => (err ? ctl.reject(err) : ctl.end()),
    comment: () => {},
    timeoutAfter: () => {},
    teardown: () => {},
  };

  // node-tap's `same` is documented as LOOSE deep equality and `strictSame` as
  // the strict one; tape's deepEqual is strict. Mapping tap's `same` to the
  // strict form makes the shim HARSHER than upstream, which is its own kind of
  // wrong -- rfdc's suite clones an `arguments` object and compares it to an
  // array, which tap accepts and deepStrictEqual rejects. Fidelity to the
  // runner wins; the caller says which dialect it is.
  if (opts.looseSame) {
    t.same = t.deepLooseEqual;
    t.notSame = t.notDeepLooseEqual;
    t.strictSame = t.deepEqual;
    t.strictNotSame = t.notDeepEqual;
  }

  // Upstream aliases. Every runner spells the same assertion several ways and
  // the vendored suites use all of them.
  const alias = {
    is: 'equal', equals: 'equal', isEqual: 'equal', strictEqual: 'equal', strictEquals: 'equal',
    not: 'notEqual', notEquals: 'notEqual', isNot: 'notEqual', isNotEqual: 'notEqual', notStrictEqual: 'notEqual',
    same: 'deepEqual', deepEquals: 'deepEqual', isEquivalent: 'deepEqual', looseEqual: 'deepLooseEqual',
    notSame: 'notDeepEqual', notDeepEquals: 'notDeepEqual',
    true: 'ok', assert: 'ok', truthy: 'ok', isTrue: 'ok',
    false: 'notOk', notok: 'notOk', falsy: 'notOk', isFalse: 'notOk',
    ifError: 'error', ifErr: 'error', iferror: 'error', notThrows: 'doesNotThrow',
  };
  for (const [from, to] of Object.entries(alias)) {
    if (opts.looseSame && (from === 'same' || from === 'notSame')) continue;
    t[from] = t[to];
  }

  // ava's t.regex / t.notRegex have no tape equivalent.
  t.regex = guard((s, re, m) => { if (!re.test(s)) fail(s, re, 'regex', m); });
  t.notRegex = guard((s, re, m) => { if (re.test(s)) fail(s, re, 'notRegex', m); });

  return t;
}

module.exports = { makeT, fail, looseDeepEqual };
