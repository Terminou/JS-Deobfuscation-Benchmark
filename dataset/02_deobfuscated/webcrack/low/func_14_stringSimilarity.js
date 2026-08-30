module.exports = {
  compareTwoStrings: compareTwoStrings,
  findBestMatch: findBestMatch
};
function compareTwoStrings(_0xfd18a9, _0x4da007) {
  _0xfd18a9 = _0xfd18a9.replace(/\s+/g, "");
  _0x4da007 = _0x4da007.replace(/\s+/g, "");
  if (_0xfd18a9 === _0x4da007) {
    return 1;
  }
  if (_0xfd18a9.length < 2 || _0x4da007.length < 2) {
    return 0;
  }
  let _0x5968c5 = new Map();
  for (let _0x2b5c66 = 0; _0x2b5c66 < _0xfd18a9.length - 1; _0x2b5c66++) {
    const _0x4e8098 = _0xfd18a9.substring(_0x2b5c66, _0x2b5c66 + 2);
    const _0x5cddbc = _0x5968c5.has(_0x4e8098) ? _0x5968c5.get(_0x4e8098) + 1 : 1;
    _0x5968c5.set(_0x4e8098, _0x5cddbc);
  }
  ;
  let _0x150253 = 0;
  for (let _0x4b286f = 0; _0x4b286f < _0x4da007.length - 1; _0x4b286f++) {
    const _0x13f6ff = _0x4da007.substring(_0x4b286f, _0x4b286f + 2);
    const _0x2d43c9 = _0x5968c5.has(_0x13f6ff) ? _0x5968c5.get(_0x13f6ff) : 0;
    if (_0x2d43c9 > 0) {
      _0x5968c5.set(_0x13f6ff, _0x2d43c9 - 1);
      _0x150253++;
    }
  }
  return _0x150253 * 2 / (_0xfd18a9.length + _0x4da007.length - 2);
}
function findBestMatch(_0x249438, _0x14cc02) {
  if (!areArgsValid(_0x249438, _0x14cc02)) {
    throw new Error("Bad arguments: First argument should be a string, second should be an array of strings");
  }
  const _0x4b4c1d = [];
  let _0x331a01 = 0;
  for (let _0x22556d = 0; _0x22556d < _0x14cc02.length; _0x22556d++) {
    const _0x485f52 = _0x14cc02[_0x22556d];
    const _0x47c2c9 = compareTwoStrings(_0x249438, _0x485f52);
    _0x4b4c1d.push({
      target: _0x485f52,
      rating: _0x47c2c9
    });
    if (_0x47c2c9 > _0x4b4c1d[_0x331a01].rating) {
      _0x331a01 = _0x22556d;
    }
  }
  const _0x1ed807 = _0x4b4c1d[_0x331a01];
  return {
    ratings: _0x4b4c1d,
    bestMatch: _0x1ed807,
    bestMatchIndex: _0x331a01
  };
}
function areArgsValid(_0x20fead, _0xa45337) {
  if (typeof _0x20fead !== "string") {
    return false;
  }
  if (!Array.isArray(_0xa45337)) {
    return false;
  }
  if (!_0xa45337.length) {
    return false;
  }
  if (_0xa45337.find(function (_0x221b3d) {
    return typeof _0x221b3d !== "string";
  })) {
    return false;
  }
  return true;
}