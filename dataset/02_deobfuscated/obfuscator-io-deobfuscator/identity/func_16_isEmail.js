'use strict';

var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
exports.validate = function (_0x2af7b8) {
  if (!_0x2af7b8) {
    return false;
  }
  if (_0x2af7b8.length > 0xfe) {
    return false;
  }
  var _0x45812a = tester.test(_0x2af7b8);
  if (!_0x45812a) {
    return false;
  }
  var _0x8c9d17 = _0x2af7b8.split('@');
  if (_0x8c9d17[0x0].length > 0x40) {
    return false;
  }
  var _0x3da0cb = _0x8c9d17[0x1].split('.');
  if (_0x3da0cb.some(function (_0x549920) {
    return _0x549920.length > 0x3f;
  })) {
    return false;
  }
  return true;
};