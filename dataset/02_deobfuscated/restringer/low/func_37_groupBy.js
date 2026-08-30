function _0x7063() {
  return [
    '1832iYoKdJ',
    '1641033zNvrex',
    '4097379jnKQil',
    'expected an array for first argument',
    '5Hzmilc',
    'push',
    'expected a function for second argument',
    '2NiVaJH',
    '554327XtXDNo',
    'isArray',
    'length',
    '981210FuOStD',
    'function',
    'exports',
    '3755316gVENQc',
    '10VbchJz',
    '465876UbtfgB',
    '6139CALIgq'
  ];
}
function _0x5314(_0x2c5463, _0x50c15d) {
  _0x2c5463 = _0x2c5463 - 414;
  var _0x7063f1 = [
    '1832iYoKdJ',
    '1641033zNvrex',
    '4097379jnKQil',
    'expected an array for first argument',
    '5Hzmilc',
    'push',
    'expected a function for second argument',
    '2NiVaJH',
    '554327XtXDNo',
    'isArray',
    'length',
    '981210FuOStD',
    'function',
    'exports',
    '3755316gVENQc',
    '10VbchJz',
    '465876UbtfgB',
    '6139CALIgq'
  ];
  var _0x5314fb = _0x7063f1[_0x2c5463];
  return _0x7063f1[_0x2c5463];
}
module.exports = groupBy;
function groupBy(_0xae1eca, _0x19d278) {
  if (!Array.isArray(_0xae1eca))
    throw new Error('expected an array for first argument');
  if (typeof _0x19d278 !== 'function')
    throw new Error('expected a function for second argument');
  var _0x41270f = {};
  for (var _0x4b2bb3 = 0; _0x4b2bb3 < _0xae1eca.length; _0x4b2bb3++) {
    var _0x37bcee = _0xae1eca[_0x4b2bb3];
    var _0x25c040 = _0x19d278(_0xae1eca[_0x4b2bb3]);
    var _0x5d8be6 = _0x41270f[_0x25c040];
    !Array.isArray(_0x5d8be6) ? _0x41270f[_0x25c040] = [_0xae1eca[_0x4b2bb3]] : _0x41270f[_0x25c040].push(_0xae1eca[_0x4b2bb3]);
  }
  return _0x41270f;
}