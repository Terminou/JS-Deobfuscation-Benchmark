'use strict';

var dijkstra = {
  single_source_shortest_paths: function (_0x352c84, _0x51888d, _0x5ac08c) {
    var _0x13a851 = {};
    var _0x2e6e18 = {
      [_0x51888d]: 0
    };
    var _0x2c8a41 = dijkstra.PriorityQueue.make();
    _0x2c8a41.push(_0x51888d, 0);
    var _0x2e7729;
    var _0x517f1c;
    var _0x122bc4;
    var _0x138815;
    var _0x55a3fe;
    var _0xc1d0b5;
    var _0x107d76;
    var _0x4ffa40;
    var _0x4e9613;
    while (!_0x2c8a41.empty()) {
      _0x2e7729 = _0x2c8a41.pop();
      _0x517f1c = _0x2e7729.value;
      _0x138815 = _0x2e7729.cost;
      _0x55a3fe = _0x352c84[_0x517f1c] || {};
      for (_0x122bc4 in _0x55a3fe) {
        if (_0x55a3fe.hasOwnProperty(_0x122bc4)) {
          _0xc1d0b5 = _0x55a3fe[_0x122bc4];
          _0x107d76 = _0x138815 + _0xc1d0b5;
          _0x4ffa40 = _0x2e6e18[_0x122bc4];
          _0x4e9613 = typeof _0x2e6e18[_0x122bc4] === "undefined";
          if (_0x4e9613 || _0x4ffa40 > _0x107d76) {
            _0x2e6e18[_0x122bc4] = _0x107d76;
            _0x2c8a41.push(_0x122bc4, _0x107d76);
            _0x13a851[_0x122bc4] = _0x517f1c;
          }
        }
      }
    }
    if (typeof _0x5ac08c !== "undefined" && typeof _0x2e6e18[_0x5ac08c] === "undefined") {
      var _0x37def5 = ["Could not find a path from ", _0x51888d, " to ", _0x5ac08c, "."].join("");
      throw new Error(_0x37def5);
    }
    return _0x13a851;
  },
  extract_shortest_path_from_predecessor_list: function (_0x290f06, _0x13cf1f) {
    var _0x3327b3 = [];
    var _0x5643c7 = _0x13cf1f;
    var _0x2dfce2;
    while (_0x5643c7) {
      _0x3327b3.push(_0x5643c7);
      _0x2dfce2 = _0x290f06[_0x5643c7];
      _0x5643c7 = _0x290f06[_0x5643c7];
    }
    _0x3327b3.reverse();
    return _0x3327b3;
  },
  find_path: function (_0x562824, _0x500a3b, _0x3a0cd3) {
    var _0x499277 = dijkstra.single_source_shortest_paths(_0x562824, _0x500a3b, _0x3a0cd3);
    return dijkstra.extract_shortest_path_from_predecessor_list(_0x499277, _0x3a0cd3);
  },
  PriorityQueue: {
    make: function (_0x409110) {
      var _0xeddc56 = dijkstra.PriorityQueue;
      var _0x1ab6a3 = {};
      var _0x17c10c;
      _0x409110 = _0x409110 || {};
      for (_0x17c10c in _0xeddc56) {
        if (_0xeddc56.hasOwnProperty(_0x17c10c)) {
          _0x1ab6a3[_0x17c10c] = _0xeddc56[_0x17c10c];
        }
      }
      _0x1ab6a3.queue = [];
      _0x1ab6a3.sorter = _0x409110.sorter || _0xeddc56.default_sorter;
      return _0x1ab6a3;
    },
    default_sorter: function (_0xfd1757, _0x4ff86f) {
      return _0xfd1757.cost - _0x4ff86f.cost;
    },
    push: function (_0x10d096, _0x34d2ce) {
      var _0x4fee06 = {
        value: _0x10d096,
        cost: _0x34d2ce
      };
      var _0x29a11f = _0x4fee06;
      this.queue.push(_0x29a11f);
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