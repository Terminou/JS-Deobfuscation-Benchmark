'use strict';

function _0x130b() {
  const _0x5c2b12 = ['683263hPOTTs', 'charCodeAt', 'split', 'toUpperCase', 'string', "Invalid token specified: invalid json for part #", '241915GCXGmY', 'InvalidTokenError', 'prototype', 'toString', '__esModule', 'header', '16NzSGCd', 'replace', '1782703ZdKjgT', '715PqmBug', '3350PQoDEy', '480876VReWWx', 'length', 'parse', '240ZqsJzs', '14661tWpxQd', "Invalid token specified: must be a string", 'message', "Invalid token specified: invalid base64 for part #", '2zYCTMV', 'defineProperty', 'name', 'jwtDecode', "base64 string is not of the correct length", '1382019AnaqCt', '6717520cPtxfc'];
  _0x130b = function () {
    return _0x5c2b12;
  };
  return _0x130b();
}
(function (_0x399c81, _0x537245) {
  const _0x198f74 = _0x399c81();
  while (true) {
    try {
      const _0x3d06d2 = -parseInt(_0x5a4a(0x12a)) / 0x1 + parseInt(_0x5a4a(0x115)) / 0x2 * (-parseInt(_0x5a4a(0x11a)) / 0x3) + -parseInt(_0x5a4a(0x11b)) / 0x4 + -parseInt(_0x5a4a(0x122)) / 0x5 * (-parseInt(_0x5a4a(0x110)) / 0x6) + -parseInt(_0x5a4a(0x11c)) / 0x7 * (parseInt(_0x5a4a(0x128)) / 0x8) + -parseInt(_0x5a4a(0x111)) / 0x9 * (-parseInt(_0x5a4a(0x10c)) / 0xa) + parseInt(_0x5a4a(0x12b)) / 0xb * (parseInt(_0x5a4a(0x10d)) / 0xc);
      if (_0x3d06d2 === _0x537245) {
        break;
      } else {
        _0x198f74.push(_0x198f74.shift());
      }
    } catch (_0x56d667) {
      _0x198f74.push(_0x198f74.shift());
    }
  }
})(_0x130b, 0xec47e);
Object[_0x5a4a(0x116)](exports, _0x5a4a(0x126), {
  'value': true
});
exports.jwtDecode = exports[_0x5a4a(0x123)] = undefined;
class InvalidTokenError extends Error {}
exports[_0x5a4a(0x123)] = InvalidTokenError;
InvalidTokenError[_0x5a4a(0x124)][_0x5a4a(0x117)] = _0x5a4a(0x123);
function b64DecodeUnicode(_0xc5914a) {
  return decodeURIComponent(atob(_0xc5914a)[_0x5a4a(0x129)](/(.)/g, (_0x9a1ca2, _0x4db155) => {
    let _0x1d2736 = _0x4db155[_0x5a4a(0x11d)](0x0)[_0x5a4a(0x125)](0x10)[_0x5a4a(0x11f)]();
    if (_0x1d2736[_0x5a4a(0x10e)] < 0x2) {
      _0x1d2736 = '0' + _0x1d2736;
    }
    return '%' + _0x1d2736;
  }));
}
function _0x5a4a(_0x19298a, _0x46c7a7) {
  _0x19298a = _0x19298a - 0x10c;
  const _0x130b4a = _0x130b();
  let _0x5a4ad6 = _0x130b4a[_0x19298a];
  return _0x5a4ad6;
}
function base64UrlDecode(_0x477cea) {
  let _0x235d5d = _0x477cea.replace(/-/g, '+')[_0x5a4a(0x129)](/_/g, '/');
  switch (_0x235d5d[_0x5a4a(0x10e)] % 0x4) {
    case 0x0:
      break;
    case 0x2:
      _0x235d5d += '==';
      break;
    case 0x3:
      _0x235d5d += '=';
      break;
    default:
      throw new Error(_0x5a4a(0x119));
  }
  try {
    return b64DecodeUnicode(_0x235d5d);
  } catch (_0x841bd4) {
    return atob(_0x235d5d);
  }
}
function jwtDecode(_0x37ea2c, _0x1ea75c) {
  if (typeof _0x37ea2c !== _0x5a4a(0x120)) {
    throw new InvalidTokenError(_0x5a4a(0x112));
  }
  if (!_0x1ea75c) {
    _0x1ea75c = {};
  }
  const _0x53b44b = _0x1ea75c[_0x5a4a(0x127)] === true ? 0x0 : 0x1;
  const _0x338129 = _0x37ea2c[_0x5a4a(0x11e)]('.')[_0x53b44b];
  if (typeof _0x338129 !== _0x5a4a(0x120)) {
    throw new InvalidTokenError("Invalid token specified: missing part #" + (_0x53b44b + 0x1));
  }
  let _0x2f8beb;
  try {
    _0x2f8beb = base64UrlDecode(_0x338129);
  } catch (_0x12246f) {
    throw new InvalidTokenError(_0x5a4a(0x114) + (_0x53b44b + 0x1) + " (" + _0x12246f[_0x5a4a(0x113)] + ')');
  }
  try {
    return JSON[_0x5a4a(0x10f)](_0x2f8beb);
  } catch (_0x467988) {
    throw new InvalidTokenError(_0x5a4a(0x121) + (_0x53b44b + 0x1) + " (" + _0x467988[_0x5a4a(0x113)] + ')');
  }
}
exports[_0x5a4a(0x118)] = jwtDecode;