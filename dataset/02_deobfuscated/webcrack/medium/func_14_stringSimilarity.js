const _0x5d9765 = {
  compareTwoStrings: compareTwoStrings,
  findBestMatch: findBestMatch
};
module.exports = _0x5d9765;
function compareTwoStrings(_0x40b279, _0x4cb18a) {
  _0x40b279 = _0x40b279.replace(/\s+/g, "");
  _0x4cb18a = _0x4cb18a.replace(/\s+/g, "");
  if (_0x40b279 === _0x4cb18a) {
    return 1;
  }
  if (_0x40b279.length < 2 || _0x4cb18a.length < 2) {
    return 0;
  }
  let _0x4937d1 = new Map();
  for (let _0x4b3e1c = 0; _0x4b3e1c < _0x40b279.length - 1; _0x4b3e1c++) {
    const _0xa1ce01 = _0x40b279.substring(_0x4b3e1c, _0x4b3e1c + 2);
    const _0x4a05f2 = _0x4937d1.has(_0xa1ce01) ? _0x4937d1.get(_0xa1ce01) + 1 : 1;
    _0x4937d1.set(_0xa1ce01, _0x4a05f2);
  }
  ;
  let _0x39b8d5 = 0;
  for (let _0x310ca5 = 0; _0x310ca5 < _0x4cb18a.length - 1; _0x310ca5++) {
    const _0x1655a7 = _0x4cb18a.substring(_0x310ca5, _0x310ca5 + 2);
    const _0x537f8c = _0x4937d1.has(_0x1655a7) ? _0x4937d1.get(_0x1655a7) : 0;
    if (_0x537f8c > 0) {
      _0x4937d1.set(_0x1655a7, _0x537f8c - 1);
      _0x39b8d5++;
    }
  }
  return _0x39b8d5 * 2 / (_0x40b279.length + _0x4cb18a.length - 2);
}
function findBestMatch(_0x9b713, _0x1c11ba) {
  if (!areArgsValid(_0x9b713, _0x1c11ba)) {
    throw new Error("Bad arguments: First argument should be a string, second should be an array of strings");
  }
  const _0x1b9d0c = [];
  let _0x4631cb = 0;
  for (let _0x2bf61b = 0; _0x2bf61b < _0x1c11ba.length; _0x2bf61b++) {
    const _0x15ce7b = _0x1c11ba[_0x2bf61b];
    const _0x575b98 = compareTwoStrings(_0x9b713, _0x15ce7b);
    const _0x30c473 = {
      target: _0x15ce7b,
      rating: _0x575b98
    };
    _0x1b9d0c.push(_0x30c473);
    if (_0x575b98 > _0x1b9d0c[_0x4631cb].rating) {
      _0x4631cb = _0x2bf61b;
    }
  }
  const _0x2c178b = _0x1b9d0c[_0x4631cb];
  const _0x288f1e = {
    ratings: _0x1b9d0c,
    bestMatch: _0x2c178b,
    bestMatchIndex: _0x4631cb
  };
  return _0x288f1e;
}
function areArgsValid(_0x1e3e4f, _0x941ee5) {
  if (typeof _0x1e3e4f !== "string") {
    return false;
  }
  if (!Array.isArray(_0x941ee5)) {
    return false;
  }
  if (!_0x941ee5.length) {
    return false;
  }
  if (_0x941ee5.find(function (_0x11bf99) {
    return typeof _0x11bf99 !== "string";
  })) {
    return false;
  }
  return true;
}