'use strict';

module.exports = rfdc;
function copyBuffer(_0xd1d9be) {
  if (_0xd1d9be instanceof Buffer) {
    return Buffer.from(_0xd1d9be);
  }
  return new _0xd1d9be.constructor(_0xd1d9be.buffer.slice(), _0xd1d9be.byteOffset, _0xd1d9be.length);
}
function rfdc(_0xbbd747) {
  _0xbbd747 = _0xbbd747 || {};
  if (_0xbbd747.circles) {
    return rfdcCircles(_0xbbd747);
  }
  const _0x54137f = new Map();
  _0x54137f.set(Date, _0x1c4476 => new Date(_0x1c4476));
  _0x54137f.set(Map, (_0xfcee2e, _0x409421) => new Map(_0x95c309(Array.from(_0xfcee2e), _0x409421)));
  _0x54137f.set(Set, (_0x328994, _0x2a7ee0) => new Set(_0x95c309(Array.from(_0x328994), _0x2a7ee0)));
  if (_0xbbd747.constructorHandlers) {
    for (const _0x367b6b of _0xbbd747.constructorHandlers) {
      _0x54137f.set(_0x367b6b[0], _0x367b6b[1]);
    }
  }
  let _0x13ef2f = null;
  if (_0xbbd747.proto) {
    return _0x7d7545;
  } else {
    return _0x92ad26;
  }
  function _0x95c309(_0x188315, _0x2889ff) {
    const _0x4cd258 = Object.keys(_0x188315);
    const _0x3e854f = new Array(_0x4cd258.length);
    for (let _0x2b0817 = 0; _0x2b0817 < _0x4cd258.length; _0x2b0817++) {
      const _0x25c90c = _0x4cd258[_0x2b0817];
      const _0x3a3572 = _0x188315[_0x25c90c];
      if (typeof _0x3a3572 !== "object" || _0x3a3572 === null) {
        _0x3e854f[_0x25c90c] = _0x3a3572;
      } else if (_0x3a3572.constructor !== Object && (_0x13ef2f = _0x54137f.get(_0x3a3572.constructor))) {
        _0x3e854f[_0x25c90c] = _0x13ef2f(_0x3a3572, _0x2889ff);
      } else if (ArrayBuffer.isView(_0x3a3572)) {
        _0x3e854f[_0x25c90c] = copyBuffer(_0x3a3572);
      } else {
        _0x3e854f[_0x25c90c] = _0x2889ff(_0x3a3572);
      }
    }
    return _0x3e854f;
  }
  function _0x92ad26(_0x436284) {
    if (typeof _0x436284 !== "object" || _0x436284 === null) {
      return _0x436284;
    }
    if (Array.isArray(_0x436284)) {
      return _0x95c309(_0x436284, _0x92ad26);
    }
    if (_0x436284.constructor !== Object && (_0x13ef2f = _0x54137f.get(_0x436284.constructor))) {
      return _0x13ef2f(_0x436284, _0x92ad26);
    }
    const _0x5b2fe3 = {};
    for (const _0x30d0ae in _0x436284) {
      if (Object.hasOwnProperty.call(_0x436284, _0x30d0ae) === false) {
        continue;
      }
      const _0x16033a = _0x436284[_0x30d0ae];
      if (typeof _0x16033a !== "object" || _0x16033a === null) {
        _0x5b2fe3[_0x30d0ae] = _0x16033a;
      } else if (_0x16033a.constructor !== Object && (_0x13ef2f = _0x54137f.get(_0x16033a.constructor))) {
        _0x5b2fe3[_0x30d0ae] = _0x13ef2f(_0x16033a, _0x92ad26);
      } else if (ArrayBuffer.isView(_0x16033a)) {
        _0x5b2fe3[_0x30d0ae] = copyBuffer(_0x16033a);
      } else {
        _0x5b2fe3[_0x30d0ae] = _0x92ad26(_0x16033a);
      }
    }
    return _0x5b2fe3;
  }
  function _0x7d7545(_0x28be3f) {
    if (typeof _0x28be3f !== "object" || _0x28be3f === null) {
      return _0x28be3f;
    }
    if (Array.isArray(_0x28be3f)) {
      return _0x95c309(_0x28be3f, _0x7d7545);
    }
    if (_0x28be3f.constructor !== Object && (_0x13ef2f = _0x54137f.get(_0x28be3f.constructor))) {
      return _0x13ef2f(_0x28be3f, _0x7d7545);
    }
    const _0x1c769f = {};
    for (const _0x1521b5 in _0x28be3f) {
      const _0x2490d6 = _0x28be3f[_0x1521b5];
      if (typeof _0x2490d6 !== "object" || _0x2490d6 === null) {
        _0x1c769f[_0x1521b5] = _0x2490d6;
      } else if (_0x2490d6.constructor !== Object && (_0x13ef2f = _0x54137f.get(_0x2490d6.constructor))) {
        _0x1c769f[_0x1521b5] = _0x13ef2f(_0x2490d6, _0x7d7545);
      } else if (ArrayBuffer.isView(_0x2490d6)) {
        _0x1c769f[_0x1521b5] = copyBuffer(_0x2490d6);
      } else {
        _0x1c769f[_0x1521b5] = _0x7d7545(_0x2490d6);
      }
    }
    return _0x1c769f;
  }
}
function rfdcCircles(_0x12aa16) {
  const _0x7498b0 = [];
  const _0xd1f636 = [];
  const _0x3e8502 = new Map();
  _0x3e8502.set(Date, _0xd74624 => new Date(_0xd74624));
  _0x3e8502.set(Map, (_0x29f673, _0x28e35e) => new Map(_0x7c60c9(Array.from(_0x29f673), _0x28e35e)));
  _0x3e8502.set(Set, (_0x3d9886, _0x4e7e35) => new Set(_0x7c60c9(Array.from(_0x3d9886), _0x4e7e35)));
  if (_0x12aa16.constructorHandlers) {
    for (const _0x185097 of _0x12aa16.constructorHandlers) {
      _0x3e8502.set(_0x185097[0], _0x185097[1]);
    }
  }
  let _0x2f9183 = null;
  if (_0x12aa16.proto) {
    return _0x2d5cb6;
  } else {
    return _0x368233;
  }
  function _0x7c60c9(_0x4ba2e0, _0x461cae) {
    const _0x5657f4 = Object.keys(_0x4ba2e0);
    const _0x4954f1 = new Array(_0x5657f4.length);
    for (let _0x240599 = 0; _0x240599 < _0x5657f4.length; _0x240599++) {
      const _0x4525c1 = _0x5657f4[_0x240599];
      const _0x242173 = _0x4ba2e0[_0x4525c1];
      if (typeof _0x242173 !== "object" || _0x242173 === null) {
        _0x4954f1[_0x4525c1] = _0x242173;
      } else if (_0x242173.constructor !== Object && (_0x2f9183 = _0x3e8502.get(_0x242173.constructor))) {
        _0x4954f1[_0x4525c1] = _0x2f9183(_0x242173, _0x461cae);
      } else if (ArrayBuffer.isView(_0x242173)) {
        _0x4954f1[_0x4525c1] = copyBuffer(_0x242173);
      } else {
        const _0x3dab13 = _0x7498b0.indexOf(_0x242173);
        if (_0x3dab13 !== -1) {
          _0x4954f1[_0x4525c1] = _0xd1f636[_0x3dab13];
        } else {
          _0x4954f1[_0x4525c1] = _0x461cae(_0x242173);
        }
      }
    }
    return _0x4954f1;
  }
  function _0x368233(_0x38e83d) {
    if (typeof _0x38e83d !== "object" || _0x38e83d === null) {
      return _0x38e83d;
    }
    if (Array.isArray(_0x38e83d)) {
      return _0x7c60c9(_0x38e83d, _0x368233);
    }
    if (_0x38e83d.constructor !== Object && (_0x2f9183 = _0x3e8502.get(_0x38e83d.constructor))) {
      return _0x2f9183(_0x38e83d, _0x368233);
    }
    const _0x3ac9c8 = {};
    _0x7498b0.push(_0x38e83d);
    _0xd1f636.push(_0x3ac9c8);
    for (const _0x36b573 in _0x38e83d) {
      if (Object.hasOwnProperty.call(_0x38e83d, _0x36b573) === false) {
        continue;
      }
      const _0x360ff3 = _0x38e83d[_0x36b573];
      if (typeof _0x360ff3 !== "object" || _0x360ff3 === null) {
        _0x3ac9c8[_0x36b573] = _0x360ff3;
      } else if (_0x360ff3.constructor !== Object && (_0x2f9183 = _0x3e8502.get(_0x360ff3.constructor))) {
        _0x3ac9c8[_0x36b573] = _0x2f9183(_0x360ff3, _0x368233);
      } else if (ArrayBuffer.isView(_0x360ff3)) {
        _0x3ac9c8[_0x36b573] = copyBuffer(_0x360ff3);
      } else {
        const _0x39b4b8 = _0x7498b0.indexOf(_0x360ff3);
        if (_0x39b4b8 !== -1) {
          _0x3ac9c8[_0x36b573] = _0xd1f636[_0x39b4b8];
        } else {
          _0x3ac9c8[_0x36b573] = _0x368233(_0x360ff3);
        }
      }
    }
    _0x7498b0.pop();
    _0xd1f636.pop();
    return _0x3ac9c8;
  }
  function _0x2d5cb6(_0x2ba205) {
    if (typeof _0x2ba205 !== "object" || _0x2ba205 === null) {
      return _0x2ba205;
    }
    if (Array.isArray(_0x2ba205)) {
      return _0x7c60c9(_0x2ba205, _0x2d5cb6);
    }
    if (_0x2ba205.constructor !== Object && (_0x2f9183 = _0x3e8502.get(_0x2ba205.constructor))) {
      return _0x2f9183(_0x2ba205, _0x2d5cb6);
    }
    const _0x2c0c53 = {};
    _0x7498b0.push(_0x2ba205);
    _0xd1f636.push(_0x2c0c53);
    for (const _0x3da376 in _0x2ba205) {
      const _0x445ab4 = _0x2ba205[_0x3da376];
      if (typeof _0x445ab4 !== "object" || _0x445ab4 === null) {
        _0x2c0c53[_0x3da376] = _0x445ab4;
      } else if (_0x445ab4.constructor !== Object && (_0x2f9183 = _0x3e8502.get(_0x445ab4.constructor))) {
        _0x2c0c53[_0x3da376] = _0x2f9183(_0x445ab4, _0x2d5cb6);
      } else if (ArrayBuffer.isView(_0x445ab4)) {
        _0x2c0c53[_0x3da376] = copyBuffer(_0x445ab4);
      } else {
        const _0x4de33a = _0x7498b0.indexOf(_0x445ab4);
        if (_0x4de33a !== -1) {
          _0x2c0c53[_0x3da376] = _0xd1f636[_0x4de33a];
        } else {
          _0x2c0c53[_0x3da376] = _0x2d5cb6(_0x445ab4);
        }
      }
    }
    _0x7498b0.pop();
    _0xd1f636.pop();
    return _0x2c0c53;
  }
}