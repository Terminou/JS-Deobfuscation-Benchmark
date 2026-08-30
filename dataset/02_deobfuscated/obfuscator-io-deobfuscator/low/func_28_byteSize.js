'use strict';

function _0x5c2d() {
  var _0x407238 = ['22927490QahmMX', 'pow', 'string', '74rABQoG', 'toLowerCase', '4RgCPJe', 'replace', '14nQYiGp', '17367guByJk', 'fixedDecimals', '8158736GAAnIT', '2345825VFduFr', 'number', 'isFinite', 'thousandsSeparator', 'unitSeparator', '9577818EmaqZd', 'join', 'split', '4483536kJKVHa', 'abs', '197072obFUtT', 'floor', 'exports'];
  _0x5c2d = function () {
    return _0x407238;
  };
  return _0x5c2d();
}
(function (_0x582ef6, _0x1e34ef) {
  var _0xe45143 = _0x582ef6();
  while (true) {
    try {
      var _0x448fbc = parseInt(_0x4980(0x81)) / 0x1 + parseInt(_0x4980(0x87)) / 0x2 * (parseInt(_0x4980(0x74)) / 0x3) + -parseInt(_0x4980(0x89)) / 0x4 * (parseInt(_0x4980(0x77)) / 0x5) + -parseInt(_0x4980(0x7f)) / 0x6 * (parseInt(_0x4980(0x73)) / 0x7) + -parseInt(_0x4980(0x76)) / 0x8 + parseInt(_0x4980(0x7c)) / 0x9 + parseInt(_0x4980(0x84)) / 0xa;
      if (_0x448fbc === _0x1e34ef) {
        break;
      } else {
        _0xe45143.push(_0xe45143.shift());
      }
    } catch (_0x42d75a) {
      _0xe45143.push(_0xe45143.shift());
    }
  }
})(_0x5c2d, 0xbf939);
module[_0x4980(0x83)] = bytes;
module[_0x4980(0x83)].format = format;
module[_0x4980(0x83)].parse = parse;
function _0x4980(_0x408a64, _0x552f92) {
  _0x408a64 = _0x408a64 - 0x73;
  var _0x5c2d65 = _0x5c2d();
  var _0x4980e6 = _0x5c2d65[_0x408a64];
  return _0x4980e6;
}
var formatThousandsRegExp = /\B(?=(\d{3})+(?!\d))/g;
var formatDecimalsRegExp = /(?:\.0*|(\.[^0]+)0+)$/;
var map = {
  'b': 0x1,
  'kb': 1024,
  'mb': 1048576,
  'gb': 1073741824,
  'tb': Math[_0x4980(0x85)](0x400, 0x4),
  'pb': Math[_0x4980(0x85)](0x400, 0x5)
};
var parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;
function bytes(_0x2105c6, _0x1421c7) {
  if (typeof _0x2105c6 === _0x4980(0x86)) {
    return parse(_0x2105c6);
  }
  if (typeof _0x2105c6 === _0x4980(0x78)) {
    return format(_0x2105c6, _0x1421c7);
  }
  return null;
}
function format(_0x580ea7, _0x1f6a6f) {
  if (!Number[_0x4980(0x79)](_0x580ea7)) {
    return null;
  }
  var _0x303e49 = Math[_0x4980(0x80)](_0x580ea7);
  var _0x2641ab = _0x1f6a6f && _0x1f6a6f[_0x4980(0x7a)] || '';
  var _0x37e339 = _0x1f6a6f && _0x1f6a6f[_0x4980(0x7b)] || '';
  var _0x299e8a = _0x1f6a6f && _0x1f6a6f.decimalPlaces !== undefined ? _0x1f6a6f.decimalPlaces : 0x2;
  var _0x2ad60c = Boolean(_0x1f6a6f && _0x1f6a6f[_0x4980(0x75)]);
  var _0x5312c7 = _0x1f6a6f && _0x1f6a6f.unit || '';
  if (!_0x5312c7 || !map[_0x5312c7[_0x4980(0x88)]()]) {
    if (_0x303e49 >= map.pb) {
      _0x5312c7 = 'PB';
    } else {
      if (_0x303e49 >= map.tb) {
        _0x5312c7 = 'TB';
      } else {
        if (_0x303e49 >= 1073741824) {
          _0x5312c7 = 'GB';
        } else {
          if (_0x303e49 >= 1048576) {
            _0x5312c7 = 'MB';
          } else if (_0x303e49 >= 1024) {
            _0x5312c7 = 'KB';
          } else {
            _0x5312c7 = 'B';
          }
        }
      }
    }
  }
  var _0x2e1efd = _0x580ea7 / map[_0x5312c7[_0x4980(0x88)]()];
  var _0x5188d2 = _0x2e1efd.toFixed(_0x299e8a);
  if (!_0x2ad60c) {
    _0x5188d2 = _0x5188d2[_0x4980(0x8a)](formatDecimalsRegExp, '$1');
  }
  if (_0x2641ab) {
    _0x5188d2 = _0x5188d2[_0x4980(0x7e)]('.').map(function (_0x5246a1, _0x4b809d) {
      return _0x4b809d === 0x0 ? _0x5246a1[_0x4980(0x8a)](formatThousandsRegExp, _0x2641ab) : _0x5246a1;
    })[_0x4980(0x7d)]('.');
  }
  return _0x5188d2 + _0x37e339 + _0x5312c7;
}
function parse(_0x5e86e7) {
  if (typeof _0x5e86e7 === 'number' && !isNaN(_0x5e86e7)) {
    return _0x5e86e7;
  }
  if (typeof _0x5e86e7 !== _0x4980(0x86)) {
    return null;
  }
  var _0x4b3c83 = parseRegExp.exec(_0x5e86e7);
  var _0x3960d0;
  var _0x12dc2c = 'b';
  if (!_0x4b3c83) {
    _0x3960d0 = parseInt(_0x5e86e7, 0xa);
    _0x12dc2c = 'b';
  } else {
    _0x3960d0 = parseFloat(_0x4b3c83[0x1]);
    _0x12dc2c = _0x4b3c83[0x4][_0x4980(0x88)]();
  }
  if (isNaN(_0x3960d0)) {
    return null;
  }
  return Math[_0x4980(0x82)](map[_0x12dc2c] * _0x3960d0);
}