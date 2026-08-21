import os
import urllib.request

RAW_DIR = os.path.join("dataset", "00_raw")
TEST_DIR = os.path.join("tests", "github_tests")

os.makedirs(RAW_DIR, exist_ok=True)
os.makedirs(TEST_DIR, exist_ok=True)

BASE_TREKHLEB = "https://raw.githubusercontent.com/trekhleb/javascript-algorithms/master/src"
BASE_VALIDATOR = "https://raw.githubusercontent.com/validatorjs/validator.js/master"

DATASET_MAP = [
    # CATEGORY 1: Data Structures & Algorithms (15 Items)
    {"cat": "01_algo", "name": "func_01_binarySearch",
     "code": f"{BASE_TREKHLEB}/algorithms/search/binary-search/binarySearch.js",
     "test": f"{BASE_TREKHLEB}/algorithms/search/binary-search/__test__/binarySearch.test.js"},
    {"cat": "01_algo", "name": "func_02_quickSort",
     "code": f"{BASE_TREKHLEB}/algorithms/sorting/quick-sort/QuickSort.js",
     "test": f"{BASE_TREKHLEB}/algorithms/sorting/quick-sort/__test__/QuickSort.test.js"},
    {"cat": "01_algo", "name": "func_03_mergeSort",
     "code": f"{BASE_TREKHLEB}/algorithms/sorting/merge-sort/MergeSort.js",
     "test": f"{BASE_TREKHLEB}/algorithms/sorting/merge-sort/__test__/MergeSort.test.js"},
    {"cat": "01_algo", "name": "func_04_bubbleSort",
     "code": f"{BASE_TREKHLEB}/algorithms/sorting/bubble-sort/BubbleSort.js",
     "test": f"{BASE_TREKHLEB}/algorithms/sorting/bubble-sort/__test__/BubbleSort.test.js"},
    {"cat": "01_algo", "name": "func_05_fibonacci",
     "code": f"{BASE_TREKHLEB}/algorithms/math/fibonacci/fibonacci.js",
     "test": f"{BASE_TREKHLEB}/algorithms/math/fibonacci/__test__/fibonacci.test.js"},
    {"cat": "01_algo", "name": "func_06_levenshtein",
     "code": f"{BASE_TREKHLEB}/algorithms/string/levenshtein-distance/levenshteinDistance.js",
     "test": f"{BASE_TREKHLEB}/algorithms/string/levenshtein-distance/__test__/levenshteinDistance.test.js"},
    {"cat": "01_algo", "name": "func_07_knapsack",
     "code": f"{BASE_TREKHLEB}/algorithms/sets/knapsack-problem/Knapsack.js",
     "test": f"{BASE_TREKHLEB}/algorithms/sets/knapsack-problem/__test__/Knapsack.test.js"},
    {"cat": "01_algo", "name": "func_08_lcs",
     "code": f"{BASE_TREKHLEB}/algorithms/sets/longest-common-subsequence/longestCommonSubsequence.js",
     "test": f"{BASE_TREKHLEB}/algorithms/sets/longest-common-subsequence/__test__/longestCommonSubsequence.test.js"},
    {"cat": "01_algo", "name": "func_09_bfs",
     "code": f"{BASE_TREKHLEB}/algorithms/graph/breadth-first-search/breadthFirstSearch.js",
     "test": f"{BASE_TREKHLEB}/algorithms/graph/breadth-first-search/__test__/breadthFirstSearch.test.js"},
    {"cat": "01_algo", "name": "func_10_dfs",
     "code": f"{BASE_TREKHLEB}/algorithms/graph/depth-first-search/depthFirstSearch.js",
     "test": f"{BASE_TREKHLEB}/algorithms/graph/depth-first-search/__test__/depthFirstSearch.test.js"},
    {"cat": "01_algo", "name": "func_11_dijkstra",
     "code": f"{BASE_TREKHLEB}/algorithms/graph/dijkstra/dijkstra.js",
     "test": f"{BASE_TREKHLEB}/algorithms/graph/dijkstra/__test__/dijkstra.test.js"},
    {"cat": "01_algo", "name": "func_12_pascalTriangle",
     "code": f"{BASE_TREKHLEB}/algorithms/math/pascal-triangle/pascalTriangle.js",
     "test": f"{BASE_TREKHLEB}/algorithms/math/pascal-triangle/__test__/pascalTriangle.test.js"},
    {"cat": "01_algo", "name": "func_13_isPowerOfTwo",
     "code": f"{BASE_TREKHLEB}/algorithms/math/is-power-of-two/isPowerOfTwo.js",
     "test": f"{BASE_TREKHLEB}/algorithms/math/is-power-of-two/__test__/isPowerOfTwo.test.js"},
    {"cat": "01_algo", "name": "func_14_euclidean",
     "code": f"{BASE_TREKHLEB}/algorithms/math/euclidean-algorithm/euclideanAlgorithm.js",
     "test": f"{BASE_TREKHLEB}/algorithms/math/euclidean-algorithm/__test__/euclideanAlgorithm.test.js"},
    {"cat": "01_algo", "name": "func_15_primality",
     "code": f"{BASE_TREKHLEB}/algorithms/math/primality-test/trialDivision.js",
     "test": f"{BASE_TREKHLEB}/algorithms/math/primality-test/__test__/trialDivision.test.js"},

    # CATEGORY 2: String & Validation (15 Items)
    {"cat": "02_string", "name": "func_16_isEmail",
     "code": f"{BASE_VALIDATOR}/src/lib/isEmail.js",
     "test": f"{BASE_VALIDATOR}/test/exports.test.js"},
    {"cat": "02_string", "name": "func_17_isURL",
     "code": f"{BASE_VALIDATOR}/src/lib/isURL.js",
     "test": f"{BASE_VALIDATOR}/test/exports.test.js"},
    {"cat": "02_string", "name": "func_18_isCreditCard",
     "code": f"{BASE_VALIDATOR}/src/lib/isCreditCard.js",
     "test": f"{BASE_VALIDATOR}/test/exports.test.js"},
    {"cat": "02_string", "name": "func_19_isIP",
     "code": f"{BASE_VALIDATOR}/src/lib/isIP.js",
     "test": f"{BASE_VALIDATOR}/test/exports.test.js"},
    {"cat": "02_string", "name": "func_20_isJSON",
     "code": f"{BASE_VALIDATOR}/src/lib/isJSON.js",
     "test": f"{BASE_VALIDATOR}/test/exports.test.js"},
    {"cat": "02_string", "name": "func_21_isBase64",
     "code": f"{BASE_VALIDATOR}/src/lib/isBase64.js",
     "test": f"{BASE_VALIDATOR}/test/exports.test.js"},
    {"cat": "02_string", "name": "func_22_isAlpha",
     "code": f"{BASE_VALIDATOR}/src/lib/isAlpha.js",
     "test": f"{BASE_VALIDATOR}/test/exports.test.js"},
    {"cat": "02_string", "name": "func_23_isAlphanumeric",
     "code": f"{BASE_VALIDATOR}/src/lib/isAlphanumeric.js",
     "test": f"{BASE_VALIDATOR}/test/exports.test.js"},
    {"cat": "02_string", "name": "func_24_isAscii",
     "code": f"{BASE_VALIDATOR}/src/lib/isAscii.js",
     "test": f"{BASE_VALIDATOR}/test/exports.test.js"},
    {"cat": "02_string", "name": "func_25_isHexColor",
     "code": f"{BASE_VALIDATOR}/src/lib/isHexColor.js",
     "test": f"{BASE_VALIDATOR}/test/exports.test.js"},
    {"cat": "02_string", "name": "func_26_isJWT",
     "code": f"{BASE_VALIDATOR}/src/lib/isJWT.js",
     "test": f"{BASE_VALIDATOR}/test/exports.test.js"},
    {"cat": "02_string", "name": "func_27_isMD5",
     "code": f"{BASE_VALIDATOR}/src/lib/isMD5.js",
     "test": f"{BASE_VALIDATOR}/test/exports.test.js"},
    {"cat": "02_string", "name": "func_28_isSlug",
     "code": f"{BASE_VALIDATOR}/src/lib/isSlug.js",
     "test": f"{BASE_VALIDATOR}/test/exports.test.js"},
    {"cat": "02_string", "name": "func_29_isUUID",
     "code": f"{BASE_VALIDATOR}/src/lib/isUUID.js",
     "test": f"{BASE_VALIDATOR}/test/exports.test.js"},
    {"cat": "02_string", "name": "func_30_isMobilePhone",
     "code": f"{BASE_VALIDATOR}/src/lib/isMobilePhone.js",
     "test": f"{BASE_VALIDATOR}/test/exports.test.js"},

    # CATEGORY 3: Array & Object Manipulation (10 Items)
    {"cat": "03_array_obj", "name": "func_31_arrayFlatten",
     "code": f"{BASE_TREKHLEB}/algorithms/sets/cartesian-product/cartesianProduct.js",
     "test": f"{BASE_TREKHLEB}/algorithms/sets/cartesian-product/__test__/cartesianProduct.test.js"},
    {"cat": "03_array_obj", "name": "func_32_powerSet",
     "code": f"{BASE_TREKHLEB}/algorithms/sets/power-set/bwPowerSet.js",
     "test": f"{BASE_TREKHLEB}/algorithms/sets/power-set/__test__/bwPowerSet.test.js"},
    {"cat": "03_array_obj", "name": "func_33_permutations",
     "code": f"{BASE_TREKHLEB}/algorithms/sets/permutations/permutateWithoutRepetitions.js",
     "test": f"{BASE_TREKHLEB}/algorithms/sets/permutations/__test__/permutateWithoutRepetitions.test.js"},
    {"cat": "03_array_obj", "name": "func_34_combinations",
     "code": f"{BASE_TREKHLEB}/algorithms/sets/combinations/combineWithoutRepetitions.js",
     "test": f"{BASE_TREKHLEB}/algorithms/sets/combinations/__test__/combineWithoutRepetitions.test.js"},
    {"cat": "03_array_obj", "name": "func_35_fisherYates",
     "code": f"{BASE_TREKHLEB}/algorithms/sets/fisher-yates/fisherYates.js",
     "test": f"{BASE_TREKHLEB}/algorithms/sets/fisher-yates/__test__/fisherYates.test.js"},
    {"cat": "03_array_obj", "name": "func_36_isEqual",
     "code": "https://raw.githubusercontent.com/lodash/lodash/4.17.21-es/isEqual.js",
     "test": "https://raw.githubusercontent.com/lodash/lodash/4.17.21-es/isEqual.js"},
    {"cat": "03_array_obj", "name": "func_37_cloneDeep",
     "code": "https://raw.githubusercontent.com/lodash/lodash/4.17.21-es/cloneDeep.js",
     "test": "https://raw.githubusercontent.com/lodash/lodash/4.17.21-es/cloneDeep.js"},
    {"cat": "03_array_obj", "name": "func_38_chunk",
     "code": "https://raw.githubusercontent.com/lodash/lodash/4.17.21-es/chunk.js",
     "test": "https://raw.githubusercontent.com/lodash/lodash/4.17.21-es/chunk.js"},
    {"cat": "03_array_obj", "name": "func_39_compact",
     "code": "https://raw.githubusercontent.com/lodash/lodash/4.17.21-es/compact.js",
     "test": "https://raw.githubusercontent.com/lodash/lodash/4.17.21-es/compact.js"},
    {"cat": "03_array_obj", "name": "func_40_difference",
     "code": "https://raw.githubusercontent.com/lodash/lodash/4.17.21-es/difference.js",
     "test": "https://raw.githubusercontent.com/lodash/lodash/4.17.21-es/difference.js"},

    # CATEGORY 4: Math & Crypto (10 Items)
    {"cat": "04_math_crypto", "name": "func_41_base64",
     "code": "https://raw.githubusercontent.com/brix/crypto-js/develop/src/enc-base64.js",
     "test": "https://raw.githubusercontent.com/brix/crypto-js/develop/test/enc-base64-test.js"},
    {"cat": "04_math_crypto", "name": "func_42_md5",
     "code": "https://raw.githubusercontent.com/brix/crypto-js/develop/src/md5.js",
     "test": "https://raw.githubusercontent.com/brix/crypto-js/develop/test/md5-test.js"},
    {"cat": "04_math_crypto", "name": "func_43_sha256",
     "code": "https://raw.githubusercontent.com/brix/crypto-js/develop/src/sha256.js",
     "test": "https://raw.githubusercontent.com/brix/crypto-js/develop/test/sha256-test.js"},
    {"cat": "04_math_crypto", "name": "func_44_aes",
     "code": "https://raw.githubusercontent.com/brix/crypto-js/develop/src/aes.js",
     "test": "https://raw.githubusercontent.com/brix/crypto-js/develop/test/aes-test.js"},
    {"cat": "04_math_crypto", "name": "func_45_rc4",
     "code": "https://raw.githubusercontent.com/brix/crypto-js/develop/src/rc4.js",
     "test": "https://raw.githubusercontent.com/brix/crypto-js/develop/test/rc4-test.js"},
    {"cat": "04_math_crypto", "name": "func_46_getBit",
     "code": f"{BASE_TREKHLEB}/algorithms/math/bits/getBit.js",
     "test": f"{BASE_TREKHLEB}/algorithms/math/bits/__test__/getBit.test.js"},
    {"cat": "04_math_crypto", "name": "func_47_integerPartition",
     "code": f"{BASE_TREKHLEB}/algorithms/math/integer-partition/integerPartition.js",
     "test": f"{BASE_TREKHLEB}/algorithms/math/integer-partition/__test__/integerPartition.test.js"},
    {"cat": "04_math_crypto", "name": "func_48_factorial",
     "code": f"{BASE_TREKHLEB}/algorithms/math/factorial/factorial.js",
     "test": f"{BASE_TREKHLEB}/algorithms/math/factorial/__test__/factorial.test.js"},
    {"cat": "04_math_crypto", "name": "func_49_sieveOfEratosthenes",
     "code": f"{BASE_TREKHLEB}/algorithms/math/sieve-of-eratosthenes/sieveOfEratosthenes.js",
     "test": f"{BASE_TREKHLEB}/algorithms/math/sieve-of-eratosthenes/__test__/sieveOfEratosthenes.test.js"},
    {"cat": "04_math_crypto", "name": "func_50_squareRoot",
     "code": f"{BASE_TREKHLEB}/algorithms/math/square-root/squareRoot.js",
     "test": f"{BASE_TREKHLEB}/algorithms/math/square-root/__test__/squareRoot.test.js"}
]


def download_file(url, target_path):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp, open(target_path, 'wb') as f:
            f.write(resp.read())
        return True
    except Exception as e:
        print(f"  [X] Download Error: {os.path.basename(target_path)} ({e})")
        return False


print("=" * 60)
print("Downloading 4-Category Dataset from GitHub Repositories...")
print("=" * 60)

stats = {"01_algo": 0, "02_string": 0, "03_array_obj": 0, "04_math_crypto": 0}

for idx, item in enumerate(DATASET_MAP, 1):
    code_file = os.path.join(RAW_DIR, f"{item['name']}.js")
    test_file = os.path.join(TEST_DIR, f"{item['name']}.test.js")

    ok_code = download_file(item['code'], code_file)
    ok_test = download_file(item['test'], test_file)

    if ok_code:
        stats[item['cat']] += 1
        print(f"[{idx:02d}/50] [{item['cat']}] Successfully downloaded: {item['name']}")

print("\n" + "=" * 60)
print("CATEGORY-BASED DOWNLOAD SUMMARY:")
print("=" * 60)
print(f"1. Data Structures & Algorithms : {stats['01_algo']}/15")
print(f"2. String & Validation         : {stats['02_string']}/15")
print(f"3. Array & Object Manipulation  : {stats['03_array_obj']}/10")
print(f"4. Math & Crypto               : {stats['04_math_crypto']}/10")
print(f"TOTAL                           : {sum(stats.values())}/50")