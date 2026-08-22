# Session Log — Ground-Truth Corpus Rebuild

**Date:** 2026-08-21
**Paper:** *Benchmarking LLM-Based Deobfuscation Against Traditional AST Tools on Modern JavaScript Obfuscators*
**Scope of this session:** audit of the pre-existing benchmark scaffolding, and a full rebuild of the ground-truth corpus (`dataset/00_raw/`).

This document is the decision record for the corpus. It exists so the *why* behind
the dataset survives outside the chat window — much of it belongs, condensed, in the
paper's Dataset and Threats-to-Validity sections.

---

## 1. Audit of the original setup

The starting repository contained 50 raw JS files, 100 test files, and two Python
fetch scripts. Measured, not assumed:

### 1.1 The corpus was not loadable

| Property | Count |
|---|---|
| Files with unresolved ESM `import` of sibling modules | 26 / 50 |
| Files using ESM `export default` | 45 / 50 |
| Files with no export, referencing a global `CryptoJS` | 5 / 50 |
| **Files loadable as CommonJS** | **0 / 50** |

Examples: `func_01_binarySearch.js` imported `../../../utils/comparator/Comparator`;
`func_16_isEmail.js` imported six sibling helpers; `func_42_md5.js` was a CryptoJS
IIFE registering into a global that never existed.

Consequence: the harness's `require(targetPath)` threw on **every** file, so the
Ground Truth Rule (100 % pass on `00_raw`) evaluated to 0 %.

### 1.2 The test suite did not test what it claimed

- `main.py` pointed all 15 validator functions at the same URL
  (`validator.js/test/exports.test.js`), producing **15 byte-identical test bodies**
  that assert on library export surface rather than on `isEmail`, `isURL`, etc.
- 5 crypto tests were **YUI Test** (`YUI.add`, `Y.Assert`), not Jest — 0 `describe` blocks.
- 19 / 50 still contained ESM `import` statements Jest's CommonJS transform rejects.
- The regex import-adapter emitted incoherent code, e.g.
  `const assert = targetModule; const validator = targetModule;`
- `tests/github_tests/` — 0 / 50 had the `TARGET_DIR` header; entirely unadapted.
- The lodash suites were hand-written stubs, not adapted official tests;
  `compact` and `difference` had **one assertion each**.

### 1.3 Category provenance did not match the paper

`func_31`–`35` were named `arrayFlatten, powerSet, permutations, combinations,
fisherYates` but actually contained trekhleb's `cartesianProduct, bwPowerSet,
permutateWithoutRepetitions, combineWithoutRepetitions, fisherYates`. The paper's
Section 2 claims Category 3 is "lodash, ramda"; only 36–40 were lodash.

---

## 2. Decisions taken

**D1 — Replace the corpus rather than repair it.** Functions could change provided
per-category counts held (15 / 15 / 10 / 10). Repairing 26 files by inlining their
transitive dependencies was possible but produced files that no longer matched any
upstream artifact, weakening the provenance claim.

**D2 — Every file must be `require()`-able as-is.** No ESM syntax, no relative
imports, no external dependencies, no post-fetch rewriting. This is what makes the
`TARGET_DIR` swap across `00_raw` / `01_obfuscated` / `02_deobfuscated` coherent.

**D3 — Source from published single-file CommonJS npm packages.** This rules out
trekhleb (`export default`) and validator.js `src/` (ESM). Candidates were selected
**empirically**: 121 candidate packages were installed and machine-checked for ESM
syntax, relative requires, and external dependencies. 89 qualified; 50 were curated
from those.

**D4 — Fetch from registry tarballs, not a CDN.** `unpkg.com` is unreachable from
the build machine. `registry.npmjs.org` tarballs are better provenance regardless:
each has a published SHA-1 that `fetch_dataset.py` verifies against the downloaded
bytes before extraction.

**D5 — Bias selection toward smaller files.** Level-3 obfuscation (RC4 string
encoding + heavy control-flow flattening) typically inflates source 4–10×. Large
inputs would exceed model context windows and inflate API cost across
3 models × 3 prompting strategies × 3 levels.

**D6 — The unit of obfuscation equals the unit of testing.** Each dataset file is a
package's *entire entry module*, so that package's official suite exercises exactly
that file. The old design extracted one function, stripped its dependencies, and
pointed an unrelated test file at it.

---

## 3. What was built

| Path | Purpose |
|---|---|
| `fetch_dataset.py` | Fetches the corpus from pinned npm tarballs, verifies each tarball's published SHA-1, extracts the entry file byte-exact, writes `SOURCES.json` |
| `tools/make_sources.py` | Renders `SOURCES.json` as `SOURCES.md` |
| `verify_dataset.js` | Loadability gate: `require()`s every file, reports export shape, exits non-zero on failure. Reusable across stages via `TARGET_DIR` |
| `dataset/00_raw/` | 50 functions + `SOURCES.json`, `SOURCES.md` |
| `dataset/_legacy/00_raw_esm/` | Archive of the superseded ESM corpus (see §6) |

---

## 4. Corpus composition

50 items, 50 distinct upstream packages, **160,764 bytes / 5,788 lines**.
Licenses: MIT, ISC, Apache-2.0, BSD-2-Clause, CC0-1.0 (3 packages declare none).

| Category | N | Total bytes | Min | Max |
|---|---|---|---|---|
| Data Structures & Algorithms | 15 | 53,066 | 1,013 | 12,310 |
| String & Validation | 15 | 28,733 | 107 | 9,318 |
| Array & Object Manipulation | 10 | 22,746 | 418 | 11,608 |
| Math & Cryptography | 10 | 56,219 | 1,542 | 16,343 |

Verification status: **`verify_dataset.js` → 50 / 50 load as CommonJS.**

Link check across all provenance URLs: repository **50/50**, direct file (jsdelivr)
**50/50**, tarball **50/50**. npm package pages returned 45/50 under parallel
requests, but the 5 failures were HTTP 403/429 rate-limiting — all returned 200 when
retried serially with a browser user-agent.

Per-item source record (package, version, entry path, tarball URL, tarball SHA-1, file
SHA-256, size, license) is in `dataset/00_raw/SOURCES.md`.

---

## 5. Deviations from the original paper spec

These need reconciling with Section 2 before submission.

1. **AES removed.** The only self-contained CJS implementation is `aes-js` at
   63.7 KB; after Level-3 obfuscation that plausibly reaches 300–600 KB, beyond
   practical context limits. Replaced by SHA-1, Adler-32 and MurmurHash3.
2. **No `isIP`.** No compact dependency-free CJS IP validator exists — `ip-regex` is
   ESM-only, `ipaddr.js` is 38 KB. Replaced with `querystringify`.
3. **Category 3 sources broadened** beyond lodash/ramda to `lodash.*` single-function
   packages plus `arr-*` and `just-*`, because most lodash single-function bundles
   are 20–70 KB.
4. **`gcd@0.0.1` dropped mid-build.** Its upstream repository
   (`github.com/substack/node-gcd`) returns 404 — the tarball resolves but the source
   repo is gone, which is not defensible artifact provenance. Replaced with
   `hash-sum@2.0.0` (MIT, live repo). This also retired a 95-byte item.

---

## 6. Known issues and caveats

**Two items may saturate.** `func_21_isMd5` (107 B) and `func_28_isAlphanumeric`
(186 B) are small enough that every tool and model will likely pass them at all three
levels. Useful as floor anchors; not signal.

**The legacy archive is incomplete.** The original `backup_existing()` archived
`00_raw` on every run, so re-runs copied the *new* corpus over the archive. On
Windows's case-insensitive filesystem this overwrote 8 of the original 50 ESM files;
**42 / 50 survive** in `dataset/_legacy/00_raw_esm/`. Archiving is now one-shot so it
cannot recur. Nothing is permanently lost — `fetch_raw_dataset.py` is unmodified and
regenerates the original set (point it at a different output directory, or it will
overwrite the current corpus).

**No unit tests exist yet.** The 100 files under `tests/` target the discarded
function set and were already broken (§1.2). They are not salvageable.

---

## 7. Availability of official upstream tests

Surveyed across all 50 upstream packages (registry metadata + tarball contents):

| Framework | Packages |
|---|---|
| mocha family (incl. chai / should / nyc) | 24 |
| tape | 8 |
| jasmine | 4 |
| ava | 2 |
| tap / vitest / **jest** | 1 / 1 / **1** |
| no framework or no test script | 9 |

**25 / 50 ship test files inside the published npm tarball** (fetchable by the same
hash-verified path as the code); the remaining tests live only in GitHub repos.

Implication: official tests are obtainable for roughly 46 / 50, but essentially none
are Jest. Each needs mechanical conversion to Jest plus the `TARGET_DIR` dynamic-import
header. The conversion is mechanical — mocha's `assert.equal` / `expect().to.equal`
and tape's `t.deepEqual` map directly onto Jest `expect()`. Four packages
(`just-intersect`, `just-group-by`, `just-clone`, `murmurhash`) have no real suite and
need tests derived from documented behaviour.

> **Corrected 2026-08-21 (§11).** Official tests turned out to be obtainable for
> **50 / 50**, and the four packages named above do have suites: the `just-*` ones
> live in the monorepo at `angus-c/just:test/array-intersect/index.cjs` (and
> siblings) rather than in the published package, and `murmurhash` ships a
> framework-less `test.js` in its tarball. No tests had to be written from
> documented behaviour. The conversion was also not done by rewriting: see §11.

---

## 8. Open research-design concerns

**Data contamination is the primary threat to validity.** These are popular npm
packages, certainly present in the pretraining data of every evaluated model. An LLM
shown an obfuscated `fast-deep-equal` may recover it by recognition and recall rather
than by reasoning over the obfuscated code. Pass Rate would then measure memorization,
while the AST baselines — which cannot memorize — are handicapped by construction.

Proposed mitigation, which is also a contribution: build a semantic-preserving
*mutated* variant of the corpus (renamed domain identifiers, perturbed constants,
permuted parameter order) so that memorized recall **fails** the tests. Running both
conditions yields a contamination delta:

```
Δ = pass_rate(pristine) − pass_rate(mutated)
```

Secondary points to address before submission:

- **JS-Nice** has been unmaintained for years; confirm the service runs before
  promising it as a baseline.
- **js-beautify** performs no semantic recovery — frame it explicitly as a
  formatting-only lower bound, not a peer of Synchrony.
- **CodeBLEU against the original** rewards regurgitation for the same reason as
  above; interpret alongside the contamination delta.
- **Non-determinism:** report k > 1 samples per item with variance, and use paired
  tests (McNemar / paired bootstrap) — n = 50 per cell is small.
- **Level-3 context overflow** is a legitimate reportable failure mode, not an
  experimental error; record truncation explicitly.

---

## 9. Reproduction

```bash
python fetch_dataset.py     # fetch 50 files from pinned tarballs, verify SHA-1
python3 tools/make_sources.py     # regenerate SOURCES.md
node   verify_dataset.js    # CommonJS loadability gate -> expect 50/50
```

`fetch_dataset.py` pins every package version inline, so the run is byte-reproducible:
the resulting files match the SHA-256 digests recorded in `SOURCES.json`.

To gate a later pipeline stage:

```bash
TARGET_DIR=dataset/01_obfuscated/level_3 node tools/verify_dataset.js
```

---

## 10. Next steps

1. `package.json` + Jest config + `dataset/01_obfuscated/`, `dataset/02_deobfuscated/` layout.
2. Fetch and convert official upstream suites to Jest with the `TARGET_DIR` header;
   write suites for the 4 packages lacking one.
3. Establish the Ground Truth Rule: 100 % pass on `00_raw`.
4. Build the 3-tier obfuscation pipeline; re-verify 100 % pass on all of
   `01_obfuscated` before any deobfuscation run.
5. Measure actual Level-1/2/3 size inflation and record context-overflow cases.
6. Build the mutated corpus variant for the contamination control (§8).
7. Runner + metrics: Pass Rate, cyclomatic complexity, CodeBLEU, AST similarity.

---

## 11. Session 2 — the test oracle

**Date:** 2026-08-21. Full decision record in `docs/TESTS.md`; this is the summary.

Steps 1–3 of §10 are done. `dataset/00_raw` is now verified by the upstream
maintainers' own test suites, and the Ground Truth Rule holds:

```
node tools/verify_dataset.js        → 50/50 modules load as CommonJS
node tools/verify_tests.js → 92/92 vendored test files byte-identical
TARGET_DIR=dataset/00_raw jest → 50/50 suites, 2 238 passed, 2 declared-skipped
node tools/check_oracle_wiring.js  → 50/50 suites fail against a no-op module, 0 oracle holes
```

**D7 — Do not convert the upstream tests; adapt around them.** §7 assumed each
suite would be mechanically rewritten into Jest. It wasn't. Every vendored file
is byte-identical to the maintainer's published artifact, hashed in
`tests/SOURCES.json` and re-checked by `tools/verify_tests.js`. All
adaptation lives outside the test files, in three layers:

* **Runner shims** (`tests/runner/shims/`) map tape / tap / ava / vows / testman / mukla /
  vitest / mocha / QUnit onto Jest. Assertion *semantics* follow the upstream
  runner, not Jest — loosening `t.equal` or `t.deepEqual` would let a suite accept
  an obfuscation artefact it should reject, which inflates Pass Rate.
* **Synthesised package layout.** Suites reach their subject with `require('../')`
  or `require('../src/luhn')`. `tests/runner/build.js` generates 46 stub modules
  at exactly those paths, each a one-line re-export of the `TARGET_DIR` corpus
  file. The suite loads what it believes is its own package.
* **Six hand-written entries** (`func_31`, `32`, `38`, `43`, `44`, `48`) where a
  suite cannot address a single-file entry module — lodash's per-method blocks
  inside one 806 KB QUnit monolith, fast-deep-equal's four-build driver, the two
  bare-IIFE crypto suites, murmurhash's framework-less script. Assertions and
  case data remain upstream's in every case.

This buys the claim the paper actually needs: **Pass Rate is scored by tests the
benchmark's authors did not write, and cannot have tuned.**

**D8 — Babel touches six files, never `dataset/`.** Transpiling is not neutral:
Babel reprints source, which collapses the whitespace difference `hash-sum`'s
suite deliberately hashes; its injected `'use strict'` breaks the implicit
globals `js-crc32` and `js-adler32` rely on; and its ESM transform rewrites the
top-level `this` that `blueimp-md5`'s IIFE reads. `dataset/` is excluded outright
— transpiling a level-3 obfuscated file could repair the breakage the benchmark
exists to measure.

**D9 — The oracle must be proved wired.** `npm run check:wiring` replaces every corpus
file with a no-op export and requires all 50 suites to fail. Without it, a
mis-generated stub or an assertion-swallowing shim is indistinguishable from a
green run. Re-run it after any harness change, and against each obfuscation level.

### New findings

* **Official tests exist for 50 / 50**, not ~46 (see the correction in §7).
* **`func_26_slugify` has two unrunnable assertions.** They verify that `extend()`
  does not survive a module reload, using `delete require.cache[...]`. Jest makes
  `require.cache` a deliberate no-op. Declared in `tests/runner/suites.js` with a
  reason and reported as skipped, not deleted from the vendored file.
* **Seven suites carry version skew** — pinned to a commit rather than a matching
  release tag (`func_12`, `26`, `36`, `37`, `39`, `45`, `46`). All pass today;
  `func_26_slugify` shows the failure mode, having failed 5 assertions on charmap
  drift before being re-pinned from `master` to `v1.6.8`. Re-check if the corpus
  is re-pinned. Table in `docs/TESTS.md` §3.1.
* **Two floor anchors confirmed.** §6 predicted `func_21_isMd5` and
  `func_28_isAlphanumeric` would saturate. Their official suites carry 2 and 1
  assertions respectively — among the weakest in the corpus, reinforcing that they
  are anchors, not signal.

### Consequences for §8 (contamination)

The mutated-corpus control now has a second half that §8 did not anticipate: the
suites are drawn from the same popular packages as the code, so they are in the
pretraining data too. A mutated corpus whose **expected values are not mutated in
step** will still be passed by a model recalling the original. The mutation must
cover `tests/upstream/` alongside `dataset/`.

### Revised next steps

1. ~~`package.json` + Jest config~~ — done.
2. ~~Fetch and convert official suites~~ — done, without conversion (D7).
3. ~~Ground Truth Rule: 100 % pass on `00_raw`~~ — done.
4. **Define Pass Rate granularity.** 2 240 assertions are distributed 1 (`func_03`)
   to 918 (`func_43`). Per-file binary is what the Ground Truth Rule implies;
   assertion-weighted would let one crypto suite dominate the mean. Decide before
   any run.
5. Build the 3-tier obfuscation pipeline; re-verify 50/50 on all of
   `01_obfuscated` **and** re-run `npm run check:wiring` per level.
6. Measure Level-1/2/3 size inflation; record context-overflow cases.
7. Mutated corpus for the contamination control — now including the suites.
8. Runner + metrics: Pass Rate, cyclomatic complexity, CodeBLEU, AST similarity.
9. Delete or archive `tests/github_tests/` and `tests/official_tests/` (100 files
   for the discarded function set, broken before this session; currently excluded
   via `testPathIgnorePatterns`).

---

## 12. Session 3 — corpus swap on measured evidence

**Date:** 2026-08-22. Detail in `docs/TESTS.md`.

### What forced this

Two instruments built in this session showed the corpus had defects §11 could not
see:

* `tools/measure_oracle_strength.js` — edits one operator or literal in a corpus file
  and asks whether the suite goes red. First full run: **71 %**.
* `tools/check_dead_assertions.js` — static scan for assertions that cannot
  fail. It found `func_24_luhn`'s entire suite: 26 assertions written in
  should.js's property form (`x.should.be.true`, no call), all dead. The corpus
  file could return the wrong answer for every credit-card number and the suite
  reported 36 passes. Fixed by `tests/runner/shims/should-strict.js`, which makes the
  property form assert without touching the vendored file.

**D10 — `sanity.js` is necessary but not sufficient.** It only asks whether a
suite notices a module that does nothing. luhn passed it while being completely
blind, because the no-op Proxy tripped something unrelated. A plausibly-wrong
module is the real test, and that is mutation testing.

**D11 — Mutate the AST, never the text.** The first mutation run reported 52
survivors; inspection showed most were edits to URLs inside licence comments and
to regex character classes. Rewritten on `@babel/parser`, with `__esModule`
plumbing excluded.

### The swap

`tools/screen_candidates.py` is new: it reproduces the mechanical eligibility screen D3
describes but never recorded, and writes `tools/candidates.json`. Ten items
were replaced, all verified by download, none chosen from memory:

| # | Out | Reason | In |
|---|---|---|---|
| 12 | fast-sort@3.4.1 | repo has no tags at all | jaro-winkler@0.2.8 |
| 21 | is-md5@0.0.2 | 107 B, 2 assertions, saturates | ms@2.1.3 |
| 26 | slugify@1.6.9 | no `v1.6.9` tag; master tests drifted (5 failures on charmap) | pluralize@8.0.0 |
| 28 | is-alphanumeric@1.0.0 | 186 B, 1 assertion, saturates | bytes@3.1.2 |
| 31 | lodash.compact@3.0.1 | ships no tests; oracle had to be sliced out of lodash's 806 KB QUnit monolith | object-path@0.11.8 |
| 32 | lodash.chunk@4.2.0 | same | arr-union@3.1.0 |
| 36 | just-intersect@4.3.0 | monorepo, no per-package tag | intersect@1.0.1 |
| 39 | just-clone@6.2.0 | same | rfdc@1.4.1 |
| 45 | crc-32@1.2.2 | no matching tag | js-crc@0.3.1 |
| 46 | adler-32@1.3.1 | no matching tag | hi-base32@0.5.1 |

Category counts hold: 15 / 15 / 10 / 10. Corpus 189 491 B.

**D12 — Selection is on SOURCES and oracle existence, never on how hard the
item is to deobfuscate.** Choosing packages because their tests are strong is a
statement about the measuring instrument and is legitimate; choosing them because
a model would find them easy would bias the result. The screen only ever looks at
packaging, tags and test presence.

### Result

```
50/50 modules load as CommonJS
50/50 vendored test files byte-identical to their pinned source
50/50 suites pass — 7 488 assertions (was 2 238), none skipped (was 2)
50/50 suites go red against a no-op module, 0 oracle holes
0 dead assertions
oracle strength 76 % (was 71 %); files under 50 %: 4 (was 7)
```

### Errors found and corrected along the way

1. `imurmurhash@0.1.4` was going to replace `murmurhash` until a check showed it
   has **no tests anywhere** — no `test/`, no test script, no devDependencies.
   The screen had accepted "a matching tag exists" as proof of tests; it now
   downloads the repo archive and counts test files.
2. `ms@2.1.3` was wrongly rejected: its test file is `tests.js` (plural) and the
   pattern only matched `test.js`.
3. `shallow-equal@3.1.0` was rejected after adaptation: its suite imports
   `validArrayValue` / `validObjectValue`, which exist only in the TypeScript
   source and not in the published `dist` entry. Replaced by `arr-union`.
4. Two defects in our own shims. `isNotEqual` was aliased to `equal` — a
   false-PASS generator. And `t.same` was implemented strictly, while node-tap
   documents it as loose; being HARSHER than upstream is its own failure, and it
   broke rfdc's suite, which compares a cloned `arguments` object to an array.
   `looseDeepEqual` now reproduces tsame's structural comparison.

### What deliberately stayed

* `func_37_groupBy` — no dependency-free, tagged, tested groupBy alternative
  exists. Its tests should be pinned to the commit that published 2.2.0 instead
  of master HEAD. **Open.**
* `func_05_unionFind` (33 %), `func_06_naturalCompare` (20 %),
  `func_08_topsort` (30 %) — real, official, thin. Replacing them would mean
  selecting on oracle strength, which needs the suite adapted first. The honest
  treatment is to publish the per-file score, not to hide it.
* `func_48_murmurhash` was in this list at 20 % and has since been **replaced**;
  see §14.

### Consequences for the paper

* **Report per-file oracle strength alongside Pass Rate.** A PASS on a
  100 %-strength item is strong evidence; a PASS on murmurhash (20 %) is weak.
  Reporting Pass Rate alone overstates what was measured.
* Section 2 needs five more deviations recorded (the ten swaps above collapse
  into: AES already gone, no `isIP`, category 3 broadened, `gcd` dropped, and now
  the provenance-driven swap).
* §8's contamination control must mutate `tests/upstream/` alongside `dataset/`,
  since the suites are drawn from the same popular packages as the code.

### Still open from §11

Unchanged and still blocking a clean pipeline run:

1. **Infinite loops hang Jest.** `testTimeout` does not cover module load; a
   corpus file containing `while(true){}` ran 75 s before being killed by hand.
   LLM output will contain these. Needs an external per-suite timeout.
2. **Test counts can silently drop.** `func_15`, `func_43` and `func_44` register
   0 tests when the module misbehaves. Zero is caught, but a partial drop
   (400 of 918) would be reported as PASS. Record each suite's expected count and
   compare per run.
3. Pass Rate granularity still undefined.

---

## 13. Session 3b — repository layout

The repository had accumulated three generations of scaffolding. It now holds
four things at the front and everything else in a named place:

| What | Where |
|---|---|
| Fetches the dataset | `fetch_dataset.py` (was `build_dataset.py`) |
| Fetches the unit tests | `fetch_tests.py` (was `fetch_official_tests.py`) |
| The raw dataset | `dataset/00_raw/` |
| The unit tests | `tests/upstream/` (was `tests/_upstream/`) |

`tests/runner/` holds what makes the vendored suites runnable (load-target,
suites.js, build.js, setup.js, shims). `tests/entries/generated/` is rebuilt by
`build.js`; `tests/entries/handwritten/` holds the 6 entries it cannot generate.
`tools/` holds the quality gates. `PROVENANCE.json` is now `SOURCES.json` in both
places, and `SOURCES.csv` was dropped as a duplicate of `SOURCES.md`.

Deleted (all recoverable from the initial commit): `main.py`,
`fetch_raw_dataset.py`, `tests/github_tests/`, `tests/official_tests/`,
`dataset/_legacy/`. `.idea/` is no longer tracked.

**D13 — A green Jest summary is not evidence the suites ran.** The move left the
generated entries pointing at a stale path. 44 of 50 suites failed to load; the
run reported `1664 passed` with no failure in the summary tail, and
`check_oracle_wiring.js` still reported "50 suites detected, 0 holes" — because a
suite that cannot load also counts as FAIL. Two of three gates were blind to a
completely disconnected oracle.

`tools/verify_test_counts.js` closes this: it freezes each suite's test count on
`00_raw` (`tools/test-count-baseline.json`) and fails the run if any suite
registers a different number. It is now part of `npm run groundtruth`, and it is
the guard for the "test counts can silently drop" risk carried since §11.

---

## 14. Session 3c — retiring the weakest item, and counting assertions properly

**D14 — Replace an item only when a measured alternative is better.**
`func_48_murmurhash` was the corpus's weakest oracle: its official test is a
framework-less script that checks `v3` against a single input and never calls
`v2` at all, so half the module was unexercised. Measured strength 20 %.

The first candidate, `imurmurhash@0.1.4`, was rejected in §12 for having no
tests. A second screen found only `object-hash` eligible, which duplicates
`hash-sum` (func_50). The item was therefore replaced with **`js-sha3@0.9.3`**:

| | murmurhash@2.0.1 | js-sha3@0.9.3 |
|---|---|---|
| Jest blocks | 1 | 1 061 |
| assertions executed | 0 | 1 061 |
| oracle strength | 20 % | **80 %** |

SHA-3 / Keccak was absent from the corpus (MD5, SHA-1, SHA-256, CRC, base32,
base64, RC4 were all present), the package is from the emn178 family whose
IIFE-plus-globals harness pattern four other items already use, and `v0.9.3` is a
real tag so there is no version skew. Category counts hold at 15/15/10/10.

The cost is size: 21 296 B makes it the largest corpus file (previous maximum
16 590 B), so level-3 inflation could reach 85–210 KB. Accepted deliberately;
§8 already treats context overflow as a reportable outcome rather than an error.

Corpus-wide oracle strength: **76 % → 78 %**, files under 50 %: 4 → 3.

**D15 — Count assertions at runtime, not from source.** The report used to show
Jest test BLOCKS, which understates suites badly: `is-base64` runs 27 checks in
one block, and the mukla shim collapses hex-color-regex's 68 blocks into one
that still executes 140. A static count was worse -- it reported zero for is-url
and rfdc. `tests/runner/assertion-counter.js` now wraps the single funnel method
of each assertion library. Corpus total: **110 348 assertions executed** across
8 548 blocks. Details and the three non-obvious pitfalls are in docs/TESTS.md §5.0.

### Tooling defects found this session

1. **Measuring a subset wiped the report.** `measure_oracle_strength.js`
   truncated `oracle-strength-report.jsonl` on every run, so re-scoring one
   function destroyed the other 49 scores. It now keeps records for functions
   not being re-measured.
2. **Two mutants hang.** `func_09_dijkstra` (`+`→`-`) and `func_10_priorityQueue`
   (`===`→`!==`) send the module into an infinite loop. The mutation tool has an
   external timeout and counts them as detected. **`npm test` has no such
   timeout** — this is a live demonstration of the risk carried since §11, and it
   will bite when obfuscated or model-generated files are run.

---

## 15. Session 3d — retiring the remaining weak oracles

**Why now rather than later.** A weak oracle is not neutral noise. Synchrony and
js-beautify preserve semantics by construction: their output is either correct or
does not parse. An LLM produces *plausible but subtly wrong* code, which is
exactly what a weak suite fails to catch. So oracle weakness biases Pass Rate
toward the LLMs -- in the direction of the paper's own conclusion. That makes it
worth fixing before any run, not after.

**D16 — Declare the rule before measuring the candidates.** Replace only an item
scoring under 50 %, and only when the candidate measures at least 60 %. Without a
threshold fixed in advance, "replace the weakest" never terminates: retire the
20 % items and the 50 % items become the weakest.

| Was | Score | Now | Score | Note |
|---|---|---|---|---|
| `natural-compare@1.4.0` | 20 % | `string-natural-compare@3.0.1` | **90 %** | |
| `topsort@0.0.2` | 30 % | `denque@2.1.0` | **70 %** | also removed a duplicate algorithm |
| `union-find@1.0.2` | 33 % | *(kept)* | 33 % | only candidate rejected, see below |

`topsort` carried a second defect found while screening: it is the **same
algorithm** as `func_07_toposort` -- both topological sort, identical output for
identical input -- so a fifteen-item category held it twice. `denque` fixes the
oracle and the redundancy together.

Corpus-wide: **78 % → 80 %**, and items under 50 % went 3 → **1**.

### `disjoint-set@1.1.9` rejected

The only eligible replacement for `union-find` fails **its own official suite**
under Node 18. Its entry is wrapped in `'use strict'` and `add()` assigns
`_disjointSetId` to whatever it is given; for a primitive that throws rather than
silently no-opping. Three of its tests do exactly that. A package whose published
tests cannot pass against its published code is not a ground-truth item at any
oracle strength. `union-find` stays at 33 % and is reported as the corpus's one
weak oracle.

### Harness work this swap required

* **mocha's `this.timeout()`** — denque's suite calls it; Jest binds a `this`
  without it. `tests/runner/setup.js` now merges a mocha-shaped context onto
  whatever Jest provides. These are scheduling hints, not assertions.
* **Two more declared skips** — string-natural-compare asserts with
  `assert.throws(fn, new TypeError('...'))`. The TypeError comes from Jest's
  sandbox while node's assert runs in the host realm, so the `instanceof` check
  fails and assert rejects the expectation as "an empty object". It passes under
  plain node. Declared with a reason in `suites.js`, not deleted.
* **Stale scores were being counted.** `measure_oracle_strength.js` kept records
  for functions absent from the current run, which is right, but also for
  functions no longer in the corpus at all -- a swap renames the id, and
  `func_08_topsort`'s retired 30 % was still dragging the average down. It now
  drops ids that no longer exist in `dataset/00_raw`.

### Attempt abandoned: counting `assert(value)`

is-url asserts by calling the module itself. A callable cannot be wrapped in
place once other modules hold the reference, so `require('assert')` was
redirected through a counting shim via moduleNameMapper. That put node's assert
in a different realm from the sandbox and broke `assert.throws` with an Error
instance, then broke jest-circus's own error formatting. Reverted. The originals
are now stashed on the shared assert object as `__deobfRawAssert` so the harness
shims can call assert without double-counting, and is-url's count is a known
undercount.

