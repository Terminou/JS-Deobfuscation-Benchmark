'use strict';

const defaultAlphabetIndexMap = [];
function isNumberCode(_0x1f43b8) {
  return _0x1f43b8 >= 48 && _0x1f43b8 <= 57;
}
function naturalCompare(_0x4cd9a1, _0x5403d0, _0x43d0dd) {
  if (typeof _0x4cd9a1 !== "string") {
    throw new TypeError("The first argument must be a string. Received type '" + typeof _0x4cd9a1 + "'");
  }
  if (typeof _0x5403d0 !== "string") {
    throw new TypeError("The second argument must be a string. Received type '" + typeof _0x5403d0 + "'");
  }
  const _0xd98cf7 = _0x4cd9a1.length;
  const _0x4dcf54 = _0x5403d0.length;
  let _0x341778 = 0;
  let _0x50bdc8 = 0;
  let _0x33f1bd = defaultAlphabetIndexMap;
  let _0x9d22af = 0;
  if (_0x43d0dd) {
    if (_0x43d0dd.caseInsensitive) {
      _0x4cd9a1 = _0x4cd9a1.toLowerCase();
      _0x5403d0 = _0x5403d0.toLowerCase();
    }
    if (_0x43d0dd.alphabet) {
      _0x33f1bd = buildAlphabetIndexMap(_0x43d0dd.alphabet);
    }
  }
  while (_0x341778 < _0xd98cf7 && _0x50bdc8 < _0x4dcf54) {
    let _0x1a2d25 = _0x4cd9a1.charCodeAt(_0x341778);
    let _0x35d63a = _0x5403d0.charCodeAt(_0x50bdc8);
    if (isNumberCode(_0x1a2d25)) {
      if (!isNumberCode(_0x35d63a)) {
        return _0x1a2d25 - _0x35d63a;
      }
      let _0x7c9e35 = _0x341778;
      let _0x5549a1 = _0x50bdc8;
      while (_0x1a2d25 === 48 && ++_0x7c9e35 < _0xd98cf7) {
        _0x1a2d25 = _0x4cd9a1.charCodeAt(_0x7c9e35);
      }
      while (_0x35d63a === 48 && ++_0x5549a1 < _0x4dcf54) {
        _0x35d63a = _0x5403d0.charCodeAt(_0x5549a1);
      }
      if (_0x7c9e35 !== _0x5549a1 && _0x9d22af === 0) {
        _0x9d22af = _0x7c9e35 - _0x5549a1;
      }
      let _0x109c73 = _0x7c9e35;
      let _0x3f8e80 = _0x5549a1;
      while (_0x109c73 < _0xd98cf7 && isNumberCode(_0x4cd9a1.charCodeAt(_0x109c73))) {
        ++_0x109c73;
      }
      while (_0x3f8e80 < _0x4dcf54 && isNumberCode(_0x5403d0.charCodeAt(_0x3f8e80))) {
        ++_0x3f8e80;
      }
      let _0x3fc43 = _0x109c73 - _0x7c9e35 - _0x3f8e80 + _0x5549a1;
      if (_0x3fc43 !== 0) {
        return _0x3fc43;
      }
      while (_0x7c9e35 < _0x109c73) {
        _0x3fc43 = _0x4cd9a1.charCodeAt(_0x7c9e35++) - _0x5403d0.charCodeAt(_0x5549a1++);
        if (_0x3fc43 !== 0) {
          return _0x3fc43;
        }
      }
      _0x341778 = _0x109c73;
      _0x50bdc8 = _0x3f8e80;
      continue;
    }
    if (_0x1a2d25 !== _0x35d63a) {
      if (_0x1a2d25 < _0x33f1bd.length && _0x35d63a < _0x33f1bd.length && _0x33f1bd[_0x1a2d25] !== -1 && _0x33f1bd[_0x35d63a] !== -1) {
        return _0x33f1bd[_0x1a2d25] - _0x33f1bd[_0x35d63a];
      }
      return _0x1a2d25 - _0x35d63a;
    }
    ++_0x341778;
    ++_0x50bdc8;
  }
  if (_0x341778 < _0xd98cf7) {
    return 1;
  }
  if (_0x50bdc8 < _0x4dcf54) {
    return -1;
  }
  return _0x9d22af;
}
const alphabetIndexMapCache = {};
function buildAlphabetIndexMap(_0x1a37af) {
  const _0x48f353 = alphabetIndexMapCache[_0x1a37af];
  if (_0x48f353 !== undefined) {
    return _0x48f353;
  }
  const _0x3b3931 = [];
  const _0x5f009d = _0x1a37af.split("").reduce((_0x5753e1, _0xd89c15) => {
    return Math.max(_0x5753e1, _0xd89c15.charCodeAt(0));
  }, 0);
  for (let _0x3c121f = 0; _0x3c121f <= _0x5f009d; _0x3c121f++) {
    _0x3b3931.push(-1);
  }
  for (let _0x397ada = 0; _0x397ada < _0x1a37af.length; _0x397ada++) {
    _0x3b3931[_0x1a37af.charCodeAt(_0x397ada)] = _0x397ada;
  }
  alphabetIndexMapCache[_0x1a37af] = _0x3b3931;
  return _0x3b3931;
}
module.exports = naturalCompare;