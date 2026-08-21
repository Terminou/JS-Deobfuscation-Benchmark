
const path = require('path');
const targetDir = process.env.TARGET_DIR || 'dataset/00_raw';
const targetPath = path.resolve(__dirname, '../../', targetDir, 'func_36_isEqual.js');
const rawModule = require(targetPath);
const targetModule = rawModule.default || rawModule;

describe('func_36_isEqual', () => {
  test('performs deep equality comparison', () => {
    const object = { 'a': 1, 'b': { 'c': 2 } };
    const other = { 'a': 1, 'b': { 'c': 2 } };
    expect(targetModule(object, other)).toBe(true);
    expect(targetModule(object, { 'a': 1, 'b': { 'c': 3 } })).toBe(false);
  });
});