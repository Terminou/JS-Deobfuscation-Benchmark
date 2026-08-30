'use strict';

module.exports = function unique(_0x1ece87) {
  if (!Array.isArray(_0x1ece87)) {
    throw new TypeError("array-unique expects an array.");
  }
  var _0x1cc86a = _0x1ece87.length;
  var _0x5ee597 = -1;
  while (_0x5ee597++ < _0x1cc86a) {
    var _0x41b637 = _0x5ee597 + 1;
    for (; _0x41b637 < _0x1ece87.length; ++_0x41b637) {
      if (_0x1ece87[_0x5ee597] === _0x1ece87[_0x41b637]) {
        _0x1ece87.splice(_0x41b637--, 1);
      }
    }
  }
  return _0x1ece87;
};
module.exports.immutable = function uniqueImmutable(_0x20d25a) {
  if (!Array.isArray(_0x20d25a)) {
    throw new TypeError("array-unique expects an array.");
  }
  var _0x31f993 = _0x20d25a.length;
  var _0x59975b = new Array(_0x31f993);
  for (var _0x473dc5 = 0; _0x473dc5 < _0x31f993; _0x473dc5++) {
    _0x59975b[_0x473dc5] = _0x20d25a[_0x473dc5];
  }
  return module.exports(_0x59975b);
};