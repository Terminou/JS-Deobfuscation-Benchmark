'use strict';

module.exports = function union(_0x5137fc) {
  if (!Array.isArray(_0x5137fc)) {
    throw new TypeError("arr-union expects the first argument to be an array.");
  }
  var _0x253450 = arguments.length;
  var _0x3653d1 = 0;
  while (++_0x3653d1 < _0x253450) {
    var _0x6869db = arguments[_0x3653d1];
    if (!_0x6869db) {
      continue;
    }
    if (!Array.isArray(_0x6869db)) {
      _0x6869db = [_0x6869db];
    }
    for (var _0x25ec81 = 0; _0x25ec81 < _0x6869db.length; _0x25ec81++) {
      var _0x560ada = _0x6869db[_0x25ec81];
      if (_0x5137fc.indexOf(_0x560ada) >= 0) {
        continue;
      }
      _0x5137fc.push(_0x560ada);
    }
  }
  return _0x5137fc;
};