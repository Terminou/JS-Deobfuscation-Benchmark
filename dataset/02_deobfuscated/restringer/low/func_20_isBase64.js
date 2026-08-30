function _0xc99a() {
  return [
    'allowMime',
    'paddingRequired',
    '397395JiliVY',
    '548640SxuqEn',
    'allowEmpty',
    'test',
    'mimeRequired',
    '1680042hDDtuR',
    'exports',
    'undefined',
    '312LmPWfS',
    'amd',
    '16615Zftpwu',
    'isBase64',
    'boolean',
    '52bdVBmH',
    '(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?',
    '(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}(==)?|[A-Za-z0-9+\\/]{3}=?)?',
    '6393MPFjEx',
    '45071LDmkgu',
    '30oeXPQO',
    '303954VbCoyM'
  ];
}
function _0x13cc(_0xa1581f, _0x476b70) {
  _0xa1581f = _0xa1581f - 130;
  var _0xc99a36 = [
    'allowMime',
    'paddingRequired',
    '397395JiliVY',
    '548640SxuqEn',
    'allowEmpty',
    'test',
    'mimeRequired',
    '1680042hDDtuR',
    'exports',
    'undefined',
    '312LmPWfS',
    'amd',
    '16615Zftpwu',
    'isBase64',
    'boolean',
    '52bdVBmH',
    '(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?',
    '(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}(==)?|[A-Za-z0-9+\\/]{3}=?)?',
    '6393MPFjEx',
    '45071LDmkgu',
    '30oeXPQO',
    '303954VbCoyM'
  ];
  var _0x13cc00 = _0xc99a36[_0xa1581f];
  return _0xc99a36[_0xa1581f];
}
(function (_0x103b1f) {
  'use strict';
  function _0x45111c(_0x4b63a0, _0x3bf1b8) {
    if (_0x4b63a0 instanceof Boolean || typeof _0x4b63a0 === 'boolean')
      return false;
    if (!(_0x3bf1b8 instanceof Object)) {
      _0x3bf1b8 = {};
    }
    if (_0x3bf1b8.allowEmpty === false && _0x4b63a0 === '')
      return false;
    var _0x282e6d = '(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?';
    var _0x5143b9 = '(data:\\w+\\/[a-zA-Z\\+\\-\\.]+;base64,)';
    if (_0x3bf1b8.mimeRequired === true)
      _0x282e6d = '(data:\\w+\\/[a-zA-Z\\+\\-\\.]+;base64,)' + _0x282e6d;
    else if (_0x3bf1b8.allowMime === true) {
      _0x282e6d = '(data:\\w+\\/[a-zA-Z\\+\\-\\.]+;base64,)?' + _0x282e6d;
    }
    if (_0x3bf1b8.paddingRequired === false) {
      _0x282e6d = '(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}(==)?|[A-Za-z0-9+\\/]{3}=?)?';
    }
    return new RegExp('^' + _0x282e6d + '$', 'gi').test(_0x4b63a0);
  }
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _0x45111c;
    }
    exports.isBase64 = _0x45111c;
  } else
    typeof define === 'function' && define.amd ? define([], function () {
      return _0x45111c;
    }) : _0x103b1f.isBase64 = _0x45111c;
}(this));