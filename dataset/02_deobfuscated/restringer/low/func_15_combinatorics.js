'use strict';
function _0x5c33() {
  return [
    'floor',
    'permutation',
    'factorial',
    'version',
    'MAX_SAFE_INTEGER',
    'iterator',
    'nth',
    'undefined',
    'random',
    '5743178mRahJK',
    'samples',
    '_check',
    'isBig',
    'toArray',
    '2.1.4',
    '6591585dBRgjL',
    '2544846sVahGW',
    'BaseN',
    '9zUXhOY',
    'combinadic',
    '2291084kdhtyL',
    'freeze',
    'push',
    'prototype',
    'ceil',
    'splice',
    'seed',
    'concat',
    'slice',
    'randomBytes',
    'sample',
    'length',
    'isSafe',
    'factoradic',
    'PowerSet',
    'size',
    'reduce',
    'from',
    'CartesianProduct',
    '558230MuOtif',
    ' is out of range',
    'number',
    'apply',
    'pow',
    'randomInteger',
    'function',
    'base',
    'map',
    '1HUmuMX',
    '4865076fhBTqw',
    'bind',
    '38066168uRLFdy',
    'comb'
  ];
}
function _0x4dd7(_0x388205, _0x2ee23b) {
  _0x388205 = _0x388205 - 207;
  const _0x5c33c8 = [
    'floor',
    'permutation',
    'factorial',
    'version',
    'MAX_SAFE_INTEGER',
    'iterator',
    'nth',
    'undefined',
    'random',
    '5743178mRahJK',
    'samples',
    '_check',
    'isBig',
    'toArray',
    '2.1.4',
    '6591585dBRgjL',
    '2544846sVahGW',
    'BaseN',
    '9zUXhOY',
    'combinadic',
    '2291084kdhtyL',
    'freeze',
    'push',
    'prototype',
    'ceil',
    'splice',
    'seed',
    'concat',
    'slice',
    'randomBytes',
    'sample',
    'length',
    'isSafe',
    'factoradic',
    'PowerSet',
    'size',
    'reduce',
    'from',
    'CartesianProduct',
    '558230MuOtif',
    ' is out of range',
    'number',
    'apply',
    'pow',
    'randomInteger',
    'function',
    'base',
    'map',
    '1HUmuMX',
    '4865076fhBTqw',
    'bind',
    '38066168uRLFdy',
    'comb'
  ];
  let _0x4dd772 = _0x5c33c8[_0x388205];
  return _0x5c33c8[_0x388205];
}
const version = '2.1.4';
function permutation(_0x3f4eba, _0x409fdb) {
  if (_0x3f4eba < 0)
    throw new RangeError(_0x3f4eba + ' is out of range');
  if (_0x409fdb < 0)
    throw new RangeError(_0x409fdb + ' is out of range');
  if (0 == _0x409fdb)
    return 0x1n;
  if (_0x3f4eba < _0x409fdb)
    return 0x0n;
  let [_0x18b5a4, _0x5c7a34, _0x135e21] = [
    BigInt(_0x3f4eba),
    BigInt(_0x409fdb),
    0x1n
  ];
  while (_0x5c7a34--)
    _0x135e21 *= _0x18b5a4--;
  return _0x135e21;
}
function combination(_0xd9f07e, _0x2900b4) {
  if (0 == _0x2900b4)
    return 0x1n;
  if (_0xd9f07e == _0x2900b4)
    return 0x1n;
  if (_0xd9f07e < _0x2900b4)
    return 0x0n;
  return permutation(_0xd9f07e, _0x2900b4) / permutation(_0x2900b4, _0x2900b4);
}
function factorial(_0x2b65cc) {
  return permutation(_0x2b65cc, _0x2b65cc);
}
function factoradic(_0x432687, _0x59bc05 = 0) {
  if (_0x432687 < 0)
    throw new RangeError(_0x432687 + ' is out of range');
  let [_0x6d198f, _0xb692db] = [
    BigInt(_0x432687),
    0x1n
  ];
  if (!_0x59bc05) {
    for (_0x59bc05 = 1; _0xb692db < _0x6d198f; _0xb692db *= BigInt(++_0x59bc05));
    if (_0x6d198f < _0xb692db)
      _0xb692db /= BigInt(_0x59bc05--);
  } else
    _0xb692db = BigInt(factorial(_0x59bc05));
  let _0x5f089c = [0];
  for (; _0x59bc05; _0xb692db /= BigInt(_0x59bc05--)) {
    _0x5f089c[_0x59bc05] = Number(_0x6d198f / _0xb692db);
    _0x6d198f %= _0xb692db;
  }
  return _0x5f089c;
}
function combinadic(_0x508c1d, _0x4f857f) {
  const _0x51f791 = combination(_0x508c1d, _0x4f857f);
  const [_0x6049e1, _0x155c4f] = [
    BigInt(_0x508c1d),
    BigInt(_0x4f857f)
  ];
  return _0x236ad0 => {
    if (_0x236ad0 < 0 || _0x51f791 <= _0x236ad0)
      throw new RangeError(_0x236ad0 + ' is out of range');
    let _0x170618 = [];
    let [_0x3d2053, _0x2ed53e] = [
      _0x6049e1,
      _0x155c4f
    ];
    let _0x5b13d7 = BigInt(_0x51f791) - 0x1n - BigInt(_0x236ad0);
    for (let _0x3f529e = 0; _0x3f529e < _0x4f857f; _0x3f529e++) {
      _0x3d2053--;
      while (_0x5b13d7 < combination(_0x3d2053, _0x2ed53e))
        _0x3d2053--;
      _0x170618.push(Number(_0x6049e1 - 0x1n - _0x3d2053));
      _0x5b13d7 -= combination(_0x3d2053, _0x2ed53e);
      _0x2ed53e--;
    }
    return _0x170618;
  };
}
const _crypto = typeof crypto !== 'undefined' ? crypto : {};
const _randomBytes = typeof _crypto.randomBytes === 'function' ? _0x3858f2 => Uint8Array.from(_crypto.randomBytes(_0x3858f2)) : typeof function getRandomValues(array) {
  if (this !== crypto)
    throw new ERR_INVALID_THIS('Crypto');
  webidl ??= require('internal/crypto/webidl');
  const prefix = "Failed to execute 'getRandomValues' on 'Crypto'";
  webidl.requiredArguments(arguments.length, 1, { prefix });
  return ReflectApply(_getRandomValues, this, arguments);
} === 'function' ? _0x66a3a => _crypto.getRandomValues(new Uint8Array(_0x66a3a)) : _0x367202 => Uint8Array.from(Array(_0x367202), () => Math.random() * 256);
function randomInteger(_0x3b31ce = 0, _0x58bcf4 = Math.pow(2, 53)) {
  let _0x5391bb = _0x3b31ce.constructor;
  if (arguments.length === 0)
    return Math.floor(Math.random() * _0x3b31ce.constructor(_0x58bcf4));
  if (arguments.length == 1) {
    [_0x3b31ce, _0x58bcf4] = [
      function () {
        0;
      },
      _0x3b31ce
    ];
  }
  if (typeof _0x3b31ce == 'number') {
    [_0x3b31ce, _0x58bcf4] = [
      Math.ceil(Number(_0x3b31ce)),
      Math.ceil(Number(_0x58bcf4))
    ];
    return Math.floor(Math.random() * (_0x58bcf4 - _0x3b31ce)) + _0x3b31ce;
  }
  const _0x35c7b3 = _0x3b31ce.constructor(_0x58bcf4) - _0x3b31ce.constructor(_0x3b31ce);
  const _0x517efb = _0x35c7b3.toString(16).length;
  const _0x3c26a9 = _randomBytes(_0x35c7b3.toString(16).length);
  const _0x412030 = _0x3c26a9.reduce((_0x44b486, _0x142803) => (_0x44b486 << function () {
    8;
  }) + _0x3b31ce.constructor(_0x142803), function () {
    0;
  });
  return (_0x3b31ce.constructor(_0x412030) * _0x35c7b3 >> _0x3b31ce.constructor(_0x35c7b3.toString(16).length * 8)) + _0x3b31ce.constructor(_0x3b31ce);
}
class _CBase {
  static of(..._0x4a6210) {
    return new (Function.prototype.bind())();
  }
  static from(_0x53f2c9) {
    return new (Function.prototype.bind())();
  }
  [Symbol.iterator]() {
    return function* (_0xc351b4, _0x9e3771) {
      for (let _0x16884d = 0x0n; _0x16884d < _0x9e3771; _0x16884d++)
        yield _0xc351b4.at(_0x16884d);
    }(this, this.length);
  }
  toArray() {
    return [...this];
  }
  get isBig() {
    return Number.MAX_SAFE_INTEGER < this.length;
  }
  get isSafe() {
    return typeof BigInt !== 'undefined' || !this.isBig;
  }
  _check(_0x1ddbe4) {
    if (_0x1ddbe4 < 0) {
      if (this.length < -_0x1ddbe4)
        throw new RangeError(_0x1ddbe4 + ' is out of range');
      return BigInt(this.length) + BigInt(_0x1ddbe4);
    }
    if (this.length <= _0x1ddbe4)
      throw new RangeError(_0x1ddbe4 + ' is out of range');
    return _0x1ddbe4;
  }
  at(_0x21319e) {
    return undefined;
  }
  nth(_0x3ef23b) {
    return this.at(_0x3ef23b);
  }
  sample() {
    return this.at(randomInteger(this.length));
  }
  samples() {
    return function* (_0x4b867e) {
      while (true)
        yield _0x4b867e.sample();
    }(this);
  }
}
class Permutation extends _CBase {
  constructor(_0x55dbdb, _0x413418 = 0) {
    super();
    this.seed = [..._0x55dbdb];
    this.size = 0 < _0x413418 ? _0x413418 : this.seed.length;
    this.length = permutation(this.seed.length, this.size);
    Object.freeze(this);
  }
  at(_0xcf2348) {
    _0xcf2348 = this._check(_0xcf2348);
    if (_0xcf2348 === undefined)
      return undefined;
    const _0x539162 = this.seed.length - this.size;
    const _0xd136d4 = factorial(_0x539162);
    let _0x2b523f = factoradic(BigInt(_0xcf2348) * BigInt(_0xd136d4), this.seed.length);
    let _0x37f955 = this.seed.slice();
    let _0x307460 = [];
    for (let _0x5f3559 = this.seed.length - 1; _0x539162 <= _0x5f3559; _0x5f3559--) {
      _0x307460.push(_0x37f955.splice(_0x2b523f[_0x5f3559], 1)[0]);
    }
    return _0x307460;
  }
}
class Combination extends _CBase {
  constructor(_0x4e52b0, _0x4224ed = 0) {
    super();
    this.seed = [..._0x4e52b0];
    this.size = 0 < _0x4224ed ? _0x4224ed : this.seed.length;
    this.size = _0x4224ed;
    this.length = combination(this.seed.length, this.size);
    this.comb = combinadic(this.seed.length, this.size);
    Object.freeze(this);
  }
  [Symbol.iterator]() {
    return function* (_0x2fdbb2) {
      if (_0x2fdbb2.length === 0x0n)
        return;
      const [_0xd7c863, _0x4881b3] = [
        _0x2fdbb2.seed.length,
        _0x2fdbb2.size
      ];
      const _0x2b35cc = Array.from({ length: _0x4881b3 }, (_0x1a42f7, _0x3683bd) => _0x3683bd);
      while (true) {
        yield _0x2b35cc.map(_0x2641d6 => _0x2fdbb2.seed[_0x2641d6]);
        let _0x66dcbe = _0x4881b3 - 1;
        while (0 <= _0x66dcbe && _0x2b35cc[_0x66dcbe] === _0x66dcbe + _0xd7c863 - _0x4881b3)
          _0x66dcbe--;
        if (_0x66dcbe < 0)
          return;
        _0x2b35cc[_0x66dcbe]++;
        for (let _0x5937ff = _0x66dcbe + 1; _0x5937ff < _0x4881b3; _0x5937ff++)
          _0x2b35cc[_0x5937ff] = _0x2b35cc[_0x5937ff - 1] + 1;
      }
    }(this);
  }
  bitwiseIterator() {
    const _0x95f199 = _0x14e57f => {
      if (_0x14e57f <= 0x0n)
        return 0x0n;
      const _0x1e6fbd = _0x14e57f & -_0x14e57f;
      const _0x29bc80 = _0x1e6fbd + _0x14e57f;
      return _0x29bc80 + ((_0x29bc80 ^ _0x14e57f) / _0x1e6fbd >> 0x2n);
    };
    let _0x350649 = (0x1n << BigInt(this.size)) - 0x1n;
    return function* (_0x4de08a, _0x3cc12c) {
      for (let _0x335a46 = 0x0n; _0x335a46 < BigInt(_0x3cc12c); _0x335a46++, _0x350649 = _0x95f199(_0x350649)) {
        let _0x11fe5a = [];
        for (let _0x550612 = _0x350649, _0x29ac59 = 0; 0x0n < _0x550612; _0x550612 >>= 0x1n, _0x29ac59++) {
          if (_0x550612 & 0x1n)
            _0x11fe5a.push(_0x4de08a.seed[_0x29ac59]);
        }
        yield _0x11fe5a;
      }
    }(this, this.length);
  }
  at(_0x3c6156) {
    _0x3c6156 = this._check(_0x3c6156);
    if (_0x3c6156 === undefined)
      return undefined;
    let _0x39e9bc = [];
    for (let _0xde3e10 of this.comb(_0x3c6156)) {
      _0x39e9bc.push(this.seed[_0xde3e10]);
    }
    return _0x39e9bc;
  }
}
class BaseN extends _CBase {
  constructor(_0x494ca6, _0x2060e8 = 1) {
    if (_0x2060e8 < 1)
      throw new RangeError(_0x2060e8 + ' is out of range');
    super();
    this.seed = [..._0x494ca6];
    this.size = _0x2060e8;
    let _0x39e7ed = this.seed.length;
    this.base = this.seed.length;
    this.length = BigInt(this.seed.length) ** BigInt(_0x2060e8);
    Object.freeze(this);
  }
  at(_0x13a263) {
    _0x13a263 = this._check(_0x13a263);
    if (_0x13a263 === undefined)
      return undefined;
    let _0x3f4450 = BigInt(_0x13a263);
    const _0x4e934e = BigInt(this.base);
    let _0x2bcf8a = [];
    for (let _0x22da27 = 0; _0x22da27 < this.size; _0x22da27++) {
      let _0x518b99 = _0x3f4450 % _0x4e934e;
      _0x2bcf8a.push(this.seed[Number(_0x518b99)]);
      _0x3f4450 -= _0x518b99;
      _0x3f4450 /= _0x4e934e;
    }
    return _0x2bcf8a;
  }
}
class PowerSet extends _CBase {
  constructor(_0xb3d520) {
    super();
    this.seed = [..._0xb3d520];
    const _0x5accf9 = 0x1n << BigInt(this.seed.length);
    this.length = _0x5accf9;
    Object.freeze(this);
  }
  at(_0x4cf0ab) {
    _0x4cf0ab = this._check(_0x4cf0ab);
    if (_0x4cf0ab === undefined)
      return undefined;
    let _0x2c920f = BigInt(_0x4cf0ab);
    let _0x4f3084 = [];
    for (let _0x1184b7 = 0x0n; _0x2c920f; _0x2c920f >>= 0x1n, _0x1184b7++)
      if (_0x2c920f & 0x1n)
        _0x4f3084.push(this.seed[Number(_0x1184b7)]);
    return _0x4f3084;
  }
}
class CartesianProduct extends _CBase {
  constructor(..._0x59fab3) {
    super();
    this.seed = _0x59fab3.map(_0x260a16 => [..._0x260a16]);
    this.size = this.seed.length;
    const _0x45729c = this.seed.reduce((_0x1fc816, _0x3d3afa) => _0x1fc816 * BigInt(_0x3d3afa.length), 0x1n);
    this.length = _0x45729c;
    Object.freeze(this);
  }
  at(_0x5c8550) {
    _0x5c8550 = this._check(_0x5c8550);
    if (_0x5c8550 === undefined)
      return undefined;
    let _0x4c704b = BigInt(_0x5c8550);
    let _0x4f3e63 = [];
    for (let _0x39d9c2 = 0; _0x39d9c2 < this.size; _0x39d9c2++) {
      const _0x3b44c3 = this.seed[_0x39d9c2].length;
      const _0x47f106 = BigInt(this.seed[_0x39d9c2].length);
      const _0x19a7f8 = _0x4c704b % _0x47f106;
      _0x4f3e63.push(this.seed[_0x39d9c2][Number(_0x19a7f8)]);
      _0x4c704b -= _0x19a7f8;
      _0x4c704b /= _0x47f106;
    }
    return _0x4f3e63;
  }
}
exports.BaseN = BaseN;
exports.CartesianProduct = CartesianProduct;
exports.Combination = Combination;
exports.Permutation = Permutation;
exports.PowerSet = PowerSet;
exports.combinadic = combinadic;
exports.combination = combination;
exports.factoradic = factoradic;
exports.factorial = factorial;
exports.permutation = permutation;
exports.randomInteger = randomInteger;
exports.version = '2.1.4';