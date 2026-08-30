'use strict';

function Denque(_0x5907d4, _0x3740ff) {
  var _0x3740ff = _0x3740ff || {};
  this._capacity = _0x3740ff.capacity;
  this._head = 0;
  this._tail = 0;
  if (Array.isArray(_0x5907d4)) {
    this._fromArray(_0x5907d4);
  } else {
    this._capacityMask = 3;
    this._list = new Array(4);
  }
}
Denque.prototype.peekAt = function peekAt(_0x1f518f) {
  var _0x491693 = _0x1f518f;
  if (_0x491693 !== (_0x491693 | 0)) {
    return undefined;
  }
  var _0x37e4b4 = this.size();
  if (_0x491693 >= _0x37e4b4 || _0x491693 < -_0x37e4b4) {
    return undefined;
  }
  if (_0x491693 < 0) {
    _0x491693 += _0x37e4b4;
  }
  _0x491693 = this._head + _0x491693 & this._capacityMask;
  return this._list[_0x491693];
};
Denque.prototype.get = function get(_0x30e962) {
  return this.peekAt(_0x30e962);
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
Denque.prototype.unshift = function unshift(_0x3dd1cb) {
  if (arguments.length === 0) {
    return this.size();
  }
  var _0xad1166 = this._list.length;
  this._head = this._head - 1 + _0xad1166 & this._capacityMask;
  this._list[this._head] = _0x3dd1cb;
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
  var _0x45db47 = this._head;
  if (_0x45db47 === this._tail) {
    return undefined;
  }
  var _0x35bf17 = this._list[_0x45db47];
  this._list[_0x45db47] = undefined;
  this._head = _0x45db47 + 1 & this._capacityMask;
  if (_0x45db47 < 2 && this._tail > 10000 && this._tail <= this._list.length >>> 2) {
    this._shrinkArray();
  }
  return _0x35bf17;
};
Denque.prototype.push = function push(_0x5df289) {
  if (arguments.length === 0) {
    return this.size();
  }
  var _0x14e4dc = this._tail;
  this._list[_0x14e4dc] = _0x5df289;
  this._tail = _0x14e4dc + 1 & this._capacityMask;
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
  var _0x4a38ff = this._tail;
  if (_0x4a38ff === this._head) {
    return undefined;
  }
  var _0x1b06b7 = this._list.length;
  this._tail = _0x4a38ff - 1 + _0x1b06b7 & this._capacityMask;
  var _0x5505a9 = this._list[this._tail];
  this._list[this._tail] = undefined;
  if (this._head < 2 && _0x4a38ff > 10000 && _0x4a38ff <= _0x1b06b7 >>> 2) {
    this._shrinkArray();
  }
  return _0x5505a9;
};
Denque.prototype.removeOne = function removeOne(_0x132165) {
  var _0x22275d = _0x132165;
  if (_0x22275d !== (_0x22275d | 0)) {
    return undefined;
  }
  if (this._head === this._tail) {
    return undefined;
  }
  var _0x3f69bf = this.size();
  var _0x4e653c = this._list.length;
  if (_0x22275d >= _0x3f69bf || _0x22275d < -_0x3f69bf) {
    return undefined;
  }
  if (_0x22275d < 0) {
    _0x22275d += _0x3f69bf;
  }
  _0x22275d = this._head + _0x22275d & this._capacityMask;
  var _0x58ee23 = this._list[_0x22275d];
  var _0x2e8b4a;
  if (_0x132165 < _0x3f69bf / 2) {
    for (_0x2e8b4a = _0x132165; _0x2e8b4a > 0; _0x2e8b4a--) {
      this._list[_0x22275d] = this._list[_0x22275d = _0x22275d - 1 + _0x4e653c & this._capacityMask];
    }
    this._list[_0x22275d] = undefined;
    this._head = this._head + 1 + _0x4e653c & this._capacityMask;
  } else {
    for (_0x2e8b4a = _0x3f69bf - 1 - _0x132165; _0x2e8b4a > 0; _0x2e8b4a--) {
      this._list[_0x22275d] = this._list[_0x22275d = _0x22275d + 1 + _0x4e653c & this._capacityMask];
    }
    this._list[_0x22275d] = undefined;
    this._tail = this._tail - 1 + _0x4e653c & this._capacityMask;
  }
  return _0x58ee23;
};
Denque.prototype.remove = function remove(_0x1b0480, _0x3c9a09) {
  var _0x36480f = _0x1b0480;
  var _0x35170b;
  var _0x56f308 = _0x3c9a09;
  if (_0x36480f !== (_0x36480f | 0)) {
    return undefined;
  }
  if (this._head === this._tail) {
    return undefined;
  }
  var _0x21219f = this.size();
  var _0x530a43 = this._list.length;
  if (_0x36480f >= _0x21219f || _0x36480f < -_0x21219f || _0x3c9a09 < 1) {
    return undefined;
  }
  if (_0x36480f < 0) {
    _0x36480f += _0x21219f;
  }
  if (_0x3c9a09 === 1 || !_0x3c9a09) {
    _0x35170b = new Array(1);
    _0x35170b[0] = this.removeOne(_0x36480f);
    return _0x35170b;
  }
  if (_0x36480f === 0 && _0x36480f + _0x3c9a09 >= _0x21219f) {
    _0x35170b = this.toArray();
    this.clear();
    return _0x35170b;
  }
  if (_0x36480f + _0x3c9a09 > _0x21219f) {
    _0x3c9a09 = _0x21219f - _0x36480f;
  }
  var _0x219713;
  _0x35170b = new Array(_0x3c9a09);
  for (_0x219713 = 0; _0x219713 < _0x3c9a09; _0x219713++) {
    _0x35170b[_0x219713] = this._list[this._head + _0x36480f + _0x219713 & this._capacityMask];
  }
  _0x36480f = this._head + _0x36480f & this._capacityMask;
  if (_0x1b0480 + _0x3c9a09 === _0x21219f) {
    this._tail = this._tail - _0x3c9a09 + _0x530a43 & this._capacityMask;
    for (_0x219713 = _0x3c9a09; _0x219713 > 0; _0x219713--) {
      this._list[_0x36480f = _0x36480f + 1 + _0x530a43 & this._capacityMask] = undefined;
    }
    return _0x35170b;
  }
  if (_0x1b0480 === 0) {
    this._head = this._head + _0x3c9a09 + _0x530a43 & this._capacityMask;
    for (_0x219713 = _0x3c9a09 - 1; _0x219713 > 0; _0x219713--) {
      this._list[_0x36480f = _0x36480f + 1 + _0x530a43 & this._capacityMask] = undefined;
    }
    return _0x35170b;
  }
  if (_0x36480f < _0x21219f / 2) {
    this._head = this._head + _0x1b0480 + _0x3c9a09 + _0x530a43 & this._capacityMask;
    for (_0x219713 = _0x1b0480; _0x219713 > 0; _0x219713--) {
      this.unshift(this._list[_0x36480f = _0x36480f - 1 + _0x530a43 & this._capacityMask]);
    }
    _0x36480f = this._head - 1 + _0x530a43 & this._capacityMask;
    while (_0x56f308 > 0) {
      this._list[_0x36480f = _0x36480f - 1 + _0x530a43 & this._capacityMask] = undefined;
      _0x56f308--;
    }
    if (_0x1b0480 < 0) {
      this._tail = _0x36480f;
    }
  } else {
    this._tail = _0x36480f;
    _0x36480f = _0x36480f + _0x3c9a09 + _0x530a43 & this._capacityMask;
    for (_0x219713 = _0x21219f - (_0x3c9a09 + _0x1b0480); _0x219713 > 0; _0x219713--) {
      this.push(this._list[_0x36480f++]);
    }
    _0x36480f = this._tail;
    while (_0x56f308 > 0) {
      this._list[_0x36480f = _0x36480f + 1 + _0x530a43 & this._capacityMask] = undefined;
      _0x56f308--;
    }
  }
  if (this._head < 2 && this._tail > 10000 && this._tail <= _0x530a43 >>> 2) {
    this._shrinkArray();
  }
  return _0x35170b;
};
Denque.prototype.splice = function splice(_0x489e6c, _0x5c12b0) {
  var _0x380ccf = _0x489e6c;
  if (_0x380ccf !== (_0x380ccf | 0)) {
    return undefined;
  }
  var _0x1bdb72 = this.size();
  if (_0x380ccf < 0) {
    _0x380ccf += _0x1bdb72;
  }
  if (_0x380ccf > _0x1bdb72) {
    return undefined;
  }
  if (arguments.length > 2) {
    var _0x438258;
    var _0x32ff1f;
    var _0x581d94;
    var _0x1d9045 = arguments.length;
    var _0x505394 = this._list.length;
    var _0x105365 = 2;
    if (!_0x1bdb72 || _0x380ccf < _0x1bdb72 / 2) {
      _0x32ff1f = new Array(_0x380ccf);
      for (_0x438258 = 0; _0x438258 < _0x380ccf; _0x438258++) {
        _0x32ff1f[_0x438258] = this._list[this._head + _0x438258 & this._capacityMask];
      }
      if (_0x5c12b0 === 0) {
        _0x581d94 = [];
        if (_0x380ccf > 0) {
          this._head = this._head + _0x380ccf + _0x505394 & this._capacityMask;
        }
      } else {
        _0x581d94 = this.remove(_0x380ccf, _0x5c12b0);
        this._head = this._head + _0x380ccf + _0x505394 & this._capacityMask;
      }
      while (_0x1d9045 > _0x105365) {
        this.unshift(arguments[--_0x1d9045]);
      }
      for (_0x438258 = _0x380ccf; _0x438258 > 0; _0x438258--) {
        this.unshift(_0x32ff1f[_0x438258 - 1]);
      }
    } else {
      _0x32ff1f = new Array(_0x1bdb72 - (_0x380ccf + _0x5c12b0));
      var _0x23eb60 = _0x32ff1f.length;
      for (_0x438258 = 0; _0x438258 < _0x23eb60; _0x438258++) {
        _0x32ff1f[_0x438258] = this._list[this._head + _0x380ccf + _0x5c12b0 + _0x438258 & this._capacityMask];
      }
      if (_0x5c12b0 === 0) {
        _0x581d94 = [];
        if (_0x380ccf != _0x1bdb72) {
          this._tail = this._head + _0x380ccf + _0x505394 & this._capacityMask;
        }
      } else {
        _0x581d94 = this.remove(_0x380ccf, _0x5c12b0);
        this._tail = this._tail - _0x23eb60 + _0x505394 & this._capacityMask;
      }
      while (_0x105365 < _0x1d9045) {
        this.push(arguments[_0x105365++]);
      }
      for (_0x438258 = 0; _0x438258 < _0x23eb60; _0x438258++) {
        this.push(_0x32ff1f[_0x438258]);
      }
    }
    return _0x581d94;
  } else {
    return this.remove(_0x380ccf, _0x5c12b0);
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
Denque.prototype._fromArray = function _fromArray(_0x1f6cfd) {
  var _0xc8023a = _0x1f6cfd.length;
  var _0x157d9f = this._nextPowerOf2(_0xc8023a);
  this._list = new Array(_0x157d9f);
  this._capacityMask = _0x157d9f - 1;
  this._tail = _0xc8023a;
  for (var _0x320009 = 0; _0x320009 < _0xc8023a; _0x320009++) {
    this._list[_0x320009] = _0x1f6cfd[_0x320009];
  }
};
Denque.prototype._copyArray = function _copyArray(_0x4d055f, _0x468765) {
  var _0x1a7ee5 = this._list;
  var _0x2a91b9 = _0x1a7ee5.length;
  var _0x32815c = this.length;
  _0x468765 = _0x468765 | _0x32815c;
  if (_0x468765 == _0x32815c && this._head < this._tail) {
    return this._list.slice(this._head, this._tail);
  }
  var _0xecd30e = new Array(_0x468765);
  var _0x9aa105 = 0;
  var _0x11c501;
  if (_0x4d055f || this._head > this._tail) {
    for (_0x11c501 = this._head; _0x11c501 < _0x2a91b9; _0x11c501++) {
      _0xecd30e[_0x9aa105++] = _0x1a7ee5[_0x11c501];
    }
    for (_0x11c501 = 0; _0x11c501 < this._tail; _0x11c501++) {
      _0xecd30e[_0x9aa105++] = _0x1a7ee5[_0x11c501];
    }
  } else {
    for (_0x11c501 = this._head; _0x11c501 < this._tail; _0x11c501++) {
      _0xecd30e[_0x9aa105++] = _0x1a7ee5[_0x11c501];
    }
  }
  return _0xecd30e;
};
Denque.prototype._growArray = function _growArray() {
  if (this._head != 0) {
    var _0x27b3e1 = this._copyArray(true, this._list.length << 1);
    this._tail = this._list.length;
    this._head = 0;
    this._list = _0x27b3e1;
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
Denque.prototype._nextPowerOf2 = function _nextPowerOf2(_0x1cf870) {
  var _0x5f2299 = Math.log(_0x1cf870) / Math.log(2);
  var _0x53715e = 1 << _0x5f2299 + 1;
  return Math.max(_0x53715e, 4);
};
module.exports = Denque;