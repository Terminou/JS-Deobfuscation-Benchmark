module.exports = PriorityQueue;
function PriorityQueue(_0xddf912) {
  this._comparator = _0xddf912 || PriorityQueue.DEFAULT_COMPARATOR;
  this._elements = [];
}
PriorityQueue.DEFAULT_COMPARATOR = function (_0x38d094, _0x5dd296) {
  if (typeof _0x38d094 === "number" && typeof _0x5dd296 === "number") {
    return _0x38d094 - _0x5dd296;
  } else {
    _0x38d094 = _0x38d094.toString();
    _0x5dd296 = _0x5dd296.toString();
    if (_0x38d094 == _0x5dd296) {
      return 0;
    }
    if (_0x38d094 > _0x5dd296) {
      return 1;
    } else {
      return -1;
    }
  }
};
PriorityQueue.prototype.isEmpty = function () {
  return this.size() === 0;
};
PriorityQueue.prototype.peek = function () {
  if (this.isEmpty()) {
    throw new Error("PriorityQueue is empty");
  }
  return this._elements[0];
};
PriorityQueue.prototype.deq = function () {
  var _0x589b78 = this.peek();
  var _0x5d64cc = this._elements.pop();
  var _0x3a05c6 = this.size();
  if (_0x3a05c6 === 0) {
    return _0x589b78;
  }
  this._elements[0] = _0x5d64cc;
  var _0x3700f5 = 0;
  while (_0x3700f5 < _0x3a05c6) {
    var _0x301f31 = _0x3700f5;
    var _0x2fc42f = _0x3700f5 * 2 + 1;
    var _0x1e2893 = _0x3700f5 * 2 + 2;
    if (_0x2fc42f < _0x3a05c6 && this._compare(_0x2fc42f, _0x301f31) >= 0) {
      _0x301f31 = _0x2fc42f;
    }
    if (_0x1e2893 < _0x3a05c6 && this._compare(_0x1e2893, _0x301f31) >= 0) {
      _0x301f31 = _0x1e2893;
    }
    if (_0x301f31 === _0x3700f5) {
      break;
    }
    this._swap(_0x301f31, _0x3700f5);
    _0x3700f5 = _0x301f31;
  }
  return _0x589b78;
};
PriorityQueue.prototype.enq = function (_0x10a311) {
  var _0xe7525d = this._elements.push(_0x10a311);
  var _0x2d49e7 = _0xe7525d - 1;
  while (_0x2d49e7 > 0) {
    var _0x24100f = Math.floor((_0x2d49e7 - 1) / 2);
    if (this._compare(_0x2d49e7, _0x24100f) <= 0) {
      break;
    }
    this._swap(_0x24100f, _0x2d49e7);
    _0x2d49e7 = _0x24100f;
  }
  return _0xe7525d;
};
PriorityQueue.prototype.size = function () {
  return this._elements.length;
};
PriorityQueue.prototype.forEach = function (_0x39de05) {
  return this._elements.forEach(_0x39de05);
};
PriorityQueue.prototype._compare = function (_0x14c536, _0x2a7c2a) {
  return this._comparator(this._elements[_0x14c536], this._elements[_0x2a7c2a]);
};
PriorityQueue.prototype._swap = function (_0x38866e, _0x328761) {
  var _0x20e1db = this._elements[_0x38866e];
  this._elements[_0x38866e] = this._elements[_0x328761];
  this._elements[_0x328761] = _0x20e1db;
};