(function (_0x20be60, _0x16a21f) {
  "use strict";
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = _0x16a21f();
  } else if (typeof define === "function" && define.amd) {
    define([], _0x16a21f);
  } else {
    _0x20be60.objectPath = _0x16a21f();
  }
}(this, function () {
  "use strict";
  var _0x4adbdf = Object.prototype.toString;
  function _0x4300b7(_0x348f88, _0x38212f) {
    if (_0x348f88 == null) {
      return false;
    }
    return Object.prototype.hasOwnProperty.call(_0x348f88, _0x38212f);
  }
  function _0x26164f(_0x46b666) {
    if (!_0x46b666) {
      return true;
    }
    if (_0x54c5c3(_0x46b666) && _0x46b666.length === 0) {
      return true;
    } else if (typeof _0x46b666 !== "string") {
      for (var _0x12f739 in _0x46b666) {
        if (_0x4300b7(_0x46b666, _0x12f739)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  var _0x54c5c3 = Array.isArray || function (_0x47d5b9) {
    return _0x4adbdf.call(_0x47d5b9) === "[object Array]";
  };
  function _0x44f039(_0x30514e) {
    var _0x5f08f6 = parseInt(_0x30514e);
    if (_0x5f08f6.toString() === _0x30514e) {
      return _0x5f08f6;
    }
    return _0x30514e;
  }
  function _0x5d189b(_0x1f12df) {
    _0x1f12df = _0x1f12df || {};
    var _0x4aab4c = function (_0x33ff20) {
      return Object.keys(_0x4aab4c).reduce(function (_0xa4b3a6, _0x45abbc) {
        if (_0x45abbc === "create") {
          return _0xa4b3a6;
        }
        if (typeof _0x4aab4c[_0x45abbc] === "function") {
          _0xa4b3a6[_0x45abbc] = _0x4aab4c[_0x45abbc].bind(_0x4aab4c, _0x33ff20);
        }
        return _0xa4b3a6;
      }, {});
    };
    var _0x25907d;
    if (_0x1f12df.includeInheritedProps) {
      _0x25907d = function () {
        return true;
      };
    } else {
      _0x25907d = function (_0x459935, _0x39b1de) {
        return typeof _0x39b1de === "number" && Array.isArray(_0x459935) || _0x4300b7(_0x459935, _0x39b1de);
      };
    }
    function _0x5e0774(_0x4afa37, _0x39a350) {
      if (_0x25907d(_0x4afa37, _0x39a350)) {
        return _0x4afa37[_0x39a350];
      }
    }
    var _0x37d859;
    if (_0x1f12df.includeInheritedProps) {
      _0x37d859 = function (_0x4b72c2, _0xe374a0) {
        if (typeof _0xe374a0 !== "string" && typeof _0xe374a0 !== "number") {
          _0xe374a0 = String(_0xe374a0);
        }
        var _0x46f73e = _0x5e0774(_0x4b72c2, _0xe374a0);
        if (_0xe374a0 === "__proto__" || _0xe374a0 === "prototype" || _0xe374a0 === "constructor" && typeof _0x46f73e === "function") {
          throw new Error("For security reasons, object's magic properties cannot be set");
        }
        return _0x46f73e;
      };
    } else {
      _0x37d859 = function (_0x13075e, _0xa7dbf) {
        return _0x5e0774(_0x13075e, _0xa7dbf);
      };
    }
    function _0x4dc908(_0x22aa0d, _0x4bc69f, _0x522e74, _0x2955a3) {
      if (typeof _0x4bc69f === "number") {
        _0x4bc69f = [_0x4bc69f];
      }
      if (!_0x4bc69f || _0x4bc69f.length === 0) {
        return _0x22aa0d;
      }
      if (typeof _0x4bc69f === "string") {
        return _0x4dc908(_0x22aa0d, _0x4bc69f.split(".").map(_0x44f039), _0x522e74, _0x2955a3);
      }
      var _0x1fef78 = _0x4bc69f[0];
      var _0x31131a = _0x37d859(_0x22aa0d, _0x1fef78);
      if (_0x4bc69f.length === 1) {
        if (_0x31131a === undefined || !_0x2955a3) {
          _0x22aa0d[_0x1fef78] = _0x522e74;
        }
        return _0x31131a;
      }
      if (_0x31131a === undefined) {
        if (typeof _0x4bc69f[1] === "number") {
          _0x22aa0d[_0x1fef78] = [];
        } else {
          _0x22aa0d[_0x1fef78] = {};
        }
      }
      return _0x4dc908(_0x22aa0d[_0x1fef78], _0x4bc69f.slice(1), _0x522e74, _0x2955a3);
    }
    _0x4aab4c.has = function (_0x49b45a, _0x4e05a3) {
      if (typeof _0x4e05a3 === "number") {
        _0x4e05a3 = [_0x4e05a3];
      } else if (typeof _0x4e05a3 === "string") {
        _0x4e05a3 = _0x4e05a3.split(".");
      }
      if (!_0x4e05a3 || _0x4e05a3.length === 0) {
        return !!_0x49b45a;
      }
      for (var _0xed2685 = 0; _0xed2685 < _0x4e05a3.length; _0xed2685++) {
        var _0x1418e8 = _0x44f039(_0x4e05a3[_0xed2685]);
        if (typeof _0x1418e8 === "number" && _0x54c5c3(_0x49b45a) && _0x1418e8 < _0x49b45a.length || (_0x1f12df.includeInheritedProps ? _0x1418e8 in Object(_0x49b45a) : _0x4300b7(_0x49b45a, _0x1418e8))) {
          _0x49b45a = _0x49b45a[_0x1418e8];
        } else {
          return false;
        }
      }
      return true;
    };
    _0x4aab4c.ensureExists = function (_0x3c32ac, _0xfd65f7, _0x48a070) {
      return _0x4dc908(_0x3c32ac, _0xfd65f7, _0x48a070, true);
    };
    _0x4aab4c.set = function (_0x5e3b5e, _0x4e23fc, _0x267225, _0x173990) {
      return _0x4dc908(_0x5e3b5e, _0x4e23fc, _0x267225, _0x173990);
    };
    _0x4aab4c.insert = function (_0x59451b, _0x17791a, _0x4e3405, _0x25571d) {
      var _0x56e70b = _0x4aab4c.get(_0x59451b, _0x17791a);
      _0x25571d = ~~_0x25571d;
      if (!_0x54c5c3(_0x56e70b)) {
        _0x56e70b = [];
        _0x4aab4c.set(_0x59451b, _0x17791a, _0x56e70b);
      }
      _0x56e70b.splice(_0x25571d, 0, _0x4e3405);
    };
    _0x4aab4c.empty = function (_0x4e5920, _0x235ebc) {
      if (_0x26164f(_0x235ebc)) {
        return undefined;
      }
      if (_0x4e5920 == null) {
        return undefined;
      }
      var _0x4858cf, _0x2cbbcc;
      if (!(_0x4858cf = _0x4aab4c.get(_0x4e5920, _0x235ebc))) {
        return undefined;
      }
      if (typeof _0x4858cf === "string") {
        return _0x4aab4c.set(_0x4e5920, _0x235ebc, "");
      } else if (typeof _0x4858cf === "boolean" || _0x4adbdf.call(_0x4858cf) === "[object Boolean]") {
        return _0x4aab4c.set(_0x4e5920, _0x235ebc, false);
      } else if (typeof _0x4858cf === "number") {
        return _0x4aab4c.set(_0x4e5920, _0x235ebc, 0);
      } else if (_0x54c5c3(_0x4858cf)) {
        _0x4858cf.length = 0;
      } else if (typeof _0x4858cf === "object" && _0x4adbdf.call(_0x4858cf) === "[object Object]") {
        for (_0x2cbbcc in _0x4858cf) {
          if (_0x25907d(_0x4858cf, _0x2cbbcc)) {
            delete _0x4858cf[_0x2cbbcc];
          }
        }
      } else {
        return _0x4aab4c.set(_0x4e5920, _0x235ebc, null);
      }
    };
    _0x4aab4c.push = function (_0x10cad0, _0x37ad99) {
      var _0x1fbc02 = _0x4aab4c.get(_0x10cad0, _0x37ad99);
      if (!_0x54c5c3(_0x1fbc02)) {
        _0x1fbc02 = [];
        _0x4aab4c.set(_0x10cad0, _0x37ad99, _0x1fbc02);
      }
      _0x1fbc02.push.apply(_0x1fbc02, Array.prototype.slice.call(arguments, 2));
    };
    _0x4aab4c.coalesce = function (_0x4107eb, _0x5479e7, _0x4f0f45) {
      var _0x42d37d;
      for (var _0x5b5e82 = 0, _0x2400ac = _0x5479e7.length; _0x5b5e82 < _0x2400ac; _0x5b5e82++) {
        if ((_0x42d37d = _0x4aab4c.get(_0x4107eb, _0x5479e7[_0x5b5e82])) !== undefined) {
          return _0x42d37d;
        }
      }
      return _0x4f0f45;
    };
    _0x4aab4c.get = function (_0x34c4d7, _0x185f2f, _0x19ecec) {
      if (typeof _0x185f2f === "number") {
        _0x185f2f = [_0x185f2f];
      }
      if (!_0x185f2f || _0x185f2f.length === 0) {
        return _0x34c4d7;
      }
      if (_0x34c4d7 == null) {
        return _0x19ecec;
      }
      if (typeof _0x185f2f === "string") {
        return _0x4aab4c.get(_0x34c4d7, _0x185f2f.split("."), _0x19ecec);
      }
      var _0x5f1b1d = _0x44f039(_0x185f2f[0]);
      var _0x3b2a44 = _0x37d859(_0x34c4d7, _0x5f1b1d);
      if (_0x3b2a44 === undefined) {
        return _0x19ecec;
      }
      if (_0x185f2f.length === 1) {
        return _0x3b2a44;
      }
      return _0x4aab4c.get(_0x34c4d7[_0x5f1b1d], _0x185f2f.slice(1), _0x19ecec);
    };
    _0x4aab4c.del = function _0xb0dfce(_0x6abee4, _0x24c69c) {
      if (typeof _0x24c69c === "number") {
        _0x24c69c = [_0x24c69c];
      }
      if (_0x6abee4 == null) {
        return _0x6abee4;
      }
      if (_0x26164f(_0x24c69c)) {
        return _0x6abee4;
      }
      if (typeof _0x24c69c === "string") {
        return _0x4aab4c.del(_0x6abee4, _0x24c69c.split("."));
      }
      var _0x2917f9 = _0x44f039(_0x24c69c[0]);
      _0x37d859(_0x6abee4, _0x2917f9);
      if (!_0x25907d(_0x6abee4, _0x2917f9)) {
        return _0x6abee4;
      }
      if (_0x24c69c.length === 1) {
        if (_0x54c5c3(_0x6abee4)) {
          _0x6abee4.splice(_0x2917f9, 1);
        } else {
          delete _0x6abee4[_0x2917f9];
        }
      } else {
        return _0x4aab4c.del(_0x6abee4[_0x2917f9], _0x24c69c.slice(1));
      }
      return _0x6abee4;
    };
    return _0x4aab4c;
  }
  var _0x375063 = _0x5d189b();
  _0x375063.create = _0x5d189b;
  _0x375063.withInheritedProps = _0x5d189b({includeInheritedProps: true});
  return _0x375063;
}));
