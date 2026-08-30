(function (_0x348594) {
  'use strict';

  _0x348594.exports.is_uri = _0x22a419;
  _0x348594.exports.is_http_uri = _0x9469ca;
  _0x348594.exports.is_https_uri = _0x57c719;
  _0x348594.exports.is_web_uri = _0x5ab700;
  _0x348594.exports.isUri = _0x22a419;
  _0x348594.exports.isHttpUri = _0x9469ca;
  _0x348594.exports.isHttpsUri = _0x57c719;
  _0x348594.exports.isWebUri = _0x5ab700;
  var _0x5898bd = function (_0xac2e84) {
    var _0x3158c4 = _0xac2e84.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
    return _0x3158c4;
  };
  function _0x22a419(_0x111e14) {
    if (!_0x111e14) {
      return;
    }
    if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(_0x111e14)) {
      return;
    }
    if (/%[^0-9a-f]/i.test(_0x111e14)) {
      return;
    }
    if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(_0x111e14)) {
      return;
    }
    var _0x16463e = [];
    var _0x2edc82 = '';
    var _0x353b52 = '';
    var _0x2847e1 = '';
    var _0x4131b1 = '';
    var _0x48ab03 = '';
    var _0x20bb50 = '';
    _0x16463e = _0x5898bd(_0x111e14);
    _0x2edc82 = _0x16463e[0x1];
    _0x353b52 = _0x16463e[0x2];
    _0x2847e1 = _0x16463e[0x3];
    _0x4131b1 = _0x16463e[0x4];
    _0x48ab03 = _0x16463e[0x5];
    if (!(_0x2edc82 && _0x2edc82.length && _0x2847e1.length >= 0x0)) {
      return;
    }
    if (_0x353b52 && _0x353b52.length) {
      if (!(_0x2847e1.length === 0x0 || /^\//.test(_0x2847e1))) {
        return;
      }
    } else {
      if (/^\/\//.test(_0x2847e1)) {
        return;
      }
    }
    if (!/^[a-z][a-z0-9\+\-\.]*$/.test(_0x2edc82.toLowerCase())) {
      return;
    }
    _0x20bb50 += _0x2edc82 + ':';
    if (_0x353b52 && _0x353b52.length) {
      _0x20bb50 += '//' + _0x353b52;
    }
    _0x20bb50 += _0x2847e1;
    if (_0x4131b1 && _0x4131b1.length) {
      _0x20bb50 += '?' + _0x4131b1;
    }
    if (_0x48ab03 && _0x48ab03.length) {
      _0x20bb50 += '#' + _0x48ab03;
    }
    return _0x20bb50;
  }
  function _0x9469ca(_0x1d8306, _0x44bd16) {
    if (!_0x22a419(_0x1d8306)) {
      return;
    }
    var _0x396d75 = [];
    var _0x5371d7 = '';
    var _0x123a0e = '';
    var _0x419ba5 = '';
    var _0x1bf371 = '';
    var _0x37922a = '';
    var _0x2a1d7b = '';
    var _0x14f179 = '';
    _0x396d75 = _0x5898bd(_0x1d8306);
    _0x5371d7 = _0x396d75[0x1];
    _0x123a0e = _0x396d75[0x2];
    _0x419ba5 = _0x396d75[0x3];
    _0x37922a = _0x396d75[0x4];
    _0x2a1d7b = _0x396d75[0x5];
    if (!_0x5371d7) {
      return;
    }
    if (_0x44bd16) {
      if (_0x5371d7.toLowerCase() != 'https') {
        return;
      }
    } else {
      if (_0x5371d7.toLowerCase() != 'http') {
        return;
      }
    }
    if (!_0x123a0e) {
      return;
    }
    if (/:(\d+)$/.test(_0x123a0e)) {
      _0x1bf371 = _0x123a0e.match(/:(\d+)$/)[0x0];
      _0x123a0e = _0x123a0e.replace(/:\d+$/, '');
    }
    _0x14f179 += _0x5371d7 + ':';
    _0x14f179 += '//' + _0x123a0e;
    if (_0x1bf371) {
      _0x14f179 += _0x1bf371;
    }
    _0x14f179 += _0x419ba5;
    if (_0x37922a && _0x37922a.length) {
      _0x14f179 += '?' + _0x37922a;
    }
    if (_0x2a1d7b && _0x2a1d7b.length) {
      _0x14f179 += '#' + _0x2a1d7b;
    }
    return _0x14f179;
  }
  function _0x57c719(_0x5bff0c) {
    return _0x9469ca(_0x5bff0c, true);
  }
  function _0x5ab700(_0x5352de) {
    return _0x9469ca(_0x5352de) || _0x9469ca(_0x5352de, true);
  }
})(module);