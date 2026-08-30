'use strict';

module.exports = function () {
  function _0x450dbc(_0x4d71b5) {
    var _0xeb0d = String(_0x4d71b5).replace(/[\s]/g, "");
    var _0x4faa46 = _0xeb0d.length;
    var _0x179b33 = false;
    var _0x47c71d = 0;
    var _0x59d672;
    var _0x58934a;
    if (!/^[0-9]+$/.test(_0xeb0d)) {
      return false;
    }
    for (var _0x5e3fd2 = _0x4faa46; _0x5e3fd2 > 0; _0x5e3fd2--) {
      _0x59d672 = parseInt(_0xeb0d.charAt(_0x5e3fd2 - 1));
      if (!_0x179b33) {
        _0x47c71d += _0x59d672;
      } else {
        _0x58934a = _0x59d672 * 2;
        switch (_0x58934a) {
          case 10:
            _0x58934a = 1;
            break;
          case 12:
            _0x58934a = 3;
            break;
          case 14:
            _0x58934a = 5;
            break;
          case 16:
            _0x58934a = 7;
            break;
          case 18:
            _0x58934a = 9;
            break;
          default:
            _0x58934a = _0x58934a;
        }
        _0x47c71d += _0x58934a;
      }
      _0x179b33 = !_0x179b33;
    }
    return _0x47c71d !== 0 && _0x47c71d % 10 === 0;
  }
  return {
    validate: _0x450dbc
  };
}();