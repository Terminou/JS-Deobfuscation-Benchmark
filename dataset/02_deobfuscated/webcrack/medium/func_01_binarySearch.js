module.exports = function (_0x29706e, _0x553af4, _0x4634d7, _0xba5f5b, _0x34aa05) {
  var _0x5d9023;
  var _0x5edb59;
  if (_0xba5f5b === undefined) {
    _0xba5f5b = 0;
  } else {
    _0xba5f5b = _0xba5f5b | 0;
    if (_0xba5f5b < 0 || _0xba5f5b >= _0x29706e.length) {
      throw new RangeError("invalid lower bound");
    }
  }
  if (_0x34aa05 === undefined) {
    _0x34aa05 = _0x29706e.length - 1;
  } else {
    _0x34aa05 = _0x34aa05 | 0;
    if (_0x34aa05 < _0xba5f5b || _0x34aa05 >= _0x29706e.length) {
      throw new RangeError("invalid upper bound");
    }
  }
  while (_0xba5f5b <= _0x34aa05) {
    _0x5d9023 = _0xba5f5b + (_0x34aa05 - _0xba5f5b >>> 1);
    _0x5edb59 = +_0x4634d7(_0x29706e[_0x5d9023], _0x553af4, _0x5d9023, _0x29706e);
    if (_0x5edb59 < 0) {
      _0xba5f5b = _0x5d9023 + 1;
    } else if (_0x5edb59 > 0) {
      _0x34aa05 = _0x5d9023 - 1;
    } else {
      return _0x5d9023;
    }
  }
  return ~_0xba5f5b;
};