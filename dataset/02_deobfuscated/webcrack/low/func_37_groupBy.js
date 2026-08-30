module.exports = groupBy;
function groupBy(_0xae1eca, _0x19d278) {
  if (!Array.isArray(_0xae1eca)) {
    throw new Error("expected an array for first argument");
  }
  if (typeof _0x19d278 !== "function") {
    throw new Error("expected a function for second argument");
  }
  var _0x41270f = {};
  for (var _0x4b2bb3 = 0; _0x4b2bb3 < _0xae1eca.length; _0x4b2bb3++) {
    var _0x37bcee = _0xae1eca[_0x4b2bb3];
    var _0x25c040 = _0x19d278(_0x37bcee);
    var _0x5d8be6 = _0x41270f[_0x25c040];
    if (!Array.isArray(_0x5d8be6)) {
      _0x41270f[_0x25c040] = [_0x37bcee];
    } else {
      _0x41270f[_0x25c040].push(_0x37bcee);
    }
  }
  return _0x41270f;
}
;