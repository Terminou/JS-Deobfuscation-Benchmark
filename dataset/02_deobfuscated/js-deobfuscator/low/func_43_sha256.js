"use strict";
const _0x3f7366 = _0x4f51;
(function (_0x25fc27, _0x155295) {
  const _0x4f4a3b = _0x4f51, _0x570e37 = _0x25fc27();
  while (true) {
    try {
      const _0x503533 = parseInt(_0x4f4a3b(292)) / 1 + -parseInt(_0x4f4a3b(274)) / 2 * (parseInt(_0x4f4a3b(283)) / 3) + -parseInt(_0x4f4a3b(300)) / 4 * (parseInt(_0x4f4a3b(273)) / 5) + -parseInt(_0x4f4a3b(293)) / 6 * (parseInt(_0x4f4a3b(285)) / 7) + -parseInt(_0x4f4a3b(306)) / 8 + -parseInt(_0x4f4a3b(288)) / 9 + parseInt(_0x4f4a3b(278)) / 10 * (parseInt(_0x4f4a3b(294)) / 11);
      if (_0x503533 === _0x155295) break; else _0x570e37.push(_0x570e37.shift());
    } catch (_0x387f3d) {
      _0x570e37.push(_0x570e37.shift());
    }
  }
}(_0x55c3, 678627));
var crypto = require(_0x3f7366(277)), INPUT_ERROR = "input is invalid type", FINALIZE_ERROR = _0x3f7366(297), ARRAY_BUFFER = typeof ArrayBuffer !== _0x3f7366(291), formatMessage = function (_0x40ff46) {
  const _0x214f25 = _0x3f7366;
  var _0x1a9ae6 = typeof _0x40ff46;
  if (_0x1a9ae6 === _0x214f25(298)) return [_0x40ff46, true];
  if (Array.isArray(_0x40ff46)) return [_0x40ff46, false];
  if (ARRAY_BUFFER && _0x40ff46) {
    if (_0x40ff46[_0x214f25(307)] === ArrayBuffer) return [new Uint8Array(_0x40ff46), false]; else {
      if (ArrayBuffer[_0x214f25(301)](_0x40ff46)) return [_0x40ff46, false];
    }
  }
  throw new Error(INPUT_ERROR);
};
function toNodeInput(_0x1c7434) {
  const _0x12fb83 = _0x3f7366, [_0x1b82cb, _0xd8f375] = formatMessage(_0x1c7434);
  return _0xd8f375 ? Buffer.from(_0x1b82cb, _0x12fb83(281)) : Buffer[_0x12fb83(287)](_0x1b82cb);
}
class NodeHasher {
  constructor(_0x44fae0) {
    const _0x5cb4ae = _0x3f7366;
    this[_0x5cb4ae(299)] = _0x44fae0, this[_0x5cb4ae(290)] = undefined;
  }
  [_0x3f7366(305)](_0xb5f3df) {
    const _0x555594 = _0x3f7366;
    if (this[_0x555594(290)]) throw new Error(FINALIZE_ERROR);
    return this[_0x555594(299)][_0x555594(305)](toNodeInput(_0xb5f3df)), this;
  }
  ["finalize"]() {
    const _0x4190db = _0x3f7366;
    !this[_0x4190db(290)] && (this[_0x4190db(290)] = this[_0x4190db(299)].digest(), this[_0x4190db(299)] = undefined);
  }
  [_0x3f7366(276)]() {
    const _0x2b498a = _0x3f7366;
    return this.finalize(), this[_0x2b498a(290)][_0x2b498a(282)](_0x2b498a(276));
  }
  ["toString"]() {
    const _0x39b22 = _0x3f7366;
    return this[_0x39b22(276)]();
  }
  [_0x3f7366(295)]() {
    const _0x241466 = _0x3f7366;
    return this[_0x241466(304)](), Array[_0x241466(287)](this[_0x241466(290)]);
  }
  ["digest"]() {
    return this.array();
  }
  [_0x3f7366(286)]() {
    const _0x4087f3 = _0x3f7366;
    return Uint8Array[_0x4087f3(287)](this[_0x4087f3(295)]())[_0x4087f3(280)];
  }
}
function addOutputMethods(_0x5b5206, _0xedfafe) {
  const _0x42440f = _0x3f7366;
  return _0x5b5206[_0x42440f(276)] = _0x5b5206, _0x5b5206[_0x42440f(295)] = function (..._0x1f4953) {
    const _0x1d6bcd = _0x42440f;
    return _0xedfafe(..._0x1f4953[_0x1d6bcd(284)](0, -1))[_0x1d6bcd(305)](_0x1f4953[_0x1f4953[_0x1d6bcd(302)] - 1])[_0x1d6bcd(295)]();
  }, _0x5b5206[_0x42440f(303)] = _0x5b5206[_0x42440f(295)], _0x5b5206[_0x42440f(286)] = function (..._0x441fd8) {
    const _0x358b78 = _0x42440f;
    return _0xedfafe(..._0x441fd8[_0x358b78(284)](0, -1))[_0x358b78(305)](_0x441fd8[_0x441fd8[_0x358b78(302)] - 1])[_0x358b78(286)]();
  }, _0x5b5206;
}
function createNodeMethod(_0x192f24) {
  const _0x3f7863 = _0x3f7366, _0x566b09 = () => new NodeHasher(crypto[_0x3f7863(289)](_0x192f24)), _0x3564ca = function (_0x5641f0) {
    const _0x13afdb = _0x3f7863;
    return _0x566b09()[_0x13afdb(305)](_0x5641f0)[_0x13afdb(276)]();
  };
  return addOutputMethods(_0x3564ca, _0x566b09), _0x3564ca.create = _0x566b09, _0x3564ca[_0x3f7863(305)] = function (_0x24bed6) {
    const _0x20735f = _0x3f7863;
    return _0x3564ca.create()[_0x20735f(305)](_0x24bed6);
  }, _0x3564ca;
}
function _0x55c3() {
  const _0x4d0575 = ["5tbRrEd", "491076YJzvTe", "hmac", "hex", "crypto", "170jsRdtt", "create", "buffer", "utf8", "toString", "9nkECUb", "slice", "3168599dGmyVw", "arrayBuffer", "from", "11621007kUgzaY", "createHash", "result", "undefined", "1328823gcIHYi", "6ovQXEz", "2093696pQnxgh", "array", "sha256", "finalize already called", "string", "hash", "4549364eQsUre", "isView", "length", "digest", "finalize", "update", "2144584yfJCOT", "constructor", "sha224"];
  _0x55c3 = function () {
    return _0x4d0575;
  };
  return _0x55c3();
}
function createNodeHmacMethod(_0x2e4837) {
  const _0x5db20c = _0x3f7366, _0x212147 = _0x1390df => new NodeHasher(crypto.createHmac(_0x2e4837, toNodeInput(_0x1390df))), _0x5b13a5 = function (_0x325297, _0x253e5f) {
    const _0x2069a3 = _0x4f51;
    return _0x212147(_0x325297)[_0x2069a3(305)](_0x253e5f)[_0x2069a3(276)]();
  };
  return addOutputMethods(_0x5b13a5, _0x212147), _0x5b13a5.create = _0x212147, _0x5b13a5[_0x5db20c(305)] = function (_0x121a37, _0x4b707b) {
    const _0x113c30 = _0x5db20c;
    return _0x5b13a5[_0x113c30(279)](_0x121a37)[_0x113c30(305)](_0x4b707b);
  }, _0x5b13a5;
}
const sha256 = createNodeMethod("sha256"), sha224 = createNodeMethod(_0x3f7366(272));
function _0x4f51(_0x425664, _0x53abf3) {
  _0x425664 = _0x425664 - 272;
  const _0x55c331 = _0x55c3();
  let _0x4f5196 = _0x55c331[_0x425664];
  return _0x4f5196;
}
sha256[_0x3f7366(296)] = sha256, sha256.sha224 = sha224, sha256[_0x3f7366(275)] = createNodeHmacMethod(_0x3f7366(296)), sha224[_0x3f7366(275)] = createNodeHmacMethod(_0x3f7366(272)), module.exports = sha256;
