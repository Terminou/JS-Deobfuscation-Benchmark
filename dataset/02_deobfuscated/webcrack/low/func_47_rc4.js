'use strict';

function isInteger(_0x14f4a7) {
  return parseInt(_0x14f4a7, 10) === _0x14f4a7;
}
function createRC4(_0x2adb44) {
  function _0x39a417() {
    var _0x83f40f = new Array(_0x2adb44);
    for (var _0x5e5545 = 0; _0x5e5545 < _0x2adb44; _0x5e5545++) {
      _0x83f40f[_0x5e5545] = _0x5e5545;
    }
    return _0x83f40f;
  }
  function _0x1bcfa6(_0x1a3c4d) {
    if (_0x1a3c4d === undefined) {
      _0x1a3c4d = new Array(_0x2adb44);
      for (var _0x44e250 = 0; _0x44e250 < _0x2adb44; _0x44e250++) {
        _0x1a3c4d[_0x44e250] = Math.floor(Math.random() * _0x2adb44);
      }
    } else if (typeof _0x1a3c4d === "string") {
      _0x1a3c4d = "" + _0x1a3c4d;
      _0x1a3c4d = _0x1a3c4d.split("").map(function (_0x3f77be) {
        return _0x3f77be.charCodeAt(0) % _0x2adb44;
      });
    } else if (Array.isArray(_0x1a3c4d)) {
      if (!_0x1a3c4d.every(function (_0x20f8fc) {
        return typeof _0x20f8fc === "number" && _0x20f8fc === (_0x20f8fc | 0);
      })) {
        throw new TypeError("invalid seed key specified: not array of integers");
      }
    } else {
      throw new TypeError("invalid seed key specified");
    }
    var _0x101280 = _0x1a3c4d.length;
    var _0x2df51b = _0x39a417();
    var _0x433ac5 = 0;
    for (var _0x47aa08 = 0; _0x47aa08 < _0x2adb44; _0x47aa08++) {
      _0x433ac5 = (_0x433ac5 + _0x2df51b[_0x47aa08] + _0x1a3c4d[_0x47aa08 % _0x101280]) % _0x2adb44;
      var _0x25a62c = _0x2df51b[_0x47aa08];
      _0x2df51b[_0x47aa08] = _0x2df51b[_0x433ac5];
      _0x2df51b[_0x433ac5] = _0x25a62c;
    }
    return _0x2df51b;
  }
  function _0xa42cba(_0x296ece) {
    this.s = _0x1bcfa6(_0x296ece);
    this.i = 0;
    this.j = 0;
  }
  _0xa42cba.prototype.randomNative = function () {
    this.i = (this.i + 1) % _0x2adb44;
    this.j = (this.j + this.s[this.i]) % _0x2adb44;
    var _0x2b91da = this.s[this.i];
    this.s[this.i] = this.s[this.j];
    this.s[this.j] = _0x2b91da;
    var _0x2bb1e9 = this.s[(this.s[this.i] + this.s[this.j]) % _0x2adb44];
    return _0x2bb1e9;
  };
  _0xa42cba.prototype.randomUInt32 = function () {
    var _0x59a79a = this.randomByte();
    var _0x128f59 = this.randomByte();
    var _0x2e4325 = this.randomByte();
    var _0x3919d7 = this.randomByte();
    return ((_0x59a79a * 256 + _0x128f59) * 256 + _0x2e4325) * 256 + _0x3919d7;
  };
  _0xa42cba.prototype.randomFloat = function () {
    return this.randomUInt32() / 4294967296;
  };
  _0xa42cba.prototype.random = function () {
    var _0x3efd6c;
    var _0xa38505;
    if (arguments.length === 1) {
      _0x3efd6c = 0;
      _0xa38505 = arguments[0];
    } else if (arguments.length === 2) {
      _0x3efd6c = arguments[0];
      _0xa38505 = arguments[1];
    } else {
      throw new TypeError("random takes one or two integer arguments");
    }
    if (!isInteger(_0x3efd6c) || !isInteger(_0xa38505)) {
      throw new TypeError("random takes one or two integer arguments");
    }
    return _0x3efd6c + this.randomUInt32() % (_0xa38505 - _0x3efd6c + 1);
  };
  _0xa42cba.prototype.currentState = function () {
    return {
      i: this.i,
      j: this.j,
      s: this.s.slice()
    };
  };
  _0xa42cba.prototype.setState = function (_0x2e5fd6) {
    var _0xea5cdb = _0x2e5fd6.s;
    var _0x55c6b1 = _0x2e5fd6.i;
    var _0x41f48c = _0x2e5fd6.j;
    if (_0x55c6b1 !== (_0x55c6b1 | 0) || !(_0x55c6b1 >= 0) || !(_0x55c6b1 < _0x2adb44)) {
      throw new Error("state.i should be integer [0, " + (_0x2adb44 - 1) + "]");
    }
    if (_0x41f48c !== (_0x41f48c | 0) || !(_0x41f48c >= 0) || !(_0x41f48c < _0x2adb44)) {
      throw new Error("state.j should be integer [0, " + (_0x2adb44 - 1) + "]");
    }
    if (!Array.isArray(_0xea5cdb) || _0xea5cdb.length !== _0x2adb44) {
      throw new Error("state should be array of length " + _0x2adb44);
    }
    for (var _0x24b9ee = 0; _0x24b9ee < _0x2adb44; _0x24b9ee++) {
      if (_0xea5cdb.indexOf(_0x24b9ee) === -1) {
        throw new Error("state should be permutation of 0.." + (_0x2adb44 - 1) + ": " + _0x24b9ee + " is missing");
      }
    }
    this.i = _0x55c6b1;
    this.j = _0x41f48c;
    this.s = _0xea5cdb.slice();
  };
  return _0xa42cba;
}
var RC4 = createRC4(256);
RC4.prototype.randomByte = RC4.prototype.randomNative;
var RC4small = createRC4(16);
RC4small.prototype.randomByte = function () {
  var _0x2e8bf9 = this.randomNative();
  var _0x31de7f = this.randomNative();
  return _0x2e8bf9 * 16 + _0x31de7f;
};
var ordA = "a".charCodeAt(0);
var ord0 = "0".charCodeAt(0);
function toHex(_0x416dbf) {
  if (_0x416dbf < 10) {
    return String.fromCharCode(ord0 + _0x416dbf);
  } else {
    return String.fromCharCode(ordA + _0x416dbf - 10);
  }
}
function fromHex(_0x433825) {
  return parseInt(_0x433825, 16);
}
RC4small.prototype.currentStateString = function () {
  var _0x557662 = this.currentState();
  var _0x3b3f93 = toHex(_0x557662.i);
  var _0x10863f = toHex(_0x557662.j);
  var _0x22c96d = _0x3b3f93 + _0x10863f + _0x557662.s.map(toHex).join("");
  return _0x22c96d;
};
RC4small.prototype.setStateString = function (_0x5641aa) {
  if (!_0x5641aa.match(/^[0-9a-f]{18}$/)) {
    throw new TypeError("RC4small stateString should be 18 hex character string");
  }
  var _0x51f2ae = fromHex(_0x5641aa[0]);
  var _0x230941 = fromHex(_0x5641aa[1]);
  var _0x326887 = _0x5641aa.split("").slice(2).map(fromHex);
  this.setState({
    i: _0x51f2ae,
    j: _0x230941,
    s: _0x326887
  });
};
RC4.RC4small = RC4small;
module.exports = RC4;