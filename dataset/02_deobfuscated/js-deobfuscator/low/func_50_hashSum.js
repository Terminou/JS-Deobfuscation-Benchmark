"use strict";
function _0x2c53(_0x4ee2b6, _0x546a8a) {
  _0x4ee2b6 = _0x4ee2b6 - 418;
  var _0x1a46f4 = _0x1a46();
  var _0x2c533a = _0x1a46f4[_0x4ee2b6];
  return _0x2c533a;
}
function _0x1a46() {
  var _0x20dce7 = ["170WvHsvr", "message", "830809aRSQwS", "5979hWsyhh", "call", "toString", "prototype", "reduce", "522665ULSuyI", "null", "indexOf", "4153sDeLNX", "6kADJdv", "26jLWZMt", "sort", "function", "object", "15352ofmhdV", "2655880QgyBIo", "valueOf", "[valueOf exception]", "1709361YAqLlU", "84lFUFNm", "8GlBFpY", "length"];
  _0x1a46 = function () {
    return _0x20dce7;
  };
  return _0x1a46();
}
(function (_0xc3b5ef, _0xc3159a) {
  var _0x203cf4 = _0x2c53, _0x381f3a = _0xc3b5ef();
  while (true) {
    try {
      var _0x142e5b = -parseInt(_0x203cf4(430)) / 1 * (parseInt(_0x203cf4(432)) / 2) + parseInt(_0x203cf4(422)) / 3 + parseInt(_0x203cf4(436)) / 4 * (-parseInt(_0x203cf4(419)) / 5) + -parseInt(_0x203cf4(431)) / 6 * (-parseInt(_0x203cf4(421)) / 7) + -parseInt(_0x203cf4(442)) / 8 * (-parseInt(_0x203cf4(440)) / 9) + -parseInt(_0x203cf4(437)) / 10 + parseInt(_0x203cf4(427)) / 11 * (parseInt(_0x203cf4(441)) / 12);
      if (_0x142e5b === _0xc3159a) break; else _0x381f3a.push(_0x381f3a.shift());
    } catch (_0x1dc7d7) {
      _0x381f3a.push(_0x381f3a.shift());
    }
  }
}(_0x1a46, 193145));
function pad(_0xde0821, _0x2532a1) {
  var _0x1b4327 = _0x2c53;
  while (_0xde0821[_0x1b4327(418)] < _0x2532a1) {
    _0xde0821 = "0" + _0xde0821;
  }
  return _0xde0821;
}
function fold(_0x2f10d1, _0x2dc146) {
  var _0x3a7744 = _0x2c53, _0x63f572, _0x38d283, _0x27fae9;
  if (_0x2dc146[_0x3a7744(418)] === 0) return _0x2f10d1;
  for (_0x63f572 = 0, _0x27fae9 = _0x2dc146[_0x3a7744(418)]; _0x63f572 < _0x27fae9; _0x63f572++) {
    _0x38d283 = _0x2dc146.charCodeAt(_0x63f572), _0x2f10d1 = (_0x2f10d1 << 5) - _0x2f10d1 + _0x38d283, _0x2f10d1 |= 0;
  }
  return _0x2f10d1 < 0 ? _0x2f10d1 * -2 : _0x2f10d1;
}
function foldObject(_0x4ac41a, _0x421a04, _0x196ad9) {
  var _0xe9875e = _0x2c53;
  return Object.keys(_0x421a04)[_0xe9875e(433)]()[_0xe9875e(426)](_0x15b945, _0x4ac41a);
}
function foldValue(_0x1847ae, _0x465dc2, _0x3d9ef4, _0x1dcfed) {
  var _0x49780c = _0x2c53, _0x4bbce1 = fold(fold(fold(_0x1847ae, _0x3d9ef4), toString(_0x465dc2)), typeof _0x465dc2);
  if (_0x465dc2 === null) return fold(_0x4bbce1, _0x49780c(428));
  if (_0x465dc2 === undefined) return fold(_0x4bbce1, "undefined");
  if (typeof _0x465dc2 === _0x49780c(435) || typeof _0x465dc2 === _0x49780c(434)) {
    if (_0x1dcfed[_0x49780c(429)](_0x465dc2) !== -1) return fold(_0x4bbce1, "[Circular]" + _0x3d9ef4);
    _0x1dcfed.push(_0x465dc2);
    var _0x22a35f = foldObject(_0x4bbce1, _0x465dc2, _0x1dcfed);
    if (!(_0x49780c(438) in _0x465dc2) || typeof _0x465dc2[_0x49780c(438)] !== _0x49780c(434)) return _0x22a35f;
    try {
      return fold(_0x22a35f, String(_0x465dc2[_0x49780c(438)]()));
    } catch (_0x38ec2f) {
      return fold(_0x22a35f, _0x49780c(439) + (_0x38ec2f.stack || _0x38ec2f[_0x49780c(420)]));
    }
  }
  return fold(_0x4bbce1, _0x465dc2[_0x49780c(424)]());
}
function toString(_0x38e45d) {
  var _0x3faa55 = _0x2c53;
  return Object[_0x3faa55(425)][_0x3faa55(424)][_0x3faa55(423)](_0x38e45d);
}
function sum(_0x4bb2e5) {
  var _0x3872a0 = _0x2c53;
  return pad(foldValue(0, _0x4bb2e5, "", [])[_0x3872a0(424)](16), 8);
}
module.exports = sum;
