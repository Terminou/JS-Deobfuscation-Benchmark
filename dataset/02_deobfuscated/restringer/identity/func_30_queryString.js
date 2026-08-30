'use strict';
var has = Object.prototype.hasOwnProperty;
var undef;
function decode(_0x4a5b41) {
  try {
    return decodeURIComponent(_0x4a5b41.replace(/\+/g, ' '));
  } catch (_0xa29ef1) {
    return null;
  }
}
function encode(_0x2076cb) {
  try {
    return encodeURIComponent(_0x2076cb);
  } catch (_0x4ff27d) {
    return null;
  }
}
function querystring(_0x81511) {
  var _0x14a1a4 = /([^=?#&]+)=?([^&]*)/g;
  var _0x4c995d = {};
  var _0x121405;
  while (_0x121405 = /([^=?#&]+)=?([^&]*)/g.exec(_0x81511)) {
    var _0x30da57 = decode(_0x121405[1]);
    var _0x4d2a73 = decode(_0x121405[2]);
    if (_0x30da57 === null || _0x4d2a73 === null || _0x30da57 in _0x4c995d)
      continue;
    _0x4c995d[_0x30da57] = _0x4d2a73;
  }
  return _0x4c995d;
}
function querystringify(_0x3b7d77, _0x17f6dc) {
  _0x17f6dc = _0x17f6dc || '';
  var _0x28e2b1 = [];
  var _0xc78e0b;
  var _0x5a9a62;
  if ('string' !== typeof _0x17f6dc)
    _0x17f6dc = '?';
  for (_0x5a9a62 in _0x3b7d77) {
    if (Object.prototype.hasOwnProperty.call(_0x3b7d77, _0x5a9a62)) {
      _0xc78e0b = _0x3b7d77[_0x5a9a62];
      if (!_0xc78e0b && (_0xc78e0b === null || _0xc78e0b === undef || isNaN(_0xc78e0b))) {
        _0xc78e0b = '';
      }
      _0x5a9a62 = encode(_0x5a9a62);
      _0xc78e0b = encode(_0xc78e0b);
      if (_0x5a9a62 === null || _0xc78e0b === null)
        continue;
      _0x28e2b1.push(_0x5a9a62 + '=' + _0xc78e0b);
    }
  }
  return _0x28e2b1.length ? _0x17f6dc + _0x28e2b1.join('&') : '';
}
exports.stringify = querystringify;
exports.parse = querystring;