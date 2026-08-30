'use strict';

function isPlainObject(_0x45053d) {
  if (_0x45053d === null || typeof _0x45053d !== "object") {
    return false;
  }
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
  if (_0xf91ac && isPlainObject(_0x23630c)) {
    return true;
  }
  if (typeof _0x23630c !== "string") {
    return false;
  }
  const _0x7127c8 = _0x23630c.trim();
  if (_0x7127c8.length === 0) {
    return false;
  }
  const _0x44530c = _0x7127c8[0];
  if (_0x44530c !== "{" && _0x44530c !== "[") {
    return false;
  }
  return tryParseJSON(_0x7127c8);
}
function strict(_0x5e82f8) {
  if (isPlainObject(_0x5e82f8)) {
    return true;
  }
  if (typeof _0x5e82f8 !== "string") {
    return false;
  }
  return tryParseJSON(_0x5e82f8);
}
var isJSON = Object.assign(isJSONImpl, {
  strict: strict
});
var index_default = isJSON;
module.exports = index_default;