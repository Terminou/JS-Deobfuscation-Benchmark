function trimEnd(_0x247304) {
  let _0x11828d = _0x247304.length - 1;
  let _0x5b89d2 = _0x247304[_0x11828d];
  while (_0x5b89d2 === " " || _0x5b89d2 === "\t") {
    _0x5b89d2 = _0x247304[--_0x11828d];
  }
  return _0x247304.substring(0, _0x11828d + 1);
}
function trimTabAndSpaces(_0x234143) {
  const _0x53e0ab = _0x234143.split("\n");
  const _0x1ccc63 = _0x53e0ab.map(_0x40f4fe => trimEnd(_0x40f4fe));
  return _0x1ccc63.join("\n");
}
module.exports = function (_0x43721d, _0x4692cc) {
  _0x4692cc = _0x4692cc || {};
  if (_0x43721d == null) {
    return _0x43721d;
  }
  var _0x1a91fa = _0x4692cc.width || 50;
  var _0x22780a = typeof _0x4692cc.indent === "string" ? _0x4692cc.indent : "  ";
  var _0x551015 = _0x4692cc.newline || "\n" + _0x22780a;
  var _0x310edd = typeof _0x4692cc.escape === "function" ? _0x4692cc.escape : identity;
  var _0x2c64bc = ".{1," + _0x1a91fa + "}";
  if (_0x4692cc.cut !== true) {
    _0x2c64bc += "([\\s​]+|$)|[^\\s​]+?([\\s​]+|$)";
  }
  var _0xf84e34 = new RegExp(_0x2c64bc, "g");
  var _0x31cf2e = _0x43721d.match(_0xf84e34) || [];
  var _0xf89c94 = _0x22780a + _0x31cf2e.map(function (_0x5c9a7d) {
    if (_0x5c9a7d.slice(-1) === "\n") {
      _0x5c9a7d = _0x5c9a7d.slice(0, _0x5c9a7d.length - 1);
    }
    return _0x310edd(_0x5c9a7d);
  }).join(_0x551015);
  if (_0x4692cc.trim === true) {
    _0xf89c94 = trimTabAndSpaces(_0xf89c94);
  }
  return _0xf89c94;
};
function identity(_0x3a7fcd) {
  return _0x3a7fcd;
}