"use strict";
function _0x5c2d() {
  var _0x407238 = ["22927490QahmMX", "pow", "string", "74rABQoG", "toLowerCase", "4RgCPJe", "replace", "14nQYiGp", "17367guByJk", "fixedDecimals", "8158736GAAnIT", "2345825VFduFr", "number", "isFinite", "thousandsSeparator", "unitSeparator", "9577818EmaqZd", "join", "split", "4483536kJKVHa", "abs", "197072obFUtT", "floor", "exports"];
  _0x5c2d = function () {
    return _0x407238;
  };
  return _0x5c2d();
}
var _0x4f3a39 = _0x4980;
(function (_0x582ef6, _0x1e34ef) {
  var _0x32ae41 = _0x4980, _0xe45143 = _0x582ef6();
  while (true) {
    try {
      var _0x448fbc = parseInt(_0x32ae41(129)) / 1 + parseInt(_0x32ae41(135)) / 2 * (parseInt(_0x32ae41(116)) / 3) + -parseInt(_0x32ae41(137)) / 4 * (parseInt(_0x32ae41(119)) / 5) + -parseInt(_0x32ae41(127)) / 6 * (parseInt(_0x32ae41(115)) / 7) + -parseInt(_0x32ae41(118)) / 8 + parseInt(_0x32ae41(124)) / 9 + parseInt(_0x32ae41(132)) / 10;
      if (_0x448fbc === _0x1e34ef) break; else _0xe45143.push(_0xe45143.shift());
    } catch (_0x42d75a) {
      _0xe45143.push(_0xe45143.shift());
    }
  }
}(_0x5c2d, 784697));
module[_0x4f3a39(131)] = bytes, module[_0x4f3a39(131)].format = format, module[_0x4f3a39(131)].parse = parse;
function _0x4980(_0x408a64, _0x552f92) {
  _0x408a64 = _0x408a64 - 115;
  var _0x5c2d65 = _0x5c2d();
  var _0x4980e6 = _0x5c2d65[_0x408a64];
  return _0x4980e6;
}
var formatThousandsRegExp = /\B(?=(\d{3})+(?!\d))/g, formatDecimalsRegExp = /(?:\.0*|(\.[^0]+)0+)$/, map = {b: 1, kb: 1024, mb: 1048576, gb: 1073741824, tb: Math[_0x4f3a39(133)](1024, 4), pb: Math[_0x4f3a39(133)](1024, 5)}, parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;
function bytes(_0x2105c6, _0x1421c7) {
  var _0x1c057f = _0x4f3a39;
  if (typeof _0x2105c6 === _0x1c057f(134)) return parse(_0x2105c6);
  if (typeof _0x2105c6 === _0x1c057f(120)) return format(_0x2105c6, _0x1421c7);
  return null;
}
function format(_0x580ea7, _0x1f6a6f) {
  var _0x186ba5 = _0x4f3a39;
  if (!Number[_0x186ba5(121)](_0x580ea7)) return null;
  var _0x303e49 = Math[_0x186ba5(128)](_0x580ea7), _0x2641ab = _0x1f6a6f && _0x1f6a6f[_0x186ba5(122)] || "", _0x37e339 = _0x1f6a6f && _0x1f6a6f[_0x186ba5(123)] || "", _0x299e8a = _0x1f6a6f && _0x1f6a6f.decimalPlaces !== undefined ? _0x1f6a6f.decimalPlaces : 2, _0x2ad60c = Boolean(_0x1f6a6f && _0x1f6a6f[_0x186ba5(117)]), _0x5312c7 = _0x1f6a6f && _0x1f6a6f.unit || "";
  if (!_0x5312c7 || !map[_0x5312c7[_0x186ba5(136)]()]) {
    if (_0x303e49 >= map.pb) _0x5312c7 = "PB"; else {
      if (_0x303e49 >= map.tb) _0x5312c7 = "TB"; else {
        if (_0x303e49 >= map.gb) _0x5312c7 = "GB"; else {
          if (_0x303e49 >= map.mb) _0x5312c7 = "MB"; else _0x303e49 >= map.kb ? _0x5312c7 = "KB" : _0x5312c7 = "B";
        }
      }
    }
  }
  var _0x2e1efd = _0x580ea7 / map[_0x5312c7[_0x186ba5(136)]()], _0x5188d2 = _0x2e1efd.toFixed(_0x299e8a);
  return !_0x2ad60c && (_0x5188d2 = _0x5188d2[_0x186ba5(138)](formatDecimalsRegExp, "$1")), _0x2641ab && (_0x5188d2 = _0x5188d2[_0x186ba5(126)](".").map(function (_0x5246a1, _0x4b809d) {
    var _0x5813a9 = _0x186ba5;
    return _0x4b809d === 0 ? _0x5246a1[_0x5813a9(138)](formatThousandsRegExp, _0x2641ab) : _0x5246a1;
  })[_0x186ba5(125)](".")), _0x5188d2 + _0x37e339 + _0x5312c7;
}
function parse(_0x5e86e7) {
  var _0x26610b = _0x4f3a39;
  if (typeof _0x5e86e7 === "number" && !isNaN(_0x5e86e7)) return _0x5e86e7;
  if (typeof _0x5e86e7 !== _0x26610b(134)) return null;
  var _0x4b3c83 = parseRegExp.exec(_0x5e86e7), _0x3960d0, _0x12dc2c = "b";
  !_0x4b3c83 ? (_0x3960d0 = parseInt(_0x5e86e7, 10), _0x12dc2c = "b") : (_0x3960d0 = parseFloat(_0x4b3c83[1]), _0x12dc2c = _0x4b3c83[4][_0x26610b(136)]());
  if (isNaN(_0x3960d0)) return null;
  return Math[_0x26610b(130)](map[_0x12dc2c] * _0x3960d0);
}
