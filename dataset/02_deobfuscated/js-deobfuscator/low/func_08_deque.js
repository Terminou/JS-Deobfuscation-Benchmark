"use strict";
var _0x37c6ee = _0x48c8;
function _0x2bb2() {
  var _0x78f069 = ["push", "log", "_capacityMask", "_list", "184426qfpcZo", "567459NBkoeT", "_copyArray", "peekAt", "_head", "defineProperty", "_tail", "_fromArray", "unshift", "945885YKVMXz", "20jnFNmH", "removeOne", "size", "remove", "_capacity", "8ZQfrir", "6yHkoQQ", "8dHZLDB", "max", "pop", "isEmpty", "_growArray", "isArray", "prototype", "slice", "length", "get", "peekFront", "_nextPowerOf2", "210260AFaHCS", "toArray", "109472IqZuWr", "peekBack", "exports", "peek", "735574TrwOci", "clear", "shift", "49134PCqKwp", "_shrinkArray"];
  _0x2bb2 = function () {
    return _0x78f069;
  };
  return _0x2bb2();
}
(function (_0x1e167d, _0xe64106) {
  var _0x5e58ba = _0x48c8, _0xf88eb1 = _0x1e167d();
  while (true) {
    try {
      var _0x296754 = -parseInt(_0x5e58ba(509)) / 1 + parseInt(_0x5e58ba(538)) / 2 + parseInt(_0x5e58ba(503)) / 3 * (-parseInt(_0x5e58ba(524)) / 4) + parseInt(_0x5e58ba(518)) / 5 + parseInt(_0x5e58ba(525)) / 6 * (parseInt(_0x5e58ba(500)) / 7) + parseInt(_0x5e58ba(526)) / 8 * (-parseInt(_0x5e58ba(510)) / 9) + parseInt(_0x5e58ba(519)) / 10 * (parseInt(_0x5e58ba(496)) / 11);
      if (_0x296754 === _0xe64106) break; else _0xf88eb1.push(_0xf88eb1.shift());
    } catch (_0x21a94f) {
      _0xf88eb1.push(_0xf88eb1.shift());
    }
  }
}(_0x2bb2, 139060));
function _0x48c8(_0x79e53, _0x21ff23) {
  _0x79e53 = _0x79e53 - 495;
  var _0x2bb2f6 = _0x2bb2();
  var _0x48c80e = _0x2bb2f6[_0x79e53];
  return _0x48c80e;
}
function Denque(_0x1cd539, _0x53c040) {
  var _0x5bf2aa = _0x48c8, _0x53c040 = _0x53c040 || {};
  this[_0x5bf2aa(523)] = _0x53c040.capacity, this._head = 0, this[_0x5bf2aa(515)] = 0, Array[_0x5bf2aa(531)](_0x1cd539) ? this[_0x5bf2aa(516)](_0x1cd539) : (this[_0x5bf2aa(507)] = 3, this[_0x5bf2aa(508)] = new Array(4));
}
Denque[_0x37c6ee(532)][_0x37c6ee(512)] = function peekAt(_0x3e4bf3) {
  var _0x4c7422 = _0x37c6ee, _0x1d8a42 = _0x3e4bf3;
  if (_0x1d8a42 !== (_0x1d8a42 | 0)) return undefined;
  var _0x3fad95 = this.size();
  if (_0x1d8a42 >= _0x3fad95 || _0x1d8a42 < -_0x3fad95) return undefined;
  if (_0x1d8a42 < 0) _0x1d8a42 += _0x3fad95;
  return _0x1d8a42 = this[_0x4c7422(513)] + _0x1d8a42 & this[_0x4c7422(507)], this[_0x4c7422(508)][_0x1d8a42];
}, Denque.prototype[_0x37c6ee(535)] = function get(_0x36c372) {
  var _0x37bfdf = _0x37c6ee;
  return this[_0x37bfdf(512)](_0x36c372);
}, Denque[_0x37c6ee(532)].peek = function peek() {
  var _0x643149 = _0x37c6ee;
  if (this._head === this[_0x643149(515)]) return undefined;
  return this[_0x643149(508)][this[_0x643149(513)]];
}, Denque[_0x37c6ee(532)][_0x37c6ee(536)] = function peekFront() {
  var _0x5b192f = _0x37c6ee;
  return this[_0x5b192f(499)]();
}, Denque.prototype[_0x37c6ee(497)] = function peekBack() {
  return this.peekAt(-1);
}, Object[_0x37c6ee(514)](Denque[_0x37c6ee(532)], "length", {get: function length() {
  var _0x28672c = _0x37c6ee;
  return this[_0x28672c(521)]();
}}), Denque[_0x37c6ee(532)][_0x37c6ee(521)] = function size() {
  var _0x5a5d51 = _0x37c6ee;
  if (this[_0x5a5d51(513)] === this._tail) return 0;
  if (this._head < this[_0x5a5d51(515)]) return this._tail - this[_0x5a5d51(513)]; else return this._capacityMask + 1 - (this[_0x5a5d51(513)] - this._tail);
}, Denque[_0x37c6ee(532)][_0x37c6ee(517)] = function unshift(_0x32fcf0) {
  var _0x4a2d2d = _0x37c6ee;
  if (arguments[_0x4a2d2d(534)] === 0) return this[_0x4a2d2d(521)]();
  var _0x4dede3 = this[_0x4a2d2d(508)][_0x4a2d2d(534)];
  this._head = this[_0x4a2d2d(513)] - 1 + _0x4dede3 & this[_0x4a2d2d(507)], this[_0x4a2d2d(508)][this[_0x4a2d2d(513)]] = _0x32fcf0;
  if (this[_0x4a2d2d(515)] === this[_0x4a2d2d(513)]) this[_0x4a2d2d(530)]();
  if (this[_0x4a2d2d(523)] && this[_0x4a2d2d(521)]() > this._capacity) this[_0x4a2d2d(528)]();
  if (this[_0x4a2d2d(513)] < this[_0x4a2d2d(515)]) return this[_0x4a2d2d(515)] - this[_0x4a2d2d(513)]; else return this[_0x4a2d2d(507)] + 1 - (this[_0x4a2d2d(513)] - this[_0x4a2d2d(515)]);
}, Denque[_0x37c6ee(532)].shift = function shift() {
  var _0x55d7b6 = _0x37c6ee, _0x36b6ec = this[_0x55d7b6(513)];
  if (_0x36b6ec === this[_0x55d7b6(515)]) return undefined;
  var _0x45fa87 = this[_0x55d7b6(508)][_0x36b6ec];
  this[_0x55d7b6(508)][_0x36b6ec] = undefined, this[_0x55d7b6(513)] = _0x36b6ec + 1 & this[_0x55d7b6(507)];
  if (_0x36b6ec < 2 && this[_0x55d7b6(515)] > 1e4 && this[_0x55d7b6(515)] <= this[_0x55d7b6(508)].length >>> 2) this[_0x55d7b6(504)]();
  return _0x45fa87;
}, Denque[_0x37c6ee(532)].push = function push(_0x1d7c9f) {
  var _0x51f0c6 = _0x37c6ee;
  if (arguments[_0x51f0c6(534)] === 0) return this[_0x51f0c6(521)]();
  var _0x4ea8c7 = this._tail;
  this._list[_0x4ea8c7] = _0x1d7c9f, this[_0x51f0c6(515)] = _0x4ea8c7 + 1 & this[_0x51f0c6(507)];
  this[_0x51f0c6(515)] === this[_0x51f0c6(513)] && this._growArray();
  this[_0x51f0c6(523)] && this[_0x51f0c6(521)]() > this[_0x51f0c6(523)] && this[_0x51f0c6(502)]();
  if (this[_0x51f0c6(513)] < this[_0x51f0c6(515)]) return this._tail - this[_0x51f0c6(513)]; else return this[_0x51f0c6(507)] + 1 - (this[_0x51f0c6(513)] - this[_0x51f0c6(515)]);
}, Denque[_0x37c6ee(532)][_0x37c6ee(528)] = function pop() {
  var _0xe43940 = _0x37c6ee, _0x23890e = this[_0xe43940(515)];
  if (_0x23890e === this[_0xe43940(513)]) return undefined;
  var _0xb4147d = this[_0xe43940(508)][_0xe43940(534)];
  this[_0xe43940(515)] = _0x23890e - 1 + _0xb4147d & this._capacityMask;
  var _0x53bedc = this[_0xe43940(508)][this[_0xe43940(515)]];
  this[_0xe43940(508)][this._tail] = undefined;
  if (this._head < 2 && _0x23890e > 1e4 && _0x23890e <= _0xb4147d >>> 2) this[_0xe43940(504)]();
  return _0x53bedc;
}, Denque[_0x37c6ee(532)][_0x37c6ee(520)] = function removeOne(_0x516ca2) {
  var _0x498e27 = _0x37c6ee, _0x1b370b = _0x516ca2;
  if (_0x1b370b !== (_0x1b370b | 0)) return undefined;
  if (this[_0x498e27(513)] === this[_0x498e27(515)]) return undefined;
  var _0x553237 = this[_0x498e27(521)](), _0x3dc1f6 = this._list.length;
  if (_0x1b370b >= _0x553237 || _0x1b370b < -_0x553237) return undefined;
  if (_0x1b370b < 0) _0x1b370b += _0x553237;
  _0x1b370b = this[_0x498e27(513)] + _0x1b370b & this._capacityMask;
  var _0x37ed16 = this._list[_0x1b370b], _0x37b526;
  if (_0x516ca2 < _0x553237 / 2) {
    for (_0x37b526 = _0x516ca2; _0x37b526 > 0; _0x37b526--) {
      this._list[_0x1b370b] = this[_0x498e27(508)][_0x1b370b = _0x1b370b - 1 + _0x3dc1f6 & this._capacityMask];
    }
    this._list[_0x1b370b] = undefined, this[_0x498e27(513)] = this[_0x498e27(513)] + 1 + _0x3dc1f6 & this._capacityMask;
  } else {
    for (_0x37b526 = _0x553237 - 1 - _0x516ca2; _0x37b526 > 0; _0x37b526--) {
      this[_0x498e27(508)][_0x1b370b] = this[_0x498e27(508)][_0x1b370b = _0x1b370b + 1 + _0x3dc1f6 & this[_0x498e27(507)]];
    }
    this[_0x498e27(508)][_0x1b370b] = undefined, this[_0x498e27(515)] = this[_0x498e27(515)] - 1 + _0x3dc1f6 & this[_0x498e27(507)];
  }
  return _0x37ed16;
}, Denque[_0x37c6ee(532)].remove = function remove(_0x5e7ead, _0x4ddaed) {
  var _0x4c23d6 = _0x37c6ee, _0x36944a = _0x5e7ead, _0x11dade, _0x1142f4 = _0x4ddaed;
  if (_0x36944a !== (_0x36944a | 0)) return undefined;
  if (this[_0x4c23d6(513)] === this[_0x4c23d6(515)]) return undefined;
  var _0x42f959 = this[_0x4c23d6(521)](), _0x4c7db5 = this._list[_0x4c23d6(534)];
  if (_0x36944a >= _0x42f959 || _0x36944a < -_0x42f959 || _0x4ddaed < 1) return undefined;
  if (_0x36944a < 0) _0x36944a += _0x42f959;
  if (_0x4ddaed === 1 || !_0x4ddaed) return _0x11dade = new Array(1), _0x11dade[0] = this[_0x4c23d6(520)](_0x36944a), _0x11dade;
  if (_0x36944a === 0 && _0x36944a + _0x4ddaed >= _0x42f959) return _0x11dade = this[_0x4c23d6(495)](), this[_0x4c23d6(501)](), _0x11dade;
  if (_0x36944a + _0x4ddaed > _0x42f959) _0x4ddaed = _0x42f959 - _0x36944a;
  var _0x259e4d;
  _0x11dade = new Array(_0x4ddaed);
  for (_0x259e4d = 0; _0x259e4d < _0x4ddaed; _0x259e4d++) {
    _0x11dade[_0x259e4d] = this[_0x4c23d6(508)][this._head + _0x36944a + _0x259e4d & this._capacityMask];
  }
  _0x36944a = this[_0x4c23d6(513)] + _0x36944a & this[_0x4c23d6(507)];
  if (_0x5e7ead + _0x4ddaed === _0x42f959) {
    this[_0x4c23d6(515)] = this[_0x4c23d6(515)] - _0x4ddaed + _0x4c7db5 & this[_0x4c23d6(507)];
    for (_0x259e4d = _0x4ddaed; _0x259e4d > 0; _0x259e4d--) {
      this._list[_0x36944a = _0x36944a + 1 + _0x4c7db5 & this[_0x4c23d6(507)]] = undefined;
    }
    return _0x11dade;
  }
  if (_0x5e7ead === 0) {
    this[_0x4c23d6(513)] = this[_0x4c23d6(513)] + _0x4ddaed + _0x4c7db5 & this._capacityMask;
    for (_0x259e4d = _0x4ddaed - 1; _0x259e4d > 0; _0x259e4d--) {
      this._list[_0x36944a = _0x36944a + 1 + _0x4c7db5 & this[_0x4c23d6(507)]] = undefined;
    }
    return _0x11dade;
  }
  if (_0x36944a < _0x42f959 / 2) {
    this[_0x4c23d6(513)] = this[_0x4c23d6(513)] + _0x5e7ead + _0x4ddaed + _0x4c7db5 & this[_0x4c23d6(507)];
    for (_0x259e4d = _0x5e7ead; _0x259e4d > 0; _0x259e4d--) {
      this[_0x4c23d6(517)](this[_0x4c23d6(508)][_0x36944a = _0x36944a - 1 + _0x4c7db5 & this._capacityMask]);
    }
    _0x36944a = this._head - 1 + _0x4c7db5 & this._capacityMask;
    while (_0x1142f4 > 0) {
      this[_0x4c23d6(508)][_0x36944a = _0x36944a - 1 + _0x4c7db5 & this[_0x4c23d6(507)]] = undefined, _0x1142f4--;
    }
    if (_0x5e7ead < 0) this[_0x4c23d6(515)] = _0x36944a;
  } else {
    this[_0x4c23d6(515)] = _0x36944a, _0x36944a = _0x36944a + _0x4ddaed + _0x4c7db5 & this[_0x4c23d6(507)];
    for (_0x259e4d = _0x42f959 - (_0x4ddaed + _0x5e7ead); _0x259e4d > 0; _0x259e4d--) {
      this.push(this[_0x4c23d6(508)][_0x36944a++]);
    }
    _0x36944a = this._tail;
    while (_0x1142f4 > 0) {
      this[_0x4c23d6(508)][_0x36944a = _0x36944a + 1 + _0x4c7db5 & this[_0x4c23d6(507)]] = undefined, _0x1142f4--;
    }
  }
  if (this[_0x4c23d6(513)] < 2 && this[_0x4c23d6(515)] > 1e4 && this[_0x4c23d6(515)] <= _0x4c7db5 >>> 2) this[_0x4c23d6(504)]();
  return _0x11dade;
}, Denque[_0x37c6ee(532)].splice = function splice(_0x11fcac, _0x5e8d4b) {
  var _0x2a6196 = _0x37c6ee, _0x5e5bc7 = _0x11fcac;
  if (_0x5e5bc7 !== (_0x5e5bc7 | 0)) return undefined;
  var _0x573384 = this[_0x2a6196(521)]();
  if (_0x5e5bc7 < 0) _0x5e5bc7 += _0x573384;
  if (_0x5e5bc7 > _0x573384) return undefined;
  if (arguments[_0x2a6196(534)] > 2) {
    var _0x899a14, _0x3b742a, _0x156e9e, _0x36112a = arguments.length, _0x485a0a = this[_0x2a6196(508)][_0x2a6196(534)], _0x347df9 = 2;
    if (!_0x573384 || _0x5e5bc7 < _0x573384 / 2) {
      _0x3b742a = new Array(_0x5e5bc7);
      for (_0x899a14 = 0; _0x899a14 < _0x5e5bc7; _0x899a14++) {
        _0x3b742a[_0x899a14] = this[_0x2a6196(508)][this[_0x2a6196(513)] + _0x899a14 & this._capacityMask];
      }
      _0x5e8d4b === 0 ? (_0x156e9e = [], _0x5e5bc7 > 0 && (this[_0x2a6196(513)] = this._head + _0x5e5bc7 + _0x485a0a & this[_0x2a6196(507)])) : (_0x156e9e = this[_0x2a6196(522)](_0x5e5bc7, _0x5e8d4b), this[_0x2a6196(513)] = this[_0x2a6196(513)] + _0x5e5bc7 + _0x485a0a & this[_0x2a6196(507)]);
      while (_0x36112a > _0x347df9) {
        this[_0x2a6196(517)](arguments[--_0x36112a]);
      }
      for (_0x899a14 = _0x5e5bc7; _0x899a14 > 0; _0x899a14--) {
        this[_0x2a6196(517)](_0x3b742a[_0x899a14 - 1]);
      }
    } else {
      _0x3b742a = new Array(_0x573384 - (_0x5e5bc7 + _0x5e8d4b));
      var _0x131085 = _0x3b742a[_0x2a6196(534)];
      for (_0x899a14 = 0; _0x899a14 < _0x131085; _0x899a14++) {
        _0x3b742a[_0x899a14] = this._list[this._head + _0x5e5bc7 + _0x5e8d4b + _0x899a14 & this[_0x2a6196(507)]];
      }
      _0x5e8d4b === 0 ? (_0x156e9e = [], _0x5e5bc7 != _0x573384 && (this[_0x2a6196(515)] = this[_0x2a6196(513)] + _0x5e5bc7 + _0x485a0a & this[_0x2a6196(507)])) : (_0x156e9e = this[_0x2a6196(522)](_0x5e5bc7, _0x5e8d4b), this[_0x2a6196(515)] = this[_0x2a6196(515)] - _0x131085 + _0x485a0a & this[_0x2a6196(507)]);
      while (_0x347df9 < _0x36112a) {
        this[_0x2a6196(505)](arguments[_0x347df9++]);
      }
      for (_0x899a14 = 0; _0x899a14 < _0x131085; _0x899a14++) {
        this[_0x2a6196(505)](_0x3b742a[_0x899a14]);
      }
    }
    return _0x156e9e;
  } else return this[_0x2a6196(522)](_0x5e5bc7, _0x5e8d4b);
}, Denque[_0x37c6ee(532)][_0x37c6ee(501)] = function clear() {
  var _0x4d9e5b = _0x37c6ee;
  this[_0x4d9e5b(508)] = new Array(this._list.length), this[_0x4d9e5b(513)] = 0, this._tail = 0;
}, Denque[_0x37c6ee(532)][_0x37c6ee(529)] = function isEmpty() {
  var _0x290921 = _0x37c6ee;
  return this[_0x290921(513)] === this._tail;
}, Denque[_0x37c6ee(532)][_0x37c6ee(495)] = function toArray() {
  return this._copyArray(false);
}, Denque[_0x37c6ee(532)][_0x37c6ee(516)] = function _fromArray(_0x262fc7) {
  var _0x4aceb5 = _0x37c6ee, _0x2610e7 = _0x262fc7[_0x4aceb5(534)], _0x49b96e = this._nextPowerOf2(_0x2610e7);
  this[_0x4aceb5(508)] = new Array(_0x49b96e), this[_0x4aceb5(507)] = _0x49b96e - 1, this[_0x4aceb5(515)] = _0x2610e7;
  for (var _0x33e91a = 0; _0x33e91a < _0x2610e7; _0x33e91a++) this[_0x4aceb5(508)][_0x33e91a] = _0x262fc7[_0x33e91a];
}, Denque[_0x37c6ee(532)][_0x37c6ee(511)] = function _copyArray(_0x2aaaf5, _0x11294c) {
  var _0x2450b3 = _0x37c6ee, _0x40f23e = this._list, _0x1a9992 = _0x40f23e[_0x2450b3(534)], _0xf6d405 = this[_0x2450b3(534)];
  _0x11294c = _0x11294c | _0xf6d405;
  if (_0x11294c == _0xf6d405 && this._head < this._tail) return this[_0x2450b3(508)][_0x2450b3(533)](this[_0x2450b3(513)], this._tail);
  var _0x460983 = new Array(_0x11294c), _0x5b6888 = 0, _0x34dfdc;
  if (_0x2aaaf5 || this._head > this[_0x2450b3(515)]) {
    for (_0x34dfdc = this[_0x2450b3(513)]; _0x34dfdc < _0x1a9992; _0x34dfdc++) _0x460983[_0x5b6888++] = _0x40f23e[_0x34dfdc];
    for (_0x34dfdc = 0; _0x34dfdc < this._tail; _0x34dfdc++) _0x460983[_0x5b6888++] = _0x40f23e[_0x34dfdc];
  } else {
    for (_0x34dfdc = this[_0x2450b3(513)]; _0x34dfdc < this[_0x2450b3(515)]; _0x34dfdc++) _0x460983[_0x5b6888++] = _0x40f23e[_0x34dfdc];
  }
  return _0x460983;
}, Denque.prototype[_0x37c6ee(530)] = function _growArray() {
  var _0x487266 = _0x37c6ee;
  if (this._head != 0) {
    var _0x43c026 = this._copyArray(true, this._list[_0x487266(534)] << 1);
    this[_0x487266(515)] = this[_0x487266(508)][_0x487266(534)], this[_0x487266(513)] = 0, this[_0x487266(508)] = _0x43c026;
  } else this[_0x487266(515)] = this[_0x487266(508)].length, this._list.length <<= 1;
  this[_0x487266(507)] = this._capacityMask << 1 | 1;
}, Denque[_0x37c6ee(532)][_0x37c6ee(504)] = function _shrinkArray() {
  var _0x1e896a = _0x37c6ee;
  this[_0x1e896a(508)][_0x1e896a(534)] >>>= 1, this[_0x1e896a(507)] >>>= 1;
}, Denque[_0x37c6ee(532)][_0x37c6ee(537)] = function _nextPowerOf2(_0x5c8b27) {
  var _0x52d02d = _0x37c6ee, _0xeb468f = Math[_0x52d02d(506)](_0x5c8b27) / Math.log(2), _0x23e163 = 1 << _0xeb468f + 1;
  return Math[_0x52d02d(527)](_0x23e163, 4);
}, module[_0x37c6ee(498)] = Denque;
