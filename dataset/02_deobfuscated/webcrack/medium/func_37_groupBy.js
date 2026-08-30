module.exports = groupBy;
function groupBy(_0x96b55a, _0x3d1ca6) {
  if (!Array.isArray(_0x96b55a)) {
    throw new Error("expected an array for first argument");
  }
  if (typeof _0x3d1ca6 !== "function") {
    throw new Error("expected a function for second argument");
  }
  var _0x4503e7 = {};
  for (var _0x47b2a5 = 0; _0x47b2a5 < _0x96b55a.length; _0x47b2a5++) {
    var _0x2ba470 = _0x96b55a[_0x47b2a5];
    var _0xa217b4 = _0x3d1ca6(_0x2ba470);
    var _0x320a5c = _0x4503e7[_0xa217b4];
    if (!Array.isArray(_0x320a5c)) {
      _0x4503e7[_0xa217b4] = [_0x2ba470];
    } else {
      _0x4503e7[_0xa217b4].push(_0x2ba470);
    }
  }
  return _0x4503e7;
}
;