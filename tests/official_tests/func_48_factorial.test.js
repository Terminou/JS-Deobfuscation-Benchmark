
const path = require('path');
const targetDir = process.env.TARGET_DIR || 'dataset/00_raw';
const targetPath = path.resolve(__dirname, '../../', targetDir, 'func_48_factorial.js');
const rawModule = require(targetPath);
const targetModule = rawModule.default || rawModule;

const factorial = targetModule;

describe('factorial', () => {
  it('should calculate factorial', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(8)).toBe(40320);
    expect(factorial(10)).toBe(3628800);
  });
});
