module.exports = PriorityQueue;
function PriorityQueue(_0x2e5583) {
  this._comparator = _0x2e5583 || PriorityQueue.DEFAULT_COMPARATOR;
  this._elements = [];
}
PriorityQueue.DEFAULT_COMPARATOR = function (_0x5892bb, _0x4acb1d) {
  if (typeof _0x5892bb === "number" && typeof _0x4acb1d === "number") {
    return _0x5892bb - _0x4acb1d;
  } else {
    _0x5892bb = _0x5892bb.toString();
    _0x4acb1d = _0x4acb1d.toString();
    if (_0x5892bb == _0x4acb1d) {
      return 0;
    }
    if (_0x5892bb > _0x4acb1d) {
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
  var _0x37a080 = this.peek();
  var _0x2c3cb6 = this._elements.pop();
  var _0x25a2ae = this.size();
  if (_0x25a2ae === 0) {
    return _0x37a080;
  }
  this._elements[0] = _0x2c3cb6;
  var _0x33920a = 0;
  while (_0x33920a < _0x25a2ae) {
    var _0x384ce1 = _0x33920a;
    var _0x425d1b = _0x33920a * 2 + 1;
    var _0x1e44d7 = _0x33920a * 2 + 2;
    if (_0x425d1b < _0x25a2ae && this._compare(_0x425d1b, _0x384ce1) >= 0) {
      _0x384ce1 = _0x425d1b;
    }
    if (_0x1e44d7 < _0x25a2ae && this._compare(_0x1e44d7, _0x384ce1) >= 0) {
      _0x384ce1 = _0x1e44d7;
    }
    if (_0x384ce1 === _0x33920a) {
      break;
    }
    this._swap(_0x384ce1, _0x33920a);
    _0x33920a = _0x384ce1;
  }
  return _0x37a080;
};
PriorityQueue.prototype.enq = function (_0x378d5a) {
  var _0x516231 = this._elements.push(_0x378d5a);
  var _0x43c509 = _0x516231 - 1;
  while (_0x43c509 > 0) {
    var _0x45986b = Math.floor((_0x43c509 - 1) / 2);
    if (this._compare(_0x43c509, _0x45986b) <= 0) {
      break;
    }
    this._swap(_0x45986b, _0x43c509);
    _0x43c509 = _0x45986b;
  }
  return _0x516231;
};
PriorityQueue.prototype.size = function () {
  return this._elements.length;
};
PriorityQueue.prototype.forEach = function (_0x345673) {
  return this._elements.forEach(_0x345673);
};
PriorityQueue.prototype._compare = function (_0x52e7b9, _0x36ee64) {
  return this._comparator(this._elements[_0x52e7b9], this._elements[_0x36ee64]);
};
PriorityQueue.prototype._swap = function (_0x23164b, _0x2cd2cd) {
  var _0x428679 = this._elements[_0x23164b];
  this._elements[_0x23164b] = this._elements[_0x2cd2cd];
  this._elements[_0x2cd2cd] = _0x428679;
};