'use strict';

module.exports = rfdc;
function copyBuffer(_0x474ede) {
  if (_0x474ede instanceof Buffer) {
    return Buffer.from(_0x474ede);
  }
  return new _0x474ede.constructor(_0x474ede.buffer.slice(), _0x474ede.byteOffset, _0x474ede.length);
}
function rfdc(_0x497a24) {
  _0x497a24 = _0x497a24 || {};
  if (_0x497a24.circles) {
    return rfdcCircles(_0x497a24);
  }
  const _0x4bb61b = new Map();
  _0x4bb61b.set(Date, _0x2d9fb5 => new Date(_0x2d9fb5));
  _0x4bb61b.set(Map, (_0x4d9f1d, _0x119fd1) => new Map(_0xd6ae01(Array.from(_0x4d9f1d), _0x119fd1)));
  _0x4bb61b.set(Set, (_0x2a7878, _0x24e4cb) => new Set(_0xd6ae01(Array.from(_0x2a7878), _0x24e4cb)));
  if (_0x497a24.constructorHandlers) {
    for (const _0x587342 of _0x497a24.constructorHandlers) {
      _0x4bb61b.set(_0x587342[0], _0x587342[1]);
    }
  }
  let _0x1e9922 = null;
  if (_0x497a24.proto) {
    return _0x1b3e5a;
  } else {
    return _0x3d82d5;
  }
  function _0xd6ae01(_0x21902e, _0x26ddbc) {
    const _0x3a6467 = Object.keys(_0x21902e);
    const _0x1acf2a = new Array(_0x3a6467.length);
    for (let _0x7307bf = 0; _0x7307bf < _0x3a6467.length; _0x7307bf++) {
      const _0x3ab049 = _0x3a6467[_0x7307bf];
      const _0x367e28 = _0x21902e[_0x3ab049];
      if (typeof _0x367e28 !== "object" || _0x367e28 === null) {
        _0x1acf2a[_0x3ab049] = _0x367e28;
      } else if (_0x367e28.constructor !== Object && (_0x1e9922 = _0x4bb61b.get(_0x367e28.constructor))) {
        _0x1acf2a[_0x3ab049] = _0x1e9922(_0x367e28, _0x26ddbc);
      } else if (ArrayBuffer.isView(_0x367e28)) {
        _0x1acf2a[_0x3ab049] = copyBuffer(_0x367e28);
      } else {
        _0x1acf2a[_0x3ab049] = _0x26ddbc(_0x367e28);
      }
    }
    return _0x1acf2a;
  }
  function _0x3d82d5(_0x35f13f) {
    if (typeof _0x35f13f !== "object" || _0x35f13f === null) {
      return _0x35f13f;
    }
    if (Array.isArray(_0x35f13f)) {
      return _0xd6ae01(_0x35f13f, _0x3d82d5);
    }
    if (_0x35f13f.constructor !== Object && (_0x1e9922 = _0x4bb61b.get(_0x35f13f.constructor))) {
      return _0x1e9922(_0x35f13f, _0x3d82d5);
    }
    const _0x5835ef = {};
    for (const _0x358ef1 in _0x35f13f) {
      if (Object.hasOwnProperty.call(_0x35f13f, _0x358ef1) === false) {
        continue;
      }
      const _0x17f0e0 = _0x35f13f[_0x358ef1];
      if (typeof _0x17f0e0 !== "object" || _0x17f0e0 === null) {
        _0x5835ef[_0x358ef1] = _0x17f0e0;
      } else if (_0x17f0e0.constructor !== Object && (_0x1e9922 = _0x4bb61b.get(_0x17f0e0.constructor))) {
        _0x5835ef[_0x358ef1] = _0x1e9922(_0x17f0e0, _0x3d82d5);
      } else if (ArrayBuffer.isView(_0x17f0e0)) {
        _0x5835ef[_0x358ef1] = copyBuffer(_0x17f0e0);
      } else {
        _0x5835ef[_0x358ef1] = _0x3d82d5(_0x17f0e0);
      }
    }
    return _0x5835ef;
  }
  function _0x1b3e5a(_0x3d66c1) {
    if (typeof _0x3d66c1 !== "object" || _0x3d66c1 === null) {
      return _0x3d66c1;
    }
    if (Array.isArray(_0x3d66c1)) {
      return _0xd6ae01(_0x3d66c1, _0x1b3e5a);
    }
    if (_0x3d66c1.constructor !== Object && (_0x1e9922 = _0x4bb61b.get(_0x3d66c1.constructor))) {
      return _0x1e9922(_0x3d66c1, _0x1b3e5a);
    }
    const _0x1258b2 = {};
    for (const _0x51b798 in _0x3d66c1) {
      const _0x4d292c = _0x3d66c1[_0x51b798];
      if (typeof _0x4d292c !== "object" || _0x4d292c === null) {
        _0x1258b2[_0x51b798] = _0x4d292c;
      } else if (_0x4d292c.constructor !== Object && (_0x1e9922 = _0x4bb61b.get(_0x4d292c.constructor))) {
        _0x1258b2[_0x51b798] = _0x1e9922(_0x4d292c, _0x1b3e5a);
      } else if (ArrayBuffer.isView(_0x4d292c)) {
        _0x1258b2[_0x51b798] = copyBuffer(_0x4d292c);
      } else {
        _0x1258b2[_0x51b798] = _0x1b3e5a(_0x4d292c);
      }
    }
    return _0x1258b2;
  }
}
function rfdcCircles(_0x47354b) {
  const _0x3c294e = [];
  const _0x36e6d6 = [];
  const _0x1d4ac8 = new Map();
  _0x1d4ac8.set(Date, _0x45f548 => new Date(_0x45f548));
  _0x1d4ac8.set(Map, (_0x22d8fc, _0x33045f) => new Map(_0x1efcc9(Array.from(_0x22d8fc), _0x33045f)));
  _0x1d4ac8.set(Set, (_0xea4400, _0x54b6a7) => new Set(_0x1efcc9(Array.from(_0xea4400), _0x54b6a7)));
  if (_0x47354b.constructorHandlers) {
    for (const _0x1c29b1 of _0x47354b.constructorHandlers) {
      _0x1d4ac8.set(_0x1c29b1[0], _0x1c29b1[1]);
    }
  }
  let _0x51fc30 = null;
  if (_0x47354b.proto) {
    return _0x412760;
  } else {
    return _0x2d98c2;
  }
  function _0x1efcc9(_0x440905, _0x2decbf) {
    const _0x5487f5 = Object.keys(_0x440905);
    const _0x529921 = new Array(_0x5487f5.length);
    for (let _0x429150 = 0; _0x429150 < _0x5487f5.length; _0x429150++) {
      const _0x539f18 = _0x5487f5[_0x429150];
      const _0x394f48 = _0x440905[_0x539f18];
      if (typeof _0x394f48 !== "object" || _0x394f48 === null) {
        _0x529921[_0x539f18] = _0x394f48;
      } else if (_0x394f48.constructor !== Object && (_0x51fc30 = _0x1d4ac8.get(_0x394f48.constructor))) {
        _0x529921[_0x539f18] = _0x51fc30(_0x394f48, _0x2decbf);
      } else if (ArrayBuffer.isView(_0x394f48)) {
        _0x529921[_0x539f18] = copyBuffer(_0x394f48);
      } else {
        const _0x585145 = _0x3c294e.indexOf(_0x394f48);
        if (_0x585145 !== -1) {
          _0x529921[_0x539f18] = _0x36e6d6[_0x585145];
        } else {
          _0x529921[_0x539f18] = _0x2decbf(_0x394f48);
        }
      }
    }
    return _0x529921;
  }
  function _0x2d98c2(_0x5ae93c) {
    if (typeof _0x5ae93c !== "object" || _0x5ae93c === null) {
      return _0x5ae93c;
    }
    if (Array.isArray(_0x5ae93c)) {
      return _0x1efcc9(_0x5ae93c, _0x2d98c2);
    }
    if (_0x5ae93c.constructor !== Object && (_0x51fc30 = _0x1d4ac8.get(_0x5ae93c.constructor))) {
      return _0x51fc30(_0x5ae93c, _0x2d98c2);
    }
    const _0x31cd88 = {};
    _0x3c294e.push(_0x5ae93c);
    _0x36e6d6.push(_0x31cd88);
    for (const _0xcf33d0 in _0x5ae93c) {
      if (Object.hasOwnProperty.call(_0x5ae93c, _0xcf33d0) === false) {
        continue;
      }
      const _0x42f374 = _0x5ae93c[_0xcf33d0];
      if (typeof _0x42f374 !== "object" || _0x42f374 === null) {
        _0x31cd88[_0xcf33d0] = _0x42f374;
      } else if (_0x42f374.constructor !== Object && (_0x51fc30 = _0x1d4ac8.get(_0x42f374.constructor))) {
        _0x31cd88[_0xcf33d0] = _0x51fc30(_0x42f374, _0x2d98c2);
      } else if (ArrayBuffer.isView(_0x42f374)) {
        _0x31cd88[_0xcf33d0] = copyBuffer(_0x42f374);
      } else {
        const _0x30ba73 = _0x3c294e.indexOf(_0x42f374);
        if (_0x30ba73 !== -1) {
          _0x31cd88[_0xcf33d0] = _0x36e6d6[_0x30ba73];
        } else {
          _0x31cd88[_0xcf33d0] = _0x2d98c2(_0x42f374);
        }
      }
    }
    _0x3c294e.pop();
    _0x36e6d6.pop();
    return _0x31cd88;
  }
  function _0x412760(_0xae83b7) {
    if (typeof _0xae83b7 !== "object" || _0xae83b7 === null) {
      return _0xae83b7;
    }
    if (Array.isArray(_0xae83b7)) {
      return _0x1efcc9(_0xae83b7, _0x412760);
    }
    if (_0xae83b7.constructor !== Object && (_0x51fc30 = _0x1d4ac8.get(_0xae83b7.constructor))) {
      return _0x51fc30(_0xae83b7, _0x412760);
    }
    const _0x520228 = {};
    _0x3c294e.push(_0xae83b7);
    _0x36e6d6.push(_0x520228);
    for (const _0x241793 in _0xae83b7) {
      const _0x37b05e = _0xae83b7[_0x241793];
      if (typeof _0x37b05e !== "object" || _0x37b05e === null) {
        _0x520228[_0x241793] = _0x37b05e;
      } else if (_0x37b05e.constructor !== Object && (_0x51fc30 = _0x1d4ac8.get(_0x37b05e.constructor))) {
        _0x520228[_0x241793] = _0x51fc30(_0x37b05e, _0x412760);
      } else if (ArrayBuffer.isView(_0x37b05e)) {
        _0x520228[_0x241793] = copyBuffer(_0x37b05e);
      } else {
        const _0x1232f4 = _0x3c294e.indexOf(_0x37b05e);
        if (_0x1232f4 !== -1) {
          _0x520228[_0x241793] = _0x36e6d6[_0x1232f4];
        } else {
          _0x520228[_0x241793] = _0x412760(_0x37b05e);
        }
      }
    }
    _0x3c294e.pop();
    _0x36e6d6.pop();
    return _0x520228;
  }
}