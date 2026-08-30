var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
module.exports = function (_0x941699, _0x44dc88) {
  _0x44dc88 = _0x44dc88 || {};
  var _0x11a53f = typeof _0x941699;
  if (_0x11a53f === "string" && _0x941699.length > 0) {
    return parse(_0x941699);
  } else if (_0x11a53f === "number" && isFinite(_0x941699)) {
    if (_0x44dc88.long) {
      return fmtLong(_0x941699);
    } else {
      return fmtShort(_0x941699);
    }
  }
  throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(_0x941699));
};
function parse(_0x4c5dc1) {
  _0x4c5dc1 = String(_0x4c5dc1);
  if (_0x4c5dc1.length > 100) {
    return;
  }
  var _0x156ad1 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(_0x4c5dc1);
  if (!_0x156ad1) {
    return;
  }
  var _0x149549 = parseFloat(_0x156ad1[1]);
  var _0x55bc5a = (_0x156ad1[2] || "ms").toLowerCase();
  switch (_0x55bc5a) {
    case "years":
    case "year":
    case "yrs":
    case "yr":
    case "y":
      return _0x149549 * y;
    case "weeks":
    case "week":
    case "w":
      return _0x149549 * w;
    case "days":
    case "day":
    case "d":
      return _0x149549 * d;
    case "hours":
    case "hour":
    case "hrs":
    case "hr":
    case "h":
      return _0x149549 * h;
    case "minutes":
    case "minute":
    case "mins":
    case "min":
    case "m":
      return _0x149549 * m;
    case "seconds":
    case "second":
    case "secs":
    case "sec":
    case "s":
      return _0x149549 * s;
    case "milliseconds":
    case "millisecond":
    case "msecs":
    case "msec":
    case "ms":
      return _0x149549;
    default:
      return undefined;
  }
}
function fmtShort(_0x10ac94) {
  var _0x179db4 = Math.abs(_0x10ac94);
  if (_0x179db4 >= d) {
    return Math.round(_0x10ac94 / d) + "d";
  }
  if (_0x179db4 >= h) {
    return Math.round(_0x10ac94 / h) + "h";
  }
  if (_0x179db4 >= m) {
    return Math.round(_0x10ac94 / m) + "m";
  }
  if (_0x179db4 >= s) {
    return Math.round(_0x10ac94 / s) + "s";
  }
  return _0x10ac94 + "ms";
}
function fmtLong(_0x50d3c5) {
  var _0x56c960 = Math.abs(_0x50d3c5);
  if (_0x56c960 >= d) {
    return plural(_0x50d3c5, _0x56c960, d, "day");
  }
  if (_0x56c960 >= h) {
    return plural(_0x50d3c5, _0x56c960, h, "hour");
  }
  if (_0x56c960 >= m) {
    return plural(_0x50d3c5, _0x56c960, m, "minute");
  }
  if (_0x56c960 >= s) {
    return plural(_0x50d3c5, _0x56c960, s, "second");
  }
  return _0x50d3c5 + " ms";
}
function plural(_0x35bd53, _0x5c25ff, _0x31e8f3, _0x3ac8e4) {
  var _0x54d388 = _0x5c25ff >= _0x31e8f3 * 1.5;
  return Math.round(_0x35bd53 / _0x31e8f3) + " " + _0x3ac8e4 + (_0x54d388 ? "s" : "");
}