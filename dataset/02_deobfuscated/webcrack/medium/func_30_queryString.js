'use strict';

var has = Object.prototype.hasOwnProperty;
var undef;
function decode(_0x50b7c5) {
  try {
    return decodeURIComponent(_0x50b7c5.replace(/\+/g, " "));
  } catch (_0x46b58d) {
    return null;
  }
}
function encode(_0x946469) {
  try {
    return encodeURIComponent(_0x946469);
  } catch (_0x88b0cd) {
    return null;
  }
}
function querystring(_0x56d8f0) {
  var _0xee5282 = /([^=?#&]+)=?([^&]*)/g;
  var _0x552810 = {};
  var _0xa883ec;
  while (_0xa883ec = _0xee5282.exec(_0x56d8f0)) {
    var _0x5c7ebd = decode(_0xa883ec[1]);
    var _0x38dd04 = decode(_0xa883ec[2]);
    if (_0x5c7ebd === null || _0x38dd04 === null || _0x5c7ebd in _0x552810) {
      continue;
    }
    _0x552810[_0x5c7ebd] = _0x38dd04;
  }
  return _0x552810;
}
function querystringify(_0x194cc1, _0x239370) {
  _0x239370 = _0x239370 || "";
  var _0x12e548 = [];
  var _0x1ea57b;
  var _0x477517;
  if (typeof _0x239370 !== "string") {
    _0x239370 = "?";
  }
  for (_0x477517 in _0x194cc1) {
    if (has.call(_0x194cc1, _0x477517)) {
      _0x1ea57b = _0x194cc1[_0x477517];
      if (!_0x1ea57b && (_0x1ea57b === null || _0x1ea57b === undef || isNaN(_0x1ea57b))) {
        _0x1ea57b = "";
      }
      _0x477517 = encode(_0x477517);
      _0x1ea57b = encode(_0x1ea57b);
      if (_0x477517 === null || _0x1ea57b === null) {
        continue;
      }
      _0x12e548.push(_0x477517 + "=" + _0x1ea57b);
    }
  }
  if (_0x12e548.length) {
    return _0x239370 + _0x12e548.join("&");
  } else {
    return "";
  }
}
exports.stringify = querystringify;
exports.parse = querystring;