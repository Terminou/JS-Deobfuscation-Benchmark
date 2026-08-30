'use strict';

function isPlainObject(_0x2e4d8a) {
  if (_0x2e4d8a === null || typeof _0x2e4d8a !== "object") {
    return false;
  }
  const _0x1d9181 = Object.getPrototypeOf(_0x2e4d8a);
  return _0x1d9181 === null || _0x1d9181 === Object.prototype;
}
function tryParseJSON(_0x51fe8e) {
  try {
    JSON.parse(_0x51fe8e);
    return true;
  } catch {
    return false;
  }
}
function isJSONImpl(_0x9e15e9, _0x2bfb82) {
  if (_0x2bfb82 && isPlainObject(_0x9e15e9)) {
    return true;
  }
  if (typeof _0x9e15e9 !== "string") {
    return false;
  }
  const _0x487142 = _0x9e15e9.trim();
  if (_0x487142.length === 0) {
    return false;
  }
  const _0xa7a114 = _0x487142[0];
  if (_0xa7a114 !== "{" && _0xa7a114 !== "[") {
    return false;
  }
  return tryParseJSON(_0x487142);
}
function strict(_0x1025fb) {
  if (isPlainObject(_0x1025fb)) {
    return true;
  }
  if (typeof _0x1025fb !== "string") {
    return false;
  }
  return tryParseJSON(_0x1025fb);
}
const _0x40d9ab = {
  strict: strict
};
var isJSON = Object.assign(isJSONImpl, _0x40d9ab);
var index_default = isJSON;
module.exports = index_default;