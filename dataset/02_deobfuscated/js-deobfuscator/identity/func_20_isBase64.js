;
(function (_0xa1581f) {
  "use strict";
  function _0x476b70(_0xc99a36, _0x13cc00) {
    if (_0xc99a36 instanceof Boolean || typeof _0xc99a36 === "boolean") {
      return false;
    }
    if (!(_0x13cc00 instanceof Object)) {
      _0x13cc00 = {};
    }
    if (_0x13cc00.allowEmpty === false && _0xc99a36 === "") {
      return false;
    }
    var _0x13a1a3 = "(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?";
    var _0x32273e = "(data:\\w+\\/[a-zA-Z\\+\\-\\.]+;base64,)";
    if (_0x13cc00.mimeRequired === true) {
      _0x13a1a3 = _0x32273e + _0x13a1a3;
    } else if (_0x13cc00.allowMime === true) {
      _0x13a1a3 = _0x32273e + "?" + _0x13a1a3;
    }
    if (_0x13cc00.paddingRequired === false) {
      _0x13a1a3 = "(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}(==)?|[A-Za-z0-9+\\/]{3}=?)?";
    }
    return new RegExp("^" + _0x13a1a3 + "$", "gi").test(_0xc99a36);
  }
  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = _0x476b70;
    }
    exports.isBase64 = _0x476b70;
  } else if (typeof define === "function" && define.amd) {
    define([], function () {
      return _0x476b70;
    });
  } else {
    _0xa1581f.isBase64 = _0x476b70;
  }
}(this));
