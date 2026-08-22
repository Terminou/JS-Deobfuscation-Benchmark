// Several mocha suites `require('mocha')` for its side effects and then use the
// BDD globals. Jest already provides describe/it/hooks, so re-export those.
module.exports = {
  describe: global.describe,
  it: global.it,
  before: global.beforeAll,
  after: global.afterAll,
  beforeEach: global.beforeEach,
  afterEach: global.afterEach,
  xdescribe: global.describe.skip,
  xit: global.it.skip,
  specify: global.it,
  run: () => {},
};
