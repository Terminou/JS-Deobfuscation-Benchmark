'use strict';

var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
exports.validate = function (_0x21e4da) {
  if (!_0x21e4da) {
    return false;
  }
  if (_0x21e4da.length > 254) {
    return false;
  }
  var _0x3c5b32 = tester.test(_0x21e4da);
  if (!_0x3c5b32) {
    return false;
  }
  var _0x2855e3 = _0x21e4da.split("@");
  if (_0x2855e3[0].length > 64) {
    return false;
  }
  var _0x2ffb80 = _0x2855e3[1].split(".");
  if (_0x2ffb80.some(function (_0x5307f6) {
    return _0x5307f6.length > 63;
  })) {
    return false;
  }
  return true;
};