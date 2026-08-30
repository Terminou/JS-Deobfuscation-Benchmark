'use strict';

const version = "2.1.4";
function permutation(_0x2a676b, _0x543e5c) {
  if (_0x2a676b < 0) {
    throw new RangeError(_0x2a676b + " is out of range");
  }
  if (_0x543e5c < 0) {
    throw new RangeError(_0x543e5c + " is out of range");
  }
  if (_0x543e5c == 0) {
    return 0x1n;
  }
  if (_0x2a676b < _0x543e5c) {
    return 0x0n;
  }
  let [_0x4e8a0f, _0x1e8c38, _0x19af4f] = [BigInt(_0x2a676b), BigInt(_0x543e5c), 0x1n];
  while (_0x1e8c38--) {
    _0x19af4f *= _0x4e8a0f--;
  }
  return _0x19af4f;
}
function combination(_0x5d387c, _0x5cb6e5) {
  if (_0x5cb6e5 == 0) {
    return 0x1n;
  }
  if (_0x5d387c == _0x5cb6e5) {
    return 0x1n;
  }
  if (_0x5d387c < _0x5cb6e5) {
    return 0x0n;
  }
  return permutation(_0x5d387c, _0x5cb6e5) / permutation(_0x5cb6e5, _0x5cb6e5);
}
function factorial(_0x1bb2ce) {
  return permutation(_0x1bb2ce, _0x1bb2ce);
}
function factoradic(_0x586c5b, _0x33ee8b = 0) {
  if (_0x586c5b < 0) {
    throw new RangeError(_0x586c5b + " is out of range");
  }
  let [_0x22402e, _0x476027] = [BigInt(_0x586c5b), 0x1n];
  if (!_0x33ee8b) {
    for (_0x33ee8b = 1; _0x476027 < _0x22402e; _0x476027 *= BigInt(++_0x33ee8b));
    if (_0x22402e < _0x476027) {
      _0x476027 /= BigInt(_0x33ee8b--);
    }
  } else {
    _0x476027 = BigInt(factorial(_0x33ee8b));
  }
  let _0x3a0f26 = [0];
  for (; _0x33ee8b; _0x476027 /= BigInt(_0x33ee8b--)) {
    _0x3a0f26[_0x33ee8b] = Number(_0x22402e / _0x476027);
    _0x22402e %= _0x476027;
  }
  return _0x3a0f26;
}
function combinadic(_0x4ff08e, _0x5e4b48) {
  const _0x1ac5b2 = combination(_0x4ff08e, _0x5e4b48);
  const [_0x257d91, _0x4dd80a] = [BigInt(_0x4ff08e), BigInt(_0x5e4b48)];
  return _0x3478bb => {
    if (_0x3478bb < 0 || _0x1ac5b2 <= _0x3478bb) {
      throw new RangeError(_0x3478bb + " is out of range");
    }
    let _0x42df2d = [];
    let [_0x4c99a4, _0x4ea4e4] = [_0x257d91, _0x4dd80a];
    let _0x5697db = BigInt(_0x1ac5b2) - 0x1n - BigInt(_0x3478bb);
    for (let _0x4e87be = 0; _0x4e87be < _0x5e4b48; _0x4e87be++) {
      _0x4c99a4--;
      while (_0x5697db < combination(_0x4c99a4, _0x4ea4e4)) {
        _0x4c99a4--;
      }
      _0x42df2d.push(Number(_0x257d91 - 0x1n - _0x4c99a4));
      _0x5697db -= combination(_0x4c99a4, _0x4ea4e4);
      _0x4ea4e4--;
    }
    return _0x42df2d;
  };
}
const _crypto = typeof crypto !== "undefined" ? crypto : {};
const _randomBytes = typeof _crypto.randomBytes === "function" ? _0x2847a6 => Uint8Array.from(_crypto.randomBytes(_0x2847a6)) : typeof _crypto.getRandomValues === "function" ? _0x89d467 => _crypto.getRandomValues(new Uint8Array(_0x89d467)) : _0x25f274 => Uint8Array.from(Array(_0x25f274), () => Math.random() * 256);
function randomInteger(_0x35a54b = 0, _0x2c21b0 = Math.pow(2, 53)) {
  let _0x366745 = _0x35a54b.constructor;
  if (arguments.length === 0) {
    return Math.floor(Math.random() * _0x366745(_0x2c21b0));
  }
  if (arguments.length == 1) {
    [_0x35a54b, _0x2c21b0] = [_0x366745(0), _0x35a54b];
  }
  if (typeof _0x35a54b == "number") {
    [_0x35a54b, _0x2c21b0] = [Math.ceil(Number(_0x35a54b)), Math.ceil(Number(_0x2c21b0))];
    return Math.floor(Math.random() * (_0x2c21b0 - _0x35a54b)) + _0x35a54b;
  }
  const _0x16948f = _0x366745(_0x2c21b0) - _0x366745(_0x35a54b);
  const _0x26d8fa = _0x16948f.toString(16).length;
  const _0x1b2d74 = _randomBytes(_0x26d8fa);
  const _0x15824a = _0x1b2d74.reduce((_0x285d5e, _0x13d568) => (_0x285d5e << _0x366745(8)) + _0x366745(_0x13d568), _0x366745(0));
  return (_0x366745(_0x15824a) * _0x16948f >> _0x366745(_0x26d8fa * 8)) + _0x366745(_0x35a54b);
}
class _CBase {
  static of(..._0x31eb17) {
    return new (Function.prototype.bind.apply(this, [null].concat(_0x31eb17)))();
  }
  static from(_0x939ef9) {
    return new (Function.prototype.bind.apply(this, [null].concat(_0x939ef9)))();
  }
  [Symbol.iterator]() {
    return function* (_0x57187e, _0x47ce03) {
      for (let _0x3b16d0 = 0x0n; _0x3b16d0 < _0x47ce03; _0x3b16d0++) {
        yield _0x57187e.at(_0x3b16d0);
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
  _check(_0x4c5bf5) {
    if (_0x4c5bf5 < 0) {
      if (this.length < -_0x4c5bf5) {
        throw new RangeError(_0x4c5bf5 + " is out of range");
      }
      return BigInt(this.length) + BigInt(_0x4c5bf5);
    }
    if (this.length <= _0x4c5bf5) {
      throw new RangeError(_0x4c5bf5 + " is out of range");
    }
    return _0x4c5bf5;
  }
  at(_0x369123) {
    return undefined;
  }
  nth(_0x27099d) {
    return this.at(_0x27099d);
  }
  sample() {
    return this.at(randomInteger(this.length));
  }
  samples() {
    return function* (_0x1cbd21) {
      while (true) {
        yield _0x1cbd21.sample();
      }
    }(this);
  }
}
class Permutation extends _CBase {
  constructor(_0x4436cd, _0x34d661 = 0) {
    super();
    this.seed = [..._0x4436cd];
    this.size = _0x34d661 > 0 ? _0x34d661 : this.seed.length;
    this.length = permutation(this.seed.length, this.size);
    Object.freeze(this);
  }
  at(_0xdc325e) {
    _0xdc325e = this._check(_0xdc325e);
    if (_0xdc325e === undefined) {
      return undefined;
    }
    const _0x107ad6 = this.seed.length - this.size;
    const _0x51fe10 = factorial(_0x107ad6);
    let _0x2f76fa = factoradic(BigInt(_0xdc325e) * BigInt(_0x51fe10), this.seed.length);
    let _0x40ec01 = this.seed.slice();
    let _0x326189 = [];
    for (let _0x5f39aa = this.seed.length - 1; _0x107ad6 <= _0x5f39aa; _0x5f39aa--) {
      _0x326189.push(_0x40ec01.splice(_0x2f76fa[_0x5f39aa], 1)[0]);
    }
    return _0x326189;
  }
}
class Combination extends _CBase {
  constructor(_0xc5382f, _0x438c36 = 0) {
    super();
    this.seed = [..._0xc5382f];
    this.size = _0x438c36 > 0 ? _0x438c36 : this.seed.length;
    this.size = _0x438c36;
    this.length = combination(this.seed.length, this.size);
    this.comb = combinadic(this.seed.length, this.size);
    Object.freeze(this);
  }
  [Symbol.iterator]() {
    return function* (_0x15ccdc) {
      if (_0x15ccdc.length === 0x0n) {
        return;
      }
      const [_0x6ee33f, _0x3426ce] = [_0x15ccdc.seed.length, _0x15ccdc.size];
      const _0x239c8d = {
        length: _0x3426ce
      };
      const _0xdaa30f = Array.from(_0x239c8d, (_0x5e2877, _0x249a45) => _0x249a45);
      while (true) {
        yield _0xdaa30f.map(_0x4c50af => _0x15ccdc.seed[_0x4c50af]);
        let _0x59d78c = _0x3426ce - 1;
        while (_0x59d78c >= 0 && _0xdaa30f[_0x59d78c] === _0x59d78c + _0x6ee33f - _0x3426ce) {
          _0x59d78c--;
        }
        if (_0x59d78c < 0) {
          return;
        }
        _0xdaa30f[_0x59d78c]++;
        for (let _0x11e627 = _0x59d78c + 1; _0x11e627 < _0x3426ce; _0x11e627++) {
          _0xdaa30f[_0x11e627] = _0xdaa30f[_0x11e627 - 1] + 1;
        }
      }
    }(this);
  }
  bitwiseIterator() {
    const _0x155d34 = _0x31b198 => {
      if (_0x31b198 <= 0x0n) {
        return 0x0n;
      }
      const _0x55a9cb = _0x31b198 & -_0x31b198;
      const _0x3b529c = _0x55a9cb + _0x31b198;
      return _0x3b529c + ((_0x3b529c ^ _0x31b198) / _0x55a9cb >> 0x2n);
    };
    let _0xdf399c = (0x1n << BigInt(this.size)) - 0x1n;
    return function* (_0x1f0ea0, _0x58a4ea) {
      for (let _0x299b2d = 0x0n; _0x299b2d < BigInt(_0x58a4ea); _0x299b2d++, _0xdf399c = _0x155d34(_0xdf399c)) {
        let _0x4d23a7 = [];
        for (let _0x32fe96 = _0xdf399c, _0x1ae607 = 0; 0x0n < _0x32fe96; _0x32fe96 >>= 0x1n, _0x1ae607++) {
          if (_0x32fe96 & 0x1n) {
            _0x4d23a7.push(_0x1f0ea0.seed[_0x1ae607]);
          }
        }
        yield _0x4d23a7;
      }
    }(this, this.length);
  }
  at(_0x4a9d54) {
    _0x4a9d54 = this._check(_0x4a9d54);
    if (_0x4a9d54 === undefined) {
      return undefined;
    }
    let _0x41af44 = [];
    for (let _0x1b8a16 of this.comb(_0x4a9d54)) {
      _0x41af44.push(this.seed[_0x1b8a16]);
    }
    return _0x41af44;
  }
}
class BaseN extends _CBase {
  constructor(_0x55133e, _0x28db17 = 1) {
    if (_0x28db17 < 1) {
      throw new RangeError(_0x28db17 + " is out of range");
    }
    super();
    this.seed = [..._0x55133e];
    this.size = _0x28db17;
    let _0x2a2f04 = this.seed.length;
    this.base = _0x2a2f04;
    this.length = BigInt(_0x2a2f04) ** BigInt(_0x28db17);
    Object.freeze(this);
  }
  at(_0x317bb5) {
    _0x317bb5 = this._check(_0x317bb5);
    if (_0x317bb5 === undefined) {
      return undefined;
    }
    let _0x24092e = BigInt(_0x317bb5);
    const _0x223322 = BigInt(this.base);
    let _0x237689 = [];
    for (let _0x4c441f = 0; _0x4c441f < this.size; _0x4c441f++) {
      let _0x37130c = _0x24092e % _0x223322;
      _0x237689.push(this.seed[Number(_0x37130c)]);
      _0x24092e -= _0x37130c;
      _0x24092e /= _0x223322;
    }
    return _0x237689;
  }
}
class PowerSet extends _CBase {
  constructor(_0x195070) {
    super();
    this.seed = [..._0x195070];
    const _0x573b88 = 0x1n << BigInt(this.seed.length);
    this.length = _0x573b88;
    Object.freeze(this);
  }
  at(_0xe19a92) {
    _0xe19a92 = this._check(_0xe19a92);
    if (_0xe19a92 === undefined) {
      return undefined;
    }
    let _0x57e8fc = BigInt(_0xe19a92);
    let _0x5cadf5 = [];
    for (let _0x314ddf = 0x0n; _0x57e8fc; _0x57e8fc >>= 0x1n, _0x314ddf++) {
      if (_0x57e8fc & 0x1n) {
        _0x5cadf5.push(this.seed[Number(_0x314ddf)]);
      }
    }
    return _0x5cadf5;
  }
}
class CartesianProduct extends _CBase {
  constructor(..._0x3e4cfa) {
    super();
    this.seed = _0x3e4cfa.map(_0x3757ba => [..._0x3757ba]);
    this.size = this.seed.length;
    const _0x3ec2fc = this.seed.reduce((_0x1ba7bb, _0x12f541) => _0x1ba7bb * BigInt(_0x12f541.length), 0x1n);
    this.length = _0x3ec2fc;
    Object.freeze(this);
  }
  at(_0x571fc2) {
    _0x571fc2 = this._check(_0x571fc2);
    if (_0x571fc2 === undefined) {
      return undefined;
    }
    let _0x502230 = BigInt(_0x571fc2);
    let _0x5b3abd = [];
    for (let _0x44c5c3 = 0; _0x44c5c3 < this.size; _0x44c5c3++) {
      const _0x2abcff = this.seed[_0x44c5c3].length;
      const _0x341778 = BigInt(_0x2abcff);
      const _0x3bf58e = _0x502230 % _0x341778;
      _0x5b3abd.push(this.seed[_0x44c5c3][Number(_0x3bf58e)]);
      _0x502230 -= _0x3bf58e;
      _0x502230 /= _0x341778;
    }
    return _0x5b3abd;
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