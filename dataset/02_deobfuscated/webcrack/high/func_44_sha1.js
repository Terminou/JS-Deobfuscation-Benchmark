/*
 * [js-sha1]{@link https://github.com/emn178/js-sha1}
 *
 * @version 0.7.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2024
 * @license MIT
 */
(function () {
  'use strict';

  var _0x506fd6 = "input is invalid type";
  var _0x42aaf6 = "finalize already called";
  var _0x2126e7 = typeof window === "object";
  var _0x3ea2a9 = _0x2126e7 ? window : {};
  if (_0x3ea2a9.JS_SHA1_NO_WINDOW) {
    _0x2126e7 = false;
  }
  var _0x2d9eec = !_0x2126e7 && typeof self === "object";
  var _0x4c241a = !_0x3ea2a9.JS_SHA1_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
  if (_0x4c241a) {
    _0x3ea2a9 = global;
  } else if (_0x2d9eec) {
    _0x3ea2a9 = self;
  }
  var _0x3e33b6 = !_0x3ea2a9.JS_SHA1_NO_COMMON_JS && typeof module === "object" && module.exports;
  var _0x281d98 = typeof define === "function" && define.amd;
  var _0x556aac = !_0x3ea2a9.JS_SHA1_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
  var _0x1528ac = "0123456789abcdef".split("");
  var _0x401da1 = [-2147483648, 8388608, 32768, 128];
  var _0x1539d2 = [24, 16, 8, 0];
  var _0x341251 = ["hex", "array", "digest", "arrayBuffer"];
  var _0x4e83d7 = [];
  var _0x23dbda = Array.isArray;
  if (_0x3ea2a9.JS_SHA1_NO_NODE_JS || !_0x23dbda) {
    _0x23dbda = function (_0x5e2c3d) {
      return Object.prototype.toString.call(_0x5e2c3d) === "[object Array]";
    };
  }
  var _0x594d7d = ArrayBuffer.isView;
  if (_0x556aac && (_0x3ea2a9.JS_SHA1_NO_ARRAY_BUFFER_IS_VIEW || !_0x594d7d)) {
    _0x594d7d = function (_0x508c47) {
      return typeof _0x508c47 === "object" && _0x508c47.buffer && _0x508c47.buffer.constructor === ArrayBuffer;
    };
  }
  function _0x5336fe(_0x4ece7b) {
    var _0x4b3b03 = typeof _0x4ece7b;
    if (_0x4b3b03 === "string") {
      return [_0x4ece7b, true];
    }
    if (_0x4b3b03 !== "object" || _0x4ece7b === null) {
      throw new Error(_0x506fd6);
    }
    if (_0x556aac && _0x4ece7b.constructor === ArrayBuffer) {
      return [new Uint8Array(_0x4ece7b), false];
    }
    if (!_0x23dbda(_0x4ece7b) && !_0x594d7d(_0x4ece7b)) {
      throw new Error(_0x506fd6);
    }
    return [_0x4ece7b, false];
  }
  function _0xfafc61(_0x1e0da8) {
    return function (_0x440045) {
      return new _0x565956(true).update(_0x440045)[_0x1e0da8]();
    };
  }
  function _0x18b281() {
    var _0x4f0832 = _0xfafc61("hex");
    if (_0x4c241a) {
      _0x4f0832 = _0x221563(_0x4f0832);
    }
    _0x4f0832.create = function () {
      return new _0x565956();
    };
    _0x4f0832.update = function (_0x46aa0a) {
      return _0x4f0832.create().update(_0x46aa0a);
    };
    for (var _0x3efde1 = 0; _0x3efde1 < _0x341251.length; ++_0x3efde1) {
      var _0x23268e = _0x341251[_0x3efde1];
      _0x4f0832[_0x23268e] = _0xfafc61(_0x23268e);
    }
    return _0x4f0832;
  }
  function _0x221563(_0x3452d1) {
    var _0x5d0c64 = require("crypto");
    var _0x20ae77 = require("buffer").Buffer;
    var _0xd59d0d;
    if (_0x20ae77.from && !_0x3ea2a9.JS_SHA1_NO_BUFFER_FROM) {
      _0xd59d0d = _0x20ae77.from;
    } else {
      _0xd59d0d = function (_0x44d062) {
        return new _0x20ae77(_0x44d062);
      };
    }
    function _0x34029a(_0xfd2229) {
      if (typeof _0xfd2229 === "string") {
        return _0x5d0c64.createHash("sha1").update(_0xfd2229, "utf8").digest("hex");
      } else if (_0xfd2229 === null || _0xfd2229 === undefined) {
        throw new Error(_0x506fd6);
      } else if (_0xfd2229.constructor === ArrayBuffer) {
        _0xfd2229 = new Uint8Array(_0xfd2229);
      }
      if (_0x23dbda(_0xfd2229) || _0x594d7d(_0xfd2229) || _0xfd2229.constructor === _0x20ae77) {
        return _0x5d0c64.createHash("sha1").update(_0xd59d0d(_0xfd2229)).digest("hex");
      } else {
        return _0x3452d1(_0xfd2229);
      }
    }
    return _0x34029a;
  }
  function _0x184872(_0x412d4e) {
    return function (_0xc0eb09, _0x5e3775) {
      return new _0x386c42(_0xc0eb09, true).update(_0x5e3775)[_0x412d4e]();
    };
  }
  function _0x5c23b3() {
    var _0x4f671a = _0x184872("hex");
    _0x4f671a.create = function (_0x1c9ffa) {
      return new _0x386c42(_0x1c9ffa);
    };
    _0x4f671a.update = function (_0x363eda, _0x54055a) {
      return _0x4f671a.create(_0x363eda).update(_0x54055a);
    };
    for (var _0x2643eb = 0; _0x2643eb < _0x341251.length; ++_0x2643eb) {
      var _0x5e5d90 = _0x341251[_0x2643eb];
      _0x4f671a[_0x5e5d90] = _0x184872(_0x5e5d90);
    }
    return _0x4f671a;
  }
  function _0x565956(_0x16409e) {
    if (_0x16409e) {
      _0x4e83d7[0] = _0x4e83d7[16] = _0x4e83d7[1] = _0x4e83d7[2] = _0x4e83d7[3] = _0x4e83d7[4] = _0x4e83d7[5] = _0x4e83d7[6] = _0x4e83d7[7] = _0x4e83d7[8] = _0x4e83d7[9] = _0x4e83d7[10] = _0x4e83d7[11] = _0x4e83d7[12] = _0x4e83d7[13] = _0x4e83d7[14] = _0x4e83d7[15] = 0;
      this.blocks = _0x4e83d7;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    this.h0 = 1732584193;
    this.h1 = 4023233417;
    this.h2 = 2562383102;
    this.h3 = 271733878;
    this.h4 = 3285377520;
    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }
  _0x565956.prototype.update = function (_0xbd50bf) {
    if (this.finalized) {
      throw new Error(_0x42aaf6);
    }
    var _0xd3462e = _0x5336fe(_0xbd50bf);
    _0xbd50bf = _0xd3462e[0];
    var _0x242e99 = _0xd3462e[1];
    var _0x49be18;
    var _0x5ad13e = 0;
    var _0x3e2da3;
    var _0x19086f = _0xbd50bf.length || 0;
    var _0x41e64b = this.blocks;
    while (_0x5ad13e < _0x19086f) {
      if (this.hashed) {
        this.hashed = false;
        _0x41e64b[0] = this.block;
        this.block = _0x41e64b[16] = _0x41e64b[1] = _0x41e64b[2] = _0x41e64b[3] = _0x41e64b[4] = _0x41e64b[5] = _0x41e64b[6] = _0x41e64b[7] = _0x41e64b[8] = _0x41e64b[9] = _0x41e64b[10] = _0x41e64b[11] = _0x41e64b[12] = _0x41e64b[13] = _0x41e64b[14] = _0x41e64b[15] = 0;
      }
      if (_0x242e99) {
        for (_0x3e2da3 = this.start; _0x5ad13e < _0x19086f && _0x3e2da3 < 64; ++_0x5ad13e) {
          _0x49be18 = _0xbd50bf.charCodeAt(_0x5ad13e);
          if (_0x49be18 < 128) {
            _0x41e64b[_0x3e2da3 >>> 2] |= _0x49be18 << _0x1539d2[_0x3e2da3++ & 3];
          } else if (_0x49be18 < 2048) {
            _0x41e64b[_0x3e2da3 >>> 2] |= (_0x49be18 >>> 6 | 192) << _0x1539d2[_0x3e2da3++ & 3];
            _0x41e64b[_0x3e2da3 >>> 2] |= (_0x49be18 & 63 | 128) << _0x1539d2[_0x3e2da3++ & 3];
          } else if (_0x49be18 < 55296 || _0x49be18 >= 57344) {
            _0x41e64b[_0x3e2da3 >>> 2] |= (_0x49be18 >>> 12 | 224) << _0x1539d2[_0x3e2da3++ & 3];
            _0x41e64b[_0x3e2da3 >>> 2] |= (_0x49be18 >>> 6 & 63 | 128) << _0x1539d2[_0x3e2da3++ & 3];
            _0x41e64b[_0x3e2da3 >>> 2] |= (_0x49be18 & 63 | 128) << _0x1539d2[_0x3e2da3++ & 3];
          } else {
            _0x49be18 = 65536 + ((_0x49be18 & 1023) << 10 | _0xbd50bf.charCodeAt(++_0x5ad13e) & 1023);
            _0x41e64b[_0x3e2da3 >>> 2] |= (_0x49be18 >>> 18 | 240) << _0x1539d2[_0x3e2da3++ & 3];
            _0x41e64b[_0x3e2da3 >>> 2] |= (_0x49be18 >>> 12 & 63 | 128) << _0x1539d2[_0x3e2da3++ & 3];
            _0x41e64b[_0x3e2da3 >>> 2] |= (_0x49be18 >>> 6 & 63 | 128) << _0x1539d2[_0x3e2da3++ & 3];
            _0x41e64b[_0x3e2da3 >>> 2] |= (_0x49be18 & 63 | 128) << _0x1539d2[_0x3e2da3++ & 3];
          }
        }
      } else {
        for (_0x3e2da3 = this.start; _0x5ad13e < _0x19086f && _0x3e2da3 < 64; ++_0x5ad13e) {
          _0x41e64b[_0x3e2da3 >>> 2] |= _0xbd50bf[_0x5ad13e] << _0x1539d2[_0x3e2da3++ & 3];
        }
      }
      this.lastByteIndex = _0x3e2da3;
      this.bytes += _0x3e2da3 - this.start;
      if (_0x3e2da3 >= 64) {
        this.block = _0x41e64b[16];
        this.start = _0x3e2da3 - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = _0x3e2da3;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };
  _0x565956.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var _0x593b7e = this.blocks;
    var _0x9ad311 = this.lastByteIndex;
    _0x593b7e[16] = this.block;
    _0x593b7e[_0x9ad311 >>> 2] |= _0x401da1[_0x9ad311 & 3];
    this.block = _0x593b7e[16];
    if (_0x9ad311 >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      _0x593b7e[0] = this.block;
      _0x593b7e[16] = _0x593b7e[1] = _0x593b7e[2] = _0x593b7e[3] = _0x593b7e[4] = _0x593b7e[5] = _0x593b7e[6] = _0x593b7e[7] = _0x593b7e[8] = _0x593b7e[9] = _0x593b7e[10] = _0x593b7e[11] = _0x593b7e[12] = _0x593b7e[13] = _0x593b7e[14] = _0x593b7e[15] = 0;
    }
    _0x593b7e[14] = this.hBytes << 3 | this.bytes >>> 29;
    _0x593b7e[15] = this.bytes << 3;
    this.hash();
  };
  _0x565956.prototype.hash = function () {
    var _0x1735b2 = this.h0;
    var _0x50ded1 = this.h1;
    var _0x574f39 = this.h2;
    var _0xaf3577 = this.h3;
    var _0x397c50 = this.h4;
    var _0x171cf6;
    var _0x2ba951;
    var _0x4a187a;
    var _0x2a08d0 = this.blocks;
    for (_0x2ba951 = 16; _0x2ba951 < 80; ++_0x2ba951) {
      _0x4a187a = _0x2a08d0[_0x2ba951 - 3] ^ _0x2a08d0[_0x2ba951 - 8] ^ _0x2a08d0[_0x2ba951 - 14] ^ _0x2a08d0[_0x2ba951 - 16];
      _0x2a08d0[_0x2ba951] = _0x4a187a << 1 | _0x4a187a >>> 31;
    }
    for (_0x2ba951 = 0; _0x2ba951 < 20; _0x2ba951 += 5) {
      _0x171cf6 = _0x50ded1 & _0x574f39 | ~_0x50ded1 & _0xaf3577;
      _0x4a187a = _0x1735b2 << 5 | _0x1735b2 >>> 27;
      _0x397c50 = _0x4a187a + _0x171cf6 + _0x397c50 + 1518500249 + _0x2a08d0[_0x2ba951] << 0;
      _0x50ded1 = _0x50ded1 << 30 | _0x50ded1 >>> 2;
      _0x171cf6 = _0x1735b2 & _0x50ded1 | ~_0x1735b2 & _0x574f39;
      _0x4a187a = _0x397c50 << 5 | _0x397c50 >>> 27;
      _0xaf3577 = _0x4a187a + _0x171cf6 + _0xaf3577 + 1518500249 + _0x2a08d0[_0x2ba951 + 1] << 0;
      _0x1735b2 = _0x1735b2 << 30 | _0x1735b2 >>> 2;
      _0x171cf6 = _0x397c50 & _0x1735b2 | ~_0x397c50 & _0x50ded1;
      _0x4a187a = _0xaf3577 << 5 | _0xaf3577 >>> 27;
      _0x574f39 = _0x4a187a + _0x171cf6 + _0x574f39 + 1518500249 + _0x2a08d0[_0x2ba951 + 2] << 0;
      _0x397c50 = _0x397c50 << 30 | _0x397c50 >>> 2;
      _0x171cf6 = _0xaf3577 & _0x397c50 | ~_0xaf3577 & _0x1735b2;
      _0x4a187a = _0x574f39 << 5 | _0x574f39 >>> 27;
      _0x50ded1 = _0x4a187a + _0x171cf6 + _0x50ded1 + 1518500249 + _0x2a08d0[_0x2ba951 + 3] << 0;
      _0xaf3577 = _0xaf3577 << 30 | _0xaf3577 >>> 2;
      _0x171cf6 = _0x574f39 & _0xaf3577 | ~_0x574f39 & _0x397c50;
      _0x4a187a = _0x50ded1 << 5 | _0x50ded1 >>> 27;
      _0x1735b2 = _0x4a187a + _0x171cf6 + _0x1735b2 + 1518500249 + _0x2a08d0[_0x2ba951 + 4] << 0;
      _0x574f39 = _0x574f39 << 30 | _0x574f39 >>> 2;
    }
    for (; _0x2ba951 < 40; _0x2ba951 += 5) {
      _0x171cf6 = _0x50ded1 ^ _0x574f39 ^ _0xaf3577;
      _0x4a187a = _0x1735b2 << 5 | _0x1735b2 >>> 27;
      _0x397c50 = _0x4a187a + _0x171cf6 + _0x397c50 + 1859775393 + _0x2a08d0[_0x2ba951] << 0;
      _0x50ded1 = _0x50ded1 << 30 | _0x50ded1 >>> 2;
      _0x171cf6 = _0x1735b2 ^ _0x50ded1 ^ _0x574f39;
      _0x4a187a = _0x397c50 << 5 | _0x397c50 >>> 27;
      _0xaf3577 = _0x4a187a + _0x171cf6 + _0xaf3577 + 1859775393 + _0x2a08d0[_0x2ba951 + 1] << 0;
      _0x1735b2 = _0x1735b2 << 30 | _0x1735b2 >>> 2;
      _0x171cf6 = _0x397c50 ^ _0x1735b2 ^ _0x50ded1;
      _0x4a187a = _0xaf3577 << 5 | _0xaf3577 >>> 27;
      _0x574f39 = _0x4a187a + _0x171cf6 + _0x574f39 + 1859775393 + _0x2a08d0[_0x2ba951 + 2] << 0;
      _0x397c50 = _0x397c50 << 30 | _0x397c50 >>> 2;
      _0x171cf6 = _0xaf3577 ^ _0x397c50 ^ _0x1735b2;
      _0x4a187a = _0x574f39 << 5 | _0x574f39 >>> 27;
      _0x50ded1 = _0x4a187a + _0x171cf6 + _0x50ded1 + 1859775393 + _0x2a08d0[_0x2ba951 + 3] << 0;
      _0xaf3577 = _0xaf3577 << 30 | _0xaf3577 >>> 2;
      _0x171cf6 = _0x574f39 ^ _0xaf3577 ^ _0x397c50;
      _0x4a187a = _0x50ded1 << 5 | _0x50ded1 >>> 27;
      _0x1735b2 = _0x4a187a + _0x171cf6 + _0x1735b2 + 1859775393 + _0x2a08d0[_0x2ba951 + 4] << 0;
      _0x574f39 = _0x574f39 << 30 | _0x574f39 >>> 2;
    }
    for (; _0x2ba951 < 60; _0x2ba951 += 5) {
      _0x171cf6 = _0x50ded1 & _0x574f39 | _0x50ded1 & _0xaf3577 | _0x574f39 & _0xaf3577;
      _0x4a187a = _0x1735b2 << 5 | _0x1735b2 >>> 27;
      _0x397c50 = _0x4a187a + _0x171cf6 + _0x397c50 - 1894007588 + _0x2a08d0[_0x2ba951] << 0;
      _0x50ded1 = _0x50ded1 << 30 | _0x50ded1 >>> 2;
      _0x171cf6 = _0x1735b2 & _0x50ded1 | _0x1735b2 & _0x574f39 | _0x50ded1 & _0x574f39;
      _0x4a187a = _0x397c50 << 5 | _0x397c50 >>> 27;
      _0xaf3577 = _0x4a187a + _0x171cf6 + _0xaf3577 - 1894007588 + _0x2a08d0[_0x2ba951 + 1] << 0;
      _0x1735b2 = _0x1735b2 << 30 | _0x1735b2 >>> 2;
      _0x171cf6 = _0x397c50 & _0x1735b2 | _0x397c50 & _0x50ded1 | _0x1735b2 & _0x50ded1;
      _0x4a187a = _0xaf3577 << 5 | _0xaf3577 >>> 27;
      _0x574f39 = _0x4a187a + _0x171cf6 + _0x574f39 - 1894007588 + _0x2a08d0[_0x2ba951 + 2] << 0;
      _0x397c50 = _0x397c50 << 30 | _0x397c50 >>> 2;
      _0x171cf6 = _0xaf3577 & _0x397c50 | _0xaf3577 & _0x1735b2 | _0x397c50 & _0x1735b2;
      _0x4a187a = _0x574f39 << 5 | _0x574f39 >>> 27;
      _0x50ded1 = _0x4a187a + _0x171cf6 + _0x50ded1 - 1894007588 + _0x2a08d0[_0x2ba951 + 3] << 0;
      _0xaf3577 = _0xaf3577 << 30 | _0xaf3577 >>> 2;
      _0x171cf6 = _0x574f39 & _0xaf3577 | _0x574f39 & _0x397c50 | _0xaf3577 & _0x397c50;
      _0x4a187a = _0x50ded1 << 5 | _0x50ded1 >>> 27;
      _0x1735b2 = _0x4a187a + _0x171cf6 + _0x1735b2 - 1894007588 + _0x2a08d0[_0x2ba951 + 4] << 0;
      _0x574f39 = _0x574f39 << 30 | _0x574f39 >>> 2;
    }
    for (; _0x2ba951 < 80; _0x2ba951 += 5) {
      _0x171cf6 = _0x50ded1 ^ _0x574f39 ^ _0xaf3577;
      _0x4a187a = _0x1735b2 << 5 | _0x1735b2 >>> 27;
      _0x397c50 = _0x4a187a + _0x171cf6 + _0x397c50 - 899497514 + _0x2a08d0[_0x2ba951] << 0;
      _0x50ded1 = _0x50ded1 << 30 | _0x50ded1 >>> 2;
      _0x171cf6 = _0x1735b2 ^ _0x50ded1 ^ _0x574f39;
      _0x4a187a = _0x397c50 << 5 | _0x397c50 >>> 27;
      _0xaf3577 = _0x4a187a + _0x171cf6 + _0xaf3577 - 899497514 + _0x2a08d0[_0x2ba951 + 1] << 0;
      _0x1735b2 = _0x1735b2 << 30 | _0x1735b2 >>> 2;
      _0x171cf6 = _0x397c50 ^ _0x1735b2 ^ _0x50ded1;
      _0x4a187a = _0xaf3577 << 5 | _0xaf3577 >>> 27;
      _0x574f39 = _0x4a187a + _0x171cf6 + _0x574f39 - 899497514 + _0x2a08d0[_0x2ba951 + 2] << 0;
      _0x397c50 = _0x397c50 << 30 | _0x397c50 >>> 2;
      _0x171cf6 = _0xaf3577 ^ _0x397c50 ^ _0x1735b2;
      _0x4a187a = _0x574f39 << 5 | _0x574f39 >>> 27;
      _0x50ded1 = _0x4a187a + _0x171cf6 + _0x50ded1 - 899497514 + _0x2a08d0[_0x2ba951 + 3] << 0;
      _0xaf3577 = _0xaf3577 << 30 | _0xaf3577 >>> 2;
      _0x171cf6 = _0x574f39 ^ _0xaf3577 ^ _0x397c50;
      _0x4a187a = _0x50ded1 << 5 | _0x50ded1 >>> 27;
      _0x1735b2 = _0x4a187a + _0x171cf6 + _0x1735b2 - 899497514 + _0x2a08d0[_0x2ba951 + 4] << 0;
      _0x574f39 = _0x574f39 << 30 | _0x574f39 >>> 2;
    }
    this.h0 = this.h0 + _0x1735b2 << 0;
    this.h1 = this.h1 + _0x50ded1 << 0;
    this.h2 = this.h2 + _0x574f39 << 0;
    this.h3 = this.h3 + _0xaf3577 << 0;
    this.h4 = this.h4 + _0x397c50 << 0;
  };
  _0x565956.prototype.hex = function () {
    this.finalize();
    var _0x43f784 = this.h0;
    var _0x46404e = this.h1;
    var _0x3f1fea = this.h2;
    var _0x140e14 = this.h3;
    var _0x4d79cf = this.h4;
    return _0x1528ac[_0x43f784 >>> 28 & 15] + _0x1528ac[_0x43f784 >>> 24 & 15] + _0x1528ac[_0x43f784 >>> 20 & 15] + _0x1528ac[_0x43f784 >>> 16 & 15] + _0x1528ac[_0x43f784 >>> 12 & 15] + _0x1528ac[_0x43f784 >>> 8 & 15] + _0x1528ac[_0x43f784 >>> 4 & 15] + _0x1528ac[_0x43f784 & 15] + _0x1528ac[_0x46404e >>> 28 & 15] + _0x1528ac[_0x46404e >>> 24 & 15] + _0x1528ac[_0x46404e >>> 20 & 15] + _0x1528ac[_0x46404e >>> 16 & 15] + _0x1528ac[_0x46404e >>> 12 & 15] + _0x1528ac[_0x46404e >>> 8 & 15] + _0x1528ac[_0x46404e >>> 4 & 15] + _0x1528ac[_0x46404e & 15] + _0x1528ac[_0x3f1fea >>> 28 & 15] + _0x1528ac[_0x3f1fea >>> 24 & 15] + _0x1528ac[_0x3f1fea >>> 20 & 15] + _0x1528ac[_0x3f1fea >>> 16 & 15] + _0x1528ac[_0x3f1fea >>> 12 & 15] + _0x1528ac[_0x3f1fea >>> 8 & 15] + _0x1528ac[_0x3f1fea >>> 4 & 15] + _0x1528ac[_0x3f1fea & 15] + _0x1528ac[_0x140e14 >>> 28 & 15] + _0x1528ac[_0x140e14 >>> 24 & 15] + _0x1528ac[_0x140e14 >>> 20 & 15] + _0x1528ac[_0x140e14 >>> 16 & 15] + _0x1528ac[_0x140e14 >>> 12 & 15] + _0x1528ac[_0x140e14 >>> 8 & 15] + _0x1528ac[_0x140e14 >>> 4 & 15] + _0x1528ac[_0x140e14 & 15] + _0x1528ac[_0x4d79cf >>> 28 & 15] + _0x1528ac[_0x4d79cf >>> 24 & 15] + _0x1528ac[_0x4d79cf >>> 20 & 15] + _0x1528ac[_0x4d79cf >>> 16 & 15] + _0x1528ac[_0x4d79cf >>> 12 & 15] + _0x1528ac[_0x4d79cf >>> 8 & 15] + _0x1528ac[_0x4d79cf >>> 4 & 15] + _0x1528ac[_0x4d79cf & 15];
  };
  _0x565956.prototype.toString = _0x565956.prototype.hex;
  _0x565956.prototype.digest = function () {
    this.finalize();
    var _0x212884 = this.h0;
    var _0x2d2bc5 = this.h1;
    var _0x57c1cc = this.h2;
    var _0xdfc8d8 = this.h3;
    var _0x292fea = this.h4;
    return [_0x212884 >>> 24 & 255, _0x212884 >>> 16 & 255, _0x212884 >>> 8 & 255, _0x212884 & 255, _0x2d2bc5 >>> 24 & 255, _0x2d2bc5 >>> 16 & 255, _0x2d2bc5 >>> 8 & 255, _0x2d2bc5 & 255, _0x57c1cc >>> 24 & 255, _0x57c1cc >>> 16 & 255, _0x57c1cc >>> 8 & 255, _0x57c1cc & 255, _0xdfc8d8 >>> 24 & 255, _0xdfc8d8 >>> 16 & 255, _0xdfc8d8 >>> 8 & 255, _0xdfc8d8 & 255, _0x292fea >>> 24 & 255, _0x292fea >>> 16 & 255, _0x292fea >>> 8 & 255, _0x292fea & 255];
  };
  _0x565956.prototype.array = _0x565956.prototype.digest;
  _0x565956.prototype.arrayBuffer = function () {
    this.finalize();
    var _0x736e4b = new ArrayBuffer(20);
    var _0x44ee29 = new DataView(_0x736e4b);
    _0x44ee29.setUint32(0, this.h0);
    _0x44ee29.setUint32(4, this.h1);
    _0x44ee29.setUint32(8, this.h2);
    _0x44ee29.setUint32(12, this.h3);
    _0x44ee29.setUint32(16, this.h4);
    return _0x736e4b;
  };
  function _0x386c42(_0x1f2043, _0x2f8d67) {
    var _0x501c2a;
    var _0x173c17 = _0x5336fe(_0x1f2043);
    _0x1f2043 = _0x173c17[0];
    if (_0x173c17[1]) {
      var _0x4e087b = [];
      var _0x40483e = _0x1f2043.length;
      var _0x10fa1d = 0;
      var _0x54c6a8;
      for (_0x501c2a = 0; _0x501c2a < _0x40483e; ++_0x501c2a) {
        _0x54c6a8 = _0x1f2043.charCodeAt(_0x501c2a);
        if (_0x54c6a8 < 128) {
          _0x4e087b[_0x10fa1d++] = _0x54c6a8;
        } else if (_0x54c6a8 < 2048) {
          _0x4e087b[_0x10fa1d++] = _0x54c6a8 >>> 6 | 192;
          _0x4e087b[_0x10fa1d++] = _0x54c6a8 & 63 | 128;
        } else if (_0x54c6a8 < 55296 || _0x54c6a8 >= 57344) {
          _0x4e087b[_0x10fa1d++] = _0x54c6a8 >>> 12 | 224;
          _0x4e087b[_0x10fa1d++] = _0x54c6a8 >>> 6 & 63 | 128;
          _0x4e087b[_0x10fa1d++] = _0x54c6a8 & 63 | 128;
        } else {
          _0x54c6a8 = 65536 + ((_0x54c6a8 & 1023) << 10 | _0x1f2043.charCodeAt(++_0x501c2a) & 1023);
          _0x4e087b[_0x10fa1d++] = _0x54c6a8 >>> 18 | 240;
          _0x4e087b[_0x10fa1d++] = _0x54c6a8 >>> 12 & 63 | 128;
          _0x4e087b[_0x10fa1d++] = _0x54c6a8 >>> 6 & 63 | 128;
          _0x4e087b[_0x10fa1d++] = _0x54c6a8 & 63 | 128;
        }
      }
      _0x1f2043 = _0x4e087b;
    }
    if (_0x1f2043.length > 64) {
      _0x1f2043 = new _0x565956(true).update(_0x1f2043).array();
    }
    var _0x5bd1aa = [];
    var _0x1e9bd3 = [];
    for (_0x501c2a = 0; _0x501c2a < 64; ++_0x501c2a) {
      var _0x3c4223 = _0x1f2043[_0x501c2a] || 0;
      _0x5bd1aa[_0x501c2a] = _0x3c4223 ^ 92;
      _0x1e9bd3[_0x501c2a] = _0x3c4223 ^ 54;
    }
    _0x565956.call(this, _0x2f8d67);
    this.update(_0x1e9bd3);
    this.oKeyPad = _0x5bd1aa;
    this.inner = true;
    this.sharedMemory = _0x2f8d67;
  }
  _0x386c42.prototype = new _0x565956();
  _0x386c42.prototype.finalize = function () {
    _0x565956.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var _0x3e21c1 = this.array();
      _0x565956.call(this, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(_0x3e21c1);
      _0x565956.prototype.finalize.call(this);
    }
  };
  var _0x499072 = _0x18b281();
  _0x499072.sha1 = _0x499072;
  _0x499072.sha1.hmac = _0x5c23b3();
  if (_0x3e33b6) {
    module.exports = _0x499072;
  } else {
    _0x3ea2a9.sha1 = _0x499072;
    if (_0x281d98) {
      define(function () {
        return _0x499072;
      });
    }
  }
})();