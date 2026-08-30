'use strict';
module.exports = function diff(_0x4379c5) {
  var _0x7224d1 = arguments.length;
  var _0x6db401 = 0;
  while (++_0x6db401 < arguments.length) {
    _0x4379c5 = diffArray(_0x4379c5, arguments[_0x6db401]);
  }
  return _0x4379c5;
};
function diffArray(_0x4b30f8, _0x22b4c0) {
  if (!Array.isArray(_0x22b4c0)) {
    return _0x4b30f8.slice();
  }
  var _0xd48fbf = _0x22b4c0.length;
  var _0x3d0eaa = _0x4b30f8.length;
  var _0x3cbbb5 = -1;
  var _0x5f1e2f = [];
  while (++_0x3cbbb5 < _0x4b30f8.length) {
    var _0x18f76a = _0x4b30f8[_0x3cbbb5];
    var _0x1b2c75 = false;
    for (var _0x5efd76 = 0; _0x5efd76 < _0x22b4c0.length; _0x5efd76++) {
      var _0x2bada8 = _0x22b4c0[_0x5efd76];
      if (_0x4b30f8[_0x3cbbb5] === _0x22b4c0[_0x5efd76]) {
        _0x1b2c75 = true;
        break;
      }
    }
    if (_0x1b2c75 === false) {
      _0x5f1e2f.push(_0x4b30f8[_0x3cbbb5]);
    }
  }
  return _0x5f1e2f;
}