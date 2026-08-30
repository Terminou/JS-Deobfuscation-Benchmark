'use strict';
function _0x947c(_0x4f7849, _0xdad7c5) {
  _0x4f7849 = _0x4f7849 - 439;
  const _0x1e4ee3 = [
    '26UAwNnK',
    '349581xZdYNY',
    '45USrrOf',
    'length',
    'exports',
    'parse',
    'getPrototypeOf',
    'prototype',
    'assign',
    '667848mrbvuw',
    '1308670UJJiag',
    '69192JmKdQD',
    'string',
    '3809601gjxMeo',
    '10823799EXUFNx',
    '8vbCoGL',
    '1119028KHSwfA',
    '121NKcaqo'
  ];
  let _0x947c8c = _0x1e4ee3[_0x4f7849];
  return _0x1e4ee3[_0x4f7849];
}
function isPlainObject(_0x45053d) {
  if (_0x45053d === null || typeof _0x45053d !== 'object')
    return false;
  const _0xe73eec = Object.getPrototypeOf(_0x45053d);
  return _0xe73eec === null || _0xe73eec === Object.prototype;
}
function tryParseJSON(_0x2ece53) {
  try {
    JSON.parse(_0x2ece53);
    return true;
  } catch {
    return false;
  }
}
function isJSONImpl(_0x23630c, _0xf91ac) {
  if (_0xf91ac && isPlainObject(_0x23630c))
    return true;
  if (typeof _0x23630c !== 'string')
    return false;
  const _0x7127c8 = _0x23630c.trim();
  if (_0x7127c8.length === 0)
    return false;
  const _0x44530c = _0x7127c8[0];
  if (_0x7127c8[0] !== '{' && _0x7127c8[0] !== '[')
    return false;
  return tryParseJSON(_0x7127c8);
}
function strict(_0x5e82f8) {
  if (isPlainObject(_0x5e82f8))
    return true;
  if (typeof _0x5e82f8 !== 'string')
    return false;
  return tryParseJSON(_0x5e82f8);
}
function _0x1e4e() {
  return [
    '26UAwNnK',
    '349581xZdYNY',
    '45USrrOf',
    'length',
    'exports',
    'parse',
    'getPrototypeOf',
    'prototype',
    'assign',
    '667848mrbvuw',
    '1308670UJJiag',
    '69192JmKdQD',
    'string',
    '3809601gjxMeo',
    '10823799EXUFNx',
    '8vbCoGL',
    '1119028KHSwfA',
    '121NKcaqo'
  ];
}
var isJSON = Object.assign(isJSONImpl, { strict: strict });
module.exports = isJSON;