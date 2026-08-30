function _0x4370(_0x8b3990, _0x369fad) {
  _0x8b3990 = _0x8b3990 - 345;
  var _0x53fb1d = [
    '45FxfUej',
    'indexOf',
    'isBuffer',
    '1544635KDZUzr',
    'test',
    'Invalid version provided.',
    '12rgPrHB',
    'toLowerCase',
    'substr',
    '1017796NBLnxY',
    '7shfLra',
    'charAt',
    '2060UJOBng',
    '2191937MaOvlv',
    '81380qMcwmD',
    '5553976WwVuYs',
    '8136GCWXHx',
    'prototype',
    '956144eXqFGh',
    'exports'
  ];
  var _0x4370b1 = _0x53fb1d[_0x8b3990];
  return _0x53fb1d[_0x8b3990];
}
var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
var _byteToHex = [];
for (var i = 0; i < 256; i++) {
  _byteToHex[i] = (i + 256).toString(16).substr(1);
}
function _0x53fb() {
  return [
    '45FxfUej',
    'indexOf',
    'isBuffer',
    '1544635KDZUzr',
    'test',
    'Invalid version provided.',
    '12rgPrHB',
    'toLowerCase',
    'substr',
    '1017796NBLnxY',
    '7shfLra',
    'charAt',
    '2060UJOBng',
    '2191937MaOvlv',
    '81380qMcwmD',
    '5553976WwVuYs',
    '8136GCWXHx',
    'prototype',
    '956144eXqFGh',
    'exports'
  ];
}
function unparse(_0x2df68e, _0x37a2e5) {
  var _0x3f85c1 = _0x37a2e5 || 0;
  return _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + '-' + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + '-' + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + '-' + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + '-' + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]];
}
module.exports = function (_0x129db7, _0x4a4fcf) {
  var _0x390ff9;
  if (Buffer.isBuffer(_0x129db7))
    _0x390ff9 = unparse(_0x129db7);
  else {
    if (Object.prototype.toString.call(_0x129db7) === '[object String]')
      _0x390ff9 = _0x129db7;
    else
      return false;
  }
  _0x390ff9 = _0x390ff9.toLowerCase();
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(_0x390ff9))
    return false;
  if (_0x4a4fcf === undefined)
    _0x4a4fcf = extractVersion(_0x390ff9);
  else {
    if (extractVersion(_0x390ff9) !== _0x4a4fcf)
      return false;
  }
  switch (_0x4a4fcf) {
  case 1:
  case 2:
    return true;
  case 3:
  case 4:
  case 5:
    return [
      '8',
      '9',
      'a',
      'b'
    ].indexOf(_0x390ff9.charAt(19)) !== -1;
  default:
    throw new Error('Invalid version provided.');
  }
};
var extractVersion = module.exports.version = function (_0x5cad09) {
  return _0x5cad09.charAt(14) | 0;
};