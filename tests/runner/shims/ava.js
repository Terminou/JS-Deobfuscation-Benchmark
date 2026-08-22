/**
 * ava -> Jest.  js-levenshtein (func_03) and is-md5 (func_21).
 *
 * Unlike tape, an ava body completes when it returns; t.end() exists only in
 * ava's legacy callback mode (is-md5 still uses it), so it is accepted but not
 * required.
 */
const { makeT } = require('./_assertions');

function build(jestFn) {
  return function test(name, cb) {
    if (typeof name === 'function') { cb = name; name = '(anonymous)'; }
    jestFn(name, () => new Promise((resolve, reject) => {
      let settled = false;
      const done = () => { if (!settled) { settled = true; resolve(); } };
      const ctl = {
        plan: () => {},
        bump: () => {},
        end: done,
        reject: (err) => { if (!settled) { settled = true; reject(err); } },
      };
      const t = makeT(ctl);
      let ret;
      try {
        ret = cb(t);
      } catch (err) {
        ctl.reject(err);
        return;
      }
      if (ret && typeof ret.then === 'function') ret.then(done, ctl.reject);
      else done();
    }));
  };
}

const test = build(global.test);
test.only = build(global.test.only);
test.skip = build(global.test.skip);
test.serial = test;
test.cb = test;
test.before = (fn) => global.beforeAll(() => fn(makeT({ plan(){}, bump(){}, end(){}, reject(e){ throw e; } })));
test.after = (fn) => global.afterAll(() => fn(makeT({ plan(){}, bump(){}, end(){}, reject(e){ throw e; } })));
test.beforeEach = (fn) => global.beforeEach(() => fn(makeT({ plan(){}, bump(){}, end(){}, reject(e){ throw e; } })));
test.afterEach = (fn) => global.afterEach(() => fn(makeT({ plan(){}, bump(){}, end(){}, reject(e){ throw e; } })));
test.default = test;
test.__esModule = true;

module.exports = test;
