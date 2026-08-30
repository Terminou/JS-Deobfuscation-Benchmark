'use strict';
function _0x2c22(_0x41823a, _0x38ec92) {
  _0x41823a = _0x41823a - 488;
  var _0x103781 = [
    '95445dmYQqP',
    '4458wejdFT',
    '7491435oGXvyy',
    'indexOf',
    'length',
    '13489JTILhe',
    '622509Qevmnq',
    '616293qYpfvM',
    'arr-union expects the first argument to be an array.',
    '54375590qGCdxm',
    '2234640dxvBku',
    '736urmDLR',
    '6KBnHas',
    'push',
    'isArray',
    'exports'
  ];
  var _0x2c2206 = _0x103781[_0x41823a];
  return _0x103781[_0x41823a];
}
function _0x1037() {
  return [
    '95445dmYQqP',
    '4458wejdFT',
    '7491435oGXvyy',
    'indexOf',
    'length',
    '13489JTILhe',
    '622509Qevmnq',
    '616293qYpfvM',
    'arr-union expects the first argument to be an array.',
    '54375590qGCdxm',
    '2234640dxvBku',
    '736urmDLR',
    '6KBnHas',
    'push',
    'isArray',
    'exports'
  ];
}
module.exports = function union(_0x3fd77d) {
  if (!Array.isArray(_0x3fd77d))
    throw new TypeError('arr-union expects the first argument to be an array.');
  var _0x22f94c = arguments.length;
  var _0x4d30e5 = 0;
  while (++_0x4d30e5 < arguments.length) {
    var _0x4dbbab = arguments[_0x4d30e5];
    if (!_0x4dbbab)
      continue;
    if (!Array.isArray(_0x4dbbab)) {
      _0x4dbbab = [_0x4dbbab];
    }
    for (var _0x440627 = 0; _0x440627 < _0x4dbbab.length; _0x440627++) {
      var _0x271149 = _0x4dbbab[_0x440627];
      if (_0x3fd77d.indexOf(_0x4dbbab[_0x440627]) >= 0)
        continue;
      _0x3fd77d.push(_0x4dbbab[_0x440627]);
    }
  }
  return _0x3fd77d;
};