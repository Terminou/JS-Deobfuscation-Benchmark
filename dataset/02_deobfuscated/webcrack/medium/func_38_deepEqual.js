'use strict';

module.exports = function equal(_0x3f5f41, _0x430ed4) {
  if (_0x3f5f41 === _0x430ed4) {
    return true;
  }
  if (_0x3f5f41 && _0x430ed4 && typeof _0x3f5f41 == "object" && typeof _0x430ed4 == "object") {
    if (_0x3f5f41.constructor !== _0x430ed4.constructor) {
      return false;
    }
    var _0x49051c;
    var _0x5587ae;
    var _0xa84c49;
    if (Array.isArray(_0x3f5f41)) {
      _0x49051c = _0x3f5f41.length;
      if (_0x49051c != _0x430ed4.length) {
        return false;
      }
      for (_0x5587ae = _0x49051c; _0x5587ae-- !== 0;) {
        if (!equal(_0x3f5f41[_0x5587ae], _0x430ed4[_0x5587ae])) {
          return false;
        }
      }
      return true;
    }
    if (_0x3f5f41.constructor === RegExp) {
      return _0x3f5f41.source === _0x430ed4.source && _0x3f5f41.flags === _0x430ed4.flags;
    }
    if (_0x3f5f41.valueOf !== Object.prototype.valueOf) {
      return _0x3f5f41.valueOf() === _0x430ed4.valueOf();
    }
    if (_0x3f5f41.toString !== Object.prototype.toString) {
      return _0x3f5f41.toString() === _0x430ed4.toString();
    }
    _0xa84c49 = Object.keys(_0x3f5f41);
    _0x49051c = _0xa84c49.length;
    if (_0x49051c !== Object.keys(_0x430ed4).length) {
      return false;
    }
    for (_0x5587ae = _0x49051c; _0x5587ae-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(_0x430ed4, _0xa84c49[_0x5587ae])) {
        return false;
      }
    }
    for (_0x5587ae = _0x49051c; _0x5587ae-- !== 0;) {
      var _0x18abda = _0xa84c49[_0x5587ae];
      if (!equal(_0x3f5f41[_0x18abda], _0x430ed4[_0x18abda])) {
        return false;
      }
    }
    return true;
  }
  return _0x3f5f41 !== _0x3f5f41 && _0x430ed4 !== _0x430ed4;
};