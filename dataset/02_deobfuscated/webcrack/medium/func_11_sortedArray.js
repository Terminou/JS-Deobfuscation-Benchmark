exports.add = add;
exports.addFromFront = addFromFront;
exports.remove = remove;
exports.has = has;
exports.eq = eq;
exports.lte = lte;
exports.lt = lt;
exports.gte = gte;
exports.gt = gt;
exports.nearest = nearest;
function defaultCmp(_0x468e1f, _0x3e825c) {
  if (_0x468e1f === _0x3e825c) {
    return 0;
  }
  if (_0x468e1f < _0x3e825c) {
    return -1;
  } else {
    return 1;
  }
}
function add(_0x2cb195, _0x2382ff, _0x5725b9) {
  if (!_0x5725b9) {
    _0x5725b9 = defaultCmp;
  }
  var _0x432305 = _0x2cb195.push(_0x2382ff) - 1;
  while (_0x432305) {
    if (_0x5725b9(_0x2cb195[_0x432305 - 1], _0x2382ff) < 0) {
      return;
    }
    _0x2cb195[_0x432305] = _0x2cb195[_0x432305 - 1];
    _0x2cb195[_0x432305 - 1] = _0x2382ff;
    _0x432305--;
  }
}
function addFromFront(_0x1dea9d, _0x20a247, _0x769844) {
  if (!_0x769844) {
    _0x769844 = defaultCmp;
  }
  var _0x6fc291 = _0x1dea9d.unshift(_0x20a247) - 1;
  for (var _0x868a8 = 0; _0x868a8 < _0x6fc291; _0x868a8++) {
    if (_0x769844(_0x20a247, _0x1dea9d[_0x868a8 + 1]) < 0) {
      return;
    }
    _0x1dea9d[_0x868a8] = _0x1dea9d[_0x868a8 + 1];
    _0x1dea9d[_0x868a8 + 1] = _0x20a247;
  }
}
function lte(_0x59d543, _0x187197, _0x2b77c2) {
  if (!_0x2b77c2) {
    _0x2b77c2 = defaultCmp;
  }
  var _0x4ab3f = indexOf(_0x59d543, _0x187197, _0x2b77c2);
  if (_0x4ab3f === -1) {
    return -1;
  }
  for (; _0x4ab3f >= 0; _0x4ab3f--) {
    var _0x351f8c = _0x2b77c2(_0x59d543[_0x4ab3f], _0x187197);
    if (_0x351f8c <= 0) {
      return _0x4ab3f;
    }
  }
  return -1;
}
function lt(_0x40c7d4, _0x1b375c, _0x2c022f) {
  if (!_0x2c022f) {
    _0x2c022f = defaultCmp;
  }
  var _0x2c4417 = indexOf(_0x40c7d4, _0x1b375c, _0x2c022f);
  if (_0x2c4417 === -1) {
    return -1;
  }
  for (; _0x2c4417 >= 0; _0x2c4417--) {
    var _0x626d0c = _0x2c022f(_0x40c7d4[_0x2c4417], _0x1b375c);
    if (_0x626d0c < 0) {
      return _0x2c4417;
    }
  }
  return -1;
}
function gte(_0x38c089, _0x2f087b, _0x16a17f) {
  if (!_0x16a17f) {
    _0x16a17f = defaultCmp;
  }
  var _0x226b1f = indexOf(_0x38c089, _0x2f087b, _0x16a17f);
  if (_0x226b1f === -1) {
    return -1;
  }
  for (; _0x226b1f < _0x38c089.length; _0x226b1f++) {
    var _0x3ff37a = _0x16a17f(_0x38c089[_0x226b1f], _0x2f087b);
    if (_0x3ff37a >= 0) {
      return _0x226b1f;
    }
  }
  return -1;
}
function gt(_0x1ba611, _0x260bf1, _0x5087d8) {
  if (!_0x5087d8) {
    _0x5087d8 = defaultCmp;
  }
  var _0x5b57fe = indexOf(_0x1ba611, _0x260bf1, _0x5087d8);
  if (_0x5b57fe === -1) {
    return -1;
  }
  for (; _0x5b57fe < _0x1ba611.length; _0x5b57fe++) {
    var _0x657d5a = _0x5087d8(_0x1ba611[_0x5b57fe], _0x260bf1);
    if (_0x657d5a > 0) {
      return _0x5b57fe;
    }
  }
  return -1;
}
function eq(_0x15742a, _0xac362a, _0x4e320d) {
  if (!_0x4e320d) {
    _0x4e320d = defaultCmp;
  }
  var _0x2663e0 = indexOf(_0x15742a, _0xac362a, _0x4e320d);
  if (_0x2663e0 === -1) {
    return -1;
  }
  if (_0x4e320d(_0x15742a[_0x2663e0], _0xac362a) === 0) {
    return _0x2663e0;
  } else {
    return -1;
  }
}
function nearest(_0x1f54bd, _0x4590cd, _0x359b28) {
  if (!_0x359b28) {
    _0x359b28 = defaultCmp;
  }
  var _0xa3f350 = _0x1f54bd.length;
  var _0xc10e5f = _0xa3f350 - 1;
  var _0x18f016 = 0;
  var _0x25694b = -1;
  var _0x2cdd73 = 1;
  while (_0xc10e5f >= _0x18f016 && _0x18f016 >= 0 && _0xc10e5f < _0xa3f350) {
    _0x25694b = Math.floor((_0xc10e5f + _0x18f016) / 2);
    var _0x46aed1 = _0x359b28(_0x1f54bd[_0x25694b], _0x4590cd);
    if (_0x46aed1 === 0) {
      return _0x25694b;
    }
    if (_0x46aed1 >= 0) {
      if (_0x2cdd73 === 1) {
        _0x2cdd73 = 0;
      } else if (_0x2cdd73 === 2) {
        if (Math.abs(_0x1f54bd[_0x25694b] - _0x4590cd) > Math.abs(_0x1f54bd[_0x25694b - 1] - _0x4590cd)) {
          return _0x25694b - 1;
        }
        return _0x25694b;
      }
      _0xc10e5f = _0x25694b - 1;
    } else {
      if (_0x2cdd73 === 1) {
        _0x2cdd73 = 2;
      } else if (_0x2cdd73 === 0) {
        return _0x25694b;
      }
      _0x18f016 = _0x25694b + 1;
    }
  }
  return _0x25694b;
}
function indexOf(_0x1be2b8, _0x10e074, _0x2c66c8) {
  if (!_0x2c66c8) {
    _0x2c66c8 = defaultCmp;
  }
  var _0x9e364d = _0x1be2b8.length;
  var _0x4af257 = _0x9e364d - 1;
  var _0x132a60 = 0;
  var _0x16e030 = -1;
  while (_0x4af257 >= _0x132a60 && _0x132a60 >= 0 && _0x4af257 < _0x9e364d) {
    _0x16e030 = Math.floor((_0x4af257 + _0x132a60) / 2);
    var _0x4080c0 = _0x2c66c8(_0x1be2b8[_0x16e030], _0x10e074);
    if (_0x4080c0 === 0) {
      return _0x16e030;
    }
    if (_0x4080c0 >= 0) {
      _0x4af257 = _0x16e030 - 1;
    } else {
      _0x132a60 = _0x16e030 + 1;
    }
  }
  return _0x16e030;
}
function has(_0xbec2df, _0x202db5, _0x1ffd73) {
  return eq(_0xbec2df, _0x202db5, _0x1ffd73) > -1;
}
function remove(_0x5d1865, _0x32c6f8, _0x52aaf2) {
  var _0x1bd2a8 = eq(_0x5d1865, _0x32c6f8, _0x52aaf2);
  if (_0x1bd2a8 === -1) {
    return false;
  }
  _0x5d1865.splice(_0x1bd2a8, 1);
  return true;
}