"use strict";
var _0x550819 = _0x5543;
function _0x1baa() {
  var _0x14021e = ["27889790UogcyJ", "array-unique expects an array.", "isArray", "splice", "2xXCCBs", "63ixUpaz", "11clACGm", "11513313ORnwkh", "727384DCqhNF", "52436VDdhVA", "8671632BGRydV", "4268523HpzEKw", "exports", "145azbAif", "111544jyriTo", "length"];
  _0x1baa = function () {
    return _0x14021e;
  };
  return _0x1baa();
}
function _0x5543(_0x3dd188, _0x34a472) {
  _0x3dd188 = _0x3dd188 - 148;
  var _0x1baa17 = _0x1baa();
  var _0x554376 = _0x1baa17[_0x3dd188];
  return _0x554376;
}
(function (_0x40caf1, _0x2971b9) {
  var _0xf6e814 = _0x5543, _0x3932a9 = _0x40caf1();
  while (true) {
    try {
      var _0x3c8d3e = -parseInt(_0xf6e814(151)) / 1 + parseInt(_0xf6e814(163)) / 2 * (-parseInt(_0xf6e814(154)) / 3) + parseInt(_0xf6e814(152)) / 4 * (parseInt(_0xf6e814(156)) / 5) + -parseInt(_0xf6e814(153)) / 6 + parseInt(_0xf6e814(148)) / 7 * (-parseInt(_0xf6e814(157)) / 8) + parseInt(_0xf6e814(150)) / 9 + -parseInt(_0xf6e814(159)) / 10 * (-parseInt(_0xf6e814(149)) / 11);
      if (_0x3c8d3e === _0x2971b9) break; else _0x3932a9.push(_0x3932a9.shift());
    } catch (_0x58fdc0) {
      _0x3932a9.push(_0x3932a9.shift());
    }
  }
}(_0x1baa, 727413));
module[_0x550819(155)] = function unique(_0x3a6eb3) {
  var _0x3ecb00 = _0x550819;
  if (!Array[_0x3ecb00(161)](_0x3a6eb3)) throw new TypeError(_0x3ecb00(160));
  var _0x327ed1 = _0x3a6eb3[_0x3ecb00(158)], _0xb90a3f = -1;
  while (_0xb90a3f++ < _0x327ed1) {
    var _0x1506bb = _0xb90a3f + 1;
    for (; _0x1506bb < _0x3a6eb3.length; ++_0x1506bb) {
      _0x3a6eb3[_0xb90a3f] === _0x3a6eb3[_0x1506bb] && _0x3a6eb3[_0x3ecb00(162)](_0x1506bb--, 1);
    }
  }
  return _0x3a6eb3;
}, module.exports.immutable = function uniqueImmutable(_0x3faa37) {
  var _0xa6e9c3 = _0x550819;
  if (!Array[_0xa6e9c3(161)](_0x3faa37)) throw new TypeError("array-unique expects an array.");
  var _0x2d93fe = _0x3faa37[_0xa6e9c3(158)], _0xf377c0 = new Array(_0x2d93fe);
  for (var _0x5e899a = 0; _0x5e899a < _0x2d93fe; _0x5e899a++) {
    _0xf377c0[_0x5e899a] = _0x3faa37[_0x5e899a];
  }
  return module.exports(_0xf377c0);
};
