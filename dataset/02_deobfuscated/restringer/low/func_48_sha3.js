/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.9.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2023
 * @license MIT
 */
function _0x21bc(_0x55acc9, _0x36cddd) {
  _0x55acc9 = _0x55acc9 - 332;
  var _0x3fcc96 = _0x3fcc();
  var _0x21bcac = _0x3fcc96[_0x55acc9];
  return _0x3fcc96[_0x55acc9];
}
function _0x3fcc() {
  var _0x321534 = [
    'extraBytes',
    'cshake',
    'padding',
    'kmac',
    'buffer',
    'outputBlocks',
    'string',
    '9uLHFMf',
    'length',
    'slice',
    'keccak',
    'lastByteIndex',
    'finalize already called',
    'constructor',
    'finalized',
    '5DbrxQY',
    '5353998VWKuyN',
    'update',
    'JS_SHA3_NO_ARRAY_BUFFER',
    'undefined',
    'hex',
    'bytepad',
    'toString',
    'JS_SHA3_NO_NODE_JS',
    '594464HlihDn',
    'start',
    'KMAC',
    'createMethod',
    'charCodeAt',
    'block',
    'amd',
    '9xHwBhw',
    '0123456789abcdef',
    'call',
    'push',
    'prototype',
    'JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW',
    'shake',
    'reset',
    'finalize',
    '8053486qXEAYU',
    '8909872WoHYJC',
    'name',
    'encodeString',
    'isView',
    'digest',
    '1010920WEdupe',
    'array',
    'arrayBuffer',
    'versions',
    'exports',
    'blockCount',
    'object',
    'sha3',
    'input is invalid type',
    'create',
    'JS_SHA3_NO_WINDOW',
    '3537088WqqQpf',
    '12322220gGHWoa',
    'isArray',
    'outputBits',
    'JS_SHA3_NO_COMMON_JS',
    'blocks',
    'unshift',
    'encode'
  ];
  _0x3fcc = function () {
    return _0x321534;
  };
  return _0x3fcc();
}
(function (_0xcf8289, _0x388007) {
  var _0x4b0acb = _0xcf8289();
  while (true) {
    try {
      var _0x51b71c = 625569;
      if (625569 === _0x388007)
        break;
      else
        _0x4b0acb.push(_0x4b0acb.shift());
    } catch (_0x496936) {
      _0x4b0acb.push(_0x4b0acb.shift());
    }
  }
}(_0x3fcc, 625569));
(function () {
  'use strict';
  var _0x3a4e22 = 'input is invalid type';
  var _0x4abc98 = 'finalize already called';
  var _0x39b38d = typeof window === 'object';
  var _0x4d6e90 = _0x39b38d ? window : {};
  if (_0x4d6e90.JS_SHA3_NO_WINDOW) {
    _0x39b38d = false;
  }
  var _0x1595c3 = !_0x39b38d && typeof self === 'object';
  var _0x27c7ba = !_0x4d6e90.JS_SHA3_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (_0x27c7ba)
    _0x4d6e90 = global;
  else if (_0x1595c3) {
    _0x4d6e90 = self;
  }
  var _0x76de7b = !_0x4d6e90.JS_SHA3_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var _0x217598 = typeof define === 'function' && define.amd;
  var _0x1f3565 = !_0x4d6e90.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var _0x1483fa = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
  ];
  var _0xb6e9cd = [
    31,
    7936,
    2031616,
    520093696
  ];
  var _0x5d9062 = [
    4,
    1024,
    262144,
    67108864
  ];
  var _0x19e0cb = [
    1,
    256,
    65536,
    16777216
  ];
  var _0x4ffb21 = [
    6,
    1536,
    393216,
    100663296
  ];
  var _0x5e6f8a = [
    0,
    8,
    16,
    24
  ];
  var _0xab9050 = [
    1,
    0,
    32898,
    0,
    32906,
    2147483648,
    2147516416,
    2147483648,
    32907,
    0,
    2147483649,
    0,
    2147516545,
    2147483648,
    32777,
    2147483648,
    138,
    0,
    136,
    0,
    2147516425,
    0,
    2147483658,
    0,
    2147516555,
    0,
    139,
    2147483648,
    32905,
    2147483648,
    32771,
    2147483648,
    32770,
    2147483648,
    128,
    2147483648,
    32778,
    0,
    2147483658,
    2147483648,
    2147516545,
    2147483648,
    32896,
    2147483648,
    2147483649,
    0,
    2147516424,
    2147483648
  ];
  var _0x166297 = [
    224,
    256,
    384,
    512
  ];
  var _0x64eb56 = [
    128,
    256
  ];
  var _0x7a206b = [
    'hex',
    'buffer',
    'arrayBuffer',
    'array',
    'digest'
  ];
  var _0x31a80a = {
    '128': 168,
    '256': 136
  };
  var _0x581530 = _0x4d6e90.JS_SHA3_NO_NODE_JS || !Array.isArray ? function (_0x2eafd3) {
    return Object.prototype.toString.call(_0x2eafd3) === '[object Array]';
  } : Array.isArray;
  var _0x3794e9 = _0x1f3565 && (_0x4d6e90.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) ? function (_0x165196) {
    return typeof _0x165196 === 'object' && _0x165196.buffer && _0x165196.buffer.constructor === ArrayBuffer;
  } : ArrayBuffer.isView;
  var _0x35537f = function (_0x5476c4) {
    var _0x5f2cd5 = typeof _0x5476c4;
    if (_0x5f2cd5 === 'string')
      return [
        _0x5476c4,
        true
      ];
    if (_0x5f2cd5 !== 'object' || _0x5476c4 === null)
      throw new Error('input is invalid type');
    if (_0x1f3565 && _0x5476c4.constructor === ArrayBuffer)
      return [
        new Uint8Array(_0x5476c4),
        false
      ];
    if (!_0x581530(_0x5476c4) && !_0x3794e9(_0x5476c4))
      throw new Error('input is invalid type');
    return [
      _0x5476c4,
      false
    ];
  };
  var _0x1abe9d = function (_0x36ca6d) {
    return _0x35537f(_0x36ca6d)[0].length === 0;
  };
  var _0x52dbcf = function (_0x1e8cb5) {
    var _0x5ec135 = [];
    for (var _0x6b8fee = 0; _0x6b8fee < _0x1e8cb5.length; ++_0x6b8fee) {
      _0x5ec135[_0x6b8fee] = _0x1e8cb5[_0x6b8fee];
    }
    return _0x5ec135;
  };
  var _0x285713 = function (_0x26d764, _0x3013b3, _0x4c6110) {
    return function (_0x17459d) {
      return new _0x3980d9(_0x26d764, _0x3013b3, _0x26d764).update(_0x17459d)[_0x4c6110]();
    };
  };
  var _0x4b98f0 = function (_0x51b589, _0x5b931c, _0x527500) {
    return function (_0xbbea78, _0x241c79) {
      return new _0x3980d9(_0x51b589, _0x5b931c, _0x241c79).update(_0xbbea78)[_0x527500]();
    };
  };
  var _0x4abebc = function (_0x134873, _0x531f8b, _0xaa9af6) {
    return function (_0xd40f9d, _0x317fc1, _0x325799, _0x3e1e22) {
      return _0x49b677['cshake' + _0x134873].update(_0xd40f9d, _0x317fc1, _0x325799, _0x3e1e22)[_0xaa9af6]();
    };
  };
  var _0x5385b0 = function (_0x4d7802, _0x2c843e, _0x10d641) {
    return function (_0x3dfb14, _0x3a8495, _0x41c6b5, _0x27620c) {
      return _0x49b677['kmac' + _0x4d7802].update(_0x3dfb14, _0x3a8495, _0x41c6b5, _0x27620c)[_0x10d641]();
    };
  };
  var _0xd32e26 = function (_0x45e823, _0x460d72, _0x3ff7d4, _0x19efca) {
    for (var _0x8f2a1c = 0; _0x8f2a1c < _0x7a206b.length; ++_0x8f2a1c) {
      var _0x396f5d = _0x7a206b[_0x8f2a1c];
      _0x45e823[_0x396f5d] = _0x460d72(_0x3ff7d4, _0x19efca, _0x396f5d);
    }
    return _0x45e823;
  };
  var _0x3827e7 = function (_0x3a8053, _0x210629) {
    var _0x26565a = _0x285713(_0x3a8053, _0x210629, 'hex');
    _0x26565a.create = function () {
      return new _0x3980d9(_0x3a8053, _0x210629, _0x3a8053);
    };
    _0x26565a.update = function (_0x3d7132) {
      return _0x26565a.create().update(_0x3d7132);
    };
    return _0xd32e26(_0x26565a, _0x285713, _0x3a8053, _0x210629);
  };
  var _0x39f86b = function (_0x4348d2, _0x734947) {
    var _0x59d307 = _0x4b98f0(_0x4348d2, _0x734947, 'hex');
    _0x59d307.create = function (_0x5ebf6f) {
      return new _0x3980d9(_0x4348d2, _0x734947, _0x5ebf6f);
    };
    _0x59d307.update = function (_0x519130, _0x6471d0) {
      return _0x59d307.create(_0x6471d0).update(_0x519130);
    };
    return _0xd32e26(_0x59d307, _0x4b98f0, _0x4348d2, _0x734947);
  };
  var _0x50a284 = function (_0x3a7881, _0x42124d) {
    var _0x4983a6 = _0x31a80a[_0x3a7881];
    var _0x340a12 = _0x4abebc(_0x3a7881, _0x42124d, 'hex');
    _0x340a12.create = function (_0xc58d58, _0x2a1889, _0x391f0c) {
      return _0x1abe9d(_0x2a1889) && _0x1abe9d(_0x391f0c) ? _0x49b677['shake' + _0x3a7881].create(_0xc58d58) : new _0x3980d9(_0x3a7881, _0x42124d, _0xc58d58).bytepad([
        _0x2a1889,
        _0x391f0c
      ], _0x31a80a[_0x3a7881]);
    };
    _0x340a12.update = function (_0xf38781, _0x47f89d, _0x5da524, _0x36d982) {
      return _0x340a12.create(_0x47f89d, _0x5da524, _0x36d982).update(_0xf38781);
    };
    return _0xd32e26(_0x340a12, _0x4abebc, _0x3a7881, _0x42124d);
  };
  var _0x7f27e5 = function (_0x480485, _0x5ba228) {
    var _0x5d5b3e = _0x31a80a[_0x480485];
    var _0x3f18cb = _0x5385b0(_0x480485, _0x5ba228, 'hex');
    _0x3f18cb.create = function (_0x43f2d9, _0x2923cf, _0x1e485c) {
      return new _0x4ad31b(_0x480485, _0x5ba228, _0x2923cf).bytepad([
        'KMAC',
        _0x1e485c
      ], _0x31a80a[_0x480485]).bytepad([_0x43f2d9], _0x31a80a[_0x480485]);
    };
    _0x3f18cb.update = function (_0x2f5a97, _0x59c5fd, _0x24ef54, _0x55588d) {
      return _0x3f18cb.create(_0x2f5a97, _0x24ef54, _0x55588d).update(_0x59c5fd);
    };
    return _0xd32e26(_0x3f18cb, _0x5385b0, _0x480485, _0x5ba228);
  };
  var _0x4b8488 = [
    {
      name: 'keccak',
      padding: _0x19e0cb,
      bits: _0x166297,
      createMethod: _0x3827e7
    },
    {
      name: 'sha3',
      padding: _0x4ffb21,
      bits: _0x166297,
      createMethod: _0x3827e7
    },
    {
      name: 'shake',
      padding: _0xb6e9cd,
      bits: _0x64eb56,
      createMethod: _0x39f86b
    },
    {
      name: 'cshake',
      padding: _0x5d9062,
      bits: _0x64eb56,
      createMethod: _0x50a284
    },
    {
      name: 'kmac',
      padding: _0x5d9062,
      bits: _0x64eb56,
      createMethod: _0x7f27e5
    }
  ];
  var _0x49b677 = {};
  var _0x3c9e0e = [];
  for (var _0x5368c2 = 0; _0x5368c2 < _0x4b8488.length; ++_0x5368c2) {
    var _0x211581 = _0x4b8488[_0x5368c2];
    var _0x36891e = _0x4b8488[_0x5368c2].bits;
    for (var _0x1435a8 = 0; _0x1435a8 < _0x4b8488[_0x5368c2].bits.length; ++_0x1435a8) {
      var _0x5eef37 = _0x4b8488[_0x5368c2].name + '_' + _0x4b8488[_0x5368c2].bits[_0x1435a8];
      _0x3c9e0e.push(_0x5eef37);
      _0x49b677[_0x5eef37] = _0x4b8488[_0x5368c2].createMethod(_0x4b8488[_0x5368c2].bits[_0x1435a8], _0x4b8488[_0x5368c2].padding);
      if (_0x4b8488[_0x5368c2].name !== 'sha3') {
        var _0x3132d1 = _0x4b8488[_0x5368c2].name + _0x4b8488[_0x5368c2].bits[_0x1435a8];
        _0x3c9e0e.push(_0x3132d1);
        _0x49b677[_0x3132d1] = _0x49b677[_0x5eef37];
      }
    }
  }
  function _0x3980d9(_0x3ee39e, _0x22eac8, _0x55fdc8) {
    this.blocks = [];
    this.s = [];
    this.padding = _0x22eac8;
    this.outputBits = _0x55fdc8;
    this.reset = true;
    this.finalized = false;
    this.block = 0;
    this.start = 0;
    this.blockCount = 1600 - (_0x3ee39e << 1) >> 5;
    this.byteCount = this.blockCount << 2;
    this.outputBlocks = _0x55fdc8 >> 5;
    this.extraBytes = (_0x55fdc8 & 31) >> 3;
    for (var _0x159ea1 = 0; _0x159ea1 < 50; ++_0x159ea1) {
      this.s[_0x159ea1] = 0;
    }
  }
  _0x3980d9.prototype.update = function (_0x2958e4) {
    if (this.finalized)
      throw new Error('finalize already called');
    var _0x4167f8 = _0x35537f(_0x2958e4);
    _0x2958e4 = _0x4167f8[0];
    var _0x14ecc3 = _0x4167f8[1];
    var _0x5b131a = this.blocks;
    var _0x18d0c0 = this.byteCount;
    var _0x1cf5ba = _0x2958e4.length;
    var _0x1288fc = this.blockCount;
    var _0x13f032 = 0;
    var _0x35b130 = this.s;
    var _0x3107c6;
    var _0x447c4e;
    while (_0x13f032 < _0x2958e4.length) {
      if (this.reset) {
        this.reset = false;
        _0x5b131a[0] = this.block;
        for (_0x3107c6 = 1; _0x3107c6 < this.blockCount + 1; ++_0x3107c6) {
          _0x5b131a[_0x3107c6] = 0;
        }
      }
      if (_0x4167f8[1])
        for (_0x3107c6 = this.start; _0x13f032 < _0x2958e4.length && _0x3107c6 < this.byteCount; ++_0x13f032) {
          _0x447c4e = _0x2958e4.charCodeAt(_0x13f032);
          if (_0x447c4e < 128)
            _0x5b131a[_0x3107c6 >> 2] |= _0x447c4e << _0x5e6f8a[_0x3107c6++ & 3];
          else {
            if (_0x447c4e < 2048) {
              _0x5b131a[_0x3107c6 >> 2] |= (192 | _0x447c4e >> 6) << _0x5e6f8a[_0x3107c6++ & 3];
              _0x5b131a[_0x3107c6 >> 2] |= (128 | _0x447c4e & 63) << _0x5e6f8a[_0x3107c6++ & 3];
            } else
              _0x447c4e < 55296 || _0x447c4e >= 57344 ? (_0x5b131a[_0x3107c6 >> 2] |= (224 | _0x447c4e >> 12) << _0x5e6f8a[_0x3107c6++ & 3], _0x5b131a[_0x3107c6 >> 2] |= (128 | _0x447c4e >> 6 & 63) << _0x5e6f8a[_0x3107c6++ & 3], _0x5b131a[_0x3107c6 >> 2] |= (128 | _0x447c4e & 63) << _0x5e6f8a[_0x3107c6++ & 3]) : (_0x447c4e = 65536 + ((_0x447c4e & 1023) << 10 | _0x2958e4.charCodeAt(++_0x13f032) & 1023), _0x5b131a[_0x3107c6 >> 2] |= (240 | _0x447c4e >> 18) << _0x5e6f8a[_0x3107c6++ & 3], _0x5b131a[_0x3107c6 >> 2] |= (128 | _0x447c4e >> 12 & 63) << _0x5e6f8a[_0x3107c6++ & 3], _0x5b131a[_0x3107c6 >> 2] |= (128 | _0x447c4e >> 6 & 63) << _0x5e6f8a[_0x3107c6++ & 3], _0x5b131a[_0x3107c6 >> 2] |= (128 | _0x447c4e & 63) << _0x5e6f8a[_0x3107c6++ & 3]);
          }
        }
      else
        for (_0x3107c6 = this.start; _0x13f032 < _0x2958e4.length && _0x3107c6 < this.byteCount; ++_0x13f032) {
          _0x5b131a[_0x3107c6 >> 2] |= _0x2958e4[_0x13f032] << _0x5e6f8a[_0x3107c6++ & 3];
        }
      this.lastByteIndex = _0x3107c6;
      if (_0x3107c6 >= this.byteCount) {
        this.start = _0x3107c6 - this.byteCount;
        this.block = _0x5b131a[this.blockCount];
        for (_0x3107c6 = 0; _0x3107c6 < this.blockCount; ++_0x3107c6) {
          _0x35b130[_0x3107c6] ^= _0x5b131a[_0x3107c6];
        }
        _0x164500(_0x35b130);
        this.reset = true;
      } else
        this.start = _0x3107c6;
    }
    return this;
  };
  _0x3980d9.prototype.encode = function (_0x9bb0c8, _0x302311) {
    var _0x24c5c4 = _0x9bb0c8 & 255;
    var _0x28ee03 = 1;
    var _0x16ffc3 = [_0x24c5c4];
    _0x9bb0c8 = _0x9bb0c8 >> 8;
    _0x24c5c4 = _0x9bb0c8 & 255;
    while (_0x24c5c4 > 0) {
      _0x16ffc3.unshift(_0x24c5c4);
      _0x9bb0c8 = _0x9bb0c8 >> 8;
      _0x24c5c4 = _0x9bb0c8 & 255;
      ++_0x28ee03;
    }
    _0x302311 ? _0x16ffc3.push(_0x28ee03) : _0x16ffc3.unshift(_0x28ee03);
    this.update(_0x16ffc3);
    return _0x16ffc3.length;
  };
  _0x3980d9.prototype.encodeString = function (_0x2cffb8) {
    var _0x4f2404 = _0x35537f(_0x2cffb8);
    _0x2cffb8 = _0x4f2404[0];
    var _0x189ea9 = _0x4f2404[1];
    var _0x166d68 = 0;
    var _0x38070f = _0x2cffb8.length;
    if (_0x4f2404[1])
      for (var _0x14f16b = 0; _0x14f16b < _0x2cffb8.length; ++_0x14f16b) {
        var _0x31cae1 = _0x2cffb8.charCodeAt(_0x14f16b);
        if (_0x31cae1 < 128)
          _0x166d68 += 1;
        else {
          if (_0x31cae1 < 2048)
            _0x166d68 += 2;
          else
            _0x31cae1 < 55296 || _0x31cae1 >= 57344 ? _0x166d68 += 3 : (_0x31cae1 = 65536 + ((_0x31cae1 & 1023) << 10 | _0x2cffb8.charCodeAt(++_0x14f16b) & 1023), _0x166d68 += 4);
        }
      }
    else
      _0x166d68 = _0x2cffb8.length;
    _0x166d68 += this.encode(_0x166d68 * 8);
    this.update(_0x2cffb8);
    return _0x166d68;
  };
  _0x3980d9.prototype.bytepad = function (_0x195c2c, _0x5663f0) {
    var _0x278338 = this.encode(_0x5663f0);
    for (var _0x3a7433 = 0; _0x3a7433 < _0x195c2c.length; ++_0x3a7433) {
      _0x278338 += this.encodeString(_0x195c2c[_0x3a7433]);
    }
    var _0x3093a6 = (_0x5663f0 - _0x278338 % _0x5663f0) % _0x5663f0;
    var _0x1a992b = [];
    _0x1a992b.length = _0x3093a6;
    this.update(_0x1a992b);
    return this;
  };
  _0x3980d9.prototype.finalize = function () {
    if (this.finalized)
      return;
    this.finalized = true;
    var _0x579af3 = this.blocks;
    var _0x7ddaa8 = this.lastByteIndex;
    var _0x13b1f0 = this.blockCount;
    var _0x131bea = this.s;
    _0x579af3[_0x7ddaa8 >> 2] |= this.padding[_0x7ddaa8 & 3];
    if (this.lastByteIndex === this.byteCount) {
      _0x579af3[0] = _0x579af3[this.blockCount];
      for (_0x7ddaa8 = 1; _0x7ddaa8 < this.blockCount + 1; ++_0x7ddaa8) {
        _0x579af3[_0x7ddaa8] = 0;
      }
    }
    _0x579af3[this.blockCount - 1] |= 2147483648;
    for (_0x7ddaa8 = 0; _0x7ddaa8 < this.blockCount; ++_0x7ddaa8) {
      _0x131bea[_0x7ddaa8] ^= _0x579af3[_0x7ddaa8];
    }
    _0x164500(_0x131bea);
  };
  _0x3980d9.prototype.toString = _0x3980d9.prototype.hex = function () {
    this.finalize();
    var _0xb227fe = this.blockCount;
    var _0x134fac = this.s;
    var _0x454343 = this.outputBlocks;
    var _0x3710ab = this.extraBytes;
    var _0x41de4b = 0;
    var _0xd4e24c = 0;
    var _0x16f1a0 = '';
    var _0x6c0b18;
    while (_0xd4e24c < this.outputBlocks) {
      for (_0x41de4b = 0; _0x41de4b < this.blockCount && _0xd4e24c < this.outputBlocks; ++_0x41de4b, ++_0xd4e24c) {
        _0x6c0b18 = _0x134fac[_0x41de4b];
        _0x16f1a0 += _0x1483fa[_0x6c0b18 >> 4 & 15] + _0x1483fa[_0x6c0b18 & 15] + _0x1483fa[_0x6c0b18 >> 12 & 15] + _0x1483fa[_0x6c0b18 >> 8 & 15] + _0x1483fa[_0x6c0b18 >> 20 & 15] + _0x1483fa[_0x6c0b18 >> 16 & 15] + _0x1483fa[_0x6c0b18 >> 28 & 15] + _0x1483fa[_0x6c0b18 >> 24 & 15];
      }
      if (_0xd4e24c % this.blockCount === 0) {
        _0x134fac = _0x52dbcf(_0x134fac);
        _0x164500(_0x134fac);
        _0x41de4b = 0;
      }
    }
    if (this.extraBytes) {
      _0x6c0b18 = _0x134fac[_0x41de4b];
      _0x16f1a0 += _0x1483fa[_0x6c0b18 >> 4 & 15] + _0x1483fa[_0x6c0b18 & 15];
      if (this.extraBytes > 1) {
        _0x16f1a0 += _0x1483fa[_0x6c0b18 >> 12 & 15] + _0x1483fa[_0x6c0b18 >> 8 & 15];
      }
      if (this.extraBytes > 2) {
        _0x16f1a0 += _0x1483fa[_0x6c0b18 >> 20 & 15] + _0x1483fa[_0x6c0b18 >> 16 & 15];
      }
    }
    return _0x16f1a0;
  };
  _0x3980d9.prototype.arrayBuffer = function () {
    this.finalize();
    var _0x5d1db4 = this.blockCount;
    var _0x417dde = this.s;
    var _0x4de1a6 = this.outputBlocks;
    var _0x124e22 = this.extraBytes;
    var _0x24c1bb = 0;
    var _0x5f48ef = 0;
    var _0x4dc98f = this.outputBits >> 3;
    var _0x25df1f;
    this.extraBytes ? _0x25df1f = new ArrayBuffer(this.outputBlocks + 1 << 2) : _0x25df1f = new ArrayBuffer(_0x4dc98f);
    var _0xf88230 = new Uint32Array(_0x25df1f);
    while (_0x5f48ef < this.outputBlocks) {
      for (_0x24c1bb = 0; _0x24c1bb < this.blockCount && _0x5f48ef < this.outputBlocks; ++_0x24c1bb, ++_0x5f48ef) {
        _0xf88230[_0x5f48ef] = _0x417dde[_0x24c1bb];
      }
      if (_0x5f48ef % this.blockCount === 0) {
        _0x417dde = _0x52dbcf(_0x417dde);
        _0x164500(_0x417dde);
      }
    }
    if (this.extraBytes) {
      _0xf88230[_0x5f48ef] = _0x417dde[_0x24c1bb];
      _0x25df1f = _0x25df1f.slice(0, _0x4dc98f);
    }
    return _0x25df1f;
  };
  _0x3980d9.prototype.buffer = _0x3980d9.prototype.arrayBuffer;
  _0x3980d9.prototype.digest = _0x3980d9.prototype.array = function () {
    this.finalize();
    var _0x135012 = this.blockCount;
    var _0x540984 = this.s;
    var _0x2f4803 = this.outputBlocks;
    var _0x382269 = this.extraBytes;
    var _0x398250 = 0;
    var _0x5dafa5 = 0;
    var _0x2adb18 = [];
    var _0x373ac2;
    var _0x494e80;
    while (_0x5dafa5 < this.outputBlocks) {
      for (_0x398250 = 0; _0x398250 < this.blockCount && _0x5dafa5 < this.outputBlocks; ++_0x398250, ++_0x5dafa5) {
        _0x373ac2 = _0x5dafa5 << 2;
        _0x494e80 = _0x540984[_0x398250];
        _0x2adb18[_0x373ac2] = _0x494e80 & 255;
        _0x2adb18[_0x373ac2 + 1] = _0x494e80 >> 8 & 255;
        _0x2adb18[_0x373ac2 + 2] = _0x494e80 >> 16 & 255;
        _0x2adb18[_0x373ac2 + 3] = _0x494e80 >> 24 & 255;
      }
      if (_0x5dafa5 % this.blockCount === 0) {
        _0x540984 = _0x52dbcf(_0x540984);
        _0x164500(_0x540984);
      }
    }
    if (this.extraBytes) {
      _0x373ac2 = _0x5dafa5 << 2;
      _0x494e80 = _0x540984[_0x398250];
      _0x2adb18[_0x373ac2] = _0x494e80 & 255;
      if (this.extraBytes > 1) {
        _0x2adb18[_0x373ac2 + 1] = _0x494e80 >> 8 & 255;
      }
      if (this.extraBytes > 2) {
        _0x2adb18[_0x373ac2 + 2] = _0x494e80 >> 16 & 255;
      }
    }
    return _0x2adb18;
  };
  function _0x4ad31b(_0x2be510, _0x26da02, _0x395b56) {
    _0x3980d9(_0x2be510, _0x26da02, _0x395b56);
  }
  _0x4ad31b.prototype = new _0x3980d9();
  ({
    blocks: [],
    s: [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    padding: undefined,
    outputBits: undefined,
    reset: true,
    finalized: false,
    block: 0,
    start: 0,
    blockCount: 50,
    byteCount: 200,
    outputBlocks: 0,
    extraBytes: 0
  }.finalize = function () {
    this.encode(this.outputBits, true);
    return _0x3980d9.prototype.finalize();
  });
  var _0x164500 = function (_0x4b79f3) {
    var _0x392d00;
    var _0x1152e7;
    var _0x29ec30;
    var _0x33797a;
    var _0x4e3b26;
    var _0x26fde8;
    var _0xe8691d;
    var _0x298eb3;
    var _0x1a6c37;
    var _0x2811f5;
    var _0x393b35;
    var _0x8d4dd9;
    var _0x6bc48c;
    var _0x4b7f28;
    var _0x1cf2d6;
    var _0x27803e;
    var _0x4ab872;
    var _0xa7a18f;
    var _0x4baa79;
    var _0xd0f581;
    var _0x6eb3d7;
    var _0x2cdf91;
    var _0x4a408b;
    var _0x3d2c6a;
    var _0x471244;
    var _0x57c282;
    var _0x42e0e6;
    var _0x27eef6;
    var _0x55bd81;
    var _0x5020f5;
    var _0x4fde54;
    var _0x58f833;
    var _0x1294ae;
    var _0x366535;
    var _0x5ac5e2;
    var _0x40df18;
    var _0x3d55b4;
    var _0x2374de;
    var _0x1f55d6;
    var _0x27dd0f;
    var _0x3a5518;
    var _0x3e8c98;
    var _0x54f3c4;
    var _0x13bf64;
    var _0x2480be;
    var _0x1696f3;
    var _0x5cda9a;
    var _0x2bdfd5;
    var _0xc095f9;
    var _0xed54e;
    var _0x395183;
    var _0x57d072;
    var _0x714f36;
    var _0x16c9c5;
    var _0x12d217;
    var _0x29c9de;
    var _0x2f3098;
    var _0x1c982c;
    var _0x41527b;
    var _0x3870ef;
    var _0x3b6a5f;
    var _0x42bd8b;
    var _0x385c27;
    for (_0x29ec30 = 0; _0x29ec30 < 48; _0x29ec30 += 2) {
      _0x33797a = _0x4b79f3[0] ^ _0x4b79f3[10] ^ _0x4b79f3[20] ^ _0x4b79f3[30] ^ _0x4b79f3[40];
      _0x4e3b26 = _0x4b79f3[1] ^ _0x4b79f3[11] ^ _0x4b79f3[21] ^ _0x4b79f3[31] ^ _0x4b79f3[41];
      _0x26fde8 = _0x4b79f3[2] ^ _0x4b79f3[12] ^ _0x4b79f3[22] ^ _0x4b79f3[32] ^ _0x4b79f3[42];
      _0xe8691d = _0x4b79f3[3] ^ _0x4b79f3[13] ^ _0x4b79f3[23] ^ _0x4b79f3[33] ^ _0x4b79f3[43];
      _0x298eb3 = _0x4b79f3[4] ^ _0x4b79f3[14] ^ _0x4b79f3[24] ^ _0x4b79f3[34] ^ _0x4b79f3[44];
      _0x1a6c37 = _0x4b79f3[5] ^ _0x4b79f3[15] ^ _0x4b79f3[25] ^ _0x4b79f3[35] ^ _0x4b79f3[45];
      _0x2811f5 = _0x4b79f3[6] ^ _0x4b79f3[16] ^ _0x4b79f3[26] ^ _0x4b79f3[36] ^ _0x4b79f3[46];
      _0x393b35 = _0x4b79f3[7] ^ _0x4b79f3[17] ^ _0x4b79f3[27] ^ _0x4b79f3[37] ^ _0x4b79f3[47];
      _0x8d4dd9 = _0x4b79f3[8] ^ _0x4b79f3[18] ^ _0x4b79f3[28] ^ _0x4b79f3[38] ^ _0x4b79f3[48];
      _0x6bc48c = _0x4b79f3[9] ^ _0x4b79f3[19] ^ _0x4b79f3[29] ^ _0x4b79f3[39] ^ _0x4b79f3[49];
      _0x392d00 = _0x8d4dd9 ^ (_0x26fde8 << 1 | _0xe8691d >>> 31);
      _0x1152e7 = _0x6bc48c ^ (_0xe8691d << 1 | _0x26fde8 >>> 31);
      _0x4b79f3[0] ^= _0x392d00;
      _0x4b79f3[1] ^= _0x1152e7;
      _0x4b79f3[10] ^= _0x392d00;
      _0x4b79f3[11] ^= _0x1152e7;
      _0x4b79f3[20] ^= _0x392d00;
      _0x4b79f3[21] ^= _0x1152e7;
      _0x4b79f3[30] ^= _0x392d00;
      _0x4b79f3[31] ^= _0x1152e7;
      _0x4b79f3[40] ^= _0x392d00;
      _0x4b79f3[41] ^= _0x1152e7;
      _0x392d00 = _0x33797a ^ (_0x298eb3 << 1 | _0x1a6c37 >>> 31);
      _0x1152e7 = _0x4e3b26 ^ (_0x1a6c37 << 1 | _0x298eb3 >>> 31);
      _0x4b79f3[2] ^= _0x392d00;
      _0x4b79f3[3] ^= _0x1152e7;
      _0x4b79f3[12] ^= _0x392d00;
      _0x4b79f3[13] ^= _0x1152e7;
      _0x4b79f3[22] ^= _0x392d00;
      _0x4b79f3[23] ^= _0x1152e7;
      _0x4b79f3[32] ^= _0x392d00;
      _0x4b79f3[33] ^= _0x1152e7;
      _0x4b79f3[42] ^= _0x392d00;
      _0x4b79f3[43] ^= _0x1152e7;
      _0x392d00 = _0x26fde8 ^ (_0x2811f5 << 1 | _0x393b35 >>> 31);
      _0x1152e7 = _0xe8691d ^ (_0x393b35 << 1 | _0x2811f5 >>> 31);
      _0x4b79f3[4] ^= _0x392d00;
      _0x4b79f3[5] ^= _0x1152e7;
      _0x4b79f3[14] ^= _0x392d00;
      _0x4b79f3[15] ^= _0x1152e7;
      _0x4b79f3[24] ^= _0x392d00;
      _0x4b79f3[25] ^= _0x1152e7;
      _0x4b79f3[34] ^= _0x392d00;
      _0x4b79f3[35] ^= _0x1152e7;
      _0x4b79f3[44] ^= _0x392d00;
      _0x4b79f3[45] ^= _0x1152e7;
      _0x392d00 = _0x298eb3 ^ (_0x8d4dd9 << 1 | _0x6bc48c >>> 31);
      _0x1152e7 = _0x1a6c37 ^ (_0x6bc48c << 1 | _0x8d4dd9 >>> 31);
      _0x4b79f3[6] ^= _0x392d00;
      _0x4b79f3[7] ^= _0x1152e7;
      _0x4b79f3[16] ^= _0x392d00;
      _0x4b79f3[17] ^= _0x1152e7;
      _0x4b79f3[26] ^= _0x392d00;
      _0x4b79f3[27] ^= _0x1152e7;
      _0x4b79f3[36] ^= _0x392d00;
      _0x4b79f3[37] ^= _0x1152e7;
      _0x4b79f3[46] ^= _0x392d00;
      _0x4b79f3[47] ^= _0x1152e7;
      _0x392d00 = _0x2811f5 ^ (_0x33797a << 1 | _0x4e3b26 >>> 31);
      _0x1152e7 = _0x393b35 ^ (_0x4e3b26 << 1 | _0x33797a >>> 31);
      _0x4b79f3[8] ^= _0x392d00;
      _0x4b79f3[9] ^= _0x1152e7;
      _0x4b79f3[18] ^= _0x392d00;
      _0x4b79f3[19] ^= _0x1152e7;
      _0x4b79f3[28] ^= _0x392d00;
      _0x4b79f3[29] ^= _0x1152e7;
      _0x4b79f3[38] ^= _0x392d00;
      _0x4b79f3[39] ^= _0x1152e7;
      _0x4b79f3[48] ^= _0x392d00;
      _0x4b79f3[49] ^= _0x1152e7;
      _0x4b7f28 = _0x4b79f3[0];
      _0x1cf2d6 = _0x4b79f3[1];
      _0x1696f3 = _0x4b79f3[11] << 4 | _0x4b79f3[10] >>> 28;
      _0x5cda9a = _0x4b79f3[10] << 4 | _0x4b79f3[11] >>> 28;
      _0x27eef6 = _0x4b79f3[20] << 3 | _0x4b79f3[21] >>> 29;
      _0x55bd81 = _0x4b79f3[21] << 3 | _0x4b79f3[20] >>> 29;
      _0x3870ef = _0x4b79f3[31] << 9 | _0x4b79f3[30] >>> 23;
      _0x3b6a5f = _0x4b79f3[30] << 9 | _0x4b79f3[31] >>> 23;
      _0x3e8c98 = _0x4b79f3[40] << 18 | _0x4b79f3[41] >>> 14;
      _0x54f3c4 = _0x4b79f3[41] << 18 | _0x4b79f3[40] >>> 14;
      _0x366535 = _0x4b79f3[2] << 1 | _0x4b79f3[3] >>> 31;
      _0x5ac5e2 = _0x4b79f3[3] << 1 | _0x4b79f3[2] >>> 31;
      _0x27803e = _0x4b79f3[13] << 12 | _0x4b79f3[12] >>> 20;
      _0x4ab872 = _0x4b79f3[12] << 12 | _0x4b79f3[13] >>> 20;
      _0x2bdfd5 = _0x4b79f3[22] << 10 | _0x4b79f3[23] >>> 22;
      _0xc095f9 = _0x4b79f3[23] << 10 | _0x4b79f3[22] >>> 22;
      _0x5020f5 = _0x4b79f3[33] << 13 | _0x4b79f3[32] >>> 19;
      _0x4fde54 = _0x4b79f3[32] << 13 | _0x4b79f3[33] >>> 19;
      _0x42bd8b = _0x4b79f3[42] << 2 | _0x4b79f3[43] >>> 30;
      _0x385c27 = _0x4b79f3[43] << 2 | _0x4b79f3[42] >>> 30;
      _0x16c9c5 = _0x4b79f3[5] << 30 | _0x4b79f3[4] >>> 2;
      _0x12d217 = _0x4b79f3[4] << 30 | _0x4b79f3[5] >>> 2;
      _0x40df18 = _0x4b79f3[14] << 6 | _0x4b79f3[15] >>> 26;
      _0x3d55b4 = _0x4b79f3[15] << 6 | _0x4b79f3[14] >>> 26;
      _0xa7a18f = _0x4b79f3[25] << 11 | _0x4b79f3[24] >>> 21;
      _0x4baa79 = _0x4b79f3[24] << 11 | _0x4b79f3[25] >>> 21;
      _0xed54e = _0x4b79f3[34] << 15 | _0x4b79f3[35] >>> 17;
      _0x395183 = _0x4b79f3[35] << 15 | _0x4b79f3[34] >>> 17;
      _0x58f833 = _0x4b79f3[45] << 29 | _0x4b79f3[44] >>> 3;
      _0x1294ae = _0x4b79f3[44] << 29 | _0x4b79f3[45] >>> 3;
      _0x3d2c6a = _0x4b79f3[6] << 28 | _0x4b79f3[7] >>> 4;
      _0x471244 = _0x4b79f3[7] << 28 | _0x4b79f3[6] >>> 4;
      _0x29c9de = _0x4b79f3[17] << 23 | _0x4b79f3[16] >>> 9;
      _0x2f3098 = _0x4b79f3[16] << 23 | _0x4b79f3[17] >>> 9;
      _0x2374de = _0x4b79f3[26] << 25 | _0x4b79f3[27] >>> 7;
      _0x1f55d6 = _0x4b79f3[27] << 25 | _0x4b79f3[26] >>> 7;
      _0xd0f581 = _0x4b79f3[36] << 21 | _0x4b79f3[37] >>> 11;
      _0x6eb3d7 = _0x4b79f3[37] << 21 | _0x4b79f3[36] >>> 11;
      _0x57d072 = _0x4b79f3[47] << 24 | _0x4b79f3[46] >>> 8;
      _0x714f36 = _0x4b79f3[46] << 24 | _0x4b79f3[47] >>> 8;
      _0x13bf64 = _0x4b79f3[8] << 27 | _0x4b79f3[9] >>> 5;
      _0x2480be = _0x4b79f3[9] << 27 | _0x4b79f3[8] >>> 5;
      _0x57c282 = _0x4b79f3[18] << 20 | _0x4b79f3[19] >>> 12;
      _0x42e0e6 = _0x4b79f3[19] << 20 | _0x4b79f3[18] >>> 12;
      _0x1c982c = _0x4b79f3[29] << 7 | _0x4b79f3[28] >>> 25;
      _0x41527b = _0x4b79f3[28] << 7 | _0x4b79f3[29] >>> 25;
      _0x27dd0f = _0x4b79f3[38] << 8 | _0x4b79f3[39] >>> 24;
      _0x3a5518 = _0x4b79f3[39] << 8 | _0x4b79f3[38] >>> 24;
      _0x2cdf91 = _0x4b79f3[48] << 14 | _0x4b79f3[49] >>> 18;
      _0x4a408b = _0x4b79f3[49] << 14 | _0x4b79f3[48] >>> 18;
      _0x4b79f3[0] = _0x4b7f28 ^ ~_0x27803e & _0xa7a18f;
      _0x4b79f3[1] = _0x1cf2d6 ^ ~_0x4ab872 & _0x4baa79;
      _0x4b79f3[10] = _0x3d2c6a ^ ~_0x57c282 & _0x27eef6;
      _0x4b79f3[11] = _0x471244 ^ ~_0x42e0e6 & _0x55bd81;
      _0x4b79f3[20] = _0x366535 ^ ~_0x40df18 & _0x2374de;
      _0x4b79f3[21] = _0x5ac5e2 ^ ~_0x3d55b4 & _0x1f55d6;
      _0x4b79f3[30] = _0x13bf64 ^ ~_0x1696f3 & _0x2bdfd5;
      _0x4b79f3[31] = _0x2480be ^ ~_0x5cda9a & _0xc095f9;
      _0x4b79f3[40] = _0x16c9c5 ^ ~_0x29c9de & _0x1c982c;
      _0x4b79f3[41] = _0x12d217 ^ ~_0x2f3098 & _0x41527b;
      _0x4b79f3[2] = _0x27803e ^ ~_0xa7a18f & _0xd0f581;
      _0x4b79f3[3] = _0x4ab872 ^ ~_0x4baa79 & _0x6eb3d7;
      _0x4b79f3[12] = _0x57c282 ^ ~_0x27eef6 & _0x5020f5;
      _0x4b79f3[13] = _0x42e0e6 ^ ~_0x55bd81 & _0x4fde54;
      _0x4b79f3[22] = _0x40df18 ^ ~_0x2374de & _0x27dd0f;
      _0x4b79f3[23] = _0x3d55b4 ^ ~_0x1f55d6 & _0x3a5518;
      _0x4b79f3[32] = _0x1696f3 ^ ~_0x2bdfd5 & _0xed54e;
      _0x4b79f3[33] = _0x5cda9a ^ ~_0xc095f9 & _0x395183;
      _0x4b79f3[42] = _0x29c9de ^ ~_0x1c982c & _0x3870ef;
      _0x4b79f3[43] = _0x2f3098 ^ ~_0x41527b & _0x3b6a5f;
      _0x4b79f3[4] = _0xa7a18f ^ ~_0xd0f581 & _0x2cdf91;
      _0x4b79f3[5] = _0x4baa79 ^ ~_0x6eb3d7 & _0x4a408b;
      _0x4b79f3[14] = _0x27eef6 ^ ~_0x5020f5 & _0x58f833;
      _0x4b79f3[15] = _0x55bd81 ^ ~_0x4fde54 & _0x1294ae;
      _0x4b79f3[24] = _0x2374de ^ ~_0x27dd0f & _0x3e8c98;
      _0x4b79f3[25] = _0x1f55d6 ^ ~_0x3a5518 & _0x54f3c4;
      _0x4b79f3[34] = _0x2bdfd5 ^ ~_0xed54e & _0x57d072;
      _0x4b79f3[35] = _0xc095f9 ^ ~_0x395183 & _0x714f36;
      _0x4b79f3[44] = _0x1c982c ^ ~_0x3870ef & _0x42bd8b;
      _0x4b79f3[45] = _0x41527b ^ ~_0x3b6a5f & _0x385c27;
      _0x4b79f3[6] = _0xd0f581 ^ ~_0x2cdf91 & _0x4b7f28;
      _0x4b79f3[7] = _0x6eb3d7 ^ ~_0x4a408b & _0x1cf2d6;
      _0x4b79f3[16] = _0x5020f5 ^ ~_0x58f833 & _0x3d2c6a;
      _0x4b79f3[17] = _0x4fde54 ^ ~_0x1294ae & _0x471244;
      _0x4b79f3[26] = _0x27dd0f ^ ~_0x3e8c98 & _0x366535;
      _0x4b79f3[27] = _0x3a5518 ^ ~_0x54f3c4 & _0x5ac5e2;
      _0x4b79f3[36] = _0xed54e ^ ~_0x57d072 & _0x13bf64;
      _0x4b79f3[37] = _0x395183 ^ ~_0x714f36 & _0x2480be;
      _0x4b79f3[46] = _0x3870ef ^ ~_0x42bd8b & _0x16c9c5;
      _0x4b79f3[47] = _0x3b6a5f ^ ~_0x385c27 & _0x12d217;
      _0x4b79f3[8] = _0x2cdf91 ^ ~_0x4b7f28 & _0x27803e;
      _0x4b79f3[9] = _0x4a408b ^ ~_0x1cf2d6 & _0x4ab872;
      _0x4b79f3[18] = _0x58f833 ^ ~_0x3d2c6a & _0x57c282;
      _0x4b79f3[19] = _0x1294ae ^ ~_0x471244 & _0x42e0e6;
      _0x4b79f3[28] = _0x3e8c98 ^ ~_0x366535 & _0x40df18;
      _0x4b79f3[29] = _0x54f3c4 ^ ~_0x5ac5e2 & _0x3d55b4;
      _0x4b79f3[38] = _0x57d072 ^ ~_0x13bf64 & _0x1696f3;
      _0x4b79f3[39] = _0x714f36 ^ ~_0x2480be & _0x5cda9a;
      _0x4b79f3[48] = _0x42bd8b ^ ~_0x16c9c5 & _0x29c9de;
      _0x4b79f3[49] = _0x385c27 ^ ~_0x12d217 & _0x2f3098;
      _0x4b79f3[0] ^= _0xab9050[_0x29ec30];
      _0x4b79f3[1] ^= _0xab9050[_0x29ec30 + 1];
    }
  };
  if (_0x76de7b)
    module.exports = _0x49b677;
  else {
    for (_0x5368c2 = 0; _0x5368c2 < _0x3c9e0e.length; ++_0x5368c2) {
      _0x4d6e90[_0x3c9e0e[_0x5368c2]] = _0x49b677[_0x3c9e0e[_0x5368c2]];
    }
    if (_0x217598) {
      define(function () {
        return _0x49b677;
      });
    }
  }
}());