'use strict';

module.exports = rfdc;
function copyBuffer(_0x4c4906) {
  if (_0x4c4906 instanceof Buffer) {
    return Buffer.from(_0x4c4906);
  }
  return new _0x4c4906.constructor(_0x4c4906.buffer.slice(), _0x4c4906.byteOffset, _0x4c4906.length);
}
function rfdc(_0x1d28f2) {
  _0x1d28f2 = _0x1d28f2 || {};
  if (_0x1d28f2.circles) {
    return rfdcCircles(_0x1d28f2);
  }
  const _0x4b4bc2 = new Map();
  _0x4b4bc2.set(Date, _0x37f08a => new Date(_0x37f08a));
  _0x4b4bc2.set(Map, (_0x46ec5f, _0x37f636) => new Map(_0x280da8(Array.from(_0x46ec5f), _0x37f636)));
  _0x4b4bc2.set(Set, (_0x179262, _0x4bf4c3) => new Set(_0x280da8(Array.from(_0x179262), _0x4bf4c3)));
  if (_0x1d28f2.constructorHandlers) {
    for (const _0x3dd225 of _0x1d28f2.constructorHandlers) {
      _0x4b4bc2.set(_0x3dd225[0], _0x3dd225[1]);
    }
  }
  let _0x453f88 = null;
  if (_0x1d28f2.proto) {
    return _0x29ab5f;
  } else {
    return _0x1c7319;
  }
  function _0x280da8(_0x25e9a5, _0x32cd02) {
    const _0x339e9c = Object.keys(_0x25e9a5);
    const _0x535a9f = new Array(_0x339e9c.length);
    for (let _0x449d27 = 0; _0x449d27 < _0x339e9c.length; _0x449d27++) {
      const _0x44cd96 = _0x339e9c[_0x449d27];
      const _0x650c = _0x25e9a5[_0x44cd96];
      if (typeof _0x650c !== "object" || _0x650c === null) {
        _0x535a9f[_0x44cd96] = _0x650c;
      } else if (_0x650c.constructor !== Object && (_0x453f88 = _0x4b4bc2.get(_0x650c.constructor))) {
        _0x535a9f[_0x44cd96] = _0x453f88(_0x650c, _0x32cd02);
      } else if (ArrayBuffer.isView(_0x650c)) {
        _0x535a9f[_0x44cd96] = copyBuffer(_0x650c);
      } else {
        _0x535a9f[_0x44cd96] = _0x32cd02(_0x650c);
      }
    }
    return _0x535a9f;
  }
  function _0x1c7319(_0x3c07e6) {
    if (typeof _0x3c07e6 !== "object" || _0x3c07e6 === null) {
      return _0x3c07e6;
    }
    if (Array.isArray(_0x3c07e6)) {
      return _0x280da8(_0x3c07e6, _0x1c7319);
    }
    if (_0x3c07e6.constructor !== Object && (_0x453f88 = _0x4b4bc2.get(_0x3c07e6.constructor))) {
      return _0x453f88(_0x3c07e6, _0x1c7319);
    }
    const _0x22065e = {};
    for (const _0x399509 in _0x3c07e6) {
      if (Object.hasOwnProperty.call(_0x3c07e6, _0x399509) === false) {
        continue;
      }
      const _0x5a3352 = _0x3c07e6[_0x399509];
      if (typeof _0x5a3352 !== "object" || _0x5a3352 === null) {
        _0x22065e[_0x399509] = _0x5a3352;
      } else if (_0x5a3352.constructor !== Object && (_0x453f88 = _0x4b4bc2.get(_0x5a3352.constructor))) {
        _0x22065e[_0x399509] = _0x453f88(_0x5a3352, _0x1c7319);
      } else if (ArrayBuffer.isView(_0x5a3352)) {
        _0x22065e[_0x399509] = copyBuffer(_0x5a3352);
      } else {
        _0x22065e[_0x399509] = _0x1c7319(_0x5a3352);
      }
    }
    return _0x22065e;
  }
  function _0x29ab5f(_0x2ce50a) {
    if (typeof _0x2ce50a !== "object" || _0x2ce50a === null) {
      return _0x2ce50a;
    }
    if (Array.isArray(_0x2ce50a)) {
      return _0x280da8(_0x2ce50a, _0x29ab5f);
    }
    if (_0x2ce50a.constructor !== Object && (_0x453f88 = _0x4b4bc2.get(_0x2ce50a.constructor))) {
      return _0x453f88(_0x2ce50a, _0x29ab5f);
    }
    const _0x3e5afc = {};
    for (const _0x17361a in _0x2ce50a) {
      const _0x1e07f2 = _0x2ce50a[_0x17361a];
      if (typeof _0x1e07f2 !== "object" || _0x1e07f2 === null) {
        _0x3e5afc[_0x17361a] = _0x1e07f2;
      } else if (_0x1e07f2.constructor !== Object && (_0x453f88 = _0x4b4bc2.get(_0x1e07f2.constructor))) {
        _0x3e5afc[_0x17361a] = _0x453f88(_0x1e07f2, _0x29ab5f);
      } else if (ArrayBuffer.isView(_0x1e07f2)) {
        _0x3e5afc[_0x17361a] = copyBuffer(_0x1e07f2);
      } else {
        _0x3e5afc[_0x17361a] = _0x29ab5f(_0x1e07f2);
      }
    }
    return _0x3e5afc;
  }
}
function rfdcCircles(_0x25aedb) {
  const _0x1aa6ee = [];
  const _0x3f6cf8 = [];
  const _0x54d8e7 = new Map();
  _0x54d8e7.set(Date, _0x52de1f => new Date(_0x52de1f));
  _0x54d8e7.set(Map, (_0x4e876e, _0x366ee4) => new Map(_0x64c11c(Array.from(_0x4e876e), _0x366ee4)));
  _0x54d8e7.set(Set, (_0x1baa57, _0x5a3de6) => new Set(_0x64c11c(Array.from(_0x1baa57), _0x5a3de6)));
  if (_0x25aedb.constructorHandlers) {
    for (const _0x1eea51 of _0x25aedb.constructorHandlers) {
      _0x54d8e7.set(_0x1eea51[0], _0x1eea51[1]);
    }
  }
  let _0x5ab5db = null;
  if (_0x25aedb.proto) {
    return _0x3d15e1;
  } else {
    return _0x436e6a;
  }
  function _0x64c11c(_0x10fca9, _0x587fbe) {
    const _0x21017b = Object.keys(_0x10fca9);
    const _0x58eaf6 = new Array(_0x21017b.length);
    for (let _0x361bcc = 0; _0x361bcc < _0x21017b.length; _0x361bcc++) {
      const _0x5637a0 = _0x21017b[_0x361bcc];
      const _0x1faa60 = _0x10fca9[_0x5637a0];
      if (typeof _0x1faa60 !== "object" || _0x1faa60 === null) {
        _0x58eaf6[_0x5637a0] = _0x1faa60;
      } else if (_0x1faa60.constructor !== Object && (_0x5ab5db = _0x54d8e7.get(_0x1faa60.constructor))) {
        _0x58eaf6[_0x5637a0] = _0x5ab5db(_0x1faa60, _0x587fbe);
      } else if (ArrayBuffer.isView(_0x1faa60)) {
        _0x58eaf6[_0x5637a0] = copyBuffer(_0x1faa60);
      } else {
        const _0x4ed06f = _0x1aa6ee.indexOf(_0x1faa60);
        if (_0x4ed06f !== -1) {
          _0x58eaf6[_0x5637a0] = _0x3f6cf8[_0x4ed06f];
        } else {
          _0x58eaf6[_0x5637a0] = _0x587fbe(_0x1faa60);
        }
      }
    }
    return _0x58eaf6;
  }
  function _0x436e6a(_0x541210) {
    if (typeof _0x541210 !== "object" || _0x541210 === null) {
      return _0x541210;
    }
    if (Array.isArray(_0x541210)) {
      return _0x64c11c(_0x541210, _0x436e6a);
    }
    if (_0x541210.constructor !== Object && (_0x5ab5db = _0x54d8e7.get(_0x541210.constructor))) {
      return _0x5ab5db(_0x541210, _0x436e6a);
    }
    const _0x444757 = {};
    _0x1aa6ee.push(_0x541210);
    _0x3f6cf8.push(_0x444757);
    for (const _0x4f069c in _0x541210) {
      if (Object.hasOwnProperty.call(_0x541210, _0x4f069c) === false) {
        continue;
      }
      const _0x148ceb = _0x541210[_0x4f069c];
      if (typeof _0x148ceb !== "object" || _0x148ceb === null) {
        _0x444757[_0x4f069c] = _0x148ceb;
      } else if (_0x148ceb.constructor !== Object && (_0x5ab5db = _0x54d8e7.get(_0x148ceb.constructor))) {
        _0x444757[_0x4f069c] = _0x5ab5db(_0x148ceb, _0x436e6a);
      } else if (ArrayBuffer.isView(_0x148ceb)) {
        _0x444757[_0x4f069c] = copyBuffer(_0x148ceb);
      } else {
        const _0x54199a = _0x1aa6ee.indexOf(_0x148ceb);
        if (_0x54199a !== -1) {
          _0x444757[_0x4f069c] = _0x3f6cf8[_0x54199a];
        } else {
          _0x444757[_0x4f069c] = _0x436e6a(_0x148ceb);
        }
      }
    }
    _0x1aa6ee.pop();
    _0x3f6cf8.pop();
    return _0x444757;
  }
  function _0x3d15e1(_0x59cdd0) {
    if (typeof _0x59cdd0 !== "object" || _0x59cdd0 === null) {
      return _0x59cdd0;
    }
    if (Array.isArray(_0x59cdd0)) {
      return _0x64c11c(_0x59cdd0, _0x3d15e1);
    }
    if (_0x59cdd0.constructor !== Object && (_0x5ab5db = _0x54d8e7.get(_0x59cdd0.constructor))) {
      return _0x5ab5db(_0x59cdd0, _0x3d15e1);
    }
    const _0x30e2e0 = {};
    _0x1aa6ee.push(_0x59cdd0);
    _0x3f6cf8.push(_0x30e2e0);
    for (const _0x99b5c2 in _0x59cdd0) {
      const _0x453ffb = _0x59cdd0[_0x99b5c2];
      if (typeof _0x453ffb !== "object" || _0x453ffb === null) {
        _0x30e2e0[_0x99b5c2] = _0x453ffb;
      } else if (_0x453ffb.constructor !== Object && (_0x5ab5db = _0x54d8e7.get(_0x453ffb.constructor))) {
        _0x30e2e0[_0x99b5c2] = _0x5ab5db(_0x453ffb, _0x3d15e1);
      } else if (ArrayBuffer.isView(_0x453ffb)) {
        _0x30e2e0[_0x99b5c2] = copyBuffer(_0x453ffb);
      } else {
        const _0x7a217b = _0x1aa6ee.indexOf(_0x453ffb);
        if (_0x7a217b !== -1) {
          _0x30e2e0[_0x99b5c2] = _0x3f6cf8[_0x7a217b];
        } else {
          _0x30e2e0[_0x99b5c2] = _0x3d15e1(_0x453ffb);
        }
      }
    }
    _0x1aa6ee.pop();
    _0x3f6cf8.pop();
    return _0x30e2e0;
  }
}