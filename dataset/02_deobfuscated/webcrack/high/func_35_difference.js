'use strict';

module.exports = function diff(_0x14e901) {
  var _0x1c8564 = arguments.length;
  var _0x388208 = 0;
  while (++_0x388208 < _0x1c8564) {
    _0x14e901 = diffArray(_0x14e901, arguments[_0x388208]);
  }
  return _0x14e901;
};
function diffArray(_0x3088eb, _0x420633) {
  if (!Array.isArray(_0x420633)) {
    return _0x3088eb.slice();
  }
  var _0xe09c72 = _0x420633.length;
  var _0x166ef1 = _0x3088eb.length;
  var _0x2c184f = -1;
  var _0x3b1624 = [];
  while (++_0x2c184f < _0x166ef1) {
    var _0x17bd98 = _0x3088eb[_0x2c184f];
    var _0x12ff79 = false;
    for (var _0xd36c9c = 0; _0xd36c9c < _0xe09c72; _0xd36c9c++) {
      var _0x42dfcd = _0x420633[_0xd36c9c];
      if (_0x17bd98 === _0x42dfcd) {
        _0x12ff79 = true;
        break;
      }
    }
    if (_0x12ff79 === false) {
      _0x3b1624.push(_0x17bd98);
    }
  }
  return _0x3b1624;
}