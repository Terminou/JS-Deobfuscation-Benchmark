const _0x4280a0 = {
  compareTwoStrings: compareTwoStrings,
  findBestMatch: findBestMatch
};
module.exports = _0x4280a0;
function compareTwoStrings(_0x3c258a, _0x4f7e0c) {
  _0x3c258a = _0x3c258a.replace(/\s+/g, "");
  _0x4f7e0c = _0x4f7e0c.replace(/\s+/g, "");
  if (_0x3c258a === _0x4f7e0c) {
    return 1;
  }
  if (_0x3c258a.length < 2 || _0x4f7e0c.length < 2) {
    return 0;
  }
  let _0x1478c7 = new Map();
  for (let _0x56102f = 0; _0x56102f < _0x3c258a.length - 1; _0x56102f++) {
    const _0x3b524f = _0x3c258a.substring(_0x56102f, _0x56102f + 2);
    const _0x4a423f = _0x1478c7.has(_0x3b524f) ? _0x1478c7.get(_0x3b524f) + 1 : 1;
    _0x1478c7.set(_0x3b524f, _0x4a423f);
  }
  ;
  let _0x2cb899 = 0;
  for (let _0xab3592 = 0; _0xab3592 < _0x4f7e0c.length - 1; _0xab3592++) {
    const _0x38387c = _0x4f7e0c.substring(_0xab3592, _0xab3592 + 2);
    const _0x642cde = _0x1478c7.has(_0x38387c) ? _0x1478c7.get(_0x38387c) : 0;
    if (_0x642cde > 0) {
      _0x1478c7.set(_0x38387c, _0x642cde - 1);
      _0x2cb899++;
    }
  }
  return _0x2cb899 * 2 / (_0x3c258a.length + _0x4f7e0c.length - 2);
}
function findBestMatch(_0x39a600, _0x48bd46) {
  if (!areArgsValid(_0x39a600, _0x48bd46)) {
    throw new Error("Bad arguments: First argument should be a string, second should be an array of strings");
  }
  const _0x309cc9 = [];
  let _0x5c6ead = 0;
  for (let _0x54c8fc = 0; _0x54c8fc < _0x48bd46.length; _0x54c8fc++) {
    const _0x3fb07a = _0x48bd46[_0x54c8fc];
    const _0xc0acc5 = compareTwoStrings(_0x39a600, _0x3fb07a);
    const _0x4a635b = {
      target: _0x3fb07a,
      rating: _0xc0acc5
    };
    _0x309cc9.push(_0x4a635b);
    if (_0xc0acc5 > _0x309cc9[_0x5c6ead].rating) {
      _0x5c6ead = _0x54c8fc;
    }
  }
  const _0x4873e1 = _0x309cc9[_0x5c6ead];
  const _0x356860 = {
    ratings: _0x309cc9,
    bestMatch: _0x4873e1,
    bestMatchIndex: _0x5c6ead
  };
  return _0x356860;
}
function areArgsValid(_0x3cd6a4, _0x44fb05) {
  if (typeof _0x3cd6a4 !== "string") {
    return false;
  }
  if (!Array.isArray(_0x44fb05)) {
    return false;
  }
  if (!_0x44fb05.length) {
    return false;
  }
  if (_0x44fb05.find(function (_0x158aa6) {
    return typeof _0x158aa6 !== "string";
  })) {
    return false;
  }
  return true;
}