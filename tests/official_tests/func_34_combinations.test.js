
const path = require('path');
const targetDir = process.env.TARGET_DIR || 'dataset/00_raw';
const targetPath = path.resolve(__dirname, '../../', targetDir, 'func_34_combinations.js');
const rawModule = require(targetPath);
const targetModule = rawModule.default || rawModule;

const combineWithoutRepetitions = targetModule;
const factorial = targetModule;
const pascalTriangle = targetModule;

describe('combineWithoutRepetitions', () => {
  it('should combine string without repetitions', () => {
    expect(combineWithoutRepetitions(['A', 'B'], 0)).toEqual([
      [],
    ]);

    expect(combineWithoutRepetitions(['A', 'B'], 3)).toEqual([]);

    expect(combineWithoutRepetitions(['A', 'B'], 1)).toEqual([
      ['A'],
      ['B'],
    ]);

    expect(combineWithoutRepetitions(['A'], 1)).toEqual([
      ['A'],
    ]);

    expect(combineWithoutRepetitions(['A', 'B'], 2)).toEqual([
      ['A', 'B'],
    ]);

    expect(combineWithoutRepetitions(['A', 'B', 'C'], 2)).toEqual([
      ['A', 'B'],
      ['A', 'C'],
      ['B', 'C'],
    ]);

    expect(combineWithoutRepetitions(['A', 'B', 'C'], 3)).toEqual([
      ['A', 'B', 'C'],
    ]);

    expect(combineWithoutRepetitions(['A', 'B', 'C'], -1)).toEqual([]);

    expect(combineWithoutRepetitions(['A', 'B', 'C', 'D'], 3)).toEqual([
      ['A', 'B', 'C'],
      ['A', 'B', 'D'],
      ['A', 'C', 'D'],
      ['B', 'C', 'D'],
    ]);

    expect(combineWithoutRepetitions(['A', 'B', 'C', 'D', 'E'], 3)).toEqual([
      ['A', 'B', 'C'],
      ['A', 'B', 'D'],
      ['A', 'B', 'E'],
      ['A', 'C', 'D'],
      ['A', 'C', 'E'],
      ['A', 'D', 'E'],
      ['B', 'C', 'D'],
      ['B', 'C', 'E'],
      ['B', 'D', 'E'],
      ['C', 'D', 'E'],
    ]);

    const combinationOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const combinationSlotsNumber = 4;
    const combinations = combineWithoutRepetitions(combinationOptions, combinationSlotsNumber);
    const n = combinationOptions.length;
    const r = combinationSlotsNumber;
    const expectedNumberOfCombinations = factorial(n) / (factorial(r) * factorial(n - r));

    expect(combinations.length).toBe(expectedNumberOfCombinations);

    // This one is just to see one of the way of Pascal's triangle application.
    expect(combinations.length).toBe(pascalTriangle(n)[r]);
  });
});
