'use strict';

"use restrict";
module.exports = UnionFind;
function UnionFind(_0x5b71c6) {
  this.roots = new Array(_0x5b71c6);
  this.ranks = new Array(_0x5b71c6);
  for (var _0x5e83d8 = 0; _0x5e83d8 < _0x5b71c6; ++_0x5e83d8) {
    this.roots[_0x5e83d8] = _0x5e83d8;
    this.ranks[_0x5e83d8] = 0;
  }
}
var proto = UnionFind.prototype;
var _0x402f1e = {
  get: function () {
    return this.roots.length;
  }
};
Object.defineProperty(proto, "length", _0x402f1e);
proto.makeSet = function () {
  var _0x1b2186 = this.roots.length;
  this.roots.push(_0x1b2186);
  this.ranks.push(0);
  return _0x1b2186;
};
proto.find = function (_0x16d7ae) {
  var _0x59dd38 = _0x16d7ae;
  var _0xd32f94 = this.roots;
  while (_0xd32f94[_0x16d7ae] !== _0x16d7ae) {
    _0x16d7ae = _0xd32f94[_0x16d7ae];
  }
  while (_0xd32f94[_0x59dd38] !== _0x16d7ae) {
    var _0x3d8bbf = _0xd32f94[_0x59dd38];
    _0xd32f94[_0x59dd38] = _0x16d7ae;
    _0x59dd38 = _0x3d8bbf;
  }
  return _0x16d7ae;
};
proto.link = function (_0x4d95cc, _0x5e3a89) {
  var _0x4f14ed = this.find(_0x4d95cc);
  var _0x16c39f = this.find(_0x5e3a89);
  if (_0x4f14ed === _0x16c39f) {
    return;
  }
  var _0x479088 = this.ranks;
  var _0x13c307 = this.roots;
  var _0x61d75 = _0x479088[_0x4f14ed];
  var _0xb43f9c = _0x479088[_0x16c39f];
  if (_0x61d75 < _0xb43f9c) {
    _0x13c307[_0x4f14ed] = _0x16c39f;
  } else if (_0xb43f9c < _0x61d75) {
    _0x13c307[_0x16c39f] = _0x4f14ed;
  } else {
    _0x13c307[_0x16c39f] = _0x4f14ed;
    ++_0x479088[_0x4f14ed];
  }
};