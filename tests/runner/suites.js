/**
 * suites.js -- how each upstream suite is bound to the corpus.
 *
 * The vendored files under tests/upstream/ are byte-identical to what the
 * package maintainers published (verified by tools/verify_tests.js against
 * the sha256 digests in tests/SOURCES.json). They are NEVER edited.
 * Instead each suite gets:
 *
 *   stubs   module paths the suite expects to find inside its own package
 *           (`require('../')`, `require('../src/luhn')`, ...). Each is
 *           generated as a one-line re-export of the TARGET_DIR corpus file,
 *           so the suite loads the code under test without knowing it.
 *   entries the vendored files to execute, in order.
 *   custom  true when tests/entries/handwritten/<id>.test.js exists because the
 *           upstream suite cannot run unmodified against a single-file entry
 *           module. Documented per item in docs/TESTS.md.
 */
module.exports = {
  func_01_binarySearch:       { stubs: ['index.js'], entries: ['test.js'] },
  func_02_binarySearchBounds: { stubs: ['search-bounds.js'], entries: ['test/test.js'] },
  func_03_levenshtein:        { stubs: ['index.js'], entries: ['test.js'] },
  func_04_damerauLevenshtein: { stubs: ['index.js'], entries: ['test/test.js'] },
  func_05_unionFind:          { stubs: ['index.js'], entries: ['test/test.js'] },
  func_06_naturalCompare: {
    stubs: ['index.js'],
    entries: ['test/test.js'],
    // Both use `assert.throws(fn, new TypeError('...'))`. The TypeError is built
    // by Jest's sandbox while node's assert runs in the host realm, so the
    // instanceof check fails and assert rejects the expectation as "an empty
    // object". Passes under plain node; a property of the runner, not the corpus.
    skipTests: [
      { name: 'should throw if the first argument is not a string', reason: 'assert.throws with an Error instance crosses a Jest realm boundary' },
      { name: 'should throw if the second argument is not a string', reason: 'assert.throws with an Error instance crosses a Jest realm boundary' },
    ],
  },
  func_07_toposort:           { stubs: ['index.js'], entries: ['test.js'] },
  func_08_deque:              { stubs: ['index.js'], entries: ['test/denque.js'] },
  func_09_dijkstra:           { stubs: ['dijkstra.js'], entries: ['test/dijkstra.test.js'] },
  func_10_priorityQueue:      { stubs: ['index.js'], entries: ['test/priorityqueue.js'] },
  func_11_sortedArray:        { stubs: ['index.js'], entries: ['test.js'] },
  func_12_jaroWinkler:        { stubs: ['index.js'], entries: ['test/test.js'] },
  func_13_mersenneTwister:    { stubs: ['index.js'], entries: ['test/generator.js'] },
  func_14_stringSimilarity:   { stubs: ['src/index.js'], entries: ['src/spec/index.spec.js'] },
  func_15_combinatorics:      { stubs: ['combinatorics.js'], entries: ['test/00-node.js', 'test/02-arithmetics.js', 'test/03-basen.js', 'test/03-cartesianproduct.js', 'test/03-combination.js', 'test/03-permcomb.js', 'test/03-permutation.js', 'test/03-powerset.js'] },
  func_16_isEmail:            { stubs: ['index.js'], entries: ['test.js'] },
  func_17_isUrl:              { stubs: ['index.js'], entries: ['test/index.js'] },
  func_18_isUri:              { stubs: ['index.js'], entries: ['test/is_uri.js', 'test/is_http_uri.js', 'test/is_https_uri.js', 'test/is_web_uri.js'] },
  func_19_isJson:             { stubs: ['src/index.js'], entries: ['test/index.test.ts'] },
  func_20_isBase64:           { stubs: ['is-base64.js'], entries: ['test/is-base64.js'] },
  func_21_msDuration:         { stubs: ['index.js'], entries: ['tests.js'] },
  func_22_isUuid:             { stubs: ['lib/is-uuid.js'], entries: ['spec/nil-test.js', 'spec/any-non-nil-test.js', 'spec/v1-test.js', 'spec/v2-test.js', 'spec/v3-test.js', 'spec/v4-test.js', 'spec/v5-test.js'] },
  func_23_uuidValidate:       { stubs: ['index.js'], entries: ['ValidatorSpec.js'] },
  func_24_luhn:               { stubs: ['src/luhn.js'], entries: ['tests/luhn-tests.js'] },
  func_25_jwtDecode:          { stubs: ['lib/index.js'], entries: ['lib/index.test.ts'] },
  func_26_pluralize:          { stubs: ['index.js'], entries: ['test.js'] },
  func_27_wordWrap:           { stubs: ['index.js'], entries: ['test.js'] },
  func_28_byteSize:           { stubs: ['index.js'], entries: ['test/bytes.js', 'test/byte-format.js', 'test/byte-parse.js'] },
  func_29_isHexColor:         { stubs: ['index.js'], entries: ['test.js'] },
  func_30_queryString:        { stubs: ['index.js'], entries: ['test.js'] },
  func_31_objectPath:         { stubs: ['index.js'], entries: ['test.js'] },
  func_32_union: {
    stubs: ['index.js'],
    entries: ['test.js'],
    // arr-union's suite reads minimist(process.argv.slice(2)) and, if it finds a
    // positional argument, loads a benchmark implementation instead of the
    // package. Under Jest the argv belongs to Jest, so `npx jest func_32_union`
    // made it try to require benchmark/code/undefined.js. Blanking argv around
    // the require restores upstream's own default path.
    resetArgv: true,
  },
  func_33_flatten:            { stubs: ['index.js'], entries: ['test.js'] },
  func_34_unique:             { stubs: ['index.js'], entries: ['test.js'] },
  func_35_difference:         { stubs: ['index.js'], entries: ['test.js'] },
  func_36_intersect:          { stubs: ['index.js'], entries: ['test/test.js'] },
  func_37_groupBy:            { stubs: ['packages/array-group-by.js'], entries: ['test/array-group-by/index.cjs'] },
  func_38_deepEqual:          { stubs: ['index.js'], entries: [], custom: true },
  func_39_cloneDeep: {
    stubs: [
      'index.js',
      { path: 'default.js', expr: '$TARGET()',
        note: "reproduces rfdc's published default.js, which is `module.exports = require('./index.js')()`" },
    ],
    entries: ['test/index.js'],
  },
  func_40_deepMerge:          { stubs: ['index.js'], entries: ['test/merge.js', 'test/merge-all.js', 'test/prototype-poisoning.js', 'test/custom-array-merge.js', 'test/custom-is-mergeable-object.js'] },
  func_41_base64:             { stubs: ['index.js'], entries: ['test/convert.js', 'test/corrupt.js', 'test/url-safe.js'] },
  func_42_md5:                { stubs: ['js/md5.js'], entries: ['test/test.js'] },
  func_43_sha256:             { stubs: [], entries: [], custom: true },
  func_44_sha1:               { stubs: [], entries: [], custom: true },
  func_45_crc32:              { stubs: [], entries: [], custom: true },
  func_46_base32:             { stubs: [], entries: [], custom: true },
  func_47_rc4:                { stubs: ['rc4.js'], entries: ['test/chisquare.js'] },
  func_48_sha3:               { stubs: [], entries: [], custom: true },
  func_49_bitTwiddle:         { stubs: ['twiddle.js'], entries: ['test/test.js', 'test/interleave2.js', 'test/interleave3.js'] },
  func_50_hashSum:            { stubs: ['index.js'], entries: ['test.js'] },
};
