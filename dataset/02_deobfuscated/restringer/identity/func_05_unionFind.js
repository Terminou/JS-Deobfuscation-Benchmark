'use strict';
'use restrict';
module.exports = UnionFind;
function UnionFind(_0x1fb6e6) {
  this.roots = new Array(_0x1fb6e6);
  this.ranks = new Array(_0x1fb6e6);
  for (var _0x582208 = 0; _0x582208 < _0x1fb6e6; ++_0x582208) {
    this.roots[_0x582208] = _0x582208;
    this.ranks[_0x582208] = 0;
  }
}
var proto = UnionFind.prototype;
Object.defineProperty(proto, 'length', {
  get: function () {
    return this.roots.length;
  }
});
proto.makeSet = function () {
  var _0x4ace57 = this.roots.length;
  this.roots.push(this.roots.length);
  this.ranks.push(0);
  return this.roots.length;
};
proto.find = function (_0x457747) {
  var _0x3ecfdc = _0x457747;
  var _0x5c38f4 = this.roots;
  while (_0x5c38f4[_0x457747] !== _0x457747) {
    _0x457747 = _0x5c38f4[_0x457747];
  }
  while (_0x5c38f4[_0x3ecfdc] !== _0x457747) {
    var _0x56c6f7 = _0x5c38f4[_0x3ecfdc];
    _0x5c38f4[_0x3ecfdc] = _0x457747;
    _0x3ecfdc = _0x56c6f7;
  }
  return _0x457747;
};
proto.link = function (_0x36c727, _0x5859a7) {
  var _0x1650c7 = this.find(_0x36c727);
  var _0x505a79 = this.find(_0x5859a7);
  if (_0x1650c7 === _0x505a79) {
    return;
  }
  var _0x608c4c = this.ranks;
  var _0xeb2889 = this.roots;
  var _0x394a6b = _0x608c4c[_0x1650c7];
  var _0x33d140 = _0x608c4c[_0x505a79];
  if (_0x608c4c[_0x1650c7] < _0x608c4c[_0x505a79]) {
    _0xeb2889[_0x1650c7] = _0x505a79;
  } else if (_0x608c4c[_0x505a79] < _0x608c4c[_0x1650c7]) {
    _0xeb2889[_0x505a79] = _0x1650c7;
  } else {
    _0xeb2889[_0x505a79] = _0x1650c7;
    ++_0x608c4c[_0x1650c7];
  }
};