'use strict';
function _0x4577(_0x1fb6e6, _0x582208) {
  _0x1fb6e6 = _0x1fb6e6 - 164;
  var _0x4ace57 = [
    '6419tDvBsW',
    'exports',
    'length',
    '9ZKmyTu',
    '5816335TQqbay',
    '1311640VAUkDr',
    '4314haugWa',
    '5031976qLjEGJ',
    '3563502qFbvHZ',
    'ranks',
    '2SQBqXE',
    '121JiluPU',
    'find',
    'roots',
    'makeSet',
    'prototype',
    '4002670XSpdLc',
    '5271884PgPYXY',
    'push'
  ];
  var _0x457747 = _0x4ace57[_0x1fb6e6];
  return _0x4ace57[_0x1fb6e6];
}
'use restrict';
function _0x4ace() {
  return [
    '6419tDvBsW',
    'exports',
    'length',
    '9ZKmyTu',
    '5816335TQqbay',
    '1311640VAUkDr',
    '4314haugWa',
    '5031976qLjEGJ',
    '3563502qFbvHZ',
    'ranks',
    '2SQBqXE',
    '121JiluPU',
    'find',
    'roots',
    'makeSet',
    'prototype',
    '4002670XSpdLc',
    '5271884PgPYXY',
    'push'
  ];
}
module.exports = UnionFind;
function UnionFind(_0x505a79) {
  this.roots = new Array(_0x505a79);
  this.ranks = new Array(_0x505a79);
  for (var _0x608c4c = 0; _0x608c4c < _0x505a79; ++_0x608c4c) {
    this.roots[_0x608c4c] = _0x608c4c;
    this.ranks[_0x608c4c] = 0;
  }
}
var proto = UnionFind.prototype;
Object.defineProperty(proto, 'length', {
  get: function () {
    return this.roots.length;
  }
});
proto.makeSet = function () {
  var _0xeb2889 = this.roots.length;
  this.roots.push(this.roots.length);
  this.ranks.push(0);
  return this.roots.length;
};
proto.find = function (_0x394a6b) {
  var _0x33d140 = _0x394a6b;
  var _0x15a7af = this.roots;
  while (_0x15a7af[_0x394a6b] !== _0x394a6b) {
    _0x394a6b = _0x15a7af[_0x394a6b];
  }
  while (_0x15a7af[_0x33d140] !== _0x394a6b) {
    var _0x961f09 = _0x15a7af[_0x33d140];
    _0x15a7af[_0x33d140] = _0x394a6b;
    _0x33d140 = _0x961f09;
  }
  return _0x394a6b;
};
proto.link = function (_0xefcf52, _0x5ae6d4) {
  var _0x360455 = this.find(_0xefcf52);
  var _0x108eb4 = this.find(_0x5ae6d4);
  if (_0x360455 === _0x108eb4)
    return;
  var _0x11b59a = this.ranks;
  var _0x23a277 = this.roots;
  var _0x4191e2 = _0x11b59a[_0x360455];
  var _0x41e948 = _0x11b59a[_0x108eb4];
  if (_0x11b59a[_0x360455] < _0x11b59a[_0x108eb4])
    _0x23a277[_0x360455] = _0x108eb4;
  else
    _0x11b59a[_0x108eb4] < _0x11b59a[_0x360455] ? _0x23a277[_0x108eb4] = _0x360455 : (_0x23a277[_0x108eb4] = _0x360455, ++_0x11b59a[_0x360455]);
};