(function (_0x4efd8f) {
  'use strict';

  function _0x3e4995(_0x3d1a81, _0x865c26) {
    for (var _0x30b54d in _0x865c26) {
      if (_0x865c26.hasOwnProperty(_0x30b54d)) {
        _0x3d1a81[_0x30b54d] = _0x865c26[_0x30b54d];
      }
    }
    return _0x3d1a81;
  }
  function _0x93b7fe(_0x1c8325, _0x36e91b, _0x30cca1) {
    var _0x17b0aa = 0;
    var _0xda5110 = {
      caseSensitive: true
    };
    var _0xadda9e = _0x3e4995(_0xda5110, _0x30cca1);
    var _0x25b776;
    var _0x529ffe;
    if (_0x1c8325.length === 0 || _0x36e91b.length === 0) {
      return 0;
    }
    if (!_0xadda9e.caseSensitive) {
      _0x1c8325 = _0x1c8325.toUpperCase();
      _0x36e91b = _0x36e91b.toUpperCase();
    }
    if (_0x1c8325 === _0x36e91b) {
      return 1;
    }
    var _0x97f902 = Math.floor(Math.max(_0x1c8325.length, _0x36e91b.length) / 2) - 1;
    var _0x192ba9 = new Array(_0x1c8325.length);
    var _0x5a7727 = new Array(_0x36e91b.length);
    for (_0x25b776 = 0; _0x25b776 < _0x1c8325.length; _0x25b776++) {
      var _0xf3a5c5 = _0x25b776 >= _0x97f902 ? _0x25b776 - _0x97f902 : 0;
      var _0x58314e = _0x25b776 + _0x97f902 <= _0x36e91b.length - 1 ? _0x25b776 + _0x97f902 : _0x36e91b.length - 1;
      for (_0x529ffe = _0xf3a5c5; _0x529ffe <= _0x58314e; _0x529ffe++) {
        if (_0x192ba9[_0x25b776] !== true && _0x5a7727[_0x529ffe] !== true && _0x1c8325[_0x25b776] === _0x36e91b[_0x529ffe]) {
          ++_0x17b0aa;
          _0x192ba9[_0x25b776] = _0x5a7727[_0x529ffe] = true;
          break;
        }
      }
    }
    if (_0x17b0aa === 0) {
      return 0;
    }
    var _0x593a2a = 0;
    var _0x2b5e71 = 0;
    for (_0x25b776 = 0; _0x25b776 < _0x1c8325.length; _0x25b776++) {
      if (_0x192ba9[_0x25b776] === true) {
        for (_0x529ffe = _0x593a2a; _0x529ffe < _0x36e91b.length; _0x529ffe++) {
          if (_0x5a7727[_0x529ffe] === true) {
            _0x593a2a = _0x529ffe + 1;
            break;
          }
        }
        if (_0x1c8325[_0x25b776] !== _0x36e91b[_0x529ffe]) {
          ++_0x2b5e71;
        }
      }
    }
    var _0x48c8c9 = (_0x17b0aa / _0x1c8325.length + _0x17b0aa / _0x36e91b.length + (_0x17b0aa - _0x2b5e71 / 2) / _0x17b0aa) / 3;
    var _0x191177 = 0;
    var _0x48eff0 = 0.1;
    if (_0x48c8c9 > 0.7) {
      while (_0x1c8325[_0x191177] === _0x36e91b[_0x191177] && _0x191177 < 4) {
        ++_0x191177;
      }
      _0x48c8c9 = _0x48c8c9 + _0x191177 * _0x48eff0 * (1 - _0x48c8c9);
    }
    return _0x48c8c9;
  }
  if (typeof define === "function" && define.amd) {
    define([], function () {
      return _0x93b7fe;
    });
  } else if (typeof exports === "object") {
    module.exports = _0x93b7fe;
  } else {
    _0x4efd8f.distance = _0x93b7fe;
  }
})(this);