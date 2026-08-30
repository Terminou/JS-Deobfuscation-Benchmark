module.exports = PriorityQueue;
function _0x140a() {
  return [
    'enq',
    'forEach',
    'toString',
    'DEFAULT_COMPARATOR',
    '_comparator',
    '2672322VHhdjF',
    '_swap',
    '3160260qejDVc',
    '5593670ImEzoF',
    'floor',
    'isEmpty',
    '8589304LoBIMu',
    '10QaYsim',
    '20121992rpuJvN',
    '8927976xaPVzc',
    'prototype',
    'number',
    'size',
    'exports',
    '2JtGMDL',
    'push',
    '718286iWKeOV',
    'peek',
    'pop',
    '4tuKbSr',
    'PriorityQueue is empty',
    'deq',
    '_elements',
    '_compare',
    '7LrAiTx'
  ];
}
function PriorityQueue(_0x3e8bfb) {
  this._comparator = _0x3e8bfb || PriorityQueue.DEFAULT_COMPARATOR;
  this._elements = [];
}
function _0x5ed7(_0x578832, _0x625a9d) {
  _0x578832 = _0x578832 - 400;
  var _0x140a36 = [
    'enq',
    'forEach',
    'toString',
    'DEFAULT_COMPARATOR',
    '_comparator',
    '2672322VHhdjF',
    '_swap',
    '3160260qejDVc',
    '5593670ImEzoF',
    'floor',
    'isEmpty',
    '8589304LoBIMu',
    '10QaYsim',
    '20121992rpuJvN',
    '8927976xaPVzc',
    'prototype',
    'number',
    'size',
    'exports',
    '2JtGMDL',
    'push',
    '718286iWKeOV',
    'peek',
    'pop',
    '4tuKbSr',
    'PriorityQueue is empty',
    'deq',
    '_elements',
    '_compare',
    '7LrAiTx'
  ];
  var _0x5ed7a0 = _0x140a36[_0x578832];
  return _0x140a36[_0x578832];
}
PriorityQueue.DEFAULT_COMPARATOR = function (_0x2cbe24, _0x17c19d) {
  if (typeof _0x2cbe24 === 'number' && typeof _0x17c19d === 'number')
    return _0x2cbe24 - _0x17c19d;
  else {
    _0x2cbe24 = _0x2cbe24.toString();
    _0x17c19d = _0x17c19d.toString();
    if (_0x2cbe24 == _0x17c19d)
      return 0;
    return _0x2cbe24 > _0x17c19d ? 1 : -1;
  }
};
PriorityQueue.prototype.isEmpty = function () {
  return this.size() === 0;
};
PriorityQueue.prototype.peek = function () {
  if (this.isEmpty())
    throw new Error('PriorityQueue is empty');
  return this._elements[0];
};
PriorityQueue.prototype.deq = function () {
  var _0x2b9071 = this.peek();
  var _0x383fee = this._elements.pop();
  var _0xc9a428 = this.size();
  if (_0xc9a428 === 0)
    return _0x2b9071;
  this._elements[0] = _0x383fee;
  var _0x16fe3e = 0;
  while (_0x16fe3e < _0xc9a428) {
    var _0x516fc9 = _0x16fe3e;
    var _0x43f1d4 = 2 * _0x16fe3e + 1;
    var _0x415f28 = 2 * _0x16fe3e + 2;
    if (_0x43f1d4 < _0xc9a428 && this._compare(_0x43f1d4, _0x516fc9) >= 0) {
      _0x516fc9 = _0x43f1d4;
    }
    if (_0x415f28 < _0xc9a428 && this._compare(_0x415f28, _0x516fc9) >= 0) {
      _0x516fc9 = _0x415f28;
    }
    if (_0x516fc9 === _0x16fe3e)
      break;
    this._swap(_0x516fc9, _0x16fe3e);
    _0x16fe3e = _0x516fc9;
  }
  return _0x2b9071;
};
PriorityQueue.prototype.enq = function (_0x456efa) {
  var _0x2fda1e = this._elements.push(_0x456efa);
  var _0x5ee605 = _0x2fda1e - 1;
  while (_0x5ee605 > 0) {
    var _0xe18d92 = Math.floor((_0x5ee605 - 1) / 2);
    if (this._compare(_0x5ee605, _0xe18d92) <= 0)
      break;
    this._swap(_0xe18d92, _0x5ee605);
    _0x5ee605 = _0xe18d92;
  }
  return _0x2fda1e;
};
PriorityQueue.prototype.size = function () {
  return this._elements.length;
};
PriorityQueue.prototype.forEach = function (_0x4738d1) {
  return this._elements.forEach(_0x4738d1);
};
PriorityQueue.prototype._compare = function (_0x3c19e6, _0x1dbd47) {
  return this._comparator(this._elements[_0x3c19e6], this._elements[_0x1dbd47]);
};
PriorityQueue.prototype._swap = function (_0x4bc0d2, _0x1419d2) {
  var _0x4f4ddf = this._elements[_0x4bc0d2];
  this._elements[_0x4bc0d2] = this._elements[_0x1419d2];
  this._elements[_0x1419d2] = this._elements[_0x4bc0d2];
};