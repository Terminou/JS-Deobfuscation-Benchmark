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

  var _0x3482dd = "input is invalid type";
  var _0xb108f3 = "finalize already called";
  var _0x36b642 = typeof window === "object";
  var _0x48829d = _0x36b642 ? window : {};
  if (_0x48829d.JS_CRC_NO_WINDOW) {
    _0x36b642 = false;
  }
  var _0x24836f = !_0x36b642 && typeof self === "object";
  var _0x4e597c = !_0x48829d.JS_CRC_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
  if (_0x4e597c) {
    _0x48829d = global;
  } else if (_0x24836f) {
    _0x48829d = self;
  }
  var _0x2baa3e = !_0x48829d.JS_CRC_NO_COMMON_JS && typeof module === "object" && module.exports;
  var _0x5125e4 = typeof define === "function" && define.amd;
  var _0x56ff6b = !_0x48829d.JS_CRC_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
  var _0x3aecf6 = "0123456789abcdef".split("");
  var _0xdff0fc = ["hex", "array"];
  var _0x5ba270 = [{
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
  var _0x154caf = Array.isArray;
  if (_0x48829d.JS_CRC_NO_NODE_JS || !_0x154caf) {
    _0x154caf = function (_0x4502cb) {
      return Object.prototype.toString.call(_0x4502cb) === "[object Array]";
    };
  }
  var _0x215b21 = ArrayBuffer.isView;
  if (_0x56ff6b && (_0x48829d.JS_CRC_NO_ARRAY_BUFFER_IS_VIEW || !_0x215b21)) {
    _0x215b21 = function (_0x548c21) {
      return typeof _0x548c21 === "object" && _0x548c21.buffer && _0x548c21.buffer.constructor === ArrayBuffer;
    };
  }
  function _0xb74160(_0x464bf8) {
    var _0x4aa190 = typeof _0x464bf8;
    if (_0x4aa190 === "string") {
      return [_0x464bf8, true];
    }
    if (_0x4aa190 !== "object" || _0x464bf8 === null) {
      throw new Error(_0x3482dd);
    }
    if (_0x56ff6b && _0x464bf8.constructor === ArrayBuffer) {
      return [new Uint8Array(_0x464bf8), false];
    }
    if (!_0x154caf(_0x464bf8) && !_0x215b21(_0x464bf8)) {
      throw new Error(_0x3482dd);
    }
    return [_0x464bf8, false];
  }
  function _0x45d1e0(_0x3f90de, _0x2d5a54) {
    return function (_0x503464) {
      return new _0x2af609(_0x2d5a54).update(_0x503464)[_0x3f90de]();
    };
  }
  function _0x1e7d82(_0x295631) {
    var _0x135be8 = 8 - (_0x295631.width % 8 || 8);
    var _0x5a5e9b = Math.ceil(_0x295631.width / 8) % 4 || 4;
    var _0x2eb4c6 = _0x5a5e9b << 3;
    var _0xd8a483 = 1 << _0x2eb4c6 - 1 >>> 0;
    var _0x4a23ec = _0x2eb4c6 - 8;
    var _0x300f26 = _0x295631.width % 32 || 32;
    var _0x2adcc5;
    var _0x464951;
    var _0xdda1a8;
    var _0x25e810 = _0x295631.width > 32;
    if (_0x25e810) {
      _0x2adcc5 = _0x295631.init.slice();
      _0x464951 = _0x295631.poly.slice();
      _0xb20b8e(_0x2adcc5, _0x135be8);
      _0xb20b8e(_0x464951, _0x135be8);
      _0xdda1a8 = [_0x464951.join("-"), _0x4a23ec, _0xd8a483].join("_");
    } else {
      _0x2adcc5 = _0x295631.init << _0x135be8;
      _0x464951 = _0x295631.poly << _0x135be8;
      _0xdda1a8 = [_0x464951, _0x4a23ec, _0xd8a483].join("_");
    }
    var _0x743f60 = {
      refin: _0x295631.refin,
      refout: _0x295631.refout,
      xorout: _0x295631.xorout,
      width: _0x295631.width,
      multiWords: _0x25e810,
      bitOffset: _0x135be8,
      msb: _0xd8a483,
      msbOffset: _0x4a23ec,
      maskBits: _0x300f26,
      mask: 2 ** _0x300f26 - 1,
      crc: _0x2adcc5,
      poly: _0x464951,
      tableId: _0xdda1a8
    };
    var _0x3197c7 = _0x45d1e0("hex", _0x743f60);
    _0x3197c7.create = function () {
      return new _0x2af609(_0x743f60);
    };
    _0x3197c7.update = function (_0x55dc83) {
      return _0x3197c7.create().update(_0x55dc83);
    };
    for (var _0x49192e = 0; _0x49192e < _0xdff0fc.length; ++_0x49192e) {
      var _0xcca6c3 = _0xdff0fc[_0x49192e];
      _0x3197c7[_0xcca6c3] = _0x45d1e0(_0xcca6c3, _0x743f60);
    }
    return _0x3197c7;
  }
  function _0xb20b8e(_0x402e46, _0x4771ca) {
    if (!_0x4771ca) {
      return;
    }
    var _0x5cdfc6 = 0;
    for (; _0x5cdfc6 < _0x402e46.length - 1; ++_0x5cdfc6) {
      _0x402e46[_0x5cdfc6] = _0x402e46[_0x5cdfc6] << _0x4771ca | _0x402e46[_0x5cdfc6 + 1] >>> 32 - _0x4771ca;
    }
    _0x402e46[_0x5cdfc6] = _0x402e46[_0x5cdfc6] << _0x4771ca;
  }
  function _0x4430b7(_0x563b38, _0x1b9b97) {
    if (!_0x1b9b97) {
      return;
    }
    var _0xf8a790 = _0x563b38.length - 1;
    for (; _0xf8a790 > 0; --_0xf8a790) {
      _0x563b38[_0xf8a790] = _0x563b38[_0xf8a790 - 1] << 32 - _0x1b9b97 | _0x563b38[_0xf8a790] >>> _0x1b9b97;
    }
    _0x563b38[_0xf8a790] = _0x563b38[_0xf8a790] >>> _0x1b9b97;
  }
  function _0x27eb93(_0x22a92e, _0x375ecb) {
    for (var _0x80f82f = 0; _0x80f82f < _0x22a92e.length; ++_0x80f82f) {
      _0x22a92e[_0x80f82f] ^= _0x375ecb[_0x80f82f];
    }
  }
  var _0x2d8be4 = {};
  function _0x2ae44c(_0x2259d0, _0x4e0f77, _0x3d4a5f, _0x360750) {
    if (!_0x2d8be4[_0x2259d0]) {
      _0x2d8be4[_0x2259d0] = _0x132b9a(_0x4e0f77, _0x3d4a5f, _0x360750);
    }
    return _0x2d8be4[_0x2259d0];
  }
  function _0x132b9a(_0x477e85, _0x44ca67, _0x473a6d) {
    var _0xf3420 = [];
    var _0x3b4c41 = _0x154caf(_0x477e85);
    if (!_0x3b4c41) {
      _0x477e85 = [_0x477e85];
    }
    for (_0x5c8d07 = 0; _0x5c8d07 < 256; ++_0x5c8d07) {
      var _0xa44983 = [_0x5c8d07 << _0x44ca67];
      for (var _0x11757b = 1; _0x11757b < _0x477e85.length; ++_0x11757b) {
        _0xa44983[_0x11757b] = 0;
      }
      for (var _0x11757b = 0; _0x11757b < 8; ++_0x11757b) {
        if (_0xa44983[0] & _0x473a6d) {
          _0xb20b8e(_0xa44983, 1);
          for (var _0x247414 = 0; _0x247414 < _0x477e85.length; ++_0x247414) {
            _0xa44983[_0x247414] = _0xa44983[_0x247414] ^ _0x477e85[_0x247414];
          }
        } else {
          _0xb20b8e(_0xa44983, 1);
        }
      }
      _0xf3420[_0x5c8d07] = _0x3b4c41 ? _0xa44983 : _0xa44983[0];
    }
    return _0xf3420;
  }
  function _0x48ef13(_0x1c2b0a, _0x4eba62) {
    var _0x3161a8 = 0;
    for (var _0x6209dc = 0; _0x1c2b0a; ++_0x6209dc) {
      if (_0x1c2b0a & 1) {
        _0x3161a8 |= 1 << _0x4eba62 - 1 - _0x6209dc;
      }
      _0x1c2b0a = _0x1c2b0a >>> 1;
    }
    return _0x3161a8;
  }
  var _0x164451 = [];
  for (var _0x5c8d07 = 0; _0x5c8d07 < 256; ++_0x5c8d07) {
    _0x164451[_0x5c8d07] = _0x48ef13(_0x5c8d07, 8);
  }
  function _0x2af609(_0x24c169) {
    this.options = _0x24c169;
    this.refin = _0x24c169.refin;
    this.multiWords = _0x24c169.multiWords;
    this.bitOffset = _0x24c169.bitOffset;
    this.msbOffset = _0x24c169.msbOffset;
    this.maskBits = _0x24c169.maskBits;
    this.mask = _0x24c169.mask;
    this.table = _0x2ae44c(_0x24c169.tableId, _0x24c169.poly, this.msbOffset, _0x24c169.msb);
    if (this.multiWords) {
      this.crc = _0x24c169.crc.slice();
    } else {
      this.crc = _0x24c169.crc;
    }
  }
  _0x2af609.prototype.update = function (_0x2c70db) {
    if (this.finalized) {
      throw new Error(_0xb108f3);
    }
    var _0x164e77 = _0xb74160(_0x2c70db);
    _0x2c70db = _0x164e77[0];
    var _0x31bfb3 = _0x164e77[1];
    var _0x33663f;
    var _0x22775e;
    var _0x1cc89a = _0x2c70db.length;
    if (_0x31bfb3) {
      for (_0x22775e = 0; _0x22775e < _0x1cc89a; ++_0x22775e) {
        _0x33663f = _0x2c70db.charCodeAt(_0x22775e);
        if (_0x33663f < 128) {
          this.updateByte(_0x33663f);
        } else if (_0x33663f < 2048) {
          this.updateByte(_0x33663f >> 6 | 192);
          this.updateByte(_0x33663f & 63 | 128);
        } else if (_0x33663f < 55296 || _0x33663f >= 57344) {
          this.updateByte(_0x33663f >> 12 | 224);
          this.updateByte(_0x33663f >> 6 & 63 | 128);
          this.updateByte(_0x33663f & 63 | 128);
        } else {
          _0x33663f = 65536 + ((_0x33663f & 1023) << 10 | _0x2c70db.charCodeAt(++_0x22775e) & 1023);
          this.updateByte(_0x33663f >> 18 | 240);
          this.updateByte(_0x33663f >> 12 & 63 | 128);
          this.updateByte(_0x33663f >> 6 & 63 | 128);
          this.updateByte(_0x33663f & 63 | 128);
        }
      }
    } else {
      for (_0x22775e = 0; _0x22775e < _0x1cc89a; ++_0x22775e) {
        this.updateByte(_0x2c70db[_0x22775e]);
      }
    }
    return this;
  };
  _0x2af609.prototype.updateByte = function (_0x11f016) {
    var _0x36aa6b = this.crc;
    if (this.refin) {
      _0x11f016 = _0x164451[_0x11f016];
    }
    if (this.multiWords) {
      _0x36aa6b[0] = _0x36aa6b[0] ^ _0x11f016 << this.msbOffset;
      var _0x29158c = this.table[_0x36aa6b[0] >> this.msbOffset & 255];
      _0xb20b8e(_0x36aa6b, 8);
      _0x27eb93(_0x36aa6b, _0x29158c);
    } else {
      _0x36aa6b = _0x36aa6b ^ _0x11f016 << this.msbOffset;
      _0x36aa6b = _0x36aa6b << 8 ^ this.table[_0x36aa6b >> this.msbOffset & 255];
    }
    this.crc = _0x36aa6b;
  };
  _0x2af609.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    if (this.multiWords) {
      _0x4430b7(this.crc, this.bitOffset);
      this.crc[0] = this.crc[0] & this.mask;
      if (this.options.refout) {
        _0xb20b8e(this.crc, 32 - this.maskBits);
        var _0x10de60 = [];
        for (var _0x303d6d = 0; _0x303d6d < this.crc.length; ++_0x303d6d) {
          _0x10de60[this.crc.length - _0x303d6d - 1] = _0x48ef13(this.crc[_0x303d6d], 32);
        }
        this.crc = _0x10de60;
      }
      _0x27eb93(this.crc, this.options.xorout);
    } else {
      this.crc = this.crc >>> this.bitOffset & this.mask;
      if (this.options.refout) {
        this.crc = _0x48ef13(this.crc, this.options.width);
      }
      this.crc ^= this.options.xorout;
    }
  };
  _0x2af609.prototype.hex = function () {
    this.finalize();
    var _0x56a754 = "";
    var _0x2e4c1b = this.crc;
    var _0x202b74 = this.options.width;
    if (this.multiWords) {
      _0x2e4c1b = _0x2e4c1b[0];
      _0x202b74 = _0x202b74 % 32 || 32;
    }
    for (var _0x298415 = (Math.ceil(_0x202b74 / 4) << 2) - 4; _0x298415 >= 0; _0x298415 -= 4) {
      _0x56a754 += _0x3aecf6[_0x2e4c1b >> _0x298415 & 15];
    }
    if (this.multiWords) {
      for (var _0x5691c3 = 1; _0x5691c3 < this.crc.length; ++_0x5691c3) {
        _0x2e4c1b = this.crc[_0x5691c3];
        for (_0x298415 = 28; _0x298415 >= 0; _0x298415 -= 4) {
          _0x56a754 += _0x3aecf6[_0x2e4c1b >> _0x298415 & 15];
        }
      }
    }
    return _0x56a754;
  };
  _0x2af609.prototype.toString = _0x2af609.prototype.hex;
  _0x2af609.prototype.array = function () {
    this.finalize();
    var _0x3cd4c4 = new Array(Math.ceil(this.options.width / 8));
    var _0x35c6d4 = this.crc;
    var _0x563211 = this.options.width;
    if (this.multiWords) {
      _0x35c6d4 = _0x35c6d4[0];
      _0x563211 = _0x563211 % 32 || 32;
    }
    var _0xa589c4 = 0;
    for (var _0x4c6e05 = (Math.ceil(_0x563211 / 8) << 3) - 8; _0x4c6e05 >= 0; _0x4c6e05 -= 8) {
      _0x3cd4c4[_0xa589c4++] = _0x35c6d4 >> _0x4c6e05 & 255;
    }
    if (this.multiWords) {
      for (var _0x4e610c = 1; _0x4e610c < this.crc.length; ++_0x4e610c) {
        _0x35c6d4 = this.crc[_0x4e610c];
        for (_0x4c6e05 = 24; _0x4c6e05 >= 0; _0x4c6e05 -= 8) {
          _0x3cd4c4[_0xa589c4++] = _0x35c6d4 >> _0x4c6e05 & 255;
        }
      }
    }
    return _0x3cd4c4;
  };
  var _0x29e636 = {};
  for (var _0x5c8d07 = 0; _0x5c8d07 < _0x5ba270.length; ++_0x5c8d07) {
    var _0x1d3283 = _0x5ba270[_0x5c8d07];
    _0x29e636[_0x1d3283.name] = _0x1e7d82(_0x1d3283);
  }
  _0x29e636.createModel = _0x1e7d82;
  if (_0x2baa3e) {
    module.exports = _0x29e636;
  } else {
    for (_0x5c8d07 = 0; _0x5c8d07 < _0x5ba270.length; ++_0x5c8d07) {
      var _0x1d3283 = _0x5ba270[_0x5c8d07];
      _0x48829d[_0x1d3283.name] = _0x29e636[_0x1d3283.name];
    }
    _0x48829d.createModel = _0x1e7d82;
    if (_0x5125e4) {
      define(function () {
        return _0x29e636;
      });
    }
  }
})();