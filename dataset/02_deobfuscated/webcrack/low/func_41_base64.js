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
function getLens(_0x171bcc) {
  var _0x456b60 = _0x171bcc.length;
  if (_0x456b60 % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var _0x1d41b8 = _0x171bcc.indexOf("=");
  if (_0x1d41b8 === -1) {
    _0x1d41b8 = _0x456b60;
  }
  var _0x4b92c8 = _0x1d41b8 === _0x456b60 ? 0 : 4 - _0x1d41b8 % 4;
  return [_0x1d41b8, _0x4b92c8];
}
function byteLength(_0x3341cf) {
  var _0xf0be37 = getLens(_0x3341cf);
  var _0x3ec8f0 = _0xf0be37[0];
  var _0x45e187 = _0xf0be37[1];
  return (_0x3ec8f0 + _0x45e187) * 3 / 4 - _0x45e187;
}
function _byteLength(_0x43133e, _0x35c858, _0x15d248) {
  return (_0x35c858 + _0x15d248) * 3 / 4 - _0x15d248;
}
function toByteArray(_0x33a66f) {
  var _0x4e249f;
  var _0x119420 = getLens(_0x33a66f);
  var _0xedda01 = _0x119420[0];
  var _0x5c78f5 = _0x119420[1];
  var _0x32e096 = new Arr(_byteLength(_0x33a66f, _0xedda01, _0x5c78f5));
  var _0x130337 = 0;
  var _0x4e430b = _0x5c78f5 > 0 ? _0xedda01 - 4 : _0xedda01;
  var _0x23217a;
  for (_0x23217a = 0; _0x23217a < _0x4e430b; _0x23217a += 4) {
    _0x4e249f = revLookup[_0x33a66f.charCodeAt(_0x23217a)] << 18 | revLookup[_0x33a66f.charCodeAt(_0x23217a + 1)] << 12 | revLookup[_0x33a66f.charCodeAt(_0x23217a + 2)] << 6 | revLookup[_0x33a66f.charCodeAt(_0x23217a + 3)];
    _0x32e096[_0x130337++] = _0x4e249f >> 16 & 255;
    _0x32e096[_0x130337++] = _0x4e249f >> 8 & 255;
    _0x32e096[_0x130337++] = _0x4e249f & 255;
  }
  if (_0x5c78f5 === 2) {
    _0x4e249f = revLookup[_0x33a66f.charCodeAt(_0x23217a)] << 2 | revLookup[_0x33a66f.charCodeAt(_0x23217a + 1)] >> 4;
    _0x32e096[_0x130337++] = _0x4e249f & 255;
  }
  if (_0x5c78f5 === 1) {
    _0x4e249f = revLookup[_0x33a66f.charCodeAt(_0x23217a)] << 10 | revLookup[_0x33a66f.charCodeAt(_0x23217a + 1)] << 4 | revLookup[_0x33a66f.charCodeAt(_0x23217a + 2)] >> 2;
    _0x32e096[_0x130337++] = _0x4e249f >> 8 & 255;
    _0x32e096[_0x130337++] = _0x4e249f & 255;
  }
  return _0x32e096;
}
function tripletToBase64(_0x4ffd46) {
  return lookup[_0x4ffd46 >> 18 & 63] + lookup[_0x4ffd46 >> 12 & 63] + lookup[_0x4ffd46 >> 6 & 63] + lookup[_0x4ffd46 & 63];
}
function encodeChunk(_0x54b3cb, _0x2d2e69, _0x1b922d) {
  var _0x409770;
  var _0x6d3628 = [];
  for (var _0xf84b54 = _0x2d2e69; _0xf84b54 < _0x1b922d; _0xf84b54 += 3) {
    _0x409770 = (_0x54b3cb[_0xf84b54] << 16 & 16711680) + (_0x54b3cb[_0xf84b54 + 1] << 8 & 65280) + (_0x54b3cb[_0xf84b54 + 2] & 255);
    _0x6d3628.push(tripletToBase64(_0x409770));
  }
  return _0x6d3628.join("");
}
function fromByteArray(_0xd281eb) {
  var _0x4d391f;
  var _0x130f5f = _0xd281eb.length;
  var _0x50161e = _0x130f5f % 3;
  var _0x45a258 = [];
  var _0x59ad13 = 16383;
  for (var _0x511066 = 0, _0x2cac99 = _0x130f5f - _0x50161e; _0x511066 < _0x2cac99; _0x511066 += _0x59ad13) {
    _0x45a258.push(encodeChunk(_0xd281eb, _0x511066, _0x511066 + _0x59ad13 > _0x2cac99 ? _0x2cac99 : _0x511066 + _0x59ad13));
  }
  if (_0x50161e === 1) {
    _0x4d391f = _0xd281eb[_0x130f5f - 1];
    _0x45a258.push(lookup[_0x4d391f >> 2] + lookup[_0x4d391f << 4 & 63] + "==");
  } else if (_0x50161e === 2) {
    _0x4d391f = (_0xd281eb[_0x130f5f - 2] << 8) + _0xd281eb[_0x130f5f - 1];
    _0x45a258.push(lookup[_0x4d391f >> 10] + lookup[_0x4d391f >> 4 & 63] + lookup[_0x4d391f << 2 & 63] + "=");
  }
  return _0x45a258.join("");
}