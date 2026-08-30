var MersenneTwister = function (_0x5b11d3) {
  if (_0x5b11d3 == undefined) {
    _0x5b11d3 = new Date().getTime();
  }
  this.N = 0x270;
  this.M = 0x18d;
  this.MATRIX_A = 0x9908b0df;
  this.UPPER_MASK = 0x80000000;
  this.LOWER_MASK = 0x7fffffff;
  this.mt = new Array(this.N);
  this.mti = this.N + 0x1;
  if (_0x5b11d3.constructor == Array) {
    this.init_by_array(_0x5b11d3, _0x5b11d3.length);
  } else {
    this.init_seed(_0x5b11d3);
  }
};
MersenneTwister.prototype.init_seed = function (_0x353e2e) {
  this.mt[0x0] = _0x353e2e >>> 0x0;
  for (this.mti = 0x1; this.mti < this.N; this.mti++) {
    var _0x353e2e = this.mt[this.mti - 0x1] ^ this.mt[this.mti - 0x1] >>> 0x1e;
    this.mt[this.mti] = (((_0x353e2e & 0xffff0000) >>> 0x10) * 0x6c078965 << 0x10) + (_0x353e2e & 0xffff) * 0x6c078965 + this.mti;
    this.mt[this.mti] >>>= 0x0;
  }
};
MersenneTwister.prototype.init_by_array = function (_0x4f182f, _0x8e428f) {
  var _0x1b009c;
  var _0x706ce9;
  var _0x2902ef;
  this.init_seed(0x12bd6aa);
  _0x1b009c = 0x1;
  _0x706ce9 = 0x0;
  _0x2902ef = this.N > _0x8e428f ? this.N : _0x8e428f;
  for (; _0x2902ef; _0x2902ef--) {
    var _0xb1c964 = this.mt[_0x1b009c - 0x1] ^ this.mt[_0x1b009c - 0x1] >>> 0x1e;
    this.mt[_0x1b009c] = (this.mt[_0x1b009c] ^ (((_0xb1c964 & 0xffff0000) >>> 0x10) * 0x19660d << 0x10) + (_0xb1c964 & 0xffff) * 0x19660d) + _0x4f182f[_0x706ce9] + _0x706ce9;
    this.mt[_0x1b009c] >>>= 0x0;
    _0x1b009c++;
    _0x706ce9++;
    if (_0x1b009c >= this.N) {
      this.mt[0x0] = this.mt[this.N - 0x1];
      _0x1b009c = 0x1;
    }
    if (_0x706ce9 >= _0x8e428f) {
      _0x706ce9 = 0x0;
    }
  }
  for (_0x2902ef = this.N - 0x1; _0x2902ef; _0x2902ef--) {
    var _0xb1c964 = this.mt[_0x1b009c - 0x1] ^ this.mt[_0x1b009c - 0x1] >>> 0x1e;
    this.mt[_0x1b009c] = (this.mt[_0x1b009c] ^ (((_0xb1c964 & 0xffff0000) >>> 0x10) * 0x5d588b65 << 0x10) + (_0xb1c964 & 0xffff) * 0x5d588b65) - _0x1b009c;
    this.mt[_0x1b009c] >>>= 0x0;
    _0x1b009c++;
    if (_0x1b009c >= this.N) {
      this.mt[0x0] = this.mt[this.N - 0x1];
      _0x1b009c = 0x1;
    }
  }
  this.mt[0x0] = 0x80000000;
};
MersenneTwister.prototype.random_int = function () {
  var _0xf31b2d;
  var _0x317efa = new Array(0x0, this.MATRIX_A);
  if (this.mti >= this.N) {
    var _0x3ee0f2;
    if (this.mti == this.N + 0x1) {
      this.init_seed(0x1571);
    }
    for (_0x3ee0f2 = 0x0; _0x3ee0f2 < this.N - this.M; _0x3ee0f2++) {
      _0xf31b2d = this.mt[_0x3ee0f2] & this.UPPER_MASK | this.mt[_0x3ee0f2 + 0x1] & this.LOWER_MASK;
      this.mt[_0x3ee0f2] = this.mt[_0x3ee0f2 + this.M] ^ _0xf31b2d >>> 0x1 ^ _0x317efa[_0xf31b2d & 0x1];
    }
    for (; _0x3ee0f2 < this.N - 0x1; _0x3ee0f2++) {
      _0xf31b2d = this.mt[_0x3ee0f2] & this.UPPER_MASK | this.mt[_0x3ee0f2 + 0x1] & this.LOWER_MASK;
      this.mt[_0x3ee0f2] = this.mt[_0x3ee0f2 + (this.M - this.N)] ^ _0xf31b2d >>> 0x1 ^ _0x317efa[_0xf31b2d & 0x1];
    }
    _0xf31b2d = this.mt[this.N - 0x1] & this.UPPER_MASK | this.mt[0x0] & this.LOWER_MASK;
    this.mt[this.N - 0x1] = this.mt[this.M - 0x1] ^ _0xf31b2d >>> 0x1 ^ _0x317efa[_0xf31b2d & 0x1];
    this.mti = 0x0;
  }
  _0xf31b2d = this.mt[this.mti++];
  _0xf31b2d ^= _0xf31b2d >>> 0xb;
  _0xf31b2d ^= _0xf31b2d << 0x7 & 0x9d2c5680;
  _0xf31b2d ^= _0xf31b2d << 0xf & 0xefc60000;
  _0xf31b2d ^= _0xf31b2d >>> 0x12;
  return _0xf31b2d >>> 0x0;
};
MersenneTwister.prototype.random_int31 = function () {
  return this.random_int() >>> 0x1;
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
  var _0x2e1ad2 = this.random_int() >>> 0x5;
  var _0x1ed712 = this.random_int() >>> 0x6;
  return (_0x2e1ad2 * 0x4000000 + _0x1ed712) * 1.1102230246251565e-16;
};
module.exports = MersenneTwister;