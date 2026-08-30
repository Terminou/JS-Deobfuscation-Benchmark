function _0x1e58(_0x134ae0, _0x5a274e) {
  _0x134ae0 = _0x134ae0 - 229;
  var _0x164cc8 = [
    '890484dyXWxb',
    '207405KMHuAB',
    'length',
    '1744773ZbVKfz',
    '30ucqTpO',
    'exports',
    '13179350WNjmmp',
    '244678UfVGli',
    'max',
    '1xtofhl',
    '80576IeYMFx',
    '896wvRyOf',
    '2724TPeYbh',
    '4rSnUlr',
    '9448200amJPXf'
  ];
  var _0x1e58e3 = _0x164cc8[_0x134ae0];
  return _0x164cc8[_0x134ae0];
}
function _0x164c() {
  return [
    '890484dyXWxb',
    '207405KMHuAB',
    'length',
    '1744773ZbVKfz',
    '30ucqTpO',
    'exports',
    '13179350WNjmmp',
    '244678UfVGli',
    'max',
    '1xtofhl',
    '80576IeYMFx',
    '896wvRyOf',
    '2724TPeYbh',
    '4rSnUlr',
    '9448200amJPXf'
  ];
}
module.exports = function (_0x34ee50, _0x33c4b4, _0x2064c6) {
  var _0x56b12f = _0x34ee50.length;
  var _0x13ea52 = _0x33c4b4.length;
  var _0x2815b5 = [];
  _0x2064c6 = (_0x2064c6 || (_0x33c4b4.length > _0x34ee50.length ? _0x33c4b4.length : _0x34ee50.length)) + 1;
  for (var _0x50c13c = 0; _0x50c13c < _0x2064c6; _0x50c13c++) {
    _0x2815b5[_0x50c13c] = [_0x50c13c];
    _0x2815b5[_0x50c13c].length = _0x2064c6;
  }
  for (_0x50c13c = 0; _0x50c13c < _0x2064c6; _0x50c13c++) {
    [0][_0x50c13c] = _0x50c13c;
  }
  if (Math.abs(_0x34ee50.length - _0x33c4b4.length) > (_0x2064c6 || 100))
    return _0x2a2475(_0x2064c6 || 100);
  if (_0x34ee50.length === 0)
    return _0x2a2475(_0x33c4b4.length);
  if (_0x33c4b4.length === 0)
    return _0x2a2475(_0x34ee50.length);
  var _0x2248f7;
  var _0x4ef1e6;
  var _0x176832;
  var _0x81227;
  var _0x552b47;
  var _0x92e8c9;
  for (_0x50c13c = 1; _0x50c13c <= _0x34ee50.length; ++_0x50c13c) {
    _0x4ef1e6 = _0x34ee50[_0x50c13c - 1];
    for (_0x2248f7 = 1; _0x2248f7 <= _0x33c4b4.length; ++_0x2248f7) {
      if (_0x50c13c === _0x2248f7 && _0x2815b5[_0x50c13c][_0x2248f7] > 4)
        return _0x2a2475(_0x34ee50.length);
      _0x176832 = _0x33c4b4[_0x2248f7 - 1];
      _0x81227 = _0x4ef1e6 === _0x176832 ? 0 : 1;
      _0x552b47 = _0x2815b5[_0x50c13c - 1][_0x2248f7] + 1;
      if ((_0x92e8c9 = _0x2815b5[_0x50c13c][_0x2248f7 - 1] + 1) < _0x552b47)
        _0x552b47 = _0x92e8c9;
      if ((_0x92e8c9 = _0x2815b5[_0x50c13c - 1][_0x2248f7 - 1] + _0x81227) < _0x552b47)
        _0x552b47 = _0x92e8c9;
      _0x2815b5[_0x50c13c][_0x2248f7] = _0x50c13c > 1 && _0x2248f7 > 1 && _0x4ef1e6 === _0x33c4b4[_0x2248f7 - 2] && _0x34ee50[_0x50c13c - 2] === _0x176832 && (_0x92e8c9 = _0x2815b5[_0x50c13c - 2][_0x2248f7 - 2] + _0x81227) < _0x552b47 ? _0x92e8c9 : _0x552b47;
    }
  }
  return _0x2a2475(_0x2815b5[_0x34ee50.length][_0x33c4b4.length]);
  function _0x2a2475(_0x123973) {
    var _0x1146a9 = Math.max(_0x34ee50.length, _0x33c4b4.length);
    var _0x34e92e = _0x1146a9 === 0 ? 0 : _0x123973 / _0x1146a9;
    var _0x2f4283 = 1 - _0x34e92e;
    return {
      steps: _0x123973,
      relative: _0x34e92e,
      similarity: _0x2f4283
    };
  }
};