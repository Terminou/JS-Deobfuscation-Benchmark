'use strict';

const version = "2.1.4";
function permutation(_0x388205, _0x2ee23b) {
  if (_0x388205 < 0) {
    throw new RangeError(_0x388205 + " is out of range");
  }
  if (_0x2ee23b < 0) {
    throw new RangeError(_0x2ee23b + " is out of range");
  }
  if (_0x2ee23b == 0) {
    return 0x1n;
  }
  if (_0x388205 < _0x2ee23b) {
    return 0x0n;
  }
  let [_0x5c33c8, _0x4dd772, _0x5cd105] = [BigInt(_0x388205), BigInt(_0x2ee23b), 0x1n];
  while (_0x4dd772--) {
    _0x5cd105 *= _0x5c33c8--;
  }
  return _0x5cd105;
}
function combination(_0x4a95ad, _0x300283) {
  if (_0x300283 == 0) {
    return 0x1n;
  }
  if (_0x4a95ad == _0x300283) {
    return 0x1n;
  }
  if (_0x4a95ad < _0x300283) {
    return 0x0n;
  }
  return permutation(_0x4a95ad, _0x300283) / permutation(_0x300283, _0x300283);
}
function factorial(_0x5791b4) {
  return permutation(_0x5791b4, _0x5791b4);
}
function factoradic(_0x366c41, _0x38006d = 0) {
  if (_0x366c41 < 0) {
    throw new RangeError(_0x366c41 + " is out of range");
  }
  let [_0x3f4eba, _0x409fdb] = [BigInt(_0x366c41), 0x1n];
  if (!_0x38006d) {
    for (_0x38006d = 1; _0x409fdb < _0x3f4eba; _0x409fdb *= BigInt(++_0x38006d));
    if (_0x3f4eba < _0x409fdb) {
      _0x409fdb /= BigInt(_0x38006d--);
    }
  } else {
    _0x409fdb = BigInt(factorial(_0x38006d));
  }
  let _0x18b5a4 = [0];
  for (; _0x38006d; _0x409fdb /= BigInt(_0x38006d--)) {
    _0x18b5a4[_0x38006d] = Number(_0x3f4eba / _0x409fdb);
    _0x3f4eba %= _0x409fdb;
  }
  return _0x18b5a4;
}
function combinadic(_0x5c7a34, _0x135e21) {
  const _0xd9f07e = combination(_0x5c7a34, _0x135e21);
  const [_0x2900b4, _0x2b65cc] = [BigInt(_0x5c7a34), BigInt(_0x135e21)];
  return _0x432687 => {
    if (_0x432687 < 0 || _0xd9f07e <= _0x432687) {
      throw new RangeError(_0x432687 + " is out of range");
    }
    let _0x59bc05 = [];
    let [_0x6d198f, _0xb692db] = [_0x2900b4, _0x2b65cc];
    let _0x5f089c = BigInt(_0xd9f07e) - 0x1n - BigInt(_0x432687);
    for (let _0x508c1d = 0; _0x508c1d < _0x135e21; _0x508c1d++) {
      _0x6d198f--;
      while (_0x5f089c < combination(_0x6d198f, _0xb692db)) {
        _0x6d198f--;
      }
      _0x59bc05.push(Number(_0x2900b4 - 0x1n - _0x6d198f));
      _0x5f089c -= combination(_0x6d198f, _0xb692db);
      _0xb692db--;
    }
    return _0x59bc05;
  };
}
const _crypto = typeof crypto !== "undefined" ? crypto : {};
const _randomBytes = typeof _crypto.randomBytes === "function" ? _0x4f857f => Uint8Array.from(_crypto.randomBytes(_0x4f857f)) : typeof _crypto.getRandomValues === "function" ? _0x51f791 => _crypto.getRandomValues(new Uint8Array(_0x51f791)) : _0x6049e1 => Uint8Array.from(Array(_0x6049e1), () => Math.random() * 256);
function randomInteger(_0x155c4f = 0, _0x236ad0 = Math.pow(2, 53)) {
  let _0x170618 = _0x155c4f.constructor;
  if (arguments.length === 0) {
    return Math.floor(Math.random() * _0x170618(_0x236ad0));
  }
  if (arguments.length == 1) {
    [_0x155c4f, _0x236ad0] = [_0x170618(0), _0x155c4f];
  }
  if (typeof _0x155c4f == "number") {
    [_0x155c4f, _0x236ad0] = [Math.ceil(Number(_0x155c4f)), Math.ceil(Number(_0x236ad0))];
    return Math.floor(Math.random() * (_0x236ad0 - _0x155c4f)) + _0x155c4f;
  }
  const _0x3d2053 = _0x170618(_0x236ad0) - _0x170618(_0x155c4f);
  const _0x2ed53e = _0x3d2053.toString(16).length;
  const _0x5b13d7 = _randomBytes(_0x2ed53e);
  const _0x3f529e = _0x5b13d7.reduce((_0x3858f2, _0x66a3a) => (_0x3858f2 << _0x170618(8)) + _0x170618(_0x66a3a), _0x170618(0));
  return (_0x170618(_0x3f529e) * _0x3d2053 >> _0x170618(_0x2ed53e * 8)) + _0x170618(_0x155c4f);
}
class _CBase {
  static of(..._0x367202) {
    return new (Function.prototype.bind.apply(this, [null].concat(_0x367202)))();
  }
  static from(_0x3b31ce) {
    return new (Function.prototype.bind.apply(this, [null].concat(_0x3b31ce)))();
  }
  [Symbol.iterator]() {
    return function* (_0x58bcf4, _0x5391bb) {
      for (let _0x35c7b3 = 0x0n; _0x35c7b3 < _0x5391bb; _0x35c7b3++) {
        yield _0x58bcf4.at(_0x35c7b3);
      }
    }(this, this.length);
  }
  toArray() {
    return [...this];
  }
  get isBig() {
    return Number.MAX_SAFE_INTEGER < this.length;
  }
  get isSafe() {
    return typeof BigInt !== "undefined" || !this.isBig;
  }
  _check(_0x517efb) {
    if (_0x517efb < 0) {
      if (this.length < -_0x517efb) {
        throw new RangeError(_0x517efb + " is out of range");
      }
      return BigInt(this.length) + BigInt(_0x517efb);
    }
    if (this.length <= _0x517efb) {
      throw new RangeError(_0x517efb + " is out of range");
    }
    return _0x517efb;
  }
  at(_0x3c26a9) {
    return undefined;
  }
  nth(_0x412030) {
    return this.at(_0x412030);
  }
  sample() {
    return this.at(randomInteger(this.length));
  }
  samples() {
    return function* (_0x44b486) {
      while (true) {
        yield _0x44b486.sample();
      }
    }(this);
  }
}
class Permutation extends _CBase {
  constructor(_0x142803, _0x4a6210 = 0) {
    super();
    this.seed = [..._0x142803];
    this.size = _0x4a6210 > 0 ? _0x4a6210 : this.seed.length;
    this.length = permutation(this.seed.length, this.size);
    Object.freeze(this);
  }
  at(_0x53f2c9) {
    _0x53f2c9 = this._check(_0x53f2c9);
    if (_0x53f2c9 === undefined) {
      return undefined;
    }
    const _0xc351b4 = this.seed.length - this.size;
    const _0x9e3771 = factorial(_0xc351b4);
    let _0x16884d = factoradic(BigInt(_0x53f2c9) * BigInt(_0x9e3771), this.seed.length);
    let _0x1ddbe4 = this.seed.slice();
    let _0x21319e = [];
    for (let _0x3ef23b = this.seed.length - 1; _0xc351b4 <= _0x3ef23b; _0x3ef23b--) {
      _0x21319e.push(_0x1ddbe4.splice(_0x16884d[_0x3ef23b], 1)[0]);
    }
    return _0x21319e;
  }
}
class Combination extends _CBase {
  constructor(_0x4b867e, _0x55dbdb = 0) {
    super();
    this.seed = [..._0x4b867e];
    this.size = _0x55dbdb > 0 ? _0x55dbdb : this.seed.length;
    this.size = _0x55dbdb;
    this.length = combination(this.seed.length, this.size);
    this.comb = combinadic(this.seed.length, this.size);
    Object.freeze(this);
  }
  [Symbol.iterator]() {
    return function* (_0x413418) {
      if (_0x413418.length === 0x0n) {
        return;
      }
      const [_0xcf2348, _0x539162] = [_0x413418.seed.length, _0x413418.size];
      const _0xd136d4 = Array.from({
        length: _0x539162
      }, (_0x2b523f, _0x37f955) => _0x37f955);
      while (true) {
        yield _0xd136d4.map(_0x5f3559 => _0x413418.seed[_0x5f3559]);
        let _0x307460 = _0x539162 - 1;
        while (_0x307460 >= 0 && _0xd136d4[_0x307460] === _0x307460 + _0xcf2348 - _0x539162) {
          _0x307460--;
        }
        if (_0x307460 < 0) {
          return;
        }
        _0xd136d4[_0x307460]++;
        for (let _0x4e52b0 = _0x307460 + 1; _0x4e52b0 < _0x539162; _0x4e52b0++) {
          _0xd136d4[_0x4e52b0] = _0xd136d4[_0x4e52b0 - 1] + 1;
        }
      }
    }(this);
  }
  bitwiseIterator() {
    const _0x4224ed = _0xd7c863 => {
      if (_0xd7c863 <= 0x0n) {
        return 0x0n;
      }
      const _0x4881b3 = _0xd7c863 & -_0xd7c863;
      const _0x2b35cc = _0x4881b3 + _0xd7c863;
      return _0x2b35cc + ((_0x2b35cc ^ _0xd7c863) / _0x4881b3 >> 0x2n);
    };
    let _0x2fdbb2 = (0x1n << BigInt(this.size)) - 0x1n;
    return function* (_0x1a42f7, _0x3683bd) {
      for (let _0x66dcbe = 0x0n; _0x66dcbe < BigInt(_0x3683bd); _0x66dcbe++, _0x2fdbb2 = _0x4224ed(_0x2fdbb2)) {
        let _0x2641d6 = [];
        for (let _0x5937ff = _0x2fdbb2, _0x95f199 = 0; 0x0n < _0x5937ff; _0x5937ff >>= 0x1n, _0x95f199++) {
          if (_0x5937ff & 0x1n) {
            _0x2641d6.push(_0x1a42f7.seed[_0x95f199]);
          }
        }
        yield _0x2641d6;
      }
    }(this, this.length);
  }
  at(_0x350649) {
    _0x350649 = this._check(_0x350649);
    if (_0x350649 === undefined) {
      return undefined;
    }
    let _0x14e57f = [];
    for (let _0x1e6fbd of this.comb(_0x350649)) {
      _0x14e57f.push(this.seed[_0x1e6fbd]);
    }
    return _0x14e57f;
  }
}
class BaseN extends _CBase {
  constructor(_0x29bc80, _0x4de08a = 1) {
    if (_0x4de08a < 1) {
      throw new RangeError(_0x4de08a + " is out of range");
    }
    super();
    this.seed = [..._0x29bc80];
    this.size = _0x4de08a;
    let _0x3cc12c = this.seed.length;
    this.base = _0x3cc12c;
    this.length = BigInt(_0x3cc12c) ** BigInt(_0x4de08a);
    Object.freeze(this);
  }
  at(_0x335a46) {
    _0x335a46 = this._check(_0x335a46);
    if (_0x335a46 === undefined) {
      return undefined;
    }
    let _0x11fe5a = BigInt(_0x335a46);
    const _0x550612 = BigInt(this.base);
    let _0x29ac59 = [];
    for (let _0x3c6156 = 0; _0x3c6156 < this.size; _0x3c6156++) {
      let _0x39e9bc = _0x11fe5a % _0x550612;
      _0x29ac59.push(this.seed[Number(_0x39e9bc)]);
      _0x11fe5a -= _0x39e9bc;
      _0x11fe5a /= _0x550612;
    }
    return _0x29ac59;
  }
}
class PowerSet extends _CBase {
  constructor(_0xde3e10) {
    super();
    this.seed = [..._0xde3e10];
    const _0x494ca6 = 0x1n << BigInt(this.seed.length);
    this.length = _0x494ca6;
    Object.freeze(this);
  }
  at(_0x2060e8) {
    _0x2060e8 = this._check(_0x2060e8);
    if (_0x2060e8 === undefined) {
      return undefined;
    }
    let _0x39e7ed = BigInt(_0x2060e8);
    let _0x13a263 = [];
    for (let _0x3f4450 = 0x0n; _0x39e7ed; _0x39e7ed >>= 0x1n, _0x3f4450++) {
      if (_0x39e7ed & 0x1n) {
        _0x13a263.push(this.seed[Number(_0x3f4450)]);
      }
    }
    return _0x13a263;
  }
}
class CartesianProduct extends _CBase {
  constructor(..._0x4e934e) {
    super();
    this.seed = _0x4e934e.map(_0x22da27 => [..._0x22da27]);
    this.size = this.seed.length;
    const _0x2bcf8a = this.seed.reduce((_0x518b99, _0xb3d520) => _0x518b99 * BigInt(_0xb3d520.length), 0x1n);
    this.length = _0x2bcf8a;
    Object.freeze(this);
  }
  at(_0x5accf9) {
    _0x5accf9 = this._check(_0x5accf9);
    if (_0x5accf9 === undefined) {
      return undefined;
    }
    let _0x4cf0ab = BigInt(_0x5accf9);
    let _0x2c920f = [];
    for (let _0x4f3084 = 0; _0x4f3084 < this.size; _0x4f3084++) {
      const _0x1184b7 = this.seed[_0x4f3084].length;
      const _0x59fab3 = BigInt(_0x1184b7);
      const _0x45729c = _0x4cf0ab % _0x59fab3;
      _0x2c920f.push(this.seed[_0x4f3084][Number(_0x45729c)]);
      _0x4cf0ab -= _0x45729c;
      _0x4cf0ab /= _0x59fab3;
    }
    return _0x2c920f;
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
exports.version = version;