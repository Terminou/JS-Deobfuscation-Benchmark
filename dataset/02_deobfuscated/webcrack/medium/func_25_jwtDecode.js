'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jwtDecode = exports.InvalidTokenError = undefined;
class InvalidTokenError extends Error {}
exports.InvalidTokenError = InvalidTokenError;
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(_0x5ba5de) {
  return decodeURIComponent(atob(_0x5ba5de).replace(/(.)/g, (_0x394086, _0x15064d) => {
    let _0x22ac6d = _0x15064d.charCodeAt(0).toString(16).toUpperCase();
    if (_0x22ac6d.length < 2) {
      _0x22ac6d = "0" + _0x22ac6d;
    }
    return "%" + _0x22ac6d;
  }));
}
function base64UrlDecode(_0x243cc7) {
  let _0x59632b = _0x243cc7.replace(/-/g, "+").replace(/_/g, "/");
  switch (_0x59632b.length % 4) {
    case 0:
      break;
    case 2:
      _0x59632b += "==";
      break;
    case 3:
      _0x59632b += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return b64DecodeUnicode(_0x59632b);
  } catch (_0x37727d) {
    return atob(_0x59632b);
  }
}
function jwtDecode(_0x415692, _0x262538) {
  if (typeof _0x415692 !== "string") {
    throw new InvalidTokenError("Invalid token specified: must be a string");
  }
  _0x262538 ||= {};
  const _0x5f0947 = _0x262538.header === true ? 0 : 1;
  const _0x5c6b2a = _0x415692.split(".")[_0x5f0947];
  if (typeof _0x5c6b2a !== "string") {
    throw new InvalidTokenError("Invalid token specified: missing part #" + (_0x5f0947 + 1));
  }
  let _0xf11a3c;
  try {
    _0xf11a3c = base64UrlDecode(_0x5c6b2a);
  } catch (_0x2a7d0c) {
    throw new InvalidTokenError("Invalid token specified: invalid base64 for part #" + (_0x5f0947 + 1) + " (" + _0x2a7d0c.message + ")");
  }
  try {
    return JSON.parse(_0xf11a3c);
  } catch (_0x3ba03f) {
    throw new InvalidTokenError("Invalid token specified: invalid json for part #" + (_0x5f0947 + 1) + " (" + _0x3ba03f.message + ")");
  }
}
exports.jwtDecode = jwtDecode;