# Session Log

**Paper:** *Benchmarking LLM-Based Deobfuscation Against Traditional AST Tools on
Modern JavaScript Obfuscators*

Sections 1–17 below are the decision record: why the corpus is what it is, what was
rejected and why. Read them when writing the Dataset and Threats-to-Validity
sections; you do not need them to continue the work. **Start here instead.**

---

# WHERE THINGS STAND — 2026-08-23

## What the paper is

A **comparison study, not a claim.** It measures how well LLMs deobfuscate
JavaScript compared with traditional AST-based tools, across three obfuscation
levels. There is no directional hypothesis — not "LLMs win", not "AST tools win".
The contribution is the measurement and the benchmark it runs on.

Two consequences follow from having no directional claim, and both are load-bearing:

1. **The comparison has to be fair, or the paper has nothing.** The one structural
   unfairness is contamination: the corpus packages are popular on npm, so a model
   may recall them while an AST tool cannot. The mutated-corpus arm is therefore
   **mandatory, not optional** — see "Decided" below.
2. **The scoring instrument has to be credible.** That work is done (see §17) and
   belongs in the Methods section, not in a footnote.

## Done

* **Corpus frozen at v1.0.** 50 CommonJS functions, 15 algorithms / 15 validation /
  10 collections / 10 crypto, each extracted byte-exact from a pinned npm tarball.
  Fingerprint `ff4a5551e43cfd6e9576a0d3134810616175a93f2af9930eaed45d2c85523484`.
* **Oracle: the packages' own official test suites**, 50/50 vendored byte-identical
  from pinned artifacts, 8 593 Jest blocks / 106 438 assertions, all passing.
* **Oracle strength measured and closed at 78 %** (366/470 injected faults detected),
  per-function scores in `docs/TEST_REPORT.md`. Two items below 50 %, both reported
  rather than hidden — `func_22_isUuid` scores 0 % on 22 566 assertions and is the
  paper's sharpest evidence that assertion count is not a proxy for oracle strength.
* **Scoring harness** with per-suite timeouts and a four-way outcome taxonomy
  (`pass` / `fail` / `load-error` / `timeout`).

* **Obfuscated stages generated and gated (2026-08-24).**
  **Obfuscator: `javascript-obfuscator@5.6.0`** (BSD-2-Clause, pinned exactly in
  package.json — no caret; it went 5.5.1 → 5.6.0 mid-project). Levels are the
  tool's **own** `low-obfuscation` / `medium-obfuscation` / `high-obfuscation`
  presets via `getOptionsByPreset()`, so "why these three?" is answered by the
  tool's documentation rather than by our judgement. Seed `20260824` fixed;
  `target: 'node'` (the presets ship `'browser'`, wrong for a CommonJS corpus).
  Four conditions, 200 files.
  **All four score 50/50** — the obfuscator preserved semantics everywhere, so any
  later failure belongs to the deobfuscation and not to broken input. Frozen
  separately as `dataset/01_obfuscated/STAGES.lock.json`, fingerprint
  `d90486d1eaa23fa4f7107cdbeb8218b49b3b7a48603a40616a9139ca4e8c0fa4`; exact
  options in `dataset/01_obfuscated/CONDITIONS.json` (that file is the appendix).

  | Condition | Inflation | Largest file |
  |---|---|---|
  | `identity` | 0.89x | 23 KB |
  | `low` | 1.24x | 25 KB |
  | `medium` | 5.74x | 134 KB |
  | `high` | **13.89x** | **511 KB (24.6x)** |

  `identity` is not a preset: it is every transformation switched off, a
  parse-and-reprint that every tool should score 100 % on. It is the pipeline's
  sanity check, and it is needed because the tool's own `low` preset already
  renames identifiers and builds a string array — there is no mild setting.

## Not done — this is the whole remaining paper

**No baseline run, no model run.** Results and Discussion are empty.

## Next concrete step

**Run the AST baselines.** They are free and deterministic, so they prove the whole
pipeline end to end before any money is spent on model calls: obfuscated file in →
tool → output file → `npm run score`.

    webcrack@2.16.0                 general purpose
    restringer@2.2.0                general purpose
    deobfuscator@2.4.6              Synchrony — purpose-built for this obfuscator
    obfuscator-io-deobfuscator      also purpose-built
    js-beautify@2.0.3               formatting-only LOWER BOUND, not a peer

Report the purpose-built tools separately from the general ones: with a single
obfuscator they have home-field advantage, and that has to be visible rather than
buried in an average.

### The scoring timeout is a measurement parameter, not a hang guard

Scoring `high` twice gave two different answers — 50/50 at one limit, 49/50 at
another, with no other change. The cause is `func_13_mersenneTwister`:

| Where | Time |
|---|---|
| raw corpus | 6 s |
| `high`, three consecutive clean runs | **75 s, 76 s, 135 s** |
| `high`, with a parallel scoring run competing | **> 580 s, unfinished** |

Its suite loops millions of times and at `high` every string access goes through an
array lookup, so its cost swings with JIT warm-up and machine load. The rest of the
corpus is nowhere near it — median 0.5 s, second slowest 6.6 s.

**The hazard is the variance, not the slowness.** At the original 60 s default the
same module scored `pass` in one run and `timeout` in the next, which would make
Pass Rate non-deterministic — unacceptable for a benchmark, since a model's output
could score differently on a re-run.

Default is now **600 s**, roughly 4x the slowest clean measurement, so noise cannot
cross it. At that limit `high` scores **50/50** reliably.

Three things follow for the write-up:

* **Report the limit with the results.** A `timeout` means "did not finish within
  N seconds", not "did not terminate".
* **Keep parallelism modest when scoring.** Contention was what pushed one file
  past 580 s. `--jobs 4` is fine; do not run two scoring passes at once.
* **The slowdown is itself a result.** Obfuscation costs an order of magnitude in
  run time on compute-heavy code. Worth a line in the results, and worth
  remembering when budgeting the model runs.

### The deobfuscators need a newer Node than the benchmark runs on

Found while trying to demonstrate string recovery on a `high` file:

    webcrack@2.16.0     engines: node >=22 — its isolated-vm dependency will not
                        compile against Node 18 headers
    restringer@2.2.0    refuses to start: "Node.js 22.20.0 or newer required for
                        the hardened sandbox flags. Found: v18.12.1"

**Do not upgrade Node to fix this.** The corpus was frozen and its tests verified
on v18.12.1, recorded in `CORPUS.lock.json`; changing the runtime can change what
the suites do (error message wording, language surface) and would invalidate the
frozen result.

Separate the two environments instead — they are separate jobs anyway:

    deobfuscation   Node 22+     the tools only transform a file
    scoring         Node 18.12.1 the frozen environment, unchanged

The output of a tool is just a `.js` file; where it was produced does not matter,
only where it is scored. Record the tool environment alongside the results.

### How the RC4 strings are actually recovered — and why an LLM might not need to

At `high`, `stringArrayEncoding: ["rc4"]` hides every string. This is obfuscation,
not cryptography: the ciphertext array, the decoder and the key are all inside the
file, because the code has to decrypt its own strings to run.

Verified directly on `high/func_33_flatten.js` by exporting its decoder and calling
it: the array literal `"WQCbW4LMWPtcNmoniq"` comes back as readable text. So an AST
tool does not break RC4 — it locates the decoder and **executes** it, then replaces
the calls with literals. That is exactly why webcrack depends on `isolated-vm`.

An LLM cannot execute anything. But it may not have to, and this is the interesting
asymmetry for the comparison:

* **Structural strings can be inferred.** `arr[_0x1439aa(...)]` used as a loop bound
  is almost certainly `length`. Scoring by unit tests asks whether the code does the
  same job, not whether the strings were recovered — so a correct inference passes.
  This is the main argument for Pass Rate over CodeBLEU, which would penalise it.
* **Data strings cannot.** UUID patterns in `func_22_isUuid`, the colour pattern in
  `func_29_isHexColor`, constant tables in the crypto items. These must be decoded —
  or recalled from the original package, which is precisely what the contamination
  arm exists to detect.

A further wrinkle at `high`: `splitStrings` with `splitStringsChunkLength: 5` cuts
strings into five-character pieces, so decoding yields fragments (`'expor'`) that
still have to be reassembled.

### Context overflow is now a measured, not a hypothetical, problem

At `high`, roughly 4 chars/token:

| Condition | files > 32k tok | > 64k | > 128k | largest |
|---|---|---|---|---|
| identity / low | 0 | 0 | 0 | 6k |
| medium | 2 | 0 | 0 | 34k |
| high | **7** | **3** | **1** | **131k** |

So at `high`, seven files are large enough to strain a model's context and one is
131k tokens on its own. Decide the policy BEFORE the model runs: truncation is not
acceptable (it changes the task), so these should be recorded as a distinct outcome
— the harness already has `load-error` / `timeout` and needs a `too-large` sibling.
This is the reportable failure mode §8 anticipated.

Then: a 5-file LLM pilot → the full matrix → the contamination arm.

## Decided

* **Comparison only, no directional claim.**
* **Three levels = the obfuscator's own presets.** No hand-rolled configs, no
  per-technique ablation. If the results show an interesting gap between levels,
  *then* run a small ablation to explain what was observed.
* **Contamination arm is in scope.** A semantics-preserving mutated copy of the
  corpus, run through the same matrix. The mutation must cover the expected values
  in `tests/upstream/` too, or a recalling model still passes.
* **Baselines:** `webcrack@2.16.0`, `deobfuscator@2.4.6` (this is Synchrony — the
  npm package named `synchrony` is an unrelated 2016 package), `restringer@2.2.0`,
  and `js-beautify@2.0.3` as a **formatting-only lower bound**, not a peer.
  **JS-Nice is out** — jsnice.org serves a page but its API returns 405 to every
  endpoint tried. Report that as an observation about the field.

## Still open

* Which 3 models, and which 3 prompting strategies. Needed before the LLM stage.
* Venue and deadline. Determines whether n = 50 needs defending and how much
  statistical work is expected.
* Pass Rate is per-file binary (what `npm run score` reports). Confirm that as the
  definition of record; keep partial pass counts as a secondary measure in case a
  level floors everyone at zero.

## Picking up on another machine

```bash
git clone <repo> && cd JS-Deobfuscation-Benchmark
npm install
npm run groundtruth     # frozen + loads + tests intact + 50/50
npm run report          # per-function table with oracle strength
```

If `verify:freeze` fails, something changed the corpus — find out what before
running anything else.

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

---

## 16. Session 3e — the timeout blocker closed, and the corpus frozen

**D17 — `npx jest` cannot score a stage; `tools/score_stage.js` can.**
Jest's `testTimeout` bounds a test BODY. A corpus file that loops at module load
hangs the worker forever, because the loop runs while the test file is still
being evaluated. Carried as an open risk since §11 and demonstrated twice during
§15's mutation run (dijkstrajs and priorityqueuejs mutants). Obfuscated and
model-generated files will do this routinely.

`score_stage.js` runs each suite as its own child process under a wall-clock
limit and SIGKILLs on expiry -- SIGTERM is useless against a synchronous loop.
Verified: a corpus with `while(true){}` planted in one file now scores 49/50 with
that file recorded as `timeout`, instead of hanging.

It also fixes the failure taxonomy §12 asked for. Four outcomes, not one:

| Outcome | Means |
|---|---|
| `pass` | suite green |
| `fail` | ran, assertions failed -- a semantic difference |
| `load-error` | could not start -- did not parse or load |
| `timeout` | did not terminate |

Collapsing these into "fail" would make the level-3 numbers uninterpretable.

**A vendored suite that reads process.argv.** Scoring per file surfaced that
arr-union's test calls `minimist(process.argv.slice(2))` and, on finding a
positional argument, loads a benchmark implementation instead of the package.
Passing the test path to Jest positionally put Jest's argv in front of it, so
`npx jest func_32_union` tried to require `benchmark/code/undefined.js`. Fixed at
both ends: `suites.js` declares `resetArgv` for that suite and `build.js` blanks
argv around the require, and `score_stage.js` selects files with
`--testPathPattern` rather than positionally.

**D18 — The corpus is frozen at v1.0.**
`CORPUS.lock.json` reduces all 50 corpus files and all 85 vendored test files to
one fingerprint:

```
ff4a5551e43cfd6e9576a0d3134810616175a93f2af9930eaed45d2c85523484
```

`npm run verify:freeze` is now the first gate in `npm run groundtruth`. Package
swapping stops here: the numbers in the paper must refer to one artefact, and a
reader must be able to confirm they have it. A later change is allowed but must
be a deliberate re-freeze with a version bump, not a silent drift.

### Still open

* **Oracle strength is not yet a publishable number.** §15 reported 80 %, then
  adding a regex mutator (needed because `is-uuid` is nothing but regexes and had
  produced no mutants at all) changed the picture again -- `func_22_isUuid` scores
  **0 % on 22 566 assertions**, because its suite tests thousands of valid UUIDs
  and only absurd negatives, never a well-formed UUID with trailing junk. The
  mutator set must be fixed, measured once, and declared. Do not cite 80 %.
* **Pass Rate granularity**: `score_stage.js` now reports per-file binary, which
  is what the Ground Truth Rule implies. Confirm this is the definition of record.
* No obfuscation pipeline, no baseline run, no model run. Zero experimental data.

---

## 17. Oracle strength is final for v1.0

**366/470 injected faults detected — 78 %.** Measured for all 50 functions; the
earlier 76/78/80 % figures each excluded something. The mutator set is now closed:
comparison operators, logical operators, boolean literals, numeric literals, and
regular expressions. Adding a sixth class would move the number again and leave
nothing citable, so it stops here.

| Strength | Files |
|---|---|
| 100 % | 10 |
| 80-99 % | 21 |
| 50-79 % | 17 |
| < 50 % | 2 |

**D19 — Keep `func_22_isUuid` at 0 % and publish it.**
Adding a regex mutator (needed at all because is-uuid is nothing but regexes and
had produced no mutants) revealed that its suite detects none of the seven faults
injected into it, despite running 22 566 assertions -- the second highest count in
the corpus. Its negatives are all grossly malformed inputs; nothing tests a
well-formed UUID with trailing junk, so dropping the `$` anchor is invisible.

Keeping it costs one item's worth of measurement precision and buys the paper its
clearest evidence that **assertion count is not a proxy for oracle strength**:
22 566 assertions catching nothing beside `func_32_union`'s five catching
everything. The alternative -- removing it -- would require re-freezing the corpus
to hide a weakness the benchmark is capable of measuring.

The results table must not treat a PASS here as equivalent to a PASS on a
100 %-strength item. Report Pass Rate over all 50 with this item flagged, and
optionally again over the 49 measurable ones.

