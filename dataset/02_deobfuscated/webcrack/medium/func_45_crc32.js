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

  var _0x370508 = "input is invalid type";
  var _0x13e695 = "finalize already called";
  var _0xcff315 = typeof window === "object";
  var _0x3ec8f2 = _0xcff315 ? window : {};
  if (_0x3ec8f2.JS_CRC_NO_WINDOW) {
    _0xcff315 = false;
  }
  var _0x2626f4 = !_0xcff315 && typeof self === "object";
  var _0x155d28 = !_0x3ec8f2.JS_CRC_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
  if (_0x155d28) {
    _0x3ec8f2 = global;
  } else if (_0x2626f4) {
    _0x3ec8f2 = self;
  }
  var _0x39add4 = !_0x3ec8f2.JS_CRC_NO_COMMON_JS && typeof module === "object" && module.exports;
  var _0x1570a7 = typeof define === "function" && define.amd;
  var _0x875264 = !_0x3ec8f2.JS_CRC_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
  var _0x4dbcf2 = "0123456789abcdef".split("");
  var _0x51897e = ["hex", "array"];
  var _0x56dccb = [{
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
  var _0x7e9fc = Array.isArray;
  if (_0x3ec8f2.JS_CRC_NO_NODE_JS || !_0x7e9fc) {
    _0x7e9fc = function (_0x19bb47) {
      return Object.prototype.toString.call(_0x19bb47) === "[object Array]";
    };
  }
  var _0x4a9578 = ArrayBuffer.isView;
  if (_0x875264 && (_0x3ec8f2.JS_CRC_NO_ARRAY_BUFFER_IS_VIEW || !_0x4a9578)) {
    _0x4a9578 = function (_0x4471a0) {
      return typeof _0x4471a0 === "object" && _0x4471a0.buffer && _0x4471a0.buffer.constructor === ArrayBuffer;
    };
  }
  function _0x5506fc(_0x37d8e5) {
    var _0x329210 = typeof _0x37d8e5;
    if (_0x329210 === "string") {
      return [_0x37d8e5, true];
    }
    if (_0x329210 !== "object" || _0x37d8e5 === null) {
      throw new Error(_0x370508);
    }
    if (_0x875264 && _0x37d8e5.constructor === ArrayBuffer) {
      return [new Uint8Array(_0x37d8e5), false];
    }
    if (!_0x7e9fc(_0x37d8e5) && !_0x4a9578(_0x37d8e5)) {
      throw new Error(_0x370508);
    }
    return [_0x37d8e5, false];
  }
  function _0xe02827(_0x545b11, _0x4c98b0) {
    return function (_0xb84ae4) {
      return new _0x396317(_0x4c98b0).update(_0xb84ae4)[_0x545b11]();
    };
  }
  function _0x5d6997(_0x247296) {
    var _0x215fd0 = 8 - (_0x247296.width % 8 || 8);
    var _0x40270d = Math.ceil(_0x247296.width / 8) % 4 || 4;
    var _0x5906dd = _0x40270d << 3;
    var _0xab4952 = 1 << _0x5906dd - 1 >>> 0;
    var _0x1a5441 = _0x5906dd - 8;
    var _0x3a59d5 = _0x247296.width % 32 || 32;
    var _0x2d6d94;
    var _0x676589;
    var _0x26973b;
    var _0x35f6e4 = _0x247296.width > 32;
    if (_0x35f6e4) {
      _0x2d6d94 = _0x247296.init.slice();
      _0x676589 = _0x247296.poly.slice();
      _0x1c128f(_0x2d6d94, _0x215fd0);
      _0x1c128f(_0x676589, _0x215fd0);
      _0x26973b = [_0x676589.join("-"), _0x1a5441, _0xab4952].join("_");
    } else {
      _0x2d6d94 = _0x247296.init << _0x215fd0;
      _0x676589 = _0x247296.poly << _0x215fd0;
      _0x26973b = [_0x676589, _0x1a5441, _0xab4952].join("_");
    }
    var _0x493bfd = {
      refin: _0x247296.refin,
      refout: _0x247296.refout,
      xorout: _0x247296.xorout,
      width: _0x247296.width,
      multiWords: _0x35f6e4,
      bitOffset: _0x215fd0,
      msb: _0xab4952,
      msbOffset: _0x1a5441,
      maskBits: _0x3a59d5,
      mask: 2 ** _0x3a59d5 - 1,
      crc: _0x2d6d94,
      poly: _0x676589,
      tableId: _0x26973b
    };
    var _0x3b2149 = _0xe02827("hex", _0x493bfd);
    _0x3b2149.create = function () {
      return new _0x396317(_0x493bfd);
    };
    _0x3b2149.update = function (_0x19a7ed) {
      return _0x3b2149.create().update(_0x19a7ed);
    };
    for (var _0x48f0a9 = 0; _0x48f0a9 < _0x51897e.length; ++_0x48f0a9) {
      var _0x27a088 = _0x51897e[_0x48f0a9];
      _0x3b2149[_0x27a088] = _0xe02827(_0x27a088, _0x493bfd);
    }
    return _0x3b2149;
  }
  function _0x1c128f(_0x4bd994, _0x4da153) {
    if (!_0x4da153) {
      return;
    }
    var _0x439db8 = 0;
    for (; _0x439db8 < _0x4bd994.length - 1; ++_0x439db8) {
      _0x4bd994[_0x439db8] = _0x4bd994[_0x439db8] << _0x4da153 | _0x4bd994[_0x439db8 + 1] >>> 32 - _0x4da153;
    }
    _0x4bd994[_0x439db8] = _0x4bd994[_0x439db8] << _0x4da153;
  }
  function _0x2b55f8(_0x18690c, _0x463dea) {
    if (!_0x463dea) {
      return;
    }
    var _0x36ed1c = _0x18690c.length - 1;
    for (; _0x36ed1c > 0; --_0x36ed1c) {
      _0x18690c[_0x36ed1c] = _0x18690c[_0x36ed1c - 1] << 32 - _0x463dea | _0x18690c[_0x36ed1c] >>> _0x463dea;
    }
    _0x18690c[_0x36ed1c] = _0x18690c[_0x36ed1c] >>> _0x463dea;
  }
  function _0x163a34(_0x20aa1b, _0x56b2dc) {
    for (var _0x23901c = 0; _0x23901c < _0x20aa1b.length; ++_0x23901c) {
      _0x20aa1b[_0x23901c] ^= _0x56b2dc[_0x23901c];
    }
  }
  var _0x336352 = {};
  function _0x4a18cf(_0x2456f8, _0x5544e2, _0x27e71c, _0x297018) {
    if (!_0x336352[_0x2456f8]) {
      _0x336352[_0x2456f8] = _0x88c320(_0x5544e2, _0x27e71c, _0x297018);
    }
    return _0x336352[_0x2456f8];
  }
  function _0x88c320(_0x4c64db, _0x52ae61, _0x406adb) {
    var _0x1f6dd3 = [];
    var _0x12b335 = _0x7e9fc(_0x4c64db);
    if (!_0x12b335) {
      _0x4c64db = [_0x4c64db];
    }
    for (_0x1e7940 = 0; _0x1e7940 < 256; ++_0x1e7940) {
      var _0xf9fc46 = [_0x1e7940 << _0x52ae61];
      for (var _0x2004bb = 1; _0x2004bb < _0x4c64db.length; ++_0x2004bb) {
        _0xf9fc46[_0x2004bb] = 0;
      }
      for (var _0x2004bb = 0; _0x2004bb < 8; ++_0x2004bb) {
        if (_0xf9fc46[0] & _0x406adb) {
          _0x1c128f(_0xf9fc46, 1);
          for (var _0xa1120d = 0; _0xa1120d < _0x4c64db.length; ++_0xa1120d) {
            _0xf9fc46[_0xa1120d] = _0xf9fc46[_0xa1120d] ^ _0x4c64db[_0xa1120d];
          }
        } else {
          _0x1c128f(_0xf9fc46, 1);
        }
      }
      _0x1f6dd3[_0x1e7940] = _0x12b335 ? _0xf9fc46 : _0xf9fc46[0];
    }
    return _0x1f6dd3;
  }
  function _0x436bff(_0xbc743a, _0x5e73c5) {
    var _0x471ec6 = 0;
    for (var _0x389fd0 = 0; _0xbc743a; ++_0x389fd0) {
      if (_0xbc743a & 1) {
        _0x471ec6 |= 1 << _0x5e73c5 - 1 - _0x389fd0;
      }
      _0xbc743a = _0xbc743a >>> 1;
    }
    return _0x471ec6;
  }
  var _0x3bdddf = [];
  for (var _0x1e7940 = 0; _0x1e7940 < 256; ++_0x1e7940) {
    _0x3bdddf[_0x1e7940] = _0x436bff(_0x1e7940, 8);
  }
  function _0x396317(_0x10eb90) {
    this.options = _0x10eb90;
    this.refin = _0x10eb90.refin;
    this.multiWords = _0x10eb90.multiWords;
    this.bitOffset = _0x10eb90.bitOffset;
    this.msbOffset = _0x10eb90.msbOffset;
    this.maskBits = _0x10eb90.maskBits;
    this.mask = _0x10eb90.mask;
    this.table = _0x4a18cf(_0x10eb90.tableId, _0x10eb90.poly, this.msbOffset, _0x10eb90.msb);
    if (this.multiWords) {
      this.crc = _0x10eb90.crc.slice();
    } else {
      this.crc = _0x10eb90.crc;
    }
  }
  _0x396317.prototype.update = function (_0x2b7b3f) {
    if (this.finalized) {
      throw new Error(_0x13e695);
    }
    var _0x229ff5 = _0x5506fc(_0x2b7b3f);
    _0x2b7b3f = _0x229ff5[0];
    var _0x1f894a = _0x229ff5[1];
    var _0x271810;
    var _0xd29494;
    var _0x8dc4e1 = _0x2b7b3f.length;
    if (_0x1f894a) {
      for (_0xd29494 = 0; _0xd29494 < _0x8dc4e1; ++_0xd29494) {
        _0x271810 = _0x2b7b3f.charCodeAt(_0xd29494);
        if (_0x271810 < 128) {
          this.updateByte(_0x271810);
        } else if (_0x271810 < 2048) {
          this.updateByte(_0x271810 >> 6 | 192);
          this.updateByte(_0x271810 & 63 | 128);
        } else if (_0x271810 < 55296 || _0x271810 >= 57344) {
          this.updateByte(_0x271810 >> 12 | 224);
          this.updateByte(_0x271810 >> 6 & 63 | 128);
          this.updateByte(_0x271810 & 63 | 128);
        } else {
          _0x271810 = 65536 + ((_0x271810 & 1023) << 10 | _0x2b7b3f.charCodeAt(++_0xd29494) & 1023);
          this.updateByte(_0x271810 >> 18 | 240);
          this.updateByte(_0x271810 >> 12 & 63 | 128);
          this.updateByte(_0x271810 >> 6 & 63 | 128);
          this.updateByte(_0x271810 & 63 | 128);
        }
      }
    } else {
      for (_0xd29494 = 0; _0xd29494 < _0x8dc4e1; ++_0xd29494) {
        this.updateByte(_0x2b7b3f[_0xd29494]);
      }
    }
    return this;
  };
  _0x396317.prototype.updateByte = function (_0x3aa650) {
    var _0x3f9c43 = this.crc;
    if (this.refin) {
      _0x3aa650 = _0x3bdddf[_0x3aa650];
    }
    if (this.multiWords) {
      _0x3f9c43[0] = _0x3f9c43[0] ^ _0x3aa650 << this.msbOffset;
      var _0x50b657 = this.table[_0x3f9c43[0] >> this.msbOffset & 255];
      _0x1c128f(_0x3f9c43, 8);
      _0x163a34(_0x3f9c43, _0x50b657);
    } else {
      _0x3f9c43 = _0x3f9c43 ^ _0x3aa650 << this.msbOffset;
      _0x3f9c43 = _0x3f9c43 << 8 ^ this.table[_0x3f9c43 >> this.msbOffset & 255];
    }
    this.crc = _0x3f9c43;
  };
  _0x396317.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    if (this.multiWords) {
      _0x2b55f8(this.crc, this.bitOffset);
      this.crc[0] = this.crc[0] & this.mask;
      if (this.options.refout) {
        _0x1c128f(this.crc, 32 - this.maskBits);
        var _0x5c2922 = [];
        for (var _0x53df77 = 0; _0x53df77 < this.crc.length; ++_0x53df77) {
          _0x5c2922[this.crc.length - _0x53df77 - 1] = _0x436bff(this.crc[_0x53df77], 32);
        }
        this.crc = _0x5c2922;
      }
      _0x163a34(this.crc, this.options.xorout);
    } else {
      this.crc = this.crc >>> this.bitOffset & this.mask;
      if (this.options.refout) {
        this.crc = _0x436bff(this.crc, this.options.width);
      }
      this.crc ^= this.options.xorout;
    }
  };
  _0x396317.prototype.hex = function () {
    this.finalize();
    var _0x2e41b7 = "";
    var _0x10b680 = this.crc;
    var _0x12ba02 = this.options.width;
    if (this.multiWords) {
      _0x10b680 = _0x10b680[0];
      _0x12ba02 = _0x12ba02 % 32 || 32;
    }
    for (var _0x49fca0 = (Math.ceil(_0x12ba02 / 4) << 2) - 4; _0x49fca0 >= 0; _0x49fca0 -= 4) {
      _0x2e41b7 += _0x4dbcf2[_0x10b680 >> _0x49fca0 & 15];
    }
    if (this.multiWords) {
      for (var _0x2d267a = 1; _0x2d267a < this.crc.length; ++_0x2d267a) {
        _0x10b680 = this.crc[_0x2d267a];
        for (_0x49fca0 = 28; _0x49fca0 >= 0; _0x49fca0 -= 4) {
          _0x2e41b7 += _0x4dbcf2[_0x10b680 >> _0x49fca0 & 15];
        }
      }
    }
    return _0x2e41b7;
  };
  _0x396317.prototype.toString = _0x396317.prototype.hex;
  _0x396317.prototype.array = function () {
    this.finalize();
    var _0x4288dd = new Array(Math.ceil(this.options.width / 8));
    var _0x7ddb12 = this.crc;
    var _0x2e458f = this.options.width;
    if (this.multiWords) {
      _0x7ddb12 = _0x7ddb12[0];
      _0x2e458f = _0x2e458f % 32 || 32;
    }
    var _0x3f22aa = 0;
    for (var _0xe6ca3 = (Math.ceil(_0x2e458f / 8) << 3) - 8; _0xe6ca3 >= 0; _0xe6ca3 -= 8) {
      _0x4288dd[_0x3f22aa++] = _0x7ddb12 >> _0xe6ca3 & 255;
    }
    if (this.multiWords) {
      for (var _0x5bd7af = 1; _0x5bd7af < this.crc.length; ++_0x5bd7af) {
        _0x7ddb12 = this.crc[_0x5bd7af];
        for (_0xe6ca3 = 24; _0xe6ca3 >= 0; _0xe6ca3 -= 8) {
          _0x4288dd[_0x3f22aa++] = _0x7ddb12 >> _0xe6ca3 & 255;
        }
      }
    }
    return _0x4288dd;
  };
  var _0x3293e7 = {};
  for (var _0x1e7940 = 0; _0x1e7940 < _0x56dccb.length; ++_0x1e7940) {
    var _0x515ac7 = _0x56dccb[_0x1e7940];
    _0x3293e7[_0x515ac7.name] = _0x5d6997(_0x515ac7);
  }
  _0x3293e7.createModel = _0x5d6997;
  if (_0x39add4) {
    module.exports = _0x3293e7;
  } else {
    for (_0x1e7940 = 0; _0x1e7940 < _0x56dccb.length; ++_0x1e7940) {
      var _0x515ac7 = _0x56dccb[_0x1e7940];
      _0x3ec8f2[_0x515ac7.name] = _0x3293e7[_0x515ac7.name];
    }
    _0x3ec8f2.createModel = _0x5d6997;
    if (_0x1570a7) {
      define(function () {
        return _0x3293e7;
      });
    }
  }
})();