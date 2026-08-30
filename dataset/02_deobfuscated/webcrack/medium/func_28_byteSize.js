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
function bytes(_0x58f426, _0x35d38c) {
  if (typeof _0x58f426 === "string") {
    return parse(_0x58f426);
  }
  if (typeof _0x58f426 === "number") {
    return format(_0x58f426, _0x35d38c);
  }
  return null;
}
function format(_0x592709, _0x54ad57) {
  if (!Number.isFinite(_0x592709)) {
    return null;
  }
  var _0x3cf3d3 = Math.abs(_0x592709);
  var _0x3e68c6 = _0x54ad57 && _0x54ad57.thousandsSeparator || "";
  var _0x15e379 = _0x54ad57 && _0x54ad57.unitSeparator || "";
  var _0x4f4a11 = _0x54ad57 && _0x54ad57.decimalPlaces !== undefined ? _0x54ad57.decimalPlaces : 2;
  var _0x287a33 = Boolean(_0x54ad57 && _0x54ad57.fixedDecimals);
  var _0x387d5f = _0x54ad57 && _0x54ad57.unit || "";
  if (!_0x387d5f || !map[_0x387d5f.toLowerCase()]) {
    if (_0x3cf3d3 >= map.pb) {
      _0x387d5f = "PB";
    } else if (_0x3cf3d3 >= map.tb) {
      _0x387d5f = "TB";
    } else if (_0x3cf3d3 >= map.gb) {
      _0x387d5f = "GB";
    } else if (_0x3cf3d3 >= map.mb) {
      _0x387d5f = "MB";
    } else if (_0x3cf3d3 >= map.kb) {
      _0x387d5f = "KB";
    } else {
      _0x387d5f = "B";
    }
  }
  var _0x481c9e = _0x592709 / map[_0x387d5f.toLowerCase()];
  var _0xc2a03f = _0x481c9e.toFixed(_0x4f4a11);
  if (!_0x287a33) {
    _0xc2a03f = _0xc2a03f.replace(formatDecimalsRegExp, "$1");
  }
  if (_0x3e68c6) {
    _0xc2a03f = _0xc2a03f.split(".").map(function (_0x5456ef, _0x311ebf) {
      if (_0x311ebf === 0) {
        return _0x5456ef.replace(formatThousandsRegExp, _0x3e68c6);
      } else {
        return _0x5456ef;
      }
    }).join(".");
  }
  return _0xc2a03f + _0x15e379 + _0x387d5f;
}
function parse(_0x3bb2c5) {
  if (typeof _0x3bb2c5 === "number" && !isNaN(_0x3bb2c5)) {
    return _0x3bb2c5;
  }
  if (typeof _0x3bb2c5 !== "string") {
    return null;
  }
  var _0x4916a3 = parseRegExp.exec(_0x3bb2c5);
  var _0x47febd;
  var _0x3b1b6a = "b";
  if (!_0x4916a3) {
    _0x47febd = parseInt(_0x3bb2c5, 10);
    _0x3b1b6a = "b";
  } else {
    _0x47febd = parseFloat(_0x4916a3[1]);
    _0x3b1b6a = _0x4916a3[4].toLowerCase();
  }
  if (isNaN(_0x47febd)) {
    return null;
  }
  return Math.floor(map[_0x3b1b6a] * _0x47febd);
}