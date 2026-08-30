'use strict';

function Denque(_0x108db4, _0x29597d) {
  var _0x29597d = _0x29597d || {};
  this._capacity = _0x29597d.capacity;
  this._head = 0;
  this._tail = 0;
  if (Array.isArray(_0x108db4)) {
    this._fromArray(_0x108db4);
  } else {
    this._capacityMask = 3;
    this._list = new Array(4);
  }
}
Denque.prototype.peekAt = function peekAt(_0x4403a) {
  var _0x37d52e = _0x4403a;
  if (_0x37d52e !== (_0x37d52e | 0)) {
    return undefined;
  }
  var _0x52c1aa = this.size();
  if (_0x37d52e >= _0x52c1aa || _0x37d52e < -_0x52c1aa) {
    return undefined;
  }
  if (_0x37d52e < 0) {
    _0x37d52e += _0x52c1aa;
  }
  _0x37d52e = this._head + _0x37d52e & this._capacityMask;
  return this._list[_0x37d52e];
};
Denque.prototype.get = function get(_0x1495a3) {
  return this.peekAt(_0x1495a3);
};
Denque.prototype.peek = function peek() {
  if (this._head === this._tail) {
    return undefined;
  }
  return this._list[this._head];
};
Denque.prototype.peekFront = function peekFront() {
  return this.peek();
};
Denque.prototype.peekBack = function peekBack() {
  return this.peekAt(-1);
};
Object.defineProperty(Denque.prototype, "length", {
  get: function length() {
    return this.size();
  }
});
Denque.prototype.size = function size() {
  if (this._head === this._tail) {
    return 0;
  }
  if (this._head < this._tail) {
    return this._tail - this._head;
  } else {
    return this._capacityMask + 1 - (this._head - this._tail);
  }
};
Denque.prototype.unshift = function unshift(_0x54a1d7) {
  if (arguments.length === 0) {
    return this.size();
  }
  var _0x2dbc71 = this._list.length;
  this._head = this._head - 1 + _0x2dbc71 & this._capacityMask;
  this._list[this._head] = _0x54a1d7;
  if (this._tail === this._head) {
    this._growArray();
  }
  if (this._capacity && this.size() > this._capacity) {
    this.pop();
  }
  if (this._head < this._tail) {
    return this._tail - this._head;
  } else {
    return this._capacityMask + 1 - (this._head - this._tail);
  }
};
Denque.prototype.shift = function shift() {
  var _0x22ff3d = this._head;
  if (_0x22ff3d === this._tail) {
    return undefined;
  }
  var _0x4aeac3 = this._list[_0x22ff3d];
  this._list[_0x22ff3d] = undefined;
  this._head = _0x22ff3d + 1 & this._capacityMask;
  if (_0x22ff3d < 2 && this._tail > 10000 && this._tail <= this._list.length >>> 2) {
    this._shrinkArray();
  }
  return _0x4aeac3;
};
Denque.prototype.push = function push(_0x2e5501) {
  if (arguments.length === 0) {
    return this.size();
  }
  var _0x12a9cd = this._tail;
  this._list[_0x12a9cd] = _0x2e5501;
  this._tail = _0x12a9cd + 1 & this._capacityMask;
  if (this._tail === this._head) {
    this._growArray();
  }
  if (this._capacity && this.size() > this._capacity) {
    this.shift();
  }
  if (this._head < this._tail) {
    return this._tail - this._head;
  } else {
    return this._capacityMask + 1 - (this._head - this._tail);
  }
};
Denque.prototype.pop = function pop() {
  var _0x4073c0 = this._tail;
  if (_0x4073c0 === this._head) {
    return undefined;
  }
  var _0x4059c5 = this._list.length;
  this._tail = _0x4073c0 - 1 + _0x4059c5 & this._capacityMask;
  var _0x341b0a = this._list[this._tail];
  this._list[this._tail] = undefined;
  if (this._head < 2 && _0x4073c0 > 10000 && _0x4073c0 <= _0x4059c5 >>> 2) {
    this._shrinkArray();
  }
  return _0x341b0a;
};
Denque.prototype.removeOne = function removeOne(_0x9366c6) {
  var _0x52dc74 = _0x9366c6;
  if (_0x52dc74 !== (_0x52dc74 | 0)) {
    return undefined;
  }
  if (this._head === this._tail) {
    return undefined;
  }
  var _0xe57afe = this.size();
  var _0x28486e = this._list.length;
  if (_0x52dc74 >= _0xe57afe || _0x52dc74 < -_0xe57afe) {
    return undefined;
  }
  if (_0x52dc74 < 0) {
    _0x52dc74 += _0xe57afe;
  }
  _0x52dc74 = this._head + _0x52dc74 & this._capacityMask;
  var _0x9c8814 = this._list[_0x52dc74];
  var _0x15b5d5;
  if (_0x9366c6 < _0xe57afe / 2) {
    for (_0x15b5d5 = _0x9366c6; _0x15b5d5 > 0; _0x15b5d5--) {
      this._list[_0x52dc74] = this._list[_0x52dc74 = _0x52dc74 - 1 + _0x28486e & this._capacityMask];
    }
    this._list[_0x52dc74] = undefined;
    this._head = this._head + 1 + _0x28486e & this._capacityMask;
  } else {
    for (_0x15b5d5 = _0xe57afe - 1 - _0x9366c6; _0x15b5d5 > 0; _0x15b5d5--) {
      this._list[_0x52dc74] = this._list[_0x52dc74 = _0x52dc74 + 1 + _0x28486e & this._capacityMask];
    }
    this._list[_0x52dc74] = undefined;
    this._tail = this._tail - 1 + _0x28486e & this._capacityMask;
  }
  return _0x9c8814;
};
Denque.prototype.remove = function remove(_0x1ddd40, _0x45995d) {
  var _0x567f51 = _0x1ddd40;
  var _0x4ad6b1;
  var _0x3b7784 = _0x45995d;
  if (_0x567f51 !== (_0x567f51 | 0)) {
    return undefined;
  }
  if (this._head === this._tail) {
    return undefined;
  }
  var _0x13cce4 = this.size();
  var _0x496b78 = this._list.length;
  if (_0x567f51 >= _0x13cce4 || _0x567f51 < -_0x13cce4 || _0x45995d < 1) {
    return undefined;
  }
  if (_0x567f51 < 0) {
    _0x567f51 += _0x13cce4;
  }
  if (_0x45995d === 1 || !_0x45995d) {
    _0x4ad6b1 = new Array(1);
    _0x4ad6b1[0] = this.removeOne(_0x567f51);
    return _0x4ad6b1;
  }
  if (_0x567f51 === 0 && _0x567f51 + _0x45995d >= _0x13cce4) {
    _0x4ad6b1 = this.toArray();
    this.clear();
    return _0x4ad6b1;
  }
  if (_0x567f51 + _0x45995d > _0x13cce4) {
    _0x45995d = _0x13cce4 - _0x567f51;
  }
  var _0x1a342f;
  _0x4ad6b1 = new Array(_0x45995d);
  for (_0x1a342f = 0; _0x1a342f < _0x45995d; _0x1a342f++) {
    _0x4ad6b1[_0x1a342f] = this._list[this._head + _0x567f51 + _0x1a342f & this._capacityMask];
  }
  _0x567f51 = this._head + _0x567f51 & this._capacityMask;
  if (_0x1ddd40 + _0x45995d === _0x13cce4) {
    this._tail = this._tail - _0x45995d + _0x496b78 & this._capacityMask;
    for (_0x1a342f = _0x45995d; _0x1a342f > 0; _0x1a342f--) {
      this._list[_0x567f51 = _0x567f51 + 1 + _0x496b78 & this._capacityMask] = undefined;
    }
    return _0x4ad6b1;
  }
  if (_0x1ddd40 === 0) {
    this._head = this._head + _0x45995d + _0x496b78 & this._capacityMask;
    for (_0x1a342f = _0x45995d - 1; _0x1a342f > 0; _0x1a342f--) {
      this._list[_0x567f51 = _0x567f51 + 1 + _0x496b78 & this._capacityMask] = undefined;
    }
    return _0x4ad6b1;
  }
  if (_0x567f51 < _0x13cce4 / 2) {
    this._head = this._head + _0x1ddd40 + _0x45995d + _0x496b78 & this._capacityMask;
    for (_0x1a342f = _0x1ddd40; _0x1a342f > 0; _0x1a342f--) {
      this.unshift(this._list[_0x567f51 = _0x567f51 - 1 + _0x496b78 & this._capacityMask]);
    }
    _0x567f51 = this._head - 1 + _0x496b78 & this._capacityMask;
    while (_0x3b7784 > 0) {
      this._list[_0x567f51 = _0x567f51 - 1 + _0x496b78 & this._capacityMask] = undefined;
      _0x3b7784--;
    }
    if (_0x1ddd40 < 0) {
      this._tail = _0x567f51;
    }
  } else {
    this._tail = _0x567f51;
    _0x567f51 = _0x567f51 + _0x45995d + _0x496b78 & this._capacityMask;
    for (_0x1a342f = _0x13cce4 - (_0x45995d + _0x1ddd40); _0x1a342f > 0; _0x1a342f--) {
      this.push(this._list[_0x567f51++]);
    }
    _0x567f51 = this._tail;
    while (_0x3b7784 > 0) {
      this._list[_0x567f51 = _0x567f51 + 1 + _0x496b78 & this._capacityMask] = undefined;
      _0x3b7784--;
    }
  }
  if (this._head < 2 && this._tail > 10000 && this._tail <= _0x496b78 >>> 2) {
    this._shrinkArray();
  }
  return _0x4ad6b1;
};
Denque.prototype.splice = function splice(_0x31c59c, _0x342fe3) {
  var _0x39efba = _0x31c59c;
  if (_0x39efba !== (_0x39efba | 0)) {
    return undefined;
  }
  var _0x3aa30b = this.size();
  if (_0x39efba < 0) {
    _0x39efba += _0x3aa30b;
  }
  if (_0x39efba > _0x3aa30b) {
    return undefined;
  }
  if (arguments.length > 2) {
    var _0x1696ac;
    var _0x326133;
    var _0x574d94;
    var _0x1a110e = arguments.length;
    var _0xe2d6 = this._list.length;
    var _0x3b8006 = 2;
    if (!_0x3aa30b || _0x39efba < _0x3aa30b / 2) {
      _0x326133 = new Array(_0x39efba);
      for (_0x1696ac = 0; _0x1696ac < _0x39efba; _0x1696ac++) {
        _0x326133[_0x1696ac] = this._list[this._head + _0x1696ac & this._capacityMask];
      }
      if (_0x342fe3 === 0) {
        _0x574d94 = [];
        if (_0x39efba > 0) {
          this._head = this._head + _0x39efba + _0xe2d6 & this._capacityMask;
        }
      } else {
        _0x574d94 = this.remove(_0x39efba, _0x342fe3);
        this._head = this._head + _0x39efba + _0xe2d6 & this._capacityMask;
      }
      while (_0x1a110e > _0x3b8006) {
        this.unshift(arguments[--_0x1a110e]);
      }
      for (_0x1696ac = _0x39efba; _0x1696ac > 0; _0x1696ac--) {
        this.unshift(_0x326133[_0x1696ac - 1]);
      }
    } else {
      _0x326133 = new Array(_0x3aa30b - (_0x39efba + _0x342fe3));
      var _0x2d52ae = _0x326133.length;
      for (_0x1696ac = 0; _0x1696ac < _0x2d52ae; _0x1696ac++) {
        _0x326133[_0x1696ac] = this._list[this._head + _0x39efba + _0x342fe3 + _0x1696ac & this._capacityMask];
      }
      if (_0x342fe3 === 0) {
        _0x574d94 = [];
        if (_0x39efba != _0x3aa30b) {
          this._tail = this._head + _0x39efba + _0xe2d6 & this._capacityMask;
        }
      } else {
        _0x574d94 = this.remove(_0x39efba, _0x342fe3);
        this._tail = this._tail - _0x2d52ae + _0xe2d6 & this._capacityMask;
      }
      while (_0x3b8006 < _0x1a110e) {
        this.push(arguments[_0x3b8006++]);
      }
      for (_0x1696ac = 0; _0x1696ac < _0x2d52ae; _0x1696ac++) {
        this.push(_0x326133[_0x1696ac]);
      }
    }
    return _0x574d94;
  } else {
    return this.remove(_0x39efba, _0x342fe3);
  }
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
Denque.prototype._fromArray = function _fromArray(_0x289b3e) {
  var _0x314d16 = _0x289b3e.length;
  var _0x2bc308 = this._nextPowerOf2(_0x314d16);
  this._list = new Array(_0x2bc308);
  this._capacityMask = _0x2bc308 - 1;
  this._tail = _0x314d16;
  for (var _0x1bf5e1 = 0; _0x1bf5e1 < _0x314d16; _0x1bf5e1++) {
    this._list[_0x1bf5e1] = _0x289b3e[_0x1bf5e1];
  }
};
Denque.prototype._copyArray = function _copyArray(_0xb14c0d, _0x2d81cb) {
  var _0x5c4786 = this._list;
  var _0x4c0cf9 = _0x5c4786.length;
  var _0x5a7423 = this.length;
  _0x2d81cb = _0x2d81cb | _0x5a7423;
  if (_0x2d81cb == _0x5a7423 && this._head < this._tail) {
    return this._list.slice(this._head, this._tail);
  }
  var _0x49dbf8 = new Array(_0x2d81cb);
  var _0x2982e1 = 0;
  var _0x1b9f2d;
  if (_0xb14c0d || this._head > this._tail) {
    for (_0x1b9f2d = this._head; _0x1b9f2d < _0x4c0cf9; _0x1b9f2d++) {
      _0x49dbf8[_0x2982e1++] = _0x5c4786[_0x1b9f2d];
    }
    for (_0x1b9f2d = 0; _0x1b9f2d < this._tail; _0x1b9f2d++) {
      _0x49dbf8[_0x2982e1++] = _0x5c4786[_0x1b9f2d];
    }
  } else {
    for (_0x1b9f2d = this._head; _0x1b9f2d < this._tail; _0x1b9f2d++) {
      _0x49dbf8[_0x2982e1++] = _0x5c4786[_0x1b9f2d];
    }
  }
  return _0x49dbf8;
};
Denque.prototype._growArray = function _growArray() {
  if (this._head != 0) {
    var _0x3a0671 = this._copyArray(true, this._list.length << 1);
    this._tail = this._list.length;
    this._head = 0;
    this._list = _0x3a0671;
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
Denque.prototype._nextPowerOf2 = function _nextPowerOf2(_0x5c658c) {
  var _0x589cda = Math.log(_0x5c658c) / Math.log(2);
  var _0x5b476c = 1 << _0x589cda + 1;
  return Math.max(_0x5b476c, 4);
};
module.exports = Denque;