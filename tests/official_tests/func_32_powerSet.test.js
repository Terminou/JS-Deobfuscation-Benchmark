
const path = require('path');
const targetDir = process.env.TARGET_DIR || 'dataset/00_raw';
const targetPath = path.resolve(__dirname, '../../', targetDir, 'func_32_powerSet.js');
const rawModule = require(targetPath);
const targetModule = rawModule.default || rawModule;

const bwPowerSet = targetModule;

describe('bwPowerSet', () => {
  it('should calculate power set of given set using bitwise approach', () => {
    expect(bwPowerSet([1])).toEqual([
      [],
      [1],
    ]);

    expect(bwPowerSet([1, 2, 3])).toEqual([
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
    ]);
  });
});
