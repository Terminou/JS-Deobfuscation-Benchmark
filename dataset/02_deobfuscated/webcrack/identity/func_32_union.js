'use strict';

module.exports = function union(_0x41823a) {
  if (!Array.isArray(_0x41823a)) {
    throw new TypeError("arr-union expects the first argument to be an array.");
  }
  var _0x38ec92 = arguments.length;
  var _0x103781 = 0;
  while (++_0x103781 < _0x38ec92) {
    var _0x2c2206 = arguments[_0x103781];
    if (!_0x2c2206) {
      continue;
    }
    if (!Array.isArray(_0x2c2206)) {
      _0x2c2206 = [_0x2c2206];
    }
    for (var _0x2fa7cf = 0; _0x2fa7cf < _0x2c2206.length; _0x2fa7cf++) {
      var _0xdfc94b = _0x2c2206[_0x2fa7cf];
      if (_0x41823a.indexOf(_0xdfc94b) >= 0) {
        continue;
      }
      _0x41823a.push(_0xdfc94b);
    }
  }
  return _0x41823a;
};