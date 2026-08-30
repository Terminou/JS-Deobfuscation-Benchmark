"use strict";
var _0x424693 = _0x1895;
(function (_0x2b5d7e, _0x4f7d6b) {
  var _0x321001 = _0x1895, _0x32537b = _0x2b5d7e();
  while (true) {
    try {
      var _0x2023e0 = parseInt(_0x321001(480)) / 1 + parseInt(_0x321001(485)) / 2 + parseInt(_0x321001(484)) / 3 + parseInt(_0x321001(477)) / 4 * (-parseInt(_0x321001(481)) / 5) + parseInt(_0x321001(475)) / 6 + parseInt(_0x321001(482)) / 7 + -parseInt(_0x321001(479)) / 8 * (parseInt(_0x321001(483)) / 9);
      if (_0x2023e0 === _0x4f7d6b) break; else _0x32537b.push(_0x32537b.shift());
    } catch (_0x18398e) {
      _0x32537b.push(_0x32537b.shift());
    }
  }
}(_0x14d2, 841842));
function _0x14d2() {
  var _0x4d448a = ["5538222MkQbIs", "test", "4edmklg", "exports", "8oIixOf", "85053eVoOOm", "7944165npmxXD", "8389864TKqkvR", "25431282WfSddj", "4470588zgjlTK", "3119070FbyMjQ"];
  _0x14d2 = function () {
    return _0x4d448a;
  };
  return _0x14d2();
}
var v1Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, v2Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[2][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, v3Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[3][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, v4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, v5Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, nilRegex = /^[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12}$/i, anyRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function v1(_0x241411) {
  var _0x1a655f = _0x1895;
  return v1Regex[_0x1a655f(476)](_0x241411);
}
function v2(_0x2dbe9f) {
  var _0x349596 = _0x1895;
  return v2Regex[_0x349596(476)](_0x2dbe9f);
}
function _0x1895(_0x2166a9, _0x38f997) {
  _0x2166a9 = _0x2166a9 - 475;
  var _0x14d2cf = _0x14d2();
  var _0x18958f = _0x14d2cf[_0x2166a9];
  return _0x18958f;
}
function v4(_0x5d032b) {
  var _0x28197d = _0x1895;
  return v4Regex[_0x28197d(476)](_0x5d032b);
}
function nil(_0xf01a63) {
  var _0x3c7afb = _0x1895;
  return nilRegex[_0x3c7afb(476)](_0xf01a63);
}
function anyNonNil(_0x452684) {
  var _0x4b22a1 = _0x1895;
  return anyRegex[_0x4b22a1(476)](_0x452684);
}
module[_0x424693(478)] = {v1: v1, v2: v2, v3: v3, v4: v4, v5: v5, nil: nil, anyNonNil: anyNonNil};
