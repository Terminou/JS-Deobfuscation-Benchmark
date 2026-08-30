/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.9.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2023
 * @license MIT
 */
(function () {
  'use strict';

  var _0x33d29a = "input is invalid type";
  var _0x1faf06 = "finalize already called";
  var _0x4f8c9d = typeof window === "object";
  var _0x5e1c97 = _0x4f8c9d ? window : {};
  if (_0x5e1c97.JS_SHA3_NO_WINDOW) {
    _0x4f8c9d = false;
  }
  var _0x5ccaad = !_0x4f8c9d && typeof self === "object";
  var _0x2d5d2f = !_0x5e1c97.JS_SHA3_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
  if (_0x2d5d2f) {
    _0x5e1c97 = global;
  } else if (_0x5ccaad) {
    _0x5e1c97 = self;
  }
  var _0x380473 = !_0x5e1c97.JS_SHA3_NO_COMMON_JS && typeof module === "object" && module.exports;
  var _0x5e9043 = typeof define === "function" && define.amd;
  var _0x392eae = !_0x5e1c97.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
  var _0x2e313a = "0123456789abcdef".split("");
  var _0x740894 = [31, 7936, 2031616, 520093696];
  var _0x321ec5 = [4, 1024, 262144, 67108864];
  var _0x2bc417 = [1, 256, 65536, 16777216];
  var _0x4dc3c4 = [6, 1536, 393216, 100663296];
  var _0x17414c = [0, 8, 16, 24];
  var _0x31e0df = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
  var _0x739402 = [224, 256, 384, 512];
  var _0x2e9837 = [128, 256];
  var _0x40707e = ["hex", "buffer", "arrayBuffer", "array", "digest"];
  var _0x53d392 = {
    "128": 168,
    "256": 136
  };
  var _0x3d6491 = _0x5e1c97.JS_SHA3_NO_NODE_JS || !Array.isArray ? function (_0x5dc74d) {
    return Object.prototype.toString.call(_0x5dc74d) === "[object Array]";
  } : Array.isArray;
  var _0xd58d01 = _0x392eae && (_0x5e1c97.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) ? function (_0x36023b) {
    return typeof _0x36023b === "object" && _0x36023b.buffer && _0x36023b.buffer.constructor === ArrayBuffer;
  } : ArrayBuffer.isView;
  function _0xd938ed(_0x148d87) {
    var _0xe4d472 = typeof _0x148d87;
    if (_0xe4d472 === "string") {
      return [_0x148d87, true];
    }
    if (_0xe4d472 !== "object" || _0x148d87 === null) {
      throw new Error(_0x33d29a);
    }
    if (_0x392eae && _0x148d87.constructor === ArrayBuffer) {
      return [new Uint8Array(_0x148d87), false];
    }
    if (!_0x3d6491(_0x148d87) && !_0xd58d01(_0x148d87)) {
      throw new Error(_0x33d29a);
    }
    return [_0x148d87, false];
  }
  function _0x135a88(_0x59b901) {
    return _0xd938ed(_0x59b901)[0].length === 0;
  }
  function _0x1e4976(_0x37e4ed) {
    var _0x48cd81 = [];
    for (var _0x5734d8 = 0; _0x5734d8 < _0x37e4ed.length; ++_0x5734d8) {
      _0x48cd81[_0x5734d8] = _0x37e4ed[_0x5734d8];
    }
    return _0x48cd81;
  }
  function _0x223f49(_0x51822e, _0x13bf75, _0x1fa407) {
    return function (_0x15551a) {
      return new _0x2053ed(_0x51822e, _0x13bf75, _0x51822e).update(_0x15551a)[_0x1fa407]();
    };
  }
  function _0x2281dd(_0x1ca073, _0x365167, _0x1c2d29) {
    return function (_0x11067f, _0x56c6bf) {
      return new _0x2053ed(_0x1ca073, _0x365167, _0x56c6bf).update(_0x11067f)[_0x1c2d29]();
    };
  }
  function _0x338a9e(_0x54ef32, _0x4cb922, _0x28d9f1) {
    return function (_0x7bb889, _0x5f4562, _0x2bc1a5, _0x26d7a5) {
      return _0x45c393["cshake" + _0x54ef32].update(_0x7bb889, _0x5f4562, _0x2bc1a5, _0x26d7a5)[_0x28d9f1]();
    };
  }
  function _0x58eb40(_0x431a5a, _0x20ccf6, _0x96ec8c) {
    return function (_0x4ef930, _0x10a615, _0xa34dbf, _0x22d982) {
      return _0x45c393["kmac" + _0x431a5a].update(_0x4ef930, _0x10a615, _0xa34dbf, _0x22d982)[_0x96ec8c]();
    };
  }
  function _0x4acf25(_0x4406f8, _0x26e847, _0x4281b7, _0x1ccee0) {
    for (var _0x14aa7d = 0; _0x14aa7d < _0x40707e.length; ++_0x14aa7d) {
      var _0x2d9d0e = _0x40707e[_0x14aa7d];
      _0x4406f8[_0x2d9d0e] = _0x26e847(_0x4281b7, _0x1ccee0, _0x2d9d0e);
    }
    return _0x4406f8;
  }
  function _0x545f6b(_0x563211, _0x28b235) {
    var _0x34e5f6 = _0x223f49(_0x563211, _0x28b235, "hex");
    _0x34e5f6.create = function () {
      return new _0x2053ed(_0x563211, _0x28b235, _0x563211);
    };
    _0x34e5f6.update = function (_0x39aac5) {
      return _0x34e5f6.create().update(_0x39aac5);
    };
    return _0x4acf25(_0x34e5f6, _0x223f49, _0x563211, _0x28b235);
  }
  function _0x5e3426(_0x2934f2, _0x39f09f) {
    var _0x142aef = _0x2281dd(_0x2934f2, _0x39f09f, "hex");
    _0x142aef.create = function (_0x46a349) {
      return new _0x2053ed(_0x2934f2, _0x39f09f, _0x46a349);
    };
    _0x142aef.update = function (_0x3b308b, _0x261462) {
      return _0x142aef.create(_0x261462).update(_0x3b308b);
    };
    return _0x4acf25(_0x142aef, _0x2281dd, _0x2934f2, _0x39f09f);
  }
  function _0x5dafb9(_0x4caae5, _0x4f63a6) {
    var _0xc02efe = _0x53d392[_0x4caae5];
    var _0x1dca92 = _0x338a9e(_0x4caae5, _0x4f63a6, "hex");
    _0x1dca92.create = function (_0x1eab4e, _0x368f9f, _0x4bdc5b) {
      if (_0x135a88(_0x368f9f) && _0x135a88(_0x4bdc5b)) {
        return _0x45c393["shake" + _0x4caae5].create(_0x1eab4e);
      } else {
        return new _0x2053ed(_0x4caae5, _0x4f63a6, _0x1eab4e).bytepad([_0x368f9f, _0x4bdc5b], _0xc02efe);
      }
    };
    _0x1dca92.update = function (_0x56b4eb, _0x177ca5, _0x5a6ff7, _0x3f5ebf) {
      return _0x1dca92.create(_0x177ca5, _0x5a6ff7, _0x3f5ebf).update(_0x56b4eb);
    };
    return _0x4acf25(_0x1dca92, _0x338a9e, _0x4caae5, _0x4f63a6);
  }
  function _0x2877a3(_0xd760f, _0x456df3) {
    var _0x272438 = _0x53d392[_0xd760f];
    var _0x1e5e36 = _0x58eb40(_0xd760f, _0x456df3, "hex");
    _0x1e5e36.create = function (_0xd513f4, _0x497c17, _0x4096e8) {
      return new _0x21dc34(_0xd760f, _0x456df3, _0x497c17).bytepad(["KMAC", _0x4096e8], _0x272438).bytepad([_0xd513f4], _0x272438);
    };
    _0x1e5e36.update = function (_0x344123, _0xdebea6, _0x1cb564, _0x54f3a2) {
      return _0x1e5e36.create(_0x344123, _0x1cb564, _0x54f3a2).update(_0xdebea6);
    };
    return _0x4acf25(_0x1e5e36, _0x58eb40, _0xd760f, _0x456df3);
  }
  var _0x158156 = {
    name: "keccak",
    padding: _0x2bc417,
    bits: _0x739402,
    createMethod: _0x545f6b
  };
  var _0x56813e = {
    name: "sha3",
    padding: _0x4dc3c4,
    bits: _0x739402,
    createMethod: _0x545f6b
  };
  var _0x22f9f0 = {
    name: "shake",
    padding: _0x740894,
    bits: _0x2e9837,
    createMethod: _0x5e3426
  };
  var _0x2d2d70 = {
    name: "cshake",
    padding: _0x321ec5,
    bits: _0x2e9837,
    createMethod: _0x5dafb9
  };
  var _0x48153b = {
    name: "kmac",
    padding: _0x321ec5,
    bits: _0x2e9837,
    createMethod: _0x2877a3
  };
  var _0x25f03e = [_0x158156, _0x56813e, _0x22f9f0, _0x2d2d70, _0x48153b];
  var _0x45c393 = {};
  var _0x2c7a8b = [];
  for (var _0x53bc74 = 0; _0x53bc74 < _0x25f03e.length; ++_0x53bc74) {
    var _0x1b2a3b = _0x25f03e[_0x53bc74];
    var _0x283135 = _0x1b2a3b.bits;
    for (var _0x2eed6e = 0; _0x2eed6e < _0x283135.length; ++_0x2eed6e) {
      var _0x944aac = _0x1b2a3b.name + "_" + _0x283135[_0x2eed6e];
      _0x2c7a8b.push(_0x944aac);
      _0x45c393[_0x944aac] = _0x1b2a3b.createMethod(_0x283135[_0x2eed6e], _0x1b2a3b.padding);
      if (_0x1b2a3b.name !== "sha3") {
        var _0x64c584 = _0x1b2a3b.name + _0x283135[_0x2eed6e];
        _0x2c7a8b.push(_0x64c584);
        _0x45c393[_0x64c584] = _0x45c393[_0x944aac];
      }
    }
  }
  function _0x2053ed(_0x57eceb, _0x2ee691, _0x21556e) {
    this.blocks = [];
    this.s = [];
    this.padding = _0x2ee691;
    this.outputBits = _0x21556e;
    this.reset = true;
    this.finalized = false;
    this.block = 0;
    this.start = 0;
    this.blockCount = 1600 - (_0x57eceb << 1) >> 5;
    this.byteCount = this.blockCount << 2;
    this.outputBlocks = _0x21556e >> 5;
    this.extraBytes = (_0x21556e & 31) >> 3;
    for (var _0x4641c2 = 0; _0x4641c2 < 50; ++_0x4641c2) {
      this.s[_0x4641c2] = 0;
    }
  }
  _0x2053ed.prototype.update = function (_0x3d5e76) {
    if (this.finalized) {
      throw new Error(_0x1faf06);
    }
    var _0x2d7ed9 = _0xd938ed(_0x3d5e76);
    _0x3d5e76 = _0x2d7ed9[0];
    var _0x462424 = _0x2d7ed9[1];
    var _0x3acb50 = this.blocks;
    var _0x2d0ab6 = this.byteCount;
    var _0x27af03 = _0x3d5e76.length;
    var _0x1556e7 = this.blockCount;
    var _0x17d364 = 0;
    var _0x4c3200 = this.s;
    var _0x8e015b;
    var _0x10ac06;
    while (_0x17d364 < _0x27af03) {
      if (this.reset) {
        this.reset = false;
        _0x3acb50[0] = this.block;
        for (_0x8e015b = 1; _0x8e015b < _0x1556e7 + 1; ++_0x8e015b) {
          _0x3acb50[_0x8e015b] = 0;
        }
      }
      if (_0x462424) {
        for (_0x8e015b = this.start; _0x17d364 < _0x27af03 && _0x8e015b < _0x2d0ab6; ++_0x17d364) {
          _0x10ac06 = _0x3d5e76.charCodeAt(_0x17d364);
          if (_0x10ac06 < 128) {
            _0x3acb50[_0x8e015b >> 2] |= _0x10ac06 << _0x17414c[_0x8e015b++ & 3];
          } else if (_0x10ac06 < 2048) {
            _0x3acb50[_0x8e015b >> 2] |= (_0x10ac06 >> 6 | 192) << _0x17414c[_0x8e015b++ & 3];
            _0x3acb50[_0x8e015b >> 2] |= (_0x10ac06 & 63 | 128) << _0x17414c[_0x8e015b++ & 3];
          } else if (_0x10ac06 < 55296 || _0x10ac06 >= 57344) {
            _0x3acb50[_0x8e015b >> 2] |= (_0x10ac06 >> 12 | 224) << _0x17414c[_0x8e015b++ & 3];
            _0x3acb50[_0x8e015b >> 2] |= (_0x10ac06 >> 6 & 63 | 128) << _0x17414c[_0x8e015b++ & 3];
            _0x3acb50[_0x8e015b >> 2] |= (_0x10ac06 & 63 | 128) << _0x17414c[_0x8e015b++ & 3];
          } else {
            _0x10ac06 = 65536 + ((_0x10ac06 & 1023) << 10 | _0x3d5e76.charCodeAt(++_0x17d364) & 1023);
            _0x3acb50[_0x8e015b >> 2] |= (_0x10ac06 >> 18 | 240) << _0x17414c[_0x8e015b++ & 3];
            _0x3acb50[_0x8e015b >> 2] |= (_0x10ac06 >> 12 & 63 | 128) << _0x17414c[_0x8e015b++ & 3];
            _0x3acb50[_0x8e015b >> 2] |= (_0x10ac06 >> 6 & 63 | 128) << _0x17414c[_0x8e015b++ & 3];
            _0x3acb50[_0x8e015b >> 2] |= (_0x10ac06 & 63 | 128) << _0x17414c[_0x8e015b++ & 3];
          }
        }
      } else {
        for (_0x8e015b = this.start; _0x17d364 < _0x27af03 && _0x8e015b < _0x2d0ab6; ++_0x17d364) {
          _0x3acb50[_0x8e015b >> 2] |= _0x3d5e76[_0x17d364] << _0x17414c[_0x8e015b++ & 3];
        }
      }
      this.lastByteIndex = _0x8e015b;
      if (_0x8e015b >= _0x2d0ab6) {
        this.start = _0x8e015b - _0x2d0ab6;
        this.block = _0x3acb50[_0x1556e7];
        for (_0x8e015b = 0; _0x8e015b < _0x1556e7; ++_0x8e015b) {
          _0x4c3200[_0x8e015b] ^= _0x3acb50[_0x8e015b];
        }
        _0x2bbfd5(_0x4c3200);
        this.reset = true;
      } else {
        this.start = _0x8e015b;
      }
    }
    return this;
  };
  _0x2053ed.prototype.encode = function (_0x33f185, _0x19e999) {
    var _0x154c40 = _0x33f185 & 255;
    var _0x42bee9 = 1;
    var _0x351637 = [_0x154c40];
    _0x33f185 = _0x33f185 >> 8;
    _0x154c40 = _0x33f185 & 255;
    while (_0x154c40 > 0) {
      _0x351637.unshift(_0x154c40);
      _0x33f185 = _0x33f185 >> 8;
      _0x154c40 = _0x33f185 & 255;
      ++_0x42bee9;
    }
    if (_0x19e999) {
      _0x351637.push(_0x42bee9);
    } else {
      _0x351637.unshift(_0x42bee9);
    }
    this.update(_0x351637);
    return _0x351637.length;
  };
  _0x2053ed.prototype.encodeString = function (_0x59ff20) {
    var _0xcc3b8e = _0xd938ed(_0x59ff20);
    _0x59ff20 = _0xcc3b8e[0];
    var _0x4d0e86 = _0xcc3b8e[1];
    var _0x36a4b1 = 0;
    var _0x11012f = _0x59ff20.length;
    if (_0x4d0e86) {
      for (var _0x3a0d91 = 0; _0x3a0d91 < _0x59ff20.length; ++_0x3a0d91) {
        var _0x189fea = _0x59ff20.charCodeAt(_0x3a0d91);
        if (_0x189fea < 128) {
          _0x36a4b1 += 1;
        } else if (_0x189fea < 2048) {
          _0x36a4b1 += 2;
        } else if (_0x189fea < 55296 || _0x189fea >= 57344) {
          _0x36a4b1 += 3;
        } else {
          _0x189fea = 65536 + ((_0x189fea & 1023) << 10 | _0x59ff20.charCodeAt(++_0x3a0d91) & 1023);
          _0x36a4b1 += 4;
        }
      }
    } else {
      _0x36a4b1 = _0x11012f;
    }
    _0x36a4b1 += this.encode(_0x36a4b1 * 8);
    this.update(_0x59ff20);
    return _0x36a4b1;
  };
  _0x2053ed.prototype.bytepad = function (_0x3185ee, _0x34eaa0) {
    var _0x423d63 = this.encode(_0x34eaa0);
    for (var _0x1e624f = 0; _0x1e624f < _0x3185ee.length; ++_0x1e624f) {
      _0x423d63 += this.encodeString(_0x3185ee[_0x1e624f]);
    }
    var _0x596ecf = (_0x34eaa0 - _0x423d63 % _0x34eaa0) % _0x34eaa0;
    var _0x326312 = [];
    _0x326312.length = _0x596ecf;
    this.update(_0x326312);
    return this;
  };
  _0x2053ed.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var _0x338dc1 = this.blocks;
    var _0x72b68 = this.lastByteIndex;
    var _0x3c75f3 = this.blockCount;
    var _0xa45c8a = this.s;
    _0x338dc1[_0x72b68 >> 2] |= this.padding[_0x72b68 & 3];
    if (this.lastByteIndex === this.byteCount) {
      _0x338dc1[0] = _0x338dc1[_0x3c75f3];
      for (_0x72b68 = 1; _0x72b68 < _0x3c75f3 + 1; ++_0x72b68) {
        _0x338dc1[_0x72b68] = 0;
      }
    }
    _0x338dc1[_0x3c75f3 - 1] |= 2147483648;
    for (_0x72b68 = 0; _0x72b68 < _0x3c75f3; ++_0x72b68) {
      _0xa45c8a[_0x72b68] ^= _0x338dc1[_0x72b68];
    }
    _0x2bbfd5(_0xa45c8a);
  };
  _0x2053ed.prototype.toString = _0x2053ed.prototype.hex = function () {
    this.finalize();
    var _0x4c82b4 = this.blockCount;
    var _0x3f4755 = this.s;
    var _0x23dd36 = this.outputBlocks;
    var _0x5c6bd3 = this.extraBytes;
    var _0x295932 = 0;
    var _0x261c1d = 0;
    var _0x370759 = "";
    var _0x4d8966;
    while (_0x261c1d < _0x23dd36) {
      for (_0x295932 = 0; _0x295932 < _0x4c82b4 && _0x261c1d < _0x23dd36; ++_0x295932, ++_0x261c1d) {
        _0x4d8966 = _0x3f4755[_0x295932];
        _0x370759 += _0x2e313a[_0x4d8966 >> 4 & 15] + _0x2e313a[_0x4d8966 & 15] + _0x2e313a[_0x4d8966 >> 12 & 15] + _0x2e313a[_0x4d8966 >> 8 & 15] + _0x2e313a[_0x4d8966 >> 20 & 15] + _0x2e313a[_0x4d8966 >> 16 & 15] + _0x2e313a[_0x4d8966 >> 28 & 15] + _0x2e313a[_0x4d8966 >> 24 & 15];
      }
      if (_0x261c1d % _0x4c82b4 === 0) {
        _0x3f4755 = _0x1e4976(_0x3f4755);
        _0x2bbfd5(_0x3f4755);
        _0x295932 = 0;
      }
    }
    if (_0x5c6bd3) {
      _0x4d8966 = _0x3f4755[_0x295932];
      _0x370759 += _0x2e313a[_0x4d8966 >> 4 & 15] + _0x2e313a[_0x4d8966 & 15];
      if (_0x5c6bd3 > 1) {
        _0x370759 += _0x2e313a[_0x4d8966 >> 12 & 15] + _0x2e313a[_0x4d8966 >> 8 & 15];
      }
      if (_0x5c6bd3 > 2) {
        _0x370759 += _0x2e313a[_0x4d8966 >> 20 & 15] + _0x2e313a[_0x4d8966 >> 16 & 15];
      }
    }
    return _0x370759;
  };
  _0x2053ed.prototype.arrayBuffer = function () {
    this.finalize();
    var _0x52b769 = this.blockCount;
    var _0x1639ef = this.s;
    var _0x5c8a39 = this.outputBlocks;
    var _0x1b444f = this.extraBytes;
    var _0x261dad = 0;
    var _0x5ba43a = 0;
    var _0x197210 = this.outputBits >> 3;
    var _0x124bfc;
    if (_0x1b444f) {
      _0x124bfc = new ArrayBuffer(_0x5c8a39 + 1 << 2);
    } else {
      _0x124bfc = new ArrayBuffer(_0x197210);
    }
    var _0xba26bf = new Uint32Array(_0x124bfc);
    while (_0x5ba43a < _0x5c8a39) {
      for (_0x261dad = 0; _0x261dad < _0x52b769 && _0x5ba43a < _0x5c8a39; ++_0x261dad, ++_0x5ba43a) {
        _0xba26bf[_0x5ba43a] = _0x1639ef[_0x261dad];
      }
      if (_0x5ba43a % _0x52b769 === 0) {
        _0x1639ef = _0x1e4976(_0x1639ef);
        _0x2bbfd5(_0x1639ef);
      }
    }
    if (_0x1b444f) {
      _0xba26bf[_0x5ba43a] = _0x1639ef[_0x261dad];
      _0x124bfc = _0x124bfc.slice(0, _0x197210);
    }
    return _0x124bfc;
  };
  _0x2053ed.prototype.buffer = _0x2053ed.prototype.arrayBuffer;
  _0x2053ed.prototype.digest = _0x2053ed.prototype.array = function () {
    this.finalize();
    var _0x116e03 = this.blockCount;
    var _0x585410 = this.s;
    var _0x1b3f80 = this.outputBlocks;
    var _0x430796 = this.extraBytes;
    var _0xf711ba = 0;
    var _0x3f2862 = 0;
    var _0x5aab96 = [];
    var _0x3f6d6e;
    var _0x233dd4;
    while (_0x3f2862 < _0x1b3f80) {
      for (_0xf711ba = 0; _0xf711ba < _0x116e03 && _0x3f2862 < _0x1b3f80; ++_0xf711ba, ++_0x3f2862) {
        _0x3f6d6e = _0x3f2862 << 2;
        _0x233dd4 = _0x585410[_0xf711ba];
        _0x5aab96[_0x3f6d6e] = _0x233dd4 & 255;
        _0x5aab96[_0x3f6d6e + 1] = _0x233dd4 >> 8 & 255;
        _0x5aab96[_0x3f6d6e + 2] = _0x233dd4 >> 16 & 255;
        _0x5aab96[_0x3f6d6e + 3] = _0x233dd4 >> 24 & 255;
      }
      if (_0x3f2862 % _0x116e03 === 0) {
        _0x585410 = _0x1e4976(_0x585410);
        _0x2bbfd5(_0x585410);
      }
    }
    if (_0x430796) {
      _0x3f6d6e = _0x3f2862 << 2;
      _0x233dd4 = _0x585410[_0xf711ba];
      _0x5aab96[_0x3f6d6e] = _0x233dd4 & 255;
      if (_0x430796 > 1) {
        _0x5aab96[_0x3f6d6e + 1] = _0x233dd4 >> 8 & 255;
      }
      if (_0x430796 > 2) {
        _0x5aab96[_0x3f6d6e + 2] = _0x233dd4 >> 16 & 255;
      }
    }
    return _0x5aab96;
  };
  function _0x21dc34(_0x1f9457, _0x106f64, _0x1125b2) {
    _0x2053ed.call(this, _0x1f9457, _0x106f64, _0x1125b2);
  }
  _0x21dc34.prototype = new _0x2053ed();
  _0x21dc34.prototype.finalize = function () {
    this.encode(this.outputBits, true);
    return _0x2053ed.prototype.finalize.call(this);
  };
  function _0x2bbfd5(_0xccfde2) {
    var _0x2b96a7;
    var _0x4d4a9a;
    var _0x342e09;
    var _0x4123f9;
    var _0x6262d0;
    var _0x124897;
    var _0x387d98;
    var _0x203811;
    var _0x440dd6;
    var _0x1b14d0;
    var _0x261735;
    var _0x3fe153;
    var _0x2f5b2f;
    var _0x581b40;
    var _0x157cb0;
    var _0x2dce24;
    var _0x5cb376;
    var _0x308810;
    var _0x1d5eda;
    var _0x148844;
    var _0x546bb3;
    var _0x356439;
    var _0xc44316;
    var _0x286220;
    var _0x30a795;
    var _0x47f3c1;
    var _0x16cf48;
    var _0x28499c;
    var _0x43e5ad;
    var _0x381c5c;
    var _0x33b902;
    var _0x31a375;
    var _0xf367c7;
    var _0x19b891;
    var _0x1c9178;
    var _0x4991c0;
    var _0x29cdfb;
    var _0x3a1388;
    var _0x2297d1;
    var _0x725099;
    var _0x2144fe;
    var _0x283b80;
    var _0x58e580;
    var _0x4c8147;
    var _0x49d3d0;
    var _0x1eafaf;
    var _0x44664e;
    var _0x3b8f9d;
    var _0x36d3f2;
    var _0x1a17ee;
    var _0x2e1686;
    var _0x5f15cc;
    var _0x1ef46f;
    var _0xc7d193;
    var _0x4be42a;
    var _0x2a549b;
    var _0x25fbc7;
    var _0x358782;
    var _0x4bbae0;
    var _0x3e1650;
    var _0x3a6525;
    var _0x1c6705;
    var _0x200f07;
    for (_0x342e09 = 0; _0x342e09 < 48; _0x342e09 += 2) {
      _0x4123f9 = _0xccfde2[0] ^ _0xccfde2[10] ^ _0xccfde2[20] ^ _0xccfde2[30] ^ _0xccfde2[40];
      _0x6262d0 = _0xccfde2[1] ^ _0xccfde2[11] ^ _0xccfde2[21] ^ _0xccfde2[31] ^ _0xccfde2[41];
      _0x124897 = _0xccfde2[2] ^ _0xccfde2[12] ^ _0xccfde2[22] ^ _0xccfde2[32] ^ _0xccfde2[42];
      _0x387d98 = _0xccfde2[3] ^ _0xccfde2[13] ^ _0xccfde2[23] ^ _0xccfde2[33] ^ _0xccfde2[43];
      _0x203811 = _0xccfde2[4] ^ _0xccfde2[14] ^ _0xccfde2[24] ^ _0xccfde2[34] ^ _0xccfde2[44];
      _0x440dd6 = _0xccfde2[5] ^ _0xccfde2[15] ^ _0xccfde2[25] ^ _0xccfde2[35] ^ _0xccfde2[45];
      _0x1b14d0 = _0xccfde2[6] ^ _0xccfde2[16] ^ _0xccfde2[26] ^ _0xccfde2[36] ^ _0xccfde2[46];
      _0x261735 = _0xccfde2[7] ^ _0xccfde2[17] ^ _0xccfde2[27] ^ _0xccfde2[37] ^ _0xccfde2[47];
      _0x3fe153 = _0xccfde2[8] ^ _0xccfde2[18] ^ _0xccfde2[28] ^ _0xccfde2[38] ^ _0xccfde2[48];
      _0x2f5b2f = _0xccfde2[9] ^ _0xccfde2[19] ^ _0xccfde2[29] ^ _0xccfde2[39] ^ _0xccfde2[49];
      _0x2b96a7 = _0x3fe153 ^ (_0x124897 << 1 | _0x387d98 >>> 31);
      _0x4d4a9a = _0x2f5b2f ^ (_0x387d98 << 1 | _0x124897 >>> 31);
      _0xccfde2[0] ^= _0x2b96a7;
      _0xccfde2[1] ^= _0x4d4a9a;
      _0xccfde2[10] ^= _0x2b96a7;
      _0xccfde2[11] ^= _0x4d4a9a;
      _0xccfde2[20] ^= _0x2b96a7;
      _0xccfde2[21] ^= _0x4d4a9a;
      _0xccfde2[30] ^= _0x2b96a7;
      _0xccfde2[31] ^= _0x4d4a9a;
      _0xccfde2[40] ^= _0x2b96a7;
      _0xccfde2[41] ^= _0x4d4a9a;
      _0x2b96a7 = _0x4123f9 ^ (_0x203811 << 1 | _0x440dd6 >>> 31);
      _0x4d4a9a = _0x6262d0 ^ (_0x440dd6 << 1 | _0x203811 >>> 31);
      _0xccfde2[2] ^= _0x2b96a7;
      _0xccfde2[3] ^= _0x4d4a9a;
      _0xccfde2[12] ^= _0x2b96a7;
      _0xccfde2[13] ^= _0x4d4a9a;
      _0xccfde2[22] ^= _0x2b96a7;
      _0xccfde2[23] ^= _0x4d4a9a;
      _0xccfde2[32] ^= _0x2b96a7;
      _0xccfde2[33] ^= _0x4d4a9a;
      _0xccfde2[42] ^= _0x2b96a7;
      _0xccfde2[43] ^= _0x4d4a9a;
      _0x2b96a7 = _0x124897 ^ (_0x1b14d0 << 1 | _0x261735 >>> 31);
      _0x4d4a9a = _0x387d98 ^ (_0x261735 << 1 | _0x1b14d0 >>> 31);
      _0xccfde2[4] ^= _0x2b96a7;
      _0xccfde2[5] ^= _0x4d4a9a;
      _0xccfde2[14] ^= _0x2b96a7;
      _0xccfde2[15] ^= _0x4d4a9a;
      _0xccfde2[24] ^= _0x2b96a7;
      _0xccfde2[25] ^= _0x4d4a9a;
      _0xccfde2[34] ^= _0x2b96a7;
      _0xccfde2[35] ^= _0x4d4a9a;
      _0xccfde2[44] ^= _0x2b96a7;
      _0xccfde2[45] ^= _0x4d4a9a;
      _0x2b96a7 = _0x203811 ^ (_0x3fe153 << 1 | _0x2f5b2f >>> 31);
      _0x4d4a9a = _0x440dd6 ^ (_0x2f5b2f << 1 | _0x3fe153 >>> 31);
      _0xccfde2[6] ^= _0x2b96a7;
      _0xccfde2[7] ^= _0x4d4a9a;
      _0xccfde2[16] ^= _0x2b96a7;
      _0xccfde2[17] ^= _0x4d4a9a;
      _0xccfde2[26] ^= _0x2b96a7;
      _0xccfde2[27] ^= _0x4d4a9a;
      _0xccfde2[36] ^= _0x2b96a7;
      _0xccfde2[37] ^= _0x4d4a9a;
      _0xccfde2[46] ^= _0x2b96a7;
      _0xccfde2[47] ^= _0x4d4a9a;
      _0x2b96a7 = _0x1b14d0 ^ (_0x4123f9 << 1 | _0x6262d0 >>> 31);
      _0x4d4a9a = _0x261735 ^ (_0x6262d0 << 1 | _0x4123f9 >>> 31);
      _0xccfde2[8] ^= _0x2b96a7;
      _0xccfde2[9] ^= _0x4d4a9a;
      _0xccfde2[18] ^= _0x2b96a7;
      _0xccfde2[19] ^= _0x4d4a9a;
      _0xccfde2[28] ^= _0x2b96a7;
      _0xccfde2[29] ^= _0x4d4a9a;
      _0xccfde2[38] ^= _0x2b96a7;
      _0xccfde2[39] ^= _0x4d4a9a;
      _0xccfde2[48] ^= _0x2b96a7;
      _0xccfde2[49] ^= _0x4d4a9a;
      _0x581b40 = _0xccfde2[0];
      _0x157cb0 = _0xccfde2[1];
      _0x1eafaf = _0xccfde2[11] << 4 | _0xccfde2[10] >>> 28;
      _0x44664e = _0xccfde2[10] << 4 | _0xccfde2[11] >>> 28;
      _0x28499c = _0xccfde2[20] << 3 | _0xccfde2[21] >>> 29;
      _0x43e5ad = _0xccfde2[21] << 3 | _0xccfde2[20] >>> 29;
      _0x3e1650 = _0xccfde2[31] << 9 | _0xccfde2[30] >>> 23;
      _0x3a6525 = _0xccfde2[30] << 9 | _0xccfde2[31] >>> 23;
      _0x283b80 = _0xccfde2[40] << 18 | _0xccfde2[41] >>> 14;
      _0x58e580 = _0xccfde2[41] << 18 | _0xccfde2[40] >>> 14;
      _0x19b891 = _0xccfde2[2] << 1 | _0xccfde2[3] >>> 31;
      _0x1c9178 = _0xccfde2[3] << 1 | _0xccfde2[2] >>> 31;
      _0x2dce24 = _0xccfde2[13] << 12 | _0xccfde2[12] >>> 20;
      _0x5cb376 = _0xccfde2[12] << 12 | _0xccfde2[13] >>> 20;
      _0x3b8f9d = _0xccfde2[22] << 10 | _0xccfde2[23] >>> 22;
      _0x36d3f2 = _0xccfde2[23] << 10 | _0xccfde2[22] >>> 22;
      _0x381c5c = _0xccfde2[33] << 13 | _0xccfde2[32] >>> 19;
      _0x33b902 = _0xccfde2[32] << 13 | _0xccfde2[33] >>> 19;
      _0x1c6705 = _0xccfde2[42] << 2 | _0xccfde2[43] >>> 30;
      _0x200f07 = _0xccfde2[43] << 2 | _0xccfde2[42] >>> 30;
      _0xc7d193 = _0xccfde2[5] << 30 | _0xccfde2[4] >>> 2;
      _0x4be42a = _0xccfde2[4] << 30 | _0xccfde2[5] >>> 2;
      _0x4991c0 = _0xccfde2[14] << 6 | _0xccfde2[15] >>> 26;
      _0x29cdfb = _0xccfde2[15] << 6 | _0xccfde2[14] >>> 26;
      _0x308810 = _0xccfde2[25] << 11 | _0xccfde2[24] >>> 21;
      _0x1d5eda = _0xccfde2[24] << 11 | _0xccfde2[25] >>> 21;
      _0x1a17ee = _0xccfde2[34] << 15 | _0xccfde2[35] >>> 17;
      _0x2e1686 = _0xccfde2[35] << 15 | _0xccfde2[34] >>> 17;
      _0x31a375 = _0xccfde2[45] << 29 | _0xccfde2[44] >>> 3;
      _0xf367c7 = _0xccfde2[44] << 29 | _0xccfde2[45] >>> 3;
      _0x286220 = _0xccfde2[6] << 28 | _0xccfde2[7] >>> 4;
      _0x30a795 = _0xccfde2[7] << 28 | _0xccfde2[6] >>> 4;
      _0x2a549b = _0xccfde2[17] << 23 | _0xccfde2[16] >>> 9;
      _0x25fbc7 = _0xccfde2[16] << 23 | _0xccfde2[17] >>> 9;
      _0x3a1388 = _0xccfde2[26] << 25 | _0xccfde2[27] >>> 7;
      _0x2297d1 = _0xccfde2[27] << 25 | _0xccfde2[26] >>> 7;
      _0x148844 = _0xccfde2[36] << 21 | _0xccfde2[37] >>> 11;
      _0x546bb3 = _0xccfde2[37] << 21 | _0xccfde2[36] >>> 11;
      _0x5f15cc = _0xccfde2[47] << 24 | _0xccfde2[46] >>> 8;
      _0x1ef46f = _0xccfde2[46] << 24 | _0xccfde2[47] >>> 8;
      _0x4c8147 = _0xccfde2[8] << 27 | _0xccfde2[9] >>> 5;
      _0x49d3d0 = _0xccfde2[9] << 27 | _0xccfde2[8] >>> 5;
      _0x47f3c1 = _0xccfde2[18] << 20 | _0xccfde2[19] >>> 12;
      _0x16cf48 = _0xccfde2[19] << 20 | _0xccfde2[18] >>> 12;
      _0x358782 = _0xccfde2[29] << 7 | _0xccfde2[28] >>> 25;
      _0x4bbae0 = _0xccfde2[28] << 7 | _0xccfde2[29] >>> 25;
      _0x725099 = _0xccfde2[38] << 8 | _0xccfde2[39] >>> 24;
      _0x2144fe = _0xccfde2[39] << 8 | _0xccfde2[38] >>> 24;
      _0x356439 = _0xccfde2[48] << 14 | _0xccfde2[49] >>> 18;
      _0xc44316 = _0xccfde2[49] << 14 | _0xccfde2[48] >>> 18;
      _0xccfde2[0] = _0x581b40 ^ ~_0x2dce24 & _0x308810;
      _0xccfde2[1] = _0x157cb0 ^ ~_0x5cb376 & _0x1d5eda;
      _0xccfde2[10] = _0x286220 ^ ~_0x47f3c1 & _0x28499c;
      _0xccfde2[11] = _0x30a795 ^ ~_0x16cf48 & _0x43e5ad;
      _0xccfde2[20] = _0x19b891 ^ ~_0x4991c0 & _0x3a1388;
      _0xccfde2[21] = _0x1c9178 ^ ~_0x29cdfb & _0x2297d1;
      _0xccfde2[30] = _0x4c8147 ^ ~_0x1eafaf & _0x3b8f9d;
      _0xccfde2[31] = _0x49d3d0 ^ ~_0x44664e & _0x36d3f2;
      _0xccfde2[40] = _0xc7d193 ^ ~_0x2a549b & _0x358782;
      _0xccfde2[41] = _0x4be42a ^ ~_0x25fbc7 & _0x4bbae0;
      _0xccfde2[2] = _0x2dce24 ^ ~_0x308810 & _0x148844;
      _0xccfde2[3] = _0x5cb376 ^ ~_0x1d5eda & _0x546bb3;
      _0xccfde2[12] = _0x47f3c1 ^ ~_0x28499c & _0x381c5c;
      _0xccfde2[13] = _0x16cf48 ^ ~_0x43e5ad & _0x33b902;
      _0xccfde2[22] = _0x4991c0 ^ ~_0x3a1388 & _0x725099;
      _0xccfde2[23] = _0x29cdfb ^ ~_0x2297d1 & _0x2144fe;
      _0xccfde2[32] = _0x1eafaf ^ ~_0x3b8f9d & _0x1a17ee;
      _0xccfde2[33] = _0x44664e ^ ~_0x36d3f2 & _0x2e1686;
      _0xccfde2[42] = _0x2a549b ^ ~_0x358782 & _0x3e1650;
      _0xccfde2[43] = _0x25fbc7 ^ ~_0x4bbae0 & _0x3a6525;
      _0xccfde2[4] = _0x308810 ^ ~_0x148844 & _0x356439;
      _0xccfde2[5] = _0x1d5eda ^ ~_0x546bb3 & _0xc44316;
      _0xccfde2[14] = _0x28499c ^ ~_0x381c5c & _0x31a375;
      _0xccfde2[15] = _0x43e5ad ^ ~_0x33b902 & _0xf367c7;
      _0xccfde2[24] = _0x3a1388 ^ ~_0x725099 & _0x283b80;
      _0xccfde2[25] = _0x2297d1 ^ ~_0x2144fe & _0x58e580;
      _0xccfde2[34] = _0x3b8f9d ^ ~_0x1a17ee & _0x5f15cc;
      _0xccfde2[35] = _0x36d3f2 ^ ~_0x2e1686 & _0x1ef46f;
      _0xccfde2[44] = _0x358782 ^ ~_0x3e1650 & _0x1c6705;
      _0xccfde2[45] = _0x4bbae0 ^ ~_0x3a6525 & _0x200f07;
      _0xccfde2[6] = _0x148844 ^ ~_0x356439 & _0x581b40;
      _0xccfde2[7] = _0x546bb3 ^ ~_0xc44316 & _0x157cb0;
      _0xccfde2[16] = _0x381c5c ^ ~_0x31a375 & _0x286220;
      _0xccfde2[17] = _0x33b902 ^ ~_0xf367c7 & _0x30a795;
      _0xccfde2[26] = _0x725099 ^ ~_0x283b80 & _0x19b891;
      _0xccfde2[27] = _0x2144fe ^ ~_0x58e580 & _0x1c9178;
      _0xccfde2[36] = _0x1a17ee ^ ~_0x5f15cc & _0x4c8147;
      _0xccfde2[37] = _0x2e1686 ^ ~_0x1ef46f & _0x49d3d0;
      _0xccfde2[46] = _0x3e1650 ^ ~_0x1c6705 & _0xc7d193;
      _0xccfde2[47] = _0x3a6525 ^ ~_0x200f07 & _0x4be42a;
      _0xccfde2[8] = _0x356439 ^ ~_0x581b40 & _0x2dce24;
      _0xccfde2[9] = _0xc44316 ^ ~_0x157cb0 & _0x5cb376;
      _0xccfde2[18] = _0x31a375 ^ ~_0x286220 & _0x47f3c1;
      _0xccfde2[19] = _0xf367c7 ^ ~_0x30a795 & _0x16cf48;
      _0xccfde2[28] = _0x283b80 ^ ~_0x19b891 & _0x4991c0;
      _0xccfde2[29] = _0x58e580 ^ ~_0x1c9178 & _0x29cdfb;
      _0xccfde2[38] = _0x5f15cc ^ ~_0x4c8147 & _0x1eafaf;
      _0xccfde2[39] = _0x1ef46f ^ ~_0x49d3d0 & _0x44664e;
      _0xccfde2[48] = _0x1c6705 ^ ~_0xc7d193 & _0x2a549b;
      _0xccfde2[49] = _0x200f07 ^ ~_0x4be42a & _0x25fbc7;
      _0xccfde2[0] ^= _0x31e0df[_0x342e09];
      _0xccfde2[1] ^= _0x31e0df[_0x342e09 + 1];
    }
  }
  if (_0x380473) {
    module.exports = _0x45c393;
  } else {
    for (_0x53bc74 = 0; _0x53bc74 < _0x2c7a8b.length; ++_0x53bc74) {
      _0x5e1c97[_0x2c7a8b[_0x53bc74]] = _0x45c393[_0x2c7a8b[_0x53bc74]];
    }
    if (_0x5e9043) {
      define(function () {
        return _0x45c393;
      });
    }
  }
})();