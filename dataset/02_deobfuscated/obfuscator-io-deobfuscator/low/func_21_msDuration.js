(function (_0x39677c, _0x52833e) {
  var _0x2600c2 = _0x39677c();
  while (true) {
    try {
      var _0x49651b = -parseInt(_0xa7aa(0x1ab)) / 0x1 + -parseInt(_0xa7aa(0x19c)) / 0x2 + parseInt(_0xa7aa(0x195)) / 0x3 * (parseInt(_0xa7aa(0x1a8)) / 0x4) + -parseInt(_0xa7aa(0x190)) / 0x5 + parseInt(_0xa7aa(0x1ae)) / 0x6 * (parseInt(_0xa7aa(0x192)) / 0x7) + parseInt(_0xa7aa(0x191)) / 0x8 + -parseInt(_0xa7aa(0x1ac)) / 0x9 * (-parseInt(_0xa7aa(0x198)) / 0xa);
      if (_0x49651b === _0x52833e) {
        break;
      } else {
        _0x2600c2.push(_0x2600c2.shift());
      }
    } catch (_0xa8f34) {
      _0x2600c2.push(_0x2600c2.shift());
    }
  }
})(_0x27b8, 0x23780);
module[_0xa7aa(0x1a3)] = function (_0x941699, _0x44dc88) {
  _0x44dc88 = _0x44dc88 || {};
  var _0x11a53f = typeof _0x941699;
  if (_0x11a53f === _0xa7aa(0x1b0) && _0x941699.length > 0x0) {
    return parse(_0x941699);
  } else {
    if (_0x11a53f === _0xa7aa(0x1a2) && isFinite(_0x941699)) {
      return _0x44dc88.long ? fmtLong(_0x941699) : fmtShort(_0x941699);
    }
  }
  throw new Error(_0xa7aa(0x1a0) + JSON[_0xa7aa(0x193)](_0x941699));
};
function _0x27b8() {
  var _0x5b3484 = ['63IQVYSL', 'msecs', '985314rVswUA', 'yrs', 'string', '668185Mluvgf', '1846032eQqIVZ', '7fAiWCL', 'stringify', 'second', '6WjDlkj', " ms", 'sec', '60130aRJaDg', 'hours', 'millisecond', 'exec', '89218kfXAYm', 'seconds', 'minutes', 'milliseconds', "val is not a non-empty string or a valid number. val=", 'abs', 'number', 'exports', 'days', 'min', 'year', 'hour', '124408Bmzmdz', 'round', 'hrs', '175742QdAgQs'];
  _0x27b8 = function () {
    return _0x5b3484;
  };
  return _0x27b8();
}
function parse(_0x4c5dc1) {
  _0x4c5dc1 = String(_0x4c5dc1);
  if (_0x4c5dc1.length > 0x64) {
    return;
  }
  var _0x156ad1 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i[_0xa7aa(0x19b)](_0x4c5dc1);
  if (!_0x156ad1) {
    return;
  }
  var _0x149549 = parseFloat(_0x156ad1[0x1]);
  var _0x55bc5a = (_0x156ad1[0x2] || 'ms').toLowerCase();
  switch (_0x55bc5a) {
    case 'years':
    case _0xa7aa(0x1a6):
    case _0xa7aa(0x1af):
    case 'yr':
    case 'y':
      return _0x149549 * 31557600000;
    case 'weeks':
    case 'week':
    case 'w':
      return _0x149549 * 604800000;
    case _0xa7aa(0x1a4):
    case 'day':
    case 'd':
      return _0x149549 * 86400000;
    case _0xa7aa(0x199):
    case _0xa7aa(0x1a7):
    case _0xa7aa(0x1aa):
    case 'hr':
    case 'h':
      return _0x149549 * 3600000;
    case _0xa7aa(0x19e):
    case 'minute':
    case 'mins':
    case _0xa7aa(0x1a5):
    case 'm':
      return _0x149549 * 60000;
    case _0xa7aa(0x19d):
    case _0xa7aa(0x194):
    case 'secs':
    case _0xa7aa(0x197):
    case 's':
      return _0x149549 * 0x3e8;
    case _0xa7aa(0x19f):
    case _0xa7aa(0x19a):
    case _0xa7aa(0x1ad):
    case 'msec':
    case 'ms':
      return _0x149549;
    default:
      return undefined;
  }
}
function _0xa7aa(_0x6aebf7, _0x14c7d4) {
  _0x6aebf7 = _0x6aebf7 - 0x190;
  var _0x27b8ec = _0x27b8();
  var _0xa7aa27 = _0x27b8ec[_0x6aebf7];
  return _0xa7aa27;
}
function fmtShort(_0x10ac94) {
  var _0x179db4 = Math[_0xa7aa(0x1a1)](_0x10ac94);
  if (_0x179db4 >= 86400000) {
    return Math.round(_0x10ac94 / 86400000) + 'd';
  }
  if (_0x179db4 >= 3600000) {
    return Math[_0xa7aa(0x1a9)](_0x10ac94 / 3600000) + 'h';
  }
  if (_0x179db4 >= 60000) {
    return Math[_0xa7aa(0x1a9)](_0x10ac94 / 60000) + 'm';
  }
  if (_0x179db4 >= 0x3e8) {
    return Math.round(_0x10ac94 / 0x3e8) + 's';
  }
  return _0x10ac94 + 'ms';
}
function fmtLong(_0x50d3c5) {
  var _0x56c960 = Math[_0xa7aa(0x1a1)](_0x50d3c5);
  if (_0x56c960 >= 86400000) {
    return plural(_0x50d3c5, _0x56c960, 86400000, 'day');
  }
  if (_0x56c960 >= 3600000) {
    return plural(_0x50d3c5, _0x56c960, 3600000, _0xa7aa(0x1a7));
  }
  if (_0x56c960 >= 60000) {
    return plural(_0x50d3c5, _0x56c960, 60000, 'minute');
  }
  if (_0x56c960 >= 0x3e8) {
    return plural(_0x50d3c5, _0x56c960, 0x3e8, _0xa7aa(0x194));
  }
  return _0x50d3c5 + _0xa7aa(0x196);
}
function plural(_0x35bd53, _0x5c25ff, _0x31e8f3, _0x3ac8e4) {
  var _0x54d388 = _0x5c25ff >= _0x31e8f3 * 1.5;
  return Math.round(_0x35bd53 / _0x31e8f3) + " " + _0x3ac8e4 + (_0x54d388 ? 's' : '');
}