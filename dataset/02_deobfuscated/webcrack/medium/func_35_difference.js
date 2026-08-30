'use strict';

module.exports = function diff(_0x34f4ad) {
  var _0x3ad87a = arguments.length;
  var _0x349bd1 = 0;
  while (++_0x349bd1 < _0x3ad87a) {
    _0x34f4ad = diffArray(_0x34f4ad, arguments[_0x349bd1]);
  }
  return _0x34f4ad;
};
function diffArray(_0x5c4093, _0x4d76ea) {
  if (!Array.isArray(_0x4d76ea)) {
    return _0x5c4093.slice();
  }
  var _0x3c9028 = _0x4d76ea.length;
  var _0x14e901 = _0x5c4093.length;
  var _0x50b334 = -1;
  var _0x3f60dc = [];
  while (++_0x50b334 < _0x14e901) {
    var _0xb7e0c6 = _0x5c4093[_0x50b334];
    var _0x97cecd = false;
    for (var _0xa5d48b = 0; _0xa5d48b < _0x3c9028; _0xa5d48b++) {
      var _0x61f435 = _0x4d76ea[_0xa5d48b];
      if (_0xb7e0c6 === _0x61f435) {
        _0x97cecd = true;
        break;
      }
    }
    if (_0x97cecd === false) {
      _0x3f60dc.push(_0xb7e0c6);
    }
  }
  return _0x3f60dc;
}