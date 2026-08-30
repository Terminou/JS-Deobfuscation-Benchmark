'use strict';

const defaultAlphabetIndexMap = [];
function isNumberCode(_0x178a28) {
  return _0x178a28 >= 48 && _0x178a28 <= 57;
}
function naturalCompare(_0x2bea94, _0x1a790d, _0x3462bf) {
  if (typeof _0x2bea94 !== "string") {
    throw new TypeError("The first argument must be a string. Received type '" + typeof _0x2bea94 + "'");
  }
  if (typeof _0x1a790d !== "string") {
    throw new TypeError("The second argument must be a string. Received type '" + typeof _0x1a790d + "'");
  }
  const _0x5e7fd7 = _0x2bea94.length;
  const _0x10054d = _0x1a790d.length;
  let _0x4d6164 = 0;
  let _0x2c6c90 = 0;
  let _0x14f1cd = defaultAlphabetIndexMap;
  let _0x13d007 = 0;
  if (_0x3462bf) {
    if (_0x3462bf.caseInsensitive) {
      _0x2bea94 = _0x2bea94.toLowerCase();
      _0x1a790d = _0x1a790d.toLowerCase();
    }
    if (_0x3462bf.alphabet) {
      _0x14f1cd = buildAlphabetIndexMap(_0x3462bf.alphabet);
    }
  }
  while (_0x4d6164 < _0x5e7fd7 && _0x2c6c90 < _0x10054d) {
    let _0x96da92 = _0x2bea94.charCodeAt(_0x4d6164);
    let _0xf10c5c = _0x1a790d.charCodeAt(_0x2c6c90);
    if (isNumberCode(_0x96da92)) {
      if (!isNumberCode(_0xf10c5c)) {
        return _0x96da92 - _0xf10c5c;
      }
      let _0xc33b25 = _0x4d6164;
      let _0x3774c5 = _0x2c6c90;
      while (_0x96da92 === 48 && ++_0xc33b25 < _0x5e7fd7) {
        _0x96da92 = _0x2bea94.charCodeAt(_0xc33b25);
      }
      while (_0xf10c5c === 48 && ++_0x3774c5 < _0x10054d) {
        _0xf10c5c = _0x1a790d.charCodeAt(_0x3774c5);
      }
      if (_0xc33b25 !== _0x3774c5 && _0x13d007 === 0) {
        _0x13d007 = _0xc33b25 - _0x3774c5;
      }
      let _0x1f62f3 = _0xc33b25;
      let _0x2ca115 = _0x3774c5;
      while (_0x1f62f3 < _0x5e7fd7 && isNumberCode(_0x2bea94.charCodeAt(_0x1f62f3))) {
        ++_0x1f62f3;
      }
      while (_0x2ca115 < _0x10054d && isNumberCode(_0x1a790d.charCodeAt(_0x2ca115))) {
        ++_0x2ca115;
      }
      let _0x40c31f = _0x1f62f3 - _0xc33b25 - _0x2ca115 + _0x3774c5;
      if (_0x40c31f !== 0) {
        return _0x40c31f;
      }
      while (_0xc33b25 < _0x1f62f3) {
        _0x40c31f = _0x2bea94.charCodeAt(_0xc33b25++) - _0x1a790d.charCodeAt(_0x3774c5++);
        if (_0x40c31f !== 0) {
          return _0x40c31f;
        }
      }
      _0x4d6164 = _0x1f62f3;
      _0x2c6c90 = _0x2ca115;
      continue;
    }
    if (_0x96da92 !== _0xf10c5c) {
      if (_0x96da92 < _0x14f1cd.length && _0xf10c5c < _0x14f1cd.length && _0x14f1cd[_0x96da92] !== -1 && _0x14f1cd[_0xf10c5c] !== -1) {
        return _0x14f1cd[_0x96da92] - _0x14f1cd[_0xf10c5c];
      }
      return _0x96da92 - _0xf10c5c;
    }
    ++_0x4d6164;
    ++_0x2c6c90;
  }
  if (_0x4d6164 < _0x5e7fd7) {
    return 1;
  }
  if (_0x2c6c90 < _0x10054d) {
    return -1;
  }
  return _0x13d007;
}
const alphabetIndexMapCache = {};
function buildAlphabetIndexMap(_0xd5f1d5) {
  const _0x2c707d = alphabetIndexMapCache[_0xd5f1d5];
  if (_0x2c707d !== undefined) {
    return _0x2c707d;
  }
  const _0x183e54 = [];
  const _0x58ceaf = _0xd5f1d5.split("").reduce((_0x2ae490, _0x3c5cf6) => {
    return Math.max(_0x2ae490, _0x3c5cf6.charCodeAt(0));
  }, 0);
  for (let _0x3abfdd = 0; _0x3abfdd <= _0x58ceaf; _0x3abfdd++) {
    _0x183e54.push(-1);
  }
  for (let _0x304846 = 0; _0x304846 < _0xd5f1d5.length; _0x304846++) {
    _0x183e54[_0xd5f1d5.charCodeAt(_0x304846)] = _0x304846;
  }
  alphabetIndexMapCache[_0xd5f1d5] = _0x183e54;
  return _0x183e54;
}
module.exports = naturalCompare;