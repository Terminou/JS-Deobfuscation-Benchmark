'use strict';

exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(_0x26fdc0) {
  var _0x3f8219 = _0x26fdc0.length;
  if (_0x3f8219 % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var _0x33afd9 = _0x26fdc0.indexOf("=");
  if (_0x33afd9 === -1) {
    _0x33afd9 = _0x3f8219;
  }
  var _0x4fdeaf = _0x33afd9 === _0x3f8219 ? 0 : 4 - _0x33afd9 % 4;
  return [_0x33afd9, _0x4fdeaf];
}
function byteLength(_0x2f0dfc) {
  var _0x50fe0c = getLens(_0x2f0dfc);
  var _0x520ca7 = _0x50fe0c[0];
  var _0x2c21b0 = _0x50fe0c[1];
  return (_0x520ca7 + _0x2c21b0) * 3 / 4 - _0x2c21b0;
}
function _byteLength(_0x540454, _0x1e2140, _0x4114e8) {
  return (_0x1e2140 + _0x4114e8) * 3 / 4 - _0x4114e8;
}
function toByteArray(_0x5a1603) {
  var _0x338372;
  var _0x52bf1e = getLens(_0x5a1603);
  var _0xbdf3b7 = _0x52bf1e[0];
  var _0x260255 = _0x52bf1e[1];
  var _0x1c224b = new Arr(_byteLength(_0x5a1603, _0xbdf3b7, _0x260255));
  var _0x33e96b = 0;
  var _0x2cd4d3 = _0x260255 > 0 ? _0xbdf3b7 - 4 : _0xbdf3b7;
  var _0x41a0de;
  for (_0x41a0de = 0; _0x41a0de < _0x2cd4d3; _0x41a0de += 4) {
    _0x338372 = revLookup[_0x5a1603.charCodeAt(_0x41a0de)] << 18 | revLookup[_0x5a1603.charCodeAt(_0x41a0de + 1)] << 12 | revLookup[_0x5a1603.charCodeAt(_0x41a0de + 2)] << 6 | revLookup[_0x5a1603.charCodeAt(_0x41a0de + 3)];
    _0x1c224b[_0x33e96b++] = _0x338372 >> 16 & 255;
    _0x1c224b[_0x33e96b++] = _0x338372 >> 8 & 255;
    _0x1c224b[_0x33e96b++] = _0x338372 & 255;
  }
  if (_0x260255 === 2) {
    _0x338372 = revLookup[_0x5a1603.charCodeAt(_0x41a0de)] << 2 | revLookup[_0x5a1603.charCodeAt(_0x41a0de + 1)] >> 4;
    _0x1c224b[_0x33e96b++] = _0x338372 & 255;
  }
  if (_0x260255 === 1) {
    _0x338372 = revLookup[_0x5a1603.charCodeAt(_0x41a0de)] << 10 | revLookup[_0x5a1603.charCodeAt(_0x41a0de + 1)] << 4 | revLookup[_0x5a1603.charCodeAt(_0x41a0de + 2)] >> 2;
    _0x1c224b[_0x33e96b++] = _0x338372 >> 8 & 255;
    _0x1c224b[_0x33e96b++] = _0x338372 & 255;
  }
  return _0x1c224b;
}
function tripletToBase64(_0xa561d8) {
  return lookup[_0xa561d8 >> 18 & 63] + lookup[_0xa561d8 >> 12 & 63] + lookup[_0xa561d8 >> 6 & 63] + lookup[_0xa561d8 & 63];
}
function encodeChunk(_0x35cd67, _0x499a1f, _0x5034fd) {
  var _0x2eea23;
  var _0x5b1ea6 = [];
  for (var _0x49e4e4 = _0x499a1f; _0x49e4e4 < _0x5034fd; _0x49e4e4 += 3) {
    _0x2eea23 = (_0x35cd67[_0x49e4e4] << 16 & 16711680) + (_0x35cd67[_0x49e4e4 + 1] << 8 & 65280) + (_0x35cd67[_0x49e4e4 + 2] & 255);
    _0x5b1ea6.push(tripletToBase64(_0x2eea23));
  }
  return _0x5b1ea6.join("");
}
function fromByteArray(_0x3e8296) {
  var _0x44788d;
  var _0x528b51 = _0x3e8296.length;
  var _0x583f39 = _0x528b51 % 3;
  var _0x1362f2 = [];
  var _0x4e7503 = 16383;
  for (var _0x49800f = 0, _0x408154 = _0x528b51 - _0x583f39; _0x49800f < _0x408154; _0x49800f += _0x4e7503) {
    _0x1362f2.push(encodeChunk(_0x3e8296, _0x49800f, _0x49800f + _0x4e7503 > _0x408154 ? _0x408154 : _0x49800f + _0x4e7503));
  }
  if (_0x583f39 === 1) {
    _0x44788d = _0x3e8296[_0x528b51 - 1];
    _0x1362f2.push(lookup[_0x44788d >> 2] + lookup[_0x44788d << 4 & 63] + "==");
  } else if (_0x583f39 === 2) {
    _0x44788d = (_0x3e8296[_0x528b51 - 2] << 8) + _0x3e8296[_0x528b51 - 1];
    _0x1362f2.push(lookup[_0x44788d >> 10] + lookup[_0x44788d >> 4 & 63] + lookup[_0x44788d << 2 & 63] + "=");
  }
  return _0x1362f2.join("");
}