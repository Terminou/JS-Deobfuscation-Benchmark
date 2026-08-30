/**
 * [js-crc]{@link https://github.com/emn178/js-crc}
 *
 * @namespace crc
 * @version 0.3.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2024
 * @license MIT
 */
(function () {
  'use strict';

  var _0x1e64d0 = "input is invalid type";
  var _0x593ff0 = "finalize already called";
  var _0x39e982 = typeof window === "object";
  var _0x2e0ffc = _0x39e982 ? window : {};
  if (_0x2e0ffc.JS_CRC_NO_WINDOW) {
    _0x39e982 = false;
  }
  var _0x58e4f2 = !_0x39e982 && typeof self === "object";
  var _0x1b8c3f = !_0x2e0ffc.JS_CRC_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
  if (_0x1b8c3f) {
    _0x2e0ffc = global;
  } else if (_0x58e4f2) {
    _0x2e0ffc = self;
  }
  var _0x9d8b7d = !_0x2e0ffc.JS_CRC_NO_COMMON_JS && typeof module === "object" && module.exports;
  var _0x2948f0 = typeof define === "function" && define.amd;
  var _0x3eb40f = !_0x2e0ffc.JS_CRC_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
  var _0x5ec628 = "0123456789abcdef".split("");
  var _0x178e89 = ["hex", "array"];
  var _0x27e701 = [{
    width: 32,
    poly: 79764919,
    init: 4294967295,
    refin: true,
    refout: true,
    xorout: 4294967295,
    name: "crc32"
  }, {
    width: 16,
    poly: 32773,
    init: 0,
    refin: true,
    refout: true,
    xorout: 0,
    name: "crc16"
  }];
  var _0x28a9fd = Array.isArray;
  if (_0x2e0ffc.JS_CRC_NO_NODE_JS || !_0x28a9fd) {
    _0x28a9fd = function (_0x531e57) {
      return Object.prototype.toString.call(_0x531e57) === "[object Array]";
    };
  }
  var _0x31cdbf = ArrayBuffer.isView;
  if (_0x3eb40f && (_0x2e0ffc.JS_CRC_NO_ARRAY_BUFFER_IS_VIEW || !_0x31cdbf)) {
    _0x31cdbf = function (_0x18dc42) {
      return typeof _0x18dc42 === "object" && _0x18dc42.buffer && _0x18dc42.buffer.constructor === ArrayBuffer;
    };
  }
  function _0x295f7c(_0x8ac406) {
    var _0x51ee25 = typeof _0x8ac406;
    if (_0x51ee25 === "string") {
      return [_0x8ac406, true];
    }
    if (_0x51ee25 !== "object" || _0x8ac406 === null) {
      throw new Error(_0x1e64d0);
    }
    if (_0x3eb40f && _0x8ac406.constructor === ArrayBuffer) {
      return [new Uint8Array(_0x8ac406), false];
    }
    if (!_0x28a9fd(_0x8ac406) && !_0x31cdbf(_0x8ac406)) {
      throw new Error(_0x1e64d0);
    }
    return [_0x8ac406, false];
  }
  function _0x4cb3a1(_0x8d3a99, _0x1ccb9e) {
    return function (_0x8cd67f) {
      return new _0x2357e8(_0x1ccb9e).update(_0x8cd67f)[_0x8d3a99]();
    };
  }
  function _0xe91f92(_0x43bdd4) {
    var _0xe86f08 = 8 - (_0x43bdd4.width % 8 || 8);
    var _0x23cd41 = Math.ceil(_0x43bdd4.width / 8) % 4 || 4;
    var _0x504a1f = _0x23cd41 << 3;
    var _0x41f862 = 1 << _0x504a1f - 1 >>> 0;
    var _0x5c7b7c = _0x504a1f - 8;
    var _0x30025d = _0x43bdd4.width % 32 || 32;
    var _0xb5878;
    var _0x2db1f0;
    var _0x4b4578;
    var _0x10a37a = _0x43bdd4.width > 32;
    if (_0x10a37a) {
      _0xb5878 = _0x43bdd4.init.slice();
      _0x2db1f0 = _0x43bdd4.poly.slice();
      _0x2d2281(_0xb5878, _0xe86f08);
      _0x2d2281(_0x2db1f0, _0xe86f08);
      _0x4b4578 = [_0x2db1f0.join("-"), _0x5c7b7c, _0x41f862].join("_");
    } else {
      _0xb5878 = _0x43bdd4.init << _0xe86f08;
      _0x2db1f0 = _0x43bdd4.poly << _0xe86f08;
      _0x4b4578 = [_0x2db1f0, _0x5c7b7c, _0x41f862].join("_");
    }
    var _0x31922c = {
      refin: _0x43bdd4.refin,
      refout: _0x43bdd4.refout,
      xorout: _0x43bdd4.xorout,
      width: _0x43bdd4.width,
      multiWords: _0x10a37a,
      bitOffset: _0xe86f08,
      msb: _0x41f862,
      msbOffset: _0x5c7b7c,
      maskBits: _0x30025d,
      mask: 2 ** _0x30025d - 1,
      crc: _0xb5878,
      poly: _0x2db1f0,
      tableId: _0x4b4578
    };
    var _0x337125 = _0x4cb3a1("hex", _0x31922c);
    _0x337125.create = function () {
      return new _0x2357e8(_0x31922c);
    };
    _0x337125.update = function (_0x19a815) {
      return _0x337125.create().update(_0x19a815);
    };
    for (var _0x565b33 = 0; _0x565b33 < _0x178e89.length; ++_0x565b33) {
      var _0x396158 = _0x178e89[_0x565b33];
      _0x337125[_0x396158] = _0x4cb3a1(_0x396158, _0x31922c);
    }
    return _0x337125;
  }
  function _0x2d2281(_0x3b2f5b, _0x1edaa5) {
    if (!_0x1edaa5) {
      return;
    }
    var _0x16756b = 0;
    for (; _0x16756b < _0x3b2f5b.length - 1; ++_0x16756b) {
      _0x3b2f5b[_0x16756b] = _0x3b2f5b[_0x16756b] << _0x1edaa5 | _0x3b2f5b[_0x16756b + 1] >>> 32 - _0x1edaa5;
    }
    _0x3b2f5b[_0x16756b] = _0x3b2f5b[_0x16756b] << _0x1edaa5;
  }
  function _0x249abb(_0x2c0618, _0x543cc5) {
    if (!_0x543cc5) {
      return;
    }
    var _0x1f1b0c = _0x2c0618.length - 1;
    for (; _0x1f1b0c > 0; --_0x1f1b0c) {
      _0x2c0618[_0x1f1b0c] = _0x2c0618[_0x1f1b0c - 1] << 32 - _0x543cc5 | _0x2c0618[_0x1f1b0c] >>> _0x543cc5;
    }
    _0x2c0618[_0x1f1b0c] = _0x2c0618[_0x1f1b0c] >>> _0x543cc5;
  }
  function _0x5e142c(_0x150bc2, _0x27f316) {
    for (var _0x83e467 = 0; _0x83e467 < _0x150bc2.length; ++_0x83e467) {
      _0x150bc2[_0x83e467] ^= _0x27f316[_0x83e467];
    }
  }
  var _0x9b423 = {};
  function _0x3ea797(_0x6e7767, _0x8157f3, _0x271bf5, _0x4d2bf1) {
    if (!_0x9b423[_0x6e7767]) {
      _0x9b423[_0x6e7767] = _0x41d824(_0x8157f3, _0x271bf5, _0x4d2bf1);
    }
    return _0x9b423[_0x6e7767];
  }
  function _0x41d824(_0xcd032b, _0x53e55e, _0x168c88) {
    var _0x4be54e = [];
    var _0x29ce90 = _0x28a9fd(_0xcd032b);
    if (!_0x29ce90) {
      _0xcd032b = [_0xcd032b];
    }
    for (_0x53d0a4 = 0; _0x53d0a4 < 256; ++_0x53d0a4) {
      var _0x1afd4a = [_0x53d0a4 << _0x53e55e];
      for (var _0x555afd = 1; _0x555afd < _0xcd032b.length; ++_0x555afd) {
        _0x1afd4a[_0x555afd] = 0;
      }
      for (var _0x555afd = 0; _0x555afd < 8; ++_0x555afd) {
        if (_0x1afd4a[0] & _0x168c88) {
          _0x2d2281(_0x1afd4a, 1);
          for (var _0x361acf = 0; _0x361acf < _0xcd032b.length; ++_0x361acf) {
            _0x1afd4a[_0x361acf] = _0x1afd4a[_0x361acf] ^ _0xcd032b[_0x361acf];
          }
        } else {
          _0x2d2281(_0x1afd4a, 1);
        }
      }
      _0x4be54e[_0x53d0a4] = _0x29ce90 ? _0x1afd4a : _0x1afd4a[0];
    }
    return _0x4be54e;
  }
  function _0x43053f(_0x1df99d, _0x2f1153) {
    var _0x4f3f6a = 0;
    for (var _0xdf5cd2 = 0; _0x1df99d; ++_0xdf5cd2) {
      if (_0x1df99d & 1) {
        _0x4f3f6a |= 1 << _0x2f1153 - 1 - _0xdf5cd2;
      }
      _0x1df99d = _0x1df99d >>> 1;
    }
    return _0x4f3f6a;
  }
  var _0x4c9052 = [];
  for (var _0x53d0a4 = 0; _0x53d0a4 < 256; ++_0x53d0a4) {
    _0x4c9052[_0x53d0a4] = _0x43053f(_0x53d0a4, 8);
  }
  function _0x2357e8(_0x27cc4c) {
    this.options = _0x27cc4c;
    this.refin = _0x27cc4c.refin;
    this.multiWords = _0x27cc4c.multiWords;
    this.bitOffset = _0x27cc4c.bitOffset;
    this.msbOffset = _0x27cc4c.msbOffset;
    this.maskBits = _0x27cc4c.maskBits;
    this.mask = _0x27cc4c.mask;
    this.table = _0x3ea797(_0x27cc4c.tableId, _0x27cc4c.poly, this.msbOffset, _0x27cc4c.msb);
    if (this.multiWords) {
      this.crc = _0x27cc4c.crc.slice();
    } else {
      this.crc = _0x27cc4c.crc;
    }
  }
  _0x2357e8.prototype.update = function (_0x47a343) {
    if (this.finalized) {
      throw new Error(_0x593ff0);
    }
    var _0x3911cd = _0x295f7c(_0x47a343);
    _0x47a343 = _0x3911cd[0];
    var _0x1b434b = _0x3911cd[1];
    var _0x556848;
    var _0x3d7673;
    var _0x2c475d = _0x47a343.length;
    if (_0x1b434b) {
      for (_0x3d7673 = 0; _0x3d7673 < _0x2c475d; ++_0x3d7673) {
        _0x556848 = _0x47a343.charCodeAt(_0x3d7673);
        if (_0x556848 < 128) {
          this.updateByte(_0x556848);
        } else if (_0x556848 < 2048) {
          this.updateByte(_0x556848 >> 6 | 192);
          this.updateByte(_0x556848 & 63 | 128);
        } else if (_0x556848 < 55296 || _0x556848 >= 57344) {
          this.updateByte(_0x556848 >> 12 | 224);
          this.updateByte(_0x556848 >> 6 & 63 | 128);
          this.updateByte(_0x556848 & 63 | 128);
        } else {
          _0x556848 = 65536 + ((_0x556848 & 1023) << 10 | _0x47a343.charCodeAt(++_0x3d7673) & 1023);
          this.updateByte(_0x556848 >> 18 | 240);
          this.updateByte(_0x556848 >> 12 & 63 | 128);
          this.updateByte(_0x556848 >> 6 & 63 | 128);
          this.updateByte(_0x556848 & 63 | 128);
        }
      }
    } else {
      for (_0x3d7673 = 0; _0x3d7673 < _0x2c475d; ++_0x3d7673) {
        this.updateByte(_0x47a343[_0x3d7673]);
      }
    }
    return this;
  };
  _0x2357e8.prototype.updateByte = function (_0x320083) {
    var _0x1c6e2a = this.crc;
    if (this.refin) {
      _0x320083 = _0x4c9052[_0x320083];
    }
    if (this.multiWords) {
      _0x1c6e2a[0] = _0x1c6e2a[0] ^ _0x320083 << this.msbOffset;
      var _0x4be668 = this.table[_0x1c6e2a[0] >> this.msbOffset & 255];
      _0x2d2281(_0x1c6e2a, 8);
      _0x5e142c(_0x1c6e2a, _0x4be668);
    } else {
      _0x1c6e2a = _0x1c6e2a ^ _0x320083 << this.msbOffset;
      _0x1c6e2a = _0x1c6e2a << 8 ^ this.table[_0x1c6e2a >> this.msbOffset & 255];
    }
    this.crc = _0x1c6e2a;
  };
  _0x2357e8.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    if (this.multiWords) {
      _0x249abb(this.crc, this.bitOffset);
      this.crc[0] = this.crc[0] & this.mask;
      if (this.options.refout) {
        _0x2d2281(this.crc, 32 - this.maskBits);
        var _0x57f6fd = [];
        for (var _0x562c77 = 0; _0x562c77 < this.crc.length; ++_0x562c77) {
          _0x57f6fd[this.crc.length - _0x562c77 - 1] = _0x43053f(this.crc[_0x562c77], 32);
        }
        this.crc = _0x57f6fd;
      }
      _0x5e142c(this.crc, this.options.xorout);
    } else {
      this.crc = this.crc >>> this.bitOffset & this.mask;
      if (this.options.refout) {
        this.crc = _0x43053f(this.crc, this.options.width);
      }
      this.crc ^= this.options.xorout;
    }
  };
  _0x2357e8.prototype.hex = function () {
    this.finalize();
    var _0x395b9d = "";
    var _0x1b12ab = this.crc;
    var _0x2fc707 = this.options.width;
    if (this.multiWords) {
      _0x1b12ab = _0x1b12ab[0];
      _0x2fc707 = _0x2fc707 % 32 || 32;
    }
    for (var _0x35d9ab = (Math.ceil(_0x2fc707 / 4) << 2) - 4; _0x35d9ab >= 0; _0x35d9ab -= 4) {
      _0x395b9d += _0x5ec628[_0x1b12ab >> _0x35d9ab & 15];
    }
    if (this.multiWords) {
      for (var _0x65ff68 = 1; _0x65ff68 < this.crc.length; ++_0x65ff68) {
        _0x1b12ab = this.crc[_0x65ff68];
        for (_0x35d9ab = 28; _0x35d9ab >= 0; _0x35d9ab -= 4) {
          _0x395b9d += _0x5ec628[_0x1b12ab >> _0x35d9ab & 15];
        }
      }
    }
    return _0x395b9d;
  };
  _0x2357e8.prototype.toString = _0x2357e8.prototype.hex;
  _0x2357e8.prototype.array = function () {
    this.finalize();
    var _0x3342e4 = new Array(Math.ceil(this.options.width / 8));
    var _0x17e7c2 = this.crc;
    var _0x572acb = this.options.width;
    if (this.multiWords) {
      _0x17e7c2 = _0x17e7c2[0];
      _0x572acb = _0x572acb % 32 || 32;
    }
    var _0x357f32 = 0;
    for (var _0x3622df = (Math.ceil(_0x572acb / 8) << 3) - 8; _0x3622df >= 0; _0x3622df -= 8) {
      _0x3342e4[_0x357f32++] = _0x17e7c2 >> _0x3622df & 255;
    }
    if (this.multiWords) {
      for (var _0x1588cc = 1; _0x1588cc < this.crc.length; ++_0x1588cc) {
        _0x17e7c2 = this.crc[_0x1588cc];
        for (_0x3622df = 24; _0x3622df >= 0; _0x3622df -= 8) {
          _0x3342e4[_0x357f32++] = _0x17e7c2 >> _0x3622df & 255;
        }
      }
    }
    return _0x3342e4;
  };
  var _0x2af0d5 = {};
  for (var _0x53d0a4 = 0; _0x53d0a4 < _0x27e701.length; ++_0x53d0a4) {
    var _0x4d592e = _0x27e701[_0x53d0a4];
    _0x2af0d5[_0x4d592e.name] = _0xe91f92(_0x4d592e);
  }
  _0x2af0d5.createModel = _0xe91f92;
  if (_0x9d8b7d) {
    module.exports = _0x2af0d5;
  } else {
    for (_0x53d0a4 = 0; _0x53d0a4 < _0x27e701.length; ++_0x53d0a4) {
      var _0x4d592e = _0x27e701[_0x53d0a4];
      _0x2e0ffc[_0x4d592e.name] = _0x2af0d5[_0x4d592e.name];
    }
    _0x2e0ffc.createModel = _0xe91f92;
    if (_0x2948f0) {
      define(function () {
        return _0x2af0d5;
      });
    }
  }
})();