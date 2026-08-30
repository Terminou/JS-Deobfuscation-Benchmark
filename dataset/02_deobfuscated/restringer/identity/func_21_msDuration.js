var s = 1000;
var m = 60000;
var h = 3600000;
var d = 86400000;
var w = 604800000;
var y = 31557600000;
module.exports = function (_0x6aebf7, _0x14c7d4) {
  _0x14c7d4 = _0x14c7d4 || {};
  var _0x27b8ec = typeof _0x6aebf7;
  if (_0x27b8ec === 'string' && _0x6aebf7.length > 0) {
    return parse(_0x6aebf7);
  } else if (_0x27b8ec === 'number' && isFinite(_0x6aebf7)) {
    return _0x14c7d4.long ? fmtLong(_0x6aebf7) : fmtShort(_0x6aebf7);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(_0x6aebf7));
};
function parse(_0xa7aa27) {
  _0xa7aa27 = String(_0xa7aa27);
  if (_0xa7aa27.length > 100) {
    return;
  }
  var _0x11ddfb = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(_0xa7aa27);
  if (!_0x11ddfb) {
    return;
  }
  var _0x2d14b1 = parseFloat(_0x11ddfb[1]);
  var _0x35ee5c = (_0x11ddfb[2] || 'ms').toLowerCase();
  switch (_0x35ee5c) {
  case 'years':
  case 'year':
  case 'yrs':
  case 'yr':
  case 'y':
    return _0x2d14b1 * 31557600000;
  case 'weeks':
  case 'week':
  case 'w':
    return _0x2d14b1 * 604800000;
  case 'days':
  case 'day':
  case 'd':
    return _0x2d14b1 * 86400000;
  case 'hours':
  case 'hour':
  case 'hrs':
  case 'hr':
  case 'h':
    return _0x2d14b1 * 3600000;
  case 'minutes':
  case 'minute':
  case 'mins':
  case 'min':
  case 'm':
    return _0x2d14b1 * 60000;
  case 'seconds':
  case 'second':
  case 'secs':
  case 'sec':
  case 's':
    return _0x2d14b1 * 1000;
  case 'milliseconds':
  case 'millisecond':
  case 'msecs':
  case 'msec':
  case 'ms':
    return _0x2d14b1;
  default:
    return undefined;
  }
}
function fmtShort(_0x38b476) {
  var _0xa8c9f8 = Math.abs(_0x38b476);
  if (_0xa8c9f8 >= 86400000) {
    return Math.round(_0x38b476 / 86400000) + 'd';
  }
  if (_0xa8c9f8 >= 3600000) {
    return Math.round(_0x38b476 / 3600000) + 'h';
  }
  if (_0xa8c9f8 >= 60000) {
    return Math.round(_0x38b476 / 60000) + 'm';
  }
  if (_0xa8c9f8 >= 1000) {
    return Math.round(_0x38b476 / 1000) + 's';
  }
  return _0x38b476 + 'ms';
}
function fmtLong(_0x210825) {
  var _0x941699 = Math.abs(_0x210825);
  if (_0x941699 >= 86400000) {
    return plural(_0x210825, _0x941699, 86400000, 'day');
  }
  if (_0x941699 >= 3600000) {
    return plural(_0x210825, _0x941699, 3600000, 'hour');
  }
  if (_0x941699 >= 60000) {
    return plural(_0x210825, _0x941699, 60000, 'minute');
  }
  if (_0x941699 >= 1000) {
    return plural(_0x210825, _0x941699, 1000, 'second');
  }
  return _0x210825 + ' ms';
}
function plural(_0x44dc88, _0x11a53f, _0x4c5dc1, _0x156ad1) {
  var _0x149549 = _0x11a53f >= _0x4c5dc1 * 1.5;
  return Math.round(_0x44dc88 / _0x4c5dc1) + ' ' + _0x156ad1 + (_0x149549 ? 's' : '');
}