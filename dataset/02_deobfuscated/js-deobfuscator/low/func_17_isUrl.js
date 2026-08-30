function _0x1552() {
  var _0x1f6b41 = ["63eQdfyb", "match", "16311DhCQJR", "string", "2653230MjwKDi", "278520HlvIkC", "847920HFZZnA", "195720HKFMil", "18SufOvT", "439698YEVLwF", "11077110lHVJQC", "test"];
  _0x1552 = function () {
    return _0x1f6b41;
  };
  return _0x1552();
}
(function (_0x1838a8, _0x12ed57) {
  var _0x10e1bd = _0x38c3, _0x42f091 = _0x1838a8();
  while (true) {
    try {
      var _0x57a633 = parseInt(_0x10e1bd(431)) / 1 * (parseInt(_0x10e1bd(425)) / 2) + -parseInt(_0x10e1bd(426)) / 3 + -parseInt(_0x10e1bd(423)) / 4 + -parseInt(_0x10e1bd(424)) / 5 + -parseInt(_0x10e1bd(421)) / 6 + parseInt(_0x10e1bd(429)) / 7 * (-parseInt(_0x10e1bd(422)) / 8) + parseInt(_0x10e1bd(427)) / 9;
      if (_0x57a633 === _0x12ed57) break; else _0x42f091.push(_0x42f091.shift());
    } catch (_0x222fe5) {
      _0x42f091.push(_0x42f091.shift());
    }
  }
}(_0x1552, 224359), module.exports = isUrl);
function _0x38c3(_0x327715, _0x1bda5a) {
  _0x327715 = _0x327715 - 421;
  var _0x15521d = _0x1552();
  var _0x38c39b = _0x15521d[_0x327715];
  return _0x38c39b;
}
var protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/, localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/, nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;
function isUrl(_0x5abea0) {
  var _0x5c8369 = _0x38c3;
  if (typeof _0x5abea0 !== _0x5c8369(432)) return false;
  var _0x481a58 = _0x5abea0[_0x5c8369(430)](protocolAndDomainRE);
  if (!_0x481a58) return false;
  var _0x38e791 = _0x481a58[1];
  if (!_0x38e791) return false;
  if (localhostDomainRE[_0x5c8369(428)](_0x38e791) || nonLocalhostDomainRE[_0x5c8369(428)](_0x38e791)) return true;
  return false;
}
