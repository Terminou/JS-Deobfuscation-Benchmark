"""
make_sources.py -- render the machine-readable provenance record as a
human-readable source listing.

Reads  dataset/00_raw/PROVENANCE.json  (written by build_dataset.py)
Writes dataset/00_raw/SOURCES.md
       dataset/00_raw/SOURCES.csv

The Markdown file is the one to cite in the artifact-availability appendix; the
CSV is convenient for pasting into a LaTeX table.
"""

import csv
import json
import os

RAW_DIR = os.path.join("dataset", "00_raw")
PROVENANCE = os.path.join(RAW_DIR, "PROVENANCE.json")
MARKDOWN_OUT = os.path.join(RAW_DIR, "SOURCES.md")
CSV_OUT = os.path.join(RAW_DIR, "SOURCES.csv")

CATEGORY_TITLES = {
    "algorithms": "Category 1 -- Data Structures & Algorithms",
    "validation": "Category 2 -- String & Validation",
    "collections": "Category 3 -- Array & Object Manipulation",
    "crypto": "Category 4 -- Math & Cryptography",
}
CATEGORY_ORDER = ["algorithms", "validation", "collections", "crypto"]


def load():
    if not os.path.exists(PROVENANCE):
        raise SystemExit(f"{PROVENANCE} not found -- run build_dataset.py first")
    with open(PROVENANCE, encoding="utf-8") as handle:
        return json.load(handle)


def write_markdown(records):
    lines = []
    add = lines.append

    add("# Ground-Truth Corpus -- Source Provenance")
    add("")
    add(
        "Every file in `dataset/00_raw/` is extracted **byte-exact** from a pinned npm "
        "release tarball. `build_dataset.py` verifies the registry's published SHA-1 "
        "digest against the downloaded tarball before extraction, so this corpus is "
        "reproducible from the table below alone."
    )
    add("")
    add(f"- **Items:** {len(records)}")
    add(f"- **Distinct upstream packages:** {len({r['npm_package'] for r in records})}")
    add(f"- **Total size:** {sum(r['bytes'] for r in records):,} bytes "
        f"({sum(r['lines'] for r in records):,} lines)")
    add("")
    add("Every item is a self-contained CommonJS module: no ESM syntax, no relative "
        "imports, no external dependencies. Verify with `node verify_dataset.js`.")
    add("")
    add("---")
    add("")

    for category in CATEGORY_ORDER:
        subset = [r for r in records if r["category"] == category]
        if not subset:
            continue
        add(f"## {CATEGORY_TITLES.get(category, category)} ({len(subset)} items)")
        add("")
        add("| # | Dataset file | Upstream package | Version | Source file | License |")
        add("|---|---|---|---|---|---|")
        for r in sorted(subset, key=lambda x: x["index"]):
            repo = r.get("repository")
            package_cell = f"[`{r['npm_package']}`]({repo})" if repo else f"`{r['npm_package']}`"
            license_cell = r.get("license") or "n/a"
            add(
                f"| {r['index']} | `{r['id']}.js` | {package_cell} | "
                f"`{r['npm_version']}` | [`{r['entry_path']}`]({r['file_url']}) | {license_cell} |"
            )
        add("")

    add("---")
    add("")
    add("## Full provenance")
    add("")
    add("Tarball URLs are what `build_dataset.py` actually downloads. "
        "`tarball_sha1` is the digest published by the npm registry and verified at "
        "fetch time; `sha256` is the digest of the extracted file as stored in this "
        "repository.")
    add("")

    for r in sorted(records, key=lambda x: x["index"]):
        add(f"### {r['index']}. `{r['id']}.js`")
        add("")
        add(f"- **Package:** `{r['npm_package']}@{r['npm_version']}` "
            f"([npm]({r['npm_page']}))")
        add(f"- **Entry path in package:** `{r['entry_path']}`")
        add(f"- **Direct file link:** {r['file_url']}")
        if r.get("file_url_alt"):
            add(f"- **Mirror:** {r['file_url_alt']}")
        if r.get("repository"):
            add(f"- **Repository:** {r['repository']}")
        if r.get("homepage") and r.get("homepage") != r.get("repository"):
            add(f"- **Homepage:** {r['homepage']}")
        add(f"- **Tarball:** {r['tarball_url']}")
        add(f"- **Tarball SHA-1:** `{r['tarball_sha1']}`")
        add(f"- **File SHA-256:** `{r['sha256']}`")
        add(f"- **Size:** {r['bytes']:,} bytes / {r['lines']:,} lines")
        add(f"- **License:** {r.get('license') or 'n/a'}")
        add("")

    with open(MARKDOWN_OUT, "w", encoding="utf-8") as handle:
        handle.write("\n".join(lines))


def write_csv(records):
    columns = [
        "index", "id", "category", "npm_package", "npm_version", "entry_path",
        "file_url", "file_url_alt", "npm_page", "repository", "tarball_url",
        "tarball_sha1", "sha256", "bytes", "lines", "license",
    ]
    with open(CSV_OUT, "w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=columns, extrasaction="ignore")
        writer.writeheader()
        for r in sorted(records, key=lambda x: x["index"]):
            writer.writerow(r)


def main():
    records = load()
    write_markdown(records)
    write_csv(records)
    print(f"[+] wrote {MARKDOWN_OUT} ({len(records)} items)")
    print(f"[+] wrote {CSV_OUT}")


if __name__ == "__main__":
    main()
