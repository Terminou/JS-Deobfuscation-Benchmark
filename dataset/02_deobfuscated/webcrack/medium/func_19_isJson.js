'use strict';

function isPlainObject(_0x309116) {
  if (_0x309116 === null || typeof _0x309116 !== "object") {
    return false;
  }
  const _0x4b4745 = Object.getPrototypeOf(_0x309116);
  return _0x4b4745 === null || _0x4b4745 === Object.prototype;
}
function tryParseJSON(_0x2559ca) {
  try {
    JSON.parse(_0x2559ca);
    return true;
  } catch {
    return false;
  }
}
function isJSONImpl(_0x37d258, _0x3e6256) {
  if (_0x3e6256 && isPlainObject(_0x37d258)) {
    return true;
  }
  if (typeof _0x37d258 !== "string") {
    return false;
  }
  const _0x41bd5c = _0x37d258.trim();
  if (_0x41bd5c.length === 0) {
    return false;
  }
  const _0x14d786 = _0x41bd5c[0];
  if (_0x14d786 !== "{" && _0x14d786 !== "[") {
    return false;
  }
  return tryParseJSON(_0x41bd5c);
}
function strict(_0x318056) {
  if (isPlainObject(_0x318056)) {
    return true;
  }
  if (typeof _0x318056 !== "string") {
    return false;
  }
  return tryParseJSON(_0x318056);
}
const _0x285049 = {
  strict: strict
};
var isJSON = Object.assign(isJSONImpl, _0x285049);
var index_default = isJSON;
module.exports = index_default;