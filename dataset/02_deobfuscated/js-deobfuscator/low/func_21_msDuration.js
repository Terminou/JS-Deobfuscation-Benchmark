var _0x208f49 = _0xa7aa;
(function (_0x39677c, _0x52833e) {
  var _0x41fdad = _0xa7aa, _0x2600c2 = _0x39677c();
  while (true) {
    try {
      var _0x49651b = -parseInt(_0x41fdad(427)) / 1 + -parseInt(_0x41fdad(412)) / 2 + parseInt(_0x41fdad(405)) / 3 * (parseInt(_0x41fdad(424)) / 4) + -parseInt(_0x41fdad(400)) / 5 + parseInt(_0x41fdad(430)) / 6 * (parseInt(_0x41fdad(402)) / 7) + parseInt(_0x41fdad(401)) / 8 + -parseInt(_0x41fdad(428)) / 9 * (-parseInt(_0x41fdad(408)) / 10);
      if (_0x49651b === _0x52833e) break; else _0x2600c2.push(_0x2600c2.shift());
    } catch (_0xa8f34) {
      _0x2600c2.push(_0x2600c2.shift());
    }
  }
}(_0x27b8, 145280));
var s = 1e3, m = s * 60, h = m * 60, d = h * 24, w = d * 7, y = d * 365.25;
module[_0x208f49(419)] = function (_0x941699, _0x44dc88) {
  var _0x1df5dd = _0x208f49;
  _0x44dc88 = _0x44dc88 || {};
  var _0x11a53f = typeof _0x941699;
  if (_0x11a53f === _0x1df5dd(432) && _0x941699.length > 0) return parse(_0x941699); else {
    if (_0x11a53f === _0x1df5dd(418) && isFinite(_0x941699)) return _0x44dc88.long ? fmtLong(_0x941699) : fmtShort(_0x941699);
  }
  throw new Error(_0x1df5dd(416) + JSON[_0x1df5dd(403)](_0x941699));
};
function _0x27b8() {
  var _0x5b3484 = ["63IQVYSL", "msecs", "985314rVswUA", "yrs", "string", "668185Mluvgf", "1846032eQqIVZ", "7fAiWCL", "stringify", "second", "6WjDlkj", " ms", "sec", "60130aRJaDg", "hours", "millisecond", "exec", "89218kfXAYm", "seconds", "minutes", "milliseconds", "val is not a non-empty string or a valid number. val=", "abs", "number", "exports", "days", "min", "year", "hour", "124408Bmzmdz", "round", "hrs", "175742QdAgQs"];
  _0x27b8 = function () {
    return _0x5b3484;
  };
  return _0x27b8();
}
function parse(_0x4c5dc1) {
  var _0x56647b = _0x208f49;
  _0x4c5dc1 = String(_0x4c5dc1);
  if (_0x4c5dc1.length > 100) return;
  var _0x156ad1 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i[_0x56647b(411)](_0x4c5dc1);
  if (!_0x156ad1) return;
  var _0x149549 = parseFloat(_0x156ad1[1]), _0x55bc5a = (_0x156ad1[2] || "ms").toLowerCase();
  switch (_0x55bc5a) {
    case "years":
    case _0x56647b(422):
    case _0x56647b(431):
    case "yr":
    case "y":
      return _0x149549 * y;
    case "weeks":
    case "week":
    case "w":
      return _0x149549 * w;
    case _0x56647b(420):
    case "day":
    case "d":
      return _0x149549 * d;
    case _0x56647b(409):
    case _0x56647b(423):
    case _0x56647b(426):
    case "hr":
    case "h":
      return _0x149549 * h;
    case _0x56647b(414):
    case "minute":
    case "mins":
    case _0x56647b(421):
    case "m":
      return _0x149549 * m;
    case _0x56647b(413):
    case _0x56647b(404):
    case "secs":
    case _0x56647b(407):
    case "s":
      return _0x149549 * s;
    case _0x56647b(415):
    case _0x56647b(410):
    case _0x56647b(429):
    case "msec":
    case "ms":
      return _0x149549;
    default:
      return undefined;
  }
}
function _0xa7aa(_0x6aebf7, _0x14c7d4) {
  _0x6aebf7 = _0x6aebf7 - 400;
  var _0x27b8ec = _0x27b8();
  var _0xa7aa27 = _0x27b8ec[_0x6aebf7];
  return _0xa7aa27;
}
function fmtShort(_0x10ac94) {
  var _0x2d29da = _0x208f49, _0x179db4 = Math[_0x2d29da(417)](_0x10ac94);
  if (_0x179db4 >= d) return Math.round(_0x10ac94 / d) + "d";
  if (_0x179db4 >= h) return Math[_0x2d29da(425)](_0x10ac94 / h) + "h";
  if (_0x179db4 >= m) return Math[_0x2d29da(425)](_0x10ac94 / m) + "m";
  if (_0x179db4 >= s) return Math.round(_0x10ac94 / s) + "s";
  return _0x10ac94 + "ms";
}
function fmtLong(_0x50d3c5) {
  var _0x422cda = _0x208f49, _0x56c960 = Math[_0x422cda(417)](_0x50d3c5);
  if (_0x56c960 >= d) return plural(_0x50d3c5, _0x56c960, d, "day");
  if (_0x56c960 >= h) return plural(_0x50d3c5, _0x56c960, h, _0x422cda(423));
  if (_0x56c960 >= m) return plural(_0x50d3c5, _0x56c960, m, "minute");
  if (_0x56c960 >= s) return plural(_0x50d3c5, _0x56c960, s, _0x422cda(404));
  return _0x50d3c5 + _0x422cda(406);
}
function plural(_0x35bd53, _0x5c25ff, _0x31e8f3, _0x3ac8e4) {
  var _0x54d388 = _0x5c25ff >= _0x31e8f3 * 1.5;
  return Math.round(_0x35bd53 / _0x31e8f3) + " " + _0x3ac8e4 + (_0x54d388 ? "s" : "");
}
