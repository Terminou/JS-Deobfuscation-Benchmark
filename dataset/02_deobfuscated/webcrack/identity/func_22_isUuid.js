'use strict';

var v1Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v2Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[2][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v3Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[3][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v5Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var nilRegex = /^[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12}$/i;
var anyRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function v1(_0x2166a9) {
  return v1Regex.test(_0x2166a9);
}
function v2(_0x38f997) {
  return v2Regex.test(_0x38f997);
}
function v3(_0x14d2cf) {
  return v3Regex.test(_0x14d2cf);
}
function v4(_0x18958f) {
  return v4Regex.test(_0x18958f);
}
function v5(_0x3cb591) {
  return v5Regex.test(_0x3cb591);
}
function nil(_0x30fa71) {
  return nilRegex.test(_0x30fa71);
}
function anyNonNil(_0x1931b3) {
  return anyRegex.test(_0x1931b3);
}
module.exports = {
  v1: v1,
  v2: v2,
  v3: v3,
  v4: v4,
  v5: v5,
  nil: nil,
  anyNonNil: anyNonNil
};