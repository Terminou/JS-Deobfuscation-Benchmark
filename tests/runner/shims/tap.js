/**
 * node-tap -> Jest.  valid-url (func_18) and rfdc (func_39).
 *
 * tap's runner surface is tape-shaped, so it reuses that shim -- but tap's
 * `same` is LOOSE deep equality and `strictSame` is the strict one, which is
 * the opposite default from tape. See tests/shims/_assertions.js.
 */
const tape = require('./tape');

const test = tape.makeRunner({ looseSame: true });

module.exports = { test, only: test.only, skip: test.skip, default: test };
