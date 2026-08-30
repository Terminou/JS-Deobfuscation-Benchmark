'use strict';

module.exports = function () {
  function _0x14e2b9(_0x297326) {
    var _0x1af003 = String(_0x297326).replace(/[\s]/g, "");
    var _0x23a1cf = _0x1af003.length;
    var _0xc8d48f = false;
    var _0x426fe3 = 0;
    var _0x1b605d;
    var _0x59d164;
    if (!/^[0-9]+$/.test(_0x1af003)) {
      return false;
    }
    for (var _0x50d6b1 = _0x23a1cf; _0x50d6b1 > 0; _0x50d6b1--) {
      _0x1b605d = parseInt(_0x1af003.charAt(_0x50d6b1 - 1));
      if (!_0xc8d48f) {
        _0x426fe3 += _0x1b605d;
      } else {
        _0x59d164 = _0x1b605d * 2;
        switch (_0x59d164) {
          case 10:
            _0x59d164 = 1;
            break;
          case 12:
            _0x59d164 = 3;
            break;
          case 14:
            _0x59d164 = 5;
            break;
          case 16:
            _0x59d164 = 7;
            break;
          case 18:
            _0x59d164 = 9;
            break;
          default:
            _0x59d164 = _0x59d164;
        }
        _0x426fe3 += _0x59d164;
      }
      _0xc8d48f = !_0xc8d48f;
    }
    return _0x426fe3 !== 0 && _0x426fe3 % 10 === 0;
  }
  var _0x365005 = {
    validate: _0x14e2b9
  };
  return _0x365005;
}();