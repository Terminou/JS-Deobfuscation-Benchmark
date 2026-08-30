const _0x5831d4 = _0x3d1b;
(function (_0x55c4c9, _0x5a819f) {
  const _0x36b469 = _0x3d1b, _0x439619 = _0x55c4c9();
  while (true) {
    try {
      const _0x1747e8 = -parseInt(_0x36b469(245)) / 1 + parseInt(_0x36b469(257)) / 2 + parseInt(_0x36b469(243)) / 3 + -parseInt(_0x36b469(254)) / 4 * (parseInt(_0x36b469(248)) / 5) + -parseInt(_0x36b469(261)) / 6 + -parseInt(_0x36b469(258)) / 7 + parseInt(_0x36b469(249)) / 8;
      if (_0x1747e8 === _0x5a819f) break; else _0x439619.push(_0x439619.shift());
    } catch (_0x1081fe) {
      _0x439619.push(_0x439619.shift());
    }
  }
}(_0x2da3, 724171), module[_0x5831d4(244)] = {compareTwoStrings: compareTwoStrings, findBestMatch: findBestMatch});
function compareTwoStrings(_0xfd18a9, _0x4da007) {
  const _0x21725b = _0x5831d4;
  _0xfd18a9 = _0xfd18a9[_0x21725b(252)](/\s+/g, ""), _0x4da007 = _0x4da007.replace(/\s+/g, "");
  if (_0xfd18a9 === _0x4da007) return 1;
  if (_0xfd18a9[_0x21725b(247)] < 2 || _0x4da007[_0x21725b(247)] < 2) return 0;
  let _0x5968c5 = new Map;
  for (let _0x2b5c66 = 0; _0x2b5c66 < _0xfd18a9[_0x21725b(247)] - 1; _0x2b5c66++) {
    const _0x4e8098 = _0xfd18a9.substring(_0x2b5c66, _0x2b5c66 + 2), _0x5cddbc = _0x5968c5[_0x21725b(255)](_0x4e8098) ? _0x5968c5.get(_0x4e8098) + 1 : 1;
    _0x5968c5.set(_0x4e8098, _0x5cddbc);
  }
  ;
  let _0x150253 = 0;
  for (let _0x4b286f = 0; _0x4b286f < _0x4da007[_0x21725b(247)] - 1; _0x4b286f++) {
    const _0x13f6ff = _0x4da007[_0x21725b(260)](_0x4b286f, _0x4b286f + 2), _0x2d43c9 = _0x5968c5[_0x21725b(255)](_0x13f6ff) ? _0x5968c5[_0x21725b(259)](_0x13f6ff) : 0;
    _0x2d43c9 > 0 && (_0x5968c5[_0x21725b(246)](_0x13f6ff, _0x2d43c9 - 1), _0x150253++);
  }
  return 2 * _0x150253 / (_0xfd18a9[_0x21725b(247)] + _0x4da007[_0x21725b(247)] - 2);
}
function _0x3d1b(_0x1299a4, _0x164f15) {
  _0x1299a4 = _0x1299a4 - 243;
  const _0x2da3c4 = _0x2da3();
  let _0x3d1b32 = _0x2da3c4[_0x1299a4];
  return _0x3d1b32;
}
function findBestMatch(_0x249438, _0x14cc02) {
  const _0x3494da = _0x5831d4;
  if (!areArgsValid(_0x249438, _0x14cc02)) throw new Error("Bad arguments: First argument should be a string, second should be an array of strings");
  const _0x4b4c1d = [];
  let _0x331a01 = 0;
  for (let _0x22556d = 0; _0x22556d < _0x14cc02[_0x3494da(247)]; _0x22556d++) {
    const _0x485f52 = _0x14cc02[_0x22556d], _0x47c2c9 = compareTwoStrings(_0x249438, _0x485f52);
    _0x4b4c1d[_0x3494da(253)]({target: _0x485f52, rating: _0x47c2c9}), _0x47c2c9 > _0x4b4c1d[_0x331a01][_0x3494da(256)] && (_0x331a01 = _0x22556d);
  }
  const _0x1ed807 = _0x4b4c1d[_0x331a01];
  return {ratings: _0x4b4c1d, bestMatch: _0x1ed807, bestMatchIndex: _0x331a01};
}
function _0x2da3() {
  const _0x4779d1 = ["2424576gbNOeX", "3129123fEQase", "exports", "1140821CrrbEy", "set", "length", "6670ZWKHVE", "14014976KzUYLG", "find", "string", "replace", "push", "2852ObEdjA", "has", "rating", "1429678PdIqwj", "2026654aJLOju", "get", "substring"];
  _0x2da3 = function () {
    return _0x4779d1;
  };
  return _0x2da3();
}
function areArgsValid(_0x20fead, _0xa45337) {
  const _0x14c975 = _0x5831d4;
  if (typeof _0x20fead !== _0x14c975(251)) return false;
  if (!Array.isArray(_0xa45337)) return false;
  if (!_0xa45337[_0x14c975(247)]) return false;
  if (_0xa45337[_0x14c975(250)](function (_0x221b3d) {
    const _0x30fd12 = _0x14c975;
    return typeof _0x221b3d !== _0x30fd12(251);
  })) return false;
  return true;
}
