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
function defaultCmp(_0x1518b2, _0x392773) {
  if (_0x1518b2 === _0x392773) {
    return 0;
  }
  if (_0x1518b2 < _0x392773) {
    return -1;
  } else {
    return 1;
  }
}
function add(_0x524ba6, _0x224f5d, _0x593aa3) {
  if (!_0x593aa3) {
    _0x593aa3 = defaultCmp;
  }
  var _0x3d88bf = _0x524ba6.push(_0x224f5d) - 1;
  while (_0x3d88bf) {
    if (_0x593aa3(_0x524ba6[_0x3d88bf - 1], _0x224f5d) < 0) {
      return;
    }
    _0x524ba6[_0x3d88bf] = _0x524ba6[_0x3d88bf - 1];
    _0x524ba6[_0x3d88bf - 1] = _0x224f5d;
    _0x3d88bf--;
  }
}
function addFromFront(_0x3c8c44, _0x113585, _0x9f25ce) {
  if (!_0x9f25ce) {
    _0x9f25ce = defaultCmp;
  }
  var _0x5cefe0 = _0x3c8c44.unshift(_0x113585) - 1;
  for (var _0x1f4930 = 0; _0x1f4930 < _0x5cefe0; _0x1f4930++) {
    if (_0x9f25ce(_0x113585, _0x3c8c44[_0x1f4930 + 1]) < 0) {
      return;
    }
    _0x3c8c44[_0x1f4930] = _0x3c8c44[_0x1f4930 + 1];
    _0x3c8c44[_0x1f4930 + 1] = _0x113585;
  }
}
function lte(_0x8b55ba, _0x115d94, _0x26aad9) {
  if (!_0x26aad9) {
    _0x26aad9 = defaultCmp;
  }
  var _0x47f787 = indexOf(_0x8b55ba, _0x115d94, _0x26aad9);
  if (_0x47f787 === -1) {
    return -1;
  }
  for (; _0x47f787 >= 0; _0x47f787--) {
    var _0x2d3dd3 = _0x26aad9(_0x8b55ba[_0x47f787], _0x115d94);
    if (_0x2d3dd3 <= 0) {
      return _0x47f787;
    }
  }
  return -1;
}
function lt(_0x1fe211, _0x440f3f, _0x10cec9) {
  if (!_0x10cec9) {
    _0x10cec9 = defaultCmp;
  }
  var _0xb4936f = indexOf(_0x1fe211, _0x440f3f, _0x10cec9);
  if (_0xb4936f === -1) {
    return -1;
  }
  for (; _0xb4936f >= 0; _0xb4936f--) {
    var _0x1bbd6f = _0x10cec9(_0x1fe211[_0xb4936f], _0x440f3f);
    if (_0x1bbd6f < 0) {
      return _0xb4936f;
    }
  }
  return -1;
}
function gte(_0x423490, _0x3350bf, _0x45ce7b) {
  if (!_0x45ce7b) {
    _0x45ce7b = defaultCmp;
  }
  var _0x3bb712 = indexOf(_0x423490, _0x3350bf, _0x45ce7b);
  if (_0x3bb712 === -1) {
    return -1;
  }
  for (; _0x3bb712 < _0x423490.length; _0x3bb712++) {
    var _0x57c9b8 = _0x45ce7b(_0x423490[_0x3bb712], _0x3350bf);
    if (_0x57c9b8 >= 0) {
      return _0x3bb712;
    }
  }
  return -1;
}
function gt(_0x36d162, _0x2dd057, _0x1e97b4) {
  if (!_0x1e97b4) {
    _0x1e97b4 = defaultCmp;
  }
  var _0x2c9924 = indexOf(_0x36d162, _0x2dd057, _0x1e97b4);
  if (_0x2c9924 === -1) {
    return -1;
  }
  for (; _0x2c9924 < _0x36d162.length; _0x2c9924++) {
    var _0xb81563 = _0x1e97b4(_0x36d162[_0x2c9924], _0x2dd057);
    if (_0xb81563 > 0) {
      return _0x2c9924;
    }
  }
  return -1;
}
function eq(_0x4a6f4e, _0xde1489, _0x4ddbaa) {
  if (!_0x4ddbaa) {
    _0x4ddbaa = defaultCmp;
  }
  var _0x49ce17 = indexOf(_0x4a6f4e, _0xde1489, _0x4ddbaa);
  if (_0x49ce17 === -1) {
    return -1;
  }
  if (_0x4ddbaa(_0x4a6f4e[_0x49ce17], _0xde1489) === 0) {
    return _0x49ce17;
  } else {
    return -1;
  }
}
function nearest(_0x7ef9bf, _0x45aa17, _0x2fdfcb) {
  if (!_0x2fdfcb) {
    _0x2fdfcb = defaultCmp;
  }
  var _0xd95b3d = _0x7ef9bf.length;
  var _0x4def13 = _0xd95b3d - 1;
  var _0x3ee12c = 0;
  var _0x15257b = -1;
  var _0xea6f23 = 1;
  while (_0x4def13 >= _0x3ee12c && _0x3ee12c >= 0 && _0x4def13 < _0xd95b3d) {
    _0x15257b = Math.floor((_0x4def13 + _0x3ee12c) / 2);
    var _0x5ea154 = _0x2fdfcb(_0x7ef9bf[_0x15257b], _0x45aa17);
    if (_0x5ea154 === 0) {
      return _0x15257b;
    }
    if (_0x5ea154 >= 0) {
      if (_0xea6f23 === 1) {
        _0xea6f23 = 0;
      } else if (_0xea6f23 === 2) {
        if (Math.abs(_0x7ef9bf[_0x15257b] - _0x45aa17) > Math.abs(_0x7ef9bf[_0x15257b - 1] - _0x45aa17)) {
          return _0x15257b - 1;
        }
        return _0x15257b;
      }
      _0x4def13 = _0x15257b - 1;
    } else {
      if (_0xea6f23 === 1) {
        _0xea6f23 = 2;
      } else if (_0xea6f23 === 0) {
        return _0x15257b;
      }
      _0x3ee12c = _0x15257b + 1;
    }
  }
  return _0x15257b;
}
function indexOf(_0x5e0861, _0x42d6f8, _0x5b4e2d) {
  if (!_0x5b4e2d) {
    _0x5b4e2d = defaultCmp;
  }
  var _0x19d5e9 = _0x5e0861.length;
  var _0x484c2c = _0x19d5e9 - 1;
  var _0x4800e0 = 0;
  var _0x314220 = -1;
  while (_0x484c2c >= _0x4800e0 && _0x4800e0 >= 0 && _0x484c2c < _0x19d5e9) {
    _0x314220 = Math.floor((_0x484c2c + _0x4800e0) / 2);
    var _0x13683b = _0x5b4e2d(_0x5e0861[_0x314220], _0x42d6f8);
    if (_0x13683b === 0) {
      return _0x314220;
    }
    if (_0x13683b >= 0) {
      _0x484c2c = _0x314220 - 1;
    } else {
      _0x4800e0 = _0x314220 + 1;
    }
  }
  return _0x314220;
}
function has(_0x5e6552, _0x26192d, _0x42c400) {
  return eq(_0x5e6552, _0x26192d, _0x42c400) > -1;
}
function remove(_0x30d8a4, _0x2fd65a, _0x2a7766) {
  var _0x2a0b5e = eq(_0x30d8a4, _0x2fd65a, _0x2a7766);
  if (_0x2a0b5e === -1) {
    return false;
  }
  _0x30d8a4.splice(_0x2a0b5e, 1);
  return true;
}