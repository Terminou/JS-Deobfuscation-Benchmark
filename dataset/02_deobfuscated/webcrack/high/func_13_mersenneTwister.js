function MersenneTwister(_0x5bf5aa) {
  if (_0x5bf5aa == undefined) {
    _0x5bf5aa = new Date().getTime();
  }
  this.N = 624;
  this.M = 397;
  this.MATRIX_A = 2567483615;
  this.UPPER_MASK = 2147483648;
  this.LOWER_MASK = 2147483647;
  this.mt = new Array(this.N);
  this.mti = this.N + 1;
  if (_0x5bf5aa.constructor == Array) {
    this.init_by_array(_0x5bf5aa, _0x5bf5aa.length);
  } else {
    this.init_seed(_0x5bf5aa);
  }
}
MersenneTwister.prototype.init_seed = function (_0x424f48) {
  this.mt[0] = _0x424f48 >>> 0;
  for (this.mti = 1; this.mti < this.N; this.mti++) {
    var _0x424f48 = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30;
    this.mt[this.mti] = (((_0x424f48 & -65536) >>> 16) * 1812433253 << 16) + (_0x424f48 & 65535) * 1812433253 + this.mti;
    this.mt[this.mti] >>>= 0;
  }
};
MersenneTwister.prototype.init_by_array = function (_0x5a5d3f, _0x53fc8d) {
  var _0x2afb3d;
  var _0x543c68;
  var _0x382621;
  this.init_seed(19650218);
  _0x2afb3d = 1;
  _0x543c68 = 0;
  _0x382621 = this.N > _0x53fc8d ? this.N : _0x53fc8d;
  for (; _0x382621; _0x382621--) {
    var _0x36c8e2 = this.mt[_0x2afb3d - 1] ^ this.mt[_0x2afb3d - 1] >>> 30;
    this.mt[_0x2afb3d] = (this.mt[_0x2afb3d] ^ (((_0x36c8e2 & -65536) >>> 16) * 1664525 << 16) + (_0x36c8e2 & 65535) * 1664525) + _0x5a5d3f[_0x543c68] + _0x543c68;
    this.mt[_0x2afb3d] >>>= 0;
    _0x2afb3d++;
    _0x543c68++;
    if (_0x2afb3d >= this.N) {
      this.mt[0] = this.mt[this.N - 1];
      _0x2afb3d = 1;
    }
    if (_0x543c68 >= _0x53fc8d) {
      _0x543c68 = 0;
    }
  }
  for (_0x382621 = this.N - 1; _0x382621; _0x382621--) {
    var _0x36c8e2 = this.mt[_0x2afb3d - 1] ^ this.mt[_0x2afb3d - 1] >>> 30;
    this.mt[_0x2afb3d] = (this.mt[_0x2afb3d] ^ (((_0x36c8e2 & -65536) >>> 16) * 1566083941 << 16) + (_0x36c8e2 & 65535) * 1566083941) - _0x2afb3d;
    this.mt[_0x2afb3d] >>>= 0;
    _0x2afb3d++;
    if (_0x2afb3d >= this.N) {
      this.mt[0] = this.mt[this.N - 1];
      _0x2afb3d = 1;
    }
  }
  this.mt[0] = 2147483648;
};
MersenneTwister.prototype.random_int = function () {
  var _0x8f6734;
  var _0x4d958e = new Array(0, this.MATRIX_A);
  if (this.mti >= this.N) {
    var _0x5a5fc5;
    if (this.mti == this.N + 1) {
      this.init_seed(5489);
    }
    for (_0x5a5fc5 = 0; _0x5a5fc5 < this.N - this.M; _0x5a5fc5++) {
      _0x8f6734 = this.mt[_0x5a5fc5] & this.UPPER_MASK | this.mt[_0x5a5fc5 + 1] & this.LOWER_MASK;
      this.mt[_0x5a5fc5] = this.mt[_0x5a5fc5 + this.M] ^ _0x8f6734 >>> 1 ^ _0x4d958e[_0x8f6734 & 1];
    }
    for (; _0x5a5fc5 < this.N - 1; _0x5a5fc5++) {
      _0x8f6734 = this.mt[_0x5a5fc5] & this.UPPER_MASK | this.mt[_0x5a5fc5 + 1] & this.LOWER_MASK;
      this.mt[_0x5a5fc5] = this.mt[_0x5a5fc5 + (this.M - this.N)] ^ _0x8f6734 >>> 1 ^ _0x4d958e[_0x8f6734 & 1];
    }
    _0x8f6734 = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK;
    this.mt[this.N - 1] = this.mt[this.M - 1] ^ _0x8f6734 >>> 1 ^ _0x4d958e[_0x8f6734 & 1];
    this.mti = 0;
  }
  _0x8f6734 = this.mt[this.mti++];
  _0x8f6734 ^= _0x8f6734 >>> 11;
  _0x8f6734 ^= _0x8f6734 << 7 & -1658038656;
  _0x8f6734 ^= _0x8f6734 << 15 & -272236544;
  _0x8f6734 ^= _0x8f6734 >>> 18;
  return _0x8f6734 >>> 0;
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
  var _0x5567be = this.random_int() >>> 5;
  var _0x3fc4c8 = this.random_int() >>> 6;
  return (_0x5567be * 67108864 + _0x3fc4c8) * (1 / 9007199254740992);
};
module.exports = MersenneTwister;