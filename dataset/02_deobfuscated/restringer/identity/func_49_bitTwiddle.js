'use strict';
'use restrict';
var INT_BITS = 32;
exports.INT_BITS = 32;
exports.INT_MAX = 2147483647;
exports.INT_MIN = -'2147483648';
exports.sign = function (_0xacd32c) {
  return (_0xacd32c > 0) - (_0xacd32c < 0);
};
exports.abs = function (_0x488fe6) {
  var _0xd13c07 = _0x488fe6 >> 31;
  return (_0x488fe6 ^ _0xd13c07) - _0xd13c07;
};
exports.min = function (_0x78d44e, _0x2ac352) {
  return _0x2ac352 ^ (_0x78d44e ^ _0x2ac352) & -(_0x78d44e < _0x2ac352);
};
exports.max = function (_0x1ac3cd, _0x45458e) {
  return _0x1ac3cd ^ (_0x1ac3cd ^ _0x45458e) & -(_0x1ac3cd < _0x45458e);
};
exports.isPow2 = function (_0x4599bd) {
  return !(_0x4599bd & _0x4599bd - 1) && !!_0x4599bd;
};
exports.log2 = function (_0x4e54f8) {
  var _0x34abc6;
  var _0x4788e7;
  _0x34abc6 = (_0x4e54f8 > 65535) << 4;
  _0x4e54f8 >>>= _0x34abc6;
  _0x4788e7 = (_0x4e54f8 > 255) << 3;
  _0x4e54f8 >>>= _0x4788e7;
  _0x34abc6 |= _0x4788e7;
  _0x4788e7 = (_0x4e54f8 > 15) << 2;
  _0x4e54f8 >>>= _0x4788e7;
  _0x34abc6 |= _0x4788e7;
  _0x4788e7 = (_0x4e54f8 > 3) << 1;
  _0x4e54f8 >>>= _0x4788e7;
  _0x34abc6 |= _0x4788e7;
  return _0x34abc6 | _0x4e54f8 >> 1;
};
exports.log10 = function (_0xa9508a) {
  return _0xa9508a >= 1000000000 ? 9 : _0xa9508a >= 100000000 ? 8 : _0xa9508a >= 10000000 ? 7 : _0xa9508a >= 1000000 ? 6 : _0xa9508a >= 100000 ? 5 : _0xa9508a >= 10000 ? 4 : _0xa9508a >= 1000 ? 3 : _0xa9508a >= 100 ? 2 : _0xa9508a >= 10 ? 1 : 0;
};
exports.popCount = function (_0x1b8701) {
  _0x1b8701 = _0x1b8701 - (_0x1b8701 >>> 1 & 1431655765);
  _0x1b8701 = (_0x1b8701 & 858993459) + (_0x1b8701 >>> 2 & 858993459);
  return (_0x1b8701 + (_0x1b8701 >>> 4) & 252645135) * 16843009 >>> 24;
};
function countTrailingZeros(_0x573b10) {
  var _0x2dd4b5 = 32;
  _0x573b10 &= -_0x573b10;
  if (_0x573b10)
    _0x2dd4b5--;
  if (_0x573b10 & 65535)
    _0x2dd4b5 -= 16;
  if (_0x573b10 & 16711935)
    _0x2dd4b5 -= 8;
  if (_0x573b10 & 252645135)
    _0x2dd4b5 -= 4;
  if (_0x573b10 & 858993459)
    _0x2dd4b5 -= 2;
  if (_0x573b10 & 1431655765)
    _0x2dd4b5 -= 1;
  return _0x2dd4b5;
}
exports.countTrailingZeros = countTrailingZeros;
exports.nextPow2 = function (_0xc04168) {
  _0xc04168 += _0xc04168 === 0;
  --_0xc04168;
  _0xc04168 |= _0xc04168 >>> 1;
  _0xc04168 |= _0xc04168 >>> 2;
  _0xc04168 |= _0xc04168 >>> 4;
  _0xc04168 |= _0xc04168 >>> 8;
  _0xc04168 |= _0xc04168 >>> 16;
  return _0xc04168 + 1;
};
exports.prevPow2 = function (_0xe73e62) {
  _0xe73e62 |= _0xe73e62 >>> 1;
  _0xe73e62 |= _0xe73e62 >>> 2;
  _0xe73e62 |= _0xe73e62 >>> 4;
  _0xe73e62 |= _0xe73e62 >>> 8;
  _0xe73e62 |= _0xe73e62 >>> 16;
  return _0xe73e62 - (_0xe73e62 >>> 1);
};
exports.parity = function (_0x522d0a) {
  _0x522d0a ^= _0x522d0a >>> 16;
  _0x522d0a ^= _0x522d0a >>> 8;
  _0x522d0a ^= _0x522d0a >>> 4;
  _0x522d0a &= 15;
  return 27030 >>> _0x522d0a & 1;
};
var REVERSE_TABLE = new Array(256);
(function (_0x398e4d) {
  for (var _0x537585 = 0; _0x537585 < 256; ++_0x537585) {
    var _0x40e7f5 = _0x537585;
    var _0x1f1039 = _0x537585;
    var _0x3006c0 = 7;
    for (_0x40e7f5 >>>= 1; _0x40e7f5; _0x40e7f5 >>>= 1) {
      _0x1f1039 <<= 1;
      _0x1f1039 |= _0x40e7f5 & 1;
      --_0x3006c0;
    }
    _0x398e4d[_0x537585] = _0x1f1039 << _0x3006c0 & 255;
  }
}(REVERSE_TABLE));
exports.reverse = function (_0x42518a) {
  return REVERSE_TABLE[_0x42518a & 255] << 24 | REVERSE_TABLE[_0x42518a >>> 8 & 255] << 16 | REVERSE_TABLE[_0x42518a >>> 16 & 255] << 8 | REVERSE_TABLE[_0x42518a >>> 24 & 255];
};
exports.interleave2 = function (_0x2623a7, _0x5e34e2) {
  _0x2623a7 &= 65535;
  _0x2623a7 = (_0x2623a7 | _0x2623a7 << 8) & 16711935;
  _0x2623a7 = (_0x2623a7 | _0x2623a7 << 4) & 252645135;
  _0x2623a7 = (_0x2623a7 | _0x2623a7 << 2) & 858993459;
  _0x2623a7 = (_0x2623a7 | _0x2623a7 << 1) & 1431655765;
  _0x5e34e2 &= 65535;
  _0x5e34e2 = (_0x5e34e2 | _0x5e34e2 << 8) & 16711935;
  _0x5e34e2 = (_0x5e34e2 | _0x5e34e2 << 4) & 252645135;
  _0x5e34e2 = (_0x5e34e2 | _0x5e34e2 << 2) & 858993459;
  _0x5e34e2 = (_0x5e34e2 | _0x5e34e2 << 1) & 1431655765;
  return _0x2623a7 | _0x5e34e2 << 1;
};
exports.deinterleave2 = function (_0x239a67, _0x8afd1c) {
  _0x239a67 = _0x239a67 >>> _0x8afd1c & 1431655765;
  _0x239a67 = (_0x239a67 | _0x239a67 >>> 1) & 858993459;
  _0x239a67 = (_0x239a67 | _0x239a67 >>> 2) & 252645135;
  _0x239a67 = (_0x239a67 | _0x239a67 >>> 4) & 16711935;
  _0x239a67 = (_0x239a67 | _0x239a67 >>> 16) & 65535;
  return _0x239a67 << 16 >> 16;
};
exports.interleave3 = function (_0x41ba28, _0x5872f9, _0x12ddcf) {
  _0x41ba28 &= 1023;
  _0x41ba28 = (_0x41ba28 | _0x41ba28 << 16) & 4278190335;
  _0x41ba28 = (_0x41ba28 | _0x41ba28 << 8) & 251719695;
  _0x41ba28 = (_0x41ba28 | _0x41ba28 << 4) & 3272356035;
  _0x41ba28 = (_0x41ba28 | _0x41ba28 << 2) & 1227133513;
  _0x5872f9 &= 1023;
  _0x5872f9 = (_0x5872f9 | _0x5872f9 << 16) & 4278190335;
  _0x5872f9 = (_0x5872f9 | _0x5872f9 << 8) & 251719695;
  _0x5872f9 = (_0x5872f9 | _0x5872f9 << 4) & 3272356035;
  _0x5872f9 = (_0x5872f9 | _0x5872f9 << 2) & 1227133513;
  _0x41ba28 |= _0x5872f9 << 1;
  _0x12ddcf &= 1023;
  _0x12ddcf = (_0x12ddcf | _0x12ddcf << 16) & 4278190335;
  _0x12ddcf = (_0x12ddcf | _0x12ddcf << 8) & 251719695;
  _0x12ddcf = (_0x12ddcf | _0x12ddcf << 4) & 3272356035;
  _0x12ddcf = (_0x12ddcf | _0x12ddcf << 2) & 1227133513;
  return _0x41ba28 | _0x12ddcf << 2;
};
exports.deinterleave3 = function (_0x3ab684, _0x25cdae) {
  _0x3ab684 = _0x3ab684 >>> _0x25cdae & 1227133513;
  _0x3ab684 = (_0x3ab684 | _0x3ab684 >>> 2) & 3272356035;
  _0x3ab684 = (_0x3ab684 | _0x3ab684 >>> 4) & 251719695;
  _0x3ab684 = (_0x3ab684 | _0x3ab684 >>> 8) & 4278190335;
  _0x3ab684 = (_0x3ab684 | _0x3ab684 >>> 16) & 1023;
  return _0x3ab684 << 22 >> 22;
};
exports.nextCombination = function (_0xc5e9e2) {
  var _0x171601 = _0xc5e9e2 | _0xc5e9e2 - 1;
  return _0x171601 + 1 | (~_0x171601 & -~_0x171601) - 1 >>> countTrailingZeros(_0xc5e9e2) + 1;
};