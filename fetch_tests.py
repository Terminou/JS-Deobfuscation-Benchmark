"""
fetch_tests.py -- vendor the OFFICIAL upstream test suites for the
50-item ground-truth corpus.

Rationale (paper Section 4, Ground Truth Rule): Pass Rate is only a credible
semantic-equivalence metric if the oracle was written by someone with no stake
in this benchmark. So every suite here is the package maintainer's own test
file, copied byte-exact from a pinned artifact:

  * npm  -> the same hash-verified release tarball `fetch_dataset.py` used, so
            the tests and the code under test come from ONE published artifact;
  * gh   -> raw.githubusercontent.com at a PINNED COMMIT SHA (the release tag
            where one exists), because 25/50 packages ship no tests inside the
            published tarball.

Files land under tests/upstream/<func_id>/<original relative path>, UNMODIFIED.
The Jest-runnable adaptations in tests/entries/ require these; keeping the
pristine copy next to the adaptation is what makes the adaptation auditable.

Output: tests/upstream/**, tests/SOURCES.json
"""

import hashlib
import io
import json
import os
import sys
import tarfile
import urllib.request

ROOT = os.path.dirname(os.path.abspath(__file__))
RAW_PROV = os.path.join(ROOT, "dataset", "00_raw", "SOURCES.json")
OUT_DIR = os.path.join(ROOT, "tests", "upstream")
OUT_PROV = os.path.join(ROOT, "tests", "SOURCES.json")

# func_id -> (source, ref, [paths])
#   source "npm": paths are relative to "package/" inside the pinned tarball.
#   source "gh":  (repo, ref_name, commit_sha); paths are repo-relative.
MANIFEST = {
    "func_01_binarySearch":       ("npm", None, ["test.js"]),
    "func_02_binarySearchBounds": ("npm", None, ["test/test.js"]),
    "func_03_levenshtein":        ("gh", ("gustf/js-levenshtein", "v1.1.6", "55ca1bf22bd55aa81cb5836c63582da6e9fb5fb0"), ["test.js"]),
    "func_04_damerauLevenshtein": ("npm", None, ["test/test.js"]),
    "func_05_unionFind":          ("npm", None, ["test/test.js"]),
    "func_06_naturalCompare":     ("gh", ("litejs/natural-compare-lite", "v1.4.0", "eec83eee67cfac84d6db30cdd65363f155673770"), ["tests/index.js"]),
    "func_07_toposort":           ("npm", None, ["test.js"]),
    "func_08_topsort":            ("npm", None, ["tests/topsort.spec.js"]),
    "func_09_dijkstra":           ("npm", None, ["test/dijkstra.test.js"]),
    "func_10_priorityQueue":      ("npm", None, ["test/priorityqueue.js"]),
    "func_11_sortedArray":        ("npm", None, ["test.js"]),
    "func_12_jaroWinkler":        ("npm", None, ["test/test.js"]),
    "func_13_mersenneTwister":    ("npm", None, ["test/generator.js"]),
    "func_14_stringSimilarity":   ("gh", ("aceakash/string-similarity", "4.0.4", "07cbc8d1569013a10c6075ce02d3efca71a5cfb6"), ["src/spec/index.spec.js"]),
    "func_15_combinatorics":      ("gh", ("dankogai/js-combinatorics", "2.1.4", "4ae77832d6cb38e58cddab5eadb577461f9389ee"), ["test/00-node.js", "test/02-arithmetics.js", "test/03-basen.js", "test/03-cartesianproduct.js", "test/03-combination.js", "test/03-permcomb.js", "test/03-permutation.js", "test/03-powerset.js"]),
    "func_16_isEmail":            ("npm", None, ["test.js"]),
    "func_17_isUrl":              ("npm", None, ["test/index.js"]),
    "func_18_isUri":              ("npm", None, ["test/is_uri.js", "test/is_http_uri.js", "test/is_https_uri.js", "test/is_web_uri.js"]),
    "func_19_isJson":             ("gh", ("joaquimserafim/is-json", "v3.0.1", "6e2ebf6c0eb45793802793ce79e21834cee1e229"), ["test/index.test.ts"]),
    "func_20_isBase64":           ("npm", None, ["test/is-base64.js"]),
    "func_21_msDuration":         ("gh", ("vercel/ms", "2.1.3", "1c6264b795492e8fdecbc82cb8802fcfbfc08d26"), ["tests.js"]),
    "func_22_isUuid":             ("npm", None, ["spec/any-non-nil-test.js", "spec/nil-test.js", "spec/v1-test.js", "spec/v2-test.js", "spec/v3-test.js", "spec/v4-test.js", "spec/v5-test.js", "spec/support/v1-uuids.js", "spec/support/v2-uuids.js", "spec/support/v3-uuids.js", "spec/support/v4-uuids.js", "spec/support/v5-uuids.js"]),
    "func_23_uuidValidate":       ("gh", ("microsoft/uuid-validate", "v0.0.3", "06554db1b093aa6bb429156fa8964e1cde2b750c"), ["ValidatorSpec.js"]),
    "func_24_luhn":               ("npm", None, ["tests/luhn-tests.js"]),
    "func_25_jwtDecode":          ("gh", ("auth0/jwt-decode", "v4.0.0", "3b2d105aa2ad4c5532f113b511c87171d89ee7a9"), ["lib/index.test.ts"]),
    "func_26_pluralize":          ("gh", ("blakeembrey/pluralize", "v8.0.0", "0265e4d131ecad8e11c420fa4be98b75dc92c33d"), ["test.js"]),
    "func_27_wordWrap":           ("gh", ("jonschlinkert/word-wrap", "1.2.5", "207044ebda1dd3809d15b6000a48409266536771"), ["test.js"]),
    "func_28_byteSize":           ("gh", ("visionmedia/bytes.js", "3.1.2", "9ddc13b6c66e0cb293616fba246e05db4b6cef4d"), ["test/bytes.js", "test/byte-format.js", "test/byte-parse.js"]),
    "func_29_isHexColor":         ("npm", None, ["test.js"]),
    "func_30_queryString":        ("gh", ("unshiftio/querystringify", "2.2.0", "73db95a504f988dce3f790e174e298ceb2b46a8e"), ["test.js"]),
    "func_31_objectPath":         ("npm", None, ["test.js"]),
    "func_32_union":              ("gh", ("jonschlinkert/arr-union", "3.1.0", "ede857f5d5082467534e372fd3da45ce5e782e93"), ["test.js"]),
    "func_33_flatten":            ("gh", ("jonschlinkert/arr-flatten", "1.1.0", "2f47651a69aa1603b70a3895084952a95791fa7b"), ["test.js"]),
    "func_34_unique":             ("gh", ("jonschlinkert/array-unique", "0.3.2", "5dd2bcce28a0bb1e02d163003a775d6982675012"), ["test.js"]),
    "func_35_difference":         ("gh", ("jonschlinkert/arr-diff", "4.0.0", "0a04556fb004b3db57f57de2777b1037090f6023"), ["test.js"]),
    "func_36_intersect":          ("npm", None, ["test/test.js"]),
    "func_37_groupBy":            ("gh", ("angus-c/just", "master", "d8c5dd18941062d8db7e9310ecc8f53fd607df54"), ["test/util/test.js", "test/array-group-by/index.cjs"]),
    "func_38_deepEqual":          ("gh", ("epoberezkin/fast-deep-equal", "v3.1.3", "d807ffc5013e710deb1c63d463a03f729bcd144d"), ["spec/index.spec.js", "spec/tests.js"]),
    "func_39_cloneDeep":          ("npm", None, ["test/index.js"]),
    "func_40_deepMerge":          ("gh", ("TehShrike/deepmerge", "v4.3.1", "5b87756a5671635679001cbac72aa42f23472c81"), ["test/merge.js", "test/merge-all.js", "test/prototype-poisoning.js", "test/custom-array-merge.js", "test/custom-is-mergeable-object.js"]),
    "func_41_base64":             ("gh", ("beatgammit/base64-js", "v1.5.1", "f3ea7adb089960fefdba11bf3ec4bd3c907ecf8a"), ["test/convert.js", "test/corrupt.js", "test/url-safe.js"]),
    "func_42_md5":                ("gh", ("blueimp/JavaScript-MD5", "v2.19.0", "458b6624c39df94cd938db3303ef77aa1e7a6800"), ["test/test.js"]),
    "func_43_sha256":             ("gh", ("emn178/js-sha256", "v1.0.0", "9a54fb31d4594762987e1b5d175265f6bac921de"), ["tests/test.js", "tests/hmac-test.js"]),
    "func_44_sha1":               ("gh", ("emn178/js-sha1", "v0.7.0", "33acf62431a91405fec29f8a0318b528f5e411a9"), ["tests/test.js", "tests/hmac-test.js"]),
    "func_45_crc32":              ("npm", None, ["tests/test.js"]),
    "func_46_base32":             ("gh", ("emn178/hi-base32", "v0.5.1", "59a75692f5d17441f8e1dc9dc914cfa033dc63e7"), ["tests/test.js"]),
    "func_47_rc4":                ("gh", ("phadej/rc4", "v0.1.5", "b14bc6871c5c01332e8ea49e61db99b897915640"), ["test/chisquare.js"]),
    "func_48_murmurhash":         ("npm", None, ["test.js"]),
    "func_49_bitTwiddle":         ("npm", None, ["test/test.js", "test/interleave2.js", "test/interleave3.js"]),
    "func_50_hashSum":            ("npm", None, ["test.js"]),
}

_tarballs = {}


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=120) as r:
        return r.read()


def tarball_for(item):
    """Reuse the exact hash-verified tarball the corpus was extracted from."""
    key = (item["npm_package"], item["npm_version"])
    if key not in _tarballs:
        payload = get(item["tarball_url"])
        actual = hashlib.sha1(payload).hexdigest()
        if actual != item["tarball_sha1"]:
            raise ValueError(f"tarball digest mismatch for {key}: {actual} != {item['tarball_sha1']}")
        _tarballs[key] = tarfile.open(fileobj=io.BytesIO(payload))
    return _tarballs[key]


# Commit SHAs are literal in MANIFEST rather than resolved through the GitHub
# API: the API caps unauthenticated callers at 60 requests/hour, and a literal
# SHA is stronger provenance anyway -- a retargeted tag cannot silently swap the
# oracle out from under a published result.


def main():
    prov = {p["id"]: p for p in json.load(open(RAW_PROV))}
    records = []
    failures = []

    for fid in sorted(MANIFEST):
        source, ref, paths = MANIFEST[fid]
        item = prov[fid]
        dest_root = os.path.join(OUT_DIR, fid)
        os.makedirs(dest_root, exist_ok=True)
        files = []

        try:
            if source == "npm":
                tf = tarball_for(item)
                origin = item["tarball_url"]
                pin = item["tarball_sha1"]
                for p in paths:
                    member = tf.extractfile(f"package/{p}")
                    if member is None:
                        raise KeyError(p)
                    data = member.read()
                    files.append((p, data, f"{origin}#package/{p}"))
            else:
                repo, ref_name, sha = ref
                origin = f"https://github.com/{repo}"
                pin = sha
                for p in paths:
                    url = f"https://raw.githubusercontent.com/{repo}/{sha}/{p}"
                    files.append((p, get(url), url))
        except Exception as e:
            failures.append((fid, f"{type(e).__name__}: {e}"))
            print(f"[X] {fid:26} {type(e).__name__}: {e}")
            continue

        entries = []
        for p, data, url in files:
            dest = os.path.join(dest_root, p)
            os.makedirs(os.path.dirname(dest), exist_ok=True)
            with open(dest, "wb") as fh:
                fh.write(data)
            entries.append({
                "path": p,
                "url": url,
                "sha256": hashlib.sha256(data).hexdigest(),
                "bytes": len(data),
            })

        records.append({
            "id": fid,
            "npm_package": item["npm_package"],
            "npm_version": item["npm_version"],
            "test_source": source,
            "origin": origin,
            "pin": pin,
            "ref_name": None if source == "npm" else ref[1],
            "files": entries,
        })
        total = sum(e["bytes"] for e in entries)
        print(f"[+] {fid:26} {source:3} {len(entries)} file(s) {total:7,} B  {origin}")

    with open(OUT_PROV, "w") as fh:
        json.dump(records, fh, indent=2)
        fh.write("\n")

    print(f"\n{len(records)}/{len(MANIFEST)} suites vendored -> {os.path.relpath(OUT_PROV, ROOT)}")
    if failures:
        print("\nFAILURES:")
        for fid, msg in failures:
            print(f"  {fid}: {msg}")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
