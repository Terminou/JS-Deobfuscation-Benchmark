module.exports = PriorityQueue;
function PriorityQueue(_0x578832) {
  this._comparator = _0x578832 || PriorityQueue.DEFAULT_COMPARATOR;
  this._elements = [];
}
PriorityQueue.DEFAULT_COMPARATOR = function (_0x625a9d, _0x140a36) {
  if (typeof _0x625a9d === "number" && typeof _0x140a36 === "number") {
    return _0x625a9d - _0x140a36;
  } else {
    _0x625a9d = _0x625a9d.toString();
    _0x140a36 = _0x140a36.toString();
    if (_0x625a9d == _0x140a36) return 0;
    return _0x625a9d > _0x140a36 ? 1 : -1;
  }
};
PriorityQueue.prototype.isEmpty = function () {
  return this.size() === 0;
};
PriorityQueue.prototype.peek = function () {
  if (this.isEmpty()) throw new Error("PriorityQueue is empty");
  return this._elements[0];
};
PriorityQueue.prototype.deq = function () {
  var _0x5ed7a0 = this.peek();
  var _0x2bcb8c = this._elements.pop();
  var _0x67d84f = this.size();
  if (_0x67d84f === 0) return _0x5ed7a0;
  this._elements[0] = _0x2bcb8c;
  var _0x38824e = 0;
  while (_0x38824e < _0x67d84f) {
    var _0xcb8bfe = _0x38824e;
    var _0x542868 = 2 * _0x38824e + 1;
    var _0x16310e = 2 * _0x38824e + 2;
    if (_0x542868 < _0x67d84f && this._compare(_0x542868, _0xcb8bfe) >= 0) {
      _0xcb8bfe = _0x542868;
    }
    if (_0x16310e < _0x67d84f && this._compare(_0x16310e, _0xcb8bfe) >= 0) {
      _0xcb8bfe = _0x16310e;
    }
    if (_0xcb8bfe === _0x38824e) break;
    this._swap(_0xcb8bfe, _0x38824e);
    _0x38824e = _0xcb8bfe;
  }
  return _0x5ed7a0;
};
PriorityQueue.prototype.enq = function (_0x3e8bfb) {
  var _0x2cbe24 = this._elements.push(_0x3e8bfb);
  var _0x17c19d = _0x2cbe24 - 1;
  while (_0x17c19d > 0) {
    var _0x2b9071 = Math.floor((_0x17c19d - 1) / 2);
    if (this._compare(_0x17c19d, _0x2b9071) <= 0) break;
    this._swap(_0x2b9071, _0x17c19d);
    _0x17c19d = _0x2b9071;
  }
  return _0x2cbe24;
};
PriorityQueue.prototype.size = function () {
  return this._elements.length;
};
PriorityQueue.prototype.forEach = function (_0x383fee) {
  return this._elements.forEach(_0x383fee);
};
PriorityQueue.prototype._compare = function (_0xc9a428, _0x16fe3e) {
  return this._comparator(this._elements[_0xc9a428], this._elements[_0x16fe3e]);
};
PriorityQueue.prototype._swap = function (_0x516fc9, _0x43f1d4) {
  var _0x415f28 = this._elements[_0x516fc9];
  this._elements[_0x516fc9] = this._elements[_0x43f1d4];
  this._elements[_0x43f1d4] = _0x415f28;
};
