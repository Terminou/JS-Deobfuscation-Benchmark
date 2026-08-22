/**
 * func_46_base32 -- official upstream suite of hi-base32@0.5.1.
 *
 * HAND-WRITTEN ENTRY (docs/TESTS.md §4.3). Same emn178 pattern as js-crc and
 * js-sha256: the suite is an IIFE ending `})(base32);` that expects its subject
 * on the global object, as upstream's tests/node-test.js arranges.
 */
const loadTarget = require('../../runner/load-target');

global.base32 = loadTarget('func_46_base32');
global.expect = require('expect.js');

require('../../upstream/func_46_base32/tests/test.js');
