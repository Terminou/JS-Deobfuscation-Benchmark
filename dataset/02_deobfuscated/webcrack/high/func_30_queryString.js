'use strict';

var has = Object.prototype.hasOwnProperty;
var undef;
function decode(_0x3cf3ca) {
  try {
    return decodeURIComponent(_0x3cf3ca.replace(/\+/g, " "));
  } catch (_0x2ed0d7) {
    return null;
  }
}
function encode(_0x3ee9ea) {
  try {
    return encodeURIComponent(_0x3ee9ea);
  } catch (_0x1a5f86) {
    return null;
  }
}
function querystring(_0x1165b8) {
  var _0xcbc8ed = /([^=?#&]+)=?([^&]*)/g;
  var _0x19a334 = {};
  var _0x12e5dd;
  while (_0x12e5dd = _0xcbc8ed.exec(_0x1165b8)) {
    var _0x3a033b = decode(_0x12e5dd[1]);
    var _0x55dc05 = decode(_0x12e5dd[2]);
    if (_0x3a033b === null || _0x55dc05 === null || _0x3a033b in _0x19a334) {
      continue;
    }
    _0x19a334[_0x3a033b] = _0x55dc05;
  }
  return _0x19a334;
}
function querystringify(_0x39b05f, _0x1d6d67) {
  _0x1d6d67 = _0x1d6d67 || "";
  var _0x5c8648 = [];
  var _0xc8d146;
  var _0x4b7c8e;
  if (typeof _0x1d6d67 !== "string") {
    _0x1d6d67 = "?";
  }
  for (_0x4b7c8e in _0x39b05f) {
    if (has.call(_0x39b05f, _0x4b7c8e)) {
      _0xc8d146 = _0x39b05f[_0x4b7c8e];
      if (!_0xc8d146 && (_0xc8d146 === null || _0xc8d146 === undef || isNaN(_0xc8d146))) {
        _0xc8d146 = "";
      }
      _0x4b7c8e = encode(_0x4b7c8e);
      _0xc8d146 = encode(_0xc8d146);
      if (_0x4b7c8e === null || _0xc8d146 === null) {
        continue;
      }
      _0x5c8648.push(_0x4b7c8e + "=" + _0xc8d146);
    }
  }
  if (_0x5c8648.length) {
    return _0x1d6d67 + _0x5c8648.join("&");
  } else {
    return "";
  }
}
exports.stringify = querystringify;
exports.parse = querystring;