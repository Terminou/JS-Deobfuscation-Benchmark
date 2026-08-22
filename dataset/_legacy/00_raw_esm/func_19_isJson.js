'use strict';

// src/index.ts
function isPlainObject(value) {
  if (value === null || typeof value !== "object") return false;
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
}
function tryParseJSON(value) {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}
function isJSONImpl(value, passObjects) {
  if (passObjects && isPlainObject(value)) return true;
  if (typeof value !== "string") return false;
  const trimmed = value.trim();
  if (trimmed.length === 0) return false;
  const first = trimmed[0];
  if (first !== "{" && first !== "[") return false;
  return tryParseJSON(trimmed);
}
function strict(value) {
  if (isPlainObject(value)) return true;
  if (typeof value !== "string") return false;
  return tryParseJSON(value);
}
var isJSON = Object.assign(isJSONImpl, { strict });
var index_default = isJSON;

module.exports = index_default;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map