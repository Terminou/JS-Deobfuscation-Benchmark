'use strict';
function _0x5c2d() {
  return [
    '14nQYiGp',
    '17367guByJk',
    'fixedDecimals',
    '8158736GAAnIT',
    '2345825VFduFr',
    'number',
    'isFinite',
    'thousandsSeparator',
    'unitSeparator',
    '9577818EmaqZd',
    'join',
    'split',
    '4483536kJKVHa',
    'abs',
    '197072obFUtT',
    'floor',
    'exports',
    '22927490QahmMX',
    'pow',
    'string',
    '74rABQoG',
    'toLowerCase',
    '4RgCPJe',
    'replace'
  ];
}
module.exports = bytes;
module.exports.format = format;
module.exports.parse = parse;
function _0x4980(_0x408a64, _0x552f92) {
  _0x408a64 = _0x408a64 - 115;
  var _0x5c2d65 = [
    '14nQYiGp',
    '17367guByJk',
    'fixedDecimals',
    '8158736GAAnIT',
    '2345825VFduFr',
    'number',
    'isFinite',
    'thousandsSeparator',
    'unitSeparator',
    '9577818EmaqZd',
    'join',
    'split',
    '4483536kJKVHa',
    'abs',
    '197072obFUtT',
    'floor',
    'exports',
    '22927490QahmMX',
    'pow',
    'string',
    '74rABQoG',
    'toLowerCase',
    '4RgCPJe',
    'replace'
  ];
  var _0x4980e6 = _0x5c2d65[_0x408a64];
  return _0x5c2d65[_0x408a64];
}
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
function bytes(_0x2105c6, _0x1421c7) {
  if (typeof _0x2105c6 === 'string')
    return parse(_0x2105c6);
  if (typeof _0x2105c6 === 'number')
    return format(_0x2105c6, _0x1421c7);
  return null;
}
function format(_0x580ea7, _0x1f6a6f) {
  if (!Number.isFinite(_0x580ea7))
    return null;
  var _0x303e49 = Math.abs(_0x580ea7);
  var _0x2641ab = _0x1f6a6f && _0x1f6a6f.thousandsSeparator || '';
  var _0x37e339 = _0x1f6a6f && _0x1f6a6f.unitSeparator || '';
  var _0x299e8a = _0x1f6a6f && _0x1f6a6f.decimalPlaces !== undefined ? _0x1f6a6f.decimalPlaces : 2;
  var _0x2ad60c = Boolean(_0x1f6a6f && _0x1f6a6f.fixedDecimals);
  var _0x5312c7 = _0x1f6a6f && _0x1f6a6f.unit || '';
  if (!_0x5312c7 || !map[_0x5312c7.toLowerCase()]) {
    if (_0x303e49 >= 1125899906842624)
      _0x5312c7 = 'PB';
    else {
      if (_0x303e49 >= 1099511627776)
        _0x5312c7 = 'TB';
      else {
        if (_0x303e49 >= 1073741824)
          _0x5312c7 = 'GB';
        else {
          if (_0x303e49 >= 1048576)
            _0x5312c7 = 'MB';
          else
            _0x303e49 >= 1024 ? _0x5312c7 = 'KB' : _0x5312c7 = 'B';
        }
      }
    }
  }
  var _0x2e1efd = _0x580ea7 / map[_0x5312c7.toLowerCase()];
  var _0x5188d2 = _0x2e1efd.toFixed(_0x299e8a);
  if (!_0x2ad60c) {
    _0x5188d2 = _0x5188d2.replace(/(?:\.0*|(\.[^0]+)0+)$/, '$1');
  }
  if (_0x2641ab) {
    _0x5188d2 = _0x5188d2.split('.').map(function (_0x5246a1, _0x4b809d) {
      return _0x4b809d === 0 ? _0x5246a1.replace(/\B(?=(\d{3})+(?!\d))/g, _0x2641ab) : _0x5246a1;
    }).join('.');
  }
  return _0x5188d2 + _0x37e339 + _0x5312c7;
}
function parse(_0x5e86e7) {
  if (typeof _0x5e86e7 === 'number' && !isNaN(_0x5e86e7))
    return _0x5e86e7;
  if (typeof _0x5e86e7 !== 'string')
    return null;
  var _0x4b3c83 = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i.exec(_0x5e86e7);
  var _0x3960d0;
  var _0x12dc2c = 'b';
  !_0x4b3c83 ? (_0x3960d0 = parseInt(_0x5e86e7, 10), _0x12dc2c = 'b') : (_0x3960d0 = parseFloat(_0x4b3c83[1]), _0x12dc2c = _0x4b3c83[4].toLowerCase());
  if (isNaN(_0x3960d0))
    return null;
  return Math.floor(map[_0x12dc2c] * _0x3960d0);
}