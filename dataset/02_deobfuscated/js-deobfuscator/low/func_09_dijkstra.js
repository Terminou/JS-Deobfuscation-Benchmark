"use strict";
var _0x16f6d6 = _0x5e46;
(function (_0x2250fe, _0x598280) {
  var _0x523891 = _0x5e46, _0x24b985 = _0x2250fe();
  while (true) {
    try {
      var _0x537797 = parseInt(_0x523891(377)) / 1 + parseInt(_0x523891(380)) / 2 + -parseInt(_0x523891(373)) / 3 * (-parseInt(_0x523891(392)) / 4) + -parseInt(_0x523891(374)) / 5 * (parseInt(_0x523891(370)) / 6) + -parseInt(_0x523891(393)) / 7 + parseInt(_0x523891(381)) / 8 * (parseInt(_0x523891(383)) / 9) + -parseInt(_0x523891(390)) / 10;
      if (_0x537797 === _0x598280) break; else _0x24b985.push(_0x24b985.shift());
    } catch (_0x53ef36) {
      _0x24b985.push(_0x24b985.shift());
    }
  }
}(_0x5c23, 382637));
function _0x5e46(_0xf62d26, _0x130ae2) {
  _0xf62d26 = _0xf62d26 - 366;
  var _0x5c238c = _0x5c23();
  var _0x5e4638 = _0x5c238c[_0xf62d26];
  return _0x5e4638;
}
function _0x5c23() {
  var _0x2a6607 = ["PriorityQueue", "push", "join", "make", "4418890nsdjiI", "hasOwnProperty", "12ujOZHx", "4810946krxaUl", "pop", " to ", "Could not find a path from ", "exports", "reverse", "sorter", "6NzKFtY", "length", "cost", "330294VAHLbX", "1074215uafItA", "sort", "default_sorter", "47243DxnScJ", "single_source_shortest_paths", "extract_shortest_path_from_predecessor_list", "1233054CTkcZv", "8UzlLug", "undefined", "6593247eYDpsq", "value", "queue"];
  _0x5c23 = function () {
    return _0x2a6607;
  };
  return _0x5c23();
}
var dijkstra = {single_source_shortest_paths: function (_0x7bbfac, _0x47bd9c, _0xf263d4) {
  var _0x2ad8ec = _0x5e46, _0x4643b3 = {}, _0x213dc3 = {};
  _0x213dc3[_0x47bd9c] = 0;
  var _0x2c36e6 = dijkstra[_0x2ad8ec(386)][_0x2ad8ec(389)]();
  _0x2c36e6[_0x2ad8ec(387)](_0x47bd9c, 0);
  var _0x2a9b77, _0x4f5a0f, _0x521af9, _0x45de25, _0x4891bc, _0x3cf13c, _0x48ac81, _0x3414d7, _0x3463df;
  while (!_0x2c36e6.empty()) {
    _0x2a9b77 = _0x2c36e6[_0x2ad8ec(394)](), _0x4f5a0f = _0x2a9b77[_0x2ad8ec(384)], _0x45de25 = _0x2a9b77[_0x2ad8ec(372)], _0x4891bc = _0x7bbfac[_0x4f5a0f] || {};
    for (_0x521af9 in _0x4891bc) {
      _0x4891bc.hasOwnProperty(_0x521af9) && (_0x3cf13c = _0x4891bc[_0x521af9], _0x48ac81 = _0x45de25 + _0x3cf13c, _0x3414d7 = _0x213dc3[_0x521af9], _0x3463df = typeof _0x213dc3[_0x521af9] === _0x2ad8ec(382), (_0x3463df || _0x3414d7 > _0x48ac81) && (_0x213dc3[_0x521af9] = _0x48ac81, _0x2c36e6.push(_0x521af9, _0x48ac81), _0x4643b3[_0x521af9] = _0x4f5a0f));
    }
  }
  if (typeof _0xf263d4 !== _0x2ad8ec(382) && typeof _0x213dc3[_0xf263d4] === "undefined") {
    var _0x4e381e = [_0x2ad8ec(366), _0x47bd9c, _0x2ad8ec(395), _0xf263d4, "."][_0x2ad8ec(388)]("");
    throw new Error(_0x4e381e);
  }
  return _0x4643b3;
}, extract_shortest_path_from_predecessor_list: function (_0x2b9c55, _0x44b79a) {
  var _0x5c0bdf = _0x5e46, _0x2de229 = [], _0xe65751 = _0x44b79a, _0x498fce;
  while (_0xe65751) {
    _0x2de229[_0x5c0bdf(387)](_0xe65751), _0x498fce = _0x2b9c55[_0xe65751], _0xe65751 = _0x2b9c55[_0xe65751];
  }
  return _0x2de229[_0x5c0bdf(368)](), _0x2de229;
}, find_path: function (_0x224216, _0x1a81c1, _0x101dd4) {
  var _0x3c5409 = _0x5e46, _0xfeba3d = dijkstra[_0x3c5409(378)](_0x224216, _0x1a81c1, _0x101dd4);
  return dijkstra[_0x3c5409(379)](_0xfeba3d, _0x101dd4);
}, PriorityQueue: {make: function (_0x362853) {
  var _0x5ee7f5 = _0x5e46, _0x460b9f = dijkstra[_0x5ee7f5(386)], _0x5165b8 = {}, _0x23ef6b;
  _0x362853 = _0x362853 || {};
  for (_0x23ef6b in _0x460b9f) {
    _0x460b9f[_0x5ee7f5(391)](_0x23ef6b) && (_0x5165b8[_0x23ef6b] = _0x460b9f[_0x23ef6b]);
  }
  return _0x5165b8.queue = [], _0x5165b8.sorter = _0x362853[_0x5ee7f5(369)] || _0x460b9f[_0x5ee7f5(376)], _0x5165b8;
}, default_sorter: function (_0x5970a2, _0xa7574e) {
  var _0x5af0ab = _0x5e46;
  return _0x5970a2.cost - _0xa7574e[_0x5af0ab(372)];
}, push: function (_0x1511ec, _0x1dd531) {
  var _0xe88ed7 = _0x5e46, _0x337411 = {value: _0x1511ec, cost: _0x1dd531};
  this[_0xe88ed7(385)][_0xe88ed7(387)](_0x337411), this[_0xe88ed7(385)][_0xe88ed7(375)](this[_0xe88ed7(369)]);
}, pop: function () {
  return this.queue.shift();
}, empty: function () {
  var _0x1e37d3 = _0x5e46;
  return this[_0x1e37d3(385)][_0x1e37d3(371)] === 0;
}}};
typeof module !== "undefined" && (module[_0x16f6d6(367)] = dijkstra);
