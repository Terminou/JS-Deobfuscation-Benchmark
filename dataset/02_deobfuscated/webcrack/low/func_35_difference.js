'use strict';

module.exports = function diff(_0x1b2c75) {
  var _0x5efd76 = arguments.length;
  var _0x2bada8 = 0;
  while (++_0x2bada8 < _0x5efd76) {
    _0x1b2c75 = diffArray(_0x1b2c75, arguments[_0x2bada8]);
  }
  return _0x1b2c75;
};
function diffArray(_0x58a8b7, _0x112261) {
  if (!Array.isArray(_0x112261)) {
    return _0x58a8b7.slice();
  }
  var _0x537605 = _0x112261.length;
  var _0x339796 = _0x58a8b7.length;
  var _0x498a86 = -1;
  var _0x428d1b = [];
  while (++_0x498a86 < _0x339796) {
    var _0x1fd8b7 = _0x58a8b7[_0x498a86];
    var _0x57a6f7 = false;
    for (var _0x49dfb4 = 0; _0x49dfb4 < _0x537605; _0x49dfb4++) {
      var _0x322781 = _0x112261[_0x49dfb4];
      if (_0x1fd8b7 === _0x322781) {
        _0x57a6f7 = true;
        break;
      }
    }
    if (_0x57a6f7 === false) {
      _0x428d1b.push(_0x1fd8b7);
    }
  }
  return _0x428d1b;
}