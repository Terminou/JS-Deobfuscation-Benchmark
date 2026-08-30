function _0x4370(_0x8b3990, _0x369fad) {
  _0x8b3990 = _0x8b3990 - 0x159;
  var _0x53fb1d = _0x53fb();
  var _0x4370b1 = _0x53fb1d[_0x8b3990];
  return _0x4370b1;
}
(function (_0x1b2811, _0x507a30) {
  var _0x10f844 = _0x1b2811();
  while (true) {
    try {
      var _0x302bab = -parseInt(_0x4370(0x16b)) / 0x1 + -parseInt(_0x4370(0x162)) / 0x2 + -parseInt(_0x4370(0x159)) / 0x3 * (-parseInt(_0x4370(0x167)) / 0x4) + -parseInt(_0x4370(0x15c)) / 0x5 * (-parseInt(_0x4370(0x15f)) / 0x6) + parseInt(_0x4370(0x163)) / 0x7 * (parseInt(_0x4370(0x168)) / 0x8) + -parseInt(_0x4370(0x169)) / 0x9 * (-parseInt(_0x4370(0x165)) / 0xa) + parseInt(_0x4370(0x166)) / 0xb;
      if (_0x302bab === _0x507a30) {
        break;
      } else {
        _0x10f844.push(_0x10f844.shift());
      }
    } catch (_0x55749c) {
      _0x10f844.push(_0x10f844.shift());
    }
  }
})(_0x53fb, 0x8347d);
var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
var _byteToHex = [];
for (var i = 0x0; i < 0x100; i++) {
  _byteToHex[i] = (i + 0x100).toString(0x10)[_0x4370(0x161)](0x1);
}
function _0x53fb() {
  var _0xea5aa8 = ['956144eXqFGh', 'exports', '45FxfUej', 'indexOf', 'isBuffer', '1544635KDZUzr', 'test', "Invalid version provided.", '12rgPrHB', 'toLowerCase', 'substr', '1017796NBLnxY', '7shfLra', 'charAt', '2060UJOBng', '2191937MaOvlv', '81380qMcwmD', '5553976WwVuYs', '8136GCWXHx', 'prototype'];
  _0x53fb = function () {
    return _0xea5aa8;
  };
  return _0x53fb();
}
function unparse(_0x2df68e, _0x37a2e5) {
  var _0x3f85c1 = _0x37a2e5 || 0x0;
  return _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + '-' + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + '-' + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + '-' + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + '-' + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]] + _byteToHex[_0x2df68e[_0x3f85c1++]];
}
module[_0x4370(0x16c)] = function (_0x129db7, _0x4a4fcf) {
  var _0x390ff9;
  if (Buffer[_0x4370(0x15b)](_0x129db7)) {
    _0x390ff9 = unparse(_0x129db7);
  } else {
    if (Object[_0x4370(0x16a)].toString.call(_0x129db7) === "[object String]") {
      _0x390ff9 = _0x129db7;
    } else {
      return false;
    }
  }
  _0x390ff9 = _0x390ff9[_0x4370(0x160)]();
  if (!pattern[_0x4370(0x15d)](_0x390ff9)) {
    return false;
  }
  if (_0x4a4fcf === undefined) {
    _0x4a4fcf = extractVersion(_0x390ff9);
  } else {
    if (extractVersion(_0x390ff9) !== _0x4a4fcf) {
      return false;
    }
  }
  switch (_0x4a4fcf) {
    case 0x1:
    case 0x2:
      return true;
    case 0x3:
    case 0x4:
    case 0x5:
      return ['8', '9', 'a', 'b'][_0x4370(0x15a)](_0x390ff9.charAt(0x13)) !== -0x1;
    default:
      throw new Error(_0x4370(0x15e));
  }
};
var extractVersion = module.exports.version = function (_0x5cad09) {
  return _0x5cad09[_0x4370(0x164)](0xe) | 0x0;
};