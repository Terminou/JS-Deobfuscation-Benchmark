'use strict';
function _0x2076() {
  return [
    'stringify',
    'prototype',
    '162005bMxryp',
    '43InnNHc',
    '5498003noyleU',
    '10952320UgVxIj',
    'exec',
    '5722264Rbfjys',
    '111SszlJr',
    'call',
    '186TnuXcg',
    '10885401GydnbW',
    'replace',
    '35046zCsOLr',
    '25216mRiEwq'
  ];
}
var has = Object.prototype.hasOwnProperty;
var undef;
function decode(_0x3b7d77) {
  try {
    return decodeURIComponent(_0x3b7d77.replace(/\+/g, ' '));
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
  while (_0x142ed4 = /([^=?#&]+)=?([^&]*)/g.exec(_0x5a9a62)) {
    var _0x5b9d1b = decode(_0x142ed4[1]);
    var _0x5de11e = decode(_0x142ed4[2]);
    if (_0x5b9d1b === null || _0x5de11e === null || _0x5b9d1b in _0x39f152)
      continue;
    _0x39f152[_0x5b9d1b] = _0x5de11e;
  }
  return _0x39f152;
}
function querystringify(_0x17b5c8, _0x2d1cb4) {
  _0x2d1cb4 = _0x2d1cb4 || '';
  var _0x5a4b74 = [];
  var _0x40d1d5;
  var _0x22a27f;
  if ('string' !== typeof _0x2d1cb4)
    _0x2d1cb4 = '?';
  for (_0x22a27f in _0x17b5c8) {
    if (Object.prototype.hasOwnProperty.call(_0x17b5c8, _0x22a27f)) {
      _0x40d1d5 = _0x17b5c8[_0x22a27f];
      if (!_0x40d1d5 && (_0x40d1d5 === null || _0x40d1d5 === undef || isNaN(_0x40d1d5))) {
        _0x40d1d5 = '';
      }
      _0x22a27f = encode(_0x22a27f);
      _0x40d1d5 = encode(_0x40d1d5);
      if (_0x22a27f === null || _0x40d1d5 === null)
        continue;
      _0x5a4b74.push(_0x22a27f + '=' + _0x40d1d5);
    }
  }
  return _0x5a4b74.length ? _0x2d1cb4 + _0x5a4b74.join('&') : '';
}
function _0x4ff2(_0x4a5b41, _0xa29ef1) {
  _0x4a5b41 = _0x4a5b41 - 151;
  var _0x2076cb = [
    'stringify',
    'prototype',
    '162005bMxryp',
    '43InnNHc',
    '5498003noyleU',
    '10952320UgVxIj',
    'exec',
    '5722264Rbfjys',
    '111SszlJr',
    'call',
    '186TnuXcg',
    '10885401GydnbW',
    'replace',
    '35046zCsOLr',
    '25216mRiEwq'
  ];
  var _0x4ff27d = _0x2076cb[_0x4a5b41];
  return _0x2076cb[_0x4a5b41];
}
exports.stringify = querystringify;
exports.parse = querystring;