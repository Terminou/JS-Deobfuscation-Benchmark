'use strict';

module.exports = function unique(_0x32d93e) {
  if (!Array.isArray(_0x32d93e)) {
    throw new TypeError("array-unique expects an array.");
  }
  var _0x2c7702 = _0x32d93e.length;
  var _0x19b007 = -1;
  while (_0x19b007++ < _0x2c7702) {
    var _0x151896 = _0x19b007 + 1;
    for (; _0x151896 < _0x32d93e.length; ++_0x151896) {
      if (_0x32d93e[_0x19b007] === _0x32d93e[_0x151896]) {
        _0x32d93e.splice(_0x151896--, 1);
      }
    }
  }
  return _0x32d93e;
};
module.exports.immutable = function uniqueImmutable(_0x28ce52) {
  if (!Array.isArray(_0x28ce52)) {
    throw new TypeError("array-unique expects an array.");
  }
  var _0x13f9c9 = _0x28ce52.length;
  var _0x1c4c04 = new Array(_0x13f9c9);
  for (var _0x538bf3 = 0; _0x538bf3 < _0x13f9c9; _0x538bf3++) {
    _0x1c4c04[_0x538bf3] = _0x28ce52[_0x538bf3];
  }
  return module.exports(_0x1c4c04);
};