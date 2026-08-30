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

  var _0x114517 = "input is invalid type";
  var _0xb5d65f = "finalize already called";
  var _0x296768 = typeof window === "object";
  var _0x456dcf = _0x296768 ? window : {};
  if (_0x456dcf.JS_CRC_NO_WINDOW) {
    _0x296768 = false;
  }
  var _0x248b92 = !_0x296768 && typeof self === "object";
  var _0x146109 = !_0x456dcf.JS_CRC_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
  if (_0x146109) {
    _0x456dcf = global;
  } else if (_0x248b92) {
    _0x456dcf = self;
  }
  var _0x2d91ec = !_0x456dcf.JS_CRC_NO_COMMON_JS && typeof module === "object" && module.exports;
  var _0x1d714d = typeof define === "function" && define.amd;
  var _0x5c041a = !_0x456dcf.JS_CRC_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
  var _0x201f51 = "0123456789abcdef".split("");
  var _0x1e64d0 = ["hex", "array"];
  var _0x593ff0 = [{
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
  var _0x39e982 = Array.isArray;
  if (_0x456dcf.JS_CRC_NO_NODE_JS || !_0x39e982) {
    _0x39e982 = function (_0x5e142c) {
      return Object.prototype.toString.call(_0x5e142c) === "[object Array]";
    };
  }
  var _0x2e0ffc = ArrayBuffer.isView;
  if (_0x5c041a && (_0x456dcf.JS_CRC_NO_ARRAY_BUFFER_IS_VIEW || !_0x2e0ffc)) {
    _0x2e0ffc = function (_0x9b423) {
      return typeof _0x9b423 === "object" && _0x9b423.buffer && _0x9b423.buffer.constructor === ArrayBuffer;
    };
  }
  function _0x58e4f2(_0x3ea797) {
    var _0x41d824 = typeof _0x3ea797;
    if (_0x41d824 === "string") {
      return [_0x3ea797, true];
    }
    if (_0x41d824 !== "object" || _0x3ea797 === null) {
      throw new Error(_0x114517);
    }
    if (_0x5c041a && _0x3ea797.constructor === ArrayBuffer) {
      return [new Uint8Array(_0x3ea797), false];
    }
    if (!_0x39e982(_0x3ea797) && !_0x2e0ffc(_0x3ea797)) {
      throw new Error(_0x114517);
    }
    return [_0x3ea797, false];
  }
  function _0x1b8c3f(_0x43053f, _0x4c9052) {
    return function (_0x53d0a4) {
      return new _0xe91f92(_0x4c9052).update(_0x53d0a4)[_0x43053f]();
    };
  }
  function _0x9d8b7d(_0x2357e8) {
    var _0x2af0d5 = 8 - (_0x2357e8.width % 8 || 8);
    var _0x4d592e = Math.ceil(_0x2357e8.width / 8) % 4 || 4;
    var _0x531e57 = _0x4d592e << 3;
    var _0x18dc42 = 1 << _0x531e57 - 1 >>> 0;
    var _0x8ac406 = _0x531e57 - 8;
    var _0x51ee25 = _0x2357e8.width % 32 || 32;
    var _0x8d3a99;
    var _0x1ccb9e;
    var _0x8cd67f;
    var _0x43bdd4 = _0x2357e8.width > 32;
    if (_0x43bdd4) {
      _0x8d3a99 = _0x2357e8.init.slice();
      _0x1ccb9e = _0x2357e8.poly.slice();
      _0x2948f0(_0x8d3a99, _0x2af0d5);
      _0x2948f0(_0x1ccb9e, _0x2af0d5);
      _0x8cd67f = [_0x1ccb9e.join("-"), _0x8ac406, _0x18dc42].join("_");
    } else {
      _0x8d3a99 = _0x2357e8.init << _0x2af0d5;
      _0x1ccb9e = _0x2357e8.poly << _0x2af0d5;
      _0x8cd67f = [_0x1ccb9e, _0x8ac406, _0x18dc42].join("_");
    }
    var _0xe86f08 = {
      refin: _0x2357e8.refin,
      refout: _0x2357e8.refout,
      xorout: _0x2357e8.xorout,
      width: _0x2357e8.width,
      multiWords: _0x43bdd4,
      bitOffset: _0x2af0d5,
      msb: _0x18dc42,
      msbOffset: _0x8ac406,
      maskBits: _0x51ee25,
      mask: 2 ** _0x51ee25 - 1,
      crc: _0x8d3a99,
      poly: _0x1ccb9e,
      tableId: _0x8cd67f
    };
    var _0x23cd41 = _0x1b8c3f("hex", _0xe86f08);
    _0x23cd41.create = function () {
      return new _0xe91f92(_0xe86f08);
    };
    _0x23cd41.update = function (_0x5c7b7c) {
      return _0x23cd41.create().update(_0x5c7b7c);
    };
    for (var _0x504a1f = 0; _0x504a1f < _0x1e64d0.length; ++_0x504a1f) {
      var _0x41f862 = _0x1e64d0[_0x504a1f];
      _0x23cd41[_0x41f862] = _0x1b8c3f(_0x41f862, _0xe86f08);
    }
    return _0x23cd41;
  }
  function _0x2948f0(_0x30025d, _0xb5878) {
    if (!_0xb5878) {
      return;
    }
    var _0x2db1f0 = 0;
    for (; _0x2db1f0 < _0x30025d.length - 1; ++_0x2db1f0) {
      _0x30025d[_0x2db1f0] = _0x30025d[_0x2db1f0] << _0xb5878 | _0x30025d[_0x2db1f0 + 1] >>> 32 - _0xb5878;
    }
    _0x30025d[_0x2db1f0] = _0x30025d[_0x2db1f0] << _0xb5878;
  }
  function _0x3eb40f(_0x4b4578, _0x10a37a) {
    if (!_0x10a37a) {
      return;
    }
    var _0x31922c = _0x4b4578.length - 1;
    for (; _0x31922c > 0; --_0x31922c) {
      _0x4b4578[_0x31922c] = _0x4b4578[_0x31922c - 1] << 32 - _0x10a37a | _0x4b4578[_0x31922c] >>> _0x10a37a;
    }
    _0x4b4578[_0x31922c] = _0x4b4578[_0x31922c] >>> _0x10a37a;
  }
  function _0x5ec628(_0x337125, _0x565b33) {
    for (var _0x396158 = 0; _0x396158 < _0x337125.length; ++_0x396158) {
      _0x337125[_0x396158] ^= _0x565b33[_0x396158];
    }
  }
  var _0x178e89 = {};
  function _0x27e701(_0x19a815, _0x3b2f5b, _0x1edaa5, _0x16756b) {
    if (!_0x178e89[_0x19a815]) {
      _0x178e89[_0x19a815] = _0x28a9fd(_0x3b2f5b, _0x1edaa5, _0x16756b);
    }
    return _0x178e89[_0x19a815];
  }
  function _0x28a9fd(_0x2c0618, _0x543cc5, _0x1f1b0c) {
    var _0x150bc2 = [];
    var _0x27f316 = _0x39e982(_0x2c0618);
    if (!_0x27f316) {
      _0x2c0618 = [_0x2c0618];
    }
    for (_0x4cb3a1 = 0; _0x4cb3a1 < 256; ++_0x4cb3a1) {
      var _0x83e467 = [_0x4cb3a1 << _0x543cc5];
      for (var _0x6e7767 = 1; _0x6e7767 < _0x2c0618.length; ++_0x6e7767) {
        _0x83e467[_0x6e7767] = 0;
      }
      for (var _0x6e7767 = 0; _0x6e7767 < 8; ++_0x6e7767) {
        if (_0x83e467[0] & _0x1f1b0c) {
          _0x2948f0(_0x83e467, 1);
          for (var _0x8157f3 = 0; _0x8157f3 < _0x2c0618.length; ++_0x8157f3) {
            _0x83e467[_0x8157f3] = _0x83e467[_0x8157f3] ^ _0x2c0618[_0x8157f3];
          }
        } else {
          _0x2948f0(_0x83e467, 1);
        }
      }
      _0x150bc2[_0x4cb3a1] = _0x27f316 ? _0x83e467 : _0x83e467[0];
    }
    return _0x150bc2;
  }
  function _0x31cdbf(_0x271bf5, _0x4d2bf1) {
    var _0xcd032b = 0;
    for (var _0x53e55e = 0; _0x271bf5; ++_0x53e55e) {
      if (_0x271bf5 & 1) {
        _0xcd032b |= 1 << _0x4d2bf1 - 1 - _0x53e55e;
      }
      _0x271bf5 = _0x271bf5 >>> 1;
    }
    return _0xcd032b;
  }
  var _0x295f7c = [];
  for (var _0x4cb3a1 = 0; _0x4cb3a1 < 256; ++_0x4cb3a1) {
    _0x295f7c[_0x4cb3a1] = _0x31cdbf(_0x4cb3a1, 8);
  }
  function _0xe91f92(_0x168c88) {
    this.options = _0x168c88;
    this.refin = _0x168c88.refin;
    this.multiWords = _0x168c88.multiWords;
    this.bitOffset = _0x168c88.bitOffset;
    this.msbOffset = _0x168c88.msbOffset;
    this.maskBits = _0x168c88.maskBits;
    this.mask = _0x168c88.mask;
    this.table = _0x27e701(_0x168c88.tableId, _0x168c88.poly, this.msbOffset, _0x168c88.msb);
    if (this.multiWords) {
      this.crc = _0x168c88.crc.slice();
    } else {
      this.crc = _0x168c88.crc;
    }
  }
  _0xe91f92.prototype.update = function (_0x4be54e) {
    if (this.finalized) {
      throw new Error(_0xb5d65f);
    }
    var _0x29ce90 = _0x58e4f2(_0x4be54e);
    _0x4be54e = _0x29ce90[0];
    var _0x1afd4a = _0x29ce90[1];
    var _0x555afd;
    var _0x361acf;
    var _0x1df99d = _0x4be54e.length;
    if (_0x1afd4a) {
      for (_0x361acf = 0; _0x361acf < _0x1df99d; ++_0x361acf) {
        _0x555afd = _0x4be54e.charCodeAt(_0x361acf);
        if (_0x555afd < 128) {
          this.updateByte(_0x555afd);
        } else if (_0x555afd < 2048) {
          this.updateByte(_0x555afd >> 6 | 192);
          this.updateByte(_0x555afd & 63 | 128);
        } else if (_0x555afd < 55296 || _0x555afd >= 57344) {
          this.updateByte(_0x555afd >> 12 | 224);
          this.updateByte(_0x555afd >> 6 & 63 | 128);
          this.updateByte(_0x555afd & 63 | 128);
        } else {
          _0x555afd = 65536 + ((_0x555afd & 1023) << 10 | _0x4be54e.charCodeAt(++_0x361acf) & 1023);
          this.updateByte(_0x555afd >> 18 | 240);
          this.updateByte(_0x555afd >> 12 & 63 | 128);
          this.updateByte(_0x555afd >> 6 & 63 | 128);
          this.updateByte(_0x555afd & 63 | 128);
        }
      }
    } else {
      for (_0x361acf = 0; _0x361acf < _0x1df99d; ++_0x361acf) {
        this.updateByte(_0x4be54e[_0x361acf]);
      }
    }
    return this;
  };
  _0xe91f92.prototype.updateByte = function (_0x2f1153) {
    var _0x4f3f6a = this.crc;
    if (this.refin) {
      _0x2f1153 = _0x295f7c[_0x2f1153];
    }
    if (this.multiWords) {
      _0x4f3f6a[0] = _0x4f3f6a[0] ^ _0x2f1153 << this.msbOffset;
      var _0xdf5cd2 = this.table[_0x4f3f6a[0] >> this.msbOffset & 255];
      _0x2948f0(_0x4f3f6a, 8);
      _0x5ec628(_0x4f3f6a, _0xdf5cd2);
    } else {
      _0x4f3f6a = _0x4f3f6a ^ _0x2f1153 << this.msbOffset;
      _0x4f3f6a = _0x4f3f6a << 8 ^ this.table[_0x4f3f6a >> this.msbOffset & 255];
    }
    this.crc = _0x4f3f6a;
  };
  _0xe91f92.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    if (this.multiWords) {
      _0x3eb40f(this.crc, this.bitOffset);
      this.crc[0] = this.crc[0] & this.mask;
      if (this.options.refout) {
        _0x2948f0(this.crc, 32 - this.maskBits);
        var _0x27cc4c = [];
        for (var _0x47a343 = 0; _0x47a343 < this.crc.length; ++_0x47a343) {
          _0x27cc4c[this.crc.length - _0x47a343 - 1] = _0x31cdbf(this.crc[_0x47a343], 32);
        }
        this.crc = _0x27cc4c;
      }
      _0x5ec628(this.crc, this.options.xorout);
    } else {
      this.crc = this.crc >>> this.bitOffset & this.mask;
      if (this.options.refout) {
        this.crc = _0x31cdbf(this.crc, this.options.width);
      }
      this.crc ^= this.options.xorout;
    }
  };
  _0xe91f92.prototype.hex = function () {
    this.finalize();
    var _0x3911cd = "";
    var _0x1b434b = this.crc;
    var _0x556848 = this.options.width;
    if (this.multiWords) {
      _0x1b434b = _0x1b434b[0];
      _0x556848 = _0x556848 % 32 || 32;
    }
    for (var _0x3d7673 = (Math.ceil(_0x556848 / 4) << 2) - 4; _0x3d7673 >= 0; _0x3d7673 -= 4) {
      _0x3911cd += _0x201f51[_0x1b434b >> _0x3d7673 & 15];
    }
    if (this.multiWords) {
      for (var _0x2c475d = 1; _0x2c475d < this.crc.length; ++_0x2c475d) {
        _0x1b434b = this.crc[_0x2c475d];
        for (_0x3d7673 = 28; _0x3d7673 >= 0; _0x3d7673 -= 4) {
          _0x3911cd += _0x201f51[_0x1b434b >> _0x3d7673 & 15];
        }
      }
    }
    return _0x3911cd;
  };
  _0xe91f92.prototype.toString = _0xe91f92.prototype.hex;
  _0xe91f92.prototype.array = function () {
    this.finalize();
    var _0x320083 = new Array(Math.ceil(this.options.width / 8));
    var _0x1c6e2a = this.crc;
    var _0x4be668 = this.options.width;
    if (this.multiWords) {
      _0x1c6e2a = _0x1c6e2a[0];
      _0x4be668 = _0x4be668 % 32 || 32;
    }
    var _0x57f6fd = 0;
    for (var _0x562c77 = (Math.ceil(_0x4be668 / 8) << 3) - 8; _0x562c77 >= 0; _0x562c77 -= 8) {
      _0x320083[_0x57f6fd++] = _0x1c6e2a >> _0x562c77 & 255;
    }
    if (this.multiWords) {
      for (var _0x395b9d = 1; _0x395b9d < this.crc.length; ++_0x395b9d) {
        _0x1c6e2a = this.crc[_0x395b9d];
        for (_0x562c77 = 24; _0x562c77 >= 0; _0x562c77 -= 8) {
          _0x320083[_0x57f6fd++] = _0x1c6e2a >> _0x562c77 & 255;
        }
      }
    }
    return _0x320083;
  };
  var _0x2d2281 = {};
  for (var _0x4cb3a1 = 0; _0x4cb3a1 < _0x593ff0.length; ++_0x4cb3a1) {
    var _0x249abb = _0x593ff0[_0x4cb3a1];
    _0x2d2281[_0x249abb.name] = _0x9d8b7d(_0x249abb);
  }
  _0x2d2281.createModel = _0x9d8b7d;
  if (_0x2d91ec) {
    module.exports = _0x2d2281;
  } else {
    for (_0x4cb3a1 = 0; _0x4cb3a1 < _0x593ff0.length; ++_0x4cb3a1) {
      var _0x249abb = _0x593ff0[_0x4cb3a1];
      _0x456dcf[_0x249abb.name] = _0x2d2281[_0x249abb.name];
    }
    _0x456dcf.createModel = _0x9d8b7d;
    if (_0x1d714d) {
      define(function () {
        return _0x2d2281;
      });
    }
  }
})();