'use strict';

function pad(_0x258cff, _0x27cb17) {
  while (_0x258cff.length < _0x27cb17) {
    _0x258cff = "0" + _0x258cff;
  }
  return _0x258cff;
}
function fold(_0x22ffbc, _0x428a98) {
  var _0x5111cc;
  var _0x15e7f9;
  var _0x52ab67;
  if (_0x428a98.length === 0) {
    return _0x22ffbc;
  }
  _0x5111cc = 0;
  _0x52ab67 = _0x428a98.length;
  for (; _0x5111cc < _0x52ab67; _0x5111cc++) {
    _0x15e7f9 = _0x428a98.charCodeAt(_0x5111cc);
    _0x22ffbc = (_0x22ffbc << 5) - _0x22ffbc + _0x15e7f9;
    _0x22ffbc |= 0;
  }
  if (_0x22ffbc < 0) {
    return _0x22ffbc * -2;
  } else {
    return _0x22ffbc;
  }
}
function foldObject(_0x1b374f, _0x18a883, _0x2c91b8) {
  return Object.keys(_0x18a883).sort().reduce(_0x4bfb60, _0x1b374f);
  function _0x4bfb60(_0x297bab, _0x379697) {
    return foldValue(_0x297bab, _0x18a883[_0x379697], _0x379697, _0x2c91b8);
  }
}
function foldValue(_0x2617fc, _0x380304, _0x448607, _0x14a1bf) {
  var _0x28a54a = fold(fold(fold(_0x2617fc, _0x448607), toString(_0x380304)), typeof _0x380304);
  if (_0x380304 === null) {
    return fold(_0x28a54a, "null");
  }
  if (_0x380304 === undefined) {
    return fold(_0x28a54a, "undefined");
  }
  if (typeof _0x380304 === "object" || typeof _0x380304 === "function") {
    if (_0x14a1bf.indexOf(_0x380304) !== -1) {
      return fold(_0x28a54a, "[Circular]" + _0x448607);
    }
    _0x14a1bf.push(_0x380304);
    var _0x5097f6 = foldObject(_0x28a54a, _0x380304, _0x14a1bf);
    if (!("valueOf" in _0x380304) || typeof _0x380304.valueOf !== "function") {
      return _0x5097f6;
    }
    try {
      return fold(_0x5097f6, String(_0x380304.valueOf()));
    } catch (_0x800dee) {
      return fold(_0x5097f6, "[valueOf exception]" + (_0x800dee.stack || _0x800dee.message));
    }
  }
  return fold(_0x28a54a, _0x380304.toString());
}
function toString(_0x2f7f71) {
  return Object.prototype.toString.call(_0x2f7f71);
}
function sum(_0x18ac88) {
  return pad(foldValue(0, _0x18ac88, "", []).toString(16), 8);
}
module.exports = sum;