module.exports = function (_0x5de3d8, _0x5d08f5, _0x330087, _0x5f59ae, _0x2e7a14) {
  var _0x3cee23;
  var _0x3c9109;
  if (_0x5f59ae === undefined) {
    _0x5f59ae = 0;
  } else {
    _0x5f59ae = _0x5f59ae | 0;
    if (_0x5f59ae < 0 || _0x5f59ae >= _0x5de3d8.length) {
      throw new RangeError("invalid lower bound");
    }
  }
  if (_0x2e7a14 === undefined) {
    _0x2e7a14 = _0x5de3d8.length - 1;
  } else {
    _0x2e7a14 = _0x2e7a14 | 0;
    if (_0x2e7a14 < _0x5f59ae || _0x2e7a14 >= _0x5de3d8.length) {
      throw new RangeError("invalid upper bound");
    }
  }
  while (_0x5f59ae <= _0x2e7a14) {
    _0x3cee23 = _0x5f59ae + (_0x2e7a14 - _0x5f59ae >>> 1);
    _0x3c9109 = +_0x330087(_0x5de3d8[_0x3cee23], _0x5d08f5, _0x3cee23, _0x5de3d8);
    if (_0x3c9109 < 0) {
      _0x5f59ae = _0x3cee23 + 1;
    } else if (_0x3c9109 > 0) {
      _0x2e7a14 = _0x3cee23 - 1;
    } else {
      return _0x3cee23;
    }
  }
  return ~_0x5f59ae;
};