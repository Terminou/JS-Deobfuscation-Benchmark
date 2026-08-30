'use strict';

function _0x947c(_0x4f7849, _0xdad7c5) {
  _0x4f7849 = _0x4f7849 - 0x1b7;
  const _0x1e4ee3 = _0x1e4e();
  let _0x947c8c = _0x1e4ee3[_0x4f7849];
  return _0x947c8c;
}
(function (_0x26a969, _0x711d1) {
  const _0x351f96 = _0x26a969();
  while (true) {
    try {
      const _0x4bfdba = -parseInt(_0x947c(0x1c0)) / 0x1 + parseInt(_0x947c(0x1b7)) / 0x2 * (parseInt(_0x947c(0x1b8)) / 0x3) + -parseInt(_0x947c(0x1c7)) / 0x4 + parseInt(_0x947c(0x1b9)) / 0x5 * (-parseInt(_0x947c(0x1c2)) / 0x6) + -parseInt(_0x947c(0x1c5)) / 0x7 + parseInt(_0x947c(0x1c6)) / 0x8 * (parseInt(_0x947c(0x1c4)) / 0x9) + -parseInt(_0x947c(0x1c1)) / 0xa * (-parseInt(_0x947c(0x1c8)) / 0xb);
      if (_0x4bfdba === _0x711d1) {
        break;
      } else {
        _0x351f96.push(_0x351f96.shift());
      }
    } catch (_0x310d6d) {
      _0x351f96.push(_0x351f96.shift());
    }
  }
})(_0x1e4e, 0xbe6fb);
function isPlainObject(_0x45053d) {
  if (_0x45053d === null || typeof _0x45053d !== 'object') {
    return false;
  }
  const _0xe73eec = Object[_0x947c(0x1bd)](_0x45053d);
  return _0xe73eec === null || _0xe73eec === Object[_0x947c(0x1be)];
}
function tryParseJSON(_0x2ece53) {
  try {
    JSON[_0x947c(0x1bc)](_0x2ece53);
    return true;
  } catch {
    return false;
  }
}
function isJSONImpl(_0x23630c, _0xf91ac) {
  if (_0xf91ac && isPlainObject(_0x23630c)) {
    return true;
  }
  if (typeof _0x23630c !== _0x947c(0x1c3)) {
    return false;
  }
  const _0x7127c8 = _0x23630c.trim();
  if (_0x7127c8[_0x947c(0x1ba)] === 0x0) {
    return false;
  }
  const _0x44530c = _0x7127c8[0x0];
  if (_0x44530c !== '{' && _0x44530c !== '[') {
    return false;
  }
  return tryParseJSON(_0x7127c8);
}
function strict(_0x5e82f8) {
  if (isPlainObject(_0x5e82f8)) {
    return true;
  }
  if (typeof _0x5e82f8 !== _0x947c(0x1c3)) {
    return false;
  }
  return tryParseJSON(_0x5e82f8);
}
function _0x1e4e() {
  const _0x1609a5 = ['length', 'exports', 'parse', 'getPrototypeOf', 'prototype', 'assign', '667848mrbvuw', '1308670UJJiag', '69192JmKdQD', 'string', '3809601gjxMeo', '10823799EXUFNx', '8vbCoGL', '1119028KHSwfA', '121NKcaqo', '26UAwNnK', '349581xZdYNY', '45USrrOf'];
  _0x1e4e = function () {
    return _0x1609a5;
  };
  return _0x1e4e();
}
var isJSON = Object[_0x947c(0x1bf)](isJSONImpl, {
  'strict': strict
});
module[_0x947c(0x1bb)] = isJSON;