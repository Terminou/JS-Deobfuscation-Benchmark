'use strict';
module.exports = function (_0x42f9d1) {
  return flat(_0x42f9d1, []);
};
function flat(_0x5e3a96, _0x1cb0ab) {
  var _0x2684a9 = 0;
  var _0x4df5e4;
  var _0x3184c4 = _0x5e3a96.length;
  for (; _0x2684a9 < _0x5e3a96.length; _0x2684a9++) {
    _0x4df5e4 = _0x5e3a96[_0x2684a9];
    Array.isArray(_0x4df5e4) ? flat(_0x4df5e4, _0x1cb0ab) : _0x1cb0ab.push(_0x4df5e4);
  }
  return _0x1cb0ab;
}