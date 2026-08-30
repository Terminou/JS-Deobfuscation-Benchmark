'use strict';

function isInteger(_0x3fca73) {
  return parseInt(_0x3fca73, 10) === _0x3fca73;
}
function createRC4(_0xa68edd) {
  function _0x2b23d3() {
    var _0x360ca0 = new Array(_0xa68edd);
    for (var _0x568f67 = 0; _0x568f67 < _0xa68edd; _0x568f67++) {
      _0x360ca0[_0x568f67] = _0x568f67;
    }
    return _0x360ca0;
  }
  function _0xf45308(_0x27d82b) {
    if (_0x27d82b === undefined) {
      _0x27d82b = new Array(_0xa68edd);
      for (var _0x3a379b = 0; _0x3a379b < _0xa68edd; _0x3a379b++) {
        _0x27d82b[_0x3a379b] = Math.floor(Math.random() * _0xa68edd);
      }
    } else if (typeof _0x27d82b === "string") {
      _0x27d82b = "" + _0x27d82b;
      _0x27d82b = _0x27d82b.split("").map(function (_0x521a30) {
        return _0x521a30.charCodeAt(0) % _0xa68edd;
      });
    } else if (Array.isArray(_0x27d82b)) {
      if (!_0x27d82b.every(function (_0xce029f) {
        return typeof _0xce029f === "number" && _0xce029f === (_0xce029f | 0);
      })) {
        throw new TypeError("invalid seed key specified: not array of integers");
      }
    } else {
      throw new TypeError("invalid seed key specified");
    }
    var _0x2cc4dc = _0x27d82b.length;
    var _0x5b250e = _0x2b23d3();
    var _0x38fc60 = 0;
    for (var _0x47138f = 0; _0x47138f < _0xa68edd; _0x47138f++) {
      _0x38fc60 = (_0x38fc60 + _0x5b250e[_0x47138f] + _0x27d82b[_0x47138f % _0x2cc4dc]) % _0xa68edd;
      var _0x4f21b3 = _0x5b250e[_0x47138f];
      _0x5b250e[_0x47138f] = _0x5b250e[_0x38fc60];
      _0x5b250e[_0x38fc60] = _0x4f21b3;
    }
    return _0x5b250e;
  }
  function _0x58250d(_0x5537fe) {
    this.s = _0xf45308(_0x5537fe);
    this.i = 0;
    this.j = 0;
  }
  _0x58250d.prototype.randomNative = function () {
    this.i = (this.i + 1) % _0xa68edd;
    this.j = (this.j + this.s[this.i]) % _0xa68edd;
    var _0x2151db = this.s[this.i];
    this.s[this.i] = this.s[this.j];
    this.s[this.j] = _0x2151db;
    var _0x5405dd = this.s[(this.s[this.i] + this.s[this.j]) % _0xa68edd];
    return _0x5405dd;
  };
  _0x58250d.prototype.randomUInt32 = function () {
    var _0x1f6864 = this.randomByte();
    var _0x3687bd = this.randomByte();
    var _0x576be6 = this.randomByte();
    var _0x28557a = this.randomByte();
    return ((_0x1f6864 * 256 + _0x3687bd) * 256 + _0x576be6) * 256 + _0x28557a;
  };
  _0x58250d.prototype.randomFloat = function () {
    return this.randomUInt32() / 4294967296;
  };
  _0x58250d.prototype.random = function () {
    var _0x40d728;
    var _0x498dfc;
    if (arguments.length === 1) {
      _0x40d728 = 0;
      _0x498dfc = arguments[0];
    } else if (arguments.length === 2) {
      _0x40d728 = arguments[0];
      _0x498dfc = arguments[1];
    } else {
      throw new TypeError("random takes one or two integer arguments");
    }
    if (!isInteger(_0x40d728) || !isInteger(_0x498dfc)) {
      throw new TypeError("random takes one or two integer arguments");
    }
    return _0x40d728 + this.randomUInt32() % (_0x498dfc - _0x40d728 + 1);
  };
  _0x58250d.prototype.currentState = function () {
    return {
      i: this.i,
      j: this.j,
      s: this.s.slice()
    };
  };
  _0x58250d.prototype.setState = function (_0x2a3a5e) {
    var _0x4540e1 = _0x2a3a5e.s;
    var _0x40175b = _0x2a3a5e.i;
    var _0x4757f3 = _0x2a3a5e.j;
    if (_0x40175b !== (_0x40175b | 0) || !(_0x40175b >= 0) || !(_0x40175b < _0xa68edd)) {
      throw new Error("state.i should be integer [0, " + (_0xa68edd - 1) + "]");
    }
    if (_0x4757f3 !== (_0x4757f3 | 0) || !(_0x4757f3 >= 0) || !(_0x4757f3 < _0xa68edd)) {
      throw new Error("state.j should be integer [0, " + (_0xa68edd - 1) + "]");
    }
    if (!Array.isArray(_0x4540e1) || _0x4540e1.length !== _0xa68edd) {
      throw new Error("state should be array of length " + _0xa68edd);
    }
    for (var _0x246a50 = 0; _0x246a50 < _0xa68edd; _0x246a50++) {
      if (_0x4540e1.indexOf(_0x246a50) === -1) {
        throw new Error("state should be permutation of 0.." + (_0xa68edd - 1) + ": " + _0x246a50 + " is missing");
      }
    }
    this.i = _0x40175b;
    this.j = _0x4757f3;
    this.s = _0x4540e1.slice();
  };
  return _0x58250d;
}
var RC4 = createRC4(256);
RC4.prototype.randomByte = RC4.prototype.randomNative;
var RC4small = createRC4(16);
RC4small.prototype.randomByte = function () {
  var _0x5a3e82 = this.randomNative();
  var _0x10c61e = this.randomNative();
  return _0x5a3e82 * 16 + _0x10c61e;
};
var ordA = "a".charCodeAt(0);
var ord0 = "0".charCodeAt(0);
function toHex(_0x8950b) {
  if (_0x8950b < 10) {
    return String.fromCharCode(ord0 + _0x8950b);
  } else {
    return String.fromCharCode(ordA + _0x8950b - 10);
  }
}
function fromHex(_0x183626) {
  return parseInt(_0x183626, 16);
}
RC4small.prototype.currentStateString = function () {
  var _0x422dfd = this.currentState();
  var _0xc17942 = toHex(_0x422dfd.i);
  var _0x1a9077 = toHex(_0x422dfd.j);
  var _0x584b88 = _0xc17942 + _0x1a9077 + _0x422dfd.s.map(toHex).join("");
  return _0x584b88;
};
RC4small.prototype.setStateString = function (_0x56ab02) {
  if (!_0x56ab02.match(/^[0-9a-f]{18}$/)) {
    throw new TypeError("RC4small stateString should be 18 hex character string");
  }
  var _0x463ca3 = fromHex(_0x56ab02[0]);
  var _0x31314a = fromHex(_0x56ab02[1]);
  var _0x20385b = _0x56ab02.split("").slice(2).map(fromHex);
  var _0x1e1fe1 = {
    i: _0x463ca3,
    j: _0x31314a,
    s: _0x20385b
  };
  this.setState(_0x1e1fe1);
};
RC4.RC4small = RC4small;
module.exports = RC4;