'use strict';

function pad(_0x4ee2b6, _0x546a8a) {
  while (_0x4ee2b6.length < _0x546a8a) {
    _0x4ee2b6 = "0" + _0x4ee2b6;
  }
  return _0x4ee2b6;
}
function fold(_0x1a46f4, _0x2c533a) {
  var _0x1d9994;
  var _0x962469;
  var _0x1672ee;
  if (_0x2c533a.length === 0) {
    return _0x1a46f4;
  }
  _0x1d9994 = 0;
  _0x1672ee = _0x2c533a.length;
  for (; _0x1d9994 < _0x1672ee; _0x1d9994++) {
    _0x962469 = _0x2c533a.charCodeAt(_0x1d9994);
    _0x1a46f4 = (_0x1a46f4 << 5) - _0x1a46f4 + _0x962469;
    _0x1a46f4 |= 0;
  }
  if (_0x1a46f4 < 0) {
    return _0x1a46f4 * -2;
  } else {
    return _0x1a46f4;
  }
}
function foldObject(_0x5561a9, _0x569271, _0x39abbd) {
  return Object.keys(_0x569271).sort().reduce(_0xde0821, _0x5561a9);
  function _0xde0821(_0x2532a1, _0x2f10d1) {
    return foldValue(_0x2532a1, _0x569271[_0x2f10d1], _0x2f10d1, _0x39abbd);
  }
}
function foldValue(_0x2dc146, _0x63f572, _0x38d283, _0x27fae9) {
  var _0x4ac41a = fold(fold(fold(_0x2dc146, _0x38d283), toString(_0x63f572)), typeof _0x63f572);
  if (_0x63f572 === null) {
    return fold(_0x4ac41a, "null");
  }
  if (_0x63f572 === undefined) {
    return fold(_0x4ac41a, "undefined");
  }
  if (typeof _0x63f572 === "object" || typeof _0x63f572 === "function") {
    if (_0x27fae9.indexOf(_0x63f572) !== -1) {
      return fold(_0x4ac41a, "[Circular]" + _0x38d283);
    }
    _0x27fae9.push(_0x63f572);
    var _0x421a04 = foldObject(_0x4ac41a, _0x63f572, _0x27fae9);
    if (!("valueOf" in _0x63f572) || typeof _0x63f572.valueOf !== "function") {
      return _0x421a04;
    }
    try {
      return fold(_0x421a04, String(_0x63f572.valueOf()));
    } catch (_0x196ad9) {
      return fold(_0x421a04, "[valueOf exception]" + (_0x196ad9.stack || _0x196ad9.message));
    }
  }
  return fold(_0x4ac41a, _0x63f572.toString());
}
function toString(_0x15b945) {
  return Object.prototype.toString.call(_0x15b945);
}
function sum(_0x5bb526) {
  return pad(foldValue(0, _0x5bb526, "", []).toString(16), 8);
}
module.exports = sum;