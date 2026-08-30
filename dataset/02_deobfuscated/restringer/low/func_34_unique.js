'use strict';
function _0x1baa() {
  return [
    '63ixUpaz',
    '11clACGm',
    '11513313ORnwkh',
    '727384DCqhNF',
    '52436VDdhVA',
    '8671632BGRydV',
    '4268523HpzEKw',
    'exports',
    '145azbAif',
    '111544jyriTo',
    'length',
    '27889790UogcyJ',
    'array-unique expects an array.',
    'isArray',
    'splice',
    '2xXCCBs'
  ];
}
function _0x5543(_0x3dd188, _0x34a472) {
  _0x3dd188 = _0x3dd188 - 148;
  var _0x1baa17 = [
    '63ixUpaz',
    '11clACGm',
    '11513313ORnwkh',
    '727384DCqhNF',
    '52436VDdhVA',
    '8671632BGRydV',
    '4268523HpzEKw',
    'exports',
    '145azbAif',
    '111544jyriTo',
    'length',
    '27889790UogcyJ',
    'array-unique expects an array.',
    'isArray',
    'splice',
    '2xXCCBs'
  ];
  var _0x554376 = _0x1baa17[_0x3dd188];
  return _0x1baa17[_0x3dd188];
}
module.exports = function unique(_0x3a6eb3) {
  if (!Array.isArray(_0x3a6eb3))
    throw new TypeError('array-unique expects an array.');
  var _0x327ed1 = _0x3a6eb3.length;
  var _0xb90a3f = -1;
  while (_0xb90a3f++ < _0x3a6eb3.length) {
    var _0x1506bb = _0xb90a3f + 1;
    for (; _0x1506bb < _0x3a6eb3.length; ++_0x1506bb) {
      if (_0x3a6eb3[_0xb90a3f] === _0x3a6eb3[_0x1506bb]) {
        _0x3a6eb3.splice(_0x1506bb--, 1);
      }
    }
  }
  return _0x3a6eb3;
};
module.exports.immutable = function uniqueImmutable(_0x3faa37) {
  if (!Array.isArray(_0x3faa37))
    throw new TypeError('array-unique expects an array.');
  var _0x2d93fe = _0x3faa37.length;
  var _0xf377c0 = new Array(_0x3faa37.length);
  for (var _0x5e899a = 0; _0x5e899a < _0x3faa37.length; _0x5e899a++) {
    _0xf377c0[_0x5e899a] = _0x3faa37[_0x5e899a];
  }
  return module.exports(_0xf377c0);
};