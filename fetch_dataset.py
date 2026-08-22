"""
fetch_dataset.py — fetch the 50-function ground-truth corpus for the
JS deobfuscation benchmark.

Design constraints (see paper Section 2):
  * every file is extracted byte-exact from a PINNED npm release tarball,
    whose published SHA-1 integrity digest is verified before extraction, so
    the corpus is reproducible and its provenance is cryptographically citable;
  * every file must be `require()`-able by Node AS IS -- no ESM syntax,
    no relative imports, no external dependencies. This is what lets the
    Jest harness swap TARGET_DIR between 00_raw / 01_obfuscated / 02_deobfuscated;
  * category counts follow the paper: 15 algorithms, 15 validation,
    10 collections, 10 crypto.

Outputs:
  dataset/00_raw/func_NN_<slug>.js
  dataset/00_raw/SOURCES.json
"""

import hashlib
import io
import json
import os
import re
import shutil
import sys
import tarfile
import urllib.request

RAW_DIR = os.path.join("dataset", "00_raw")
BACKUP_DIR = os.path.join("dataset", "_legacy", "00_raw_esm")

# (index, slug, category, npm package, pinned version, entry path within package)
MANIFEST = [
    # ---------- Category 1: Data Structures & Algorithms (15) ----------
    (1,  "binarySearch",       "algorithms",  "binary-search",          "1.3.6",  "index.js"),
    (2,  "binarySearchBounds", "algorithms",  "binary-search-bounds",   "2.0.5",  "search-bounds.js"),
    (3,  "levenshtein",        "algorithms",  "js-levenshtein",         "1.1.6",  "index.js"),
    (4,  "damerauLevenshtein", "algorithms",  "damerau-levenshtein",    "1.0.8",  "index.js"),
    (5,  "unionFind",          "algorithms",  "union-find",             "1.0.2",  "index.js"),
    (6,  "naturalCompare",     "algorithms",  "string-natural-compare", "3.0.1",  "natural-compare.js"),
    (7,  "toposort",           "algorithms",  "toposort",               "2.0.2",  "index.js"),
    (8,  "deque",              "algorithms",  "denque",                 "2.1.0",  "index.js"),
    (9,  "dijkstra",           "algorithms",  "dijkstrajs",             "1.0.3",  "dijkstra.js"),
    (10, "priorityQueue",      "algorithms",  "priorityqueuejs",        "2.0.0",  "index.js"),
    (11, "sortedArray",        "algorithms",  "sorted-array-functions", "1.3.0",  "index.js"),
    (12, "jaroWinkler",        "algorithms",  "jaro-winkler",           "0.2.8",  "index.js"),
    (13, "mersenneTwister",    "algorithms",  "mersenne-twister",       "1.1.0",  "src/mersenne-twister.js"),
    (14, "stringSimilarity",   "algorithms",  "string-similarity",      "4.0.4",  "src/index.js"),
    (15, "combinatorics",      "algorithms",  "js-combinatorics",       "2.1.4",  "commonjs/combinatorics.js"),

    # ---------- Category 2: String & Validation (15) ----------
    (16, "isEmail",            "validation",  "email-validator",        "2.0.4",  "index.js"),
    (17, "isUrl",              "validation",  "is-url",                 "1.2.4",  "index.js"),
    (18, "isUri",              "validation",  "valid-url",              "1.0.9",  "index.js"),
    (19, "isJson",             "validation",  "is-json",                "3.0.1",  "dist/index.cjs"),
    (20, "isBase64",           "validation",  "is-base64",              "1.1.0",  "is-base64.js"),
    (21, "msDuration",         "validation",  "ms",                     "2.1.3",  "index.js"),
    (22, "isUuid",             "validation",  "is-uuid",                "1.0.2",  "lib/is-uuid.js"),
    (23, "uuidValidate",       "validation",  "uuid-validate",          "0.0.3",  "index.js"),
    (24, "luhn",               "validation",  "luhn",                   "2.4.1",  "src/luhn.js"),
    (25, "jwtDecode",          "validation",  "jwt-decode",             "4.0.0",  "build/cjs/index.js"),
    (26, "pluralize",          "validation",  "pluralize",              "8.0.0",  "pluralize.js"),
    (27, "wordWrap",           "validation",  "word-wrap",              "1.2.5",  "index.js"),
    (28, "byteSize",           "validation",  "bytes",                  "3.1.2",  "index.js"),
    (29, "isHexColor",         "validation",  "hex-color-regex",        "1.1.0",  "index.js"),
    (30, "queryString",        "validation",  "querystringify",         "2.2.0",  "index.js"),

    # ---------- Category 3: Array & Object Manipulation (10) ----------
    (31, "objectPath",         "collections", "object-path",            "0.11.8", "index.js"),
    (32, "union",              "collections", "arr-union",              "3.1.0",  "index.js"),
    (33, "flatten",            "collections", "arr-flatten",            "1.1.0",  "index.js"),
    (34, "unique",             "collections", "array-unique",           "0.3.2",  "index.js"),
    (35, "difference",         "collections", "arr-diff",               "4.0.0",  "index.js"),
    (36, "intersect",          "collections", "intersect",              "1.0.1",  "index.js"),
    (37, "groupBy",            "collections", "just-group-by",          "2.2.0",  "index.cjs"),
    (38, "deepEqual",          "collections", "fast-deep-equal",        "3.1.3",  "index.js"),
    (39, "cloneDeep",          "collections", "rfdc",                   "1.4.1",  "index.js"),
    (40, "deepMerge",          "collections", "deepmerge",              "4.3.1",  "dist/cjs.js"),

    # ---------- Category 4: Math & Cryptography (10) ----------
    (41, "base64",             "crypto",      "base64-js",              "1.5.1",  "index.js"),
    (42, "md5",                "crypto",      "blueimp-md5",            "2.19.0", "js/md5.js"),
    (43, "sha256",             "crypto",      "js-sha256",              "1.0.0",  "build/sha256.node.cjs"),
    (44, "sha1",               "crypto",      "js-sha1",                "0.7.0",  "src/sha1.js"),
    (45, "crc32",              "crypto",      "js-crc",                 "0.3.1",  "src/crc.js"),
    (46, "base32",             "crypto",      "hi-base32",              "0.5.1",  "src/base32.js"),
    (47, "rc4",                "crypto",      "rc4",                    "0.1.5",  "rc4.js"),
    (48, "sha3",               "crypto",      "js-sha3",                "0.9.3",  "src/sha3.js"),
    (49, "bitTwiddle",         "crypto",      "bit-twiddle",            "1.0.2",  "twiddle.js"),
    # NOTE: this slot originally held `gcd@0.0.1`. Swapped out because its upstream
    # repository (substack/node-gcd) has been deleted -- the tarball still resolves
    # but the source repo 404s, which is not acceptable provenance for an artifact.
    # `hash-sum` also replaces a 95-byte item that would have saturated at all levels.
    (50, "hashSum",            "crypto",      "hash-sum",               "2.0.0",  "hash-sum.js"),
]

# Node core modules a fetched file may legitimately reference. Anything else
# would make the file non-self-contained and is rejected.
NODE_BUILTINS = {"assert", "buffer", "crypto", "events", "fs", "path", "util"}

ESM_PATTERN = re.compile(r"^\s*(import\s+[\w{*'\"]|export\s+(default|const|let|var|function|class|\{|\*))", re.M)
REQUIRE_PATTERN = re.compile(r"require\(\s*['\"]([^'\"]+)['\"]\s*\)")


REGISTRY = "https://registry.npmjs.org"
_tarball_cache = {}


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "js-deobf-benchmark/1.0"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read()


def fetch_package_file(package, version, entry):
    """Extract one file byte-exact from a pinned npm release tarball.

    The registry's published SHA-1 digest is verified against the downloaded
    bytes before anything is read out of the archive.
    """
    key = (package, version)
    if key not in _tarball_cache:
        meta = json.loads(fetch(f"{REGISTRY}/{package}"))
        if version not in meta.get("versions", {}):
            raise ValueError(f"version {version} not published")
        release = meta["versions"][version]
        dist = release["dist"]
        payload = fetch(dist["tarball"])

        expected = dist.get("shasum")
        actual = hashlib.sha1(payload).hexdigest()
        if expected and actual != expected:
            raise ValueError(f"tarball digest mismatch: {actual} != {expected}")

        repository = release.get("repository") or meta.get("repository")
        if isinstance(repository, dict):
            repository = repository.get("url")
        repository = normalise_repo(repository)

        info = {
            "tarball_url": dist["tarball"],
            "tarball_sha1": actual,
            "repository": repository,
            "homepage": release.get("homepage") or meta.get("homepage"),
            "license": release.get("license") or meta.get("license"),
        }
        _tarball_cache[key] = (payload, info)

    payload, info = _tarball_cache[key]
    with tarfile.open(fileobj=io.BytesIO(payload), mode="r:gz") as archive:
        # npm tarballs root every path at "package/"
        member = archive.extractfile(f"package/{entry}")
        if member is None:
            raise ValueError(f"entry package/{entry} not found in tarball")
        return member.read(), info


def normalise_repo(url):
    """Turn the many shapes of package.json `repository` into a browsable https URL."""
    if not url:
        return None
    url = url.strip()
    url = re.sub(r"^git\+", "", url)
    url = re.sub(r"\.git$", "", url)
    # ssh://git@github.com/owner/repo  and  git@github.com:owner/repo
    url = re.sub(r"^ssh://(?:[^@/]+@)?", "https://", url)
    url = re.sub(r"^git@([^:]+):", r"https://\1/", url)
    url = re.sub(r"^git://", "https://", url)
    url = re.sub(r"^http://", "https://", url)
    url = re.sub(r"^https://[^@/]+@", "https://", url)  # strip any leftover userinfo
    if re.fullmatch(r"[\w.-]+/[\w.-]+", url):  # shorthand, e.g. "lodash/lodash"
        url = f"https://github.com/{url}"
    return url


def audit(source):
    """Return a list of reasons this source is not a self-contained CJS module."""
    problems = []
    if ESM_PATTERN.search(source):
        problems.append("contains ESM import/export syntax")
    for target in REQUIRE_PATTERN.findall(source):
        if target.startswith(".") or target.startswith("/"):
            problems.append(f"relative require({target!r})")
        elif target.replace("node:", "") not in NODE_BUILTINS:
            problems.append(f"external require({target!r})")
    # Deliberately loose: UMD wrappers (e.g. SheetJS) never write `module.exports`
    # literally, they hand `exports` to a factory. This is only a smoke filter --
    # verify_dataset.js is the authoritative check that each file `require()`s.
    if not re.search(r"\bmodule\.exports\b|\bexports\b", source):
        problems.append("no CommonJS export found")
    return problems


def backup_existing():
    """Clear stale .js from RAW_DIR, archiving the pre-existing corpus exactly once.

    The archive is one-shot on purpose: on a re-run RAW_DIR already holds files
    this script itself wrote, and copying those into the archive would bury (and
    on a case-insensitive filesystem, overwrite) the original corpus it exists
    to preserve.
    """
    if not os.path.isdir(RAW_DIR):
        return 0, False
    stale = [f for f in os.listdir(RAW_DIR) if f.endswith(".js")]
    if not stale:
        return 0, False

    already_archived = os.path.isdir(BACKUP_DIR) and any(
        f.endswith(".js") for f in os.listdir(BACKUP_DIR)
    )
    if not already_archived:
        os.makedirs(BACKUP_DIR, exist_ok=True)
        for name in stale:
            shutil.copy2(os.path.join(RAW_DIR, name), os.path.join(BACKUP_DIR, name))

    for name in stale:
        os.remove(os.path.join(RAW_DIR, name))
    return len(stale), already_archived


def main():
    os.makedirs(RAW_DIR, exist_ok=True)
    cleared, already_archived = backup_existing()
    if cleared and already_archived:
        print(f"[i] Cleared {cleared} file(s) from {RAW_DIR} "
              f"(archive already present, left untouched)\n")
    elif cleared:
        print(f"[i] Archived {cleared} superseded file(s) to {BACKUP_DIR}\n")

    provenance = []
    failures = []

    for index, slug, category, package, version, entry in MANIFEST:
        file_id = f"func_{index:02d}_{slug}"
        try:
            payload, info = fetch_package_file(package, version, entry)
        except Exception as exc:
            failures.append((file_id, f"download failed: {exc}"))
            print(f"[X] {file_id:<28} {exc}")
            continue

        source = payload.decode("utf-8")
        problems = audit(source)
        if problems:
            failures.append((file_id, "; ".join(problems)))
            print(f"[X] {file_id:<28} NOT self-contained: {'; '.join(problems)}")
            continue

        target = os.path.join(RAW_DIR, f"{file_id}.js")
        with open(target, "wb") as handle:
            handle.write(payload)

        provenance.append({
            "id": file_id,
            "index": index,
            "category": category,
            "npm_package": package,
            "npm_version": version,
            "entry_path": entry,
            "npm_page": f"https://www.npmjs.com/package/{package}/v/{version}",
            "file_url": f"https://cdn.jsdelivr.net/npm/{package}@{version}/{entry}",
            "file_url_alt": f"https://unpkg.com/{package}@{version}/{entry}",
            "tarball_url": info["tarball_url"],
            "tarball_sha1": info["tarball_sha1"],
            "repository": info["repository"],
            "homepage": info["homepage"],
            "license": info["license"],
            "sha256": hashlib.sha256(payload).hexdigest(),
            "bytes": len(payload),
            "lines": source.count("\n") + 1,
        })
        print(f"[+] {file_id:<28} {package}@{version}  {len(payload):>6} B")

    with open(os.path.join(RAW_DIR, "SOURCES.json"), "w", encoding="utf-8") as handle:
        json.dump(provenance, handle, indent=2)

    counts = {}
    for record in provenance:
        counts[record["category"]] = counts.get(record["category"], 0) + 1

    print(f"\n[Done] {len(provenance)}/50 files written to {RAW_DIR}")
    print(f"       category counts: {counts}")
    print(f"       total corpus size: {sum(r['bytes'] for r in provenance)} B")
    if failures:
        print(f"\n[!] {len(failures)} failure(s):")
        for file_id, reason in failures:
            print(f"    {file_id}: {reason}")
        sys.exit(1)


if __name__ == "__main__":
    main()
