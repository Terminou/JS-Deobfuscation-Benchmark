module.exports = function (_0x256375, _0x128ccc, _0x56be9d, _0x9b5242, _0x5855f1) {
  var _0x13cd6d;
  var _0x1993cc;
  if (_0x9b5242 === undefined)
    _0x9b5242 = 0;
  else {
    _0x9b5242 = _0x9b5242 | 0;
    if (_0x9b5242 < 0 || _0x9b5242 >= _0x256375.length)
      throw new RangeError('invalid lower bound');
  }
  if (_0x5855f1 === undefined)
    _0x5855f1 = _0x256375.length - 1;
  else {
    _0x5855f1 = _0x5855f1 | 0;
    if (_0x5855f1 < _0x9b5242 || _0x5855f1 >= _0x256375.length)
      throw new RangeError('invalid upper bound');
  }
  while (_0x9b5242 <= _0x5855f1) {
    _0x13cd6d = _0x9b5242 + (_0x5855f1 - _0x9b5242 >>> 1);
    _0x1993cc = +_0x56be9d(_0x256375[_0x13cd6d], _0x128ccc, _0x13cd6d, _0x256375);
    if (_0x1993cc < 0)
      _0x9b5242 = _0x13cd6d + 1;
    else if (_0x1993cc > 0)
      _0x5855f1 = _0x13cd6d - 1;
    else
      return _0x13cd6d;
  }
  return ~_0x9b5242;
};