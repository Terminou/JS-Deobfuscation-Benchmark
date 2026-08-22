/**
 * tape -> Jest.  8 of the 50 official suites are tape.
 *
 * tape drives a test to completion via t.end() or a satisfied t.plan(n); Jest
 * drives it via a returned promise. The bridge below is deliberately strict:
 * a body that neither ends nor plans is reported as a HARNESS error rather
 * than being auto-passed, because silently completing such a test would score
 * an unrun assertion as a pass.
 */
const { makeT } = require('./_assertions');

function build(jestFn, tOpts = {}) {
  return function test(name, opts, cb) {
    if (typeof name === 'function') { cb = name; opts = {}; name = '(anonymous)'; }
    if (typeof opts === 'function') { cb = opts; opts = {}; }
    opts = opts || {};

    const runner = opts.skip ? jestFn.skip : jestFn;
    runner(name, () => new Promise((resolve, reject) => {
      let settled = false;
      let planned = null;
      let count = 0;
      const done = () => { if (!settled) { settled = true; resolve(); } };
      const ctl = {
        plan: (n) => { planned = n; if (count >= n) done(); },
        bump: () => { count += 1; if (planned !== null && count >= planned) done(); },
        end: done,
        reject: (err) => { if (!settled) { settled = true; reject(err); } },
      };
      const t = makeT(ctl, tOpts);

      let ret;
      try {
        ret = cb(t);
      } catch (err) {
        ctl.reject(err);
        return;
      }
      if (ret && typeof ret.then === 'function') {
        ret.then(done, ctl.reject);
      } else if (!settled && planned === null) {
        ctl.reject(new Error(
          `[harness] tape test "${name}" returned without calling t.end() or t.plan(n); ` +
          'the shim will not auto-complete it -- adapt this suite explicitly.'
        ));
      }
    }));
  };
}

function makeRunner(tOpts) {
  const test = build(global.test, tOpts);
  test.only = build(global.test.only, tOpts);
  test.skip = build(global.test.skip, tOpts);
  test.test = test;
  test.default = test;
  return test;
}

const test = makeRunner({});
test.makeRunner = makeRunner;

module.exports = test;
