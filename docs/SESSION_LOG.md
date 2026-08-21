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
each has a published SHA-1 that `build_dataset.py` verifies against the downloaded
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
| `build_dataset.py` | Fetches the corpus from pinned npm tarballs, verifies each tarball's published SHA-1, extracts the entry file byte-exact, writes `PROVENANCE.json` |
| `make_sources.py` | Renders `PROVENANCE.json` as `SOURCES.md` + `SOURCES.csv` |
| `verify_dataset.js` | Loadability gate: `require()`s every file, reports export shape, exits non-zero on failure. Reusable across stages via `TARGET_DIR` |
| `dataset/00_raw/` | 50 functions + `PROVENANCE.json`, `SOURCES.md`, `SOURCES.csv` |
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

Per-item provenance (package, version, entry path, tarball URL, tarball SHA-1, file
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
python build_dataset.py     # fetch 50 files from pinned tarballs, verify SHA-1
python make_sources.py      # regenerate SOURCES.md / SOURCES.csv
node   verify_dataset.js    # CommonJS loadability gate -> expect 50/50
```

`build_dataset.py` pins every package version inline, so the run is byte-reproducible:
the resulting files match the SHA-256 digests recorded in `PROVENANCE.json`.

To gate a later pipeline stage:

```bash
TARGET_DIR=dataset/01_obfuscated/level_3 node verify_dataset.js
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
