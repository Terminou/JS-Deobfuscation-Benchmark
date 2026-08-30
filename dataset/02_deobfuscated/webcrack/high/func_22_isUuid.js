'use strict';

var v1Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v2Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[2][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v3Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[3][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v5Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var nilRegex = /^[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12}$/i;
var anyRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function v1(_0x51a363) {
  return v1Regex.test(_0x51a363);
}
function v2(_0x15fbbe) {
  return v2Regex.test(_0x15fbbe);
}
function v3(_0x28c101) {
  return v3Regex.test(_0x28c101);
}
function v4(_0x509713) {
  return v4Regex.test(_0x509713);
}
function v5(_0x583ecf) {
  return v5Regex.test(_0x583ecf);
}
function nil(_0x4efbca) {
  return nilRegex.test(_0x4efbca);
}
function anyNonNil(_0x471fea) {
  return anyRegex.test(_0x471fea);
}
var _0x2d0093 = {
  v1: v1,
  v2: v2,
  v3: v3,
  v4: v4,
  v5: v5,
  nil: nil,
  anyNonNil: anyNonNil
};
module.exports = _0x2d0093;