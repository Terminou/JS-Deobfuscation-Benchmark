'use strict';

module.exports = function () {
  function _0x5e2790(_0x52f18c) {
    var _0xe69bb = String(_0x52f18c).replace(/[\s]/g, "");
    var _0x14e2b9 = _0xe69bb.length;
    var _0x365005 = false;
    var _0x2880e8 = 0;
    var _0x4bb4d2;
    var _0x51bb51;
    if (!/^[0-9]+$/.test(_0xe69bb)) {
      return false;
    }
    for (var _0x38da42 = _0x14e2b9; _0x38da42 > 0; _0x38da42--) {
      _0x4bb4d2 = parseInt(_0xe69bb.charAt(_0x38da42 - 1));
      if (!_0x365005) {
        _0x2880e8 += _0x4bb4d2;
      } else {
        _0x51bb51 = _0x4bb4d2 * 2;
        switch (_0x51bb51) {
          case 10:
            _0x51bb51 = 1;
            break;
          case 12:
            _0x51bb51 = 3;
            break;
          case 14:
            _0x51bb51 = 5;
            break;
          case 16:
            _0x51bb51 = 7;
            break;
          case 18:
            _0x51bb51 = 9;
            break;
          default:
            _0x51bb51 = _0x51bb51;
        }
        _0x2880e8 += _0x51bb51;
      }
      _0x365005 = !_0x365005;
    }
    return _0x2880e8 !== 0 && _0x2880e8 % 10 === 0;
  }
  var _0x34fc4c = {
    validate: _0x5e2790
  };
  return _0x34fc4c;
}();