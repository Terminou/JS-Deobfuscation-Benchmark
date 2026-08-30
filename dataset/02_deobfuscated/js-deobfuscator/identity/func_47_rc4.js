"use strict";
function createRC4(_0x31f75e) {
  function _0xb5df02() {
    var _0x332a36 = new Array(_0x31f75e);
    for (var _0xdde813 = 0; _0xdde813 < _0x31f75e; _0xdde813++) {
      _0x332a36[_0xdde813] = _0xdde813;
    }
    return _0x332a36;
  }
  function _0x1d2372(_0x4dc29c) {
    if (_0x4dc29c === undefined) {
      _0x4dc29c = new Array(_0x31f75e);
      for (var _0x3d4f74 = 0; _0x3d4f74 < _0x31f75e; _0x3d4f74++) {
        _0x4dc29c[_0x3d4f74] = Math.floor(Math.random() * _0x31f75e);
      }
    } else if (typeof _0x4dc29c === "string") {
      _0x4dc29c = "" + _0x4dc29c;
      _0x4dc29c = _0x4dc29c.split("").map(function (_0xa42cba) {
        return _0xa42cba.charCodeAt(0) % _0x31f75e;
      });
    } else if (Array.isArray(_0x4dc29c)) {
      if (!_0x4dc29c.every(function (_0x83f40f) {
        return typeof _0x83f40f === "number" && _0x83f40f === (_0x83f40f | 0);
      })) {
        throw new TypeError("invalid seed key specified: not array of integers");
      }
    } else {
      throw new TypeError("invalid seed key specified");
    }
    var _0x3b25f9 = _0x4dc29c.length;
    var _0x14f4a7 = _0xb5df02();
    var _0x2adb44 = 0;
    for (var _0x39a417 = 0; _0x39a417 < _0x31f75e; _0x39a417++) {
      _0x2adb44 = (_0x2adb44 + _0x14f4a7[_0x39a417] + _0x4dc29c[_0x39a417 % _0x3b25f9]) % _0x31f75e;
      var _0x1bcfa6 = _0x14f4a7[_0x39a417];
      _0x14f4a7[_0x39a417] = _0x14f4a7[_0x2adb44];
      _0x14f4a7[_0x2adb44] = _0x1bcfa6;
    }
    return _0x14f4a7;
  }
  function _0x388c25(_0x5e5545) {
    this.s = _0x1d2372(_0x5e5545);
    this.i = 0;
    this.j = 0;
  }
  _0x388c25.prototype.randomNative = function () {
    this.i = (this.i + 1) % _0x31f75e;
    this.j = (this.j + this.s[this.i]) % _0x31f75e;
    var _0x1a3c4d = this.s[this.i];
    this.s[this.i] = this.s[this.j];
    this.s[this.j] = _0x1a3c4d;
    var _0x44e250 = this.s[(this.s[this.i] + this.s[this.j]) % _0x31f75e];
    return _0x44e250;
  };
  _0x388c25.prototype.randomUInt32 = function () {
    var _0x101280 = this.randomByte();
    var _0x2df51b = this.randomByte();
    var _0x433ac5 = this.randomByte();
    var _0x47aa08 = this.randomByte();
    return ((_0x101280 * 256 + _0x2df51b) * 256 + _0x433ac5) * 256 + _0x47aa08;
  };
  _0x388c25.prototype.randomFloat = function () {
    return this.randomUInt32() / 4294967296;
  };
  _0x388c25.prototype.random = function () {
    var _0x25a62c;
    var _0x3f77be;
    if (arguments.length === 1) {
      _0x25a62c = 0;
      _0x3f77be = arguments[0];
    } else if (arguments.length === 2) {
      _0x25a62c = arguments[0];
      _0x3f77be = arguments[1];
    } else {
      throw new TypeError("random takes one or two integer arguments");
    }
    if (!(parseInt(_0x25a62c, 10) === _0x25a62c) || !(parseInt(_0x3f77be, 10) === _0x3f77be)) {
      throw new TypeError("random takes one or two integer arguments");
    }
    return _0x25a62c + this.randomUInt32() % (_0x3f77be - _0x25a62c + 1);
  };
  _0x388c25.prototype.currentState = function () {
    return {i: this.i, j: this.j, s: this.s.slice()};
  };
  _0x388c25.prototype.setState = function (_0x20f8fc) {
    var _0x296ece = _0x20f8fc.s;
    var _0x2b91da = _0x20f8fc.i;
    var _0x2bb1e9 = _0x20f8fc.j;
    if (!(_0x2b91da === (_0x2b91da | 0) && 0 <= _0x2b91da && _0x2b91da < _0x31f75e)) {
      throw new Error("state.i should be integer [0, " + (_0x31f75e - 1) + "]");
    }
    if (!(_0x2bb1e9 === (_0x2bb1e9 | 0) && 0 <= _0x2bb1e9 && _0x2bb1e9 < _0x31f75e)) {
      throw new Error("state.j should be integer [0, " + (_0x31f75e - 1) + "]");
    }
    if (!Array.isArray(_0x296ece) || _0x296ece.length !== _0x31f75e) {
      throw new Error("state should be array of length " + _0x31f75e);
    }
    for (var _0x59a79a = 0; _0x59a79a < _0x31f75e; _0x59a79a++) {
      if (_0x296ece.indexOf(_0x59a79a) === -1) {
        throw new Error("state should be permutation of 0.." + (_0x31f75e - 1) + ": " + _0x59a79a + " is missing");
      }
    }
    this.i = _0x2b91da;
    this.j = _0x2bb1e9;
    this.s = _0x296ece.slice();
  };
  return _0x388c25;
}
var RC4 = createRC4(256);
RC4.prototype.randomByte = RC4.prototype.randomNative;
var RC4small = createRC4(16);
RC4small.prototype.randomByte = function () {
  var _0x128f59 = this.randomNative();
  var _0x2e4325 = this.randomNative();
  return _0x128f59 * 16 + _0x2e4325;
};
var ordA = "a".charCodeAt(0);
var ord0 = "0".charCodeAt(0);
function toHex(_0x3919d7) {
  return _0x3919d7 < 10 ? String.fromCharCode(ord0 + _0x3919d7) : String.fromCharCode(ordA + _0x3919d7 - 10);
}
RC4small.prototype.currentStateString = function () {
  var _0xa38505 = this.currentState();
  var _0x2e5fd6 = toHex(_0xa38505.i);
  var _0xea5cdb = toHex(_0xa38505.j);
  var _0x55c6b1 = _0x2e5fd6 + _0xea5cdb + _0xa38505.s.map(toHex).join("");
  return _0x55c6b1;
};
RC4small.prototype.setStateString = function (_0x41f48c) {
  if (!_0x41f48c.match(/^[0-9a-f]{18}$/)) {
    throw new TypeError("RC4small stateString should be 18 hex character string");
  }
  var _0x24b9ee = parseInt(_0x41f48c[0], 16);
  var _0x2e8bf9 = parseInt(_0x41f48c[1], 16);
  var _0x31de7f = _0x41f48c.split("").slice(2).map(fromHex);
  this.setState({i: _0x24b9ee, j: _0x2e8bf9, s: _0x31de7f});
};
RC4.RC4small = RC4small;
module.exports = RC4;
