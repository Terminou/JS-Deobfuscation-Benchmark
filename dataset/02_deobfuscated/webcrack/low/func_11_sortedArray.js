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
function defaultCmp(_0x4a1d81, _0x13d3a9) {
  if (_0x4a1d81 === _0x13d3a9) {
    return 0;
  }
  if (_0x4a1d81 < _0x13d3a9) {
    return -1;
  } else {
    return 1;
  }
}
function add(_0x1aa99b, _0x1db79c, _0x59730f) {
  if (!_0x59730f) {
    _0x59730f = defaultCmp;
  }
  var _0x2979fa = _0x1aa99b.push(_0x1db79c) - 1;
  while (_0x2979fa) {
    if (_0x59730f(_0x1aa99b[_0x2979fa - 1], _0x1db79c) < 0) {
      return;
    }
    _0x1aa99b[_0x2979fa] = _0x1aa99b[_0x2979fa - 1];
    _0x1aa99b[_0x2979fa - 1] = _0x1db79c;
    _0x2979fa--;
  }
}
function addFromFront(_0xe84f42, _0x2584fa, _0x53dd18) {
  if (!_0x53dd18) {
    _0x53dd18 = defaultCmp;
  }
  var _0x13066e = _0xe84f42.unshift(_0x2584fa) - 1;
  for (var _0x13e354 = 0; _0x13e354 < _0x13066e; _0x13e354++) {
    if (_0x53dd18(_0x2584fa, _0xe84f42[_0x13e354 + 1]) < 0) {
      return;
    }
    _0xe84f42[_0x13e354] = _0xe84f42[_0x13e354 + 1];
    _0xe84f42[_0x13e354 + 1] = _0x2584fa;
  }
}
function lte(_0x25519b, _0x86fb4c, _0x35785a) {
  if (!_0x35785a) {
    _0x35785a = defaultCmp;
  }
  var _0x5e13d1 = indexOf(_0x25519b, _0x86fb4c, _0x35785a);
  if (_0x5e13d1 === -1) {
    return -1;
  }
  for (; _0x5e13d1 >= 0; _0x5e13d1--) {
    var _0xd7ef2d = _0x35785a(_0x25519b[_0x5e13d1], _0x86fb4c);
    if (_0xd7ef2d <= 0) {
      return _0x5e13d1;
    }
  }
  return -1;
}
function lt(_0x4876bb, _0x10b12a, _0x189d7d) {
  if (!_0x189d7d) {
    _0x189d7d = defaultCmp;
  }
  var _0x59f03b = indexOf(_0x4876bb, _0x10b12a, _0x189d7d);
  if (_0x59f03b === -1) {
    return -1;
  }
  for (; _0x59f03b >= 0; _0x59f03b--) {
    var _0x302727 = _0x189d7d(_0x4876bb[_0x59f03b], _0x10b12a);
    if (_0x302727 < 0) {
      return _0x59f03b;
    }
  }
  return -1;
}
function gte(_0x29e424, _0x49a288, _0x12a67e) {
  if (!_0x12a67e) {
    _0x12a67e = defaultCmp;
  }
  var _0x1ab860 = indexOf(_0x29e424, _0x49a288, _0x12a67e);
  if (_0x1ab860 === -1) {
    return -1;
  }
  for (; _0x1ab860 < _0x29e424.length; _0x1ab860++) {
    var _0x30eb56 = _0x12a67e(_0x29e424[_0x1ab860], _0x49a288);
    if (_0x30eb56 >= 0) {
      return _0x1ab860;
    }
  }
  return -1;
}
function gt(_0x44fd9d, _0x1ed764, _0x281ffd) {
  if (!_0x281ffd) {
    _0x281ffd = defaultCmp;
  }
  var _0x370afb = indexOf(_0x44fd9d, _0x1ed764, _0x281ffd);
  if (_0x370afb === -1) {
    return -1;
  }
  for (; _0x370afb < _0x44fd9d.length; _0x370afb++) {
    var _0x551313 = _0x281ffd(_0x44fd9d[_0x370afb], _0x1ed764);
    if (_0x551313 > 0) {
      return _0x370afb;
    }
  }
  return -1;
}
function eq(_0x4a8513, _0x3cd449, _0x4a8b04) {
  if (!_0x4a8b04) {
    _0x4a8b04 = defaultCmp;
  }
  var _0x54e078 = indexOf(_0x4a8513, _0x3cd449, _0x4a8b04);
  if (_0x54e078 === -1) {
    return -1;
  }
  if (_0x4a8b04(_0x4a8513[_0x54e078], _0x3cd449) === 0) {
    return _0x54e078;
  } else {
    return -1;
  }
}
function nearest(_0xd1fdc3, _0x50db67, _0x1cbd37) {
  if (!_0x1cbd37) {
    _0x1cbd37 = defaultCmp;
  }
  var _0xb06642 = _0xd1fdc3.length;
  var _0x1975e7 = _0xb06642 - 1;
  var _0x4416b2 = 0;
  var _0x44815a = -1;
  var _0x3b03aa = 1;
  while (_0x1975e7 >= _0x4416b2 && _0x4416b2 >= 0 && _0x1975e7 < _0xb06642) {
    _0x44815a = Math.floor((_0x1975e7 + _0x4416b2) / 2);
    var _0x1b6c85 = _0x1cbd37(_0xd1fdc3[_0x44815a], _0x50db67);
    if (_0x1b6c85 === 0) {
      return _0x44815a;
    }
    if (_0x1b6c85 >= 0) {
      if (_0x3b03aa === 1) {
        _0x3b03aa = 0;
      } else if (_0x3b03aa === 2) {
        if (Math.abs(_0xd1fdc3[_0x44815a] - _0x50db67) > Math.abs(_0xd1fdc3[_0x44815a - 1] - _0x50db67)) {
          return _0x44815a - 1;
        }
        return _0x44815a;
      }
      _0x1975e7 = _0x44815a - 1;
    } else {
      if (_0x3b03aa === 1) {
        _0x3b03aa = 2;
      } else if (_0x3b03aa === 0) {
        return _0x44815a;
      }
      _0x4416b2 = _0x44815a + 1;
    }
  }
  return _0x44815a;
}
function indexOf(_0x189f8b, _0x247c0d, _0x286a9a) {
  if (!_0x286a9a) {
    _0x286a9a = defaultCmp;
  }
  var _0x4c99d8 = _0x189f8b.length;
  var _0x26818c = _0x4c99d8 - 1;
  var _0x502f73 = 0;
  var _0x4b0e58 = -1;
  while (_0x26818c >= _0x502f73 && _0x502f73 >= 0 && _0x26818c < _0x4c99d8) {
    _0x4b0e58 = Math.floor((_0x26818c + _0x502f73) / 2);
    var _0x869e97 = _0x286a9a(_0x189f8b[_0x4b0e58], _0x247c0d);
    if (_0x869e97 === 0) {
      return _0x4b0e58;
    }
    if (_0x869e97 >= 0) {
      _0x26818c = _0x4b0e58 - 1;
    } else {
      _0x502f73 = _0x4b0e58 + 1;
    }
  }
  return _0x4b0e58;
}
function has(_0x59d6eb, _0x78aab7, _0x5f4b1d) {
  return eq(_0x59d6eb, _0x78aab7, _0x5f4b1d) > -1;
}
function remove(_0x333840, _0x402d85, _0x5b2dc3) {
  var _0x5ab74b = eq(_0x333840, _0x402d85, _0x5b2dc3);
  if (_0x5ab74b === -1) {
    return false;
  }
  _0x333840.splice(_0x5ab74b, 1);
  return true;
}