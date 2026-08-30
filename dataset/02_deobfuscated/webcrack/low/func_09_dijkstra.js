'use strict';

var dijkstra = {
  single_source_shortest_paths: function (_0x7bbfac, _0x47bd9c, _0xf263d4) {
    var _0x4643b3 = {};
    var _0x213dc3 = {
      [_0x47bd9c]: 0
    };
    var _0x2c36e6 = dijkstra.PriorityQueue.make();
    _0x2c36e6.push(_0x47bd9c, 0);
    var _0x2a9b77;
    var _0x4f5a0f;
    var _0x521af9;
    var _0x45de25;
    var _0x4891bc;
    var _0x3cf13c;
    var _0x48ac81;
    var _0x3414d7;
    var _0x3463df;
    while (!_0x2c36e6.empty()) {
      _0x2a9b77 = _0x2c36e6.pop();
      _0x4f5a0f = _0x2a9b77.value;
      _0x45de25 = _0x2a9b77.cost;
      _0x4891bc = _0x7bbfac[_0x4f5a0f] || {};
      for (_0x521af9 in _0x4891bc) {
        if (_0x4891bc.hasOwnProperty(_0x521af9)) {
          _0x3cf13c = _0x4891bc[_0x521af9];
          _0x48ac81 = _0x45de25 + _0x3cf13c;
          _0x3414d7 = _0x213dc3[_0x521af9];
          _0x3463df = typeof _0x213dc3[_0x521af9] === "undefined";
          if (_0x3463df || _0x3414d7 > _0x48ac81) {
            _0x213dc3[_0x521af9] = _0x48ac81;
            _0x2c36e6.push(_0x521af9, _0x48ac81);
            _0x4643b3[_0x521af9] = _0x4f5a0f;
          }
        }
      }
    }
    if (typeof _0xf263d4 !== "undefined" && typeof _0x213dc3[_0xf263d4] === "undefined") {
      var _0x4e381e = ["Could not find a path from ", _0x47bd9c, " to ", _0xf263d4, "."].join("");
      throw new Error(_0x4e381e);
    }
    return _0x4643b3;
  },
  extract_shortest_path_from_predecessor_list: function (_0x2b9c55, _0x44b79a) {
    var _0x2de229 = [];
    var _0xe65751 = _0x44b79a;
    var _0x498fce;
    while (_0xe65751) {
      _0x2de229.push(_0xe65751);
      _0x498fce = _0x2b9c55[_0xe65751];
      _0xe65751 = _0x2b9c55[_0xe65751];
    }
    _0x2de229.reverse();
    return _0x2de229;
  },
  find_path: function (_0x224216, _0x1a81c1, _0x101dd4) {
    var _0xfeba3d = dijkstra.single_source_shortest_paths(_0x224216, _0x1a81c1, _0x101dd4);
    return dijkstra.extract_shortest_path_from_predecessor_list(_0xfeba3d, _0x101dd4);
  },
  PriorityQueue: {
    make: function (_0x362853) {
      var _0x460b9f = dijkstra.PriorityQueue;
      var _0x5165b8 = {};
      var _0x23ef6b;
      _0x362853 = _0x362853 || {};
      for (_0x23ef6b in _0x460b9f) {
        if (_0x460b9f.hasOwnProperty(_0x23ef6b)) {
          _0x5165b8[_0x23ef6b] = _0x460b9f[_0x23ef6b];
        }
      }
      _0x5165b8.queue = [];
      _0x5165b8.sorter = _0x362853.sorter || _0x460b9f.default_sorter;
      return _0x5165b8;
    },
    default_sorter: function (_0x5970a2, _0xa7574e) {
      return _0x5970a2.cost - _0xa7574e.cost;
    },
    push: function (_0x1511ec, _0x1dd531) {
      var _0x337411 = {
        value: _0x1511ec,
        cost: _0x1dd531
      };
      this.queue.push(_0x337411);
      this.queue.sort(this.sorter);
    },
    pop: function () {
      return this.queue.shift();
    },
    empty: function () {
      return this.queue.length === 0;
    }
  }
};
if (typeof module !== "undefined") {
  module.exports = dijkstra;
}