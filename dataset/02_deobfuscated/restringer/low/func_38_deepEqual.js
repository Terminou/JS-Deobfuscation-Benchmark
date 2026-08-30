'use strict';
function _0x5c6d() {
  return [
    'toString',
    'constructor',
    '116098rKoFij',
    'hasOwnProperty',
    'flags',
    'call',
    'source',
    '4604040rlUtgM',
    'prototype',
    'object',
    'length',
    '104436moJuQp',
    '594754ZerFdF',
    'keys',
    '24966AhYPvg',
    '3345110lAefgh',
    '36LKWtGN',
    'valueOf',
    'isArray',
    'exports',
    '108ucEFjO',
    '4396970kpQFFz',
    '1309gLUXdY'
  ];
}
function _0x1b06(_0x4d5b50, _0x4106b8) {
  _0x4d5b50 = _0x4d5b50 - 374;
  var _0x5c6d69 = [
    'toString',
    'constructor',
    '116098rKoFij',
    'hasOwnProperty',
    'flags',
    'call',
    'source',
    '4604040rlUtgM',
    'prototype',
    'object',
    'length',
    '104436moJuQp',
    '594754ZerFdF',
    'keys',
    '24966AhYPvg',
    '3345110lAefgh',
    '36LKWtGN',
    'valueOf',
    'isArray',
    'exports',
    '108ucEFjO',
    '4396970kpQFFz',
    '1309gLUXdY'
  ];
  var _0x1b06cf = _0x5c6d69[_0x4d5b50];
  return _0x5c6d69[_0x4d5b50];
}
module.exports = function equal(_0xb8131a, _0x442b5d) {
  if (_0xb8131a === _0x442b5d)
    return true;
  if (_0xb8131a && _0x442b5d && typeof _0xb8131a == 'object' && typeof _0x442b5d == 'object') {
    if (_0xb8131a.constructor !== _0x442b5d.constructor)
      return false;
    var _0x4ea519;
    var _0x325c81;
    var _0x37e0c2;
    if (Array.isArray(_0xb8131a)) {
      _0x4ea519 = _0xb8131a.length;
      if (_0x4ea519 != _0x442b5d.length)
        return false;
      for (_0x325c81 = _0x4ea519; _0x325c81-- !== 0;)
        if (!equal(_0xb8131a[_0x325c81], _0x442b5d[_0x325c81]))
          return false;
      return true;
    }
    if (_0xb8131a.constructor === RegExp)
      return _0xb8131a.source === _0x442b5d.source && _0xb8131a.flags === _0x442b5d.flags;
    if (_0xb8131a.valueOf !== Object.prototype.valueOf)
      return _0xb8131a.valueOf() === _0x442b5d.valueOf();
    if (_0xb8131a.toString !== Object.prototype.toString)
      return _0xb8131a.toString() === _0x442b5d.toString();
    _0x37e0c2 = Object.keys(_0xb8131a);
    _0x4ea519 = _0x37e0c2.length;
    if (_0x4ea519 !== Object.keys(_0x442b5d).length)
      return false;
    for (_0x325c81 = _0x4ea519; _0x325c81-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(_0x442b5d, _0x37e0c2[_0x325c81]))
        return false;
    for (_0x325c81 = _0x4ea519; _0x325c81-- !== 0;) {
      var _0xf3d24 = _0x37e0c2[_0x325c81];
      if (!equal(_0xb8131a[_0x37e0c2[_0x325c81]], _0x442b5d[_0x37e0c2[_0x325c81]]))
        return false;
    }
    return true;
  }
  return _0xb8131a !== _0xb8131a && _0x442b5d !== _0x442b5d;
};