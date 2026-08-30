'use strict';

var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
exports.validate = function (_0x430781) {
  if (!_0x430781) {
    return false;
  }
  if (_0x430781.length > 254) {
    return false;
  }
  var _0x3a46c9 = tester.test(_0x430781);
  if (!_0x3a46c9) {
    return false;
  }
  var _0x5bfcf4 = _0x430781.split("@");
  if (_0x5bfcf4[0].length > 64) {
    return false;
  }
  var _0x51ae08 = _0x5bfcf4[1].split(".");
  if (_0x51ae08.some(function (_0x5b976c) {
    return _0x5b976c.length > 63;
  })) {
    return false;
  }
  return true;
};