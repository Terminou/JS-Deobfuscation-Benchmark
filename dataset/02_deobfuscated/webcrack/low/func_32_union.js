'use strict';

module.exports = function union(_0x3fd77d) {
  if (!Array.isArray(_0x3fd77d)) {
    throw new TypeError("arr-union expects the first argument to be an array.");
  }
  var _0x22f94c = arguments.length;
  var _0x4d30e5 = 0;
  while (++_0x4d30e5 < _0x22f94c) {
    var _0x4dbbab = arguments[_0x4d30e5];
    if (!_0x4dbbab) {
      continue;
    }
    if (!Array.isArray(_0x4dbbab)) {
      _0x4dbbab = [_0x4dbbab];
    }
    for (var _0x440627 = 0; _0x440627 < _0x4dbbab.length; _0x440627++) {
      var _0x271149 = _0x4dbbab[_0x440627];
      if (_0x3fd77d.indexOf(_0x271149) >= 0) {
        continue;
      }
      _0x3fd77d.push(_0x271149);
    }
  }
  return _0x3fd77d;
};