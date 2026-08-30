var _0x5acbaf = _0x4370;
function _0x4370(_0x8b3990, _0x369fad) {
  _0x8b3990 = _0x8b3990 - 345;
  var _0x53fb1d = _0x53fb();
  var _0x4370b1 = _0x53fb1d[_0x8b3990];
  return _0x4370b1;
}
(function (_0x1b2811, _0x507a30) {
  var _0x3335b4 = _0x4370, _0x10f844 = _0x1b2811();
  while (true) {
    try {
      var _0x302bab = -parseInt(_0x3335b4(363)) / 1 + -parseInt(_0x3335b4(354)) / 2 + -parseInt(_0x3335b4(345)) / 3 * (-parseInt(_0x3335b4(359)) / 4) + -parseInt(_0x3335b4(348)) / 5 * (-parseInt(_0x3335b4(351)) / 6) + parseInt(_0x3335b4(355)) / 7 * (parseInt(_0x3335b4(360)) / 8) + -parseInt(_0x3335b4(361)) / 9 * (-parseInt(_0x3335b4(357)) / 10) + parseInt(_0x3335b4(358)) / 11;
      if (_0x302bab === _0x507a30) break; else _0x10f844.push(_0x10f844.shift());
    } catch (_0x55749c) {
      _0x10f844.push(_0x10f844.shift());
    }
  }
}(_0x53fb, 537725));
var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i, _byteToHex = [];
for (var i = 0; i < 256; i++) {
  _byteToHex[i] = (i + 256).toString(16)[_0x5acbaf(353)](1);
}
function _0x53fb() {
  var _0xea5aa8 = ["956144eXqFGh", "exports", "45FxfUej", "indexOf", "isBuffer", "1544635KDZUzr", "test", "Invalid version provided.", "12rgPrHB", "toLowerCase", "substr", "1017796NBLnxY", "7shfLra", "charAt", "2060UJOBng", "2191937MaOvlv", "81380qMcwmD", "5553976WwVuYs", "8136GCWXHx", "prototype"];
  _0x53fb = function () {
    return _0xea5aa8;
  };
  return _0x53fb();
}
function unparse(_0x2df68e, _0x37a2e5) {
  var _0x3f85c1 = _0x37a2e5 || 0, _0x2ba0d6 = _byteToHex;
  return _0x2ba0d6[_0x2df68e[_0x3f85c1++]] + _0x2ba0d6[_0x2df68e[_0x3f85c1++]] + _0x2ba0d6[_0x2df68e[_0x3f85c1++]] + _0x2ba0d6[_0x2df68e[_0x3f85c1++]] + "-" + _0x2ba0d6[_0x2df68e[_0x3f85c1++]] + _0x2ba0d6[_0x2df68e[_0x3f85c1++]] + "-" + _0x2ba0d6[_0x2df68e[_0x3f85c1++]] + _0x2ba0d6[_0x2df68e[_0x3f85c1++]] + "-" + _0x2ba0d6[_0x2df68e[_0x3f85c1++]] + _0x2ba0d6[_0x2df68e[_0x3f85c1++]] + "-" + _0x2ba0d6[_0x2df68e[_0x3f85c1++]] + _0x2ba0d6[_0x2df68e[_0x3f85c1++]] + _0x2ba0d6[_0x2df68e[_0x3f85c1++]] + _0x2ba0d6[_0x2df68e[_0x3f85c1++]] + _0x2ba0d6[_0x2df68e[_0x3f85c1++]] + _0x2ba0d6[_0x2df68e[_0x3f85c1++]];
}
module[_0x5acbaf(364)] = function (_0x129db7, _0x4a4fcf) {
  var _0xaa6620 = _0x5acbaf, _0x390ff9;
  if (Buffer[_0xaa6620(347)](_0x129db7)) _0x390ff9 = unparse(_0x129db7); else {
    if (Object[_0xaa6620(362)].toString.call(_0x129db7) === "[object String]") _0x390ff9 = _0x129db7; else return false;
  }
  _0x390ff9 = _0x390ff9[_0xaa6620(352)]();
  if (!pattern[_0xaa6620(349)](_0x390ff9)) return false;
  if (_0x4a4fcf === undefined) _0x4a4fcf = extractVersion(_0x390ff9); else {
    if (extractVersion(_0x390ff9) !== _0x4a4fcf) return false;
  }
  switch (_0x4a4fcf) {
    case 1:
    case 2:
      return true;
    case 3:
    case 4:
    case 5:
      return ["8", "9", "a", "b"][_0xaa6620(346)](_0x390ff9.charAt(19)) !== -1;
    default:
      throw new Error(_0xaa6620(350));
  }
};
var extractVersion = module.exports.version = function (_0x5cad09) {
  var _0x39b8ea = _0x5acbaf;
  return _0x5cad09[_0x39b8ea(356)](14) | 0;
};
