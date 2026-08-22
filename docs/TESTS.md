# The Test Oracle — Official Upstream Suites

**Status:** `50 / 50` suites pass against `dataset/00_raw`. 7 488 assertions, none
skipped. Overall oracle strength (mutation score) **76 %**. The Ground Truth Rule
of paper Section 4 is met.

This document is the decision record for the oracle, as `SESSION_LOG.md` is for
the corpus. Its central claim, and the thing the rest of the document exists to
defend, is:

> **Pass Rate is scored by tests we did not write.**

Every assertion comes from the package maintainer's own suite, fetched from a
pinned artifact and stored byte-identical. Where the benchmark had to adapt
something, the adaptation lives *outside* the test file and is enumerated in §4.

---

## 1. Why upstream tests rather than hand-written ones

An LLM-deobfuscation benchmark scored by tests the benchmark's authors wrote is
circular in a way reviewers will notice: the same intuitions that shape the
prompts shape the oracle, and the AST baselines have no say in either. Upstream
suites remove that degree of freedom. They also predate this benchmark by years,
so they cannot have been written to make any tool look good.

The cost is that upstream suites are written for seven different runners, none
of which is Jest, and they assume they are running inside their own package.
§3 and §4 are how that cost was paid without editing a single assertion.

## 2. What the harness does

```
TARGET_DIR=dataset/00_raw npx jest
```

selects which pipeline stage every suite runs against. One variable re-points
the whole benchmark:

| Stage | Command |
|---|---|
| Ground truth | `TARGET_DIR=dataset/00_raw npx jest` |
| Obfuscator sanity | `TARGET_DIR=dataset/01_obfuscated/level_3 npx jest` |
| A deobfuscation run | `TARGET_DIR=dataset/02_deobfuscated/<model>_<strategy> npx jest` |

Layout:

| Path | Role |
|---|---|
| `fetch_tests.py` | Fetches the 50 suites from pinned artifacts, records sha256 of every file |
| `tests/upstream/<id>/` | The vendored suites, **byte-identical**, plus generated stubs |
| `tests/SOURCES.json` | Per-file origin URL, pin, sha256, size |
| `tools/verify_tests.js` | Re-hashes every vendored file against that record |
| `tests/runner/load-target.js` | The single point where a suite is bound to `TARGET_DIR` |
| `tests/runner/suites.js` | Per-suite binding: stubs, entry files, skips, custom flag |
| `tests/runner/build.js` | Generates the stubs and the `tests/entries/generated/*.test.js` entries |
| `tools/check_oracle_wiring.js` | Proves the oracle is wired (§5) |
| `tests/runner/shims/` | Runner adapters: tape, tap, ava, vows, testman, mukla, vitest, mocha, QUnit |
| `tests/entries/generated/<id>.test.js` | **Generated** Jest entry, one per corpus file — `build.js` wipes and rewrites this directory |
| `tests/entries/handwritten/<id>.test.js` | **Hand-written** Jest entry for the 6 suites of §4.3 — never generated, never wiped |

### The stub trick

Upstream suites reach their subject with `require('../')`, `require('../src/luhn')`,
`require('./murmurhash')` and so on. Rather than rewrite those lines, the harness
**synthesises the package layout each suite expects**. `tests/runner/build.js`
writes, for example, `tests/upstream/func_24_luhn/src/luhn.js` containing:

```js
module.exports = require('../../loadTarget')('func_24_luhn');
```

The suite loads what it thinks is its own package and gets the corpus file for
the current stage. 46 such stubs exist. They are generated, banner-marked, and
excluded from the provenance file, so vendored and synthesised code can never be
confused — `tools/verify_tests.js` reports the two counts separately.

## 3. Provenance

25 of 50 packages ship their tests inside the published npm tarball; those are
extracted from **the same hash-verified tarball `fetch_dataset.py` took the code
from**, so code and oracle come from one artifact. The other 25 live only in
GitHub and are fetched from `raw.githubusercontent.com` at a **literal commit
SHA** — hard-coded in `fetch_tests.py`, never resolved through the
GitHub API at run time, so a retargeted tag cannot silently swap the oracle out
from under a published result.

| # | corpus file | package | test source | pin | runner | tests | oracle |
|---|---|---|---|---|---|---|---|
| 01 | `func_01_binarySearch` | binary-search@1.3.6 | npm | tarball `e3242601` | chai | 8 | 50% |
| 02 | `func_02_binarySearchBounds` | binary-search-bounds@2.0.5 | npm | tarball `125e5bd3` | tape | 5 | 90% |
| 03 | `func_03_levenshtein` | js-levenshtein@1.1.6 | gh | `v1.1.6` `55ca1bf2` | ava | 1 | 60% |
| 04 | `func_04_damerauLevenshtein` | damerau-levenshtein@1.0.8 | npm | tarball `b43d286c` | assert | 18 | 60% |
| 05 | `func_05_unionFind` | union-find@1.0.2 | npm | tarball `292bac41` | tape | 1 | 33% |
| 06 | `func_06_naturalCompare` | natural-compare@1.4.0 | gh | `v1.4.0` `eec83eee` | testman | 6 | 20% |
| 07 | `func_07_toposort` | toposort@2.0.2 | npm | tarball `ae217681` | vows+assert | 9 | 80% |
| 08 | `func_08_topsort` | topsort@0.0.2 | npm | tarball `2e5e0ee8` | jasmine/bdd | 15 | 30% |
| 09 | `func_09_dijkstra` | dijkstrajs@1.0.3 | npm | tarball `4c8dbdea` | expect.js | 5 | 80% |
| 10 | `func_10_priorityQueue` | priorityqueuejs@2.0.0 | npm | tarball `96064040` | expect.js | 24 | 90% |
| 11 | `func_11_sortedArray` | sorted-array-functions@1.3.0 | npm | tarball `86056955` | tape | 18 | 90% |
| 12 | `func_12_jaroWinkler` | jaro-winkler@0.2.8 | npm | tarball `6727e0d0` | chai | 3 | 50% |
| 13 | `func_13_mersenneTwister` | mersenne-twister@1.1.0 | npm | tarball `f916618e` | jasmine/bdd | 3 | 80% |
| 14 | `func_14_stringSimilarity` | string-similarity@4.0.4 | gh | `4.0.4` `07cbc8d1` | jasmine/bdd | 11 | 70% |
| 15 | `func_15_combinatorics` | js-combinatorics@2.1.4 | gh | `2.1.4` `4ae77832` | chai | 118 | 70% |
| 16 | `func_16_isEmail` | email-validator@2.0.4 | npm | tarball `b8dfaa5d` | chai | 3 | 70% |
| 17 | `func_17_isUrl` | is-url@1.2.4 | npm | tarball `04a4df46` | assert | 32 | 87% |
| 18 | `func_18_isUri` | valid-url@1.0.9 | npm | tarball `1c14479b` | tap | 4 | 60% |
| 19 | `func_19_isJson` | is-json@3.0.1 | gh | `v3.0.1` `6e2ebf6c` | vitest | 37 | 90% |
| 20 | `func_20_isBase64` | is-base64@1.1.0 | npm | tarball `8ce1d719` | tape | 1 | 100% |
| 21 | `func_21_msDuration` | ms@2.1.3 | gh | `2.1.3` `1c6264b7` | expect.js | 49 | 90% |
| 22 | `func_22_isUuid` | is-uuid@1.0.2 | npm | tarball `ad1898dd` | jasmine/bdd | 54 | — |
| 23 | `func_23_uuidValidate` | uuid-validate@0.0.3 | gh | `v0.0.3` `06554db1` | jasmine/bdd | 8 | 80% |
| 24 | `func_24_luhn` | luhn@2.4.1 | npm | tarball `9cf501c5` | mocha+should | 36 | 100% |
| 25 | `func_25_jwtDecode` | jwt-decode@4.0.0 | gh | `v4.0.0` `3b2d105a` | jasmine/bdd | 15 | 90% |
| 26 | `func_26_pluralize` | pluralize@8.0.0 | gh | `v8.0.0` `0265e4d1` | chai | 4901 | 80% |
| 27 | `func_27_wordWrap` | word-wrap@1.2.5 | gh | `1.2.5` `207044eb` | mocha+assert | 13 | 100% |
| 28 | `func_28_byteSize` | bytes@3.1.2 | gh | `3.1.2` `9ddc13b6` | assert | 30 | 100% |
| 29 | `func_29_isHexColor` | hex-color-regex@1.1.0 | npm | tarball `4c06fccb` | mukla | 1 | 50% |
| 30 | `func_30_queryString` | querystringify@2.2.0 | gh | `2.2.0` `73db95a5` | jasmine/bdd | 20 | 100% |
| 31 | `func_31_objectPath` | object-path@0.11.8 | npm | tarball `ed002c02` | chai | 90 | 60% |
| 32 | `func_32_union` | arr-union@3.1.0 | gh | `3.1.0` `ede857f5` | should | 5 | 100% |
| 33 | `func_33_flatten` | arr-flatten@1.1.0 | gh | `1.1.0` `2f47651a` | mocha+assert | 2 | 100% |
| 34 | `func_34_unique` | array-unique@0.3.2 | gh | `0.3.2` `5dd2bcce` | mocha+should+assert | 4 | 66% |
| 35 | `func_35_difference` | arr-diff@4.0.0 | gh | `4.0.0` `0a04556f` | mocha+assert | 8 | 80% |
| 36 | `func_36_intersect` | intersect@1.0.1 | npm | tarball `332650e1` | tape | 4 | 90% |
| 37 | `func_37_groupBy` | just-group-by@2.2.0 | gh | `master` `d8c5dd18` | tape | 3 | 100% |
| 38 | `func_38_deepEqual` | fast-deep-equal@3.1.3 | gh | `v3.1.3` `d807ffc5` | assert | 110 | 100% |
| 39 | `func_39_cloneDeep` | rfdc@1.4.1 | npm | tarball `778f76c4` | tap | 136 | 80% |
| 40 | `func_40_deepMerge` | deepmerge@4.3.1 | gh | `v4.3.1` `5b87756a` | tape | 52 | 90% |
| 41 | `func_41_base64` | base64-js@1.5.1 | gh | `v1.5.1` `f3ea7adb` | tape | 5 | 100% |
| 42 | `func_42_md5` | blueimp-md5@2.19.0 | gh | `v2.19.0` `458b6624` | chai | 8 | 90% |
| 43 | `func_43_sha256` | js-sha256@1.0.0 | gh | `v1.0.0` `9a54fb31` | jasmine/bdd | 918 | 60% |
| 44 | `func_44_sha1` | js-sha1@0.7.0 | gh | `v0.7.0` `33acf624` | jasmine/bdd | 441 | 100% |
| 45 | `func_45_crc32` | js-crc@0.3.1 | npm | tarball `f52bb40a` | jasmine/bdd | 187 | 80% |
| 46 | `func_46_base32` | hi-base32@0.5.1 | gh | `v0.5.1` `59a75692` | jasmine/bdd | 7 | 80% |
| 47 | `func_47_rc4` | rc4@0.1.5 | gh | `v0.1.5` `b14bc687` | assert | 41 | 70% |
| 48 | `func_48_murmurhash` | murmurhash@2.0.1 | npm | tarball `4097720e` | bare script | 1 | 20% |
| 49 | `func_49_bitTwiddle` | bit-twiddle@1.0.2 | npm | tarball `0c6c1fab` | tape | 15 | 90% |
| 50 | `func_50_hashSum` | hash-sum@2.0.0 | npm | tarball `81d01bb5` | tape | 2 | 50% |

**7488 assertions across 50 suites. Overall oracle strength 76% (350/459 mutants detected).**

### 3.1 Version skew

A suite pinned to a commit that is NOT the release matching the corpus version
can assert behaviour the pinned code does not have. `slugify` demonstrated the
failure mode: at `master` its suite failed 5 assertions purely on charmap drift.

Ten corpus items were **replaced** for this reason rather than patched, because
provenance is the paper's central claim and "the tests are official" is worth
little if they are the wrong version's official tests. See SESSION_LOG §12.

One item remains:

| Suite | Corpus version | Test pin | Why |
|---|---|---|---|
| `func_37_groupBy` | just-group-by@2.2.0 | `angus-c/just` master commit | monorepo publishes no per-package tags; no dependency-free, tagged, tested alternative exists |

The mitigation is to pin its tests to the commit that published 2.2.0 rather than
to master HEAD. Until then this is the one place where the oracle could belong to
a different version than the code.

## 4. The adaptation ledger

Everything the benchmark had to do to run someone else's tests. Nothing in this
section changes an assertion.

### 4.1 Runner shims

Upstream suites use seven runners; Jest is an eighth. Each shim maps a runner's
registration and assertion API onto Jest's, and lives in `tests/runner/shims/`.

| Shim | Suites | Note |
|---|---|---|
| `tape` | 8 | Bridges `t.end()` / `t.plan(n)` to a returned promise. A body that neither ends nor plans is reported as a **harness error**, never auto-passed. |
| `tap` | 1 | node-tap's classic `require('tap').test` is tape-shaped. |
| `ava` | 2 | Completes on return; `t.end()` accepted for ava's legacy callback mode. |
| `vows` | 1 | Batch → describe/it. A sync topic that throws yields `vow(err, err)`, which is how toposort's cycle tests read the Error. `.run()` is neutralised — upstream's callback calls `process.exit()`. |
| `testman` | 1 | Fluent chain; records the already-computed operands and replays the comparisons inside a Jest test. |
| `mukla` | 1 | Arbitrarily nested blocks with assertions in the leaves; outermost block becomes one Jest test, nested blocks run inline. Granularity lost, assertions unchanged. |
| `vitest`, `mocha` | 1, 5 | Thin re-exports of the Jest globals. |
| `qunit` | 2 | For the lodash blocks (§4.3). |

Assertion semantics deliberately follow the *upstream* runner, not Jest:
`t.equal` is `===` (so `NaN !== NaN`, as tape has it) and `t.deepEqual` is
`assert.deepStrictEqual`. Loosening either would let a suite accept an
obfuscation artefact it should reject, inflating Pass Rate — the one direction
this benchmark must never err in.

Assertion *libraries* are the real ones from npm (`chai`, `should`, `expect.js`,
`assume`, `is-plain-object`, `guarded-array`, `is-mergeable-object`, `lodash`),
not reimplementations.

### 4.2 Babel is applied to six files only

`jest.config.js` runs Babel over the three TypeScript suites and the three ESM
ones, and nothing else. This is a correctness constraint, not a performance one.
Babel **reprints source**, and:

* `hash-sum`'s suite deliberately hashes two function literals differing only in
  whitespace — a reprint collapses them and the test fails on a difference the
  corpus file did not cause;
* `js-crc32` and `js-adler32` assign to undeclared globals, which Babel's
  injected `'use strict'` turns into a `ReferenceError`;
* `blueimp-md5`'s suite is an IIFE reading top-level `this`, which the ESM
  transform rewrites to `undefined`.

`dataset/` is excluded outright via `transformIgnorePatterns`. Obfuscated and
model-deobfuscated files are the object of study; transpiling them could repair
the very breakage the benchmark exists to score.

### 4.3 Six hand-written entries

These upstream suites cannot run unmodified against a single-file entry module.
In each case the *assertions and their data* are still upstream's.

| Suite | Why | What was done |
|---|---|---|
| `func_43_sha256`, `func_44_sha1`, `func_45_crc32`, `func_46_base32` | All four emn178 suites are bare IIFEs closing `})(sha256, sha224)` / `})(sha1)` / `})(crc32, crc16, createModel)` / `})(base32)`, expecting a loader to have put the subject on the global object. | The entry mirrors upstream's own `tests/node-test.*` for that package -- same globals, `TEST_INTERNALS = false`, `BUFFER = true`. Test bodies untouched. js-crc's `tests/models-test.js` is excluded: it reads its models off `var root = WINDOW ? window : {}`, which under Node is empty, so it is a browser-only file rather than an oracle. |
| `func_38_deepEqual` | Upstream's `spec/index.spec.js` runs its cases against **four** published builds; the corpus has one (`index.js`). Pointing the `es6` builds at it would fail Map/Set cases only that build claims to support -- scoring a build difference as a semantic failure. | Case data (`spec/tests.js`) is required byte-identical; the driver is upstream's `testCases()` with the three inapplicable build combinations dropped. |
| `func_48_murmurhash` | Upstream's `test.js` is a bare script with no framework — it `throw`s on mismatch. | Required inside one Jest test, so the throw is the failure. Oracle preserved exactly. |

### 4.4 Declared skips: none

The mechanism still exists -- a suite may declare, in `tests/runner/suites.js`,
assertions that cannot run here, each with a recorded reason, and Jest reports
them as skipped rather than having them deleted from a vendored file. Nothing
currently uses it. The two slugify assertions that did (they reload the module
via `delete require.cache[...]`, which Jest makes a deliberate no-op) left with
slugify itself.

### 4.5 Generated vs hand-written are kept apart

`tests/runner/build.js` rebuilds `tests/entries/generated/` from empty on every run, so a
suite dropped from `suites.js` cannot leave a stale entry scoring nothing. That
is only safe because the six non-regenerable entries live in `tests/entries/handwritten/`.
`build.js` also fails loudly if a suite marked `custom` has no file there — a
missing entry would otherwise mean a corpus file silently goes unscored.

### 4.6 Ordering

`func_26_slugify` requires `test/locales.js` before `test/slugify.js`, matching
what `mocha --recursive` does alphabetically. The reverse order lets `extend()`
in `slugify.js` pollute the locale charmap and fails `bg - bulgarian`. Upstream
has the same hazard; the harness reproduces upstream's order rather than papering
over it.

## 4.7 Wrapper stubs

A stub is normally a one-line re-export. Two packages publish a SECOND entry
point that is a thin wrapper over the first and whose suite requires both --
`rfdc/default.js` is literally `module.exports = require('./index.js')()`. Such a
stub is declared in `suites.js` as `{ path, expr, note }` so the wrapper is
reproduced rather than aliased to the factory itself. Aliasing it silently made
rfdc's `shorthand import` test compare a function against a clone result.

## 5. Is the oracle actually wired?

`50/50 green` is worthless if a suite would pass regardless of what the module
does — a mis-generated stub, a shim that swallows assertions, or a test that
never reaches its subject all look exactly like success.

`npm run check:wiring` builds a stage in which every corpus file is replaced by

```js
function noop() {}
module.exports = new Proxy(noop, { get: () => noop });
```

points `TARGET_DIR` at it, and requires **every** suite to fail.

```
suites that correctly FAILED against a no-op module: 50
suites that still PASSED (oracle holes):             0
```

Run this after any harness change. It is the check that makes the green run mean
something, and it should be re-run against each obfuscation level too.

## 5.1 How strong is each oracle? (mutation score)

Passing the saboteur check only proves a suite notices a module that does
NOTHING. `npm run measure:oracle` asks the sharper question: edit one operator or
literal in the corpus file -- flip a comparison, shift a boundary, negate a
boolean -- and does the suite go red?

```
npm run measure:oracle                     # 10 mutants per file, AST-based
npm run check:assertions                   # static: assertions that cannot fail
```

Current: **350/459 mutants detected, 76 %.** Per-file scores are the last column
of the table in §3. Distribution:

| Oracle strength | Files |
|---|---|
| 100 % | 11 |
| 80-99 % | 20 |
| 50-79 % | 14 |
| < 50 % | 4 |

Mutation is done on the AST (`@babel/parser`), never on text. An earlier
regex-based version "mutated" the URL inside a licence comment and reported a
hole that did not exist; 24 of 36 `<`-survivors were comments or regex character
classes. It also skips `__esModule` bundler plumbing, which is not behaviour.

**This number should be published, not hidden.** It is the honest precision of
the instrument: a PASS on a 100 %-strength item is strong evidence of semantic
recovery, a PASS on `func_48_murmurhash` (20 %) is weak. Interpreting Pass Rate
without it overstates what the benchmark measured. Very few benchmarks report
oracle strength at all, so this is a contribution rather than an admission.

The weakest four are known and deliberate:

| Suite | Score | Why it stays |
|---|---|---|
| `func_06_naturalCompare` | 20 % | 6 upstream tests; no dependency-free tagged alternative with a stronger suite |
| `func_48_murmurhash` | 20 % | suite is a framework-less 3-line script that exercises `v3` only, never `v2`. The obvious replacement, `imurmurhash@0.1.4`, ships **no tests at all** -- verified, not assumed |
| `func_08_topsort` | 30 % | jasmine-style suite, real but shallow |
| `func_05_unionFind` | 33 % | a single upstream test |

Two structural weaknesses the score exposes, both worth stating in
Threats to Validity:

* **Assertion weakness** -- the suite calls the code but does not check enough.
  `hash-sum` never pins a digest value, only that hashes are unique and stable,
  so a build that pads to 9 characters instead of 8 passes.
* **Coverage weakness** -- the suite never reaches the code at all. `murmurhash`
  exports `v2` and `v3`; only `v3` is ever called.

A golden-value layer recorded from `00_raw` would close the first but not the
second. Differential testing against `00_raw` on generated inputs would close
both, and is the natural next instrument: it measures semantic equivalence to the
original, which is exactly what the paper claims to measure.

## 6. Reproduction

```bash
npm install
python3 fetch_tests.py    # vendor 50 suites from pinned artifacts
node tests/runner/build.js        # regenerate stubs + tests/entries/generated/ entries
npm run groundtruth                # loadability + integrity + 50/50 pass
npm run check:wiring                     # prove the oracle is wired
```

`npm run groundtruth` chains the three gates that must hold before any
obfuscation or deobfuscation result is admissible:

1. `node tools/verify_dataset.js` — every corpus file `require()`s as CommonJS;
2. `node tools/verify_tests.js` — every vendored test file still matches its
   recorded sha256;
3. `TARGET_DIR=dataset/00_raw jest` — 50/50 suites pass.

## 7. Open items

* **The suites are as contaminated as the corpus.** §8 of `SESSION_LOG.md` notes
  that these packages are in every model's pretraining data. So are their tests.
  The mutated-corpus variant proposed there must mutate the *expected values* in
  the vendored suites too, or a memorising model still passes. This is the
  largest remaining threat to validity and it now has a concrete second half.
* **Runtime.** A full run is ~40 s, dominated by `func_45_crc32` and
  `func_46_adler32` (~39 s each; they sweep the Unicode table). At 3 models × 3
  strategies × 3 levels × 50 items this matters — consider `--maxWorkers` tuning
  or splitting those two suites out of per-run scoring.
* **Pass Rate granularity is not yet defined.** The suites yield 2 240 assertions,
  very unevenly distributed (1 for `func_03_levenshtein`, 918 for
  `func_43_sha256`). Whether Pass Rate is per-file binary (suite green / not) or
  assertion-weighted changes the metric completely. Per-file binary is what the
  Ground Truth Rule implies and what §5's saboteur check validates;
  assertion-weighted would let `func_43_sha256` dominate the mean.
* **`tests/github_tests/` and `tests/official_tests/`** — 100 files targeting the
  discarded function set, already broken before this session (`SESSION_LOG.md`
  §1.2). They are excluded via `testPathIgnorePatterns` but should be deleted or
  moved to `dataset/_legacy/`.
