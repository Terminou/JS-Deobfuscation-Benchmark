# JS Deobfuscation Benchmark

Ground-truth corpus and test oracle for *Benchmarking LLM-Based Deobfuscation
Against Traditional AST Tools on Modern JavaScript Obfuscators*.

## The four things that matter

| What | Where |
|---|---|
| **Fetches the dataset** | `fetch_dataset.py` |
| **Fetches the unit tests** | `fetch_tests.py` |
| **The raw dataset** (50 functions) | `dataset/00_raw/` |
| **The unit tests** (50 official suites) | `tests/upstream/` |

Both fetchers pull from pinned, hash-verified artifacts, so a clone reproduces
the corpus and its oracle byte for byte:

```bash
python3 fetch_dataset.py     # -> dataset/00_raw/  (50 files + SOURCES.json)
python3 fetch_tests.py       # -> tests/upstream/  (50 suites + SOURCES.json)
```

## Everything else, and why it exists

`tests/upstream/` holds the package maintainers' own test files, byte-identical.
They cannot run as-is: they are written for seven different runners and each
expects to live inside its own package. `tests/runner/` bridges that gap without
editing a single assertion.

```
fetch_dataset.py              fetches dataset/00_raw from pinned npm tarballs
fetch_tests.py                fetches tests/upstream from pinned tarballs/commits

dataset/00_raw/               THE DATASET — 50 functions, SOURCES.json, SOURCES.md
tests/upstream/               THE TESTS — official suites, byte-identical, never edited
tests/SOURCES.json            where each test file came from + its sha256

tests/runner/                 makes those suites runnable under Jest
  load-target.js                binds a suite to TARGET_DIR (the one switch)
  suites.js                     per-suite binding: stubs, entry files, notes
  build.js                      generates the stubs and tests/entries/generated/
  setup.js                      shared Jest setup
  shims/                        tape, tap, ava, vows, testman, mukla, vitest, mocha, qunit
tests/entries/
  generated/                    Jest entry per suite — rebuilt by build.js, safe to delete
  handwritten/                  6 entries build.js cannot generate (see docs/TESTS.md §4.3)

tools/                        quality gates
  verify_dataset.js             every corpus file require()s as CommonJS
  verify_tests.js               every vendored test file still matches its sha256
  verify_test_counts.js         no suite silently registered fewer tests
  report.js                     per-function table; --md/--csv write docs/
  check_oracle_wiring.js        every suite goes red against a no-op module
  check_dead_assertions.js      no assertion is written so it cannot fail
  measure_oracle_strength.js    mutation testing: how much wrongness each suite catches
  screen_candidates.py          mechanical eligibility screen -> tools/candidates.json
  make_sources.py               renders SOURCES.json as the readable SOURCES.md

docs/SESSION_LOG.md           decision record for the corpus
docs/TESTS.md                 decision record for the oracle
```

## Running

```bash
npm install
npm run groundtruth      # dataset loads + tests unmodified + counts intact
npm test                 # 50 suites, 8 593 blocks / 106 438 assertions, ~6 s
```

`TARGET_DIR` points the entire benchmark at a pipeline stage:

```bash
TARGET_DIR=dataset/01_obfuscated/level_3       npx jest
TARGET_DIR=dataset/02_deobfuscated/gpt5_cot    npx jest
```

Before trusting a green run on a new stage:

```bash
npm run check:wiring     # suites actually reach the code
npm run measure:oracle   # how much wrongness they catch (currently 80 %)
```

## Reporting

```bash
npm run report           # per-function table in the terminal
npm run report:md        # also writes docs/TEST_REPORT.md and docs/test-report.csv
```

The report gives, for each of the 50 functions: which package its suite comes
from, how it is pinned, how many blocks and assertions ran, and its oracle
strength. `TARGET_DIR` works here too, so the same table can be produced for an
obfuscation level or a model's output.

## Status

```
50/50 modules load as CommonJS
50/50 vendored test files byte-identical to their pinned sources — 0 orphans
50/50 suites pass — 8 593 blocks, 106 438 assertions, 2 declared-skipped
50/50 suites go red against a no-op module — 0 oracle holes
 0   dead assertions
80 % oracle strength (367/459 mutants detected); 1 function below 50 %
```
