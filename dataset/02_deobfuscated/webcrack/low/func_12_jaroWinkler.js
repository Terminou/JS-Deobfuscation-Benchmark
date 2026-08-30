(function (_0x4c1120) {
  'use strict';

  function _0x8e19aa(_0x3fb6bf, _0x2ca33e) {
    for (var _0x457500 in _0x2ca33e) {
      if (_0x2ca33e.hasOwnProperty(_0x457500)) {
        _0x3fb6bf[_0x457500] = _0x2ca33e[_0x457500];
      }
    }
    return _0x3fb6bf;
  }
  function _0x46ba19(_0x5ec536, _0x5a892c, _0x508cba) {
    var _0x55a76c = 0;
    var _0x3fbd2e = {
      caseSensitive: true
    };
    var _0x39d6e5 = _0x8e19aa(_0x3fbd2e, _0x508cba);
    var _0x58b385;
    var _0x12098c;
    if (_0x5ec536.length === 0 || _0x5a892c.length === 0) {
      return 0;
    }
    if (!_0x39d6e5.caseSensitive) {
      _0x5ec536 = _0x5ec536.toUpperCase();
      _0x5a892c = _0x5a892c.toUpperCase();
    }
    if (_0x5ec536 === _0x5a892c) {
      return 1;
    }
    var _0x50cbc3 = Math.floor(Math.max(_0x5ec536.length, _0x5a892c.length) / 2) - 1;
    var _0x16449f = new Array(_0x5ec536.length);
    var _0xa9812e = new Array(_0x5a892c.length);
    for (_0x58b385 = 0; _0x58b385 < _0x5ec536.length; _0x58b385++) {
      var _0x30da24 = _0x58b385 >= _0x50cbc3 ? _0x58b385 - _0x50cbc3 : 0;
      var _0x5b9210 = _0x58b385 + _0x50cbc3 <= _0x5a892c.length - 1 ? _0x58b385 + _0x50cbc3 : _0x5a892c.length - 1;
      for (_0x12098c = _0x30da24; _0x12098c <= _0x5b9210; _0x12098c++) {
        if (_0x16449f[_0x58b385] !== true && _0xa9812e[_0x12098c] !== true && _0x5ec536[_0x58b385] === _0x5a892c[_0x12098c]) {
          ++_0x55a76c;
          _0x16449f[_0x58b385] = _0xa9812e[_0x12098c] = true;
          break;
        }
      }
    }
    if (_0x55a76c === 0) {
      return 0;
    }
    var _0x49b2e6 = 0;
    var _0x596fa3 = 0;
    for (_0x58b385 = 0; _0x58b385 < _0x5ec536.length; _0x58b385++) {
      if (_0x16449f[_0x58b385] === true) {
        for (_0x12098c = _0x49b2e6; _0x12098c < _0x5a892c.length; _0x12098c++) {
          if (_0xa9812e[_0x12098c] === true) {
            _0x49b2e6 = _0x12098c + 1;
            break;
          }
        }
        if (_0x5ec536[_0x58b385] !== _0x5a892c[_0x12098c]) {
          ++_0x596fa3;
        }
      }
    }
    var _0xb96fe4 = (_0x55a76c / _0x5ec536.length + _0x55a76c / _0x5a892c.length + (_0x55a76c - _0x596fa3 / 2) / _0x55a76c) / 3;
    var _0x3ac099 = 0;
    var _0x295e0d = 0.1;
    if (_0xb96fe4 > 0.7) {
      while (_0x5ec536[_0x3ac099] === _0x5a892c[_0x3ac099] && _0x3ac099 < 4) {
        ++_0x3ac099;
      }
      _0xb96fe4 = _0xb96fe4 + _0x3ac099 * _0x295e0d * (1 - _0xb96fe4);
    }
    return _0xb96fe4;
  }
  if (typeof define === "function" && define.amd) {
    define([], function () {
      return _0x46ba19;
    });
  } else if (typeof exports === "object") {
    module.exports = _0x46ba19;
  } else {
    _0x4c1120.distance = _0x46ba19;
  }
})(this);