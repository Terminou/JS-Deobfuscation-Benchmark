'use strict';

var has = Object.prototype.hasOwnProperty;
var undef;
function decode(_0x3b7d77) {
  try {
    return decodeURIComponent(_0x3b7d77.replace(/\+/g, " "));
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
  while (_0x142ed4 = _0x456872.exec(_0x5a9a62)) {
    var _0x5b9d1b = decode(_0x142ed4[1]);
    var _0x5de11e = decode(_0x142ed4[2]);
    if (_0x5b9d1b === null || _0x5de11e === null || _0x5b9d1b in _0x39f152) {
      continue;
    }
    _0x39f152[_0x5b9d1b] = _0x5de11e;
  }
  return _0x39f152;
}
function querystringify(_0x17b5c8, _0x2d1cb4) {
  _0x2d1cb4 = _0x2d1cb4 || "";
  var _0x5a4b74 = [];
  var _0x40d1d5;
  var _0x22a27f;
  if (typeof _0x2d1cb4 !== "string") {
    _0x2d1cb4 = "?";
  }
  for (_0x22a27f in _0x17b5c8) {
    if (has.call(_0x17b5c8, _0x22a27f)) {
      _0x40d1d5 = _0x17b5c8[_0x22a27f];
      if (!_0x40d1d5 && (_0x40d1d5 === null || _0x40d1d5 === undef || isNaN(_0x40d1d5))) {
        _0x40d1d5 = "";
      }
      _0x22a27f = encode(_0x22a27f);
      _0x40d1d5 = encode(_0x40d1d5);
      if (_0x22a27f === null || _0x40d1d5 === null) {
        continue;
      }
      _0x5a4b74.push(_0x22a27f + "=" + _0x40d1d5);
    }
  }
  if (_0x5a4b74.length) {
    return _0x2d1cb4 + _0x5a4b74.join("&");
  } else {
    return "";
  }
}
exports.stringify = querystringify;
exports.parse = querystring;