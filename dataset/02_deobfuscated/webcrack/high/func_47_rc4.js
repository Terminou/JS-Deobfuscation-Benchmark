'use strict';

function isInteger(_0x116252) {
  return parseInt(_0x116252, 10) === _0x116252;
}
function createRC4(_0x2e81bb) {
  function _0x127b15() {
    var _0x2d64a8 = new Array(_0x2e81bb);
    for (var _0x5c405d = 0; _0x5c405d < _0x2e81bb; _0x5c405d++) {
      _0x2d64a8[_0x5c405d] = _0x5c405d;
    }
    return _0x2d64a8;
  }
  function _0x11a51b(_0x1382aa) {
    if (_0x1382aa === undefined) {
      _0x1382aa = new Array(_0x2e81bb);
      for (var _0x3b2ed0 = 0; _0x3b2ed0 < _0x2e81bb; _0x3b2ed0++) {
        _0x1382aa[_0x3b2ed0] = Math.floor(Math.random() * _0x2e81bb);
      }
    } else if (typeof _0x1382aa === "string") {
      _0x1382aa = "" + _0x1382aa;
      _0x1382aa = _0x1382aa.split("").map(function (_0x45f445) {
        return _0x45f445.charCodeAt(0) % _0x2e81bb;
      });
    } else if (Array.isArray(_0x1382aa)) {
      if (!_0x1382aa.every(function (_0xa546bc) {
        return typeof _0xa546bc === "number" && _0xa546bc === (_0xa546bc | 0);
      })) {
        throw new TypeError("invalid seed key specified: not array of integers");
      }
    } else {
      throw new TypeError("invalid seed key specified");
    }
    var _0x242dc1 = _0x1382aa.length;
    var _0x51b498 = _0x127b15();
    var _0x591075 = 0;
    for (var _0x27ae28 = 0; _0x27ae28 < _0x2e81bb; _0x27ae28++) {
      _0x591075 = (_0x591075 + _0x51b498[_0x27ae28] + _0x1382aa[_0x27ae28 % _0x242dc1]) % _0x2e81bb;
      var _0xc3b99 = _0x51b498[_0x27ae28];
      _0x51b498[_0x27ae28] = _0x51b498[_0x591075];
      _0x51b498[_0x591075] = _0xc3b99;
    }
    return _0x51b498;
  }
  function _0x329bf7(_0x2a7303) {
    this.s = _0x11a51b(_0x2a7303);
    this.i = 0;
    this.j = 0;
  }
  _0x329bf7.prototype.randomNative = function () {
    this.i = (this.i + 1) % _0x2e81bb;
    this.j = (this.j + this.s[this.i]) % _0x2e81bb;
    var _0x531dd5 = this.s[this.i];
    this.s[this.i] = this.s[this.j];
    this.s[this.j] = _0x531dd5;
    var _0x2a14db = this.s[(this.s[this.i] + this.s[this.j]) % _0x2e81bb];
    return _0x2a14db;
  };
  _0x329bf7.prototype.randomUInt32 = function () {
    var _0x146182 = this.randomByte();
    var _0x164bd2 = this.randomByte();
    var _0x5ca4e9 = this.randomByte();
    var _0x51dbb9 = this.randomByte();
    return ((_0x146182 * 256 + _0x164bd2) * 256 + _0x5ca4e9) * 256 + _0x51dbb9;
  };
  _0x329bf7.prototype.randomFloat = function () {
    return this.randomUInt32() / 4294967296;
  };
  _0x329bf7.prototype.random = function () {
    var _0x31eab5;
    var _0x151072;
    if (arguments.length === 1) {
      _0x31eab5 = 0;
      _0x151072 = arguments[0];
    } else if (arguments.length === 2) {
      _0x31eab5 = arguments[0];
      _0x151072 = arguments[1];
    } else {
      throw new TypeError("random takes one or two integer arguments");
    }
    if (!isInteger(_0x31eab5) || !isInteger(_0x151072)) {
      throw new TypeError("random takes one or two integer arguments");
    }
    return _0x31eab5 + this.randomUInt32() % (_0x151072 - _0x31eab5 + 1);
  };
  _0x329bf7.prototype.currentState = function () {
    return {
      i: this.i,
      j: this.j,
      s: this.s.slice()
    };
  };
  _0x329bf7.prototype.setState = function (_0x1c4cd3) {
    var _0x1738f4 = _0x1c4cd3.s;
    var _0x4f6651 = _0x1c4cd3.i;
    var _0x1d951e = _0x1c4cd3.j;
    if (_0x4f6651 !== (_0x4f6651 | 0) || !(_0x4f6651 >= 0) || !(_0x4f6651 < _0x2e81bb)) {
      throw new Error("state.i should be integer [0, " + (_0x2e81bb - 1) + "]");
    }
    if (_0x1d951e !== (_0x1d951e | 0) || !(_0x1d951e >= 0) || !(_0x1d951e < _0x2e81bb)) {
      throw new Error("state.j should be integer [0, " + (_0x2e81bb - 1) + "]");
    }
    if (!Array.isArray(_0x1738f4) || _0x1738f4.length !== _0x2e81bb) {
      throw new Error("state should be array of length " + _0x2e81bb);
    }
    for (var _0x31ae2a = 0; _0x31ae2a < _0x2e81bb; _0x31ae2a++) {
      if (_0x1738f4.indexOf(_0x31ae2a) === -1) {
        throw new Error("state should be permutation of 0.." + (_0x2e81bb - 1) + ": " + _0x31ae2a + " is missing");
      }
    }
    this.i = _0x4f6651;
    this.j = _0x1d951e;
    this.s = _0x1738f4.slice();
  };
  return _0x329bf7;
}
var RC4 = createRC4(256);
RC4.prototype.randomByte = RC4.prototype.randomNative;
var RC4small = createRC4(16);
RC4small.prototype.randomByte = function () {
  var _0x1eb713 = this.randomNative();
  var _0xeb5382 = this.randomNative();
  return _0x1eb713 * 16 + _0xeb5382;
};
var ordA = "a".charCodeAt(0);
var ord0 = "0".charCodeAt(0);
function toHex(_0x27c2e3) {
  if (_0x27c2e3 < 10) {
    return String.fromCharCode(ord0 + _0x27c2e3);
  } else {
    return String.fromCharCode(ordA + _0x27c2e3 - 10);
  }
}
function fromHex(_0x29b7be) {
  return parseInt(_0x29b7be, 16);
}
RC4small.prototype.currentStateString = function () {
  var _0x322765 = this.currentState();
  var _0x5c1e82 = toHex(_0x322765.i);
  var _0x42cfd3 = toHex(_0x322765.j);
  var _0x51734b = _0x5c1e82 + _0x42cfd3 + _0x322765.s.map(toHex).join("");
  return _0x51734b;
};
RC4small.prototype.setStateString = function (_0x427741) {
  if (!_0x427741.match(/^[0-9a-f]{18}$/)) {
    throw new TypeError("RC4small stateString should be 18 hex character string");
  }
  var _0x3088da = fromHex(_0x427741[0]);
  var _0x374d30 = fromHex(_0x427741[1]);
  var _0x2f1050 = _0x427741.split("").slice(2).map(fromHex);
  var _0x381896 = {
    i: _0x3088da,
    j: _0x374d30,
    s: _0x2f1050
  };
  this.setState(_0x381896);
};
RC4.RC4small = RC4small;
module.exports = RC4;