function trimEnd(_0x2ebef1) {
  let _0x1c84d1 = _0x2ebef1.length - 1;
  let _0xffbf1a = _0x2ebef1[_0x1c84d1];
  while (_0xffbf1a === " " || _0xffbf1a === "\t") {
    _0xffbf1a = _0x2ebef1[--_0x1c84d1];
  }
  return _0x2ebef1.substring(0, _0x1c84d1 + 1);
}
function trimTabAndSpaces(_0x53317e) {
  const _0x9d69ea = _0x53317e.split("\n");
  const _0x34c6aa = _0x9d69ea.map(_0xd18f2b => trimEnd(_0xd18f2b));
  return _0x34c6aa.join("\n");
}
module.exports = function (_0x25714c, _0x3538a6) {
  _0x3538a6 = _0x3538a6 || {};
  if (_0x25714c == null) {
    return _0x25714c;
  }
  var _0x18dd0b = _0x3538a6.width || 50;
  var _0x15daa9 = typeof _0x3538a6.indent === "string" ? _0x3538a6.indent : "  ";
  var _0x69484d = _0x3538a6.newline || "\n" + _0x15daa9;
  var _0x2dd19d = typeof _0x3538a6.escape === "function" ? _0x3538a6.escape : identity;
  var _0x289f0e = ".{1," + _0x18dd0b + "}";
  if (_0x3538a6.cut !== true) {
    _0x289f0e += "([\\s​]+|$)|[^\\s​]+?([\\s​]+|$)";
  }
  var _0x24d335 = new RegExp(_0x289f0e, "g");
  var _0x430b27 = _0x25714c.match(_0x24d335) || [];
  var _0x438ee7 = _0x15daa9 + _0x430b27.map(function (_0x5bc5a3) {
    if (_0x5bc5a3.slice(-1) === "\n") {
      _0x5bc5a3 = _0x5bc5a3.slice(0, _0x5bc5a3.length - 1);
    }
    return _0x2dd19d(_0x5bc5a3);
  }).join(_0x69484d);
  if (_0x3538a6.trim === true) {
    _0x438ee7 = trimTabAndSpaces(_0x438ee7);
  }
  return _0x438ee7;
};
function identity(_0x2c22db) {
  return _0x2c22db;
}