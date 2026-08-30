'use strict';

var v1Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v2Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[2][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v3Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[3][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v5Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var nilRegex = /^[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12}$/i;
var anyRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function v1(_0x241411) {
  return v1Regex.test(_0x241411);
}
function v2(_0x2dbe9f) {
  return v2Regex.test(_0x2dbe9f);
}
function v3(_0x133894) {
  return v3Regex.test(_0x133894);
}
function v4(_0x5d032b) {
  return v4Regex.test(_0x5d032b);
}
function v5(_0x45ac36) {
  return v5Regex.test(_0x45ac36);
}
function nil(_0xf01a63) {
  return nilRegex.test(_0xf01a63);
}
function anyNonNil(_0x452684) {
  return anyRegex.test(_0x452684);
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