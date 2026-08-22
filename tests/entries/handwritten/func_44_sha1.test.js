/**
 * func_44_sha1 -- official upstream suite of js-sha1@0.7.0.
 *
 * HAND-WRITTEN ENTRY (see docs/TESTS.md §4.3). As with js-sha256 the suite is
 * an IIFE ending `})(sha1);` that expects its subject plus expect.js on the
 * global object. This mirrors the plain Node/CommonJS pass of upstream's
 * tests/node-test.js (BUFFER = true; sha1 = require('../src/sha1.js')). The
 * remaining passes in that file re-run the same assertions under simulated
 * browser / AMD / worker environments by reloading the module, which is not
 * reproducible under Jest -- its require.cache deletion is a no-op -- and is
 * not a property of the corpus file.
 */
const loadTarget = require('../../runner/load-target');

global.BUFFER = true;
global.sha1 = loadTarget('func_44_sha1');
global.expect = require('expect.js');

require('../../upstream/func_44_sha1/tests/test.js');
require('../../upstream/func_44_sha1/tests/hmac-test.js');
