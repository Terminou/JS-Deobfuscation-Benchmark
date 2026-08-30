'use strict';

module.exports = function () {
  function _0x4d9636(_0x3f2928) {
    var _0x4d55f3 = String(_0x3f2928).replace(/[\s]/g, "");
    var _0xdbcf3b = _0x4d55f3.length;
    var _0x1d1608 = false;
    var _0x5dacca = 0;
    var _0x277a8;
    var _0x14434c;
    if (!/^[0-9]+$/.test(_0x4d55f3)) {
      return false;
    }
    for (var _0x2dddbb = _0xdbcf3b; _0x2dddbb > 0; _0x2dddbb--) {
      _0x277a8 = parseInt(_0x4d55f3.charAt(_0x2dddbb - 1));
      if (!_0x1d1608) {
        _0x5dacca += _0x277a8;
      } else {
        _0x14434c = _0x277a8 * 2;
        switch (_0x14434c) {
          case 10:
            _0x14434c = 1;
            break;
          case 12:
            _0x14434c = 3;
            break;
          case 14:
            _0x14434c = 5;
            break;
          case 16:
            _0x14434c = 7;
            break;
          case 18:
            _0x14434c = 9;
            break;
          default:
            _0x14434c = _0x14434c;
        }
        _0x5dacca += _0x14434c;
      }
      _0x1d1608 = !_0x1d1608;
    }
    return _0x5dacca !== 0 && _0x5dacca % 10 === 0;
  }
  return {
    validate: _0x4d9636
  };
}();