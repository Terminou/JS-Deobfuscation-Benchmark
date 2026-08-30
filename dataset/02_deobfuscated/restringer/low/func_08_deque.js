'use strict';
function _0x2bb2() {
  return [
    'toArray',
    '109472IqZuWr',
    'peekBack',
    'exports',
    'peek',
    '735574TrwOci',
    'clear',
    'shift',
    '49134PCqKwp',
    '_shrinkArray',
    'push',
    'log',
    '_capacityMask',
    '_list',
    '184426qfpcZo',
    '567459NBkoeT',
    '_copyArray',
    'peekAt',
    '_head',
    'defineProperty',
    '_tail',
    '_fromArray',
    'unshift',
    '945885YKVMXz',
    '20jnFNmH',
    'removeOne',
    'size',
    'remove',
    '_capacity',
    '8ZQfrir',
    '6yHkoQQ',
    '8dHZLDB',
    'max',
    'pop',
    'isEmpty',
    '_growArray',
    'isArray',
    'prototype',
    'slice',
    'length',
    'get',
    'peekFront',
    '_nextPowerOf2',
    '210260AFaHCS'
  ];
}
function _0x48c8(_0x79e53, _0x21ff23) {
  _0x79e53 = _0x79e53 - 495;
  var _0x2bb2f6 = [
    'toArray',
    '109472IqZuWr',
    'peekBack',
    'exports',
    'peek',
    '735574TrwOci',
    'clear',
    'shift',
    '49134PCqKwp',
    '_shrinkArray',
    'push',
    'log',
    '_capacityMask',
    '_list',
    '184426qfpcZo',
    '567459NBkoeT',
    '_copyArray',
    'peekAt',
    '_head',
    'defineProperty',
    '_tail',
    '_fromArray',
    'unshift',
    '945885YKVMXz',
    '20jnFNmH',
    'removeOne',
    'size',
    'remove',
    '_capacity',
    '8ZQfrir',
    '6yHkoQQ',
    '8dHZLDB',
    'max',
    'pop',
    'isEmpty',
    '_growArray',
    'isArray',
    'prototype',
    'slice',
    'length',
    'get',
    'peekFront',
    '_nextPowerOf2',
    '210260AFaHCS'
  ];
  var _0x48c80e = _0x2bb2f6[_0x79e53];
  return _0x2bb2f6[_0x79e53];
}
function Denque(_0x1cd539, _0x53c040) {
  var _0x53c040 = _0x53c040 || {};
  this._capacity = _0x53c040.capacity;
  this._head = 0;
  this._tail = 0;
  Array.isArray(_0x1cd539) ? this._fromArray(_0x1cd539) : (this._capacityMask = 3, this._list = new Array(4));
}
Denque.prototype.peekAt = function peekAt(_0x3e4bf3) {
  var _0x1d8a42 = _0x3e4bf3;
  if (_0x1d8a42 !== (_0x1d8a42 | 0))
    return void 0;
  var _0x3fad95 = this.size();
  if (_0x1d8a42 >= _0x3fad95 || _0x1d8a42 < -_0x3fad95)
    return undefined;
  if (_0x1d8a42 < 0)
    _0x1d8a42 += _0x3fad95;
  _0x1d8a42 = this._head + _0x1d8a42 & this._capacityMask;
  return this._list[_0x1d8a42];
};
Denque.prototype.get = function get(_0x36c372) {
  return this.peekAt(_0x36c372);
};
Denque.prototype.peek = function peek() {
  if (this._head === this._tail)
    return undefined;
  return this._list[this._head];
};
Denque.prototype.peekFront = function peekFront() {
  return this.peek();
};
Denque.prototype.peekBack = function peekBack() {
  return this.peekAt(-1);
};
Object.defineProperty(Denque.prototype, 'length', {
  get: function length() {
    return this.size();
  }
});
Denque.prototype.size = function size() {
  if (this._head === this._tail)
    return 0;
  if (this._head < this._tail)
    return this._tail - this._head;
  else
    return this._capacityMask + 1 - (this._head - this._tail);
};
Denque.prototype.unshift = function unshift(_0x32fcf0) {
  if (arguments.length === 0)
    return this.size();
  var _0x4dede3 = this._list.length;
  this._head = this._head - 1 + this._list.length & this._capacityMask;
  this._list[this._head] = _0x32fcf0;
  if (this._tail === this._head)
    this._growArray();
  if (this._capacity && this.size() > this._capacity)
    this.pop();
  if (this._head < this._tail)
    return this._tail - this._head;
  else
    return this._capacityMask + 1 - (this._head - this._tail);
};
Denque.prototype.shift = function shift() {
  var _0x36b6ec = this._head;
  if (_0x36b6ec === this._tail)
    return undefined;
  var _0x45fa87 = this._list[_0x36b6ec];
  this._list[_0x36b6ec] = undefined;
  this._head = _0x36b6ec + 1 & this._capacityMask;
  if (_0x36b6ec < 2 && this._tail > 10000 && this._tail <= this._list.length >>> 2)
    this._shrinkArray();
  return this._list[_0x36b6ec];
};
Denque.prototype.push = function push(_0x1d7c9f) {
  if (arguments.length === 0)
    return this.size();
  var _0x4ea8c7 = this._tail;
  this._list[_0x4ea8c7] = _0x1d7c9f;
  this._tail = _0x4ea8c7 + 1 & this._capacityMask;
  if (this._tail === this._head) {
    this._growArray();
  }
  if (this._capacity && this.size() > this._capacity) {
    this.shift();
  }
  if (this._head < this._tail)
    return this._tail - this._head;
  else
    return this._capacityMask + 1 - (this._head - this._tail);
};
Denque.prototype.pop = function pop() {
  var _0x23890e = this._tail;
  if (this._tail === this._head)
    return undefined;
  var _0xb4147d = this._list.length;
  this._tail = this._tail - 1 + this._list.length & this._capacityMask;
  var _0x53bedc = this._list[this._tail];
  this._list[this._tail] = undefined;
  if (this._head < 2 && this._tail > 10000 && this._tail <= this._list.length >>> 2)
    this._shrinkArray();
  return this._list[this._tail];
};
Denque.prototype.removeOne = function removeOne(_0x516ca2) {
  var _0x1b370b = _0x516ca2;
  if (_0x1b370b !== (_0x1b370b | 0))
    return void 0;
  if (this._head === this._tail)
    return void 0;
  var _0x553237 = this.size();
  var _0x3dc1f6 = this._list.length;
  if (_0x1b370b >= _0x553237 || _0x1b370b < -_0x553237)
    return void 0;
  if (_0x1b370b < 0)
    _0x1b370b += _0x553237;
  _0x1b370b = this._head + _0x1b370b & this._capacityMask;
  var _0x37ed16 = this._list[_0x1b370b];
  var _0x37b526;
  if (_0x516ca2 < _0x553237 / 2) {
    for (_0x37b526 = _0x516ca2; _0x37b526 > 0; _0x37b526--) {
      this._list[_0x1b370b] = this._list[_0x1b370b = _0x1b370b - 1 + this._list.length & this._capacityMask];
    }
    this._list[_0x1b370b] = void 0;
    this._head = this._head + 1 + this._list.length & this._capacityMask;
  } else {
    for (_0x37b526 = _0x553237 - 1 - _0x516ca2; _0x37b526 > 0; _0x37b526--) {
      this._list[_0x1b370b] = this._list[_0x1b370b = _0x1b370b + 1 + this._list.length & this._capacityMask];
    }
    this._list[_0x1b370b] = void 0;
    this._tail = this._tail - 1 + this._list.length & this._capacityMask;
  }
  return this._list[_0x1b370b];
};
Denque.prototype.remove = function remove(_0x5e7ead, _0x4ddaed) {
  var _0x36944a = _0x5e7ead;
  var _0x11dade;
  var _0x1142f4 = _0x4ddaed;
  if (_0x36944a !== (_0x36944a | 0))
    return void 0;
  if (this._head === this._tail)
    return void 0;
  var _0x42f959 = this.size();
  var _0x4c7db5 = this._list.length;
  if (_0x36944a >= _0x42f959 || _0x36944a < -_0x42f959 || _0x4ddaed < 1)
    return void 0;
  if (_0x36944a < 0)
    _0x36944a += _0x42f959;
  if (_0x4ddaed === 1 || !_0x4ddaed) {
    _0x11dade = new Array(1);
    _0x11dade[0] = this.removeOne(_0x36944a);
    return _0x11dade;
  }
  if (_0x36944a === 0 && _0x36944a + _0x4ddaed >= _0x42f959) {
    _0x11dade = this.toArray();
    this.clear();
    return _0x11dade;
  }
  if (_0x36944a + _0x4ddaed > _0x42f959)
    _0x4ddaed = _0x42f959 - _0x36944a;
  var _0x259e4d;
  _0x11dade = new Array(_0x4ddaed);
  for (_0x259e4d = 0; _0x259e4d < _0x4ddaed; _0x259e4d++) {
    _0x11dade[_0x259e4d] = this._list[this._head + _0x36944a + _0x259e4d & this._capacityMask];
  }
  _0x36944a = this._head + _0x36944a & this._capacityMask;
  if (_0x5e7ead + _0x4ddaed === _0x42f959) {
    this._tail = this._tail - _0x4ddaed + this._list.length & this._capacityMask;
    for (_0x259e4d = _0x4ddaed; _0x259e4d > 0; _0x259e4d--) {
      this._list[_0x36944a = _0x36944a + 1 + this._list.length & this._capacityMask] = void 0;
    }
    return _0x11dade;
  }
  if (_0x5e7ead === 0) {
    this._head = this._head + _0x4ddaed + this._list.length & this._capacityMask;
    for (_0x259e4d = _0x4ddaed - 1; _0x259e4d > 0; _0x259e4d--) {
      this._list[_0x36944a = _0x36944a + 1 + this._list.length & this._capacityMask] = void 0;
    }
    return _0x11dade;
  }
  if (_0x36944a < _0x42f959 / 2) {
    this._head = this._head + _0x5e7ead + _0x4ddaed + this._list.length & this._capacityMask;
    for (_0x259e4d = _0x5e7ead; _0x259e4d > 0; _0x259e4d--) {
      this.unshift(this._list[_0x36944a = _0x36944a - 1 + this._list.length & this._capacityMask]);
    }
    _0x36944a = this._head - 1 + this._list.length & this._capacityMask;
    while (_0x1142f4 > 0) {
      this._list[_0x36944a = _0x36944a - 1 + this._list.length & this._capacityMask] = void 0;
      _0x1142f4--;
    }
    if (_0x5e7ead < 0)
      this._tail = _0x36944a;
  } else {
    this._tail = _0x36944a;
    _0x36944a = _0x36944a + _0x4ddaed + this._list.length & this._capacityMask;
    for (_0x259e4d = _0x42f959 - (_0x4ddaed + _0x5e7ead); _0x259e4d > 0; _0x259e4d--) {
      this.push(this._list[_0x36944a++]);
    }
    _0x36944a = this._tail;
    while (_0x1142f4 > 0) {
      this._list[_0x36944a = _0x36944a + 1 + this._list.length & this._capacityMask] = void 0;
      _0x1142f4--;
    }
  }
  if (this._head < 2 && this._tail > 10000 && this._tail <= this._list.length >>> 2)
    this._shrinkArray();
  return _0x11dade;
};
Denque.prototype.splice = function splice(_0x11fcac, _0x5e8d4b) {
  var _0x5e5bc7 = _0x11fcac;
  if (_0x5e5bc7 !== (_0x5e5bc7 | 0))
    return void 0;
  var _0x573384 = this.size();
  if (_0x5e5bc7 < 0)
    _0x5e5bc7 += _0x573384;
  if (_0x5e5bc7 > _0x573384)
    return void 0;
  if (arguments.length > 2) {
    var _0x899a14;
    var _0x3b742a;
    var _0x156e9e;
    var _0x36112a = arguments.length;
    var _0x485a0a = this._list.length;
    var _0x347df9 = 2;
    if (!_0x573384 || _0x5e5bc7 < _0x573384 / 2) {
      _0x3b742a = new Array(_0x5e5bc7);
      for (_0x899a14 = 0; _0x899a14 < _0x5e5bc7; _0x899a14++) {
        _0x3b742a[_0x899a14] = this._list[this._head + _0x899a14 & this._capacityMask];
      }
      _0x5e8d4b === 0 ? (_0x156e9e = [], _0x5e5bc7 > 0 && (this._head = this._head + _0x5e5bc7 + this._list.length & this._capacityMask)) : (_0x156e9e = this.remove(_0x5e5bc7, _0x5e8d4b), this._head = this._head + _0x5e5bc7 + this._list.length & this._capacityMask);
      while (_0x36112a > _0x347df9) {
        this.unshift(arguments[--_0x36112a]);
      }
      for (_0x899a14 = _0x5e5bc7; _0x899a14 > 0; _0x899a14--) {
        this.unshift(_0x3b742a[_0x899a14 - 1]);
      }
    } else {
      _0x3b742a = new Array(_0x573384 - (_0x5e5bc7 + _0x5e8d4b));
      var _0x131085 = _0x3b742a.length;
      for (_0x899a14 = 0; _0x899a14 < _0x3b742a.length; _0x899a14++) {
        _0x3b742a[_0x899a14] = this._list[this._head + _0x5e5bc7 + _0x5e8d4b + _0x899a14 & this._capacityMask];
      }
      _0x5e8d4b === 0 ? (_0x156e9e = [], _0x5e5bc7 != _0x573384 && (this._tail = this._head + _0x5e5bc7 + this._list.length & this._capacityMask)) : (_0x156e9e = this.remove(_0x5e5bc7, _0x5e8d4b), this._tail = this._tail - _0x3b742a.length + this._list.length & this._capacityMask);
      while (_0x347df9 < _0x36112a) {
        this.push(arguments[_0x347df9++]);
      }
      for (_0x899a14 = 0; _0x899a14 < _0x3b742a.length; _0x899a14++) {
        this.push(_0x3b742a[_0x899a14]);
      }
    }
    return _0x156e9e;
  } else
    return this.remove(_0x5e5bc7, _0x5e8d4b);
};
Denque.prototype.clear = function clear() {
  this._list = new Array(this._list.length);
  this._head = 0;
  this._tail = 0;
};
Denque.prototype.isEmpty = function isEmpty() {
  return this._head === this._tail;
};
Denque.prototype.toArray = function toArray() {
  return this._copyArray(false);
};
Denque.prototype._fromArray = function _fromArray(_0x262fc7) {
  var _0x2610e7 = _0x262fc7.length;
  var _0x49b96e = this._nextPowerOf2(_0x262fc7.length);
  this._list = new Array(_0x49b96e);
  this._capacityMask = _0x49b96e - 1;
  this._tail = _0x262fc7.length;
  for (var _0x33e91a = 0; _0x33e91a < _0x262fc7.length; _0x33e91a++)
    this._list[_0x33e91a] = _0x262fc7[_0x33e91a];
};
Denque.prototype._copyArray = function _copyArray(_0x2aaaf5, _0x11294c) {
  var _0x40f23e = this._list;
  var _0x1a9992 = this._list.length;
  var _0xf6d405 = this.length;
  _0x11294c = _0x11294c | this.length;
  if (_0x11294c == this.length && this._head < this._tail)
    return this._list.slice(this._head, this._tail);
  var _0x460983 = new Array(_0x11294c);
  var _0x5b6888 = 0;
  var _0x34dfdc;
  if (_0x2aaaf5 || this._head > this._tail) {
    for (_0x34dfdc = this._head; _0x34dfdc < this._list.length; _0x34dfdc++)
      _0x460983[_0x5b6888++] = this._list[_0x34dfdc];
    for (_0x34dfdc = 0; _0x34dfdc < this._tail; _0x34dfdc++)
      _0x460983[_0x5b6888++] = this._list[_0x34dfdc];
  } else {
    for (_0x34dfdc = this._head; _0x34dfdc < this._tail; _0x34dfdc++)
      _0x460983[_0x5b6888++] = this._list[_0x34dfdc];
  }
  return _0x460983;
};
Denque.prototype._growArray = function _growArray() {
  if (this._head != 0) {
    var _0x43c026 = this._copyArray(true, this._list.length << 1);
    this._tail = this._list.length;
    this._head = 0;
    this._list = _0x43c026;
  } else {
    this._tail = this._list.length;
    this._list.length <<= 1;
  }
  this._capacityMask = this._capacityMask << 1 | 1;
};
Denque.prototype._shrinkArray = function _shrinkArray() {
  this._list.length >>>= 1;
  this._capacityMask >>>= 1;
};
Denque.prototype._nextPowerOf2 = function _nextPowerOf2(_0x5c8b27) {
  var _0xeb468f = Math.log(_0x5c8b27) / Math.log(2);
  var _0x23e163 = 1 << _0xeb468f + 1;
  return Math.max(_0x23e163, 4);
};
module.exports = Denque;