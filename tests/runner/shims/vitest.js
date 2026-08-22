// vitest's API is a strict subset of Jest's for the one suite that uses it
// (is-json, func_19).
module.exports = {
  describe: global.describe,
  it: global.it,
  test: global.test,
  expect: global.expect,
  beforeAll: global.beforeAll,
  afterAll: global.afterAll,
  beforeEach: global.beforeEach,
  afterEach: global.afterEach,
  vi: global.jest,
};
