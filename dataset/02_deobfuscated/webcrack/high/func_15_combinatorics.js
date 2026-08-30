'use strict';

const version = "2.1.4";
function permutation(_0x4634c6, _0x5e7722) {
  if (_0x4634c6 < 0) {
    throw new RangeError(_0x4634c6 + " is out of range");
  }
  if (_0x5e7722 < 0) {
    throw new RangeError(_0x5e7722 + " is out of range");
  }
  if (_0x5e7722 == 0) {
    return 0x1n;
  }
  if (_0x4634c6 < _0x5e7722) {
    return 0x0n;
  }
  let [_0x4b6695, _0xad6f34, _0x116a1e] = [BigInt(_0x4634c6), BigInt(_0x5e7722), 0x1n];
  while (_0xad6f34--) {
    _0x116a1e *= _0x4b6695--;
  }
  return _0x116a1e;
}
function combination(_0x3836aa, _0x3464da) {
  if (_0x3464da == 0) {
    return 0x1n;
  }
  if (_0x3836aa == _0x3464da) {
    return 0x1n;
  }
  if (_0x3836aa < _0x3464da) {
    return 0x0n;
  }
  return permutation(_0x3836aa, _0x3464da) / permutation(_0x3464da, _0x3464da);
}
function factorial(_0x2e28e3) {
  return permutation(_0x2e28e3, _0x2e28e3);
}
function factoradic(_0x55e44f, _0x49384d = 0) {
  if (_0x55e44f < 0) {
    throw new RangeError(_0x55e44f + " is out of range");
  }
  let [_0x355f0f, _0x267b85] = [BigInt(_0x55e44f), 0x1n];
  if (!_0x49384d) {
    for (_0x49384d = 1; _0x267b85 < _0x355f0f; _0x267b85 *= BigInt(++_0x49384d));
    if (_0x355f0f < _0x267b85) {
      _0x267b85 /= BigInt(_0x49384d--);
    }
  } else {
    _0x267b85 = BigInt(factorial(_0x49384d));
  }
  let _0x190094 = [0];
  for (; _0x49384d; _0x267b85 /= BigInt(_0x49384d--)) {
    _0x190094[_0x49384d] = Number(_0x355f0f / _0x267b85);
    _0x355f0f %= _0x267b85;
  }
  return _0x190094;
}
function combinadic(_0x2ad525, _0x41504d) {
  const _0x16c012 = combination(_0x2ad525, _0x41504d);
  const [_0xcf5a91, _0x3bcdf3] = [BigInt(_0x2ad525), BigInt(_0x41504d)];
  return _0x153053 => {
    if (_0x153053 < 0 || _0x16c012 <= _0x153053) {
      throw new RangeError(_0x153053 + " is out of range");
    }
    let _0x2a328a = [];
    let [_0x25f48d, _0x1c283f] = [_0xcf5a91, _0x3bcdf3];
    let _0x2ad7c7 = BigInt(_0x16c012) - 0x1n - BigInt(_0x153053);
    for (let _0x2d9029 = 0; _0x2d9029 < _0x41504d; _0x2d9029++) {
      _0x25f48d--;
      while (_0x2ad7c7 < combination(_0x25f48d, _0x1c283f)) {
        _0x25f48d--;
      }
      _0x2a328a.push(Number(_0xcf5a91 - 0x1n - _0x25f48d));
      _0x2ad7c7 -= combination(_0x25f48d, _0x1c283f);
      _0x1c283f--;
    }
    return _0x2a328a;
  };
}
const _crypto = typeof crypto !== "undefined" ? crypto : {};
const _randomBytes = typeof _crypto.randomBytes === "function" ? _0x2d2931 => Uint8Array.from(_crypto.randomBytes(_0x2d2931)) : typeof _crypto.getRandomValues === "function" ? _0x36a14b => _crypto.getRandomValues(new Uint8Array(_0x36a14b)) : _0x11e4b5 => Uint8Array.from(Array(_0x11e4b5), () => Math.random() * 256);
function randomInteger(_0x3ab509 = 0, _0x55693a = Math.pow(2, 53)) {
  let _0x293306 = _0x3ab509.constructor;
  if (arguments.length === 0) {
    return Math.floor(Math.random() * _0x293306(_0x55693a));
  }
  if (arguments.length == 1) {
    [_0x3ab509, _0x55693a] = [_0x293306(0), _0x3ab509];
  }
  if (typeof _0x3ab509 == "number") {
    [_0x3ab509, _0x55693a] = [Math.ceil(Number(_0x3ab509)), Math.ceil(Number(_0x55693a))];
    return Math.floor(Math.random() * (_0x55693a - _0x3ab509)) + _0x3ab509;
  }
  const _0x41ec81 = _0x293306(_0x55693a) - _0x293306(_0x3ab509);
  const _0x5b4775 = _0x41ec81.toString(16).length;
  const _0xbf8cc2 = _randomBytes(_0x5b4775);
  const _0x37adc5 = _0xbf8cc2.reduce((_0x5009ad, _0x5d4559) => (_0x5009ad << _0x293306(8)) + _0x293306(_0x5d4559), _0x293306(0));
  return (_0x293306(_0x37adc5) * _0x41ec81 >> _0x293306(_0x5b4775 * 8)) + _0x293306(_0x3ab509);
}
class _CBase {
  static of(..._0x359ac9) {
    return new (Function.prototype.bind.apply(this, [null].concat(_0x359ac9)))();
  }
  static from(_0x1c971e) {
    return new (Function.prototype.bind.apply(this, [null].concat(_0x1c971e)))();
  }
  [Symbol.iterator]() {
    return function* (_0x2596b0, _0x3772fd) {
      for (let _0x8b7b51 = 0x0n; _0x8b7b51 < _0x3772fd; _0x8b7b51++) {
        yield _0x2596b0.at(_0x8b7b51);
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
  _check(_0x13409b) {
    if (_0x13409b < 0) {
      if (this.length < -_0x13409b) {
        throw new RangeError(_0x13409b + " is out of range");
      }
      return BigInt(this.length) + BigInt(_0x13409b);
    }
    if (this.length <= _0x13409b) {
      throw new RangeError(_0x13409b + " is out of range");
    }
    return _0x13409b;
  }
  at(_0x334644) {
    return undefined;
  }
  nth(_0x54690c) {
    return this.at(_0x54690c);
  }
  sample() {
    return this.at(randomInteger(this.length));
  }
  samples() {
    return function* (_0x34ffe1) {
      while (true) {
        yield _0x34ffe1.sample();
      }
    }(this);
  }
}
class Permutation extends _CBase {
  constructor(_0x22d4a5, _0x4ad94a = 0) {
    super();
    this.seed = [..._0x22d4a5];
    this.size = _0x4ad94a > 0 ? _0x4ad94a : this.seed.length;
    this.length = permutation(this.seed.length, this.size);
    Object.freeze(this);
  }
  at(_0x2ef4ac) {
    _0x2ef4ac = this._check(_0x2ef4ac);
    if (_0x2ef4ac === undefined) {
      return undefined;
    }
    const _0x28c951 = this.seed.length - this.size;
    const _0x4b4895 = factorial(_0x28c951);
    let _0x12b91d = factoradic(BigInt(_0x2ef4ac) * BigInt(_0x4b4895), this.seed.length);
    let _0x265fb2 = this.seed.slice();
    let _0x3977c2 = [];
    for (let _0x235d80 = this.seed.length - 1; _0x28c951 <= _0x235d80; _0x235d80--) {
      _0x3977c2.push(_0x265fb2.splice(_0x12b91d[_0x235d80], 1)[0]);
    }
    return _0x3977c2;
  }
}
class Combination extends _CBase {
  constructor(_0x4d5443, _0x19acc1 = 0) {
    super();
    this.seed = [..._0x4d5443];
    this.size = _0x19acc1 > 0 ? _0x19acc1 : this.seed.length;
    this.size = _0x19acc1;
    this.length = combination(this.seed.length, this.size);
    this.comb = combinadic(this.seed.length, this.size);
    Object.freeze(this);
  }
  [Symbol.iterator]() {
    return function* (_0x21ec2f) {
      if (_0x21ec2f.length === 0x0n) {
        return;
      }
      const [_0x136c8a, _0x2f6792] = [_0x21ec2f.seed.length, _0x21ec2f.size];
      const _0x129e61 = {
        length: _0x2f6792
      };
      const _0x1b85a3 = Array.from(_0x129e61, (_0x124cea, _0x454007) => _0x454007);
      while (true) {
        yield _0x1b85a3.map(_0xa45a00 => _0x21ec2f.seed[_0xa45a00]);
        let _0x1aa192 = _0x2f6792 - 1;
        while (_0x1aa192 >= 0 && _0x1b85a3[_0x1aa192] === _0x1aa192 + _0x136c8a - _0x2f6792) {
          _0x1aa192--;
        }
        if (_0x1aa192 < 0) {
          return;
        }
        _0x1b85a3[_0x1aa192]++;
        for (let _0x1b36f4 = _0x1aa192 + 1; _0x1b36f4 < _0x2f6792; _0x1b36f4++) {
          _0x1b85a3[_0x1b36f4] = _0x1b85a3[_0x1b36f4 - 1] + 1;
        }
      }
    }(this);
  }
  bitwiseIterator() {
    const _0x52a3cb = _0x2bf7b8 => {
      if (_0x2bf7b8 <= 0x0n) {
        return 0x0n;
      }
      const _0x19b8db = _0x2bf7b8 & -_0x2bf7b8;
      const _0x1c42a7 = _0x19b8db + _0x2bf7b8;
      return _0x1c42a7 + ((_0x1c42a7 ^ _0x2bf7b8) / _0x19b8db >> 0x2n);
    };
    let _0x2b5d67 = (0x1n << BigInt(this.size)) - 0x1n;
    return function* (_0x2cb7e1, _0x5ecece) {
      for (let _0x41f3b9 = 0x0n; _0x41f3b9 < BigInt(_0x5ecece); _0x41f3b9++, _0x2b5d67 = _0x52a3cb(_0x2b5d67)) {
        let _0x20168a = [];
        for (let _0x2d4e19 = _0x2b5d67, _0x45a519 = 0; 0x0n < _0x2d4e19; _0x2d4e19 >>= 0x1n, _0x45a519++) {
          if (_0x2d4e19 & 0x1n) {
            _0x20168a.push(_0x2cb7e1.seed[_0x45a519]);
          }
        }
        yield _0x20168a;
      }
    }(this, this.length);
  }
  at(_0x20b6a6) {
    _0x20b6a6 = this._check(_0x20b6a6);
    if (_0x20b6a6 === undefined) {
      return undefined;
    }
    let _0x5ac8f7 = [];
    for (let _0x402a21 of this.comb(_0x20b6a6)) {
      _0x5ac8f7.push(this.seed[_0x402a21]);
    }
    return _0x5ac8f7;
  }
}
class BaseN extends _CBase {
  constructor(_0x34e82a, _0x454f40 = 1) {
    if (_0x454f40 < 1) {
      throw new RangeError(_0x454f40 + " is out of range");
    }
    super();
    this.seed = [..._0x34e82a];
    this.size = _0x454f40;
    let _0x286460 = this.seed.length;
    this.base = _0x286460;
    this.length = BigInt(_0x286460) ** BigInt(_0x454f40);
    Object.freeze(this);
  }
  at(_0x2102b2) {
    _0x2102b2 = this._check(_0x2102b2);
    if (_0x2102b2 === undefined) {
      return undefined;
    }
    let _0x4c79ac = BigInt(_0x2102b2);
    const _0x56d4aa = BigInt(this.base);
    let _0x5adff0 = [];
    for (let _0x8f297f = 0; _0x8f297f < this.size; _0x8f297f++) {
      let _0x471de2 = _0x4c79ac % _0x56d4aa;
      _0x5adff0.push(this.seed[Number(_0x471de2)]);
      _0x4c79ac -= _0x471de2;
      _0x4c79ac /= _0x56d4aa;
    }
    return _0x5adff0;
  }
}
class PowerSet extends _CBase {
  constructor(_0x24a2e1) {
    super();
    this.seed = [..._0x24a2e1];
    const _0x467920 = 0x1n << BigInt(this.seed.length);
    this.length = _0x467920;
    Object.freeze(this);
  }
  at(_0x43e387) {
    _0x43e387 = this._check(_0x43e387);
    if (_0x43e387 === undefined) {
      return undefined;
    }
    let _0x2e77cb = BigInt(_0x43e387);
    let _0x4d7664 = [];
    for (let _0x1415ee = 0x0n; _0x2e77cb; _0x2e77cb >>= 0x1n, _0x1415ee++) {
      if (_0x2e77cb & 0x1n) {
        _0x4d7664.push(this.seed[Number(_0x1415ee)]);
      }
    }
    return _0x4d7664;
  }
}
class CartesianProduct extends _CBase {
  constructor(..._0x13a280) {
    super();
    this.seed = _0x13a280.map(_0x3d4ab4 => [..._0x3d4ab4]);
    this.size = this.seed.length;
    const _0x2861ad = this.seed.reduce((_0x38bd7e, _0x1316de) => _0x38bd7e * BigInt(_0x1316de.length), 0x1n);
    this.length = _0x2861ad;
    Object.freeze(this);
  }
  at(_0x29a399) {
    _0x29a399 = this._check(_0x29a399);
    if (_0x29a399 === undefined) {
      return undefined;
    }
    let _0x3a4fe3 = BigInt(_0x29a399);
    let _0x22e484 = [];
    for (let _0x27c142 = 0; _0x27c142 < this.size; _0x27c142++) {
      const _0x537e7b = this.seed[_0x27c142].length;
      const _0x2b1d0 = BigInt(_0x537e7b);
      const _0x57a1d6 = _0x3a4fe3 % _0x2b1d0;
      _0x22e484.push(this.seed[_0x27c142][Number(_0x57a1d6)]);
      _0x3a4fe3 -= _0x57a1d6;
      _0x3a4fe3 /= _0x2b1d0;
    }
    return _0x22e484;
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