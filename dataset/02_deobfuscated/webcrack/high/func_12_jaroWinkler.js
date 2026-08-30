(function (_0x363cd7) {
  'use strict';

  function _0x1ab0ce(_0xa08bb2, _0x5b9cb0) {
    for (var _0x8fa663 in _0x5b9cb0) {
      if (_0x5b9cb0.hasOwnProperty(_0x8fa663)) {
        _0xa08bb2[_0x8fa663] = _0x5b9cb0[_0x8fa663];
      }
    }
    return _0xa08bb2;
  }
  function _0x4aa2f9(_0x45f9c1, _0x15408d, _0x4bcc08) {
    var _0x459c8d = 0;
    var _0x12465e = {
      caseSensitive: true
    };
    var _0xb54aac = _0x1ab0ce(_0x12465e, _0x4bcc08);
    var _0x3ed808;
    var _0x181827;
    if (_0x45f9c1.length === 0 || _0x15408d.length === 0) {
      return 0;
    }
    if (!_0xb54aac.caseSensitive) {
      _0x45f9c1 = _0x45f9c1.toUpperCase();
      _0x15408d = _0x15408d.toUpperCase();
    }
    if (_0x45f9c1 === _0x15408d) {
      return 1;
    }
    var _0xe3ab9e = Math.floor(Math.max(_0x45f9c1.length, _0x15408d.length) / 2) - 1;
    var _0x41abb6 = new Array(_0x45f9c1.length);
    var _0x3e8dc5 = new Array(_0x15408d.length);
    for (_0x3ed808 = 0; _0x3ed808 < _0x45f9c1.length; _0x3ed808++) {
      var _0x6c1902 = _0x3ed808 >= _0xe3ab9e ? _0x3ed808 - _0xe3ab9e : 0;
      var _0x5542c8 = _0x3ed808 + _0xe3ab9e <= _0x15408d.length - 1 ? _0x3ed808 + _0xe3ab9e : _0x15408d.length - 1;
      for (_0x181827 = _0x6c1902; _0x181827 <= _0x5542c8; _0x181827++) {
        if (_0x41abb6[_0x3ed808] !== true && _0x3e8dc5[_0x181827] !== true && _0x45f9c1[_0x3ed808] === _0x15408d[_0x181827]) {
          ++_0x459c8d;
          _0x41abb6[_0x3ed808] = _0x3e8dc5[_0x181827] = true;
          break;
        }
      }
    }
    if (_0x459c8d === 0) {
      return 0;
    }
    var _0x11f25a = 0;
    var _0x908fff = 0;
    for (_0x3ed808 = 0; _0x3ed808 < _0x45f9c1.length; _0x3ed808++) {
      if (_0x41abb6[_0x3ed808] === true) {
        for (_0x181827 = _0x11f25a; _0x181827 < _0x15408d.length; _0x181827++) {
          if (_0x3e8dc5[_0x181827] === true) {
            _0x11f25a = _0x181827 + 1;
            break;
          }
        }
        if (_0x45f9c1[_0x3ed808] !== _0x15408d[_0x181827]) {
          ++_0x908fff;
        }
      }
    }
    var _0x3f7bfc = (_0x459c8d / _0x45f9c1.length + _0x459c8d / _0x15408d.length + (_0x459c8d - _0x908fff / 2) / _0x459c8d) / 3;
    var _0x27eebb = 0;
    var _0x1466c5 = 0.1;
    if (_0x3f7bfc > 0.7) {
      while (_0x45f9c1[_0x27eebb] === _0x15408d[_0x27eebb] && _0x27eebb < 4) {
        ++_0x27eebb;
      }
      _0x3f7bfc = _0x3f7bfc + _0x27eebb * _0x1466c5 * (1 - _0x3f7bfc);
    }
    return _0x3f7bfc;
  }
  if (typeof define === "function" && define.amd) {
    define([], function () {
      return _0x4aa2f9;
    });
  } else if (typeof exports === "object") {
    module.exports = _0x4aa2f9;
  } else {
    _0x363cd7.distance = _0x4aa2f9;
  }
})(this);