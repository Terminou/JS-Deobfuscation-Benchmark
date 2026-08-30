function _0x2d0b() {
  var _0x5ae0d1 = ["width", "exports", "trim", "297254tgsAAW", "match", "newline", "substring", "join", "indent", "length", "cut", "2218516kMeZjR", "string", "472784qrBrzm", "slice", "4283575WiUYYi", "function", "escape", "1042743DmIoBL", "3100968Ezxlox", "153bHHrwv", "map", "922285OfpfbQ", "([\\s​]+|$)|[^\\s​]+?([\\s​]+|$)", "21uSCqnZ", ".{1,"];
  _0x2d0b = function () {
    return _0x5ae0d1;
  };
  return _0x2d0b();
}
var _0x237a00 = _0x2c35;
function _0x2c35(_0x7c03fd, _0x10ea6d) {
  _0x7c03fd = _0x7c03fd - 388;
  var _0x2d0b6c = _0x2d0b();
  var _0x2c35de = _0x2d0b6c[_0x7c03fd];
  return _0x2c35de;
}
(function (_0xc0b945, _0x2f04a8) {
  var _0x52d33d = _0x2c35, _0x1e0d85 = _0xc0b945();
  while (true) {
    try {
      var _0x10993c = -parseInt(_0x52d33d(407)) / 1 + -parseInt(_0x52d33d(392)) / 2 * (-parseInt(_0x52d33d(413)) / 3) + -parseInt(_0x52d33d(400)) / 4 + parseInt(_0x52d33d(404)) / 5 + -parseInt(_0x52d33d(408)) / 6 + parseInt(_0x52d33d(411)) / 7 + parseInt(_0x52d33d(402)) / 8 * (parseInt(_0x52d33d(409)) / 9);
      if (_0x10993c === _0x2f04a8) break; else _0x1e0d85.push(_0x1e0d85.shift());
    } catch (_0x5cf9a1) {
      _0x1e0d85.push(_0x1e0d85.shift());
    }
  }
}(_0x2d0b, 919325));
function trimEnd(_0xb5df6) {
  var _0x2d23c1 = _0x2c35;
  let _0x212f14 = _0xb5df6[_0x2d23c1(398)] - 1, _0xd025dc = _0xb5df6[_0x212f14];
  while (_0xd025dc === " " || _0xd025dc === "	") {
    _0xd025dc = _0xb5df6[--_0x212f14];
  }
  return _0xb5df6[_0x2d23c1(395)](0, _0x212f14 + 1);
}
function trimTabAndSpaces(_0x495254) {
  var _0x56ed21 = _0x2c35;
  const _0x3e4631 = _0x495254.split("\n"), _0x2659e9 = _0x3e4631[_0x56ed21(410)](_0x39a549 => trimEnd(_0x39a549));
  return _0x2659e9[_0x56ed21(396)]("\n");
}
module[_0x237a00(390)] = function (_0x19a5ae, _0x1c9737) {
  var _0x43e0ec = _0x237a00;
  _0x1c9737 = _0x1c9737 || {};
  if (_0x19a5ae == null) return _0x19a5ae;
  var _0x4bea06 = _0x1c9737[_0x43e0ec(389)] || 50, _0x1b5ff0 = typeof _0x1c9737[_0x43e0ec(397)] === _0x43e0ec(401) ? _0x1c9737[_0x43e0ec(397)] : "  ", _0x34bb33 = _0x1c9737[_0x43e0ec(394)] || "\n" + _0x1b5ff0, _0x434d15 = typeof _0x1c9737.escape === _0x43e0ec(405) ? _0x1c9737[_0x43e0ec(406)] : identity, _0x355bb1 = _0x43e0ec(388) + _0x4bea06 + "}";
  _0x1c9737[_0x43e0ec(399)] !== true && (_0x355bb1 += _0x43e0ec(412));
  var _0x168201 = new RegExp(_0x355bb1, "g"), _0x237820 = _0x19a5ae[_0x43e0ec(393)](_0x168201) || [], _0x5ca56e = _0x1b5ff0 + _0x237820[_0x43e0ec(410)](function (_0x3a223f) {
    var _0x3b821d = _0x43e0ec;
    return _0x3a223f.slice(-1) === "\n" && (_0x3a223f = _0x3a223f[_0x3b821d(403)](0, _0x3a223f.length - 1)), _0x434d15(_0x3a223f);
  })[_0x43e0ec(396)](_0x34bb33);
  return _0x1c9737[_0x43e0ec(391)] === true && (_0x5ca56e = trimTabAndSpaces(_0x5ca56e)), _0x5ca56e;
};
