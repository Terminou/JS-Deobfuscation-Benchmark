'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function _0x21ba() {
  return [
    '120qINBid',
    'undefined',
    '112NcQjrA',
    'byteLength',
    '43822qCMxsI',
    '15UznNPc',
    '3584350wJPEdH',
    '422652qasNem',
    '104245rqZHtv',
    '7953286pQAGkO',
    'push',
    'indexOf',
    'charCodeAt',
    'toByteArray',
    '213688dsVrgl',
    'join',
    '3PvFodS',
    'length',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    '2333079ZxcZwE'
  ];
}
for (var i = 0, len = 64; i < 64; ++i) {
  lookup[i] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'[i];
  revLookup['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charCodeAt(i)] = i;
}
revLookup[45] = 62;
revLookup[95] = 63;
function getLens(_0x171bcc) {
  var _0x456b60 = _0x171bcc.length;
  if (_0x171bcc.length % 4 > 0)
    throw new Error('Invalid string. Length must be a multiple of 4');
  var _0x1d41b8 = _0x171bcc.indexOf('=');
  if (_0x1d41b8 === -1)
    _0x1d41b8 = _0x171bcc.length;
  var _0x4b92c8 = _0x1d41b8 === _0x171bcc.length ? 0 : 4 - _0x1d41b8 % 4;
  return [
    _0x1d41b8,
    _0x4b92c8
  ];
}
function byteLength(_0x3341cf) {
  var _0xf0be37 = getLens(_0x3341cf);
  var _0x3ec8f0 = _0xf0be37[0];
  var _0x45e187 = _0xf0be37[1];
  return (_0xf0be37[0] + _0xf0be37[1]) * 3 / 4 - _0xf0be37[1];
}
function _byteLength(_0x43133e, _0x35c858, _0x15d248) {
  return (_0x35c858 + _0x15d248) * 3 / 4 - _0x15d248;
}
function toByteArray(_0x33a66f) {
  var _0x4e249f;
  var _0x119420 = getLens(_0x33a66f);
  var _0xedda01 = _0x119420[0];
  var _0x5c78f5 = _0x119420[1];
  var _0x32e096 = new Arr(_byteLength(_0x33a66f, _0x119420[0], _0x119420[1]));
  var _0x130337 = 0;
  var _0x4e430b = _0x119420[1] > 0 ? _0x119420[0] - 4 : _0x119420[0];
  var _0x23217a;
  for (_0x23217a = 0; _0x23217a < _0x4e430b; _0x23217a += 4) {
    _0x4e249f = revLookup[_0x33a66f.charCodeAt(_0x23217a)] << 18 | revLookup[_0x33a66f.charCodeAt(_0x23217a + 1)] << 12 | revLookup[_0x33a66f.charCodeAt(_0x23217a + 2)] << 6 | revLookup[_0x33a66f.charCodeAt(_0x23217a + 3)];
    _0x32e096[_0x130337++] = _0x4e249f >> 16 & 255;
    _0x32e096[_0x130337++] = _0x4e249f >> 8 & 255;
    _0x32e096[_0x130337++] = _0x4e249f & 255;
  }
  if (_0x119420[1] === 2) {
    _0x4e249f = revLookup[_0x33a66f.charCodeAt(_0x23217a)] << 2 | revLookup[_0x33a66f.charCodeAt(_0x23217a + 1)] >> 4;
    _0x32e096[_0x130337++] = _0x4e249f & 255;
  }
  if (_0x119420[1] === 1) {
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
  return _0x6d3628.join('');
}
function _0x9242(_0x8d1024, _0x524d40) {
  _0x8d1024 = _0x8d1024 - 173;
  var _0x21bacf = [
    '120qINBid',
    'undefined',
    '112NcQjrA',
    'byteLength',
    '43822qCMxsI',
    '15UznNPc',
    '3584350wJPEdH',
    '422652qasNem',
    '104245rqZHtv',
    '7953286pQAGkO',
    'push',
    'indexOf',
    'charCodeAt',
    'toByteArray',
    '213688dsVrgl',
    'join',
    '3PvFodS',
    'length',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    '2333079ZxcZwE'
  ];
  var _0x9242dd = _0x21bacf[_0x8d1024];
  return _0x21bacf[_0x8d1024];
}
function fromByteArray(_0xd281eb) {
  var _0x4d391f;
  var _0x130f5f = _0xd281eb.length;
  var _0x50161e = _0xd281eb.length % 3;
  var _0x45a258 = [];
  var _0x59ad13 = 16383;
  for (var _0x511066 = 0, _0x2cac99 = _0xd281eb.length - _0x50161e; _0x511066 < _0x2cac99; _0x511066 += 16383) {
    _0x45a258.push(encodeChunk(_0xd281eb, _0x511066, _0x511066 + 16383 > _0x2cac99 ? _0x2cac99 : _0x511066 + 16383));
  }
  if (_0x50161e === 1) {
    _0x4d391f = _0xd281eb[_0xd281eb.length - 1];
    _0x45a258.push(lookup[_0x4d391f >> 2] + lookup[_0x4d391f << 4 & 63] + '==');
  } else if (_0x50161e === 2) {
    _0x4d391f = (_0xd281eb[_0xd281eb.length - 2] << 8) + _0xd281eb[_0xd281eb.length - 1];
    _0x45a258.push(lookup[_0x4d391f >> 10] + lookup[_0x4d391f >> 4 & 63] + lookup[_0x4d391f << 2 & 63] + '=');
  }
  return _0x45a258.join('');
}