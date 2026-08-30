'use strict';

Object.defineProperty(exports, '__esModule', {
  'value': true
});
exports.jwtDecode = exports.InvalidTokenError = undefined;
class InvalidTokenError extends Error {}
exports.InvalidTokenError = InvalidTokenError;
InvalidTokenError.prototype.name = 'InvalidTokenError';
function b64DecodeUnicode(_0x19298a) {
  return decodeURIComponent(atob(_0x19298a).replace(/(.)/g, (_0x46c7a7, _0x130b4a) => {
    let _0x5a4ad6 = _0x130b4a.charCodeAt(0x0).toString(0x10).toUpperCase();
    if (_0x5a4ad6.length < 0x2) {
      _0x5a4ad6 = '0' + _0x5a4ad6;
    }
    return '%' + _0x5a4ad6;
  }));
}
function base64UrlDecode(_0x3c6411) {
  let _0x5bb6c3 = _0x3c6411.replace(/-/g, '+').replace(/_/g, '/');
  switch (_0x5bb6c3.length % 0x4) {
    case 0x0:
      break;
    case 0x2:
      _0x5bb6c3 += '==';
      break;
    case 0x3:
      _0x5bb6c3 += '=';
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return b64DecodeUnicode(_0x5bb6c3);
  } catch (_0x1192ff) {
    return atob(_0x5bb6c3);
  }
}
function jwtDecode(_0x3ab945, _0x1493f8) {
  if (typeof _0x3ab945 !== 'string') {
    throw new InvalidTokenError("Invalid token specified: must be a string");
  }
  if (!_0x1493f8) {
    _0x1493f8 = {};
  }
  const _0x51cdd5 = _0x1493f8.header === true ? 0x0 : 0x1;
  const _0xc5914a = _0x3ab945.split('.')[_0x51cdd5];
  if (typeof _0xc5914a !== 'string') {
    throw new InvalidTokenError("Invalid token specified: missing part #" + (_0x51cdd5 + 0x1));
  }
  let _0x9a1ca2;
  try {
    _0x9a1ca2 = base64UrlDecode(_0xc5914a);
  } catch (_0x4db155) {
    throw new InvalidTokenError("Invalid token specified: invalid base64 for part #" + (_0x51cdd5 + 0x1) + " (" + _0x4db155.message + ')');
  }
  try {
    return JSON.parse(_0x9a1ca2);
  } catch (_0x1d2736) {
    throw new InvalidTokenError("Invalid token specified: invalid json for part #" + (_0x51cdd5 + 0x1) + " (" + _0x1d2736.message + ')');
  }
}
exports.jwtDecode = jwtDecode;