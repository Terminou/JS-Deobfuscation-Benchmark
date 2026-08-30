module.exports = groupBy;
function groupBy(_0x2c5463, _0x50c15d) {
  if (!Array.isArray(_0x2c5463)) {
    throw new Error("expected an array for first argument");
  }
  if (typeof _0x50c15d !== "function") {
    throw new Error("expected a function for second argument");
  }
  var _0x7063f1 = {};
  for (var _0x5314fb = 0; _0x5314fb < _0x2c5463.length; _0x5314fb++) {
    var _0x4bd570 = _0x2c5463[_0x5314fb];
    var _0x169f93 = _0x50c15d(_0x4bd570);
    var _0x56493a = _0x7063f1[_0x169f93];
    if (!Array.isArray(_0x56493a)) {
      _0x7063f1[_0x169f93] = [_0x4bd570];
    } else {
      _0x7063f1[_0x169f93].push(_0x4bd570);
    }
  }
  return _0x7063f1;
}
;
