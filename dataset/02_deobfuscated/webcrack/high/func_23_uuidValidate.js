var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
var _byteToHex = [];
for (var i = 0; i < 256; i++) {
  _byteToHex[i] = (i + 256).toString(16).substr(1);
}
function unparse(_0x3c0a55, _0x46a91e) {
  var _0x2bea0b = _0x46a91e || 0;
  var _0x3c648c = _byteToHex;
  return _0x3c648c[_0x3c0a55[_0x2bea0b++]] + _0x3c648c[_0x3c0a55[_0x2bea0b++]] + _0x3c648c[_0x3c0a55[_0x2bea0b++]] + _0x3c648c[_0x3c0a55[_0x2bea0b++]] + "-" + _0x3c648c[_0x3c0a55[_0x2bea0b++]] + _0x3c648c[_0x3c0a55[_0x2bea0b++]] + "-" + _0x3c648c[_0x3c0a55[_0x2bea0b++]] + _0x3c648c[_0x3c0a55[_0x2bea0b++]] + "-" + _0x3c648c[_0x3c0a55[_0x2bea0b++]] + _0x3c648c[_0x3c0a55[_0x2bea0b++]] + "-" + _0x3c648c[_0x3c0a55[_0x2bea0b++]] + _0x3c648c[_0x3c0a55[_0x2bea0b++]] + _0x3c648c[_0x3c0a55[_0x2bea0b++]] + _0x3c648c[_0x3c0a55[_0x2bea0b++]] + _0x3c648c[_0x3c0a55[_0x2bea0b++]] + _0x3c648c[_0x3c0a55[_0x2bea0b++]];
}
module.exports = function (_0x3efcd1, _0x4f0e7c) {
  var _0x5a55b4;
  if (Buffer.isBuffer(_0x3efcd1)) {
    _0x5a55b4 = unparse(_0x3efcd1);
  } else if (Object.prototype.toString.call(_0x3efcd1) === "[object String]") {
    _0x5a55b4 = _0x3efcd1;
  } else {
    return false;
  }
  _0x5a55b4 = _0x5a55b4.toLowerCase();
  if (!pattern.test(_0x5a55b4)) {
    return false;
  }
  if (_0x4f0e7c === undefined) {
    _0x4f0e7c = extractVersion(_0x5a55b4);
  } else if (extractVersion(_0x5a55b4) !== _0x4f0e7c) {
    return false;
  }
  switch (_0x4f0e7c) {
    case 1:
    case 2:
      return true;
    case 3:
    case 4:
    case 5:
      return ["8", "9", "a", "b"].indexOf(_0x5a55b4.charAt(19)) !== -1;
    default:
      throw new Error("Invalid version provided.");
  }
};
var extractVersion = module.exports.version = function (_0x524fcf) {
  return _0x524fcf.charAt(14) | 0;
};