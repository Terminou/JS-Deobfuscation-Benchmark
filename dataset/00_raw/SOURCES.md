# Ground-Truth Corpus -- Source Provenance

Every file in `dataset/00_raw/` is extracted **byte-exact** from a pinned npm release tarball. `build_dataset.py` verifies the registry's published SHA-1 digest against the downloaded tarball before extraction, so this corpus is reproducible from the table below alone.

- **Items:** 50
- **Distinct upstream packages:** 50
- **Total size:** 160,764 bytes (5,788 lines)

Every item is a self-contained CommonJS module: no ESM syntax, no relative imports, no external dependencies. Verify with `node verify_dataset.js`.

---

## Category 1 -- Data Structures & Algorithms (15 items)

| # | Dataset file | Upstream package | Version | Source file | License |
|---|---|---|---|---|---|
| 1 | `func_01_binarySearch.js` | [`binary-search`](https://github.com/darkskyapp/binary-search) | `1.3.6` | [`index.js`](https://cdn.jsdelivr.net/npm/binary-search@1.3.6/index.js) | CC0-1.0 |
| 2 | `func_02_binarySearchBounds.js` | [`binary-search-bounds`](https://github.com/mikolalysenko/binary-search-bounds) | `2.0.5` | [`search-bounds.js`](https://cdn.jsdelivr.net/npm/binary-search-bounds@2.0.5/search-bounds.js) | MIT |
| 3 | `func_03_levenshtein.js` | [`js-levenshtein`](https://github.com/gustf/js-levenshtein) | `1.1.6` | [`index.js`](https://cdn.jsdelivr.net/npm/js-levenshtein@1.1.6/index.js) | MIT |
| 4 | `func_04_damerauLevenshtein.js` | [`damerau-levenshtein`](https://github.com/tad-lispy/node-damerau-levenshtein) | `1.0.8` | [`index.js`](https://cdn.jsdelivr.net/npm/damerau-levenshtein@1.0.8/index.js) | BSD-2-Clause |
| 5 | `func_05_unionFind.js` | [`union-find`](https://github.com/mikolalysenko/union-find) | `1.0.2` | [`index.js`](https://cdn.jsdelivr.net/npm/union-find@1.0.2/index.js) | MIT |
| 6 | `func_06_naturalCompare.js` | [`natural-compare`](https://github.com/litejs/natural-compare-lite) | `1.4.0` | [`index.js`](https://cdn.jsdelivr.net/npm/natural-compare@1.4.0/index.js) | MIT |
| 7 | `func_07_toposort.js` | [`toposort`](https://github.com/marcelklehr/toposort) | `2.0.2` | [`index.js`](https://cdn.jsdelivr.net/npm/toposort@2.0.2/index.js) | MIT |
| 8 | `func_08_topsort.js` | [`topsort`](https://github.com/samuelneff/topsort) | `0.0.2` | [`lib/topsort.js`](https://cdn.jsdelivr.net/npm/topsort@0.0.2/lib/topsort.js) | n/a |
| 9 | `func_09_dijkstra.js` | [`dijkstrajs`](https://github.com/tcort/dijkstrajs) | `1.0.3` | [`dijkstra.js`](https://cdn.jsdelivr.net/npm/dijkstrajs@1.0.3/dijkstra.js) | MIT |
| 10 | `func_10_priorityQueue.js` | [`priorityqueuejs`](https://github.com/janogonzalez/priorityqueuejs) | `2.0.0` | [`index.js`](https://cdn.jsdelivr.net/npm/priorityqueuejs@2.0.0/index.js) | MIT |
| 11 | `func_11_sortedArray.js` | [`sorted-array-functions`](https://github.com/mafintosh/sorted-array-functions) | `1.3.0` | [`index.js`](https://cdn.jsdelivr.net/npm/sorted-array-functions@1.3.0/index.js) | MIT |
| 12 | `func_12_fastSort.js` | [`fast-sort`](https://github.com/snovakovic/fast-sort) | `3.4.1` | [`dist/sort.cjs.js`](https://cdn.jsdelivr.net/npm/fast-sort@3.4.1/dist/sort.cjs.js) | MIT |
| 13 | `func_13_mersenneTwister.js` | [`mersenne-twister`](https://github.com/boo1ean/mersenne-twister) | `1.1.0` | [`src/mersenne-twister.js`](https://cdn.jsdelivr.net/npm/mersenne-twister@1.1.0/src/mersenne-twister.js) | MIT |
| 14 | `func_14_stringSimilarity.js` | [`string-similarity`](https://github.com/aceakash/string-similarity) | `4.0.4` | [`src/index.js`](https://cdn.jsdelivr.net/npm/string-similarity@4.0.4/src/index.js) | ISC |
| 15 | `func_15_combinatorics.js` | [`js-combinatorics`](https://github.com/dankogai/js-combinatorics) | `2.1.4` | [`commonjs/combinatorics.js`](https://cdn.jsdelivr.net/npm/js-combinatorics@2.1.4/commonjs/combinatorics.js) | MIT |

## Category 2 -- String & Validation (15 items)

| # | Dataset file | Upstream package | Version | Source file | License |
|---|---|---|---|---|---|
| 16 | `func_16_isEmail.js` | [`email-validator`](https://github.com/manishsaraan/email-validator) | `2.0.4` | [`index.js`](https://cdn.jsdelivr.net/npm/email-validator@2.0.4/index.js) | n/a |
| 17 | `func_17_isUrl.js` | [`is-url`](https://github.com/segmentio/is-url) | `1.2.4` | [`index.js`](https://cdn.jsdelivr.net/npm/is-url@1.2.4/index.js) | MIT |
| 18 | `func_18_isUri.js` | [`valid-url`](https://github.com/ogt/valid-url) | `1.0.9` | [`index.js`](https://cdn.jsdelivr.net/npm/valid-url@1.0.9/index.js) | n/a |
| 19 | `func_19_isJson.js` | [`is-json`](https://github.com/joaquimserafim/is-json) | `3.0.1` | [`dist/index.cjs`](https://cdn.jsdelivr.net/npm/is-json@3.0.1/dist/index.cjs) | ISC |
| 20 | `func_20_isBase64.js` | [`is-base64`](https://github.com/miguelmota/is-base64) | `1.1.0` | [`is-base64.js`](https://cdn.jsdelivr.net/npm/is-base64@1.1.0/is-base64.js) | MIT |
| 21 | `func_21_isMd5.js` | [`is-md5`](https://github.com/imanhodjaev/is-md5) | `0.0.2` | [`index.js`](https://cdn.jsdelivr.net/npm/is-md5@0.0.2/index.js) | MIT |
| 22 | `func_22_isUuid.js` | [`is-uuid`](https://github.com/afram/is-uuid) | `1.0.2` | [`lib/is-uuid.js`](https://cdn.jsdelivr.net/npm/is-uuid@1.0.2/lib/is-uuid.js) | MIT |
| 23 | `func_23_uuidValidate.js` | [`uuid-validate`](https://github.com/WatchBeam/uuid-validate) | `0.0.3` | [`index.js`](https://cdn.jsdelivr.net/npm/uuid-validate@0.0.3/index.js) | MIT |
| 24 | `func_24_luhn.js` | [`luhn`](https://github.com/JamesEggers1/node-luhn) | `2.4.1` | [`src/luhn.js`](https://cdn.jsdelivr.net/npm/luhn@2.4.1/src/luhn.js) | MIT |
| 25 | `func_25_jwtDecode.js` | [`jwt-decode`](https://github.com/auth0/jwt-decode) | `4.0.0` | [`build/cjs/index.js`](https://cdn.jsdelivr.net/npm/jwt-decode@4.0.0/build/cjs/index.js) | MIT |
| 26 | `func_26_slugify.js` | [`slugify`](https://github.com/simov/slugify) | `1.6.9` | [`slugify.js`](https://cdn.jsdelivr.net/npm/slugify@1.6.9/slugify.js) | MIT |
| 27 | `func_27_wordWrap.js` | [`word-wrap`](https://github.com/jonschlinkert/word-wrap) | `1.2.5` | [`index.js`](https://cdn.jsdelivr.net/npm/word-wrap@1.2.5/index.js) | MIT |
| 28 | `func_28_isAlphanumeric.js` | [`is-alphanumeric`](https://github.com/arthurvr/is-alphanumeric) | `1.0.0` | [`index.js`](https://cdn.jsdelivr.net/npm/is-alphanumeric@1.0.0/index.js) | MIT |
| 29 | `func_29_isHexColor.js` | [`hex-color-regex`](https://github.com/regexps/hex-color-regex) | `1.1.0` | [`index.js`](https://cdn.jsdelivr.net/npm/hex-color-regex@1.1.0/index.js) | MIT |
| 30 | `func_30_queryString.js` | [`querystringify`](https://github.com/unshiftio/querystringify) | `2.2.0` | [`index.js`](https://cdn.jsdelivr.net/npm/querystringify@2.2.0/index.js) | MIT |

## Category 3 -- Array & Object Manipulation (10 items)

| # | Dataset file | Upstream package | Version | Source file | License |
|---|---|---|---|---|---|
| 31 | `func_31_compact.js` | [`lodash.compact`](https://github.com/lodash/lodash) | `3.0.1` | [`index.js`](https://cdn.jsdelivr.net/npm/lodash.compact@3.0.1/index.js) | MIT |
| 32 | `func_32_chunk.js` | [`lodash.chunk`](https://github.com/lodash/lodash) | `4.2.0` | [`index.js`](https://cdn.jsdelivr.net/npm/lodash.chunk@4.2.0/index.js) | MIT |
| 33 | `func_33_flatten.js` | [`arr-flatten`](https://github.com/jonschlinkert/arr-flatten) | `1.1.0` | [`index.js`](https://cdn.jsdelivr.net/npm/arr-flatten@1.1.0/index.js) | MIT |
| 34 | `func_34_unique.js` | [`array-unique`](https://github.com/jonschlinkert/array-unique) | `0.3.2` | [`index.js`](https://cdn.jsdelivr.net/npm/array-unique@0.3.2/index.js) | MIT |
| 35 | `func_35_difference.js` | [`arr-diff`](https://github.com/jonschlinkert/arr-diff) | `4.0.0` | [`index.js`](https://cdn.jsdelivr.net/npm/arr-diff@4.0.0/index.js) | MIT |
| 36 | `func_36_intersect.js` | [`just-intersect`](https://github.com/angus-c/just) | `4.3.0` | [`index.cjs`](https://cdn.jsdelivr.net/npm/just-intersect@4.3.0/index.cjs) | MIT |
| 37 | `func_37_groupBy.js` | [`just-group-by`](https://github.com/angus-c/just) | `2.2.0` | [`index.cjs`](https://cdn.jsdelivr.net/npm/just-group-by@2.2.0/index.cjs) | MIT |
| 38 | `func_38_deepEqual.js` | [`fast-deep-equal`](https://github.com/epoberezkin/fast-deep-equal) | `3.1.3` | [`index.js`](https://cdn.jsdelivr.net/npm/fast-deep-equal@3.1.3/index.js) | MIT |
| 39 | `func_39_cloneDeep.js` | [`just-clone`](https://github.com/angus-c/just) | `6.2.0` | [`index.cjs`](https://cdn.jsdelivr.net/npm/just-clone@6.2.0/index.cjs) | MIT |
| 40 | `func_40_deepMerge.js` | [`deepmerge`](https://github.com/TehShrike/deepmerge) | `4.3.1` | [`dist/cjs.js`](https://cdn.jsdelivr.net/npm/deepmerge@4.3.1/dist/cjs.js) | MIT |

## Category 4 -- Math & Cryptography (10 items)

| # | Dataset file | Upstream package | Version | Source file | License |
|---|---|---|---|---|---|
| 41 | `func_41_base64.js` | [`base64-js`](https://github.com/beatgammit/base64-js) | `1.5.1` | [`index.js`](https://cdn.jsdelivr.net/npm/base64-js@1.5.1/index.js) | MIT |
| 42 | `func_42_md5.js` | [`blueimp-md5`](https://github.com/blueimp/JavaScript-MD5) | `2.19.0` | [`js/md5.js`](https://cdn.jsdelivr.net/npm/blueimp-md5@2.19.0/js/md5.js) | MIT |
| 43 | `func_43_sha256.js` | [`js-sha256`](https://github.com/emn178/js-sha256) | `1.0.0` | [`build/sha256.node.cjs`](https://cdn.jsdelivr.net/npm/js-sha256@1.0.0/build/sha256.node.cjs) | MIT |
| 44 | `func_44_sha1.js` | [`js-sha1`](https://github.com/emn178/js-sha1) | `0.7.0` | [`src/sha1.js`](https://cdn.jsdelivr.net/npm/js-sha1@0.7.0/src/sha1.js) | MIT |
| 45 | `func_45_crc32.js` | [`crc-32`](https://github.com/SheetJS/js-crc32) | `1.2.2` | [`crc32.js`](https://cdn.jsdelivr.net/npm/crc-32@1.2.2/crc32.js) | Apache-2.0 |
| 46 | `func_46_adler32.js` | [`adler-32`](https://github.com/SheetJS/js-adler32) | `1.3.1` | [`adler32.js`](https://cdn.jsdelivr.net/npm/adler-32@1.3.1/adler32.js) | Apache-2.0 |
| 47 | `func_47_rc4.js` | [`rc4`](https://github.com/phadej/rc4) | `0.1.5` | [`rc4.js`](https://cdn.jsdelivr.net/npm/rc4@0.1.5/rc4.js) | MIT |
| 48 | `func_48_murmurhash.js` | [`murmurhash`](https://github.com/perezd/node-murmurhash) | `2.0.1` | [`murmurhash.js`](https://cdn.jsdelivr.net/npm/murmurhash@2.0.1/murmurhash.js) | MIT |
| 49 | `func_49_bitTwiddle.js` | [`bit-twiddle`](https://github.com/mikolalysenko/bit-twiddle) | `1.0.2` | [`twiddle.js`](https://cdn.jsdelivr.net/npm/bit-twiddle@1.0.2/twiddle.js) | MIT |
| 50 | `func_50_hashSum.js` | [`hash-sum`](https://github.com/bevacqua/hash-sum) | `2.0.0` | [`hash-sum.js`](https://cdn.jsdelivr.net/npm/hash-sum@2.0.0/hash-sum.js) | MIT |

---

## Full provenance

Tarball URLs are what `build_dataset.py` actually downloads. `tarball_sha1` is the digest published by the npm registry and verified at fetch time; `sha256` is the digest of the extracted file as stored in this repository.

### 1. `func_01_binarySearch.js`

- **Package:** `binary-search@1.3.6` ([npm](https://www.npmjs.com/package/binary-search/v/1.3.6))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/binary-search@1.3.6/index.js
- **Mirror:** https://unpkg.com/binary-search@1.3.6/index.js
- **Repository:** https://github.com/darkskyapp/binary-search
- **Homepage:** https://github.com/darkskyapp/binary-search#readme
- **Tarball:** https://registry.npmjs.org/binary-search/-/binary-search-1.3.6.tgz
- **Tarball SHA-1:** `e32426016a0c5092f0f3598836a1c7da3560565c`
- **File SHA-256:** `854a9053296ff3f147b913e16459f9585a0edf3b8177960d144afa5dd8f96c62`
- **Size:** 1,013 bytes / 46 lines
- **License:** CC0-1.0

### 2. `func_02_binarySearchBounds.js`

- **Package:** `binary-search-bounds@2.0.5` ([npm](https://www.npmjs.com/package/binary-search-bounds/v/2.0.5))
- **Entry path in package:** `search-bounds.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/binary-search-bounds@2.0.5/search-bounds.js
- **Mirror:** https://unpkg.com/binary-search-bounds@2.0.5/search-bounds.js
- **Repository:** https://github.com/mikolalysenko/binary-search-bounds
- **Homepage:** https://github.com/mikolalysenko/binary-search-bounds#readme
- **Tarball:** https://registry.npmjs.org/binary-search-bounds/-/binary-search-bounds-2.0.5.tgz
- **Tarball SHA-1:** `125e5bd399882f71e6660d4bf1186384e989fba7`
- **File SHA-256:** `cb3eda6743b9c9d84dc5de319f75e683f6562d167bcaac56f02fb729249d3f06`
- **Size:** 1,829 bytes / 69 lines
- **License:** MIT

### 3. `func_03_levenshtein.js`

- **Package:** `js-levenshtein@1.1.6` ([npm](https://www.npmjs.com/package/js-levenshtein/v/1.1.6))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/js-levenshtein@1.1.6/index.js
- **Mirror:** https://unpkg.com/js-levenshtein@1.1.6/index.js
- **Repository:** https://github.com/gustf/js-levenshtein
- **Homepage:** https://github.com/gustf/js-levenshtein#readme
- **Tarball:** https://registry.npmjs.org/js-levenshtein/-/js-levenshtein-1.1.6.tgz
- **Tarball SHA-1:** `c6cee58eb3550372df8deb85fad5ce66ce01d59d`
- **File SHA-256:** `224a95ec182ba763c07e995e65b47e1e3aec9702b9ded4a8782503559c92c33f`
- **Size:** 1,945 bytes / 106 lines
- **License:** MIT

### 4. `func_04_damerauLevenshtein.js`

- **Package:** `damerau-levenshtein@1.0.8` ([npm](https://www.npmjs.com/package/damerau-levenshtein/v/1.0.8))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/damerau-levenshtein@1.0.8/index.js
- **Mirror:** https://unpkg.com/damerau-levenshtein@1.0.8/index.js
- **Repository:** https://github.com/tad-lispy/node-damerau-levenshtein
- **Homepage:** https://github.com/tad-lispy/node-damerau-levenshtein#readme
- **Tarball:** https://registry.npmjs.org/damerau-levenshtein/-/damerau-levenshtein-1.0.8.tgz
- **Tarball SHA-1:** `b43d286ccbd36bc5b2f7ed41caf2d0aba1f8a6e7`
- **File SHA-256:** `d4150544d11f0d52cd0dcd6bf57274e8b2996793a8dac341b396caf7aac3ca7c`
- **Size:** 1,987 bytes / 73 lines
- **License:** BSD-2-Clause

### 5. `func_05_unionFind.js`

- **Package:** `union-find@1.0.2` ([npm](https://www.npmjs.com/package/union-find/v/1.0.2))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/union-find@1.0.2/index.js
- **Mirror:** https://unpkg.com/union-find@1.0.2/index.js
- **Repository:** https://github.com/mikolalysenko/union-find
- **Tarball:** https://registry.npmjs.org/union-find/-/union-find-1.0.2.tgz
- **Tarball SHA-1:** `292bac415e6ad3a89535d237010db4a536284e58`
- **File SHA-256:** `91d2655bc16ac282d38ea9a285c304c7a7a34ba4da72265c2ade3bc3ac4cb82c`
- **Size:** 1,045 bytes / 62 lines
- **License:** MIT

### 6. `func_06_naturalCompare.js`

- **Package:** `natural-compare@1.4.0` ([npm](https://www.npmjs.com/package/natural-compare/v/1.4.0))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/natural-compare@1.4.0/index.js
- **Mirror:** https://unpkg.com/natural-compare@1.4.0/index.js
- **Repository:** https://github.com/litejs/natural-compare-lite
- **Homepage:** https://github.com/litejs/natural-compare-lite#readme
- **Tarball:** https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz
- **Tarball SHA-1:** `4abebfeed7541f2c27acfb29bdbbd15c8d5ba4f7`
- **File SHA-256:** `15f5c6fd3086eb01f2beede34bf23a84f3ca2b9f4a87ec86c1bfc2045b99c6e3`
- **Size:** 1,303 bytes / 58 lines
- **License:** MIT

### 7. `func_07_toposort.js`

- **Package:** `toposort@2.0.2` ([npm](https://www.npmjs.com/package/toposort/v/2.0.2))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/toposort@2.0.2/index.js
- **Mirror:** https://unpkg.com/toposort@2.0.2/index.js
- **Repository:** https://github.com/marcelklehr/toposort
- **Homepage:** https://github.com/marcelklehr/toposort#readme
- **Tarball:** https://registry.npmjs.org/toposort/-/toposort-2.0.2.tgz
- **Tarball SHA-1:** `ae21768175d1559d48bef35420b2f4962f09c330`
- **File SHA-256:** `9e0ff177affd94f951923d5b809b9b365c578b256b640d30dcfd6a0485dfde81`
- **Size:** 2,270 bytes / 99 lines
- **License:** MIT

### 8. `func_08_topsort.js`

- **Package:** `topsort@0.0.2` ([npm](https://www.npmjs.com/package/topsort/v/0.0.2))
- **Entry path in package:** `lib/topsort.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/topsort@0.0.2/lib/topsort.js
- **Mirror:** https://unpkg.com/topsort@0.0.2/lib/topsort.js
- **Repository:** https://github.com/samuelneff/topsort
- **Tarball:** https://registry.npmjs.org/topsort/-/topsort-0.0.2.tgz
- **Tarball SHA-1:** `2e5e0ee8a1439417f101d5b9b2d035e620263321`
- **File SHA-256:** `9eae643fbc37b73b2f4878d07c1eefe7a91870d8cc8b84fe9bc0560b1d0a9eed`
- **Size:** 3,174 bytes / 111 lines
- **License:** n/a

### 9. `func_09_dijkstra.js`

- **Package:** `dijkstrajs@1.0.3` ([npm](https://www.npmjs.com/package/dijkstrajs/v/1.0.3))
- **Entry path in package:** `dijkstra.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/dijkstrajs@1.0.3/dijkstra.js
- **Mirror:** https://unpkg.com/dijkstrajs@1.0.3/dijkstra.js
- **Repository:** https://github.com/tcort/dijkstrajs
- **Tarball:** https://registry.npmjs.org/dijkstrajs/-/dijkstrajs-1.0.3.tgz
- **Tarball SHA-1:** `4c8dbdea1f0f6478bff94d9c49c784d623e4fc23`
- **File SHA-256:** `7f5721e77332370a71314f1536b8c552f4f9dbd99bbc6c5aa10df3253eacfd5c`
- **Size:** 5,206 bytes / 166 lines
- **License:** MIT

### 10. `func_10_priorityQueue.js`

- **Package:** `priorityqueuejs@2.0.0` ([npm](https://www.npmjs.com/package/priorityqueuejs/v/2.0.0))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/priorityqueuejs@2.0.0/index.js
- **Mirror:** https://unpkg.com/priorityqueuejs@2.0.0/index.js
- **Repository:** https://github.com/janogonzalez/priorityqueuejs
- **Homepage:** https://github.com/janogonzalez/priorityqueuejs#readme
- **Tarball:** https://registry.npmjs.org/priorityqueuejs/-/priorityqueuejs-2.0.0.tgz
- **Tarball SHA-1:** `96064040edd847ee9dd3013d8e16297399a6bd4f`
- **File SHA-256:** `5ea404245cb759b5b3192c806a90da0f75a2d1d7fcccf1de6a2342ea4294fc4c`
- **Size:** 3,678 bytes / 173 lines
- **License:** MIT

### 11. `func_11_sortedArray.js`

- **Package:** `sorted-array-functions@1.3.0` ([npm](https://www.npmjs.com/package/sorted-array-functions/v/1.3.0))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/sorted-array-functions@1.3.0/index.js
- **Mirror:** https://unpkg.com/sorted-array-functions@1.3.0/index.js
- **Repository:** https://github.com/mafintosh/sorted-array-functions
- **Tarball:** https://registry.npmjs.org/sorted-array-functions/-/sorted-array-functions-1.3.0.tgz
- **Tarball SHA-1:** `8605695563294dffb2c9796d602bd8459f7a0dd5`
- **File SHA-256:** `d55ef3895f7d88805d4d6eeab000bdc8d393cb55ec4784e6242a5e09cbe2b14e`
- **Size:** 3,159 bytes / 174 lines
- **License:** MIT

### 12. `func_12_fastSort.js`

- **Package:** `fast-sort@3.4.1` ([npm](https://www.npmjs.com/package/fast-sort/v/3.4.1))
- **Entry path in package:** `dist/sort.cjs.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/fast-sort@3.4.1/dist/sort.cjs.js
- **Mirror:** https://unpkg.com/fast-sort@3.4.1/dist/sort.cjs.js
- **Repository:** https://github.com/snovakovic/fast-sort
- **Tarball:** https://registry.npmjs.org/fast-sort/-/fast-sort-3.4.1.tgz
- **Tarball SHA-1:** `837e1abaafdc6c6c077b632913a7ec2dda283cb6`
- **File SHA-256:** `db06446b26666275f806dfecd28c5fb843844cae4b65f4facea777ce367d448b`
- **Size:** 4,811 bytes / 126 lines
- **License:** MIT

### 13. `func_13_mersenneTwister.js`

- **Package:** `mersenne-twister@1.1.0` ([npm](https://www.npmjs.com/package/mersenne-twister/v/1.1.0))
- **Entry path in package:** `src/mersenne-twister.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/mersenne-twister@1.1.0/src/mersenne-twister.js
- **Mirror:** https://unpkg.com/mersenne-twister@1.1.0/src/mersenne-twister.js
- **Repository:** https://github.com/boo1ean/mersenne-twister
- **Tarball:** https://registry.npmjs.org/mersenne-twister/-/mersenne-twister-1.1.0.tgz
- **Tarball SHA-1:** `f916618ee43d7179efcf641bec4531eb9670978a`
- **File SHA-256:** `b197b673a9e8add2068c9062e5f9222f73ae46ff03634909db28a924fdcad0eb`
- **Size:** 7,351 bytes / 211 lines
- **License:** MIT

### 14. `func_14_stringSimilarity.js`

- **Package:** `string-similarity@4.0.4` ([npm](https://www.npmjs.com/package/string-similarity/v/4.0.4))
- **Entry path in package:** `src/index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/string-similarity@4.0.4/src/index.js
- **Mirror:** https://unpkg.com/string-similarity@4.0.4/src/index.js
- **Repository:** https://github.com/aceakash/string-similarity
- **Homepage:** https://github.com/aceakash/string-similarity#readme
- **Tarball:** https://registry.npmjs.org/string-similarity/-/string-similarity-4.0.4.tgz
- **Tarball SHA-1:** `42d01ab0b34660ea8a018da8f56a3309bb8b2a5b`
- **File SHA-256:** `b3b6505f784755ed0cf5c25e2705d11c2696468e3c58c70b22b795eca16eb67f`
- **Size:** 1,985 bytes / 67 lines
- **License:** ISC

### 15. `func_15_combinatorics.js`

- **Package:** `js-combinatorics@2.1.4` ([npm](https://www.npmjs.com/package/js-combinatorics/v/2.1.4))
- **Entry path in package:** `commonjs/combinatorics.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/js-combinatorics@2.1.4/commonjs/combinatorics.js
- **Mirror:** https://unpkg.com/js-combinatorics@2.1.4/commonjs/combinatorics.js
- **Repository:** https://github.com/dankogai/js-combinatorics
- **Homepage:** https://github.com/dankogai/js-combinatorics#readme
- **Tarball:** https://registry.npmjs.org/js-combinatorics/-/js-combinatorics-2.1.4.tgz
- **Tarball SHA-1:** `2fc426b39c3f0b6a9f16e2b62407cb84ef8146b7`
- **File SHA-256:** `c6a59157612c55c64dce7ef9898e79418df5f478cbad605ef4cac5b8c5ba424b`
- **Size:** 12,310 bytes / 441 lines
- **License:** MIT

### 16. `func_16_isEmail.js`

- **Package:** `email-validator@2.0.4` ([npm](https://www.npmjs.com/package/email-validator/v/2.0.4))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/email-validator@2.0.4/index.js
- **Mirror:** https://unpkg.com/email-validator@2.0.4/index.js
- **Repository:** https://github.com/manishsaraan/email-validator
- **Homepage:** http://github.com/manishsaraan/email-validator
- **Tarball:** https://registry.npmjs.org/email-validator/-/email-validator-2.0.4.tgz
- **Tarball SHA-1:** `b8dfaa5d0dae28f1b03c95881d904d4e40bfe7ed`
- **File SHA-256:** `72a150940d35695c23e26e262e564dae9397ca9757e2ab57b1c784607d9838b1`
- **Size:** 898 bytes / 30 lines
- **License:** n/a

### 17. `func_17_isUrl.js`

- **Package:** `is-url@1.2.4` ([npm](https://www.npmjs.com/package/is-url/v/1.2.4))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/is-url@1.2.4/index.js
- **Mirror:** https://unpkg.com/is-url@1.2.4/index.js
- **Repository:** https://github.com/segmentio/is-url
- **Homepage:** https://github.com/segmentio/is-url#readme
- **Tarball:** https://registry.npmjs.org/is-url/-/is-url-1.2.4.tgz
- **Tarball SHA-1:** `04a4df46d28c4cff3d73d01ff06abeb318a1aa52`
- **File SHA-256:** `c7cb9f56300321d104c9772c054144d75e3bf280d184d547fab525f9fbf16e5c`
- **Size:** 856 bytes / 48 lines
- **License:** MIT

### 18. `func_18_isUri.js`

- **Package:** `valid-url@1.0.9` ([npm](https://www.npmjs.com/package/valid-url/v/1.0.9))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/valid-url@1.0.9/index.js
- **Mirror:** https://unpkg.com/valid-url@1.0.9/index.js
- **Repository:** https://github.com/ogt/valid-url
- **Tarball:** https://registry.npmjs.org/valid-url/-/valid-url-1.0.9.tgz
- **Tarball SHA-1:** `1c14479b40f1397a75782f115e4086447433a200`
- **File SHA-256:** `469c5c584ff2e0f8d219e88b9da80eac8f22f27f85e597e1b7032d0b8e17dca9`
- **Size:** 4,090 bytes / 154 lines
- **License:** n/a

### 19. `func_19_isJson.js`

- **Package:** `is-json@3.0.1` ([npm](https://www.npmjs.com/package/is-json/v/3.0.1))
- **Entry path in package:** `dist/index.cjs`
- **Direct file link:** https://cdn.jsdelivr.net/npm/is-json@3.0.1/dist/index.cjs
- **Mirror:** https://unpkg.com/is-json@3.0.1/dist/index.cjs
- **Repository:** https://github.com/joaquimserafim/is-json
- **Homepage:** https://github.com/joaquimserafim/is-json#readme
- **Tarball:** https://registry.npmjs.org/is-json/-/is-json-3.0.1.tgz
- **Tarball SHA-1:** `ecfeefbaea31cab8ccb844bc48a68738f3593a48`
- **File SHA-256:** `9ef7dbfe7591b8495cdcd84c9980ebe2c840acef5a85e07e81b34bb19a5e8376`
- **Size:** 1,006 bytes / 36 lines
- **License:** ISC

### 20. `func_20_isBase64.js`

- **Package:** `is-base64@1.1.0` ([npm](https://www.npmjs.com/package/is-base64/v/1.1.0))
- **Entry path in package:** `is-base64.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/is-base64@1.1.0/is-base64.js
- **Mirror:** https://unpkg.com/is-base64@1.1.0/is-base64.js
- **Repository:** https://github.com/miguelmota/is-base64
- **Tarball:** https://registry.npmjs.org/is-base64/-/is-base64-1.1.0.tgz
- **Tarball SHA-1:** `8ce1d719895030a457c59a7dcaf39b66d99d56b4`
- **File SHA-256:** `d3492719893a35e8e6352007102e5fe83546b031b0af6acf724568f96793af03`
- **Size:** 1,143 bytes / 46 lines
- **License:** MIT

### 21. `func_21_isMd5.js`

- **Package:** `is-md5@0.0.2` ([npm](https://www.npmjs.com/package/is-md5/v/0.0.2))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/is-md5@0.0.2/index.js
- **Mirror:** https://unpkg.com/is-md5@0.0.2/index.js
- **Repository:** https://github.com/imanhodjaev/is-md5
- **Homepage:** https://github.com/imanhodjaev/is-md5#readme
- **Tarball:** https://registry.npmjs.org/is-md5/-/is-md5-0.0.2.tgz
- **Tarball SHA-1:** `92fe9d37dae4aabf54d933ab1f4ef0ccd980c869`
- **File SHA-256:** `39283fe669690292632a52f0dc4e60ddd955df52a764d836c496964a3d78a0ab`
- **Size:** 107 bytes / 6 lines
- **License:** MIT

### 22. `func_22_isUuid.js`

- **Package:** `is-uuid@1.0.2` ([npm](https://www.npmjs.com/package/is-uuid/v/1.0.2))
- **Entry path in package:** `lib/is-uuid.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/is-uuid@1.0.2/lib/is-uuid.js
- **Mirror:** https://unpkg.com/is-uuid@1.0.2/lib/is-uuid.js
- **Repository:** https://github.com/afram/is-uuid
- **Homepage:** https://github.com/afram/is-uuid#readme
- **Tarball:** https://registry.npmjs.org/is-uuid/-/is-uuid-1.0.2.tgz
- **Tarball SHA-1:** `ad1898ddf154947c25c8e54966f48604e9caecc4`
- **File SHA-256:** `29664f9063d106747e3f74e188b0ab27660fef7936eab4a600788f3b87d6370c`
- **Size:** 1,109 bytes / 46 lines
- **License:** MIT

### 23. `func_23_uuidValidate.js`

- **Package:** `uuid-validate@0.0.3` ([npm](https://www.npmjs.com/package/uuid-validate/v/0.0.3))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/uuid-validate@0.0.3/index.js
- **Mirror:** https://unpkg.com/uuid-validate@0.0.3/index.js
- **Repository:** https://github.com/WatchBeam/uuid-validate
- **Tarball:** https://registry.npmjs.org/uuid-validate/-/uuid-validate-0.0.3.tgz
- **Tarball SHA-1:** `e30617f75dc742a0e4f95012a11540faf9d39ab4`
- **File SHA-256:** `73af1b9d621d6e4527a81c0c83c42358a4ed6fbf84057f2a6faf6c43a775fe6e`
- **Size:** 2,853 bytes / 99 lines
- **License:** MIT

### 24. `func_24_luhn.js`

- **Package:** `luhn@2.4.1` ([npm](https://www.npmjs.com/package/luhn/v/2.4.1))
- **Entry path in package:** `src/luhn.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/luhn@2.4.1/src/luhn.js
- **Mirror:** https://unpkg.com/luhn@2.4.1/src/luhn.js
- **Repository:** https://github.com/JamesEggers1/node-luhn
- **Tarball:** https://registry.npmjs.org/luhn/-/luhn-2.4.1.tgz
- **Tarball SHA-1:** `9cf501c5d0e9f7ee79504338ae71c9bcc67c304a`
- **File SHA-256:** `a0a19d8f3b54c65ed0a1f4e04c39b563508393f4e4b541dcf85100c30f81fbe9`
- **Size:** 795 bytes / 42 lines
- **License:** MIT

### 25. `func_25_jwtDecode.js`

- **Package:** `jwt-decode@4.0.0` ([npm](https://www.npmjs.com/package/jwt-decode/v/4.0.0))
- **Entry path in package:** `build/cjs/index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/jwt-decode@4.0.0/build/cjs/index.js
- **Mirror:** https://unpkg.com/jwt-decode@4.0.0/build/cjs/index.js
- **Repository:** https://github.com/auth0/jwt-decode
- **Homepage:** https://github.com/auth0/jwt-decode#readme
- **Tarball:** https://registry.npmjs.org/jwt-decode/-/jwt-decode-4.0.0.tgz
- **Tarball SHA-1:** `2270352425fd413785b2faf11f6e755c5151bd4b`
- **File SHA-256:** `00c73a8f471d530b034d6337db03a0667ab8047a37bbd32e8130b9c49647bc42`
- **Size:** 1,894 bytes / 63 lines
- **License:** MIT

### 26. `func_26_slugify.js`

- **Package:** `slugify@1.6.9` ([npm](https://www.npmjs.com/package/slugify/v/1.6.9))
- **Entry path in package:** `slugify.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/slugify@1.6.9/slugify.js
- **Mirror:** https://unpkg.com/slugify@1.6.9/slugify.js
- **Repository:** https://github.com/simov/slugify
- **Tarball:** https://registry.npmjs.org/slugify/-/slugify-1.6.9.tgz
- **Tarball SHA-1:** `610957dea21e56b65e3a153215ef7b265715c8e8`
- **File SHA-256:** `3b47b6f184ae98e958de5bd95a2cf6c8f82c84c6484188a54e204c63d2540696`
- **Size:** 9,318 bytes / 70 lines
- **License:** MIT

### 27. `func_27_wordWrap.js`

- **Package:** `word-wrap@1.2.5` ([npm](https://www.npmjs.com/package/word-wrap/v/1.2.5))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/word-wrap@1.2.5/index.js
- **Mirror:** https://unpkg.com/word-wrap@1.2.5/index.js
- **Repository:** https://github.com/jonschlinkert/word-wrap
- **Tarball:** https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz
- **Tarball SHA-1:** `d2c45c6dd4fbce621a66f136cbe328afd0410b34`
- **File SHA-256:** `10fa705ebcff5c8e724c457f9a94eff8f795cf09938c941debdd18df5fcd0309`
- **Size:** 1,455 bytes / 62 lines
- **License:** MIT

### 28. `func_28_isAlphanumeric.js`

- **Package:** `is-alphanumeric@1.0.0` ([npm](https://www.npmjs.com/package/is-alphanumeric/v/1.0.0))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/is-alphanumeric@1.0.0/index.js
- **Mirror:** https://unpkg.com/is-alphanumeric@1.0.0/index.js
- **Repository:** https://github.com/arthurvr/is-alphanumeric
- **Homepage:** https://github.com/arthurvr/is-alphanumeric#readme
- **Tarball:** https://registry.npmjs.org/is-alphanumeric/-/is-alphanumeric-1.0.0.tgz
- **Tarball SHA-1:** `4a9cef71daf4c001c1d81d63d140cf53fd6889f4`
- **File SHA-256:** `3a571efca8171855023fa319ac42bb8c8e7a77746aa014c4ca3a6126f16b603e`
- **Size:** 186 bytes / 9 lines
- **License:** MIT

### 29. `func_29_isHexColor.js`

- **Package:** `hex-color-regex@1.1.0` ([npm](https://www.npmjs.com/package/hex-color-regex/v/1.1.0))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/hex-color-regex@1.1.0/index.js
- **Mirror:** https://unpkg.com/hex-color-regex@1.1.0/index.js
- **Repository:** https://github.com/regexps/hex-color-regex
- **Homepage:** https://github.com/regexps/hex-color-regex#readme
- **Tarball:** https://registry.npmjs.org/hex-color-regex/-/hex-color-regex-1.1.0.tgz
- **Tarball SHA-1:** `4c06fccb4602fe2602b3c93df82d7e7dbf1a8a8e`
- **File SHA-256:** `ef5ce30fb57a7f65921559e2b4706027268208f3ffd578e4897fc9543f7459d8`
- **Size:** 459 bytes / 17 lines
- **License:** MIT

### 30. `func_30_queryString.js`

- **Package:** `querystringify@2.2.0` ([npm](https://www.npmjs.com/package/querystringify/v/2.2.0))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/querystringify@2.2.0/index.js
- **Mirror:** https://unpkg.com/querystringify@2.2.0/index.js
- **Repository:** https://github.com/unshiftio/querystringify
- **Tarball:** https://registry.npmjs.org/querystringify/-/querystringify-2.2.0.tgz
- **Tarball SHA-1:** `3345941b4153cb9d082d8eee4cda2016a9aef7f6`
- **File SHA-256:** `f7154ff748b206631dd5d5ca12059f103770be321e016c48e675c57b7b9c6918`
- **Size:** 2,564 bytes / 119 lines
- **License:** MIT

### 31. `func_31_compact.js`

- **Package:** `lodash.compact@3.0.1` ([npm](https://www.npmjs.com/package/lodash.compact/v/3.0.1))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/lodash.compact@3.0.1/index.js
- **Mirror:** https://unpkg.com/lodash.compact@3.0.1/index.js
- **Repository:** https://github.com/lodash/lodash
- **Homepage:** https://lodash.com/
- **Tarball:** https://registry.npmjs.org/lodash.compact/-/lodash.compact-3.0.1.tgz
- **Tarball SHA-1:** `540ce3837745975807471e16b4a2ba21e7256ca5`
- **File SHA-256:** `a841926b4c774b98fd79e42a1e328c4020b66aa2e2608934630edc02547a160f`
- **Size:** 1,059 bytes / 40 lines
- **License:** MIT

### 32. `func_32_chunk.js`

- **Package:** `lodash.chunk@4.2.0` ([npm](https://www.npmjs.com/package/lodash.chunk/v/4.2.0))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/lodash.chunk@4.2.0/index.js
- **Mirror:** https://unpkg.com/lodash.chunk@4.2.0/index.js
- **Repository:** https://github.com/lodash/lodash
- **Homepage:** https://lodash.com/
- **Tarball:** https://registry.npmjs.org/lodash.chunk/-/lodash.chunk-4.2.0.tgz
- **Tarball SHA-1:** `66e5ce1f76ed27b4303d8c6512e8d1216e8106bc`
- **File SHA-256:** `e123b94d40be87a212eb4e0fad4bad224bb3768199f49eda029916770ab39654`
- **Size:** 11,608 bytes / 476 lines
- **License:** MIT

### 33. `func_33_flatten.js`

- **Package:** `arr-flatten@1.1.0` ([npm](https://www.npmjs.com/package/arr-flatten/v/1.1.0))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/arr-flatten@1.1.0/index.js
- **Mirror:** https://unpkg.com/arr-flatten@1.1.0/index.js
- **Repository:** https://github.com/jonschlinkert/arr-flatten
- **Tarball:** https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz
- **Tarball SHA-1:** `36048bbff4e7b47e136644316c99669ea5ae91f1`
- **File SHA-256:** `69d5763ad59ce6caba72556398e4468c90de09cfae19b05008804014820819f1`
- **Size:** 418 bytes / 23 lines
- **License:** MIT

### 34. `func_34_unique.js`

- **Package:** `array-unique@0.3.2` ([npm](https://www.npmjs.com/package/array-unique/v/0.3.2))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/array-unique@0.3.2/index.js
- **Mirror:** https://unpkg.com/array-unique@0.3.2/index.js
- **Repository:** https://github.com/jonschlinkert/array-unique
- **Tarball:** https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz
- **Tarball SHA-1:** `a894b75d4bc4f6cd679ef3244a9fd8f46ae2d428`
- **File SHA-256:** `d410ca4ad30538690d81144f2b67f0b92db90482d3aea2a293446c559517ceb2`
- **Size:** 829 bytes / 44 lines
- **License:** MIT

### 35. `func_35_difference.js`

- **Package:** `arr-diff@4.0.0` ([npm](https://www.npmjs.com/package/arr-diff/v/4.0.0))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/arr-diff@4.0.0/index.js
- **Mirror:** https://unpkg.com/arr-diff@4.0.0/index.js
- **Repository:** https://github.com/jonschlinkert/arr-diff
- **Tarball:** https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz
- **Tarball SHA-1:** `d6461074febfec71e7e15235761a329a5dc7c520`
- **File SHA-256:** `900ab06e56ab827cd64e5978539b1c6985b914c919e873962c97dc7006c19ea8`
- **Size:** 805 bytes / 48 lines
- **License:** MIT

### 36. `func_36_intersect.js`

- **Package:** `just-intersect@4.3.0` ([npm](https://www.npmjs.com/package/just-intersect/v/4.3.0))
- **Entry path in package:** `index.cjs`
- **Direct file link:** https://cdn.jsdelivr.net/npm/just-intersect@4.3.0/index.cjs
- **Mirror:** https://unpkg.com/just-intersect@4.3.0/index.cjs
- **Repository:** https://github.com/angus-c/just
- **Homepage:** https://github.com/angus-c/just#readme
- **Tarball:** https://registry.npmjs.org/just-intersect/-/just-intersect-4.3.0.tgz
- **Tarball SHA-1:** `b15094c1f2f45fc3a4df33a0cac86724f24dbc8e`
- **File SHA-256:** `1cc560c491a0deb9007274a40890fb4d599db551b30286d07afb4f153c2e0048`
- **Size:** 803 bytes / 41 lines
- **License:** MIT

### 37. `func_37_groupBy.js`

- **Package:** `just-group-by@2.2.0` ([npm](https://www.npmjs.com/package/just-group-by/v/2.2.0))
- **Entry path in package:** `index.cjs`
- **Direct file link:** https://cdn.jsdelivr.net/npm/just-group-by@2.2.0/index.cjs
- **Mirror:** https://unpkg.com/just-group-by@2.2.0/index.cjs
- **Repository:** https://github.com/angus-c/just
- **Homepage:** https://github.com/angus-c/just#readme
- **Tarball:** https://registry.npmjs.org/just-group-by/-/just-group-by-2.2.0.tgz
- **Tarball SHA-1:** `814be9b4ab55b1bed07c3df6587b7fbbfe0f9c9c`
- **File SHA-256:** `b1dd72dc49435d54bc6ef30b444de8ab7134544b0be0dc2259ef578c03a6bc42`
- **Size:** 571 bytes / 27 lines
- **License:** MIT

### 38. `func_38_deepEqual.js`

- **Package:** `fast-deep-equal@3.1.3` ([npm](https://www.npmjs.com/package/fast-deep-equal/v/3.1.3))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/fast-deep-equal@3.1.3/index.js
- **Mirror:** https://unpkg.com/fast-deep-equal@3.1.3/index.js
- **Repository:** https://github.com/epoberezkin/fast-deep-equal
- **Homepage:** https://github.com/epoberezkin/fast-deep-equal#readme
- **Tarball:** https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz
- **Tarball SHA-1:** `3a7d56b559d6cbc3eb512325244e619a65c6c525`
- **File SHA-256:** `eb469e206280321a3878f2335ec98aa2104a155079d8ed83a23029098dccd215`
- **Size:** 1,177 bytes / 47 lines
- **License:** MIT

### 39. `func_39_cloneDeep.js`

- **Package:** `just-clone@6.2.0` ([npm](https://www.npmjs.com/package/just-clone/v/6.2.0))
- **Entry path in package:** `index.cjs`
- **Direct file link:** https://cdn.jsdelivr.net/npm/just-clone@6.2.0/index.cjs
- **Mirror:** https://unpkg.com/just-clone@6.2.0/index.cjs
- **Repository:** https://github.com/angus-c/just
- **Homepage:** https://github.com/angus-c/just#readme
- **Tarball:** https://registry.npmjs.org/just-clone/-/just-clone-6.2.0.tgz
- **Tarball SHA-1:** `a4614d9bf7e4bbdcae7f9ba904aea5ea9cae8ae5`
- **File SHA-256:** `a9f295a9e69a82c0fd4d0e8ed3e8f0f1318458b2a16386c0e02e855d419b541e`
- **Size:** 1,428 bytes / 55 lines
- **License:** MIT

### 40. `func_40_deepMerge.js`

- **Package:** `deepmerge@4.3.1` ([npm](https://www.npmjs.com/package/deepmerge/v/4.3.1))
- **Entry path in package:** `dist/cjs.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/deepmerge@4.3.1/dist/cjs.js
- **Mirror:** https://unpkg.com/deepmerge@4.3.1/dist/cjs.js
- **Repository:** https://github.com/TehShrike/deepmerge
- **Tarball:** https://registry.npmjs.org/deepmerge/-/deepmerge-4.3.1.tgz
- **Tarball SHA-1:** `44b5f2147cd3b00d4b56137685966f26fd25dd4a`
- **File SHA-256:** `2e5160f84a1141bd927264afe4d15766f1e6cf07daef182b37ff53fea121de7d`
- **Size:** 4,048 bytes / 134 lines
- **License:** MIT

### 41. `func_41_base64.js`

- **Package:** `base64-js@1.5.1` ([npm](https://www.npmjs.com/package/base64-js/v/1.5.1))
- **Entry path in package:** `index.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/base64-js@1.5.1/index.js
- **Mirror:** https://unpkg.com/base64-js@1.5.1/index.js
- **Repository:** https://github.com/beatgammit/base64-js
- **Tarball:** https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz
- **Tarball SHA-1:** `1b1b440160a5bf7ad40b650f095963481903930a`
- **File SHA-256:** `829eadd8a1a441d25be0cb93b00e16a0d0c20fd294db95d8f2ed87e6954b7182`
- **Size:** 3,932 bytes / 151 lines
- **License:** MIT

### 42. `func_42_md5.js`

- **Package:** `blueimp-md5@2.19.0` ([npm](https://www.npmjs.com/package/blueimp-md5/v/2.19.0))
- **Entry path in package:** `js/md5.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/blueimp-md5@2.19.0/js/md5.js
- **Mirror:** https://unpkg.com/blueimp-md5@2.19.0/js/md5.js
- **Repository:** https://github.com/blueimp/JavaScript-MD5
- **Tarball:** https://registry.npmjs.org/blueimp-md5/-/blueimp-md5-2.19.0.tgz
- **Tarball SHA-1:** `b53feea5498dcb53dc6ec4b823adb84b729c4af0`
- **File SHA-256:** `5f14f0efb563db7b23efaf394339a78bced6fd5ba649f049961a65476d928af5`
- **Size:** 11,559 bytes / 403 lines
- **License:** MIT

### 43. `func_43_sha256.js`

- **Package:** `js-sha256@1.0.0` ([npm](https://www.npmjs.com/package/js-sha256/v/1.0.0))
- **Entry path in package:** `build/sha256.node.cjs`
- **Direct file link:** https://cdn.jsdelivr.net/npm/js-sha256@1.0.0/build/sha256.node.cjs
- **Mirror:** https://unpkg.com/js-sha256@1.0.0/build/sha256.node.cjs
- **Repository:** https://github.com/emn178/js-sha256
- **Tarball:** https://registry.npmjs.org/js-sha256/-/js-sha256-1.0.0.tgz
- **Tarball SHA-1:** `24cdfe8c9184426d814da8e16ba0c769dc425416`
- **File SHA-256:** `8432293ab7fd9b7bc4aae9a280db18d31172b802636749c55ae8d1df7a09c32b`
- **Size:** 3,120 bytes / 132 lines
- **License:** MIT

### 44. `func_44_sha1.js`

- **Package:** `js-sha1@0.7.0` ([npm](https://www.npmjs.com/package/js-sha1/v/0.7.0))
- **Entry path in package:** `src/sha1.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/js-sha1@0.7.0/src/sha1.js
- **Mirror:** https://unpkg.com/js-sha1@0.7.0/src/sha1.js
- **Repository:** https://github.com/emn178/js-sha1
- **Tarball:** https://registry.npmjs.org/js-sha1/-/js-sha1-0.7.0.tgz
- **Tarball SHA-1:** `fecaf5f36bb09a51b01da46b43a207c8452c9c1e`
- **File SHA-256:** `604cc29324140fe535e3efb8c1ab3bc7737ce28dc6ffe5a0751962b5e634a132`
- **Size:** 16,343 bytes / 511 lines
- **License:** MIT

### 45. `func_45_crc32.js`

- **Package:** `crc-32@1.2.2` ([npm](https://www.npmjs.com/package/crc-32/v/1.2.2))
- **Entry path in package:** `crc32.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/crc-32@1.2.2/crc32.js
- **Mirror:** https://unpkg.com/crc-32@1.2.2/crc32.js
- **Repository:** https://github.com/SheetJS/js-crc32
- **Homepage:** https://sheetjs.com/
- **Tarball:** https://registry.npmjs.org/crc-32/-/crc-32-1.2.2.tgz
- **Tarball SHA-1:** `3cad35a934b8bf71f25ca524b6da51fb7eace2ff`
- **File SHA-256:** `8450a98f18b8a24ed088d07d64c5134896e54079757f783945054167a9d2e75e`
- **Size:** 3,566 bytes / 116 lines
- **License:** Apache-2.0

### 46. `func_46_adler32.js`

- **Package:** `adler-32@1.3.1` ([npm](https://www.npmjs.com/package/adler-32/v/1.3.1))
- **Entry path in package:** `adler32.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/adler-32@1.3.1/adler32.js
- **Mirror:** https://unpkg.com/adler-32@1.3.1/adler32.js
- **Repository:** https://github.com/SheetJS/js-adler32
- **Homepage:** http://sheetjs.com/opensource
- **Tarball:** https://registry.npmjs.org/adler-32/-/adler-32-1.3.1.tgz
- **Tarball SHA-1:** `1dbf0b36dda0012189a32b3679061932df1821e2`
- **File SHA-256:** `f2465cedbd906ae9e7f104adb0a38a44d42184aea5fde2b0eb884feb2dc99e70`
- **Size:** 2,417 bytes / 93 lines
- **License:** Apache-2.0

### 47. `func_47_rc4.js`

- **Package:** `rc4@0.1.5` ([npm](https://www.npmjs.com/package/rc4/v/0.1.5))
- **Entry path in package:** `rc4.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/rc4@0.1.5/rc4.js
- **Mirror:** https://unpkg.com/rc4@0.1.5/rc4.js
- **Repository:** https://github.com/phadej/rc4
- **Tarball:** https://registry.npmjs.org/rc4/-/rc4-0.1.5.tgz
- **Tarball SHA-1:** `08c6e04a0168f6eb621c22ab6cb1151bd9f4a64d`
- **File SHA-256:** `0835d80744de0cc4331a43a4ee9baf155ee0d791e4b21e3935440b209117fe27`
- **Size:** 4,633 bytes / 205 lines
- **License:** MIT

### 48. `func_48_murmurhash.js`

- **Package:** `murmurhash@2.0.1` ([npm](https://www.npmjs.com/package/murmurhash/v/2.0.1))
- **Entry path in package:** `murmurhash.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/murmurhash@2.0.1/murmurhash.js
- **Mirror:** https://unpkg.com/murmurhash@2.0.1/murmurhash.js
- **Repository:** https://github.com/perezd/node-murmurhash
- **Homepage:** https://github.com/perezd/node-murmurhash#readme
- **Tarball:** https://registry.npmjs.org/murmurhash/-/murmurhash-2.0.1.tgz
- **Tarball SHA-1:** `4097720e08cf978872194ad84ea5be2dec9b610f`
- **File SHA-256:** `21d38582478f661800ab47d444df4ab5e527fde303c348198642c71e47f8b225`
- **Size:** 4,096 bytes / 138 lines
- **License:** MIT

### 49. `func_49_bitTwiddle.js`

- **Package:** `bit-twiddle@1.0.2` ([npm](https://www.npmjs.com/package/bit-twiddle/v/1.0.2))
- **Entry path in package:** `twiddle.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/bit-twiddle@1.0.2/twiddle.js
- **Mirror:** https://unpkg.com/bit-twiddle@1.0.2/twiddle.js
- **Repository:** https://github.com/mikolalysenko/bit-twiddle
- **Tarball:** https://registry.npmjs.org/bit-twiddle/-/bit-twiddle-1.0.2.tgz
- **Tarball SHA-1:** `0c6c1fabe2b23d17173d9a61b7b7093eb9e1769e`
- **File SHA-256:** `742f8442d60feae35fb46f794b1141635c59e066e945f8298d4be568dd020844`
- **Size:** 5,011 bytes / 205 lines
- **License:** MIT

### 50. `func_50_hashSum.js`

- **Package:** `hash-sum@2.0.0` ([npm](https://www.npmjs.com/package/hash-sum/v/2.0.0))
- **Entry path in package:** `hash-sum.js`
- **Direct file link:** https://cdn.jsdelivr.net/npm/hash-sum@2.0.0/hash-sum.js
- **Mirror:** https://unpkg.com/hash-sum@2.0.0/hash-sum.js
- **Repository:** https://github.com/bevacqua/hash-sum
- **Tarball:** https://registry.npmjs.org/hash-sum/-/hash-sum-2.0.0.tgz
- **Tarball SHA-1:** `81d01bb5de8ea4a214ad5d6ead1b523460b0b45a`
- **File SHA-256:** `65864885ec40d747a8d8be777d2785636bab4c180d668da9e2b64d580af02e7f`
- **Size:** 1,542 bytes / 70 lines
- **License:** MIT
