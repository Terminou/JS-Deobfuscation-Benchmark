function _0x2d0b() {
  return [
    '.{1,',
    'width',
    'exports',
    'trim',
    '297254tgsAAW',
    'match',
    'newline',
    'substring',
    'join',
    'indent',
    'length',
    'cut',
    '2218516kMeZjR',
    'string',
    '472784qrBrzm',
    'slice',
    '4283575WiUYYi',
    'function',
    'escape',
    '1042743DmIoBL',
    '3100968Ezxlox',
    '153bHHrwv',
    'map',
    '922285OfpfbQ',
    '([\\s​]+|$)|[^\\s​]+?([\\s​]+|$)',
    '21uSCqnZ'
  ];
}
function _0x2c35(_0x7c03fd, _0x10ea6d) {
  _0x7c03fd = _0x7c03fd - 388;
  var _0x2d0b6c = [
    '.{1,',
    'width',
    'exports',
    'trim',
    '297254tgsAAW',
    'match',
    'newline',
    'substring',
    'join',
    'indent',
    'length',
    'cut',
    '2218516kMeZjR',
    'string',
    '472784qrBrzm',
    'slice',
    '4283575WiUYYi',
    'function',
    'escape',
    '1042743DmIoBL',
    '3100968Ezxlox',
    '153bHHrwv',
    'map',
    '922285OfpfbQ',
    '([\\s​]+|$)|[^\\s​]+?([\\s​]+|$)',
    '21uSCqnZ'
  ];
  var _0x2c35de = _0x2d0b6c[_0x7c03fd];
  return _0x2d0b6c[_0x7c03fd];
}
function trimEnd(_0xb5df6) {
  let _0x212f14 = _0xb5df6.length - 1;
  let _0xd025dc = _0xb5df6[_0x212f14];
  while (_0xd025dc === ' ' || _0xd025dc === '	') {
    _0xd025dc = _0xb5df6[--_0x212f14];
  }
  return _0xb5df6.substring(0, _0x212f14 + 1);
}
function trimTabAndSpaces(_0x495254) {
  const _0x3e4631 = _0x495254.split('\n');
  const _0x2659e9 = _0x3e4631.map(_0x39a549 => trimEnd(_0x39a549));
  return _0x2659e9.join('\n');
}
module.exports = function (_0x19a5ae, _0x1c9737) {
  _0x1c9737 = _0x1c9737 || {};
  if (_0x19a5ae == null)
    return _0x19a5ae;
  var _0x4bea06 = _0x1c9737.width || 50;
  var _0x1b5ff0 = typeof _0x1c9737.indent === 'string' ? _0x1c9737.indent : '  ';
  var _0x34bb33 = _0x1c9737.newline || '\n' + _0x1b5ff0;
  var _0x434d15 = typeof _0x1c9737.escape === 'function' ? _0x1c9737.escape : identity;
  var _0x355bb1 = '.{1,' + _0x4bea06 + '}';
  if (_0x1c9737.cut !== true) {
    _0x355bb1 += '([\\s​]+|$)|[^\\s​]+?([\\s​]+|$)';
  }
  var _0x168201 = new RegExp(_0x355bb1, 'g');
  var _0x237820 = _0x19a5ae.match(_0x168201) || [];
  var _0x5ca56e = _0x1b5ff0 + _0x237820.map(function (_0x3a223f) {
    if (_0x3a223f.slice(-1) === '\n') {
      _0x3a223f = _0x3a223f.slice(0, _0x3a223f.length - 1);
    }
    return _0x434d15(_0x3a223f);
  }).join(_0x34bb33);
  if (_0x1c9737.trim === true) {
    _0x5ca56e = trimTabAndSpaces(_0x5ca56e);
  }
  return _0x5ca56e;
};
function identity(_0x50ca6e) {
  return _0x50ca6e;
}