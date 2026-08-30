'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = 64; i < 64; ++i) {
  lookup[i] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'[i];
  revLookup['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charCodeAt(i)] = i;
}
revLookup[45] = 62;
revLookup[95] = 63;
function getLens(_0x8d1024) {
  var _0x524d40 = _0x8d1024.length;
  if (_0x8d1024.length % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  }
  var _0x21bacf = _0x8d1024.indexOf('=');
  if (_0x21bacf === -1)
    _0x21bacf = _0x8d1024.length;
  var _0x9242dd = _0x21bacf === _0x8d1024.length ? 0 : 4 - _0x21bacf % 4;
  return [
    _0x21bacf,
    _0x9242dd
  ];
}
function byteLength(_0x2b9507) {
  var _0x5405e2 = getLens(_0x2b9507);
  var _0x1917ed = _0x5405e2[0];
  var _0x59f00d = _0x5405e2[1];
  return (_0x5405e2[0] + _0x5405e2[1]) * 3 / 4 - _0x5405e2[1];
}
function _byteLength(_0x3e9908, _0x12b763, _0x171bcc) {
  return (_0x12b763 + _0x171bcc) * 3 / 4 - _0x171bcc;
}
function toByteArray(_0x456b60) {
  var _0x1d41b8;
  var _0x4b92c8 = getLens(_0x456b60);
  var _0x3341cf = _0x4b92c8[0];
  var _0xf0be37 = _0x4b92c8[1];
  var _0x3ec8f0 = new Arr(_byteLength(_0x456b60, _0x4b92c8[0], _0x4b92c8[1]));
  var _0x45e187 = 0;
  var _0x43133e = _0x4b92c8[1] > 0 ? _0x4b92c8[0] - 4 : _0x4b92c8[0];
  var _0x35c858;
  for (_0x35c858 = 0; _0x35c858 < _0x43133e; _0x35c858 += 4) {
    _0x1d41b8 = revLookup[_0x456b60.charCodeAt(_0x35c858)] << 18 | revLookup[_0x456b60.charCodeAt(_0x35c858 + 1)] << 12 | revLookup[_0x456b60.charCodeAt(_0x35c858 + 2)] << 6 | revLookup[_0x456b60.charCodeAt(_0x35c858 + 3)];
    _0x3ec8f0[_0x45e187++] = _0x1d41b8 >> 16 & 255;
    _0x3ec8f0[_0x45e187++] = _0x1d41b8 >> 8 & 255;
    _0x3ec8f0[_0x45e187++] = _0x1d41b8 & 255;
  }
  if (_0x4b92c8[1] === 2) {
    _0x1d41b8 = revLookup[_0x456b60.charCodeAt(_0x35c858)] << 2 | revLookup[_0x456b60.charCodeAt(_0x35c858 + 1)] >> 4;
    _0x3ec8f0[_0x45e187++] = _0x1d41b8 & 255;
  }
  if (_0x4b92c8[1] === 1) {
    _0x1d41b8 = revLookup[_0x456b60.charCodeAt(_0x35c858)] << 10 | revLookup[_0x456b60.charCodeAt(_0x35c858 + 1)] << 4 | revLookup[_0x456b60.charCodeAt(_0x35c858 + 2)] >> 2;
    _0x3ec8f0[_0x45e187++] = _0x1d41b8 >> 8 & 255;
    _0x3ec8f0[_0x45e187++] = _0x1d41b8 & 255;
  }
  return _0x3ec8f0;
}
function tripletToBase64(_0x15d248) {
  return lookup[_0x15d248 >> 18 & 63] + lookup[_0x15d248 >> 12 & 63] + lookup[_0x15d248 >> 6 & 63] + lookup[_0x15d248 & 63];
}
function encodeChunk(_0x33a66f, _0x4e249f, _0x119420) {
  var _0xedda01;
  var _0x5c78f5 = [];
  for (var _0x32e096 = _0x4e249f; _0x32e096 < _0x119420; _0x32e096 += 3) {
    _0xedda01 = (_0x33a66f[_0x32e096] << 16 & 16711680) + (_0x33a66f[_0x32e096 + 1] << 8 & 65280) + (_0x33a66f[_0x32e096 + 2] & 255);
    _0x5c78f5.push(tripletToBase64(_0xedda01));
  }
  return _0x5c78f5.join('');
}
function fromByteArray(_0x130337) {
  var _0x4e430b;
  var _0x23217a = _0x130337.length;
  var _0x4ffd46 = _0x130337.length % 3;
  var _0x54b3cb = [];
  var _0x2d2e69 = 16383;
  for (var _0x1b922d = 0, _0x409770 = _0x130337.length - _0x4ffd46; _0x1b922d < _0x409770; _0x1b922d += 16383) {
    _0x54b3cb.push(encodeChunk(_0x130337, _0x1b922d, _0x1b922d + 16383 > _0x409770 ? _0x409770 : _0x1b922d + 16383));
  }
  if (_0x4ffd46 === 1) {
    _0x4e430b = _0x130337[_0x130337.length - 1];
    _0x54b3cb.push(lookup[_0x4e430b >> 2] + lookup[_0x4e430b << 4 & 63] + '==');
  } else if (_0x4ffd46 === 2) {
    _0x4e430b = (_0x130337[_0x130337.length - 2] << 8) + _0x130337[_0x130337.length - 1];
    _0x54b3cb.push(lookup[_0x4e430b >> 10] + lookup[_0x4e430b >> 4 & 63] + lookup[_0x4e430b << 2 & 63] + '=');
  }
  return _0x54b3cb.join('');
}