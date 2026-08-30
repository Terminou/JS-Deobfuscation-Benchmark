var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
var _byteToHex = [];
for (var i = 0; i < 256; i++) {
  _byteToHex[i] = (i + 256).toString(16).substr(1);
}
function unparse(_0x60161a, _0x58b2da) {
  var _0x3386f2 = _0x58b2da || 0;
  var _0x278697 = _byteToHex;
  return _0x278697[_0x60161a[_0x3386f2++]] + _0x278697[_0x60161a[_0x3386f2++]] + _0x278697[_0x60161a[_0x3386f2++]] + _0x278697[_0x60161a[_0x3386f2++]] + "-" + _0x278697[_0x60161a[_0x3386f2++]] + _0x278697[_0x60161a[_0x3386f2++]] + "-" + _0x278697[_0x60161a[_0x3386f2++]] + _0x278697[_0x60161a[_0x3386f2++]] + "-" + _0x278697[_0x60161a[_0x3386f2++]] + _0x278697[_0x60161a[_0x3386f2++]] + "-" + _0x278697[_0x60161a[_0x3386f2++]] + _0x278697[_0x60161a[_0x3386f2++]] + _0x278697[_0x60161a[_0x3386f2++]] + _0x278697[_0x60161a[_0x3386f2++]] + _0x278697[_0x60161a[_0x3386f2++]] + _0x278697[_0x60161a[_0x3386f2++]];
}
module.exports = function (_0xfda130, _0x24c0ef) {
  var _0x162749;
  if (Buffer.isBuffer(_0xfda130)) {
    _0x162749 = unparse(_0xfda130);
  } else if (Object.prototype.toString.call(_0xfda130) === "[object String]") {
    _0x162749 = _0xfda130;
  } else {
    return false;
  }
  _0x162749 = _0x162749.toLowerCase();
  if (!pattern.test(_0x162749)) {
    return false;
  }
  if (_0x24c0ef === undefined) {
    _0x24c0ef = extractVersion(_0x162749);
  } else if (extractVersion(_0x162749) !== _0x24c0ef) {
    return false;
  }
  switch (_0x24c0ef) {
    case 1:
    case 2:
      return true;
    case 3:
    case 4:
    case 5:
      return ["8", "9", "a", "b"].indexOf(_0x162749.charAt(19)) !== -1;
    default:
      throw new Error("Invalid version provided.");
  }
};
var extractVersion = module.exports.version = function (_0x11465f) {
  return _0x11465f.charAt(14) | 0;
};