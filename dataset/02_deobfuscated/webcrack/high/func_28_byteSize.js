'use strict';

module.exports = bytes;
module.exports.format = format;
module.exports.parse = parse;
var formatThousandsRegExp = /\B(?=(\d{3})+(?!\d))/g;
var formatDecimalsRegExp = /(?:\.0*|(\.[^0]+)0+)$/;
var map = {
  b: 1,
  kb: 1024,
  mb: 1048576,
  gb: 1073741824,
  tb: Math.pow(1024, 4),
  pb: Math.pow(1024, 5)
};
var parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;
function bytes(_0x4001c1, _0x6f784f) {
  if (typeof _0x4001c1 === "string") {
    return parse(_0x4001c1);
  }
  if (typeof _0x4001c1 === "number") {
    return format(_0x4001c1, _0x6f784f);
  }
  return null;
}
function format(_0x180d17, _0x520ee1) {
  if (!Number.isFinite(_0x180d17)) {
    return null;
  }
  var _0x143581 = Math.abs(_0x180d17);
  var _0x16e9d4 = _0x520ee1 && _0x520ee1.thousandsSeparator || "";
  var _0xfb904b = _0x520ee1 && _0x520ee1.unitSeparator || "";
  var _0x1bc345 = _0x520ee1 && _0x520ee1.decimalPlaces !== undefined ? _0x520ee1.decimalPlaces : 2;
  var _0x1a0a58 = Boolean(_0x520ee1 && _0x520ee1.fixedDecimals);
  var _0x3df295 = _0x520ee1 && _0x520ee1.unit || "";
  if (!_0x3df295 || !map[_0x3df295.toLowerCase()]) {
    if (_0x143581 >= map.pb) {
      _0x3df295 = "PB";
    } else if (_0x143581 >= map.tb) {
      _0x3df295 = "TB";
    } else if (_0x143581 >= map.gb) {
      _0x3df295 = "GB";
    } else if (_0x143581 >= map.mb) {
      _0x3df295 = "MB";
    } else if (_0x143581 >= map.kb) {
      _0x3df295 = "KB";
    } else {
      _0x3df295 = "B";
    }
  }
  var _0x340c60 = _0x180d17 / map[_0x3df295.toLowerCase()];
  var _0x4d779f = _0x340c60.toFixed(_0x1bc345);
  if (!_0x1a0a58) {
    _0x4d779f = _0x4d779f.replace(formatDecimalsRegExp, "$1");
  }
  if (_0x16e9d4) {
    _0x4d779f = _0x4d779f.split(".").map(function (_0x5a6ee2, _0x3ea83b) {
      if (_0x3ea83b === 0) {
        return _0x5a6ee2.replace(formatThousandsRegExp, _0x16e9d4);
      } else {
        return _0x5a6ee2;
      }
    }).join(".");
  }
  return _0x4d779f + _0xfb904b + _0x3df295;
}
function parse(_0x174088) {
  if (typeof _0x174088 === "number" && !isNaN(_0x174088)) {
    return _0x174088;
  }
  if (typeof _0x174088 !== "string") {
    return null;
  }
  var _0x366d85 = parseRegExp.exec(_0x174088);
  var _0x34cb36;
  var _0x267ab1 = "b";
  if (!_0x366d85) {
    _0x34cb36 = parseInt(_0x174088, 10);
    _0x267ab1 = "b";
  } else {
    _0x34cb36 = parseFloat(_0x366d85[1]);
    _0x267ab1 = _0x366d85[4].toLowerCase();
  }
  if (isNaN(_0x34cb36)) {
    return null;
  }
  return Math.floor(map[_0x267ab1] * _0x34cb36);
}