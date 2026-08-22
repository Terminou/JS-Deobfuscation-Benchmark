"""
screen_candidates.py -- mechanical eligibility screen for corpus packages.

SESSION_LOG D3 says 121 candidate packages were installed and machine-checked,
89 qualified, and 50 were curated from those. None of that was written down:
the qualified pool existed only in that session, so a later swap has nothing to
draw on and the paper cannot show how the 50 were chosen. This script makes the
screen reproducible and records the result.

It answers only the MECHANICAL half of eligibility -- can this package be a
corpus item at all:

  * entry module is CommonJS: no `import`/`export`, no relative require of a
    sibling file, no external dependency  (SESSION_LOG D2)
  * published tarball resolves and matches its registry sha1
  * size is small enough to survive level-3 inflation                (D5)
  * an official test suite exists, in the tarball or in the repo     (new)
  * the repo is alive and a tag matching the published version exists,
    so tests can be pinned without version skew   (new -- docs/TESTS.md 3.1)

It does NOT judge oracle strength; that needs the suite adapted and run through
tools/measure_oracle_strength.js. Screening is stage 1, mutation score is stage 2.

  python3 screen_candidates.py lodash.compact just-clone hash-sum
  python3 screen_candidates.py --file candidates.txt --category crypto
"""

import argparse
import hashlib
import io
import json
import os
import re
import sys
import tarfile
import urllib.error
import urllib.request

REGISTRY = "https://registry.npmjs.org"
MAX_BYTES = 20_000          # D5: bias to small; level-3 inflates 4-10x
TEST_PAT = re.compile(r"(^|/)(tests?|spec|__tests__)/|\.(test|spec)\.[cm]?[jt]s$|(^|/)tests?\.[cm]?[jt]s$", re.I)
ESM_PAT = re.compile(r"^\s*(import\s|export\s|export\{|export default)", re.M)
REL_REQUIRE = re.compile(r"""require\(\s*['"]\.""")


def get(url, timeout=60):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read()


def screen(name):
    row = {"package": name, "ok": False, "reasons": []}
    try:
        meta = json.loads(get(f"{REGISTRY}/{name}"))
    except Exception as e:
        row["reasons"].append(f"registry: {type(e).__name__}")
        return row

    version = meta.get("dist-tags", {}).get("latest")
    vmeta = meta["versions"][version]
    row.update(version=version, license=vmeta.get("license"))

    # --- external dependencies (D2) -----------------------------------------
    deps = vmeta.get("dependencies") or {}
    if deps:
        row["reasons"].append(f"has deps: {','.join(list(deps)[:3])}")

    # --- tarball + entry file ------------------------------------------------
    dist = vmeta["dist"]
    try:
        payload = get(dist["tarball"])
    except Exception as e:
        row["reasons"].append(f"tarball: {type(e).__name__}")
        return row
    if hashlib.sha1(payload).hexdigest() != dist["shasum"]:
        row["reasons"].append("tarball sha1 mismatch")
        return row

    tf = tarfile.open(fileobj=io.BytesIO(payload))
    names = [n[len("package/"):] for n in tf.getnames() if n.startswith("package/")]

    entry = (vmeta.get("main") or "index.js").lstrip("./")
    for cand in (entry, f"{entry}.js", f"{entry}/index.js"):
        if cand in names:
            entry = cand
            break
    else:
        row["reasons"].append(f"entry not found: {entry}")
        return row

    src = tf.extractfile(f"package/{entry}").read().decode("utf8", "replace")
    row.update(entry=entry, bytes=len(src), lines=src.count("\n") + 1)

    if ESM_PAT.search(src):
        row["reasons"].append("ESM syntax in entry")
    if REL_REQUIRE.search(src):
        row["reasons"].append("relative require in entry")
    if len(src) > MAX_BYTES:
        row["reasons"].append(f"too large: {len(src)}B > {MAX_BYTES}B")

    # --- test availability ---------------------------------------------------
    in_tarball = [n for n in names if TEST_PAT.search(n) and n.endswith((".js", ".cjs", ".mjs", ".ts"))]
    row["tests_in_tarball"] = len(in_tarball)

    repo = (vmeta.get("repository") or {})
    repo_url = repo.get("url", "") if isinstance(repo, dict) else str(repo)
    slug = re.sub(r"^.*github\.com[:/]+", "", repo_url).replace(".git", "").strip("/")
    row["repo"] = slug or None

    tag_ok = None
    if not in_tarball:
        if not slug:
            row["reasons"].append("no tests in tarball and no repo")
        else:
            # A matching tag is necessary but NOT sufficient: imurmurhash@0.1.4
            # has the tag and no tests anywhere -- no test/ directory, no test
            # script, no devDependencies. An earlier version of this screen
            # passed it. So the repo archive is downloaded at the tag and its
            # test files are actually counted. codeload has no API rate limit.
            for tag in (version, f"v{version}"):
                try:
                    archive = get(f"https://codeload.github.com/{slug}/tar.gz/refs/tags/{tag}", timeout=90)
                except Exception:
                    continue
                try:
                    rtf = tarfile.open(fileobj=io.BytesIO(archive))
                except Exception:
                    continue
                rnames = rtf.getnames()
                root = rnames[0].split("/")[0] + "/"
                rel = [n[len(root):] for n in rnames if n.startswith(root)]
                found = [n for n in rel
                         if TEST_PAT.search(n)
                         and n.endswith((".js", ".cjs", ".mjs", ".ts"))
                         and "node_modules" not in n]
                row["tests_in_repo"] = len(found)
                row["repo_test_files"] = found[:6]
                if found:
                    tag_ok = tag
                break
            if tag_ok is None:
                if row.get("tests_in_repo") == 0:
                    row["reasons"].append("release tag exists but repo ships NO tests")
                else:
                    row["reasons"].append("no release tag matching version (version-skew risk)")
    else:
        tag_ok = "tarball"
    row["test_pin"] = tag_ok

    row["ok"] = not row["reasons"]
    return row


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("packages", nargs="*")
    ap.add_argument("--file", help="newline-separated package names")
    ap.add_argument("--category", default="", help="label recorded with each row")
    ap.add_argument("--out", default="tools/candidates.json")
    args = ap.parse_args()

    names = list(args.packages)
    if args.file:
        names += [l.strip() for l in open(args.file) if l.strip() and not l.startswith("#")]
    if not names:
        ap.error("give package names or --file")

    rows = []
    for n in names:
        r = screen(n)
        r["category"] = args.category
        rows.append(r)
        flag = "[+]" if r["ok"] else "[X]"
        size = f"{r.get('bytes', 0):6}B" if r.get("bytes") else "     -"
        print(f"{flag} {n:28} {str(r.get('version','?')):10} {size} "
              f"tests={r.get('tests_in_tarball', 0):2} pin={str(r.get('test_pin'))[:8]:8} "
              f"{'; '.join(r['reasons'])}")

    existing = []
    if os.path.exists(args.out):
        existing = json.load(open(args.out))
    keep = {r["package"]: r for r in existing}
    for r in rows:
        keep[r["package"]] = r
    os.makedirs(os.path.dirname(args.out), exist_ok=True)
    with open(args.out, "w") as fh:
        json.dump(sorted(keep.values(), key=lambda r: r["package"]), fh, indent=2)
        fh.write("\n")

    ok = sum(1 for r in rows if r["ok"])
    print(f"\n{ok}/{len(rows)} eligible -> {args.out}")
    print("Stage 2 (oracle strength) still required: adapt the suite, then "
          "node tools/measure_oracle_strength.js <id> --per-file 10")


if __name__ == "__main__":
    sys.exit(main())
