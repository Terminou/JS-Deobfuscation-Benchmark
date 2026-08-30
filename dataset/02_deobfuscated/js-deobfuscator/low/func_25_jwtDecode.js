"use strict";
const _0x3c5c9b = _0x5a4a;
function _0x130b() {
  const _0x5c2b12 = ["683263hPOTTs", "charCodeAt", "split", "toUpperCase", "string", "Invalid token specified: invalid json for part #", "241915GCXGmY", "InvalidTokenError", "prototype", "toString", "__esModule", "header", "16NzSGCd", "replace", "1782703ZdKjgT", "715PqmBug", "3350PQoDEy", "480876VReWWx", "length", "parse", "240ZqsJzs", "14661tWpxQd", "Invalid token specified: must be a string", "message", "Invalid token specified: invalid base64 for part #", "2zYCTMV", "defineProperty", "name", "jwtDecode", "base64 string is not of the correct length", "1382019AnaqCt", "6717520cPtxfc"];
  _0x130b = function () {
    return _0x5c2b12;
  };
  return _0x130b();
}
(function (_0x399c81, _0x537245) {
  const _0x1f8bb0 = _0x5a4a, _0x198f74 = _0x399c81();
  while (true) {
    try {
      const _0x3d06d2 = -parseInt(_0x1f8bb0(298)) / 1 + parseInt(_0x1f8bb0(277)) / 2 * (-parseInt(_0x1f8bb0(282)) / 3) + -parseInt(_0x1f8bb0(283)) / 4 + -parseInt(_0x1f8bb0(290)) / 5 * (-parseInt(_0x1f8bb0(272)) / 6) + -parseInt(_0x1f8bb0(284)) / 7 * (parseInt(_0x1f8bb0(296)) / 8) + -parseInt(_0x1f8bb0(273)) / 9 * (-parseInt(_0x1f8bb0(268)) / 10) + parseInt(_0x1f8bb0(299)) / 11 * (parseInt(_0x1f8bb0(269)) / 12);
      if (_0x3d06d2 === _0x537245) break; else _0x198f74.push(_0x198f74.shift());
    } catch (_0x56d667) {
      _0x198f74.push(_0x198f74.shift());
    }
  }
}(_0x130b, 967806));
Object[_0x3c5c9b(278)](exports, _0x3c5c9b(294), {value: true}), exports.jwtDecode = exports[_0x3c5c9b(291)] = undefined;
class InvalidTokenError extends Error {}
exports[_0x3c5c9b(291)] = InvalidTokenError, InvalidTokenError[_0x3c5c9b(292)][_0x3c5c9b(279)] = _0x3c5c9b(291);
function b64DecodeUnicode(_0xc5914a) {
  const _0x36d696 = _0x3c5c9b;
  return decodeURIComponent(atob(_0xc5914a)[_0x36d696(297)](/(.)/g, (_0x9a1ca2, _0x4db155) => {
    const _0x550065 = _0x36d696;
    let _0x1d2736 = _0x4db155[_0x550065(285)](0)[_0x550065(293)](16)[_0x550065(287)]();
    return _0x1d2736[_0x550065(270)] < 2 && (_0x1d2736 = "0" + _0x1d2736), "%" + _0x1d2736;
  }));
}
function _0x5a4a(_0x19298a, _0x46c7a7) {
  _0x19298a = _0x19298a - 268;
  const _0x130b4a = _0x130b();
  let _0x5a4ad6 = _0x130b4a[_0x19298a];
  return _0x5a4ad6;
}
function base64UrlDecode(_0x477cea) {
  const _0x2f7327 = _0x3c5c9b;
  let _0x235d5d = _0x477cea.replace(/-/g, "+")[_0x2f7327(297)](/_/g, "/");
  switch (_0x235d5d[_0x2f7327(270)] % 4) {
    case 0:
      break;
    case 2:
      _0x235d5d += "==";
      break;
    case 3:
      _0x235d5d += "=";
      break;
    default:
      throw new Error(_0x2f7327(281));
  }
  try {
    return b64DecodeUnicode(_0x235d5d);
  } catch (_0x841bd4) {
    return atob(_0x235d5d);
  }
}
function jwtDecode(_0x37ea2c, _0x1ea75c) {
  const _0x2b38b3 = _0x3c5c9b;
  if (typeof _0x37ea2c !== _0x2b38b3(288)) throw new InvalidTokenError(_0x2b38b3(274));
  _0x1ea75c || (_0x1ea75c = {});
  const _0x53b44b = _0x1ea75c[_0x2b38b3(295)] === true ? 0 : 1, _0x338129 = _0x37ea2c[_0x2b38b3(286)](".")[_0x53b44b];
  if (typeof _0x338129 !== _0x2b38b3(288)) throw new InvalidTokenError("Invalid token specified: missing part #" + (_0x53b44b + 1));
  let _0x2f8beb;
  try {
    _0x2f8beb = base64UrlDecode(_0x338129);
  } catch (_0x12246f) {
    throw new InvalidTokenError(_0x2b38b3(276) + (_0x53b44b + 1) + " (" + _0x12246f[_0x2b38b3(275)] + ")");
  }
  try {
    return JSON[_0x2b38b3(271)](_0x2f8beb);
  } catch (_0x467988) {
    throw new InvalidTokenError(_0x2b38b3(289) + (_0x53b44b + 1) + " (" + _0x467988[_0x2b38b3(275)] + ")");
  }
}
exports[_0x3c5c9b(280)] = jwtDecode;
