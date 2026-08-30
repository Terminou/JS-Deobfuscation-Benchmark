var s = 1000;
var m = 60000;
var h = 3600000;
var d = 86400000;
var w = 604800000;
var y = 31557600000;
module.exports = function (_0x941699, _0x44dc88) {
  _0x44dc88 = _0x44dc88 || {};
  var _0x11a53f = typeof _0x941699;
  if (_0x11a53f === 'string' && _0x941699.length > 0)
    return parse(_0x941699);
  else {
    if (_0x11a53f === 'number' && isFinite(_0x941699))
      return _0x44dc88.long ? fmtLong(_0x941699) : fmtShort(_0x941699);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(_0x941699));
};
function _0x27b8() {
  return [
    '668185Mluvgf',
    '1846032eQqIVZ',
    '7fAiWCL',
    'stringify',
    'second',
    '6WjDlkj',
    ' ms',
    'sec',
    '60130aRJaDg',
    'hours',
    'millisecond',
    'exec',
    '89218kfXAYm',
    'seconds',
    'minutes',
    'milliseconds',
    'val is not a non-empty string or a valid number. val=',
    'abs',
    'number',
    'exports',
    'days',
    'min',
    'year',
    'hour',
    '124408Bmzmdz',
    'round',
    'hrs',
    '175742QdAgQs',
    '63IQVYSL',
    'msecs',
    '985314rVswUA',
    'yrs',
    'string'
  ];
}
function parse(_0x4c5dc1) {
  _0x4c5dc1 = String(_0x4c5dc1);
  if (_0x4c5dc1.length > 100)
    return;
  var _0x156ad1 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(_0x4c5dc1);
  if (!_0x156ad1)
    return;
  var _0x149549 = parseFloat(_0x156ad1[1]);
  var _0x55bc5a = (_0x156ad1[2] || 'ms').toLowerCase();
  switch (_0x55bc5a) {
  case 'years':
  case 'year':
  case 'yrs':
  case 'yr':
  case 'y':
    return _0x149549 * 31557600000;
  case 'weeks':
  case 'week':
  case 'w':
    return _0x149549 * 604800000;
  case 'days':
  case 'day':
  case 'd':
    return _0x149549 * 86400000;
  case 'hours':
  case 'hour':
  case 'hrs':
  case 'hr':
  case 'h':
    return _0x149549 * 3600000;
  case 'minutes':
  case 'minute':
  case 'mins':
  case 'min':
  case 'm':
    return _0x149549 * 60000;
  case 'seconds':
  case 'second':
  case 'secs':
  case 'sec':
  case 's':
    return _0x149549 * 1000;
  case 'milliseconds':
  case 'millisecond':
  case 'msecs':
  case 'msec':
  case 'ms':
    return _0x149549;
  default:
    return undefined;
  }
}
function _0xa7aa(_0x6aebf7, _0x14c7d4) {
  _0x6aebf7 = _0x6aebf7 - 400;
  var _0x27b8ec = [
    '668185Mluvgf',
    '1846032eQqIVZ',
    '7fAiWCL',
    'stringify',
    'second',
    '6WjDlkj',
    ' ms',
    'sec',
    '60130aRJaDg',
    'hours',
    'millisecond',
    'exec',
    '89218kfXAYm',
    'seconds',
    'minutes',
    'milliseconds',
    'val is not a non-empty string or a valid number. val=',
    'abs',
    'number',
    'exports',
    'days',
    'min',
    'year',
    'hour',
    '124408Bmzmdz',
    'round',
    'hrs',
    '175742QdAgQs',
    '63IQVYSL',
    'msecs',
    '985314rVswUA',
    'yrs',
    'string'
  ];
  var _0xa7aa27 = _0x27b8ec[_0x6aebf7];
  return _0x27b8ec[_0x6aebf7];
}
function fmtShort(_0x10ac94) {
  var _0x179db4 = Math.abs(_0x10ac94);
  if (_0x179db4 >= 86400000)
    return Math.round(_0x10ac94 / 86400000) + 'd';
  if (_0x179db4 >= 3600000)
    return Math.round(_0x10ac94 / 3600000) + 'h';
  if (_0x179db4 >= 60000)
    return Math.round(_0x10ac94 / 60000) + 'm';
  if (_0x179db4 >= 1000)
    return Math.round(_0x10ac94 / 1000) + 's';
  return _0x10ac94 + 'ms';
}
function fmtLong(_0x50d3c5) {
  var _0x56c960 = Math.abs(_0x50d3c5);
  if (_0x56c960 >= 86400000)
    return plural(_0x50d3c5, _0x56c960, 86400000, 'day');
  if (_0x56c960 >= 3600000)
    return plural(_0x50d3c5, _0x56c960, 3600000, 'hour');
  if (_0x56c960 >= 60000)
    return plural(_0x50d3c5, _0x56c960, 60000, 'minute');
  if (_0x56c960 >= 1000)
    return plural(_0x50d3c5, _0x56c960, 1000, 'second');
  return _0x50d3c5 + ' ms';
}
function plural(_0x35bd53, _0x5c25ff, _0x31e8f3, _0x3ac8e4) {
  var _0x54d388 = _0x5c25ff >= _0x31e8f3 * 1.5;
  return Math.round(_0x35bd53 / _0x31e8f3) + ' ' + _0x3ac8e4 + (_0x54d388 ? 's' : '');
}