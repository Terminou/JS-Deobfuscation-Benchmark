var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
module.exports = function (_0x5075b6, _0x4b73ba) {
  _0x4b73ba = _0x4b73ba || {};
  var _0x18995a = typeof _0x5075b6;
  if (_0x18995a === "string" && _0x5075b6.length > 0) {
    return parse(_0x5075b6);
  } else if (_0x18995a === "number" && isFinite(_0x5075b6)) {
    if (_0x4b73ba.long) {
      return fmtLong(_0x5075b6);
    } else {
      return fmtShort(_0x5075b6);
    }
  }
  throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(_0x5075b6));
};
function parse(_0x1c741b) {
  _0x1c741b = String(_0x1c741b);
  if (_0x1c741b.length > 100) {
    return;
  }
  var _0x1c91f1 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(_0x1c741b);
  if (!_0x1c91f1) {
    return;
  }
  var _0x3396ca = parseFloat(_0x1c91f1[1]);
  var _0x556b42 = (_0x1c91f1[2] || "ms").toLowerCase();
  switch (_0x556b42) {
    case "years":
    case "year":
    case "yrs":
    case "yr":
    case "y":
      return _0x3396ca * y;
    case "weeks":
    case "week":
    case "w":
      return _0x3396ca * w;
    case "days":
    case "day":
    case "d":
      return _0x3396ca * d;
    case "hours":
    case "hour":
    case "hrs":
    case "hr":
    case "h":
      return _0x3396ca * h;
    case "minutes":
    case "minute":
    case "mins":
    case "min":
    case "m":
      return _0x3396ca * m;
    case "seconds":
    case "second":
    case "secs":
    case "sec":
    case "s":
      return _0x3396ca * s;
    case "milliseconds":
    case "millisecond":
    case "msecs":
    case "msec":
    case "ms":
      return _0x3396ca;
    default:
      return undefined;
  }
}
function fmtShort(_0x4de3a0) {
  var _0x444a61 = Math.abs(_0x4de3a0);
  if (_0x444a61 >= d) {
    return Math.round(_0x4de3a0 / d) + "d";
  }
  if (_0x444a61 >= h) {
    return Math.round(_0x4de3a0 / h) + "h";
  }
  if (_0x444a61 >= m) {
    return Math.round(_0x4de3a0 / m) + "m";
  }
  if (_0x444a61 >= s) {
    return Math.round(_0x4de3a0 / s) + "s";
  }
  return _0x4de3a0 + "ms";
}
function fmtLong(_0x4a6b3) {
  var _0x39af8c = Math.abs(_0x4a6b3);
  if (_0x39af8c >= d) {
    return plural(_0x4a6b3, _0x39af8c, d, "day");
  }
  if (_0x39af8c >= h) {
    return plural(_0x4a6b3, _0x39af8c, h, "hour");
  }
  if (_0x39af8c >= m) {
    return plural(_0x4a6b3, _0x39af8c, m, "minute");
  }
  if (_0x39af8c >= s) {
    return plural(_0x4a6b3, _0x39af8c, s, "second");
  }
  return _0x4a6b3 + " ms";
}
function plural(_0x2c48fc, _0x5e59de, _0x383c2c, _0x1153e1) {
  var _0x367045 = _0x5e59de >= _0x383c2c * 1.5;
  return Math.round(_0x2c48fc / _0x383c2c) + " " + _0x1153e1 + (_0x367045 ? "s" : "");
}