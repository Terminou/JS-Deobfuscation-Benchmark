function _0x2098(_0x39bfdc, _0xb45adc) {
  _0x39bfdc = _0x39bfdc - 381;
  var _0x2db352 = [
    'exports',
    '21850598XuppXV',
    'length',
    '6dlIxtj',
    '29620kRMehM',
    '3250980VIHePO',
    '203632HxqSZw',
    '464452kodLcM',
    '12abThdc',
    '2KPblya',
    '1692SFsaGO',
    '1571941lWpGol',
    '450484aPqMGD',
    'big',
    'push'
  ];
  var _0x2098d3 = _0x2db352[_0x39bfdc];
  return _0x2db352[_0x39bfdc];
}
module.exports = intersect;
function many(_0xa53d7c) {
  var _0x1e3b41 = {};
  var _0x1b4e66 = _0xa53d7c.length - 1;
  var _0x3c2e67 = _0xa53d7c[0];
  var _0x10bd70 = _0xa53d7c[_0x1b4e66];
  for (var _0x3c1f50 in _0xa53d7c[0])
    _0x1e3b41[_0xa53d7c[0][_0x3c1f50]] = 0;
  for (var _0x3c1f50 = 1; _0x3c1f50 <= _0x1b4e66; _0x3c1f50++) {
    var _0x35123e = _0xa53d7c[_0x3c1f50];
    for (var _0x458d14 in _0xa53d7c[_0x3c1f50]) {
      var _0x5dfbbc = _0xa53d7c[_0x3c1f50][_0x458d14];
      if (_0x1e3b41[_0x5dfbbc] === _0x3c1f50 - 1)
        _0x1e3b41[_0x5dfbbc] = _0x3c1f50;
    }
  }
  var _0x4f57cf = [];
  for (var _0x3c1f50 in _0xa53d7c[_0x1b4e66]) {
    var _0x5dfbbc = _0xa53d7c[_0x1b4e66][_0x3c1f50];
    if (_0x1e3b41[_0xa53d7c[_0x1b4e66][_0x3c1f50]] === _0x1b4e66)
      _0x4f57cf.push(_0xa53d7c[_0x1b4e66][_0x3c1f50]);
  }
  return _0x4f57cf;
}
function intersect(_0x56e410, _0x404790) {
  if (!_0x404790)
    return many(_0x56e410);
  var _0x2cdb97 = [];
  for (var _0x3bbb9f = 0; _0x3bbb9f < _0x56e410.length; _0x3bbb9f++) {
    if (indexOf(_0x404790, _0x56e410[_0x3bbb9f]) > -1)
      _0x2cdb97.push(_0x56e410[_0x3bbb9f]);
  }
  return _0x2cdb97;
}
function _0x2db3() {
  return [
    'exports',
    '21850598XuppXV',
    'length',
    '6dlIxtj',
    '29620kRMehM',
    '3250980VIHePO',
    '203632HxqSZw',
    '464452kodLcM',
    '12abThdc',
    '2KPblya',
    '1692SFsaGO',
    '1571941lWpGol',
    '450484aPqMGD',
    'big',
    'push'
  ];
}
intersect.big = function (_0x1235af, _0x5bf7ca) {
  if (!_0x5bf7ca)
    return many(_0x1235af);
  var _0x35f8ff = [];
  var _0x39d352 = {};
  for (var _0x34855d = 0; _0x34855d < _0x5bf7ca.length; _0x34855d++) {
    _0x39d352[_0x5bf7ca[_0x34855d]] = true;
  }
  for (var _0x34855d = 0; _0x34855d < _0x1235af.length; _0x34855d++) {
    if (_0x39d352[_0x1235af[_0x34855d]])
      _0x35f8ff.push(_0x1235af[_0x34855d]);
  }
  return _0x35f8ff;
};
function indexOf(_0x13ebbb, _0x4e6b72) {
  for (var _0x362449 = 0; _0x362449 < _0x13ebbb.length; _0x362449++) {
    if (_0x13ebbb[_0x362449] === _0x4e6b72)
      return _0x362449;
  }
  return -1;
}