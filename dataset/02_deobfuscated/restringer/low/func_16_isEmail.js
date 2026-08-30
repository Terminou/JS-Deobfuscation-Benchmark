'use strict';
function _0x8c9d() {
  return [
    '23090ijYyUc',
    'some',
    '240WCjBzb',
    'length',
    'test',
    '540668DUvyOT',
    '80932wFJcgo',
    '45Thrsyl',
    'split',
    '762KzIWHR',
    '7553rKrphQ',
    '3658853bSAkxm',
    '4194MTpCnm',
    '208Ppbmpn',
    '12SHeshV',
    '3170JMoZAp'
  ];
}
function _0x3da0(_0x2af7b8, _0x45812a) {
  _0x2af7b8 = _0x2af7b8 - 453;
  var _0x8c9d17 = [
    '23090ijYyUc',
    'some',
    '240WCjBzb',
    'length',
    'test',
    '540668DUvyOT',
    '80932wFJcgo',
    '45Thrsyl',
    'split',
    '762KzIWHR',
    '7553rKrphQ',
    '3658853bSAkxm',
    '4194MTpCnm',
    '208Ppbmpn',
    '12SHeshV',
    '3170JMoZAp'
  ];
  var _0x3da0cb = _0x8c9d17[_0x2af7b8];
  return _0x8c9d17[_0x2af7b8];
}
var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
exports.validate = function (_0x21e4da) {
  if (!_0x21e4da)
    return false;
  if (_0x21e4da.length > 254)
    return false;
  var _0x3c5b32 = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/.test(_0x21e4da);
  if (!_0x3c5b32)
    return false;
  var _0x2855e3 = _0x21e4da.split('@');
  if (_0x2855e3[0].length > 64)
    return false;
  var _0x2ffb80 = _0x2855e3[1].split('.');
  if (_0x2ffb80.some(function (_0x5307f6) {
      return _0x5307f6.length > 63;
    }))
    return false;
  return true;
};