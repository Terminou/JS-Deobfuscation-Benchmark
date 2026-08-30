module.exports = function (_0x18010e, _0x598096, _0x150db0, _0x22e23d, _0x649e) {
  var _0xc22a15;
  var _0x246df1;
  if (_0x22e23d === undefined) {
    _0x22e23d = 0;
  } else {
    _0x22e23d = _0x22e23d | 0;
    if (_0x22e23d < 0 || _0x22e23d >= _0x18010e.length) {
      throw new RangeError("invalid lower bound");
    }
  }
  if (_0x649e === undefined) {
    _0x649e = _0x18010e.length - 1;
  } else {
    _0x649e = _0x649e | 0;
    if (_0x649e < _0x22e23d || _0x649e >= _0x18010e.length) {
      throw new RangeError("invalid upper bound");
    }
  }
  while (_0x22e23d <= _0x649e) {
    _0xc22a15 = _0x22e23d + (_0x649e - _0x22e23d >>> 1);
    _0x246df1 = +_0x150db0(_0x18010e[_0xc22a15], _0x598096, _0xc22a15, _0x18010e);
    if (_0x246df1 < 0) {
      _0x22e23d = _0xc22a15 + 1;
    } else if (_0x246df1 > 0) {
      _0x649e = _0xc22a15 - 1;
    } else {
      return _0xc22a15;
    }
  }
  return ~_0x22e23d;
};