'use strict';

module.exports = bytes;
module.exports.format = format;
module.exports.parse = parse;
var formatThousandsRegExp = /\B(?=(\d{3})+(?!\d))/g;
var formatDecimalsRegExp = /(?:\.0*|(\.[^0]+)0+)$/;
var map = {
  'b': 0x1,
  'kb': 1024,
  'mb': 1048576,
  'gb': 1073741824,
  'tb': Math.pow(0x400, 0x4),
  'pb': Math.pow(0x400, 0x5)
};
var parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;
function bytes(_0x408a64, _0x552f92) {
  if (typeof _0x408a64 === 'string') {
    return parse(_0x408a64);
  }
  if (typeof _0x408a64 === 'number') {
    return format(_0x408a64, _0x552f92);
  }
  return null;
}
function format(_0x5c2d65, _0x4980e6) {
  if (!Number.isFinite(_0x5c2d65)) {
    return null;
  }
  var _0x5cb070 = Math.abs(_0x5c2d65);
  var _0x1da751 = _0x4980e6 && _0x4980e6.thousandsSeparator || '';
  var _0x25ced2 = _0x4980e6 && _0x4980e6.unitSeparator || '';
  var _0x5a0610 = _0x4980e6 && _0x4980e6.decimalPlaces !== undefined ? _0x4980e6.decimalPlaces : 0x2;
  var _0x4b0035 = Boolean(_0x4980e6 && _0x4980e6.fixedDecimals);
  var _0x183cd4 = _0x4980e6 && _0x4980e6.unit || '';
  if (!_0x183cd4 || !map[_0x183cd4.toLowerCase()]) {
    if (_0x5cb070 >= map.pb) {
      _0x183cd4 = 'PB';
    } else if (_0x5cb070 >= map.tb) {
      _0x183cd4 = 'TB';
    } else if (_0x5cb070 >= 1073741824) {
      _0x183cd4 = 'GB';
    } else if (_0x5cb070 >= 1048576) {
      _0x183cd4 = 'MB';
    } else if (_0x5cb070 >= 1024) {
      _0x183cd4 = 'KB';
    } else {
      _0x183cd4 = 'B';
    }
  }
  var _0x2105c6 = _0x5c2d65 / map[_0x183cd4.toLowerCase()];
  var _0x1421c7 = _0x2105c6.toFixed(_0x5a0610);
  if (!_0x4b0035) {
    _0x1421c7 = _0x1421c7.replace(formatDecimalsRegExp, '$1');
  }
  if (_0x1da751) {
    _0x1421c7 = _0x1421c7.split('.').map(function (_0x580ea7, _0x1f6a6f) {
      return _0x1f6a6f === 0x0 ? _0x580ea7.replace(formatThousandsRegExp, _0x1da751) : _0x580ea7;
    }).join('.');
  }
  return _0x1421c7 + _0x25ced2 + _0x183cd4;
}
function parse(_0x303e49) {
  if (typeof _0x303e49 === 'number' && !isNaN(_0x303e49)) {
    return _0x303e49;
  }
  if (typeof _0x303e49 !== 'string') {
    return null;
  }
  var _0x2641ab = parseRegExp.exec(_0x303e49);
  var _0x37e339;
  var _0x299e8a = 'b';
  if (!_0x2641ab) {
    _0x37e339 = parseInt(_0x303e49, 0xa);
    _0x299e8a = 'b';
  } else {
    _0x37e339 = parseFloat(_0x2641ab[0x1]);
    _0x299e8a = _0x2641ab[0x4].toLowerCase();
  }
  if (isNaN(_0x37e339)) {
    return null;
  }
  return Math.floor(map[_0x299e8a] * _0x37e339);
}