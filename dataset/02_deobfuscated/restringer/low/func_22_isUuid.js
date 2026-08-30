'use strict';
function _0x14d2() {
  return [
    '5538222MkQbIs',
    'test',
    '4edmklg',
    'exports',
    '8oIixOf',
    '85053eVoOOm',
    '7944165npmxXD',
    '8389864TKqkvR',
    '25431282WfSddj',
    '4470588zgjlTK',
    '3119070FbyMjQ'
  ];
}
var v1Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v2Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[2][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v3Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[3][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v5Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var nilRegex = /^[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12}$/i;
var anyRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function v1(_0x241411) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(_0x241411);
}
function v2(_0x2dbe9f) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[2][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(_0x2dbe9f);
}
function v3(_0x133894) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[3][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(_0x133894);
}
function _0x1895(_0x2166a9, _0x38f997) {
  _0x2166a9 = _0x2166a9 - 475;
  var _0x14d2cf = [
    '5538222MkQbIs',
    'test',
    '4edmklg',
    'exports',
    '8oIixOf',
    '85053eVoOOm',
    '7944165npmxXD',
    '8389864TKqkvR',
    '25431282WfSddj',
    '4470588zgjlTK',
    '3119070FbyMjQ'
  ];
  var _0x18958f = _0x14d2cf[_0x2166a9];
  return _0x14d2cf[_0x2166a9];
}
function v4(_0x5d032b) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(_0x5d032b);
}
function v5(_0x45ac36) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(_0x45ac36);
}
function nil(_0xf01a63) {
  return /^[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12}$/i.test(_0xf01a63);
}
function anyNonNil(_0x452684) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(_0x452684);
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