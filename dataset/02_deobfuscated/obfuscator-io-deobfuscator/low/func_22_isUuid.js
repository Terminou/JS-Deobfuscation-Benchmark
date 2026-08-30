'use strict';

(function (_0x2b5d7e, _0x4f7d6b) {
  var _0x32537b = _0x2b5d7e();
  while (true) {
    try {
      var _0x2023e0 = parseInt(_0x1895(0x1e0)) / 0x1 + parseInt(_0x1895(0x1e5)) / 0x2 + parseInt(_0x1895(0x1e4)) / 0x3 + parseInt(_0x1895(0x1dd)) / 0x4 * (-parseInt(_0x1895(0x1e1)) / 0x5) + parseInt(_0x1895(0x1db)) / 0x6 + parseInt(_0x1895(0x1e2)) / 0x7 + -parseInt(_0x1895(0x1df)) / 0x8 * (parseInt(_0x1895(0x1e3)) / 0x9);
      if (_0x2023e0 === _0x4f7d6b) {
        break;
      } else {
        _0x32537b.push(_0x32537b.shift());
      }
    } catch (_0x18398e) {
      _0x32537b.push(_0x32537b.shift());
    }
  }
})(_0x14d2, 0xcd872);
function _0x14d2() {
  var _0x4d448a = ['5538222MkQbIs', 'test', '4edmklg', 'exports', '8oIixOf', '85053eVoOOm', '7944165npmxXD', '8389864TKqkvR', '25431282WfSddj', '4470588zgjlTK', '3119070FbyMjQ'];
  _0x14d2 = function () {
    return _0x4d448a;
  };
  return _0x14d2();
}
var v1Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v2Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[2][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v3Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[3][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var v5Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var nilRegex = /^[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12}$/i;
var anyRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function v1(_0x241411) {
  return v1Regex[_0x1895(0x1dc)](_0x241411);
}
function v2(_0x2dbe9f) {
  return v2Regex[_0x1895(0x1dc)](_0x2dbe9f);
}
function v3(_0x133894) {
  return v3Regex.test(_0x133894);
}
function _0x1895(_0x2166a9, _0x38f997) {
  _0x2166a9 = _0x2166a9 - 0x1db;
  var _0x14d2cf = _0x14d2();
  var _0x18958f = _0x14d2cf[_0x2166a9];
  return _0x18958f;
}
function v4(_0x5d032b) {
  return v4Regex[_0x1895(0x1dc)](_0x5d032b);
}
function v5(_0x45ac36) {
  return v5Regex.test(_0x45ac36);
}
function nil(_0xf01a63) {
  return nilRegex[_0x1895(0x1dc)](_0xf01a63);
}
function anyNonNil(_0x452684) {
  return anyRegex[_0x1895(0x1dc)](_0x452684);
}
module[_0x1895(0x1de)] = {
  'v1': v1,
  'v2': v2,
  'v3': v3,
  'v4': v4,
  'v5': v5,
  'nil': nil,
  'anyNonNil': anyNonNil
};