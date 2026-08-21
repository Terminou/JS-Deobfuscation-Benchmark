
const path = require('path');
const targetDir = process.env.TARGET_DIR || 'dataset/00_raw';
const targetPath = path.resolve(__dirname, '../../', targetDir, 'func_37_cloneDeep.js');
const rawModule = require(targetPath);
const targetModule = rawModule.default || rawModule;

describe('func_37_cloneDeep', () => {
  test('creates a deep clone of objects', () => {
    const objects = [{ 'a': 1 }, { 'b': 2 }];
    const deep = targetModule(objects);
    expect(deep).toEqual(objects);
    expect(deep[0]).not.toBe(objects[0]);
  });
});