;
(function (_0x475619) {
  'use strict';

  function _0x16ea51(_0x5293a9, _0xb33d49) {
    if (_0x5293a9 instanceof Boolean || typeof _0x5293a9 === "boolean") {
      return false;
    }
    if (!(_0xb33d49 instanceof Object)) {
      _0xb33d49 = {};
    }
    if (_0xb33d49.allowEmpty === false && _0x5293a9 === "") {
      return false;
    }
    var _0x1160b8 = "(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?";
    var _0x7de212 = "(data:\\w+\\/[a-zA-Z\\+\\-\\.]+;base64,)";
    if (_0xb33d49.mimeRequired === true) {
      _0x1160b8 = _0x7de212 + _0x1160b8;
    } else if (_0xb33d49.allowMime === true) {
      _0x1160b8 = _0x7de212 + "?" + _0x1160b8;
    }
    if (_0xb33d49.paddingRequired === false) {
      _0x1160b8 = "(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}(==)?|[A-Za-z0-9+\\/]{3}=?)?";
    }
    return new RegExp("^" + _0x1160b8 + "$", "gi").test(_0x5293a9);
  }
  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = _0x16ea51;
    }
    exports.isBase64 = _0x16ea51;
  } else if (typeof define === "function" && define.amd) {
    define([], function () {
      return _0x16ea51;
    });
  } else {
    _0x475619.isBase64 = _0x16ea51;
  }
})(this);