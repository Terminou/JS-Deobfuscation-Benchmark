'use strict';

"use restrict";
var INT_BITS = 32;
exports.INT_BITS = INT_BITS;
exports.INT_MAX = 2147483647;
exports.INT_MIN = -1 << INT_BITS - 1;
exports.sign = function (_0x58488b) {
  return (_0x58488b > 0) - (_0x58488b < 0);
};
exports.abs = function (_0x599059) {
  var _0x3f986b = _0x599059 >> INT_BITS - 1;
  return (_0x599059 ^ _0x3f986b) - _0x3f986b;
};
exports.min = function (_0x61bce1, _0x15b77d) {
  return _0x15b77d ^ (_0x61bce1 ^ _0x15b77d) & -(_0x61bce1 < _0x15b77d);
};
exports.max = function (_0x59c914, _0x4e51e6) {
  return _0x59c914 ^ (_0x59c914 ^ _0x4e51e6) & -(_0x59c914 < _0x4e51e6);
};
exports.isPow2 = function (_0x277d82) {
  return !(_0x277d82 & _0x277d82 - 1) && !!_0x277d82;
};
exports.log2 = function (_0x164a24) {
  var _0x586ee7;
  var _0x2ee053;
  _0x586ee7 = (_0x164a24 > 65535) << 4;
  _0x164a24 >>>= _0x586ee7;
  _0x2ee053 = (_0x164a24 > 255) << 3;
  _0x164a24 >>>= _0x2ee053;
  _0x586ee7 |= _0x2ee053;
  _0x2ee053 = (_0x164a24 > 15) << 2;
  _0x164a24 >>>= _0x2ee053;
  _0x586ee7 |= _0x2ee053;
  _0x2ee053 = (_0x164a24 > 3) << 1;
  _0x164a24 >>>= _0x2ee053;
  _0x586ee7 |= _0x2ee053;
  return _0x586ee7 | _0x164a24 >> 1;
};
exports.log10 = function (_0xf416aa) {
  if (_0xf416aa >= 1000000000) {
    return 9;
  } else if (_0xf416aa >= 100000000) {
    return 8;
  } else if (_0xf416aa >= 10000000) {
    return 7;
  } else if (_0xf416aa >= 1000000) {
    return 6;
  } else if (_0xf416aa >= 100000) {
    return 5;
  } else if (_0xf416aa >= 10000) {
    return 4;
  } else if (_0xf416aa >= 1000) {
    return 3;
  } else if (_0xf416aa >= 100) {
    return 2;
  } else if (_0xf416aa >= 10) {
    return 1;
  } else {
    return 0;
  }
};
exports.popCount = function (_0x54f135) {
  _0x54f135 = _0x54f135 - (_0x54f135 >>> 1 & 1431655765);
  _0x54f135 = (_0x54f135 & 858993459) + (_0x54f135 >>> 2 & 858993459);
  return (_0x54f135 + (_0x54f135 >>> 4) & 252645135) * 16843009 >>> 24;
};
function countTrailingZeros(_0x2efcb7) {
  var _0x2b4585 = 32;
  _0x2efcb7 &= -_0x2efcb7;
  if (_0x2efcb7) {
    _0x2b4585--;
  }
  if (_0x2efcb7 & 65535) {
    _0x2b4585 -= 16;
  }
  if (_0x2efcb7 & 16711935) {
    _0x2b4585 -= 8;
  }
  if (_0x2efcb7 & 252645135) {
    _0x2b4585 -= 4;
  }
  if (_0x2efcb7 & 858993459) {
    _0x2b4585 -= 2;
  }
  if (_0x2efcb7 & 1431655765) {
    _0x2b4585 -= 1;
  }
  return _0x2b4585;
}
exports.countTrailingZeros = countTrailingZeros;
exports.nextPow2 = function (_0x70d293) {
  _0x70d293 += _0x70d293 === 0;
  --_0x70d293;
  _0x70d293 |= _0x70d293 >>> 1;
  _0x70d293 |= _0x70d293 >>> 2;
  _0x70d293 |= _0x70d293 >>> 4;
  _0x70d293 |= _0x70d293 >>> 8;
  _0x70d293 |= _0x70d293 >>> 16;
  return _0x70d293 + 1;
};
exports.prevPow2 = function (_0x5e9584) {
  _0x5e9584 |= _0x5e9584 >>> 1;
  _0x5e9584 |= _0x5e9584 >>> 2;
  _0x5e9584 |= _0x5e9584 >>> 4;
  _0x5e9584 |= _0x5e9584 >>> 8;
  _0x5e9584 |= _0x5e9584 >>> 16;
  return _0x5e9584 - (_0x5e9584 >>> 1);
};
exports.parity = function (_0x322fe3) {
  _0x322fe3 ^= _0x322fe3 >>> 16;
  _0x322fe3 ^= _0x322fe3 >>> 8;
  _0x322fe3 ^= _0x322fe3 >>> 4;
  _0x322fe3 &= 15;
  return 27030 >>> _0x322fe3 & 1;
};
var REVERSE_TABLE = new Array(256);
(function (_0x2561a2) {
  for (var _0x41e7fa = 0; _0x41e7fa < 256; ++_0x41e7fa) {
    var _0x279952 = _0x41e7fa;
    var _0x4c1a61 = _0x41e7fa;
    var _0x279b77 = 7;
    for (_0x279952 >>>= 1; _0x279952; _0x279952 >>>= 1) {
      _0x4c1a61 <<= 1;
      _0x4c1a61 |= _0x279952 & 1;
      --_0x279b77;
    }
    _0x2561a2[_0x41e7fa] = _0x4c1a61 << _0x279b77 & 255;
  }
})(REVERSE_TABLE);
exports.reverse = function (_0x172937) {
  return REVERSE_TABLE[_0x172937 & 255] << 24 | REVERSE_TABLE[_0x172937 >>> 8 & 255] << 16 | REVERSE_TABLE[_0x172937 >>> 16 & 255] << 8 | REVERSE_TABLE[_0x172937 >>> 24 & 255];
};
exports.interleave2 = function (_0x414c07, _0x57f103) {
  _0x414c07 &= 65535;
  _0x414c07 = (_0x414c07 | _0x414c07 << 8) & 16711935;
  _0x414c07 = (_0x414c07 | _0x414c07 << 4) & 252645135;
  _0x414c07 = (_0x414c07 | _0x414c07 << 2) & 858993459;
  _0x414c07 = (_0x414c07 | _0x414c07 << 1) & 1431655765;
  _0x57f103 &= 65535;
  _0x57f103 = (_0x57f103 | _0x57f103 << 8) & 16711935;
  _0x57f103 = (_0x57f103 | _0x57f103 << 4) & 252645135;
  _0x57f103 = (_0x57f103 | _0x57f103 << 2) & 858993459;
  _0x57f103 = (_0x57f103 | _0x57f103 << 1) & 1431655765;
  return _0x414c07 | _0x57f103 << 1;
};
exports.deinterleave2 = function (_0x133c6c, _0x439ee2) {
  _0x133c6c = _0x133c6c >>> _0x439ee2 & 1431655765;
  _0x133c6c = (_0x133c6c | _0x133c6c >>> 1) & 858993459;
  _0x133c6c = (_0x133c6c | _0x133c6c >>> 2) & 252645135;
  _0x133c6c = (_0x133c6c | _0x133c6c >>> 4) & 16711935;
  _0x133c6c = (_0x133c6c | _0x133c6c >>> 16) & 65535;
  return _0x133c6c << 16 >> 16;
};
exports.interleave3 = function (_0x40e9f1, _0x2095b0, _0x40753b) {
  _0x40e9f1 &= 1023;
  _0x40e9f1 = (_0x40e9f1 | _0x40e9f1 << 16) & -16776961;
  _0x40e9f1 = (_0x40e9f1 | _0x40e9f1 << 8) & 251719695;
  _0x40e9f1 = (_0x40e9f1 | _0x40e9f1 << 4) & -1022611261;
  _0x40e9f1 = (_0x40e9f1 | _0x40e9f1 << 2) & 1227133513;
  _0x2095b0 &= 1023;
  _0x2095b0 = (_0x2095b0 | _0x2095b0 << 16) & -16776961;
  _0x2095b0 = (_0x2095b0 | _0x2095b0 << 8) & 251719695;
  _0x2095b0 = (_0x2095b0 | _0x2095b0 << 4) & -1022611261;
  _0x2095b0 = (_0x2095b0 | _0x2095b0 << 2) & 1227133513;
  _0x40e9f1 |= _0x2095b0 << 1;
  _0x40753b &= 1023;
  _0x40753b = (_0x40753b | _0x40753b << 16) & -16776961;
  _0x40753b = (_0x40753b | _0x40753b << 8) & 251719695;
  _0x40753b = (_0x40753b | _0x40753b << 4) & -1022611261;
  _0x40753b = (_0x40753b | _0x40753b << 2) & 1227133513;
  return _0x40e9f1 | _0x40753b << 2;
};
exports.deinterleave3 = function (_0x2b62e6, _0xc5fd6b) {
  _0x2b62e6 = _0x2b62e6 >>> _0xc5fd6b & 1227133513;
  _0x2b62e6 = (_0x2b62e6 | _0x2b62e6 >>> 2) & -1022611261;
  _0x2b62e6 = (_0x2b62e6 | _0x2b62e6 >>> 4) & 251719695;
  _0x2b62e6 = (_0x2b62e6 | _0x2b62e6 >>> 8) & -16776961;
  _0x2b62e6 = (_0x2b62e6 | _0x2b62e6 >>> 16) & 1023;
  return _0x2b62e6 << 22 >> 22;
};
exports.nextCombination = function (_0x1037bb) {
  var _0x1dfc2b = _0x1037bb | _0x1037bb - 1;
  return _0x1dfc2b + 1 | (~_0x1dfc2b & -~_0x1dfc2b) - 1 >>> countTrailingZeros(_0x1037bb) + 1;
};