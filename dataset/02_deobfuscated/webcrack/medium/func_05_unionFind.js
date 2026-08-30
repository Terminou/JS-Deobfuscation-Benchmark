'use strict';

"use restrict";
module.exports = UnionFind;
function UnionFind(_0xebabea) {
  this.roots = new Array(_0xebabea);
  this.ranks = new Array(_0xebabea);
  for (var _0x74bc40 = 0; _0x74bc40 < _0xebabea; ++_0x74bc40) {
    this.roots[_0x74bc40] = _0x74bc40;
    this.ranks[_0x74bc40] = 0;
  }
}
var proto = UnionFind.prototype;
var _0x2c09ef = {
  get: function () {
    return this.roots.length;
  }
};
Object.defineProperty(proto, "length", _0x2c09ef);
proto.makeSet = function () {
  var _0x2cc3b2 = this.roots.length;
  this.roots.push(_0x2cc3b2);
  this.ranks.push(0);
  return _0x2cc3b2;
};
proto.find = function (_0x5d1af3) {
  var _0x4176e3 = _0x5d1af3;
  var _0x31a33f = this.roots;
  while (_0x31a33f[_0x5d1af3] !== _0x5d1af3) {
    _0x5d1af3 = _0x31a33f[_0x5d1af3];
  }
  while (_0x31a33f[_0x4176e3] !== _0x5d1af3) {
    var _0x2dc56c = _0x31a33f[_0x4176e3];
    _0x31a33f[_0x4176e3] = _0x5d1af3;
    _0x4176e3 = _0x2dc56c;
  }
  return _0x5d1af3;
};
proto.link = function (_0x379a5d, _0x27f840) {
  var _0x537c47 = this.find(_0x379a5d);
  var _0x2c9939 = this.find(_0x27f840);
  if (_0x537c47 === _0x2c9939) {
    return;
  }
  var _0x272d33 = this.ranks;
  var _0x329de3 = this.roots;
  var _0x39d422 = _0x272d33[_0x537c47];
  var _0xcebd9 = _0x272d33[_0x2c9939];
  if (_0x39d422 < _0xcebd9) {
    _0x329de3[_0x537c47] = _0x2c9939;
  } else if (_0xcebd9 < _0x39d422) {
    _0x329de3[_0x2c9939] = _0x537c47;
  } else {
    _0x329de3[_0x2c9939] = _0x537c47;
    ++_0x272d33[_0x537c47];
  }
};