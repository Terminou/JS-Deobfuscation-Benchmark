function _0x56be() {
  return [
    '1580072rsdTJY',
    'exports',
    '4359417QcQSES',
    '1870172ULrcNV',
    '466262VbHDjK',
    '10kurfua',
    'length',
    '23945896amiGsl',
    '1533678lqRBEE',
    '8067374untmCy',
    'invalid lower bound',
    'invalid upper bound'
  ];
}
function _0x9b52(_0x256375, _0x128ccc) {
  _0x256375 = _0x256375 - 340;
  var _0x56be9d = [
    '1580072rsdTJY',
    'exports',
    '4359417QcQSES',
    '1870172ULrcNV',
    '466262VbHDjK',
    '10kurfua',
    'length',
    '23945896amiGsl',
    '1533678lqRBEE',
    '8067374untmCy',
    'invalid lower bound',
    'invalid upper bound'
  ];
  var _0x9b5242 = _0x56be9d[_0x256375];
  return _0x56be9d[_0x256375];
}
module.exports = function (_0x5de3d8, _0x5d08f5, _0x330087, _0x5f59ae, _0x2e7a14) {
  var _0x3cee23;
  var _0x3c9109;
  if (_0x5f59ae === undefined)
    _0x5f59ae = 0;
  else {
    _0x5f59ae = _0x5f59ae | 0;
    if (_0x5f59ae < 0 || _0x5f59ae >= _0x5de3d8.length)
      throw new RangeError('invalid lower bound');
  }
  if (_0x2e7a14 === undefined)
    _0x2e7a14 = _0x5de3d8.length - 1;
  else {
    _0x2e7a14 = _0x2e7a14 | 0;
    if (_0x2e7a14 < _0x5f59ae || _0x2e7a14 >= _0x5de3d8.length)
      throw new RangeError('invalid upper bound');
  }
  while (_0x5f59ae <= _0x2e7a14) {
    _0x3cee23 = _0x5f59ae + (_0x2e7a14 - _0x5f59ae >>> 1);
    _0x3c9109 = +_0x330087(_0x5de3d8[_0x3cee23], _0x5d08f5, _0x3cee23, _0x5de3d8);
    if (_0x3c9109 < 0)
      _0x5f59ae = _0x3cee23 + 1;
    else {
      if (_0x3c9109 > 0)
        _0x2e7a14 = _0x3cee23 - 1;
      else
        return _0x3cee23;
    }
  }
  return ~_0x5f59ae;
};