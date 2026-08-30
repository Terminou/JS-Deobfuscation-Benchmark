(function (_0x586feb) {
  'use strict';

  _0x586feb.exports.is_uri = _0x2b214d;
  _0x586feb.exports.is_http_uri = _0x3e2d72;
  _0x586feb.exports.is_https_uri = _0x655b12;
  _0x586feb.exports.is_web_uri = _0xdde4c4;
  _0x586feb.exports.isUri = _0x2b214d;
  _0x586feb.exports.isHttpUri = _0x3e2d72;
  _0x586feb.exports.isHttpsUri = _0x655b12;
  _0x586feb.exports.isWebUri = _0xdde4c4;
  function _0x1b358f(_0xcd38a7) {
    var _0x4c13bf = _0xcd38a7.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
    return _0x4c13bf;
  }
  function _0x2b214d(_0xe57ae4) {
    if (!_0xe57ae4) {
      return;
    }
    if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(_0xe57ae4)) {
      return;
    }
    if (/%[^0-9a-f]/i.test(_0xe57ae4)) {
      return;
    }
    if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(_0xe57ae4)) {
      return;
    }
    var _0x40ef45 = [];
    var _0xfd0909 = "";
    var _0x3c8b0b = "";
    var _0x3e36dc = "";
    var _0xdcd56e = "";
    var _0x37c179 = "";
    var _0x8d86b2 = "";
    _0x40ef45 = _0x1b358f(_0xe57ae4);
    _0xfd0909 = _0x40ef45[1];
    _0x3c8b0b = _0x40ef45[2];
    _0x3e36dc = _0x40ef45[3];
    _0xdcd56e = _0x40ef45[4];
    _0x37c179 = _0x40ef45[5];
    if (!_0xfd0909 || !_0xfd0909.length || !(_0x3e36dc.length >= 0)) {
      return;
    }
    if (_0x3c8b0b && _0x3c8b0b.length) {
      if (_0x3e36dc.length !== 0 && !/^\//.test(_0x3e36dc)) {
        return;
      }
    } else if (/^\/\//.test(_0x3e36dc)) {
      return;
    }
    if (!/^[a-z][a-z0-9\+\-\.]*$/.test(_0xfd0909.toLowerCase())) {
      return;
    }
    _0x8d86b2 += _0xfd0909 + ":";
    if (_0x3c8b0b && _0x3c8b0b.length) {
      _0x8d86b2 += "//" + _0x3c8b0b;
    }
    _0x8d86b2 += _0x3e36dc;
    if (_0xdcd56e && _0xdcd56e.length) {
      _0x8d86b2 += "?" + _0xdcd56e;
    }
    if (_0x37c179 && _0x37c179.length) {
      _0x8d86b2 += "#" + _0x37c179;
    }
    return _0x8d86b2;
  }
  function _0x3e2d72(_0x3a135a, _0xe8bb61) {
    if (!_0x2b214d(_0x3a135a)) {
      return;
    }
    var _0x48e08d = [];
    var _0x38b1ff = "";
    var _0x41ea66 = "";
    var _0x16ce1d = "";
    var _0x2b4ebe = "";
    var _0x35c702 = "";
    var _0x974670 = "";
    var _0x45fd1f = "";
    _0x48e08d = _0x1b358f(_0x3a135a);
    _0x38b1ff = _0x48e08d[1];
    _0x41ea66 = _0x48e08d[2];
    _0x16ce1d = _0x48e08d[3];
    _0x35c702 = _0x48e08d[4];
    _0x974670 = _0x48e08d[5];
    if (!_0x38b1ff) {
      return;
    }
    if (_0xe8bb61) {
      if (_0x38b1ff.toLowerCase() != "https") {
        return;
      }
    } else if (_0x38b1ff.toLowerCase() != "http") {
      return;
    }
    if (!_0x41ea66) {
      return;
    }
    if (/:(\d+)$/.test(_0x41ea66)) {
      _0x2b4ebe = _0x41ea66.match(/:(\d+)$/)[0];
      _0x41ea66 = _0x41ea66.replace(/:\d+$/, "");
    }
    _0x45fd1f += _0x38b1ff + ":";
    _0x45fd1f += "//" + _0x41ea66;
    if (_0x2b4ebe) {
      _0x45fd1f += _0x2b4ebe;
    }
    _0x45fd1f += _0x16ce1d;
    if (_0x35c702 && _0x35c702.length) {
      _0x45fd1f += "?" + _0x35c702;
    }
    if (_0x974670 && _0x974670.length) {
      _0x45fd1f += "#" + _0x974670;
    }
    return _0x45fd1f;
  }
  function _0x655b12(_0x40ced6) {
    return _0x3e2d72(_0x40ced6, true);
  }
  function _0xdde4c4(_0x1d0af3) {
    return _0x3e2d72(_0x1d0af3) || _0x655b12(_0x1d0af3);
  }
})(module);