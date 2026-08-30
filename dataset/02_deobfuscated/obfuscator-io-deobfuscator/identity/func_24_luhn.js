'use strict';

module.exports = function () {
  function _0x450dbc(_0x4d71b5) {
    var _0xeb0d = String(_0x4d71b5).replace(/[\s]/g, '');
    var _0x4faa46 = _0xeb0d.length;
    var _0x179b33 = false;
    var _0x47c71d = 0x0;
    var _0x59d672;
    var _0x58934a;
    if (!/^[0-9]+$/.test(_0xeb0d)) {
      return false;
    }
    for (var _0x5e3fd2 = _0x4faa46; _0x5e3fd2 > 0x0; _0x5e3fd2--) {
      _0x59d672 = parseInt(_0xeb0d.charAt(_0x5e3fd2 - 0x1));
      if (!_0x179b33) {
        _0x47c71d += _0x59d672;
      } else {
        _0x58934a = _0x59d672 * 0x2;
        switch (_0x58934a) {
          case 0xa:
            _0x58934a = 0x1;
            break;
          case 0xc:
            _0x58934a = 0x3;
            break;
          case 0xe:
            _0x58934a = 0x5;
            break;
          case 0x10:
            _0x58934a = 0x7;
            break;
          case 0x12:
            _0x58934a = 0x9;
            break;
          default:
            _0x58934a = _0x58934a;
        }
        _0x47c71d += _0x58934a;
      }
      _0x179b33 = !_0x179b33;
    }
    return _0x47c71d !== 0x0 && _0x47c71d % 0xa === 0x0;
  }
  return {
    'validate': _0x450dbc
  };
}();