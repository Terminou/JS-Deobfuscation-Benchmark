
const path = require('path');
const targetDir = process.env.TARGET_DIR || 'dataset/00_raw';
const targetPath = path.resolve(__dirname, '../../', targetDir, 'func_49_sieveOfEratosthenes.js');
const rawModule = require(targetPath);
const targetModule = rawModule.default || rawModule;

const sieveOfEratosthenes = targetModule;

describe('sieveOfEratosthenes', () => {
  it('should find all primes less than or equal to n', () => {
    expect(sieveOfEratosthenes(5)).toEqual([2, 3, 5]);
    expect(sieveOfEratosthenes(10)).toEqual([2, 3, 5, 7]);
    expect(sieveOfEratosthenes(100)).toEqual([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
      43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
    ]);
  });
});
