'use strict';

module.exports = function equal(_0x2284ec, _0x7fcbe8) {
  if (_0x2284ec === _0x7fcbe8) {
    return true;
  }
  if (_0x2284ec && _0x7fcbe8 && typeof _0x2284ec == "object" && typeof _0x7fcbe8 == "object") {
    if (_0x2284ec.constructor !== _0x7fcbe8.constructor) {
      return false;
    }
    var _0x15a4f0;
    var _0x313c81;
    var _0xf72e27;
    if (Array.isArray(_0x2284ec)) {
      _0x15a4f0 = _0x2284ec.length;
      if (_0x15a4f0 != _0x7fcbe8.length) {
        return false;
      }
      for (_0x313c81 = _0x15a4f0; _0x313c81-- !== 0;) {
        if (!equal(_0x2284ec[_0x313c81], _0x7fcbe8[_0x313c81])) {
          return false;
        }
      }
      return true;
    }
    if (_0x2284ec.constructor === RegExp) {
      return _0x2284ec.source === _0x7fcbe8.source && _0x2284ec.flags === _0x7fcbe8.flags;
    }
    if (_0x2284ec.valueOf !== Object.prototype.valueOf) {
      return _0x2284ec.valueOf() === _0x7fcbe8.valueOf();
    }
    if (_0x2284ec.toString !== Object.prototype.toString) {
      return _0x2284ec.toString() === _0x7fcbe8.toString();
    }
    _0xf72e27 = Object.keys(_0x2284ec);
    _0x15a4f0 = _0xf72e27.length;
    if (_0x15a4f0 !== Object.keys(_0x7fcbe8).length) {
      return false;
    }
    for (_0x313c81 = _0x15a4f0; _0x313c81-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(_0x7fcbe8, _0xf72e27[_0x313c81])) {
        return false;
      }
    }
    for (_0x313c81 = _0x15a4f0; _0x313c81-- !== 0;) {
      var _0x3b5efa = _0xf72e27[_0x313c81];
      if (!equal(_0x2284ec[_0x3b5efa], _0x7fcbe8[_0x3b5efa])) {
        return false;
      }
    }
    return true;
  }
  return _0x2284ec !== _0x2284ec && _0x7fcbe8 !== _0x7fcbe8;
};