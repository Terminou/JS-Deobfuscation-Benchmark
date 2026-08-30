'use strict';
function _0x6db4() {
  return [
    '14792157wFoPvT',
    '62509480AOrZim',
    '1060413ErvnvP',
    '381705CPVLdW',
    '1065677hMLdwS',
    'length',
    'exports',
    '8CoqFuw',
    '2338176uuEDPV',
    '72BTzyTo',
    'isArray',
    'slice',
    '96047qRDtXZ',
    '10EhcEIP',
    'push',
    '392sWSEuM'
  ];
}
function _0x4b30(_0x4379c5, _0x7224d1) {
  _0x4379c5 = _0x4379c5 - 435;
  var _0x6db401 = [
    '14792157wFoPvT',
    '62509480AOrZim',
    '1060413ErvnvP',
    '381705CPVLdW',
    '1065677hMLdwS',
    'length',
    'exports',
    '8CoqFuw',
    '2338176uuEDPV',
    '72BTzyTo',
    'isArray',
    'slice',
    '96047qRDtXZ',
    '10EhcEIP',
    'push',
    '392sWSEuM'
  ];
  var _0x4b30f8 = _0x6db401[_0x4379c5];
  return _0x6db401[_0x4379c5];
}
module.exports = function diff(_0x1b2c75) {
  var _0x5efd76 = arguments.length;
  var _0x2bada8 = 0;
  while (++_0x2bada8 < arguments.length) {
    _0x1b2c75 = diffArray(_0x1b2c75, arguments[_0x2bada8]);
  }
  return _0x1b2c75;
};
function diffArray(_0x58a8b7, _0x112261) {
  if (!Array.isArray(_0x112261))
    return _0x58a8b7.slice();
  var _0x537605 = _0x112261.length;
  var _0x339796 = _0x58a8b7.length;
  var _0x498a86 = -1;
  var _0x428d1b = [];
  while (++_0x498a86 < _0x58a8b7.length) {
    var _0x1fd8b7 = _0x58a8b7[_0x498a86];
    var _0x57a6f7 = false;
    for (var _0x49dfb4 = 0; _0x49dfb4 < _0x112261.length; _0x49dfb4++) {
      var _0x322781 = _0x112261[_0x49dfb4];
      if (_0x58a8b7[_0x498a86] === _0x112261[_0x49dfb4]) {
        _0x57a6f7 = true;
        break;
      }
    }
    if (_0x57a6f7 === false) {
      _0x428d1b.push(_0x58a8b7[_0x498a86]);
    }
  }
  return _0x428d1b;
}