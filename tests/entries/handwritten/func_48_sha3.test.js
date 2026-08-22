/**
 * func_48_sha3 -- official upstream suite of js-sha3@0.9.3.
 *
 * HAND-WRITTEN ENTRY (docs/TESTS.md §4.3). Same emn178 pattern as js-sha256,
 * js-sha1, js-crc and hi-base32: the suite is a bare IIFE closing
 * `})(sha3_512, sha3_384, ...)` and expects a loader to have put the eight
 * digest functions on the global object, which upstream's tests/node-test.js
 * does. Supplied here from TARGET_DIR; the test bodies are untouched.
 */
const loadTarget = require('../../runner/load-target');

const sha3 = loadTarget('func_48_sha3');
for (const name of ['sha3_512', 'sha3_384', 'sha3_256', 'sha3_224',
                    'keccak512', 'keccak384', 'keccak256', 'keccak224']) {
  global[name] = sha3[name];
}
global.expect = require('expect.js');

require('../../upstream/func_48_sha3/tests/test.js');
