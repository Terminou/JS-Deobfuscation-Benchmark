"use strict";
var _0x53816d = _0x78d4;
function _0x78d4(_0xacd32c, _0x488fe6) {
  _0xacd32c = _0xacd32c - 380;
  var _0xd13c07 = _0xd13c();
  var _0x78d44e = _0xd13c07[_0xacd32c];
  return _0x78d44e;
}
(function (_0x1e518c, _0x40beb2) {
  var _0x362bcf = _0x78d4, _0x3c10aa = _0x1e518c();
  while (true) {
    try {
      var _0x256ebd = parseInt(_0x362bcf(380)) / 1 + parseInt(_0x362bcf(393)) / 2 * (-parseInt(_0x362bcf(384)) / 3) + -parseInt(_0x362bcf(387)) / 4 + -parseInt(_0x362bcf(396)) / 5 + -parseInt(_0x362bcf(391)) / 6 * (parseInt(_0x362bcf(401)) / 7) + -parseInt(_0x362bcf(390)) / 8 * (parseInt(_0x362bcf(389)) / 9) + parseInt(_0x362bcf(388)) / 10;
      if (_0x256ebd === _0x40beb2) break; else _0x3c10aa.push(_0x3c10aa.shift());
    } catch (_0x50f3f1) {
      _0x3c10aa.push(_0x3c10aa.shift());
    }
  }
}(_0xd13c, 981600));
"use restrict";
var INT_BITS = 32;
function _0xd13c() {
  var _0x39b5a5 = ["206433sBFFQM", "144jWVmFO", "93102TLqDZM", "isPow2", "568ARTDdG", "sign", "min", "6036135NAFuaJ", "prevPow2", "max", "INT_BITS", "countTrailingZeros", "42WKHCwe", "popCount", "interleave2", "nextPow2", "log10", "804742HRRsTP", "log2", "deinterleave2", "INT_MAX", "93VCAxIk", "reverse", "deinterleave3", "516372FHLkGA", "20279500cbhbRz"];
  _0xd13c = function () {
    return _0x39b5a5;
  };
  return _0xd13c();
}
exports[_0x53816d(399)] = INT_BITS, exports[_0x53816d(383)] = 2147483647, exports.INT_MIN = -1 << INT_BITS - 1, exports[_0x53816d(394)] = function (_0x4788e7) {
  return (_0x4788e7 > 0) - (_0x4788e7 < 0);
}, exports.abs = function (_0xa9508a) {
  var _0x1b8701 = _0xa9508a >> INT_BITS - 1;
  return (_0xa9508a ^ _0x1b8701) - _0x1b8701;
}, exports[_0x53816d(395)] = function (_0x573b10, _0x2dd4b5) {
  return _0x2dd4b5 ^ (_0x573b10 ^ _0x2dd4b5) & -(_0x573b10 < _0x2dd4b5);
}, exports[_0x53816d(398)] = function (_0xc04168, _0xe73e62) {
  return _0xc04168 ^ (_0xc04168 ^ _0xe73e62) & -(_0xc04168 < _0xe73e62);
}, exports[_0x53816d(392)] = function (_0x522d0a) {
  return !(_0x522d0a & _0x522d0a - 1) && !!_0x522d0a;
}, exports[_0x53816d(381)] = function (_0x398e4d) {
  var _0x537585, _0x40e7f5;
  return _0x537585 = (_0x398e4d > 65535) << 4, _0x398e4d >>>= _0x537585, _0x40e7f5 = (_0x398e4d > 255) << 3, _0x398e4d >>>= _0x40e7f5, _0x537585 |= _0x40e7f5, _0x40e7f5 = (_0x398e4d > 15) << 2, _0x398e4d >>>= _0x40e7f5, _0x537585 |= _0x40e7f5, _0x40e7f5 = (_0x398e4d > 3) << 1, _0x398e4d >>>= _0x40e7f5, _0x537585 |= _0x40e7f5, _0x537585 | _0x398e4d >> 1;
}, exports[_0x53816d(405)] = function (_0x1f1039) {
  return _0x1f1039 >= 1e9 ? 9 : _0x1f1039 >= 1e8 ? 8 : _0x1f1039 >= 1e7 ? 7 : _0x1f1039 >= 1e6 ? 6 : _0x1f1039 >= 1e5 ? 5 : _0x1f1039 >= 1e4 ? 4 : _0x1f1039 >= 1e3 ? 3 : _0x1f1039 >= 100 ? 2 : _0x1f1039 >= 10 ? 1 : 0;
}, exports[_0x53816d(402)] = function (_0x3006c0) {
  return _0x3006c0 = _0x3006c0 - (_0x3006c0 >>> 1 & 1431655765), _0x3006c0 = (_0x3006c0 & 858993459) + (_0x3006c0 >>> 2 & 858993459), (_0x3006c0 + (_0x3006c0 >>> 4) & 252645135) * 16843009 >>> 24;
};
function countTrailingZeros(_0x42518a) {
  var _0x2623a7 = 32;
  _0x42518a &= -_0x42518a;
  if (_0x42518a) _0x2623a7--;
  if (_0x42518a & 65535) _0x2623a7 -= 16;
  if (_0x42518a & 16711935) _0x2623a7 -= 8;
  if (_0x42518a & 252645135) _0x2623a7 -= 4;
  if (_0x42518a & 858993459) _0x2623a7 -= 2;
  if (_0x42518a & 1431655765) _0x2623a7 -= 1;
  return _0x2623a7;
}
exports[_0x53816d(400)] = countTrailingZeros, exports[_0x53816d(404)] = function (_0x5e34e2) {
  return _0x5e34e2 += _0x5e34e2 === 0, --_0x5e34e2, _0x5e34e2 |= _0x5e34e2 >>> 1, _0x5e34e2 |= _0x5e34e2 >>> 2, _0x5e34e2 |= _0x5e34e2 >>> 4, _0x5e34e2 |= _0x5e34e2 >>> 8, _0x5e34e2 |= _0x5e34e2 >>> 16, _0x5e34e2 + 1;
}, exports[_0x53816d(397)] = function (_0x239a67) {
  return _0x239a67 |= _0x239a67 >>> 1, _0x239a67 |= _0x239a67 >>> 2, _0x239a67 |= _0x239a67 >>> 4, _0x239a67 |= _0x239a67 >>> 8, _0x239a67 |= _0x239a67 >>> 16, _0x239a67 - (_0x239a67 >>> 1);
}, exports.parity = function (_0x8afd1c) {
  return _0x8afd1c ^= _0x8afd1c >>> 16, _0x8afd1c ^= _0x8afd1c >>> 8, _0x8afd1c ^= _0x8afd1c >>> 4, _0x8afd1c &= 15, 27030 >>> _0x8afd1c & 1;
};
var REVERSE_TABLE = new Array(256);
(function (_0x41ba28) {
  for (var _0x5872f9 = 0; _0x5872f9 < 256; ++_0x5872f9) {
    var _0x12ddcf = _0x5872f9, _0x3ab684 = _0x5872f9, _0x25cdae = 7;
    for (_0x12ddcf >>>= 1; _0x12ddcf; _0x12ddcf >>>= 1) {
      _0x3ab684 <<= 1, _0x3ab684 |= _0x12ddcf & 1, --_0x25cdae;
    }
    _0x41ba28[_0x5872f9] = _0x3ab684 << _0x25cdae & 255;
  }
}(REVERSE_TABLE), exports[_0x53816d(385)] = function (_0xc5e9e2) {
  return REVERSE_TABLE[_0xc5e9e2 & 255] << 24 | REVERSE_TABLE[_0xc5e9e2 >>> 8 & 255] << 16 | REVERSE_TABLE[_0xc5e9e2 >>> 16 & 255] << 8 | REVERSE_TABLE[_0xc5e9e2 >>> 24 & 255];
}, exports[_0x53816d(403)] = function (_0x171601, _0x44fd99) {
  return _0x171601 &= 65535, _0x171601 = (_0x171601 | _0x171601 << 8) & 16711935, _0x171601 = (_0x171601 | _0x171601 << 4) & 252645135, _0x171601 = (_0x171601 | _0x171601 << 2) & 858993459, _0x171601 = (_0x171601 | _0x171601 << 1) & 1431655765, _0x44fd99 &= 65535, _0x44fd99 = (_0x44fd99 | _0x44fd99 << 8) & 16711935, _0x44fd99 = (_0x44fd99 | _0x44fd99 << 4) & 252645135, _0x44fd99 = (_0x44fd99 | _0x44fd99 << 2) & 858993459, _0x44fd99 = (_0x44fd99 | _0x44fd99 << 1) & 1431655765, _0x171601 | _0x44fd99 << 1;
}, exports[_0x53816d(382)] = function (_0x447270, _0x3169b1) {
  return _0x447270 = _0x447270 >>> _0x3169b1 & 1431655765, _0x447270 = (_0x447270 | _0x447270 >>> 1) & 858993459, _0x447270 = (_0x447270 | _0x447270 >>> 2) & 252645135, _0x447270 = (_0x447270 | _0x447270 >>> 4) & 16711935, _0x447270 = (_0x447270 | _0x447270 >>> 16) & 65535, _0x447270 << 16 >> 16;
}, exports.interleave3 = function (_0x129de2, _0x40aead, _0x3ccff8) {
  return _0x129de2 &= 1023, _0x129de2 = (_0x129de2 | _0x129de2 << 16) & 4278190335, _0x129de2 = (_0x129de2 | _0x129de2 << 8) & 251719695, _0x129de2 = (_0x129de2 | _0x129de2 << 4) & 3272356035, _0x129de2 = (_0x129de2 | _0x129de2 << 2) & 1227133513, _0x40aead &= 1023, _0x40aead = (_0x40aead | _0x40aead << 16) & 4278190335, _0x40aead = (_0x40aead | _0x40aead << 8) & 251719695, _0x40aead = (_0x40aead | _0x40aead << 4) & 3272356035, _0x40aead = (_0x40aead | _0x40aead << 2) & 1227133513, _0x129de2 |= _0x40aead << 1, _0x3ccff8 &= 1023, _0x3ccff8 = (_0x3ccff8 | _0x3ccff8 << 16) & 4278190335, _0x3ccff8 = (_0x3ccff8 | _0x3ccff8 << 8) & 251719695, _0x3ccff8 = (_0x3ccff8 | _0x3ccff8 << 4) & 3272356035, _0x3ccff8 = (_0x3ccff8 | _0x3ccff8 << 2) & 1227133513, _0x129de2 | _0x3ccff8 << 2;
}, exports[_0x53816d(386)] = function (_0x4ae9c3, _0x271198) {
  return _0x4ae9c3 = _0x4ae9c3 >>> _0x271198 & 1227133513, _0x4ae9c3 = (_0x4ae9c3 | _0x4ae9c3 >>> 2) & 3272356035, _0x4ae9c3 = (_0x4ae9c3 | _0x4ae9c3 >>> 4) & 251719695, _0x4ae9c3 = (_0x4ae9c3 | _0x4ae9c3 >>> 8) & 4278190335, _0x4ae9c3 = (_0x4ae9c3 | _0x4ae9c3 >>> 16) & 1023, _0x4ae9c3 << 22 >> 22;
}, exports.nextCombination = function (_0x341408) {
  var _0x4d4e0b = _0x341408 | _0x341408 - 1;
  return _0x4d4e0b + 1 | (~_0x4d4e0b & -~_0x4d4e0b) - 1 >>> countTrailingZeros(_0x341408) + 1;
});
