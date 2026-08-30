function _0x1552() {
  var _0x1f6b41 = ['63eQdfyb', 'match', '16311DhCQJR', 'string', '2653230MjwKDi', '278520HlvIkC', '847920HFZZnA', '195720HKFMil', '18SufOvT', '439698YEVLwF', '11077110lHVJQC', 'test'];
  _0x1552 = function () {
    return _0x1f6b41;
  };
  return _0x1552();
}
(function (_0x1838a8, _0x12ed57) {
  var _0x42f091 = _0x1838a8();
  while (true) {
    try {
      var _0x57a633 = parseInt(_0x38c3(0x1af)) / 0x1 * (parseInt(_0x38c3(0x1a9)) / 0x2) + -parseInt(_0x38c3(0x1aa)) / 0x3 + -parseInt(_0x38c3(0x1a7)) / 0x4 + -parseInt(_0x38c3(0x1a8)) / 0x5 + -parseInt(_0x38c3(0x1a5)) / 0x6 + parseInt(_0x38c3(0x1ad)) / 0x7 * (-parseInt(_0x38c3(0x1a6)) / 0x8) + parseInt(_0x38c3(0x1ab)) / 0x9;
      if (_0x57a633 === _0x12ed57) {
        break;
      } else {
        _0x42f091.push(_0x42f091.shift());
      }
    } catch (_0x222fe5) {
      _0x42f091.push(_0x42f091.shift());
    }
  }
})(_0x1552, 0x36c67);
module.exports = isUrl;
function _0x38c3(_0x327715, _0x1bda5a) {
  _0x327715 = _0x327715 - 0x1a5;
  var _0x15521d = _0x1552();
  var _0x38c39b = _0x15521d[_0x327715];
  return _0x38c39b;
}
var protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
var localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
var nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;
function isUrl(_0x5abea0) {
  if (typeof _0x5abea0 !== _0x38c3(0x1b0)) {
    return false;
  }
  var _0x481a58 = _0x5abea0[_0x38c3(0x1ae)](protocolAndDomainRE);
  if (!_0x481a58) {
    return false;
  }
  var _0x38e791 = _0x481a58[0x1];
  if (!_0x38e791) {
    return false;
  }
  if (localhostDomainRE[_0x38c3(0x1ac)](_0x38e791) || nonLocalhostDomainRE[_0x38c3(0x1ac)](_0x38e791)) {
    return true;
  }
  return false;
}