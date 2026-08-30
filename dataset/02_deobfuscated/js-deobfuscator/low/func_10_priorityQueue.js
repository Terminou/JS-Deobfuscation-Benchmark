var _0x90ecc = _0x5ed7;
(function (_0x332f80, _0x360737) {
  var _0x56f891 = _0x5ed7, _0x596ca1 = _0x332f80();
  while (true) {
    try {
      var _0xbb8023 = -parseInt(_0x56f891(421)) / 1 + -parseInt(_0x56f891(419)) / 2 * (-parseInt(_0x56f891(405)) / 3) + parseInt(_0x56f891(424)) / 4 * (-parseInt(_0x56f891(408)) / 5) + -parseInt(_0x56f891(414)) / 6 * (parseInt(_0x56f891(429)) / 7) + parseInt(_0x56f891(411)) / 8 + parseInt(_0x56f891(407)) / 9 + parseInt(_0x56f891(412)) / 10 * (parseInt(_0x56f891(413)) / 11);
      if (_0xbb8023 === _0x360737) break; else _0x596ca1.push(_0x596ca1.shift());
    } catch (_0x208484) {
      _0x596ca1.push(_0x596ca1.shift());
    }
  }
}(_0x140a, 819833), module[_0x90ecc(418)] = PriorityQueue);
function _0x140a() {
  var _0x378d5a = ["10QaYsim", "20121992rpuJvN", "8927976xaPVzc", "prototype", "number", "size", "exports", "2JtGMDL", "push", "718286iWKeOV", "peek", "pop", "4tuKbSr", "PriorityQueue is empty", "deq", "_elements", "_compare", "7LrAiTx", "enq", "forEach", "toString", "DEFAULT_COMPARATOR", "_comparator", "2672322VHhdjF", "_swap", "3160260qejDVc", "5593670ImEzoF", "floor", "isEmpty", "8589304LoBIMu"];
  _0x140a = function () {
    return _0x378d5a;
  };
  return _0x140a();
}
function PriorityQueue(_0x3e8bfb) {
  var _0x1c3e0e = _0x90ecc;
  this[_0x1c3e0e(404)] = _0x3e8bfb || PriorityQueue[_0x1c3e0e(403)], this[_0x1c3e0e(427)] = [];
}
function _0x5ed7(_0x578832, _0x625a9d) {
  _0x578832 = _0x578832 - 400;
  var _0x140a36 = _0x140a();
  var _0x5ed7a0 = _0x140a36[_0x578832];
  return _0x5ed7a0;
}
PriorityQueue[_0x90ecc(403)] = function (_0x2cbe24, _0x17c19d) {
  var _0x3377b2 = _0x90ecc;
  if (typeof _0x2cbe24 === _0x3377b2(416) && typeof _0x17c19d === _0x3377b2(416)) return _0x2cbe24 - _0x17c19d; else {
    _0x2cbe24 = _0x2cbe24[_0x3377b2(402)](), _0x17c19d = _0x17c19d[_0x3377b2(402)]();
    if (_0x2cbe24 == _0x17c19d) return 0;
    return _0x2cbe24 > _0x17c19d ? 1 : -1;
  }
}, PriorityQueue[_0x90ecc(415)][_0x90ecc(410)] = function () {
  var _0x4a5cc8 = _0x90ecc;
  return this[_0x4a5cc8(417)]() === 0;
}, PriorityQueue[_0x90ecc(415)][_0x90ecc(422)] = function () {
  var _0xb4c85e = _0x90ecc;
  if (this.isEmpty()) throw new Error(_0xb4c85e(425));
  return this._elements[0];
}, PriorityQueue[_0x90ecc(415)][_0x90ecc(426)] = function () {
  var _0x44f2f5 = _0x90ecc, _0x2b9071 = this.peek(), _0x383fee = this[_0x44f2f5(427)][_0x44f2f5(423)](), _0xc9a428 = this[_0x44f2f5(417)]();
  if (_0xc9a428 === 0) return _0x2b9071;
  this[_0x44f2f5(427)][0] = _0x383fee;
  var _0x16fe3e = 0;
  while (_0x16fe3e < _0xc9a428) {
    var _0x516fc9 = _0x16fe3e, _0x43f1d4 = 2 * _0x16fe3e + 1, _0x415f28 = 2 * _0x16fe3e + 2;
    _0x43f1d4 < _0xc9a428 && this[_0x44f2f5(428)](_0x43f1d4, _0x516fc9) >= 0 && (_0x516fc9 = _0x43f1d4);
    _0x415f28 < _0xc9a428 && this._compare(_0x415f28, _0x516fc9) >= 0 && (_0x516fc9 = _0x415f28);
    if (_0x516fc9 === _0x16fe3e) break;
    this._swap(_0x516fc9, _0x16fe3e), _0x16fe3e = _0x516fc9;
  }
  return _0x2b9071;
}, PriorityQueue[_0x90ecc(415)][_0x90ecc(400)] = function (_0x456efa) {
  var _0x2cf846 = _0x90ecc, _0x2fda1e = this[_0x2cf846(427)][_0x2cf846(420)](_0x456efa), _0x5ee605 = _0x2fda1e - 1;
  while (_0x5ee605 > 0) {
    var _0xe18d92 = Math[_0x2cf846(409)]((_0x5ee605 - 1) / 2);
    if (this._compare(_0x5ee605, _0xe18d92) <= 0) break;
    this[_0x2cf846(406)](_0xe18d92, _0x5ee605), _0x5ee605 = _0xe18d92;
  }
  return _0x2fda1e;
}, PriorityQueue[_0x90ecc(415)].size = function () {
  return this._elements.length;
}, PriorityQueue[_0x90ecc(415)][_0x90ecc(401)] = function (_0x4738d1) {
  var _0x218fd7 = _0x90ecc;
  return this[_0x218fd7(427)][_0x218fd7(401)](_0x4738d1);
}, PriorityQueue[_0x90ecc(415)][_0x90ecc(428)] = function (_0x3c19e6, _0x1dbd47) {
  var _0x54ef44 = _0x90ecc;
  return this[_0x54ef44(404)](this._elements[_0x3c19e6], this._elements[_0x1dbd47]);
}, PriorityQueue[_0x90ecc(415)][_0x90ecc(406)] = function (_0x4bc0d2, _0x1419d2) {
  var _0x2a15cb = _0x90ecc, _0x4f4ddf = this._elements[_0x4bc0d2];
  this._elements[_0x4bc0d2] = this[_0x2a15cb(427)][_0x1419d2], this._elements[_0x1419d2] = _0x4f4ddf;
};
