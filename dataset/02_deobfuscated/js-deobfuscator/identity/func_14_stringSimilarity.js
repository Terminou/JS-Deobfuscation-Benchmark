module.exports = {compareTwoStrings: compareTwoStrings, findBestMatch: findBestMatch};
function compareTwoStrings(_0x1299a4, _0x164f15) {
  _0x1299a4 = _0x1299a4.replace(/\s+/g, "");
  _0x164f15 = _0x164f15.replace(/\s+/g, "");
  if (_0x1299a4 === _0x164f15) return 1;
  if (_0x1299a4.length < 2 || _0x164f15.length < 2) return 0;
  let _0x2da3c4 = new Map;
  for (let _0x5af41e = 0; _0x5af41e < _0x1299a4.length - 1; _0x5af41e++) {
    const _0x395a48 = _0x1299a4.substring(_0x5af41e, _0x5af41e + 2);
    const _0x1d68a8 = _0x2da3c4.has(_0x395a48) ? _0x2da3c4.get(_0x395a48) + 1 : 1;
    _0x2da3c4.set(_0x395a48, _0x1d68a8);
  }
  ;
  let _0x3d1b32 = 0;
  for (let _0x16a8ee = 0; _0x16a8ee < _0x164f15.length - 1; _0x16a8ee++) {
    const _0xdab495 = _0x164f15.substring(_0x16a8ee, _0x16a8ee + 2);
    const _0x594e54 = _0x2da3c4.has(_0xdab495) ? _0x2da3c4.get(_0xdab495) : 0;
    if (_0x594e54 > 0) {
      _0x2da3c4.set(_0xdab495, _0x594e54 - 1);
      _0x3d1b32++;
    }
  }
  return 2 * _0x3d1b32 / (_0x1299a4.length + _0x164f15.length - 2);
}
function findBestMatch(_0xfd18a9, _0x4da007) {
  if (!areArgsValid(_0xfd18a9, _0x4da007)) throw new Error("Bad arguments: First argument should be a string, second should be an array of strings");
  const _0x5968c5 = [];
  let _0x150253 = 0;
  for (let _0x4e8098 = 0; _0x4e8098 < _0x4da007.length; _0x4e8098++) {
    const _0x5cddbc = _0x4da007[_0x4e8098];
    const _0x4b286f = compareTwoStrings(_0xfd18a9, _0x5cddbc);
    _0x5968c5.push({target: _0x5cddbc, rating: _0x4b286f});
    if (_0x4b286f > _0x5968c5[_0x150253].rating) {
      _0x150253 = _0x4e8098;
    }
  }
  const _0x2b5c66 = _0x5968c5[_0x150253];
  return {ratings: _0x5968c5, bestMatch: _0x2b5c66, bestMatchIndex: _0x150253};
}
function areArgsValid(_0x13f6ff, _0x2d43c9) {
  if (typeof _0x13f6ff !== "string") return false;
  if (!Array.isArray(_0x2d43c9)) return false;
  if (!_0x2d43c9.length) return false;
  if (_0x2d43c9.find(function (_0x249438) {
    return typeof _0x249438 !== "string";
  })) return false;
  return true;
}
