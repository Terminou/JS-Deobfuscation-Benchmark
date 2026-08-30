;
(function (_0x103b1f) {
  'use strict';

  function _0x45111c(_0x4b63a0, _0x3bf1b8) {
    if (_0x4b63a0 instanceof Boolean || typeof _0x4b63a0 === "boolean") {
      return false;
    }
    if (!(_0x3bf1b8 instanceof Object)) {
      _0x3bf1b8 = {};
    }
    if (_0x3bf1b8.allowEmpty === false && _0x4b63a0 === "") {
      return false;
    }
    var _0x282e6d = "(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?";
    var _0x5143b9 = "(data:\\w+\\/[a-zA-Z\\+\\-\\.]+;base64,)";
    if (_0x3bf1b8.mimeRequired === true) {
      _0x282e6d = _0x5143b9 + _0x282e6d;
    } else if (_0x3bf1b8.allowMime === true) {
      _0x282e6d = _0x5143b9 + "?" + _0x282e6d;
    }
    if (_0x3bf1b8.paddingRequired === false) {
      _0x282e6d = "(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}(==)?|[A-Za-z0-9+\\/]{3}=?)?";
    }
    return new RegExp("^" + _0x282e6d + "$", "gi").test(_0x4b63a0);
  }
  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = _0x45111c;
    }
    exports.isBase64 = _0x45111c;
  } else if (typeof define === "function" && define.amd) {
    define([], function () {
      return _0x45111c;
    });
  } else {
    _0x103b1f.isBase64 = _0x45111c;
  }
})(this);