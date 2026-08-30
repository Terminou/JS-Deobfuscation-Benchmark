'use strict';

const defaultAlphabetIndexMap = [];
function isNumberCode(_0x4fdfaa) {
  return _0x4fdfaa >= 48 && _0x4fdfaa <= 57;
}
function naturalCompare(_0x8c0495, _0x28b08c, _0x171200) {
  if (typeof _0x8c0495 !== "string") {
    throw new TypeError("The first argument must be a string. Received type '" + typeof _0x8c0495 + "'");
  }
  if (typeof _0x28b08c !== "string") {
    throw new TypeError("The second argument must be a string. Received type '" + typeof _0x28b08c + "'");
  }
  const _0x1cbdd1 = _0x8c0495.length;
  const _0x312107 = _0x28b08c.length;
  let _0x5441eb = 0;
  let _0x38ca56 = 0;
  let _0x5c2e81 = defaultAlphabetIndexMap;
  let _0x3c88f4 = 0;
  if (_0x171200) {
    if (_0x171200.caseInsensitive) {
      _0x8c0495 = _0x8c0495.toLowerCase();
      _0x28b08c = _0x28b08c.toLowerCase();
    }
    if (_0x171200.alphabet) {
      _0x5c2e81 = buildAlphabetIndexMap(_0x171200.alphabet);
    }
  }
  while (_0x5441eb < _0x1cbdd1 && _0x38ca56 < _0x312107) {
    let _0x4013eb = _0x8c0495.charCodeAt(_0x5441eb);
    let _0x3e33c2 = _0x28b08c.charCodeAt(_0x38ca56);
    if (isNumberCode(_0x4013eb)) {
      if (!isNumberCode(_0x3e33c2)) {
        return _0x4013eb - _0x3e33c2;
      }
      let _0x3ad6c6 = _0x5441eb;
      let _0x58a057 = _0x38ca56;
      while (_0x4013eb === 48 && ++_0x3ad6c6 < _0x1cbdd1) {
        _0x4013eb = _0x8c0495.charCodeAt(_0x3ad6c6);
      }
      while (_0x3e33c2 === 48 && ++_0x58a057 < _0x312107) {
        _0x3e33c2 = _0x28b08c.charCodeAt(_0x58a057);
      }
      if (_0x3ad6c6 !== _0x58a057 && _0x3c88f4 === 0) {
        _0x3c88f4 = _0x3ad6c6 - _0x58a057;
      }
      let _0x4a1c6e = _0x3ad6c6;
      let _0x5ed4b9 = _0x58a057;
      while (_0x4a1c6e < _0x1cbdd1 && isNumberCode(_0x8c0495.charCodeAt(_0x4a1c6e))) {
        ++_0x4a1c6e;
      }
      while (_0x5ed4b9 < _0x312107 && isNumberCode(_0x28b08c.charCodeAt(_0x5ed4b9))) {
        ++_0x5ed4b9;
      }
      let _0x4d0e15 = _0x4a1c6e - _0x3ad6c6 - _0x5ed4b9 + _0x58a057;
      if (_0x4d0e15 !== 0) {
        return _0x4d0e15;
      }
      while (_0x3ad6c6 < _0x4a1c6e) {
        _0x4d0e15 = _0x8c0495.charCodeAt(_0x3ad6c6++) - _0x28b08c.charCodeAt(_0x58a057++);
        if (_0x4d0e15 !== 0) {
          return _0x4d0e15;
        }
      }
      _0x5441eb = _0x4a1c6e;
      _0x38ca56 = _0x5ed4b9;
      continue;
    }
    if (_0x4013eb !== _0x3e33c2) {
      if (_0x4013eb < _0x5c2e81.length && _0x3e33c2 < _0x5c2e81.length && _0x5c2e81[_0x4013eb] !== -1 && _0x5c2e81[_0x3e33c2] !== -1) {
        return _0x5c2e81[_0x4013eb] - _0x5c2e81[_0x3e33c2];
      }
      return _0x4013eb - _0x3e33c2;
    }
    ++_0x5441eb;
    ++_0x38ca56;
  }
  if (_0x5441eb < _0x1cbdd1) {
    return 1;
  }
  if (_0x38ca56 < _0x312107) {
    return -1;
  }
  return _0x3c88f4;
}
const alphabetIndexMapCache = {};
function buildAlphabetIndexMap(_0x33df9e) {
  const _0x302181 = alphabetIndexMapCache[_0x33df9e];
  if (_0x302181 !== undefined) {
    return _0x302181;
  }
  const _0x4449a6 = [];
  const _0x3ae8c9 = _0x33df9e.split("").reduce((_0x2b3964, _0x404781) => {
    return Math.max(_0x2b3964, _0x404781.charCodeAt(0));
  }, 0);
  for (let _0x196087 = 0; _0x196087 <= _0x3ae8c9; _0x196087++) {
    _0x4449a6.push(-1);
  }
  for (let _0x2d7f76 = 0; _0x2d7f76 < _0x33df9e.length; _0x2d7f76++) {
    _0x4449a6[_0x33df9e.charCodeAt(_0x2d7f76)] = _0x2d7f76;
  }
  alphabetIndexMapCache[_0x33df9e] = _0x4449a6;
  return _0x4449a6;
}
module.exports = naturalCompare;