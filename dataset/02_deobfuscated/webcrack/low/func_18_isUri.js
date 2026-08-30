(function (_0x2edc82) {
  'use strict';

  _0x2edc82.exports.is_uri = _0x2847e1;
  _0x2edc82.exports.is_http_uri = _0x4131b1;
  _0x2edc82.exports.is_https_uri = _0x48ab03;
  _0x2edc82.exports.is_web_uri = _0x20bb50;
  _0x2edc82.exports.isUri = _0x2847e1;
  _0x2edc82.exports.isHttpUri = _0x4131b1;
  _0x2edc82.exports.isHttpsUri = _0x48ab03;
  _0x2edc82.exports.isWebUri = _0x20bb50;
  function _0x353b52(_0x1d8306) {
    var _0x44bd16 = _0x1d8306.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
    return _0x44bd16;
  }
  function _0x2847e1(_0x396d75) {
    if (!_0x396d75) {
      return;
    }
    if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(_0x396d75)) {
      return;
    }
    if (/%[^0-9a-f]/i.test(_0x396d75)) {
      return;
    }
    if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(_0x396d75)) {
      return;
    }
    var _0x5371d7 = [];
    var _0x123a0e = "";
    var _0x419ba5 = "";
    var _0x1bf371 = "";
    var _0x37922a = "";
    var _0x2a1d7b = "";
    var _0x14f179 = "";
    _0x5371d7 = _0x353b52(_0x396d75);
    _0x123a0e = _0x5371d7[1];
    _0x419ba5 = _0x5371d7[2];
    _0x1bf371 = _0x5371d7[3];
    _0x37922a = _0x5371d7[4];
    _0x2a1d7b = _0x5371d7[5];
    if (!_0x123a0e || !_0x123a0e.length || !(_0x1bf371.length >= 0)) {
      return;
    }
    if (_0x419ba5 && _0x419ba5.length) {
      if (_0x1bf371.length !== 0 && !/^\//.test(_0x1bf371)) {
        return;
      }
    } else if (/^\/\//.test(_0x1bf371)) {
      return;
    }
    if (!/^[a-z][a-z0-9\+\-\.]*$/.test(_0x123a0e.toLowerCase())) {
      return;
    }
    _0x14f179 += _0x123a0e + ":";
    if (_0x419ba5 && _0x419ba5.length) {
      _0x14f179 += "//" + _0x419ba5;
    }
    _0x14f179 += _0x1bf371;
    if (_0x37922a && _0x37922a.length) {
      _0x14f179 += "?" + _0x37922a;
    }
    if (_0x2a1d7b && _0x2a1d7b.length) {
      _0x14f179 += "#" + _0x2a1d7b;
    }
    return _0x14f179;
  }
  function _0x4131b1(_0x5bff0c, _0x5352de) {
    if (!_0x2847e1(_0x5bff0c)) {
      return;
    }
    var _0x27961c = [];
    var _0x400ff7 = "";
    var _0x39242e = "";
    var _0x329c32 = "";
    var _0x20f5c8 = "";
    var _0x100e2b = "";
    var _0x443f14 = "";
    var _0x35baee = "";
    _0x27961c = _0x353b52(_0x5bff0c);
    _0x400ff7 = _0x27961c[1];
    _0x39242e = _0x27961c[2];
    _0x329c32 = _0x27961c[3];
    _0x100e2b = _0x27961c[4];
    _0x443f14 = _0x27961c[5];
    if (!_0x400ff7) {
      return;
    }
    if (_0x5352de) {
      if (_0x400ff7.toLowerCase() != "https") {
        return;
      }
    } else if (_0x400ff7.toLowerCase() != "http") {
      return;
    }
    if (!_0x39242e) {
      return;
    }
    if (/:(\d+)$/.test(_0x39242e)) {
      _0x20f5c8 = _0x39242e.match(/:(\d+)$/)[0];
      _0x39242e = _0x39242e.replace(/:\d+$/, "");
    }
    _0x35baee += _0x400ff7 + ":";
    _0x35baee += "//" + _0x39242e;
    if (_0x20f5c8) {
      _0x35baee += _0x20f5c8;
    }
    _0x35baee += _0x329c32;
    if (_0x100e2b && _0x100e2b.length) {
      _0x35baee += "?" + _0x100e2b;
    }
    if (_0x443f14 && _0x443f14.length) {
      _0x35baee += "#" + _0x443f14;
    }
    return _0x35baee;
  }
  function _0x48ab03(_0x3fc67c) {
    return _0x4131b1(_0x3fc67c, true);
  }
  function _0x20bb50(_0xf8460) {
    return _0x4131b1(_0xf8460) || _0x48ab03(_0xf8460);
  }
})(module);