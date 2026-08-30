function MersenneTwister(_0x3ee0f2) {
  if (_0x3ee0f2 == undefined) {
    _0x3ee0f2 = new Date().getTime();
  }
  this.N = 624;
  this.M = 397;
  this.MATRIX_A = 2567483615;
  this.UPPER_MASK = 2147483648;
  this.LOWER_MASK = 2147483647;
  this.mt = new Array(this.N);
  this.mti = this.N + 1;
  if (_0x3ee0f2.constructor == Array) {
    this.init_by_array(_0x3ee0f2, _0x3ee0f2.length);
  } else {
    this.init_seed(_0x3ee0f2);
  }
}
MersenneTwister.prototype.init_seed = function (_0x2e1ad2) {
  this.mt[0] = _0x2e1ad2 >>> 0;
  for (this.mti = 1; this.mti < this.N; this.mti++) {
    var _0x2e1ad2 = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30;
    this.mt[this.mti] = (((_0x2e1ad2 & -65536) >>> 16) * 1812433253 << 16) + (_0x2e1ad2 & 65535) * 1812433253 + this.mti;
    this.mt[this.mti] >>>= 0;
  }
};
MersenneTwister.prototype.init_by_array = function (_0x1ed712, _0x5ba005) {
  var _0x288f79;
  var _0x53e1f0;
  var _0x5f1765;
  this.init_seed(19650218);
  _0x288f79 = 1;
  _0x53e1f0 = 0;
  _0x5f1765 = this.N > _0x5ba005 ? this.N : _0x5ba005;
  for (; _0x5f1765; _0x5f1765--) {
    var _0x358f05 = this.mt[_0x288f79 - 1] ^ this.mt[_0x288f79 - 1] >>> 30;
    this.mt[_0x288f79] = (this.mt[_0x288f79] ^ (((_0x358f05 & -65536) >>> 16) * 1664525 << 16) + (_0x358f05 & 65535) * 1664525) + _0x1ed712[_0x53e1f0] + _0x53e1f0;
    this.mt[_0x288f79] >>>= 0;
    _0x288f79++;
    _0x53e1f0++;
    if (_0x288f79 >= this.N) {
      this.mt[0] = this.mt[this.N - 1];
      _0x288f79 = 1;
    }
    if (_0x53e1f0 >= _0x5ba005) {
      _0x53e1f0 = 0;
    }
  }
  for (_0x5f1765 = this.N - 1; _0x5f1765; _0x5f1765--) {
    var _0x358f05 = this.mt[_0x288f79 - 1] ^ this.mt[_0x288f79 - 1] >>> 30;
    this.mt[_0x288f79] = (this.mt[_0x288f79] ^ (((_0x358f05 & -65536) >>> 16) * 1566083941 << 16) + (_0x358f05 & 65535) * 1566083941) - _0x288f79;
    this.mt[_0x288f79] >>>= 0;
    _0x288f79++;
    if (_0x288f79 >= this.N) {
      this.mt[0] = this.mt[this.N - 1];
      _0x288f79 = 1;
    }
  }
  this.mt[0] = 2147483648;
};
MersenneTwister.prototype.random_int = function () {
  var _0x2fdaa4;
  var _0x246ad5 = new Array(0, this.MATRIX_A);
  if (this.mti >= this.N) {
    var _0x2a1b55;
    if (this.mti == this.N + 1) {
      this.init_seed(5489);
    }
    for (_0x2a1b55 = 0; _0x2a1b55 < this.N - this.M; _0x2a1b55++) {
      _0x2fdaa4 = this.mt[_0x2a1b55] & this.UPPER_MASK | this.mt[_0x2a1b55 + 1] & this.LOWER_MASK;
      this.mt[_0x2a1b55] = this.mt[_0x2a1b55 + this.M] ^ _0x2fdaa4 >>> 1 ^ _0x246ad5[_0x2fdaa4 & 1];
    }
    for (; _0x2a1b55 < this.N - 1; _0x2a1b55++) {
      _0x2fdaa4 = this.mt[_0x2a1b55] & this.UPPER_MASK | this.mt[_0x2a1b55 + 1] & this.LOWER_MASK;
      this.mt[_0x2a1b55] = this.mt[_0x2a1b55 + (this.M - this.N)] ^ _0x2fdaa4 >>> 1 ^ _0x246ad5[_0x2fdaa4 & 1];
    }
    _0x2fdaa4 = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK;
    this.mt[this.N - 1] = this.mt[this.M - 1] ^ _0x2fdaa4 >>> 1 ^ _0x246ad5[_0x2fdaa4 & 1];
    this.mti = 0;
  }
  _0x2fdaa4 = this.mt[this.mti++];
  _0x2fdaa4 ^= _0x2fdaa4 >>> 11;
  _0x2fdaa4 ^= _0x2fdaa4 << 7 & -1658038656;
  _0x2fdaa4 ^= _0x2fdaa4 << 15 & -272236544;
  _0x2fdaa4 ^= _0x2fdaa4 >>> 18;
  return _0x2fdaa4 >>> 0;
};
MersenneTwister.prototype.random_int31 = function () {
  return this.random_int() >>> 1;
};
MersenneTwister.prototype.random_incl = function () {
  return this.random_int() * (1 / 4294967295);
};
MersenneTwister.prototype.random = function () {
  return this.random_int() * (1 / 4294967296);
};
MersenneTwister.prototype.random_excl = function () {
  return (this.random_int() + 0.5) * (1 / 4294967296);
};
MersenneTwister.prototype.random_long = function () {
  var _0x162463 = this.random_int() >>> 5;
  var _0x3fda88 = this.random_int() >>> 6;
  return (_0x162463 * 67108864 + _0x3fda88) * (1 / 9007199254740992);
};
module.exports = MersenneTwister;