
const path = require('path');
const targetDir = process.env.TARGET_DIR || 'dataset/00_raw';
const targetPath = path.resolve(__dirname, '../../', targetDir, 'func_38_chunk.js');
const rawModule = require(targetPath);
const targetModule = rawModule.default || rawModule;

describe('func_38_chunk', () => {
  test('splits array into chunks of specified length', () => {
    expect(targetModule(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    expect(targetModule(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });
});