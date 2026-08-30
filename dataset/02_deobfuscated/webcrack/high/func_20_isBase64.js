;
(function (_0x1da606) {
  'use strict';

  function _0x5d0b0f(_0x3b8765, _0x33e256) {
    if (_0x3b8765 instanceof Boolean || typeof _0x3b8765 === "boolean") {
      return false;
    }
    if (!(_0x33e256 instanceof Object)) {
      _0x33e256 = {};
    }
    if (_0x33e256.allowEmpty === false && _0x3b8765 === "") {
      return false;
    }
    var _0x55b76b = "(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?";
    var _0x4f6b0f = "(data:\\w+\\/[a-zA-Z\\+\\-\\.]+;base64,)";
    if (_0x33e256.mimeRequired === true) {
      _0x55b76b = _0x4f6b0f + _0x55b76b;
    } else if (_0x33e256.allowMime === true) {
      _0x55b76b = _0x4f6b0f + "?" + _0x55b76b;
    }
    if (_0x33e256.paddingRequired === false) {
      _0x55b76b = "(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}(==)?|[A-Za-z0-9+\\/]{3}=?)?";
    }
    return new RegExp("^" + _0x55b76b + "$", "gi").test(_0x3b8765);
  }
  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = _0x5d0b0f;
    }
    exports.isBase64 = _0x5d0b0f;
  } else if (typeof define === "function" && define.amd) {
    define([], function () {
      return _0x5d0b0f;
    });
  } else {
    _0x1da606.isBase64 = _0x5d0b0f;
  }
})(this);