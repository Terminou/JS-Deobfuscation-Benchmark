module.exports = groupBy;
function groupBy(_0x126d09, _0x49dc98) {
  if (!Array.isArray(_0x126d09)) {
    throw new Error("expected an array for first argument");
  }
  if (typeof _0x49dc98 !== "function") {
    throw new Error("expected a function for second argument");
  }
  var _0x27f608 = {};
  for (var _0x41b01c = 0; _0x41b01c < _0x126d09.length; _0x41b01c++) {
    var _0xf5a5d4 = _0x126d09[_0x41b01c];
    var _0x515cef = _0x49dc98(_0xf5a5d4);
    var _0x1a6cc5 = _0x27f608[_0x515cef];
    if (!Array.isArray(_0x1a6cc5)) {
      _0x27f608[_0x515cef] = [_0xf5a5d4];
    } else {
      _0x27f608[_0x515cef].push(_0xf5a5d4);
    }
  }
  return _0x27f608;
}
;