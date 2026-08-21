
const path = require('path');
const targetDir = process.env.TARGET_DIR || 'dataset/00_raw';
const targetPath = path.resolve(__dirname, '../../', targetDir, 'func_40_difference.js');
const rawModule = require(targetPath);
const targetModule = rawModule.default || rawModule;

describe('func_40_difference', () => {
  test('creates an array of values not included in other given array', () => {
    expect(targetModule([2, 1], [2, 3])).toEqual([1]);
  });
});