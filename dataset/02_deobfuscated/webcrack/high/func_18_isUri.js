(function (_0x1d0260) {
  'use strict';

  _0x1d0260.exports.is_uri = _0x3f1e61;
  _0x1d0260.exports.is_http_uri = _0x9c2f9c;
  _0x1d0260.exports.is_https_uri = _0x5735c5;
  _0x1d0260.exports.is_web_uri = _0x25ddd0;
  _0x1d0260.exports.isUri = _0x3f1e61;
  _0x1d0260.exports.isHttpUri = _0x9c2f9c;
  _0x1d0260.exports.isHttpsUri = _0x5735c5;
  _0x1d0260.exports.isWebUri = _0x25ddd0;
  function _0x5d3128(_0x4e946f) {
    var _0x767c12 = _0x4e946f.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/);
    return _0x767c12;
  }
  function _0x3f1e61(_0x5657fb) {
    if (!_0x5657fb) {
      return;
    }
    if (/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(_0x5657fb)) {
      return;
    }
    if (/%[^0-9a-f]/i.test(_0x5657fb)) {
      return;
    }
    if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(_0x5657fb)) {
      return;
    }
    var _0x256a9b = [];
    var _0x1cd067 = "";
    var _0x1b2a7b = "";
    var _0x17e347 = "";
    var _0x21c989 = "";
    var _0x431d74 = "";
    var _0x3a89ac = "";
    _0x256a9b = _0x5d3128(_0x5657fb);
    _0x1cd067 = _0x256a9b[1];
    _0x1b2a7b = _0x256a9b[2];
    _0x17e347 = _0x256a9b[3];
    _0x21c989 = _0x256a9b[4];
    _0x431d74 = _0x256a9b[5];
    if (!_0x1cd067 || !_0x1cd067.length || !(_0x17e347.length >= 0)) {
      return;
    }
    if (_0x1b2a7b && _0x1b2a7b.length) {
      if (_0x17e347.length !== 0 && !/^\//.test(_0x17e347)) {
        return;
      }
    } else if (/^\/\//.test(_0x17e347)) {
      return;
    }
    if (!/^[a-z][a-z0-9\+\-\.]*$/.test(_0x1cd067.toLowerCase())) {
      return;
    }
    _0x3a89ac += _0x1cd067 + ":";
    if (_0x1b2a7b && _0x1b2a7b.length) {
      _0x3a89ac += "//" + _0x1b2a7b;
    }
    _0x3a89ac += _0x17e347;
    if (_0x21c989 && _0x21c989.length) {
      _0x3a89ac += "?" + _0x21c989;
    }
    if (_0x431d74 && _0x431d74.length) {
      _0x3a89ac += "#" + _0x431d74;
    }
    return _0x3a89ac;
  }
  function _0x9c2f9c(_0x42ec62, _0x3fa33e) {
    if (!_0x3f1e61(_0x42ec62)) {
      return;
    }
    var _0x22e86e = [];
    var _0xcbbda5 = "";
    var _0x472ca7 = "";
    var _0x5f275c = "";
    var _0x115a9d = "";
    var _0x2f9443 = "";
    var _0x1ccf78 = "";
    var _0x184ac1 = "";
    _0x22e86e = _0x5d3128(_0x42ec62);
    _0xcbbda5 = _0x22e86e[1];
    _0x472ca7 = _0x22e86e[2];
    _0x5f275c = _0x22e86e[3];
    _0x2f9443 = _0x22e86e[4];
    _0x1ccf78 = _0x22e86e[5];
    if (!_0xcbbda5) {
      return;
    }
    if (_0x3fa33e) {
      if (_0xcbbda5.toLowerCase() != "https") {
        return;
      }
    } else if (_0xcbbda5.toLowerCase() != "http") {
      return;
    }
    if (!_0x472ca7) {
      return;
    }
    if (/:(\d+)$/.test(_0x472ca7)) {
      _0x115a9d = _0x472ca7.match(/:(\d+)$/)[0];
      _0x472ca7 = _0x472ca7.replace(/:\d+$/, "");
    }
    _0x184ac1 += _0xcbbda5 + ":";
    _0x184ac1 += "//" + _0x472ca7;
    if (_0x115a9d) {
      _0x184ac1 += _0x115a9d;
    }
    _0x184ac1 += _0x5f275c;
    if (_0x2f9443 && _0x2f9443.length) {
      _0x184ac1 += "?" + _0x2f9443;
    }
    if (_0x1ccf78 && _0x1ccf78.length) {
      _0x184ac1 += "#" + _0x1ccf78;
    }
    return _0x184ac1;
  }
  function _0x5735c5(_0x44cd18) {
    return _0x9c2f9c(_0x44cd18, true);
  }
  function _0x25ddd0(_0x3db4cb) {
    return _0x9c2f9c(_0x3db4cb) || _0x5735c5(_0x3db4cb);
  }
})(module);