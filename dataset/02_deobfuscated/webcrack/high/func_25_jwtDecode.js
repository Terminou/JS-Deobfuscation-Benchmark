'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jwtDecode = exports.InvalidTokenError = undefined;
class InvalidTokenError extends Error {}
exports.InvalidTokenError = InvalidTokenError;
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(_0x1b6152) {
  return decodeURIComponent(atob(_0x1b6152).replace(/(.)/g, (_0x453e2f, _0x5d1fd0) => {
    let _0x3659b6 = _0x5d1fd0.charCodeAt(0).toString(16).toUpperCase();
    if (_0x3659b6.length < 2) {
      _0x3659b6 = "0" + _0x3659b6;
    }
    return "%" + _0x3659b6;
  }));
}
function base64UrlDecode(_0x25d33c) {
  let _0x33d29b = _0x25d33c.replace(/-/g, "+").replace(/_/g, "/");
  switch (_0x33d29b.length % 4) {
    case 0:
      break;
    case 2:
      _0x33d29b += "==";
      break;
    case 3:
      _0x33d29b += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return b64DecodeUnicode(_0x33d29b);
  } catch (_0x1427a1) {
    return atob(_0x33d29b);
  }
}
function jwtDecode(_0x37d680, _0x551761) {
  if (typeof _0x37d680 !== "string") {
    throw new InvalidTokenError("Invalid token specified: must be a string");
  }
  _0x551761 ||= {};
  const _0x51c909 = _0x551761.header === true ? 0 : 1;
  const _0xa17025 = _0x37d680.split(".")[_0x51c909];
  if (typeof _0xa17025 !== "string") {
    throw new InvalidTokenError("Invalid token specified: missing part #" + (_0x51c909 + 1));
  }
  let _0x5a68e8;
  try {
    _0x5a68e8 = base64UrlDecode(_0xa17025);
  } catch (_0x1b8c65) {
    throw new InvalidTokenError("Invalid token specified: invalid base64 for part #" + (_0x51c909 + 1) + " (" + _0x1b8c65.message + ")");
  }
  try {
    return JSON.parse(_0x5a68e8);
  } catch (_0x486887) {
    throw new InvalidTokenError("Invalid token specified: invalid json for part #" + (_0x51c909 + 1) + " (" + _0x486887.message + ")");
  }
}
exports.jwtDecode = jwtDecode;