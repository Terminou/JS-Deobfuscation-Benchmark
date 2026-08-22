/**
 * func_45_crc32 -- official upstream suite of js-crc@0.3.1.
 *
 * HAND-WRITTEN ENTRY (docs/TESTS.md §4.3). Like the other emn178 packages the
 * suite is a bare IIFE, closing `})(crc32, crc16, createModel);`, and expects a
 * loader to have put those on the global object first -- upstream's own
 * tests/node-test.js does exactly that. Supplied here from TARGET_DIR; the test
 * bodies are untouched.
 */
const loadTarget = require('../../runner/load-target');

const crc = loadTarget('func_45_crc32');
global.crc32 = crc.crc32;
global.crc16 = crc.crc16;
global.createModel = crc.createModel;
global.expect = require('expect.js');

// Only tests/test.js runs. Upstream's tests/models-test.js reads its CRC models
// off `var root = WINDOW ? window : {}` -- under Node that object is empty, so
// every model is undefined. It is a browser-only file, not an oracle we can run.
require('../../upstream/func_45_crc32/tests/test.js');
