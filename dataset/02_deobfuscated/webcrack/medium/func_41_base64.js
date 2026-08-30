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
function getLens(_0x5a3415) {
  var _0x3a9209 = _0x5a3415.length;
  if (_0x3a9209 % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var _0x366f65 = _0x5a3415.indexOf("=");
  if (_0x366f65 === -1) {
    _0x366f65 = _0x3a9209;
  }
  var _0x3ed2e8 = _0x366f65 === _0x3a9209 ? 0 : 4 - _0x366f65 % 4;
  return [_0x366f65, _0x3ed2e8];
}
function byteLength(_0x396f3e) {
  var _0x2f4291 = getLens(_0x396f3e);
  var _0x155e25 = _0x2f4291[0];
  var _0x24fda1 = _0x2f4291[1];
  return (_0x155e25 + _0x24fda1) * 3 / 4 - _0x24fda1;
}
function _byteLength(_0x47a743, _0x11c5b1, _0x281470) {
  return (_0x11c5b1 + _0x281470) * 3 / 4 - _0x281470;
}
function toByteArray(_0x427d7c) {
  var _0x16de14;
  var _0x328ef0 = getLens(_0x427d7c);
  var _0x2faa2d = _0x328ef0[0];
  var _0x45840d = _0x328ef0[1];
  var _0x403822 = new Arr(_byteLength(_0x427d7c, _0x2faa2d, _0x45840d));
  var _0x448235 = 0;
  var _0x304711 = _0x45840d > 0 ? _0x2faa2d - 4 : _0x2faa2d;
  var _0x35a6fb;
  for (_0x35a6fb = 0; _0x35a6fb < _0x304711; _0x35a6fb += 4) {
    _0x16de14 = revLookup[_0x427d7c.charCodeAt(_0x35a6fb)] << 18 | revLookup[_0x427d7c.charCodeAt(_0x35a6fb + 1)] << 12 | revLookup[_0x427d7c.charCodeAt(_0x35a6fb + 2)] << 6 | revLookup[_0x427d7c.charCodeAt(_0x35a6fb + 3)];
    _0x403822[_0x448235++] = _0x16de14 >> 16 & 255;
    _0x403822[_0x448235++] = _0x16de14 >> 8 & 255;
    _0x403822[_0x448235++] = _0x16de14 & 255;
  }
  if (_0x45840d === 2) {
    _0x16de14 = revLookup[_0x427d7c.charCodeAt(_0x35a6fb)] << 2 | revLookup[_0x427d7c.charCodeAt(_0x35a6fb + 1)] >> 4;
    _0x403822[_0x448235++] = _0x16de14 & 255;
  }
  if (_0x45840d === 1) {
    _0x16de14 = revLookup[_0x427d7c.charCodeAt(_0x35a6fb)] << 10 | revLookup[_0x427d7c.charCodeAt(_0x35a6fb + 1)] << 4 | revLookup[_0x427d7c.charCodeAt(_0x35a6fb + 2)] >> 2;
    _0x403822[_0x448235++] = _0x16de14 >> 8 & 255;
    _0x403822[_0x448235++] = _0x16de14 & 255;
  }
  return _0x403822;
}
function tripletToBase64(_0x38c846) {
  return lookup[_0x38c846 >> 18 & 63] + lookup[_0x38c846 >> 12 & 63] + lookup[_0x38c846 >> 6 & 63] + lookup[_0x38c846 & 63];
}
function encodeChunk(_0x1ab112, _0x42293a, _0x12c294) {
  var _0x4067db;
  var _0x2c6ed1 = [];
  for (var _0x43619e = _0x42293a; _0x43619e < _0x12c294; _0x43619e += 3) {
    _0x4067db = (_0x1ab112[_0x43619e] << 16 & 16711680) + (_0x1ab112[_0x43619e + 1] << 8 & 65280) + (_0x1ab112[_0x43619e + 2] & 255);
    _0x2c6ed1.push(tripletToBase64(_0x4067db));
  }
  return _0x2c6ed1.join("");
}
function fromByteArray(_0x1161d8) {
  var _0x592dc7;
  var _0x2d7ae2 = _0x1161d8.length;
  var _0x454caf = _0x2d7ae2 % 3;
  var _0x4f1b17 = [];
  var _0x20c48b = 16383;
  for (var _0x3c6c9e = 0, _0x1ba10f = _0x2d7ae2 - _0x454caf; _0x3c6c9e < _0x1ba10f; _0x3c6c9e += _0x20c48b) {
    _0x4f1b17.push(encodeChunk(_0x1161d8, _0x3c6c9e, _0x3c6c9e + _0x20c48b > _0x1ba10f ? _0x1ba10f : _0x3c6c9e + _0x20c48b));
  }
  if (_0x454caf === 1) {
    _0x592dc7 = _0x1161d8[_0x2d7ae2 - 1];
    _0x4f1b17.push(lookup[_0x592dc7 >> 2] + lookup[_0x592dc7 << 4 & 63] + "==");
  } else if (_0x454caf === 2) {
    _0x592dc7 = (_0x1161d8[_0x2d7ae2 - 2] << 8) + _0x1161d8[_0x2d7ae2 - 1];
    _0x4f1b17.push(lookup[_0x592dc7 >> 10] + lookup[_0x592dc7 >> 4 & 63] + lookup[_0x592dc7 << 2 & 63] + "=");
  }
  return _0x4f1b17.join("");
}