'use strict';

module.exports = function union(_0x25ec81) {
  if (!Array.isArray(_0x25ec81)) {
    throw new TypeError("arr-union expects the first argument to be an array.");
  }
  var _0x1cebf3 = arguments.length;
  var _0x49c935 = 0;
  while (++_0x49c935 < _0x1cebf3) {
    var _0x539cd5 = arguments[_0x49c935];
    if (!_0x539cd5) {
      continue;
    }
    if (!Array.isArray(_0x539cd5)) {
      _0x539cd5 = [_0x539cd5];
    }
    for (var _0x192773 = 0; _0x192773 < _0x539cd5.length; _0x192773++) {
      var _0x1f87b8 = _0x539cd5[_0x192773];
      if (_0x25ec81.indexOf(_0x1f87b8) >= 0) {
        continue;
      }
      _0x25ec81.push(_0x1f87b8);
    }
  }
  return _0x25ec81;
};