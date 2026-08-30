(function (_0x2bf444, _0x2a9385) {
  'use strict';

  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = _0x2a9385();
  } else if (typeof define === "function" && define.amd) {
    define([], _0x2a9385);
  } else {
    _0x2bf444.objectPath = _0x2a9385();
  }
})(this, function () {
  'use strict';

  var _0x21ab65 = Object.prototype.toString;
  function _0x21ae56(_0x378d26, _0x30430a) {
    if (_0x378d26 == null) {
      return false;
    }
    return Object.prototype.hasOwnProperty.call(_0x378d26, _0x30430a);
  }
  function _0x1227f5(_0x3a6824) {
    if (!_0x3a6824) {
      return true;
    }
    if (_0x5c4b3c(_0x3a6824) && _0x3a6824.length === 0) {
      return true;
    } else if (typeof _0x3a6824 !== "string") {
      for (var _0x3256ef in _0x3a6824) {
        if (_0x21ae56(_0x3a6824, _0x3256ef)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  function _0x2a19c2(_0x105ba7) {
    return _0x21ab65.call(_0x105ba7);
  }
  function _0x3a16ba(_0x1d74a2) {
    return typeof _0x1d74a2 === "object" && _0x2a19c2(_0x1d74a2) === "[object Object]";
  }
  var _0x5c4b3c = Array.isArray || function (_0x261f3c) {
    return _0x21ab65.call(_0x261f3c) === "[object Array]";
  };
  function _0x5b7ef2(_0x130f41) {
    return typeof _0x130f41 === "boolean" || _0x2a19c2(_0x130f41) === "[object Boolean]";
  }
  function _0x446914(_0xcf675a) {
    var _0x28e6ba = parseInt(_0xcf675a);
    if (_0x28e6ba.toString() === _0xcf675a) {
      return _0x28e6ba;
    }
    return _0xcf675a;
  }
  function _0x5df55e(_0x148d4e) {
    _0x148d4e = _0x148d4e || {};
    function _0x43a054(_0x4cdb18) {
      return Object.keys(_0x43a054).reduce(function (_0x21fd2a, _0x44d26b) {
        if (_0x44d26b === "create") {
          return _0x21fd2a;
        }
        if (typeof _0x43a054[_0x44d26b] === "function") {
          _0x21fd2a[_0x44d26b] = _0x43a054[_0x44d26b].bind(_0x43a054, _0x4cdb18);
        }
        return _0x21fd2a;
      }, {});
    }
    var _0x2c8e4f;
    if (_0x148d4e.includeInheritedProps) {
      _0x2c8e4f = function () {
        return true;
      };
    } else {
      _0x2c8e4f = function (_0x5994e0, _0x3891c5) {
        return typeof _0x3891c5 === "number" && Array.isArray(_0x5994e0) || _0x21ae56(_0x5994e0, _0x3891c5);
      };
    }
    function _0x1f4a37(_0x4f285d, _0x38dcb6) {
      if (_0x2c8e4f(_0x4f285d, _0x38dcb6)) {
        return _0x4f285d[_0x38dcb6];
      }
    }
    var _0x261d8d;
    if (_0x148d4e.includeInheritedProps) {
      _0x261d8d = function (_0x2ff7b7, _0x56d419) {
        if (typeof _0x56d419 !== "string" && typeof _0x56d419 !== "number") {
          _0x56d419 = String(_0x56d419);
        }
        var _0x4f88a3 = _0x1f4a37(_0x2ff7b7, _0x56d419);
        if (_0x56d419 === "__proto__" || _0x56d419 === "prototype" || _0x56d419 === "constructor" && typeof _0x4f88a3 === "function") {
          throw new Error("For security reasons, object's magic properties cannot be set");
        }
        return _0x4f88a3;
      };
    } else {
      _0x261d8d = function (_0x2b4e26, _0x19a154) {
        return _0x1f4a37(_0x2b4e26, _0x19a154);
      };
    }
    function _0x3cea09(_0x1e3862, _0x59d32e, _0x233e14, _0x403174) {
      if (typeof _0x59d32e === "number") {
        _0x59d32e = [_0x59d32e];
      }
      if (!_0x59d32e || _0x59d32e.length === 0) {
        return _0x1e3862;
      }
      if (typeof _0x59d32e === "string") {
        return _0x3cea09(_0x1e3862, _0x59d32e.split(".").map(_0x446914), _0x233e14, _0x403174);
      }
      var _0x5f05af = _0x59d32e[0];
      var _0x4bcfc0 = _0x261d8d(_0x1e3862, _0x5f05af);
      if (_0x59d32e.length === 1) {
        if (_0x4bcfc0 === undefined || !_0x403174) {
          _0x1e3862[_0x5f05af] = _0x233e14;
        }
        return _0x4bcfc0;
      }
      if (_0x4bcfc0 === undefined) {
        if (typeof _0x59d32e[1] === "number") {
          _0x1e3862[_0x5f05af] = [];
        } else {
          _0x1e3862[_0x5f05af] = {};
        }
      }
      return _0x3cea09(_0x1e3862[_0x5f05af], _0x59d32e.slice(1), _0x233e14, _0x403174);
    }
    _0x43a054.has = function (_0x448345, _0x27d3d0) {
      if (typeof _0x27d3d0 === "number") {
        _0x27d3d0 = [_0x27d3d0];
      } else if (typeof _0x27d3d0 === "string") {
        _0x27d3d0 = _0x27d3d0.split(".");
      }
      if (!_0x27d3d0 || _0x27d3d0.length === 0) {
        return !!_0x448345;
      }
      for (var _0x5b34f8 = 0; _0x5b34f8 < _0x27d3d0.length; _0x5b34f8++) {
        var _0x56b898 = _0x446914(_0x27d3d0[_0x5b34f8]);
        if (typeof _0x56b898 === "number" && _0x5c4b3c(_0x448345) && _0x56b898 < _0x448345.length || (_0x148d4e.includeInheritedProps ? _0x56b898 in Object(_0x448345) : _0x21ae56(_0x448345, _0x56b898))) {
          _0x448345 = _0x448345[_0x56b898];
        } else {
          return false;
        }
      }
      return true;
    };
    _0x43a054.ensureExists = function (_0x376372, _0x577a66, _0x12bb20) {
      return _0x3cea09(_0x376372, _0x577a66, _0x12bb20, true);
    };
    _0x43a054.set = function (_0x2c4ae8, _0x270440, _0x115aa4, _0x2a20c6) {
      return _0x3cea09(_0x2c4ae8, _0x270440, _0x115aa4, _0x2a20c6);
    };
    _0x43a054.insert = function (_0x1e03be, _0x5181d8, _0x494548, _0x1d2435) {
      var _0x14f193 = _0x43a054.get(_0x1e03be, _0x5181d8);
      _0x1d2435 = ~~_0x1d2435;
      if (!_0x5c4b3c(_0x14f193)) {
        _0x14f193 = [];
        _0x43a054.set(_0x1e03be, _0x5181d8, _0x14f193);
      }
      _0x14f193.splice(_0x1d2435, 0, _0x494548);
    };
    _0x43a054.empty = function (_0x53635, _0x361992) {
      if (_0x1227f5(_0x361992)) {
        return undefined;
      }
      if (_0x53635 == null) {
        return undefined;
      }
      var _0x29627c;
      var _0x22d08b;
      if (!(_0x29627c = _0x43a054.get(_0x53635, _0x361992))) {
        return undefined;
      }
      if (typeof _0x29627c === "string") {
        return _0x43a054.set(_0x53635, _0x361992, "");
      } else if (_0x5b7ef2(_0x29627c)) {
        return _0x43a054.set(_0x53635, _0x361992, false);
      } else if (typeof _0x29627c === "number") {
        return _0x43a054.set(_0x53635, _0x361992, 0);
      } else if (_0x5c4b3c(_0x29627c)) {
        _0x29627c.length = 0;
      } else if (_0x3a16ba(_0x29627c)) {
        for (_0x22d08b in _0x29627c) {
          if (_0x2c8e4f(_0x29627c, _0x22d08b)) {
            delete _0x29627c[_0x22d08b];
          }
        }
      } else {
        return _0x43a054.set(_0x53635, _0x361992, null);
      }
    };
    _0x43a054.push = function (_0x22a9dd, _0x308b67) {
      var _0x35b758 = _0x43a054.get(_0x22a9dd, _0x308b67);
      if (!_0x5c4b3c(_0x35b758)) {
        _0x35b758 = [];
        _0x43a054.set(_0x22a9dd, _0x308b67, _0x35b758);
      }
      _0x35b758.push.apply(_0x35b758, Array.prototype.slice.call(arguments, 2));
    };
    _0x43a054.coalesce = function (_0x214573, _0x497682, _0xe619fa) {
      var _0x48a882;
      for (var _0x32446f = 0, _0x558483 = _0x497682.length; _0x32446f < _0x558483; _0x32446f++) {
        if ((_0x48a882 = _0x43a054.get(_0x214573, _0x497682[_0x32446f])) !== undefined) {
          return _0x48a882;
        }
      }
      return _0xe619fa;
    };
    _0x43a054.get = function (_0x3cddce, _0x560303, _0x1dcbe1) {
      if (typeof _0x560303 === "number") {
        _0x560303 = [_0x560303];
      }
      if (!_0x560303 || _0x560303.length === 0) {
        return _0x3cddce;
      }
      if (_0x3cddce == null) {
        return _0x1dcbe1;
      }
      if (typeof _0x560303 === "string") {
        return _0x43a054.get(_0x3cddce, _0x560303.split("."), _0x1dcbe1);
      }
      var _0xd98531 = _0x446914(_0x560303[0]);
      var _0x50e737 = _0x261d8d(_0x3cddce, _0xd98531);
      if (_0x50e737 === undefined) {
        return _0x1dcbe1;
      }
      if (_0x560303.length === 1) {
        return _0x50e737;
      }
      return _0x43a054.get(_0x3cddce[_0xd98531], _0x560303.slice(1), _0x1dcbe1);
    };
    _0x43a054.del = function _0x2da9ba(_0x254507, _0x2db162) {
      if (typeof _0x2db162 === "number") {
        _0x2db162 = [_0x2db162];
      }
      if (_0x254507 == null) {
        return _0x254507;
      }
      if (_0x1227f5(_0x2db162)) {
        return _0x254507;
      }
      if (typeof _0x2db162 === "string") {
        return _0x43a054.del(_0x254507, _0x2db162.split("."));
      }
      var _0x580e94 = _0x446914(_0x2db162[0]);
      _0x261d8d(_0x254507, _0x580e94);
      if (!_0x2c8e4f(_0x254507, _0x580e94)) {
        return _0x254507;
      }
      if (_0x2db162.length === 1) {
        if (_0x5c4b3c(_0x254507)) {
          _0x254507.splice(_0x580e94, 1);
        } else {
          delete _0x254507[_0x580e94];
        }
      } else {
        return _0x43a054.del(_0x254507[_0x580e94], _0x2db162.slice(1));
      }
      return _0x254507;
    };
    return _0x43a054;
  }
  var _0x4df0e5 = _0x5df55e();
  _0x4df0e5.create = _0x5df55e;
  _0x4df0e5.withInheritedProps = _0x5df55e({
    includeInheritedProps: true
  });
  return _0x4df0e5;
});