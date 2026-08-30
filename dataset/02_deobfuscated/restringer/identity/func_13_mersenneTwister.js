var MersenneTwister = function (_0x5b11d3) {
  if (_0x5b11d3 == undefined) {
    _0x5b11d3 = new Date().getTime();
  }
  this.N = 624;
  this.M = 397;
  this.MATRIX_A = 2567483615;
  this.UPPER_MASK = 2147483648;
  this.LOWER_MASK = 2147483647;
  this.mt = new Array(this.N);
  this.mti = this.N + 1;
  if (_0x5b11d3.constructor == Array) {
    this.init_by_array(_0x5b11d3, _0x5b11d3.length);
  } else {
    this.init_seed(_0x5b11d3);
  }
};
MersenneTwister.prototype.init_seed = function (_0x353e2e) {
  this.mt[0] = _0x353e2e >>> 0;
  for (this.mti = 1; this.mti < this.N; this.mti++) {
    var _0x353e2e = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30;
    this.mt[this.mti] = (((_0x353e2e & 4294901760) >>> 16) * 1812433253 << 16) + (_0x353e2e & 65535) * 1812433253 + this.mti;
    this.mt[this.mti] >>>= 0;
  }
};
MersenneTwister.prototype.init_by_array = function (_0x4f182f, _0x8e428f) {
  var _0x1b009c;
  var _0x706ce9;
  var _0x2902ef;
  this.init_seed(19650218);
  _0x1b009c = 1;
  _0x706ce9 = 0;
  _0x2902ef = this.N > _0x8e428f ? this.N : _0x8e428f;
  for (; _0x2902ef; _0x2902ef--) {
    var _0xb1c964 = this.mt[_0x1b009c - 1] ^ this.mt[_0x1b009c - 1] >>> 30;
    this.mt[_0x1b009c] = (this.mt[_0x1b009c] ^ (((_0xb1c964 & 4294901760) >>> 16) * 1664525 << 16) + (_0xb1c964 & 65535) * 1664525) + _0x4f182f[_0x706ce9] + _0x706ce9;
    this.mt[_0x1b009c] >>>= 0;
    _0x1b009c++;
    _0x706ce9++;
    if (_0x1b009c >= this.N) {
      this.mt[0] = this.mt[this.N - 1];
      _0x1b009c = 1;
    }
    if (_0x706ce9 >= _0x8e428f)
      _0x706ce9 = 0;
  }
  for (_0x2902ef = this.N - 1; _0x2902ef; _0x2902ef--) {
    var _0xb1c964 = this.mt[_0x1b009c - 1] ^ this.mt[_0x1b009c - 1] >>> 30;
    this.mt[_0x1b009c] = (this.mt[_0x1b009c] ^ (((_0xb1c964 & 4294901760) >>> 16) * 1566083941 << 16) + (_0xb1c964 & 65535) * 1566083941) - _0x1b009c;
    this.mt[_0x1b009c] >>>= 0;
    _0x1b009c++;
    if (_0x1b009c >= this.N) {
      this.mt[0] = this.mt[this.N - 1];
      _0x1b009c = 1;
    }
  }
  this.mt[0] = 2147483648;
};
MersenneTwister.prototype.random_int = function () {
  var _0xf31b2d;
  var _0x317efa = new Array(0, this.MATRIX_A);
  if (this.mti >= this.N) {
    var _0x3ee0f2;
    if (this.mti == this.N + 1)
      this.init_seed(5489);
    for (_0x3ee0f2 = 0; _0x3ee0f2 < this.N - this.M; _0x3ee0f2++) {
      _0xf31b2d = this.mt[_0x3ee0f2] & this.UPPER_MASK | this.mt[_0x3ee0f2 + 1] & this.LOWER_MASK;
      this.mt[_0x3ee0f2] = this.mt[_0x3ee0f2 + this.M] ^ _0xf31b2d >>> 1 ^ _0x317efa[_0xf31b2d & 1];
    }
    for (; _0x3ee0f2 < this.N - 1; _0x3ee0f2++) {
      _0xf31b2d = this.mt[_0x3ee0f2] & this.UPPER_MASK | this.mt[_0x3ee0f2 + 1] & this.LOWER_MASK;
      this.mt[_0x3ee0f2] = this.mt[_0x3ee0f2 + (this.M - this.N)] ^ _0xf31b2d >>> 1 ^ _0x317efa[_0xf31b2d & 1];
    }
    _0xf31b2d = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK;
    this.mt[this.N - 1] = this.mt[this.M - 1] ^ _0xf31b2d >>> 1 ^ _0x317efa[_0xf31b2d & 1];
    this.mti = 0;
  }
  _0xf31b2d = this.mt[this.mti++];
  _0xf31b2d ^= _0xf31b2d >>> 11;
  _0xf31b2d ^= _0xf31b2d << 7 & 2636928640;
  _0xf31b2d ^= _0xf31b2d << 15 & 4022730752;
  _0xf31b2d ^= _0xf31b2d >>> 18;
  return _0xf31b2d >>> 0;
};
MersenneTwister.prototype.random_int31 = function () {
  return this.random_int() >>> 1;
};
MersenneTwister.prototype.random_incl = function () {
  return this.random_int() * 2.3283064370807974e-10;
};
MersenneTwister.prototype.random = function () {
  return this.random_int() * 2.3283064365386963e-10;
};
MersenneTwister.prototype.random_excl = function () {
  return (this.random_int() + 0.5) * 2.3283064365386963e-10;
};
MersenneTwister.prototype.random_long = function () {
  var _0x2e1ad2 = this.random_int() >>> 5;
  var _0x1ed712 = this.random_int() >>> 6;
  return (_0x2e1ad2 * 67108864 + _0x1ed712) * 1.1102230246251565e-16;
};
module.exports = MersenneTwister;