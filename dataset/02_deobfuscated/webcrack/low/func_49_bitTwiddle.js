'use strict';

"use restrict";
var INT_BITS = 32;
exports.INT_BITS = INT_BITS;
exports.INT_MAX = 2147483647;
exports.INT_MIN = -1 << INT_BITS - 1;
exports.sign = function (_0x4788e7) {
  return (_0x4788e7 > 0) - (_0x4788e7 < 0);
};
exports.abs = function (_0xa9508a) {
  var _0x1b8701 = _0xa9508a >> INT_BITS - 1;
  return (_0xa9508a ^ _0x1b8701) - _0x1b8701;
};
exports.min = function (_0x573b10, _0x2dd4b5) {
  return _0x2dd4b5 ^ (_0x573b10 ^ _0x2dd4b5) & -(_0x573b10 < _0x2dd4b5);
};
exports.max = function (_0xc04168, _0xe73e62) {
  return _0xc04168 ^ (_0xc04168 ^ _0xe73e62) & -(_0xc04168 < _0xe73e62);
};
exports.isPow2 = function (_0x522d0a) {
  return !(_0x522d0a & _0x522d0a - 1) && !!_0x522d0a;
};
exports.log2 = function (_0x398e4d) {
  var _0x537585;
  var _0x40e7f5;
  _0x537585 = (_0x398e4d > 65535) << 4;
  _0x398e4d >>>= _0x537585;
  _0x40e7f5 = (_0x398e4d > 255) << 3;
  _0x398e4d >>>= _0x40e7f5;
  _0x537585 |= _0x40e7f5;
  _0x40e7f5 = (_0x398e4d > 15) << 2;
  _0x398e4d >>>= _0x40e7f5;
  _0x537585 |= _0x40e7f5;
  _0x40e7f5 = (_0x398e4d > 3) << 1;
  _0x398e4d >>>= _0x40e7f5;
  _0x537585 |= _0x40e7f5;
  return _0x537585 | _0x398e4d >> 1;
};
exports.log10 = function (_0x1f1039) {
  if (_0x1f1039 >= 1000000000) {
    return 9;
  } else if (_0x1f1039 >= 100000000) {
    return 8;
  } else if (_0x1f1039 >= 10000000) {
    return 7;
  } else if (_0x1f1039 >= 1000000) {
    return 6;
  } else if (_0x1f1039 >= 100000) {
    return 5;
  } else if (_0x1f1039 >= 10000) {
    return 4;
  } else if (_0x1f1039 >= 1000) {
    return 3;
  } else if (_0x1f1039 >= 100) {
    return 2;
  } else if (_0x1f1039 >= 10) {
    return 1;
  } else {
    return 0;
  }
};
exports.popCount = function (_0x3006c0) {
  _0x3006c0 = _0x3006c0 - (_0x3006c0 >>> 1 & 1431655765);
  _0x3006c0 = (_0x3006c0 & 858993459) + (_0x3006c0 >>> 2 & 858993459);
  return (_0x3006c0 + (_0x3006c0 >>> 4) & 252645135) * 16843009 >>> 24;
};
function countTrailingZeros(_0x42518a) {
  var _0x2623a7 = 32;
  _0x42518a &= -_0x42518a;
  if (_0x42518a) {
    _0x2623a7--;
  }
  if (_0x42518a & 65535) {
    _0x2623a7 -= 16;
  }
  if (_0x42518a & 16711935) {
    _0x2623a7 -= 8;
  }
  if (_0x42518a & 252645135) {
    _0x2623a7 -= 4;
  }
  if (_0x42518a & 858993459) {
    _0x2623a7 -= 2;
  }
  if (_0x42518a & 1431655765) {
    _0x2623a7 -= 1;
  }
  return _0x2623a7;
}
exports.countTrailingZeros = countTrailingZeros;
exports.nextPow2 = function (_0x5e34e2) {
  _0x5e34e2 += _0x5e34e2 === 0;
  --_0x5e34e2;
  _0x5e34e2 |= _0x5e34e2 >>> 1;
  _0x5e34e2 |= _0x5e34e2 >>> 2;
  _0x5e34e2 |= _0x5e34e2 >>> 4;
  _0x5e34e2 |= _0x5e34e2 >>> 8;
  _0x5e34e2 |= _0x5e34e2 >>> 16;
  return _0x5e34e2 + 1;
};
exports.prevPow2 = function (_0x239a67) {
  _0x239a67 |= _0x239a67 >>> 1;
  _0x239a67 |= _0x239a67 >>> 2;
  _0x239a67 |= _0x239a67 >>> 4;
  _0x239a67 |= _0x239a67 >>> 8;
  _0x239a67 |= _0x239a67 >>> 16;
  return _0x239a67 - (_0x239a67 >>> 1);
};
exports.parity = function (_0x8afd1c) {
  _0x8afd1c ^= _0x8afd1c >>> 16;
  _0x8afd1c ^= _0x8afd1c >>> 8;
  _0x8afd1c ^= _0x8afd1c >>> 4;
  _0x8afd1c &= 15;
  return 27030 >>> _0x8afd1c & 1;
};
var REVERSE_TABLE = new Array(256);
(function (_0x41ba28) {
  for (var _0x5872f9 = 0; _0x5872f9 < 256; ++_0x5872f9) {
    var _0x12ddcf = _0x5872f9;
    var _0x3ab684 = _0x5872f9;
    var _0x25cdae = 7;
    for (_0x12ddcf >>>= 1; _0x12ddcf; _0x12ddcf >>>= 1) {
      _0x3ab684 <<= 1;
      _0x3ab684 |= _0x12ddcf & 1;
      --_0x25cdae;
    }
    _0x41ba28[_0x5872f9] = _0x3ab684 << _0x25cdae & 255;
  }
})(REVERSE_TABLE);
exports.reverse = function (_0xc5e9e2) {
  return REVERSE_TABLE[_0xc5e9e2 & 255] << 24 | REVERSE_TABLE[_0xc5e9e2 >>> 8 & 255] << 16 | REVERSE_TABLE[_0xc5e9e2 >>> 16 & 255] << 8 | REVERSE_TABLE[_0xc5e9e2 >>> 24 & 255];
};
exports.interleave2 = function (_0x171601, _0x44fd99) {
  _0x171601 &= 65535;
  _0x171601 = (_0x171601 | _0x171601 << 8) & 16711935;
  _0x171601 = (_0x171601 | _0x171601 << 4) & 252645135;
  _0x171601 = (_0x171601 | _0x171601 << 2) & 858993459;
  _0x171601 = (_0x171601 | _0x171601 << 1) & 1431655765;
  _0x44fd99 &= 65535;
  _0x44fd99 = (_0x44fd99 | _0x44fd99 << 8) & 16711935;
  _0x44fd99 = (_0x44fd99 | _0x44fd99 << 4) & 252645135;
  _0x44fd99 = (_0x44fd99 | _0x44fd99 << 2) & 858993459;
  _0x44fd99 = (_0x44fd99 | _0x44fd99 << 1) & 1431655765;
  return _0x171601 | _0x44fd99 << 1;
};
exports.deinterleave2 = function (_0x447270, _0x3169b1) {
  _0x447270 = _0x447270 >>> _0x3169b1 & 1431655765;
  _0x447270 = (_0x447270 | _0x447270 >>> 1) & 858993459;
  _0x447270 = (_0x447270 | _0x447270 >>> 2) & 252645135;
  _0x447270 = (_0x447270 | _0x447270 >>> 4) & 16711935;
  _0x447270 = (_0x447270 | _0x447270 >>> 16) & 65535;
  return _0x447270 << 16 >> 16;
};
exports.interleave3 = function (_0x129de2, _0x40aead, _0x3ccff8) {
  _0x129de2 &= 1023;
  _0x129de2 = (_0x129de2 | _0x129de2 << 16) & -16776961;
  _0x129de2 = (_0x129de2 | _0x129de2 << 8) & 251719695;
  _0x129de2 = (_0x129de2 | _0x129de2 << 4) & -1022611261;
  _0x129de2 = (_0x129de2 | _0x129de2 << 2) & 1227133513;
  _0x40aead &= 1023;
  _0x40aead = (_0x40aead | _0x40aead << 16) & -16776961;
  _0x40aead = (_0x40aead | _0x40aead << 8) & 251719695;
  _0x40aead = (_0x40aead | _0x40aead << 4) & -1022611261;
  _0x40aead = (_0x40aead | _0x40aead << 2) & 1227133513;
  _0x129de2 |= _0x40aead << 1;
  _0x3ccff8 &= 1023;
  _0x3ccff8 = (_0x3ccff8 | _0x3ccff8 << 16) & -16776961;
  _0x3ccff8 = (_0x3ccff8 | _0x3ccff8 << 8) & 251719695;
  _0x3ccff8 = (_0x3ccff8 | _0x3ccff8 << 4) & -1022611261;
  _0x3ccff8 = (_0x3ccff8 | _0x3ccff8 << 2) & 1227133513;
  return _0x129de2 | _0x3ccff8 << 2;
};
exports.deinterleave3 = function (_0x4ae9c3, _0x271198) {
  _0x4ae9c3 = _0x4ae9c3 >>> _0x271198 & 1227133513;
  _0x4ae9c3 = (_0x4ae9c3 | _0x4ae9c3 >>> 2) & -1022611261;
  _0x4ae9c3 = (_0x4ae9c3 | _0x4ae9c3 >>> 4) & 251719695;
  _0x4ae9c3 = (_0x4ae9c3 | _0x4ae9c3 >>> 8) & -16776961;
  _0x4ae9c3 = (_0x4ae9c3 | _0x4ae9c3 >>> 16) & 1023;
  return _0x4ae9c3 << 22 >> 22;
};
exports.nextCombination = function (_0x341408) {
  var _0x4d4e0b = _0x341408 | _0x341408 - 1;
  return _0x4d4e0b + 1 | (~_0x4d4e0b & -~_0x4d4e0b) - 1 >>> countTrailingZeros(_0x341408) + 1;
};