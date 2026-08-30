'use strict';
var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
exports.validate = function (_0x2af7b8) {
  if (!_0x2af7b8)
    return false;
  if (_0x2af7b8.length > 254)
    return false;
  var _0x45812a = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/.test(_0x2af7b8);
  if (!_0x45812a)
    return false;
  var _0x8c9d17 = _0x2af7b8.split('@');
  if (_0x8c9d17[0].length > 64)
    return false;
  var _0x3da0cb = _0x8c9d17[1].split('.');
  if (_0x3da0cb.some(function (_0x549920) {
      return _0x549920.length > 63;
    }))
    return false;
  return true;
};