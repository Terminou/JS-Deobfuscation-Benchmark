'use strict';

(function (_0x5836e2, _0x5f3eff) {
  var _0x190085 = _0x5836e2();
  while (true) {
    try {
      var _0x5db025 = -parseInt(_0x4ff2(0x9a)) / 0x1 * (-parseInt(_0x4ff2(0xa4)) / 0x2) + parseInt(_0x4ff2(0x9f)) / 0x3 * (-parseInt(_0x4ff2(0xa5)) / 0x4) + parseInt(_0x4ff2(0x99)) / 0x5 * (parseInt(_0x4ff2(0xa1)) / 0x6) + parseInt(_0x4ff2(0x9b)) / 0x7 + parseInt(_0x4ff2(0x9e)) / 0x8 + -parseInt(_0x4ff2(0xa2)) / 0x9 + -parseInt(_0x4ff2(0x9c)) / 0xa;
      if (_0x5db025 === _0x5f3eff) {
        break;
      } else {
        _0x190085.push(_0x190085.shift());
      }
    } catch (_0x3061b4) {
      _0x190085.push(_0x190085.shift());
    }
  }
})(_0x2076, 0xaff17);
function _0x2076() {
  var _0x36f805 = ['5498003noyleU', '10952320UgVxIj', 'exec', '5722264Rbfjys', '111SszlJr', 'call', '186TnuXcg', '10885401GydnbW', 'replace', '35046zCsOLr', '25216mRiEwq', 'stringify', 'prototype', '162005bMxryp', '43InnNHc'];
  _0x2076 = function () {
    return _0x36f805;
  };
  return _0x2076();
}
var has = Object[_0x4ff2(0x98)].hasOwnProperty;
var undef;
function decode(_0x3b7d77) {
  try {
    return decodeURIComponent(_0x3b7d77[_0x4ff2(0xa3)](/\+/g, " "));
  } catch (_0x17f6dc) {
    return null;
  }
}
function encode(_0x28e2b1) {
  try {
    return encodeURIComponent(_0x28e2b1);
  } catch (_0xc78e0b) {
    return null;
  }
}
function querystring(_0x5a9a62) {
  var _0x456872 = /([^=?#&]+)=?([^&]*)/g;
  var _0x39f152 = {};
  var _0x142ed4;
  while (_0x142ed4 = _0x456872[_0x4ff2(0x9d)](_0x5a9a62)) {
    var _0x5b9d1b = decode(_0x142ed4[0x1]);
    var _0x5de11e = decode(_0x142ed4[0x2]);
    if (_0x5b9d1b === null || _0x5de11e === null || _0x5b9d1b in _0x39f152) {
      continue;
    }
    _0x39f152[_0x5b9d1b] = _0x5de11e;
  }
  return _0x39f152;
}
function querystringify(_0x17b5c8, _0x2d1cb4) {
  _0x2d1cb4 = _0x2d1cb4 || '';
  var _0x5a4b74 = [];
  var _0x40d1d5;
  var _0x22a27f;
  if ('string' !== typeof _0x2d1cb4) {
    _0x2d1cb4 = '?';
  }
  for (_0x22a27f in _0x17b5c8) {
    if (has[_0x4ff2(0xa0)](_0x17b5c8, _0x22a27f)) {
      _0x40d1d5 = _0x17b5c8[_0x22a27f];
      if (!_0x40d1d5 && (_0x40d1d5 === null || _0x40d1d5 === undef || isNaN(_0x40d1d5))) {
        _0x40d1d5 = '';
      }
      _0x22a27f = encode(_0x22a27f);
      _0x40d1d5 = encode(_0x40d1d5);
      if (_0x22a27f === null || _0x40d1d5 === null) {
        continue;
      }
      _0x5a4b74.push(_0x22a27f + '=' + _0x40d1d5);
    }
  }
  return _0x5a4b74.length ? _0x2d1cb4 + _0x5a4b74.join('&') : '';
}
function _0x4ff2(_0x4a5b41, _0xa29ef1) {
  _0x4a5b41 = _0x4a5b41 - 0x97;
  var _0x2076cb = _0x2076();
  var _0x4ff27d = _0x2076cb[_0x4a5b41];
  return _0x4ff27d;
}
exports[_0x4ff2(0x97)] = querystringify;
exports.parse = querystring;