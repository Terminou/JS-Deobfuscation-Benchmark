/**
 * func_43_sha256 -- official upstream suite of js-sha256@1.0.0.
 *
 * HAND-WRITTEN ENTRY (see docs/TESTS.md §4.3). Upstream ships the suite as a
 * bare IIFE closing `})(sha256, sha224);`, expecting a loader to have put its
 * subject on the global object first. The globals below mirror upstream's own
 * tests/node-test.mjs exactly, including TEST_INTERNALS = false -- that block
 * pokes at private counters the published entry does not expose, and upstream
 * disables it for the Node run. The test bodies are untouched.
 */
const loadTarget = require('../../runner/load-target');

const sha256 = loadTarget('func_43_sha256');
global.assert = require('assert/strict');
global.sha256 = sha256;
global.sha224 = sha256.sha224;
global.TEST_INTERNALS = false;

require('../../upstream/func_43_sha256/tests/test.js');
require('../../upstream/func_43_sha256/tests/hmac-test.js');
