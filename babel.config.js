/**
 * Babel is used ONLY to make the vendored upstream tests loadable: three of
 * them are ES modules (ava, vitest) and three are TypeScript. It is never
 * applied to dataset/ -- see transformIgnorePatterns in jest.config.js.
 */
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
};
