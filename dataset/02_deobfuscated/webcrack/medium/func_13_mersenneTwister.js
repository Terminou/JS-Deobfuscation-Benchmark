function MersenneTwister(_0x30ecc3) {
  if (_0x30ecc3 == undefined) {
    _0x30ecc3 = new Date().getTime();
  }
  this.N = 624;
  this.M = 397;
  this.MATRIX_A = 2567483615;
  this.UPPER_MASK = 2147483648;
  this.LOWER_MASK = 2147483647;
  this.mt = new Array(this.N);
  this.mti = this.N + 1;
  if (_0x30ecc3.constructor == Array) {
    this.init_by_array(_0x30ecc3, _0x30ecc3.length);
  } else {
    this.init_seed(_0x30ecc3);
  }
}
MersenneTwister.prototype.init_seed = function (_0xd5f5e1) {
  this.mt[0] = _0xd5f5e1 >>> 0;
  for (this.mti = 1; this.mti < this.N; this.mti++) {
    var _0xd5f5e1 = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30;
    this.mt[this.mti] = (((_0xd5f5e1 & -65536) >>> 16) * 1812433253 << 16) + (_0xd5f5e1 & 65535) * 1812433253 + this.mti;
    this.mt[this.mti] >>>= 0;
  }
};
MersenneTwister.prototype.init_by_array = function (_0x2208d3, _0x379c09) {
  var _0x513733;
  var _0x4c0085;
  var _0xf443c3;
  this.init_seed(19650218);
  _0x513733 = 1;
  _0x4c0085 = 0;
  _0xf443c3 = this.N > _0x379c09 ? this.N : _0x379c09;
  for (; _0xf443c3; _0xf443c3--) {
    var _0x59223b = this.mt[_0x513733 - 1] ^ this.mt[_0x513733 - 1] >>> 30;
    this.mt[_0x513733] = (this.mt[_0x513733] ^ (((_0x59223b & -65536) >>> 16) * 1664525 << 16) + (_0x59223b & 65535) * 1664525) + _0x2208d3[_0x4c0085] + _0x4c0085;
    this.mt[_0x513733] >>>= 0;
    _0x513733++;
    _0x4c0085++;
    if (_0x513733 >= this.N) {
      this.mt[0] = this.mt[this.N - 1];
      _0x513733 = 1;
    }
    if (_0x4c0085 >= _0x379c09) {
      _0x4c0085 = 0;
    }
  }
  for (_0xf443c3 = this.N - 1; _0xf443c3; _0xf443c3--) {
    var _0x59223b = this.mt[_0x513733 - 1] ^ this.mt[_0x513733 - 1] >>> 30;
    this.mt[_0x513733] = (this.mt[_0x513733] ^ (((_0x59223b & -65536) >>> 16) * 1566083941 << 16) + (_0x59223b & 65535) * 1566083941) - _0x513733;
    this.mt[_0x513733] >>>= 0;
    _0x513733++;
    if (_0x513733 >= this.N) {
      this.mt[0] = this.mt[this.N - 1];
      _0x513733 = 1;
    }
  }
  this.mt[0] = 2147483648;
};
MersenneTwister.prototype.random_int = function () {
  var _0x50d4c0;
  var _0x47e560 = new Array(0, this.MATRIX_A);
  if (this.mti >= this.N) {
    var _0x373188;
    if (this.mti == this.N + 1) {
      this.init_seed(5489);
    }
    for (_0x373188 = 0; _0x373188 < this.N - this.M; _0x373188++) {
      _0x50d4c0 = this.mt[_0x373188] & this.UPPER_MASK | this.mt[_0x373188 + 1] & this.LOWER_MASK;
      this.mt[_0x373188] = this.mt[_0x373188 + this.M] ^ _0x50d4c0 >>> 1 ^ _0x47e560[_0x50d4c0 & 1];
    }
    for (; _0x373188 < this.N - 1; _0x373188++) {
      _0x50d4c0 = this.mt[_0x373188] & this.UPPER_MASK | this.mt[_0x373188 + 1] & this.LOWER_MASK;
      this.mt[_0x373188] = this.mt[_0x373188 + (this.M - this.N)] ^ _0x50d4c0 >>> 1 ^ _0x47e560[_0x50d4c0 & 1];
    }
    _0x50d4c0 = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK;
    this.mt[this.N - 1] = this.mt[this.M - 1] ^ _0x50d4c0 >>> 1 ^ _0x47e560[_0x50d4c0 & 1];
    this.mti = 0;
  }
  _0x50d4c0 = this.mt[this.mti++];
  _0x50d4c0 ^= _0x50d4c0 >>> 11;
  _0x50d4c0 ^= _0x50d4c0 << 7 & -1658038656;
  _0x50d4c0 ^= _0x50d4c0 << 15 & -272236544;
  _0x50d4c0 ^= _0x50d4c0 >>> 18;
  return _0x50d4c0 >>> 0;
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
  var _0x18b5a5 = this.random_int() >>> 5;
  var _0x3727b6 = this.random_int() >>> 6;
  return (_0x18b5a5 * 67108864 + _0x3727b6) * (1 / 9007199254740992);
};
module.exports = MersenneTwister;