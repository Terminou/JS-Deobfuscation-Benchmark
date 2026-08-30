var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
module.exports = function (_0x547e11, _0x59647e) {
  _0x59647e = _0x59647e || {};
  var _0x3479a1 = typeof _0x547e11;
  if (_0x3479a1 === "string" && _0x547e11.length > 0) {
    return parse(_0x547e11);
  } else if (_0x3479a1 === "number" && isFinite(_0x547e11)) {
    if (_0x59647e.long) {
      return fmtLong(_0x547e11);
    } else {
      return fmtShort(_0x547e11);
    }
  }
  throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(_0x547e11));
};
function parse(_0x44bf3e) {
  _0x44bf3e = String(_0x44bf3e);
  if (_0x44bf3e.length > 100) {
    return;
  }
  var _0x4a7673 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(_0x44bf3e);
  if (!_0x4a7673) {
    return;
  }
  var _0x4e49b6 = parseFloat(_0x4a7673[1]);
  var _0x54b8b3 = (_0x4a7673[2] || "ms").toLowerCase();
  switch (_0x54b8b3) {
    case "years":
    case "year":
    case "yrs":
    case "yr":
    case "y":
      return _0x4e49b6 * y;
    case "weeks":
    case "week":
    case "w":
      return _0x4e49b6 * w;
    case "days":
    case "day":
    case "d":
      return _0x4e49b6 * d;
    case "hours":
    case "hour":
    case "hrs":
    case "hr":
    case "h":
      return _0x4e49b6 * h;
    case "minutes":
    case "minute":
    case "mins":
    case "min":
    case "m":
      return _0x4e49b6 * m;
    case "seconds":
    case "second":
    case "secs":
    case "sec":
    case "s":
      return _0x4e49b6 * s;
    case "milliseconds":
    case "millisecond":
    case "msecs":
    case "msec":
    case "ms":
      return _0x4e49b6;
    default:
      return undefined;
  }
}
function fmtShort(_0x329976) {
  var _0x443a91 = Math.abs(_0x329976);
  if (_0x443a91 >= d) {
    return Math.round(_0x329976 / d) + "d";
  }
  if (_0x443a91 >= h) {
    return Math.round(_0x329976 / h) + "h";
  }
  if (_0x443a91 >= m) {
    return Math.round(_0x329976 / m) + "m";
  }
  if (_0x443a91 >= s) {
    return Math.round(_0x329976 / s) + "s";
  }
  return _0x329976 + "ms";
}
function fmtLong(_0x1b41ac) {
  var _0x15864c = Math.abs(_0x1b41ac);
  if (_0x15864c >= d) {
    return plural(_0x1b41ac, _0x15864c, d, "day");
  }
  if (_0x15864c >= h) {
    return plural(_0x1b41ac, _0x15864c, h, "hour");
  }
  if (_0x15864c >= m) {
    return plural(_0x1b41ac, _0x15864c, m, "minute");
  }
  if (_0x15864c >= s) {
    return plural(_0x1b41ac, _0x15864c, s, "second");
  }
  return _0x1b41ac + " ms";
}
function plural(_0x2a307b, _0x391b8a, _0xa4e89, _0x2697f6) {
  var _0x571725 = _0x391b8a >= _0xa4e89 * 1.5;
  return Math.round(_0x2a307b / _0xa4e89) + " " + _0x2697f6 + (_0x571725 ? "s" : "");
}