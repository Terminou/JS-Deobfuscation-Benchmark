"use strict";
const defaultAlphabetIndexMap = [];
function naturalCompare(_0x44ea6f, _0x281464, _0x576bff) {
  if (typeof _0x44ea6f !== "string") {
    throw new TypeError("The first argument must be a string. Received type '" + typeof _0x44ea6f + "'");
  }
  if (typeof _0x281464 !== "string") {
    throw new TypeError("The second argument must be a string. Received type '" + typeof _0x281464 + "'");
  }
  const _0x292827 = _0x44ea6f.length;
  const _0x267b81 = _0x281464.length;
  let _0x1a1aa7 = 0;
  let _0x15c7e1 = 0;
  let _0x22eb7c = defaultAlphabetIndexMap;
  let _0x3da2c3 = 0;
  if (_0x576bff) {
    if (_0x576bff.caseInsensitive) {
      _0x44ea6f = _0x44ea6f.toLowerCase();
      _0x281464 = _0x281464.toLowerCase();
    }
    if (_0x576bff.alphabet) {
      _0x22eb7c = buildAlphabetIndexMap(_0x576bff.alphabet);
    }
  }
  while (_0x1a1aa7 < _0x292827 && _0x15c7e1 < _0x267b81) {
    let _0x1f43b8 = _0x44ea6f.charCodeAt(_0x1a1aa7);
    let _0x4cd9a1 = _0x281464.charCodeAt(_0x15c7e1);
    if (_0x1f43b8 >= 48 && _0x1f43b8 <= 57) {
      if (!(_0x4cd9a1 >= 48 && _0x4cd9a1 <= 57)) {
        return _0x1f43b8 - _0x4cd9a1;
      }
      let _0x5403d0 = _0x1a1aa7;
      let _0x43d0dd = _0x15c7e1;
      while (_0x1f43b8 === 48 && ++_0x5403d0 < _0x292827) {
        _0x1f43b8 = _0x44ea6f.charCodeAt(_0x5403d0);
      }
      while (_0x4cd9a1 === 48 && ++_0x43d0dd < _0x267b81) {
        _0x4cd9a1 = _0x281464.charCodeAt(_0x43d0dd);
      }
      if (_0x5403d0 !== _0x43d0dd && _0x3da2c3 === 0) {
        _0x3da2c3 = _0x5403d0 - _0x43d0dd;
      }
      let _0xd98cf7 = _0x5403d0;
      let _0x4dcf54 = _0x43d0dd;
      while (_0xd98cf7 < _0x292827 && (_0x44ea6f.charCodeAt(_0xd98cf7) >= 48 && _0x44ea6f.charCodeAt(_0xd98cf7) <= 57)) {
        ++_0xd98cf7;
      }
      while (_0x4dcf54 < _0x267b81 && (_0x281464.charCodeAt(_0x4dcf54) >= 48 && _0x281464.charCodeAt(_0x4dcf54) <= 57)) {
        ++_0x4dcf54;
      }
      let _0x341778 = _0xd98cf7 - _0x5403d0 - _0x4dcf54 + _0x43d0dd;
      if (_0x341778 !== 0) {
        return _0x341778;
      }
      while (_0x5403d0 < _0xd98cf7) {
        _0x341778 = _0x44ea6f.charCodeAt(_0x5403d0++) - _0x281464.charCodeAt(_0x43d0dd++);
        if (_0x341778 !== 0) {
          return _0x341778;
        }
      }
      _0x1a1aa7 = _0xd98cf7;
      _0x15c7e1 = _0x4dcf54;
      continue;
    }
    if (_0x1f43b8 !== _0x4cd9a1) {
      if (_0x1f43b8 < _0x22eb7c.length && _0x4cd9a1 < _0x22eb7c.length && _0x22eb7c[_0x1f43b8] !== -1 && _0x22eb7c[_0x4cd9a1] !== -1) {
        return _0x22eb7c[_0x1f43b8] - _0x22eb7c[_0x4cd9a1];
      }
      return _0x1f43b8 - _0x4cd9a1;
    }
    ++_0x1a1aa7;
    ++_0x15c7e1;
  }
  if (_0x1a1aa7 < _0x292827) {
    return 1;
  }
  if (_0x15c7e1 < _0x267b81) {
    return -1;
  }
  return _0x3da2c3;
}
const alphabetIndexMapCache = {};
function buildAlphabetIndexMap(_0x50bdc8) {
  const _0x33f1bd = alphabetIndexMapCache[_0x50bdc8];
  if (_0x33f1bd !== undefined) {
    return _0x33f1bd;
  }
  const _0x9d22af = [];
  const _0x1a2d25 = _0x50bdc8.split("").reduce((_0x35d63a, _0x7c9e35) => {
    return Math.max(_0x35d63a, _0x7c9e35.charCodeAt(0));
  }, 0);
  for (let _0x5549a1 = 0; _0x5549a1 <= _0x1a2d25; _0x5549a1++) {
    _0x9d22af.push(-1);
  }
  for (let _0x109c73 = 0; _0x109c73 < _0x50bdc8.length; _0x109c73++) {
    _0x9d22af[_0x50bdc8.charCodeAt(_0x109c73)] = _0x109c73;
  }
  alphabetIndexMapCache[_0x50bdc8] = _0x9d22af;
  return _0x9d22af;
}
module.exports = naturalCompare;
