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

  var _0x388685 = "input is invalid type";
  var _0x20914e = "finalize already called";
  var _0x28800e = typeof window === "object";
  var _0x214521 = _0x28800e ? window : {};
  if (_0x214521.JS_SHA1_NO_WINDOW) {
    _0x28800e = false;
  }
  var _0x33e190 = !_0x28800e && typeof self === "object";
  var _0x2bc898 = !_0x214521.JS_SHA1_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
  if (_0x2bc898) {
    _0x214521 = global;
  } else if (_0x33e190) {
    _0x214521 = self;
  }
  var _0x3fd28c = !_0x214521.JS_SHA1_NO_COMMON_JS && typeof module === "object" && module.exports;
  var _0x1531e7 = typeof define === "function" && define.amd;
  var _0x363951 = !_0x214521.JS_SHA1_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
  var _0xaba0db = "0123456789abcdef".split("");
  var _0x1e3fb0 = [-2147483648, 8388608, 32768, 128];
  var _0x4946e5 = [24, 16, 8, 0];
  var _0x5d5d48 = ["hex", "array", "digest", "arrayBuffer"];
  var _0x19a1f8 = [];
  var _0x488ab7 = Array.isArray;
  if (_0x214521.JS_SHA1_NO_NODE_JS || !_0x488ab7) {
    _0x488ab7 = function (_0x5d28e1) {
      return Object.prototype.toString.call(_0x5d28e1) === "[object Array]";
    };
  }
  var _0x8a49be = ArrayBuffer.isView;
  if (_0x363951 && (_0x214521.JS_SHA1_NO_ARRAY_BUFFER_IS_VIEW || !_0x8a49be)) {
    _0x8a49be = function (_0x381b00) {
      return typeof _0x381b00 === "object" && _0x381b00.buffer && _0x381b00.buffer.constructor === ArrayBuffer;
    };
  }
  function _0x262313(_0x27f5de) {
    var _0x39a30f = typeof _0x27f5de;
    if (_0x39a30f === "string") {
      return [_0x27f5de, true];
    }
    if (_0x39a30f !== "object" || _0x27f5de === null) {
      throw new Error(_0x388685);
    }
    if (_0x363951 && _0x27f5de.constructor === ArrayBuffer) {
      return [new Uint8Array(_0x27f5de), false];
    }
    if (!_0x488ab7(_0x27f5de) && !_0x8a49be(_0x27f5de)) {
      throw new Error(_0x388685);
    }
    return [_0x27f5de, false];
  }
  function _0x473894(_0x5c2a87) {
    return function (_0xb64afc) {
      return new _0x5091ec(true).update(_0xb64afc)[_0x5c2a87]();
    };
  }
  function _0x49fe61() {
    var _0x868b8 = _0x473894("hex");
    if (_0x2bc898) {
      _0x868b8 = _0x260ef6(_0x868b8);
    }
    _0x868b8.create = function () {
      return new _0x5091ec();
    };
    _0x868b8.update = function (_0x213e9d) {
      return _0x868b8.create().update(_0x213e9d);
    };
    for (var _0x426bb0 = 0; _0x426bb0 < _0x5d5d48.length; ++_0x426bb0) {
      var _0x5a535e = _0x5d5d48[_0x426bb0];
      _0x868b8[_0x5a535e] = _0x473894(_0x5a535e);
    }
    return _0x868b8;
  }
  function _0x260ef6(_0x1141a1) {
    var _0x583fd8 = require("crypto");
    var _0x65895d = require("buffer").Buffer;
    var _0x2a2934;
    if (_0x65895d.from && !_0x214521.JS_SHA1_NO_BUFFER_FROM) {
      _0x2a2934 = _0x65895d.from;
    } else {
      _0x2a2934 = function (_0x8990ff) {
        return new _0x65895d(_0x8990ff);
      };
    }
    function _0x37396f(_0x4aba8b) {
      if (typeof _0x4aba8b === "string") {
        return _0x583fd8.createHash("sha1").update(_0x4aba8b, "utf8").digest("hex");
      } else if (_0x4aba8b === null || _0x4aba8b === undefined) {
        throw new Error(_0x388685);
      } else if (_0x4aba8b.constructor === ArrayBuffer) {
        _0x4aba8b = new Uint8Array(_0x4aba8b);
      }
      if (_0x488ab7(_0x4aba8b) || _0x8a49be(_0x4aba8b) || _0x4aba8b.constructor === _0x65895d) {
        return _0x583fd8.createHash("sha1").update(_0x2a2934(_0x4aba8b)).digest("hex");
      } else {
        return _0x1141a1(_0x4aba8b);
      }
    }
    return _0x37396f;
  }
  function _0x39e17d(_0x4ec27f) {
    return function (_0x3d9067, _0x12bb61) {
      return new _0x5c2017(_0x3d9067, true).update(_0x12bb61)[_0x4ec27f]();
    };
  }
  function _0x62e7c0() {
    var _0x5a587b = _0x39e17d("hex");
    _0x5a587b.create = function (_0x514c09) {
      return new _0x5c2017(_0x514c09);
    };
    _0x5a587b.update = function (_0x345b07, _0x3fc621) {
      return _0x5a587b.create(_0x345b07).update(_0x3fc621);
    };
    for (var _0x340f05 = 0; _0x340f05 < _0x5d5d48.length; ++_0x340f05) {
      var _0xe41e8b = _0x5d5d48[_0x340f05];
      _0x5a587b[_0xe41e8b] = _0x39e17d(_0xe41e8b);
    }
    return _0x5a587b;
  }
  function _0x5091ec(_0x5cf135) {
    if (_0x5cf135) {
      _0x19a1f8[0] = _0x19a1f8[16] = _0x19a1f8[1] = _0x19a1f8[2] = _0x19a1f8[3] = _0x19a1f8[4] = _0x19a1f8[5] = _0x19a1f8[6] = _0x19a1f8[7] = _0x19a1f8[8] = _0x19a1f8[9] = _0x19a1f8[10] = _0x19a1f8[11] = _0x19a1f8[12] = _0x19a1f8[13] = _0x19a1f8[14] = _0x19a1f8[15] = 0;
      this.blocks = _0x19a1f8;
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
  _0x5091ec.prototype.update = function (_0x90142f) {
    if (this.finalized) {
      throw new Error(_0x20914e);
    }
    var _0x4a22ae = _0x262313(_0x90142f);
    _0x90142f = _0x4a22ae[0];
    var _0xbd4537 = _0x4a22ae[1];
    var _0x34cc73;
    var _0x2b2aa9 = 0;
    var _0x39e05c;
    var _0xf0ef31 = _0x90142f.length || 0;
    var _0x1f8729 = this.blocks;
    while (_0x2b2aa9 < _0xf0ef31) {
      if (this.hashed) {
        this.hashed = false;
        _0x1f8729[0] = this.block;
        this.block = _0x1f8729[16] = _0x1f8729[1] = _0x1f8729[2] = _0x1f8729[3] = _0x1f8729[4] = _0x1f8729[5] = _0x1f8729[6] = _0x1f8729[7] = _0x1f8729[8] = _0x1f8729[9] = _0x1f8729[10] = _0x1f8729[11] = _0x1f8729[12] = _0x1f8729[13] = _0x1f8729[14] = _0x1f8729[15] = 0;
      }
      if (_0xbd4537) {
        for (_0x39e05c = this.start; _0x2b2aa9 < _0xf0ef31 && _0x39e05c < 64; ++_0x2b2aa9) {
          _0x34cc73 = _0x90142f.charCodeAt(_0x2b2aa9);
          if (_0x34cc73 < 128) {
            _0x1f8729[_0x39e05c >>> 2] |= _0x34cc73 << _0x4946e5[_0x39e05c++ & 3];
          } else if (_0x34cc73 < 2048) {
            _0x1f8729[_0x39e05c >>> 2] |= (_0x34cc73 >>> 6 | 192) << _0x4946e5[_0x39e05c++ & 3];
            _0x1f8729[_0x39e05c >>> 2] |= (_0x34cc73 & 63 | 128) << _0x4946e5[_0x39e05c++ & 3];
          } else if (_0x34cc73 < 55296 || _0x34cc73 >= 57344) {
            _0x1f8729[_0x39e05c >>> 2] |= (_0x34cc73 >>> 12 | 224) << _0x4946e5[_0x39e05c++ & 3];
            _0x1f8729[_0x39e05c >>> 2] |= (_0x34cc73 >>> 6 & 63 | 128) << _0x4946e5[_0x39e05c++ & 3];
            _0x1f8729[_0x39e05c >>> 2] |= (_0x34cc73 & 63 | 128) << _0x4946e5[_0x39e05c++ & 3];
          } else {
            _0x34cc73 = 65536 + ((_0x34cc73 & 1023) << 10 | _0x90142f.charCodeAt(++_0x2b2aa9) & 1023);
            _0x1f8729[_0x39e05c >>> 2] |= (_0x34cc73 >>> 18 | 240) << _0x4946e5[_0x39e05c++ & 3];
            _0x1f8729[_0x39e05c >>> 2] |= (_0x34cc73 >>> 12 & 63 | 128) << _0x4946e5[_0x39e05c++ & 3];
            _0x1f8729[_0x39e05c >>> 2] |= (_0x34cc73 >>> 6 & 63 | 128) << _0x4946e5[_0x39e05c++ & 3];
            _0x1f8729[_0x39e05c >>> 2] |= (_0x34cc73 & 63 | 128) << _0x4946e5[_0x39e05c++ & 3];
          }
        }
      } else {
        for (_0x39e05c = this.start; _0x2b2aa9 < _0xf0ef31 && _0x39e05c < 64; ++_0x2b2aa9) {
          _0x1f8729[_0x39e05c >>> 2] |= _0x90142f[_0x2b2aa9] << _0x4946e5[_0x39e05c++ & 3];
        }
      }
      this.lastByteIndex = _0x39e05c;
      this.bytes += _0x39e05c - this.start;
      if (_0x39e05c >= 64) {
        this.block = _0x1f8729[16];
        this.start = _0x39e05c - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = _0x39e05c;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };
  _0x5091ec.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var _0x450e3e = this.blocks;
    var _0x3e88f5 = this.lastByteIndex;
    _0x450e3e[16] = this.block;
    _0x450e3e[_0x3e88f5 >>> 2] |= _0x1e3fb0[_0x3e88f5 & 3];
    this.block = _0x450e3e[16];
    if (_0x3e88f5 >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      _0x450e3e[0] = this.block;
      _0x450e3e[16] = _0x450e3e[1] = _0x450e3e[2] = _0x450e3e[3] = _0x450e3e[4] = _0x450e3e[5] = _0x450e3e[6] = _0x450e3e[7] = _0x450e3e[8] = _0x450e3e[9] = _0x450e3e[10] = _0x450e3e[11] = _0x450e3e[12] = _0x450e3e[13] = _0x450e3e[14] = _0x450e3e[15] = 0;
    }
    _0x450e3e[14] = this.hBytes << 3 | this.bytes >>> 29;
    _0x450e3e[15] = this.bytes << 3;
    this.hash();
  };
  _0x5091ec.prototype.hash = function () {
    var _0x567be8 = this.h0;
    var _0x37c558 = this.h1;
    var _0x4bd956 = this.h2;
    var _0x85c54c = this.h3;
    var _0x96ffdd = this.h4;
    var _0x4ccac2;
    var _0x1f8468;
    var _0x27228d;
    var _0x59df97 = this.blocks;
    for (_0x1f8468 = 16; _0x1f8468 < 80; ++_0x1f8468) {
      _0x27228d = _0x59df97[_0x1f8468 - 3] ^ _0x59df97[_0x1f8468 - 8] ^ _0x59df97[_0x1f8468 - 14] ^ _0x59df97[_0x1f8468 - 16];
      _0x59df97[_0x1f8468] = _0x27228d << 1 | _0x27228d >>> 31;
    }
    for (_0x1f8468 = 0; _0x1f8468 < 20; _0x1f8468 += 5) {
      _0x4ccac2 = _0x37c558 & _0x4bd956 | ~_0x37c558 & _0x85c54c;
      _0x27228d = _0x567be8 << 5 | _0x567be8 >>> 27;
      _0x96ffdd = _0x27228d + _0x4ccac2 + _0x96ffdd + 1518500249 + _0x59df97[_0x1f8468] << 0;
      _0x37c558 = _0x37c558 << 30 | _0x37c558 >>> 2;
      _0x4ccac2 = _0x567be8 & _0x37c558 | ~_0x567be8 & _0x4bd956;
      _0x27228d = _0x96ffdd << 5 | _0x96ffdd >>> 27;
      _0x85c54c = _0x27228d + _0x4ccac2 + _0x85c54c + 1518500249 + _0x59df97[_0x1f8468 + 1] << 0;
      _0x567be8 = _0x567be8 << 30 | _0x567be8 >>> 2;
      _0x4ccac2 = _0x96ffdd & _0x567be8 | ~_0x96ffdd & _0x37c558;
      _0x27228d = _0x85c54c << 5 | _0x85c54c >>> 27;
      _0x4bd956 = _0x27228d + _0x4ccac2 + _0x4bd956 + 1518500249 + _0x59df97[_0x1f8468 + 2] << 0;
      _0x96ffdd = _0x96ffdd << 30 | _0x96ffdd >>> 2;
      _0x4ccac2 = _0x85c54c & _0x96ffdd | ~_0x85c54c & _0x567be8;
      _0x27228d = _0x4bd956 << 5 | _0x4bd956 >>> 27;
      _0x37c558 = _0x27228d + _0x4ccac2 + _0x37c558 + 1518500249 + _0x59df97[_0x1f8468 + 3] << 0;
      _0x85c54c = _0x85c54c << 30 | _0x85c54c >>> 2;
      _0x4ccac2 = _0x4bd956 & _0x85c54c | ~_0x4bd956 & _0x96ffdd;
      _0x27228d = _0x37c558 << 5 | _0x37c558 >>> 27;
      _0x567be8 = _0x27228d + _0x4ccac2 + _0x567be8 + 1518500249 + _0x59df97[_0x1f8468 + 4] << 0;
      _0x4bd956 = _0x4bd956 << 30 | _0x4bd956 >>> 2;
    }
    for (; _0x1f8468 < 40; _0x1f8468 += 5) {
      _0x4ccac2 = _0x37c558 ^ _0x4bd956 ^ _0x85c54c;
      _0x27228d = _0x567be8 << 5 | _0x567be8 >>> 27;
      _0x96ffdd = _0x27228d + _0x4ccac2 + _0x96ffdd + 1859775393 + _0x59df97[_0x1f8468] << 0;
      _0x37c558 = _0x37c558 << 30 | _0x37c558 >>> 2;
      _0x4ccac2 = _0x567be8 ^ _0x37c558 ^ _0x4bd956;
      _0x27228d = _0x96ffdd << 5 | _0x96ffdd >>> 27;
      _0x85c54c = _0x27228d + _0x4ccac2 + _0x85c54c + 1859775393 + _0x59df97[_0x1f8468 + 1] << 0;
      _0x567be8 = _0x567be8 << 30 | _0x567be8 >>> 2;
      _0x4ccac2 = _0x96ffdd ^ _0x567be8 ^ _0x37c558;
      _0x27228d = _0x85c54c << 5 | _0x85c54c >>> 27;
      _0x4bd956 = _0x27228d + _0x4ccac2 + _0x4bd956 + 1859775393 + _0x59df97[_0x1f8468 + 2] << 0;
      _0x96ffdd = _0x96ffdd << 30 | _0x96ffdd >>> 2;
      _0x4ccac2 = _0x85c54c ^ _0x96ffdd ^ _0x567be8;
      _0x27228d = _0x4bd956 << 5 | _0x4bd956 >>> 27;
      _0x37c558 = _0x27228d + _0x4ccac2 + _0x37c558 + 1859775393 + _0x59df97[_0x1f8468 + 3] << 0;
      _0x85c54c = _0x85c54c << 30 | _0x85c54c >>> 2;
      _0x4ccac2 = _0x4bd956 ^ _0x85c54c ^ _0x96ffdd;
      _0x27228d = _0x37c558 << 5 | _0x37c558 >>> 27;
      _0x567be8 = _0x27228d + _0x4ccac2 + _0x567be8 + 1859775393 + _0x59df97[_0x1f8468 + 4] << 0;
      _0x4bd956 = _0x4bd956 << 30 | _0x4bd956 >>> 2;
    }
    for (; _0x1f8468 < 60; _0x1f8468 += 5) {
      _0x4ccac2 = _0x37c558 & _0x4bd956 | _0x37c558 & _0x85c54c | _0x4bd956 & _0x85c54c;
      _0x27228d = _0x567be8 << 5 | _0x567be8 >>> 27;
      _0x96ffdd = _0x27228d + _0x4ccac2 + _0x96ffdd - 1894007588 + _0x59df97[_0x1f8468] << 0;
      _0x37c558 = _0x37c558 << 30 | _0x37c558 >>> 2;
      _0x4ccac2 = _0x567be8 & _0x37c558 | _0x567be8 & _0x4bd956 | _0x37c558 & _0x4bd956;
      _0x27228d = _0x96ffdd << 5 | _0x96ffdd >>> 27;
      _0x85c54c = _0x27228d + _0x4ccac2 + _0x85c54c - 1894007588 + _0x59df97[_0x1f8468 + 1] << 0;
      _0x567be8 = _0x567be8 << 30 | _0x567be8 >>> 2;
      _0x4ccac2 = _0x96ffdd & _0x567be8 | _0x96ffdd & _0x37c558 | _0x567be8 & _0x37c558;
      _0x27228d = _0x85c54c << 5 | _0x85c54c >>> 27;
      _0x4bd956 = _0x27228d + _0x4ccac2 + _0x4bd956 - 1894007588 + _0x59df97[_0x1f8468 + 2] << 0;
      _0x96ffdd = _0x96ffdd << 30 | _0x96ffdd >>> 2;
      _0x4ccac2 = _0x85c54c & _0x96ffdd | _0x85c54c & _0x567be8 | _0x96ffdd & _0x567be8;
      _0x27228d = _0x4bd956 << 5 | _0x4bd956 >>> 27;
      _0x37c558 = _0x27228d + _0x4ccac2 + _0x37c558 - 1894007588 + _0x59df97[_0x1f8468 + 3] << 0;
      _0x85c54c = _0x85c54c << 30 | _0x85c54c >>> 2;
      _0x4ccac2 = _0x4bd956 & _0x85c54c | _0x4bd956 & _0x96ffdd | _0x85c54c & _0x96ffdd;
      _0x27228d = _0x37c558 << 5 | _0x37c558 >>> 27;
      _0x567be8 = _0x27228d + _0x4ccac2 + _0x567be8 - 1894007588 + _0x59df97[_0x1f8468 + 4] << 0;
      _0x4bd956 = _0x4bd956 << 30 | _0x4bd956 >>> 2;
    }
    for (; _0x1f8468 < 80; _0x1f8468 += 5) {
      _0x4ccac2 = _0x37c558 ^ _0x4bd956 ^ _0x85c54c;
      _0x27228d = _0x567be8 << 5 | _0x567be8 >>> 27;
      _0x96ffdd = _0x27228d + _0x4ccac2 + _0x96ffdd - 899497514 + _0x59df97[_0x1f8468] << 0;
      _0x37c558 = _0x37c558 << 30 | _0x37c558 >>> 2;
      _0x4ccac2 = _0x567be8 ^ _0x37c558 ^ _0x4bd956;
      _0x27228d = _0x96ffdd << 5 | _0x96ffdd >>> 27;
      _0x85c54c = _0x27228d + _0x4ccac2 + _0x85c54c - 899497514 + _0x59df97[_0x1f8468 + 1] << 0;
      _0x567be8 = _0x567be8 << 30 | _0x567be8 >>> 2;
      _0x4ccac2 = _0x96ffdd ^ _0x567be8 ^ _0x37c558;
      _0x27228d = _0x85c54c << 5 | _0x85c54c >>> 27;
      _0x4bd956 = _0x27228d + _0x4ccac2 + _0x4bd956 - 899497514 + _0x59df97[_0x1f8468 + 2] << 0;
      _0x96ffdd = _0x96ffdd << 30 | _0x96ffdd >>> 2;
      _0x4ccac2 = _0x85c54c ^ _0x96ffdd ^ _0x567be8;
      _0x27228d = _0x4bd956 << 5 | _0x4bd956 >>> 27;
      _0x37c558 = _0x27228d + _0x4ccac2 + _0x37c558 - 899497514 + _0x59df97[_0x1f8468 + 3] << 0;
      _0x85c54c = _0x85c54c << 30 | _0x85c54c >>> 2;
      _0x4ccac2 = _0x4bd956 ^ _0x85c54c ^ _0x96ffdd;
      _0x27228d = _0x37c558 << 5 | _0x37c558 >>> 27;
      _0x567be8 = _0x27228d + _0x4ccac2 + _0x567be8 - 899497514 + _0x59df97[_0x1f8468 + 4] << 0;
      _0x4bd956 = _0x4bd956 << 30 | _0x4bd956 >>> 2;
    }
    this.h0 = this.h0 + _0x567be8 << 0;
    this.h1 = this.h1 + _0x37c558 << 0;
    this.h2 = this.h2 + _0x4bd956 << 0;
    this.h3 = this.h3 + _0x85c54c << 0;
    this.h4 = this.h4 + _0x96ffdd << 0;
  };
  _0x5091ec.prototype.hex = function () {
    this.finalize();
    var _0x21c7ef = this.h0;
    var _0x4e2a48 = this.h1;
    var _0x2341ea = this.h2;
    var _0x31301b = this.h3;
    var _0x4e5eb0 = this.h4;
    return _0xaba0db[_0x21c7ef >>> 28 & 15] + _0xaba0db[_0x21c7ef >>> 24 & 15] + _0xaba0db[_0x21c7ef >>> 20 & 15] + _0xaba0db[_0x21c7ef >>> 16 & 15] + _0xaba0db[_0x21c7ef >>> 12 & 15] + _0xaba0db[_0x21c7ef >>> 8 & 15] + _0xaba0db[_0x21c7ef >>> 4 & 15] + _0xaba0db[_0x21c7ef & 15] + _0xaba0db[_0x4e2a48 >>> 28 & 15] + _0xaba0db[_0x4e2a48 >>> 24 & 15] + _0xaba0db[_0x4e2a48 >>> 20 & 15] + _0xaba0db[_0x4e2a48 >>> 16 & 15] + _0xaba0db[_0x4e2a48 >>> 12 & 15] + _0xaba0db[_0x4e2a48 >>> 8 & 15] + _0xaba0db[_0x4e2a48 >>> 4 & 15] + _0xaba0db[_0x4e2a48 & 15] + _0xaba0db[_0x2341ea >>> 28 & 15] + _0xaba0db[_0x2341ea >>> 24 & 15] + _0xaba0db[_0x2341ea >>> 20 & 15] + _0xaba0db[_0x2341ea >>> 16 & 15] + _0xaba0db[_0x2341ea >>> 12 & 15] + _0xaba0db[_0x2341ea >>> 8 & 15] + _0xaba0db[_0x2341ea >>> 4 & 15] + _0xaba0db[_0x2341ea & 15] + _0xaba0db[_0x31301b >>> 28 & 15] + _0xaba0db[_0x31301b >>> 24 & 15] + _0xaba0db[_0x31301b >>> 20 & 15] + _0xaba0db[_0x31301b >>> 16 & 15] + _0xaba0db[_0x31301b >>> 12 & 15] + _0xaba0db[_0x31301b >>> 8 & 15] + _0xaba0db[_0x31301b >>> 4 & 15] + _0xaba0db[_0x31301b & 15] + _0xaba0db[_0x4e5eb0 >>> 28 & 15] + _0xaba0db[_0x4e5eb0 >>> 24 & 15] + _0xaba0db[_0x4e5eb0 >>> 20 & 15] + _0xaba0db[_0x4e5eb0 >>> 16 & 15] + _0xaba0db[_0x4e5eb0 >>> 12 & 15] + _0xaba0db[_0x4e5eb0 >>> 8 & 15] + _0xaba0db[_0x4e5eb0 >>> 4 & 15] + _0xaba0db[_0x4e5eb0 & 15];
  };
  _0x5091ec.prototype.toString = _0x5091ec.prototype.hex;
  _0x5091ec.prototype.digest = function () {
    this.finalize();
    var _0x1a216f = this.h0;
    var _0x8b64b6 = this.h1;
    var _0x56623a = this.h2;
    var _0x3ce23b = this.h3;
    var _0x1ce3ca = this.h4;
    return [_0x1a216f >>> 24 & 255, _0x1a216f >>> 16 & 255, _0x1a216f >>> 8 & 255, _0x1a216f & 255, _0x8b64b6 >>> 24 & 255, _0x8b64b6 >>> 16 & 255, _0x8b64b6 >>> 8 & 255, _0x8b64b6 & 255, _0x56623a >>> 24 & 255, _0x56623a >>> 16 & 255, _0x56623a >>> 8 & 255, _0x56623a & 255, _0x3ce23b >>> 24 & 255, _0x3ce23b >>> 16 & 255, _0x3ce23b >>> 8 & 255, _0x3ce23b & 255, _0x1ce3ca >>> 24 & 255, _0x1ce3ca >>> 16 & 255, _0x1ce3ca >>> 8 & 255, _0x1ce3ca & 255];
  };
  _0x5091ec.prototype.array = _0x5091ec.prototype.digest;
  _0x5091ec.prototype.arrayBuffer = function () {
    this.finalize();
    var _0x11ac84 = new ArrayBuffer(20);
    var _0x5e9ed8 = new DataView(_0x11ac84);
    _0x5e9ed8.setUint32(0, this.h0);
    _0x5e9ed8.setUint32(4, this.h1);
    _0x5e9ed8.setUint32(8, this.h2);
    _0x5e9ed8.setUint32(12, this.h3);
    _0x5e9ed8.setUint32(16, this.h4);
    return _0x11ac84;
  };
  function _0x5c2017(_0x169909, _0x2f06bb) {
    var _0x952fb6;
    var _0xb7c98d = _0x262313(_0x169909);
    _0x169909 = _0xb7c98d[0];
    if (_0xb7c98d[1]) {
      var _0x339869 = [];
      var _0x4ffc0d = _0x169909.length;
      var _0x3d0116 = 0;
      var _0x206e82;
      for (_0x952fb6 = 0; _0x952fb6 < _0x4ffc0d; ++_0x952fb6) {
        _0x206e82 = _0x169909.charCodeAt(_0x952fb6);
        if (_0x206e82 < 128) {
          _0x339869[_0x3d0116++] = _0x206e82;
        } else if (_0x206e82 < 2048) {
          _0x339869[_0x3d0116++] = _0x206e82 >>> 6 | 192;
          _0x339869[_0x3d0116++] = _0x206e82 & 63 | 128;
        } else if (_0x206e82 < 55296 || _0x206e82 >= 57344) {
          _0x339869[_0x3d0116++] = _0x206e82 >>> 12 | 224;
          _0x339869[_0x3d0116++] = _0x206e82 >>> 6 & 63 | 128;
          _0x339869[_0x3d0116++] = _0x206e82 & 63 | 128;
        } else {
          _0x206e82 = 65536 + ((_0x206e82 & 1023) << 10 | _0x169909.charCodeAt(++_0x952fb6) & 1023);
          _0x339869[_0x3d0116++] = _0x206e82 >>> 18 | 240;
          _0x339869[_0x3d0116++] = _0x206e82 >>> 12 & 63 | 128;
          _0x339869[_0x3d0116++] = _0x206e82 >>> 6 & 63 | 128;
          _0x339869[_0x3d0116++] = _0x206e82 & 63 | 128;
        }
      }
      _0x169909 = _0x339869;
    }
    if (_0x169909.length > 64) {
      _0x169909 = new _0x5091ec(true).update(_0x169909).array();
    }
    var _0x1f9545 = [];
    var _0x2d2db0 = [];
    for (_0x952fb6 = 0; _0x952fb6 < 64; ++_0x952fb6) {
      var _0x1d9e7d = _0x169909[_0x952fb6] || 0;
      _0x1f9545[_0x952fb6] = _0x1d9e7d ^ 92;
      _0x2d2db0[_0x952fb6] = _0x1d9e7d ^ 54;
    }
    _0x5091ec.call(this, _0x2f06bb);
    this.update(_0x2d2db0);
    this.oKeyPad = _0x1f9545;
    this.inner = true;
    this.sharedMemory = _0x2f06bb;
  }
  _0x5c2017.prototype = new _0x5091ec();
  _0x5c2017.prototype.finalize = function () {
    _0x5091ec.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var _0xd0f157 = this.array();
      _0x5091ec.call(this, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(_0xd0f157);
      _0x5091ec.prototype.finalize.call(this);
    }
  };
  var _0x2b4d32 = _0x49fe61();
  _0x2b4d32.sha1 = _0x2b4d32;
  _0x2b4d32.sha1.hmac = _0x62e7c0();
  if (_0x3fd28c) {
    module.exports = _0x2b4d32;
  } else {
    _0x214521.sha1 = _0x2b4d32;
    if (_0x1531e7) {
      define(function () {
        return _0x2b4d32;
      });
    }
  }
})();