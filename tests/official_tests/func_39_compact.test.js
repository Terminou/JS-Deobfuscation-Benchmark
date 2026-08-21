
const path = require('path');
const targetDir = process.env.TARGET_DIR || 'dataset/00_raw';
const targetPath = path.resolve(__dirname, '../../', targetDir, 'func_39_compact.js');
const rawModule = require(targetPath);
const targetModule = rawModule.default || rawModule;

describe('func_39_compact', () => {
  test('removes falsy values from array', () => {
    expect(targetModule([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
  });
});