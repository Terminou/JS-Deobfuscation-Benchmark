function _0x1552() {
  return [
    '2653230MjwKDi',
    '278520HlvIkC',
    '847920HFZZnA',
    '195720HKFMil',
    '18SufOvT',
    '439698YEVLwF',
    '11077110lHVJQC',
    'test',
    '63eQdfyb',
    'match',
    '16311DhCQJR',
    'string'
  ];
}
module.exports = isUrl;
function _0x38c3(_0x327715, _0x1bda5a) {
  _0x327715 = _0x327715 - 421;
  var _0x15521d = [
    '2653230MjwKDi',
    '278520HlvIkC',
    '847920HFZZnA',
    '195720HKFMil',
    '18SufOvT',
    '439698YEVLwF',
    '11077110lHVJQC',
    'test',
    '63eQdfyb',
    'match',
    '16311DhCQJR',
    'string'
  ];
  var _0x38c39b = _0x15521d[_0x327715];
  return _0x15521d[_0x327715];
}
var protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
var localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
var nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;
function isUrl(_0x5abea0) {
  if (typeof _0x5abea0 !== 'string')
    return false;
  var _0x481a58 = _0x5abea0.match(/^(?:\w+:)?\/\/(\S+)$/);
  if (!_0x481a58)
    return false;
  var _0x38e791 = _0x481a58[1];
  if (!_0x481a58[1])
    return false;
  if (/^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/.test(_0x481a58[1]) || /^[^\s\.]+\.\S{2,}$/.test(_0x481a58[1]))
    return true;
  return false;
}