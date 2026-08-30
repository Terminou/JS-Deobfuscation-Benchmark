'use strict';

var dijkstra = {
  single_source_shortest_paths: function (_0x4ffa40, _0x4e9613, _0x37def5) {
    var _0x275f8c = {};
    var _0x543347 = {
      [_0x4e9613]: 0
    };
    var _0x52f06d = dijkstra.PriorityQueue.make();
    _0x52f06d.push(_0x4e9613, 0);
    var _0x1deae5;
    var _0x25c470;
    var _0x298c95;
    var _0x45fdc9;
    var _0xc16380;
    var _0x1f0945;
    var _0x31cde3;
    var _0x4122c5;
    var _0x2ff38f;
    while (!_0x52f06d.empty()) {
      _0x1deae5 = _0x52f06d.pop();
      _0x25c470 = _0x1deae5.value;
      _0x45fdc9 = _0x1deae5.cost;
      _0xc16380 = _0x4ffa40[_0x25c470] || {};
      for (_0x298c95 in _0xc16380) {
        if (_0xc16380.hasOwnProperty(_0x298c95)) {
          _0x1f0945 = _0xc16380[_0x298c95];
          _0x31cde3 = _0x45fdc9 + _0x1f0945;
          _0x4122c5 = _0x543347[_0x298c95];
          _0x2ff38f = typeof _0x543347[_0x298c95] === "undefined";
          if (_0x2ff38f || _0x4122c5 > _0x31cde3) {
            _0x543347[_0x298c95] = _0x31cde3;
            _0x52f06d.push(_0x298c95, _0x31cde3);
            _0x275f8c[_0x298c95] = _0x25c470;
          }
        }
      }
    }
    if (typeof _0x37def5 !== "undefined" && typeof _0x543347[_0x37def5] === "undefined") {
      var _0x41f8b3 = ["Could not find a path from ", _0x4e9613, " to ", _0x37def5, "."].join("");
      throw new Error(_0x41f8b3);
    }
    return _0x275f8c;
  },
  extract_shortest_path_from_predecessor_list: function (_0x3a0cd3, _0x499277) {
    var _0x49269b = [];
    var _0x17c10c = _0x499277;
    var _0x1ab6a3;
    while (_0x17c10c) {
      _0x49269b.push(_0x17c10c);
      _0x1ab6a3 = _0x3a0cd3[_0x17c10c];
      _0x17c10c = _0x3a0cd3[_0x17c10c];
    }
    _0x49269b.reverse();
    return _0x49269b;
  },
  find_path: function (_0x102e86, _0x46ecfc, _0x100473) {
    var _0x10d096 = dijkstra.single_source_shortest_paths(_0x102e86, _0x46ecfc, _0x100473);
    return dijkstra.extract_shortest_path_from_predecessor_list(_0x10d096, _0x100473);
  },
  PriorityQueue: {
    make: function (_0x34d2ce) {
      var _0x5588f9 = dijkstra.PriorityQueue;
      var _0x39f550 = {};
      var _0x3ed1b0;
      _0x34d2ce = _0x34d2ce || {};
      for (_0x3ed1b0 in _0x5588f9) {
        if (_0x5588f9.hasOwnProperty(_0x3ed1b0)) {
          _0x39f550[_0x3ed1b0] = _0x5588f9[_0x3ed1b0];
        }
      }
      _0x39f550.queue = [];
      _0x39f550.sorter = _0x34d2ce.sorter || _0x5588f9.default_sorter;
      return _0x39f550;
    },
    default_sorter: function (_0x5c4b24, _0x471ae1) {
      return _0x5c4b24.cost - _0x471ae1.cost;
    },
    push: function (_0x2bbba9, _0x3fc059) {
      var _0x4aee37 = {
        value: _0x2bbba9,
        cost: _0x3fc059
      };
      var _0x237c3c = _0x4aee37;
      this.queue.push(_0x237c3c);
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