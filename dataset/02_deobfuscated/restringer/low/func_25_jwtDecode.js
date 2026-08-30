'use strict';
function _0x130b() {
  return [
    '3350PQoDEy',
    '480876VReWWx',
    'length',
    'parse',
    '240ZqsJzs',
    '14661tWpxQd',
    'Invalid token specified: must be a string',
    'message',
    'Invalid token specified: invalid base64 for part #',
    '2zYCTMV',
    'defineProperty',
    'name',
    'jwtDecode',
    'base64 string is not of the correct length',
    '1382019AnaqCt',
    '6717520cPtxfc',
    '683263hPOTTs',
    'charCodeAt',
    'split',
    'toUpperCase',
    'string',
    'Invalid token specified: invalid json for part #',
    '241915GCXGmY',
    'InvalidTokenError',
    'prototype',
    'toString',
    '__esModule',
    'header',
    '16NzSGCd',
    'replace',
    '1782703ZdKjgT',
    '715PqmBug'
  ];
}
Object.defineProperty(exports, '__esModule', { value: true });
exports.jwtDecode = exports.InvalidTokenError = void 0;
class InvalidTokenError extends Error {
}
exports.InvalidTokenError = InvalidTokenError;
InvalidTokenError.prototype.name = 'InvalidTokenError';
function b64DecodeUnicode(_0xc5914a) {
  return decodeURIComponent(atob(_0xc5914a).replace(/(.)/g, (_0x9a1ca2, _0x4db155) => {
    let _0x1d2736 = _0x4db155.charCodeAt(0).toString(16).toUpperCase();
    if (_0x1d2736.length < 2) {
      _0x1d2736 = '0' + _0x1d2736;
    }
    return '%' + _0x1d2736;
  }));
}
function _0x5a4a(_0x19298a, _0x46c7a7) {
  _0x19298a = _0x19298a - 268;
  const _0x130b4a = [
    '3350PQoDEy',
    '480876VReWWx',
    'length',
    'parse',
    '240ZqsJzs',
    '14661tWpxQd',
    'Invalid token specified: must be a string',
    'message',
    'Invalid token specified: invalid base64 for part #',
    '2zYCTMV',
    'defineProperty',
    'name',
    'jwtDecode',
    'base64 string is not of the correct length',
    '1382019AnaqCt',
    '6717520cPtxfc',
    '683263hPOTTs',
    'charCodeAt',
    'split',
    'toUpperCase',
    'string',
    'Invalid token specified: invalid json for part #',
    '241915GCXGmY',
    'InvalidTokenError',
    'prototype',
    'toString',
    '__esModule',
    'header',
    '16NzSGCd',
    'replace',
    '1782703ZdKjgT',
    '715PqmBug'
  ];
  let _0x5a4ad6 = _0x130b4a[_0x19298a];
  return _0x130b4a[_0x19298a];
}
function base64UrlDecode(_0x477cea) {
  let _0x235d5d = _0x477cea.replace(/-/g, '+').replace(/_/g, '/');
  switch (_0x235d5d.length % 4) {
  case 0:
    break;
  case 2:
    _0x235d5d += '==';
    break;
  case 3:
    _0x235d5d += '=';
    break;
  default:
    throw new Error('base64 string is not of the correct length');
  }
  try {
    return b64DecodeUnicode(_0x235d5d);
  } catch (_0x841bd4) {
    return atob(_0x235d5d);
  }
}
function jwtDecode(_0x37ea2c, _0x1ea75c) {
  if (typeof _0x37ea2c !== 'string')
    throw new InvalidTokenError('Invalid token specified: must be a string');
  if (!_0x1ea75c) {
    _0x1ea75c = {};
  }
  const _0x53b44b = _0x1ea75c.header === true ? 0 : 1;
  const _0x338129 = _0x37ea2c.split('.')[_0x53b44b];
  if (typeof _0x37ea2c.split('.')[_0x53b44b] !== 'string')
    throw new InvalidTokenError('Invalid token specified: missing part #' + (_0x53b44b + 1));
  let _0x2f8beb;
  try {
    _0x2f8beb = base64UrlDecode(_0x37ea2c.split('.')[_0x53b44b]);
  } catch (_0x12246f) {
    throw new InvalidTokenError('Invalid token specified: invalid base64 for part #' + (_0x53b44b + 1) + ' (' + _0x12246f.message + ')');
  }
  try {
    return JSON.parse(_0x2f8beb);
  } catch (_0x467988) {
    throw new InvalidTokenError('Invalid token specified: invalid json for part #' + (_0x53b44b + 1) + ' (' + _0x467988.message + ')');
  }
}
exports.jwtDecode = jwtDecode;