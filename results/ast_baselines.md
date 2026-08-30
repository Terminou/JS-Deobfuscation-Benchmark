# AST Deobfuscator Baselines

Scored on the frozen runtime (Node 18.12.1) with `tools/score_stage.js`,
per-file binary Pass Rate. Corpus v1.0 `ff4a5551...`, obfuscated stages
`d90486d1...` from `javascript-obfuscator@5.6.0`. Deobfuscators run on Node
24.19.0 (they require >=22); only the transformation happens there.

**Run configuration matters and is part of the result.** These numbers come
from a serial run (`--jobs 2`, 1800 s limit, nothing else executing). An
earlier pass at `--jobs 4` with a 600 s limit reported up to 8 points lower
for two tools, because contention both slowed the suites and delayed the
harness's own timer -- one file was recorded as timing out after 6 951 s
under a 600 s limit. At 1800 s serial there are **no timeouts at all**, so
those were measurement artefacts, not tool failures.

## Pass Rate

| Tool | identity | low | medium | high |
|---|---|---|---|---|
| **webcrack** | 100 % | 100 % | 100 % | 100 % |
| obfuscator-io-deobfuscator | 98 % | 98 % | 100 % | 98 % |
| js-deobfuscator | 80 % | 82 % | 88 % | 94 % |

## Outcome breakdown at `high`

| Tool | pass | fail | load-error | timeout |
|---|---|---|---|---|
| webcrack | 50 | 0 | 0 | 0 |
| obfuscator-io-deobfuscator | 49 | 0 | 1 | 0 |
| js-deobfuscator | 47 | 2 | 1 | 0 |

## By corpus category at `high`

| Tool | algorithms | validation | collections | crypto |
|---|---|---|---|---|
| webcrack | 15/15 | 15/15 | 10/10 | 10/10 |
| obfuscator-io-deobfuscator | 14/15 | 15/15 | 10/10 | 10/10 |
| js-deobfuscator | 14/15 | 14/15 | 10/10 | 9/10 |

## Pass Rate is not enough

The obfuscated input already passes every test, so a tool that changes nothing
scores 100 %. Output size separates recovery from mere survival:

| Tool | `high` output | vs. 2 959 KB input |
|---|---|---|
| webcrack | **226 KB** | collapses to the size of the original corpus |
| js-deobfuscator | 1 996 KB | 0.67x |
| obfuscator-io-deobfuscator | 2 187 KB | 0.74x |

webcrack converges on the same 226 KB from every stage, from 189 KB (`identity`)
to 2 959 KB (`high`) — it is undoing the transformation. The other two keep the
code running while leaving most of the obfuscation in place, and score within a
few points of webcrack on Pass Rate alone. Any results table that reports Pass
Rate without a recovery measure will present those as equivalent.

Identifier recovery is the other half: webcrack's output is still 88.7 % mangled
names. It recovers structure, not readability — the axis where an LLM might
plausibly do better.

## Notable per-file behaviour

* `js-deobfuscator` improves as obfuscation increases: 80 % → 82 % → 88 % → 94 %.
  It damages 10 files at `identity`, which is merely minified code. A tool that
  harms simple input more than obfuscated input is worth a line in the results.
* `js-deobfuscator` fails to parse `func_15_combinatorics` at every stage
  (`shift-parser` error) — a consistent, file-specific defect.
* `obfuscator-io-deobfuscator` fails only on `func_09_dijkstra`, at every stage.

## Excluded tools — baseline set closed

No further classic deobfuscators will be evaluated. The main comparison is three
tools (one general-purpose, two purpose-built for `javascript-obfuscator`).

* **Synchrony (`deobfuscator@2.4.6`) — excluded.** It located the string array,
  deleted the function defining it, and left the call sites, so every output file
  threw `_0x... is not defined` on load: 50/50 unloadable at `low`, `medium` and
  `high`. Verified via both the CLI and the API, and against
  `javascript-obfuscator@5.4.3` (the version current when Synchrony was last
  released), so it is neither our misuse nor a version lag.
* **restringer@2.2.0 — excluded (incomplete).** Partial runs only: `identity` and
  `low` done, `medium` 49/50, `high` 3/50 before `spawn EAGAIN`. Baseline set
  closed before a clean full run; not in the main table.
* **JS-Nice** — jsnice.org serves a page but its API returns 405 to every endpoint
  tried. Report as an observation about the state of the field.
* **js-beautify, wakaru** — formatting class, not peers; not run. May be cited in
  text as a lower-bound *class* without measured numbers.

## Still open (AST stage)

* **Determinism not yet verified** — run one stage twice before claiming k = 1.

