var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
var _byteToHex = [];
for (var i = 0; i < 256; i++) {
  _byteToHex[i] = (i + 256).toString(16).substr(1);
}
function unparse(_0x8b3990, _0x369fad) {
  var _0x53fb1d = _0x369fad || 0, _0x4370b1 = _byteToHex;
  return _0x4370b1[_0x8b3990[_0x53fb1d++]] + _0x4370b1[_0x8b3990[_0x53fb1d++]] + _0x4370b1[_0x8b3990[_0x53fb1d++]] + _0x4370b1[_0x8b3990[_0x53fb1d++]] + "-" + _0x4370b1[_0x8b3990[_0x53fb1d++]] + _0x4370b1[_0x8b3990[_0x53fb1d++]] + "-" + _0x4370b1[_0x8b3990[_0x53fb1d++]] + _0x4370b1[_0x8b3990[_0x53fb1d++]] + "-" + _0x4370b1[_0x8b3990[_0x53fb1d++]] + _0x4370b1[_0x8b3990[_0x53fb1d++]] + "-" + _0x4370b1[_0x8b3990[_0x53fb1d++]] + _0x4370b1[_0x8b3990[_0x53fb1d++]] + _0x4370b1[_0x8b3990[_0x53fb1d++]] + _0x4370b1[_0x8b3990[_0x53fb1d++]] + _0x4370b1[_0x8b3990[_0x53fb1d++]] + _0x4370b1[_0x8b3990[_0x53fb1d++]];
}
module.exports = function (_0x46e894, _0x1dcb0b) {
  var _0x3f517c;
  if (Buffer.isBuffer(_0x46e894)) {
    _0x3f517c = unparse(_0x46e894);
  } else if (Object.prototype.toString.call(_0x46e894) === "[object String]") {
    _0x3f517c = _0x46e894;
  } else {
    return false;
  }
  _0x3f517c = _0x3f517c.toLowerCase();
  if (!pattern.test(_0x3f517c)) {
    return false;
  }
  if (_0x1dcb0b === undefined) {
    _0x1dcb0b = extractVersion(_0x3f517c);
  } else if (extractVersion(_0x3f517c) !== _0x1dcb0b) {
    return false;
  }
  switch (_0x1dcb0b) {
    case 1:
    case 2:
      return true;
    case 3:
    case 4:
    case 5:
      return ["8", "9", "a", "b"].indexOf(_0x3f517c.charAt(19)) !== -1;
    default:
      throw new Error("Invalid version provided.");
  }
};
var extractVersion = module.exports.version = function (_0x2c85ee) {
  return _0x2c85ee.charAt(14) | 0;
};
