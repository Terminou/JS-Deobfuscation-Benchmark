(function (_0x2d6718, _0x42a49f) {
  'use strict';

  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = _0x42a49f();
  } else if (typeof define === "function" && define.amd) {
    define([], _0x42a49f);
  } else {
    _0x2d6718.objectPath = _0x42a49f();
  }
})(this, function () {
  'use strict';

  var _0x57bfd2 = Object.prototype.toString;
  function _0x56d0f2(_0x298808, _0x182b52) {
    if (_0x298808 == null) {
      return false;
    }
    return Object.prototype.hasOwnProperty.call(_0x298808, _0x182b52);
  }
  function _0x569e16(_0x1abe57) {
    if (!_0x1abe57) {
      return true;
    }
    if (_0x4cf572(_0x1abe57) && _0x1abe57.length === 0) {
      return true;
    } else if (typeof _0x1abe57 !== "string") {
      for (var _0x130152 in _0x1abe57) {
        if (_0x56d0f2(_0x1abe57, _0x130152)) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  function _0x5957af(_0x45f15) {
    return _0x57bfd2.call(_0x45f15);
  }
  function _0x54e0e6(_0x4beaf5) {
    return typeof _0x4beaf5 === "object" && _0x5957af(_0x4beaf5) === "[object Object]";
  }
  var _0x4cf572 = Array.isArray || function (_0x1d6547) {
    return _0x57bfd2.call(_0x1d6547) === "[object Array]";
  };
  function _0x421898(_0x527b98) {
    return typeof _0x527b98 === "boolean" || _0x5957af(_0x527b98) === "[object Boolean]";
  }
  function _0x247ed0(_0x36fe03) {
    var _0xdfb686 = parseInt(_0x36fe03);
    if (_0xdfb686.toString() === _0x36fe03) {
      return _0xdfb686;
    }
    return _0x36fe03;
  }
  function _0x2eebd2(_0x49ad7f) {
    _0x49ad7f = _0x49ad7f || {};
    function _0x13a2c5(_0x53082d) {
      return Object.keys(_0x13a2c5).reduce(function (_0x26d580, _0x9eeedb) {
        if (_0x9eeedb === "create") {
          return _0x26d580;
        }
        if (typeof _0x13a2c5[_0x9eeedb] === "function") {
          _0x26d580[_0x9eeedb] = _0x13a2c5[_0x9eeedb].bind(_0x13a2c5, _0x53082d);
        }
        return _0x26d580;
      }, {});
    }
    var _0xbaeab7;
    if (_0x49ad7f.includeInheritedProps) {
      _0xbaeab7 = function () {
        return true;
      };
    } else {
      _0xbaeab7 = function (_0x5c93ad, _0x2a01e5) {
        return typeof _0x2a01e5 === "number" && Array.isArray(_0x5c93ad) || _0x56d0f2(_0x5c93ad, _0x2a01e5);
      };
    }
    function _0x53cce6(_0x12ac44, _0x49198d) {
      if (_0xbaeab7(_0x12ac44, _0x49198d)) {
        return _0x12ac44[_0x49198d];
      }
    }
    var _0xb46d85;
    if (_0x49ad7f.includeInheritedProps) {
      _0xb46d85 = function (_0x1e14f2, _0x22fca4) {
        if (typeof _0x22fca4 !== "string" && typeof _0x22fca4 !== "number") {
          _0x22fca4 = String(_0x22fca4);
        }
        var _0xe314b3 = _0x53cce6(_0x1e14f2, _0x22fca4);
        if (_0x22fca4 === "__proto__" || _0x22fca4 === "prototype" || _0x22fca4 === "constructor" && typeof _0xe314b3 === "function") {
          throw new Error("For security reasons, object's magic properties cannot be set");
        }
        return _0xe314b3;
      };
    } else {
      _0xb46d85 = function (_0x463019, _0x12ffa6) {
        return _0x53cce6(_0x463019, _0x12ffa6);
      };
    }
    function _0x3d9bd9(_0x3c7a84, _0x1b6a89, _0x531bd1, _0x512436) {
      if (typeof _0x1b6a89 === "number") {
        _0x1b6a89 = [_0x1b6a89];
      }
      if (!_0x1b6a89 || _0x1b6a89.length === 0) {
        return _0x3c7a84;
      }
      if (typeof _0x1b6a89 === "string") {
        return _0x3d9bd9(_0x3c7a84, _0x1b6a89.split(".").map(_0x247ed0), _0x531bd1, _0x512436);
      }
      var _0x2e3b86 = _0x1b6a89[0];
      var _0x19f55e = _0xb46d85(_0x3c7a84, _0x2e3b86);
      if (_0x1b6a89.length === 1) {
        if (_0x19f55e === undefined || !_0x512436) {
          _0x3c7a84[_0x2e3b86] = _0x531bd1;
        }
        return _0x19f55e;
      }
      if (_0x19f55e === undefined) {
        if (typeof _0x1b6a89[1] === "number") {
          _0x3c7a84[_0x2e3b86] = [];
        } else {
          _0x3c7a84[_0x2e3b86] = {};
        }
      }
      return _0x3d9bd9(_0x3c7a84[_0x2e3b86], _0x1b6a89.slice(1), _0x531bd1, _0x512436);
    }
    _0x13a2c5.has = function (_0x9fb10d, _0xe4fc48) {
      if (typeof _0xe4fc48 === "number") {
        _0xe4fc48 = [_0xe4fc48];
      } else if (typeof _0xe4fc48 === "string") {
        _0xe4fc48 = _0xe4fc48.split(".");
      }
      if (!_0xe4fc48 || _0xe4fc48.length === 0) {
        return !!_0x9fb10d;
      }
      for (var _0x494282 = 0; _0x494282 < _0xe4fc48.length; _0x494282++) {
        var _0x163ca7 = _0x247ed0(_0xe4fc48[_0x494282]);
        if (typeof _0x163ca7 === "number" && _0x4cf572(_0x9fb10d) && _0x163ca7 < _0x9fb10d.length || (_0x49ad7f.includeInheritedProps ? _0x163ca7 in Object(_0x9fb10d) : _0x56d0f2(_0x9fb10d, _0x163ca7))) {
          _0x9fb10d = _0x9fb10d[_0x163ca7];
        } else {
          return false;
        }
      }
      return true;
    };
    _0x13a2c5.ensureExists = function (_0x930b63, _0x438f57, _0x352d93) {
      return _0x3d9bd9(_0x930b63, _0x438f57, _0x352d93, true);
    };
    _0x13a2c5.set = function (_0x1e616d, _0x54470b, _0x1b9a8a, _0x255038) {
      return _0x3d9bd9(_0x1e616d, _0x54470b, _0x1b9a8a, _0x255038);
    };
    _0x13a2c5.insert = function (_0x145cc9, _0x3a05cc, _0x48ddb3, _0x324b7d) {
      var _0x5001ef = _0x13a2c5.get(_0x145cc9, _0x3a05cc);
      _0x324b7d = ~~_0x324b7d;
      if (!_0x4cf572(_0x5001ef)) {
        _0x5001ef = [];
        _0x13a2c5.set(_0x145cc9, _0x3a05cc, _0x5001ef);
      }
      _0x5001ef.splice(_0x324b7d, 0, _0x48ddb3);
    };
    _0x13a2c5.empty = function (_0x6a3d88, _0x27e729) {
      if (_0x569e16(_0x27e729)) {
        return undefined;
      }
      if (_0x6a3d88 == null) {
        return undefined;
      }
      var _0x56d5ac;
      var _0x4cefc4;
      if (!(_0x56d5ac = _0x13a2c5.get(_0x6a3d88, _0x27e729))) {
        return undefined;
      }
      if (typeof _0x56d5ac === "string") {
        return _0x13a2c5.set(_0x6a3d88, _0x27e729, "");
      } else if (_0x421898(_0x56d5ac)) {
        return _0x13a2c5.set(_0x6a3d88, _0x27e729, false);
      } else if (typeof _0x56d5ac === "number") {
        return _0x13a2c5.set(_0x6a3d88, _0x27e729, 0);
      } else if (_0x4cf572(_0x56d5ac)) {
        _0x56d5ac.length = 0;
      } else if (_0x54e0e6(_0x56d5ac)) {
        for (_0x4cefc4 in _0x56d5ac) {
          if (_0xbaeab7(_0x56d5ac, _0x4cefc4)) {
            delete _0x56d5ac[_0x4cefc4];
          }
        }
      } else {
        return _0x13a2c5.set(_0x6a3d88, _0x27e729, null);
      }
    };
    _0x13a2c5.push = function (_0x5b0b0f, _0x56de2d) {
      var _0x16215f = _0x13a2c5.get(_0x5b0b0f, _0x56de2d);
      if (!_0x4cf572(_0x16215f)) {
        _0x16215f = [];
        _0x13a2c5.set(_0x5b0b0f, _0x56de2d, _0x16215f);
      }
      _0x16215f.push.apply(_0x16215f, Array.prototype.slice.call(arguments, 2));
    };
    _0x13a2c5.coalesce = function (_0x5be065, _0x3c620a, _0x2a8288) {
      var _0x412a97;
      for (var _0x29b9ab = 0, _0x212f06 = _0x3c620a.length; _0x29b9ab < _0x212f06; _0x29b9ab++) {
        if ((_0x412a97 = _0x13a2c5.get(_0x5be065, _0x3c620a[_0x29b9ab])) !== undefined) {
          return _0x412a97;
        }
      }
      return _0x2a8288;
    };
    _0x13a2c5.get = function (_0xc0daea, _0x283e98, _0x2ffd03) {
      if (typeof _0x283e98 === "number") {
        _0x283e98 = [_0x283e98];
      }
      if (!_0x283e98 || _0x283e98.length === 0) {
        return _0xc0daea;
      }
      if (_0xc0daea == null) {
        return _0x2ffd03;
      }
      if (typeof _0x283e98 === "string") {
        return _0x13a2c5.get(_0xc0daea, _0x283e98.split("."), _0x2ffd03);
      }
      var _0xdef621 = _0x247ed0(_0x283e98[0]);
      var _0x3b135a = _0xb46d85(_0xc0daea, _0xdef621);
      if (_0x3b135a === undefined) {
        return _0x2ffd03;
      }
      if (_0x283e98.length === 1) {
        return _0x3b135a;
      }
      return _0x13a2c5.get(_0xc0daea[_0xdef621], _0x283e98.slice(1), _0x2ffd03);
    };
    _0x13a2c5.del = function _0xa2db8c(_0xdebc9, _0x4d0a25) {
      if (typeof _0x4d0a25 === "number") {
        _0x4d0a25 = [_0x4d0a25];
      }
      if (_0xdebc9 == null) {
        return _0xdebc9;
      }
      if (_0x569e16(_0x4d0a25)) {
        return _0xdebc9;
      }
      if (typeof _0x4d0a25 === "string") {
        return _0x13a2c5.del(_0xdebc9, _0x4d0a25.split("."));
      }
      var _0x38252 = _0x247ed0(_0x4d0a25[0]);
      _0xb46d85(_0xdebc9, _0x38252);
      if (!_0xbaeab7(_0xdebc9, _0x38252)) {
        return _0xdebc9;
      }
      if (_0x4d0a25.length === 1) {
        if (_0x4cf572(_0xdebc9)) {
          _0xdebc9.splice(_0x38252, 1);
        } else {
          delete _0xdebc9[_0x38252];
        }
      } else {
        return _0x13a2c5.del(_0xdebc9[_0x38252], _0x4d0a25.slice(1));
      }
      return _0xdebc9;
    };
    return _0x13a2c5;
  }
  var _0x711da6 = _0x2eebd2();
  _0x711da6.create = _0x2eebd2;
  _0x711da6.withInheritedProps = _0x2eebd2({
    includeInheritedProps: true
  });
  return _0x711da6;
});