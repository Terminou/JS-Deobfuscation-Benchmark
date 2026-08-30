"use strict";
function _0x4577(_0x1fb6e6, _0x582208) {
  _0x1fb6e6 = _0x1fb6e6 - 164;
  var _0x4ace57 = _0x4ace();
  var _0x457747 = _0x4ace57[_0x1fb6e6];
  return _0x457747;
}
var _0x4267ab = _0x4577;
(function (_0x755588, _0x42ea30) {
  var _0x3ad89a = _0x4577, _0x347b74 = _0x755588();
  while (true) {
    try {
      var _0x3730a5 = parseInt(_0x3ad89a(169)) / 1 + parseInt(_0x3ad89a(174)) / 2 * (-parseInt(_0x3ad89a(172)) / 3) + -parseInt(_0x3ad89a(181)) / 4 + -parseInt(_0x3ad89a(168)) / 5 + -parseInt(_0x3ad89a(170)) / 6 * (parseInt(_0x3ad89a(164)) / 7) + parseInt(_0x3ad89a(171)) / 8 * (-parseInt(_0x3ad89a(167)) / 9) + -parseInt(_0x3ad89a(180)) / 10 * (-parseInt(_0x3ad89a(175)) / 11);
      if (_0x3730a5 === _0x42ea30) break; else _0x347b74.push(_0x347b74.shift());
    } catch (_0x2e945b) {
      _0x347b74.push(_0x347b74.shift());
    }
  }
}(_0x4ace, 757185));
"use restrict";
function _0x4ace() {
  var _0x31b1c6 = ["3563502qFbvHZ", "ranks", "2SQBqXE", "121JiluPU", "find", "roots", "makeSet", "prototype", "4002670XSpdLc", "5271884PgPYXY", "push", "6419tDvBsW", "exports", "length", "9ZKmyTu", "5816335TQqbay", "1311640VAUkDr", "4314haugWa", "5031976qLjEGJ"];
  _0x4ace = function () {
    return _0x31b1c6;
  };
  return _0x4ace();
}
module[_0x4267ab(165)] = UnionFind;
function UnionFind(_0x505a79) {
  var _0x1006a0 = _0x4267ab;
  this[_0x1006a0(177)] = new Array(_0x505a79), this[_0x1006a0(173)] = new Array(_0x505a79);
  for (var _0x608c4c = 0; _0x608c4c < _0x505a79; ++_0x608c4c) {
    this[_0x1006a0(177)][_0x608c4c] = _0x608c4c, this[_0x1006a0(173)][_0x608c4c] = 0;
  }
}
var proto = UnionFind[_0x4267ab(179)];
Object.defineProperty(proto, _0x4267ab(166), {get: function () {
  var _0x3255fa = _0x4267ab;
  return this[_0x3255fa(177)].length;
}}), proto[_0x4267ab(178)] = function () {
  var _0x596915 = _0x4267ab, _0xeb2889 = this[_0x596915(177)][_0x596915(166)];
  return this.roots.push(_0xeb2889), this[_0x596915(173)][_0x596915(182)](0), _0xeb2889;
}, proto[_0x4267ab(176)] = function (_0x394a6b) {
  var _0x1eaf0d = _0x4267ab, _0x33d140 = _0x394a6b, _0x15a7af = this[_0x1eaf0d(177)];
  while (_0x15a7af[_0x394a6b] !== _0x394a6b) {
    _0x394a6b = _0x15a7af[_0x394a6b];
  }
  while (_0x15a7af[_0x33d140] !== _0x394a6b) {
    var _0x961f09 = _0x15a7af[_0x33d140];
    _0x15a7af[_0x33d140] = _0x394a6b, _0x33d140 = _0x961f09;
  }
  return _0x394a6b;
}, proto.link = function (_0xefcf52, _0x5ae6d4) {
  var _0xe1082b = _0x4267ab, _0x360455 = this.find(_0xefcf52), _0x108eb4 = this[_0xe1082b(176)](_0x5ae6d4);
  if (_0x360455 === _0x108eb4) return;
  var _0x11b59a = this[_0xe1082b(173)], _0x23a277 = this[_0xe1082b(177)], _0x4191e2 = _0x11b59a[_0x360455], _0x41e948 = _0x11b59a[_0x108eb4];
  if (_0x4191e2 < _0x41e948) _0x23a277[_0x360455] = _0x108eb4; else _0x41e948 < _0x4191e2 ? _0x23a277[_0x108eb4] = _0x360455 : (_0x23a277[_0x108eb4] = _0x360455, ++_0x11b59a[_0x360455]);
};
