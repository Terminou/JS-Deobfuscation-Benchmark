/**
 * func_48_murmurhash -- official upstream suite of murmurhash@2.0.1.
 *
 * HAND-WRITTEN ENTRY (see docs/TESTS.md §4.3). Upstream's test.js is a bare
 * script with no framework: it computes v3 over a string, a Buffer and a
 * Uint8Array and `throw`s if the three disagree or miss a known digest.
 * Requiring it inside a Jest test preserves that oracle exactly -- the throw
 * becomes the failure -- without touching the vendored file.
 */
it('murmurhash official script (v3 agrees across string / Buffer / Uint8Array)', () => {
  require('../../upstream/func_48_murmurhash/test.js');
});
