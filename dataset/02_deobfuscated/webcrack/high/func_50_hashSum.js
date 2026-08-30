'use strict';

function pad(_0x325b04, _0x50e1fa) {
  while (_0x325b04.length < _0x50e1fa) {
    _0x325b04 = "0" + _0x325b04;
  }
  return _0x325b04;
}
function fold(_0x46db4f, _0x3df4c2) {
  var _0x1faea4;
  var _0x525bf5;
  var _0x35a6e2;
  if (_0x3df4c2.length === 0) {
    return _0x46db4f;
  }
  _0x1faea4 = 0;
  _0x35a6e2 = _0x3df4c2.length;
  for (; _0x1faea4 < _0x35a6e2; _0x1faea4++) {
    _0x525bf5 = _0x3df4c2.charCodeAt(_0x1faea4);
    _0x46db4f = (_0x46db4f << 5) - _0x46db4f + _0x525bf5;
    _0x46db4f |= 0;
  }
  if (_0x46db4f < 0) {
    return _0x46db4f * -2;
  } else {
    return _0x46db4f;
  }
}
function foldObject(_0x55be51, _0x35c568, _0xca87a7) {
  return Object.keys(_0x35c568).sort().reduce(_0x1a354c, _0x55be51);
  function _0x1a354c(_0x350596, _0x59e0f1) {
    return foldValue(_0x350596, _0x35c568[_0x59e0f1], _0x59e0f1, _0xca87a7);
  }
}
function foldValue(_0x3254b8, _0x51166c, _0x4127c5, _0x5d44d9) {
  var _0x2c9033 = fold(fold(fold(_0x3254b8, _0x4127c5), toString(_0x51166c)), typeof _0x51166c);
  if (_0x51166c === null) {
    return fold(_0x2c9033, "null");
  }
  if (_0x51166c === undefined) {
    return fold(_0x2c9033, "undefined");
  }
  if (typeof _0x51166c === "object" || typeof _0x51166c === "function") {
    if (_0x5d44d9.indexOf(_0x51166c) !== -1) {
      return fold(_0x2c9033, "[Circular]" + _0x4127c5);
    }
    _0x5d44d9.push(_0x51166c);
    var _0x1f93dd = foldObject(_0x2c9033, _0x51166c, _0x5d44d9);
    if (!("valueOf" in _0x51166c) || typeof _0x51166c.valueOf !== "function") {
      return _0x1f93dd;
    }
    try {
      return fold(_0x1f93dd, String(_0x51166c.valueOf()));
    } catch (_0x545735) {
      return fold(_0x1f93dd, "[valueOf exception]" + (_0x545735.stack || _0x545735.message));
    }
  }
  return fold(_0x2c9033, _0x51166c.toString());
}
function toString(_0x2f3bf2) {
  return Object.prototype.toString.call(_0x2f3bf2);
}
function sum(_0x5547fd) {
  return pad(foldValue(0, _0x5547fd, "", []).toString(16), 8);
}
module.exports = sum;