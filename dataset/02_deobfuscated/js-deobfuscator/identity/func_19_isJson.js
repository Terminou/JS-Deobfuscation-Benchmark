"use strict";
function isPlainObject(_0x4f7849) {
  if (_0x4f7849 === null || typeof _0x4f7849 !== "object") return false;
  const _0xdad7c5 = Object.getPrototypeOf(_0x4f7849);
  return _0xdad7c5 === null || _0xdad7c5 === Object.prototype;
}
function tryParseJSON(_0x1e4ee3) {
  try {
    JSON.parse(_0x1e4ee3);
    return true;
  } catch {
    return false;
  }
}
function isJSONImpl(_0x947c8c, _0x24bfcf) {
  if (_0x24bfcf && isPlainObject(_0x947c8c)) return true;
  if (typeof _0x947c8c !== "string") return false;
  const _0x4e2552 = _0x947c8c.trim();
  if (_0x4e2552.length === 0) return false;
  const _0x33374d = _0x4e2552[0];
  if (_0x33374d !== "{" && _0x33374d !== "[") return false;
  return tryParseJSON(_0x4e2552);
}
function strict(_0x1b33d1) {
  if (isPlainObject(_0x1b33d1)) return true;
  if (typeof _0x1b33d1 !== "string") return false;
  return tryParseJSON(_0x1b33d1);
}
var isJSON = Object.assign(isJSONImpl, {strict: strict});
var index_default = isJSON;
module.exports = index_default;
