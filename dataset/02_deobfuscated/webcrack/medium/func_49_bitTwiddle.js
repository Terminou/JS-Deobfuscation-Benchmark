'use strict';

"use restrict";
var INT_BITS = 32;
exports.INT_BITS = INT_BITS;
exports.INT_MAX = 2147483647;
exports.INT_MIN = -1 << INT_BITS - 1;
exports.sign = function (_0x2135b4) {
  return (_0x2135b4 > 0) - (_0x2135b4 < 0);
};
exports.abs = function (_0x49f9c5) {
  var _0x52ec20 = _0x49f9c5 >> INT_BITS - 1;
  return (_0x49f9c5 ^ _0x52ec20) - _0x52ec20;
};
exports.min = function (_0x349f1d, _0xa07549) {
  return _0xa07549 ^ (_0x349f1d ^ _0xa07549) & -(_0x349f1d < _0xa07549);
};
exports.max = function (_0x5ce2b8, _0x420289) {
  return _0x5ce2b8 ^ (_0x5ce2b8 ^ _0x420289) & -(_0x5ce2b8 < _0x420289);
};
exports.isPow2 = function (_0x2429fa) {
  return !(_0x2429fa & _0x2429fa - 1) && !!_0x2429fa;
};
exports.log2 = function (_0x3a6b25) {
  var _0x55698e;
  var _0x5ca5b0;
  _0x55698e = (_0x3a6b25 > 65535) << 4;
  _0x3a6b25 >>>= _0x55698e;
  _0x5ca5b0 = (_0x3a6b25 > 255) << 3;
  _0x3a6b25 >>>= _0x5ca5b0;
  _0x55698e |= _0x5ca5b0;
  _0x5ca5b0 = (_0x3a6b25 > 15) << 2;
  _0x3a6b25 >>>= _0x5ca5b0;
  _0x55698e |= _0x5ca5b0;
  _0x5ca5b0 = (_0x3a6b25 > 3) << 1;
  _0x3a6b25 >>>= _0x5ca5b0;
  _0x55698e |= _0x5ca5b0;
  return _0x55698e | _0x3a6b25 >> 1;
};
exports.log10 = function (_0x5c60a2) {
  if (_0x5c60a2 >= 1000000000) {
    return 9;
  } else if (_0x5c60a2 >= 100000000) {
    return 8;
  } else if (_0x5c60a2 >= 10000000) {
    return 7;
  } else if (_0x5c60a2 >= 1000000) {
    return 6;
  } else if (_0x5c60a2 >= 100000) {
    return 5;
  } else if (_0x5c60a2 >= 10000) {
    return 4;
  } else if (_0x5c60a2 >= 1000) {
    return 3;
  } else if (_0x5c60a2 >= 100) {
    return 2;
  } else if (_0x5c60a2 >= 10) {
    return 1;
  } else {
    return 0;
  }
};
exports.popCount = function (_0x5243e4) {
  _0x5243e4 = _0x5243e4 - (_0x5243e4 >>> 1 & 1431655765);
  _0x5243e4 = (_0x5243e4 & 858993459) + (_0x5243e4 >>> 2 & 858993459);
  return (_0x5243e4 + (_0x5243e4 >>> 4) & 252645135) * 16843009 >>> 24;
};
function countTrailingZeros(_0x5e44ef) {
  var _0x6e31aa = 32;
  _0x5e44ef &= -_0x5e44ef;
  if (_0x5e44ef) {
    _0x6e31aa--;
  }
  if (_0x5e44ef & 65535) {
    _0x6e31aa -= 16;
  }
  if (_0x5e44ef & 16711935) {
    _0x6e31aa -= 8;
  }
  if (_0x5e44ef & 252645135) {
    _0x6e31aa -= 4;
  }
  if (_0x5e44ef & 858993459) {
    _0x6e31aa -= 2;
  }
  if (_0x5e44ef & 1431655765) {
    _0x6e31aa -= 1;
  }
  return _0x6e31aa;
}
exports.countTrailingZeros = countTrailingZeros;
exports.nextPow2 = function (_0x456604) {
  _0x456604 += _0x456604 === 0;
  --_0x456604;
  _0x456604 |= _0x456604 >>> 1;
  _0x456604 |= _0x456604 >>> 2;
  _0x456604 |= _0x456604 >>> 4;
  _0x456604 |= _0x456604 >>> 8;
  _0x456604 |= _0x456604 >>> 16;
  return _0x456604 + 1;
};
exports.prevPow2 = function (_0x2d6229) {
  _0x2d6229 |= _0x2d6229 >>> 1;
  _0x2d6229 |= _0x2d6229 >>> 2;
  _0x2d6229 |= _0x2d6229 >>> 4;
  _0x2d6229 |= _0x2d6229 >>> 8;
  _0x2d6229 |= _0x2d6229 >>> 16;
  return _0x2d6229 - (_0x2d6229 >>> 1);
};
exports.parity = function (_0x30fa15) {
  _0x30fa15 ^= _0x30fa15 >>> 16;
  _0x30fa15 ^= _0x30fa15 >>> 8;
  _0x30fa15 ^= _0x30fa15 >>> 4;
  _0x30fa15 &= 15;
  return 27030 >>> _0x30fa15 & 1;
};
var REVERSE_TABLE = new Array(256);
(function (_0x330de8) {
  for (var _0x5acde7 = 0; _0x5acde7 < 256; ++_0x5acde7) {
    var _0x44f7c8 = _0x5acde7;
    var _0x504667 = _0x5acde7;
    var _0x45f0e5 = 7;
    for (_0x44f7c8 >>>= 1; _0x44f7c8; _0x44f7c8 >>>= 1) {
      _0x504667 <<= 1;
      _0x504667 |= _0x44f7c8 & 1;
      --_0x45f0e5;
    }
    _0x330de8[_0x5acde7] = _0x504667 << _0x45f0e5 & 255;
  }
})(REVERSE_TABLE);
exports.reverse = function (_0x4e86d6) {
  return REVERSE_TABLE[_0x4e86d6 & 255] << 24 | REVERSE_TABLE[_0x4e86d6 >>> 8 & 255] << 16 | REVERSE_TABLE[_0x4e86d6 >>> 16 & 255] << 8 | REVERSE_TABLE[_0x4e86d6 >>> 24 & 255];
};
exports.interleave2 = function (_0x752437, _0x5e8740) {
  _0x752437 &= 65535;
  _0x752437 = (_0x752437 | _0x752437 << 8) & 16711935;
  _0x752437 = (_0x752437 | _0x752437 << 4) & 252645135;
  _0x752437 = (_0x752437 | _0x752437 << 2) & 858993459;
  _0x752437 = (_0x752437 | _0x752437 << 1) & 1431655765;
  _0x5e8740 &= 65535;
  _0x5e8740 = (_0x5e8740 | _0x5e8740 << 8) & 16711935;
  _0x5e8740 = (_0x5e8740 | _0x5e8740 << 4) & 252645135;
  _0x5e8740 = (_0x5e8740 | _0x5e8740 << 2) & 858993459;
  _0x5e8740 = (_0x5e8740 | _0x5e8740 << 1) & 1431655765;
  return _0x752437 | _0x5e8740 << 1;
};
exports.deinterleave2 = function (_0xd3859b, _0x40e86d) {
  _0xd3859b = _0xd3859b >>> _0x40e86d & 1431655765;
  _0xd3859b = (_0xd3859b | _0xd3859b >>> 1) & 858993459;
  _0xd3859b = (_0xd3859b | _0xd3859b >>> 2) & 252645135;
  _0xd3859b = (_0xd3859b | _0xd3859b >>> 4) & 16711935;
  _0xd3859b = (_0xd3859b | _0xd3859b >>> 16) & 65535;
  return _0xd3859b << 16 >> 16;
};
exports.interleave3 = function (_0x55f135, _0x79c883, _0x4b7fd2) {
  _0x55f135 &= 1023;
  _0x55f135 = (_0x55f135 | _0x55f135 << 16) & -16776961;
  _0x55f135 = (_0x55f135 | _0x55f135 << 8) & 251719695;
  _0x55f135 = (_0x55f135 | _0x55f135 << 4) & -1022611261;
  _0x55f135 = (_0x55f135 | _0x55f135 << 2) & 1227133513;
  _0x79c883 &= 1023;
  _0x79c883 = (_0x79c883 | _0x79c883 << 16) & -16776961;
  _0x79c883 = (_0x79c883 | _0x79c883 << 8) & 251719695;
  _0x79c883 = (_0x79c883 | _0x79c883 << 4) & -1022611261;
  _0x79c883 = (_0x79c883 | _0x79c883 << 2) & 1227133513;
  _0x55f135 |= _0x79c883 << 1;
  _0x4b7fd2 &= 1023;
  _0x4b7fd2 = (_0x4b7fd2 | _0x4b7fd2 << 16) & -16776961;
  _0x4b7fd2 = (_0x4b7fd2 | _0x4b7fd2 << 8) & 251719695;
  _0x4b7fd2 = (_0x4b7fd2 | _0x4b7fd2 << 4) & -1022611261;
  _0x4b7fd2 = (_0x4b7fd2 | _0x4b7fd2 << 2) & 1227133513;
  return _0x55f135 | _0x4b7fd2 << 2;
};
exports.deinterleave3 = function (_0x23d545, _0x33f45d) {
  _0x23d545 = _0x23d545 >>> _0x33f45d & 1227133513;
  _0x23d545 = (_0x23d545 | _0x23d545 >>> 2) & -1022611261;
  _0x23d545 = (_0x23d545 | _0x23d545 >>> 4) & 251719695;
  _0x23d545 = (_0x23d545 | _0x23d545 >>> 8) & -16776961;
  _0x23d545 = (_0x23d545 | _0x23d545 >>> 16) & 1023;
  return _0x23d545 << 22 >> 22;
};
exports.nextCombination = function (_0x2ade9e) {
  var _0x7596ce = _0x2ade9e | _0x2ade9e - 1;
  return _0x7596ce + 1 | (~_0x7596ce & -~_0x7596ce) - 1 >>> countTrailingZeros(_0x2ade9e) + 1;
};