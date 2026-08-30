/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 1.0.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2026
 * @license MIT
 */
'use strict';

var crypto = require("crypto");
var INPUT_ERROR = "input is invalid type";
var FINALIZE_ERROR = "finalize already called";
var ARRAY_BUFFER = typeof ArrayBuffer !== "undefined";
function formatMessage(_0x5cf2f5) {
  var _0x3ebea6 = typeof _0x5cf2f5;
  if (_0x3ebea6 === "string") {
    return [_0x5cf2f5, true];
  }
  if (Array.isArray(_0x5cf2f5)) {
    return [_0x5cf2f5, false];
  }
  if (ARRAY_BUFFER && _0x5cf2f5) {
    if (_0x5cf2f5.constructor === ArrayBuffer) {
      return [new Uint8Array(_0x5cf2f5), false];
    } else if (ArrayBuffer.isView(_0x5cf2f5)) {
      return [_0x5cf2f5, false];
    }
  }
  throw new Error(INPUT_ERROR);
}
function toNodeInput(_0x5656f5) {
  const [_0x473973, _0x34a554] = formatMessage(_0x5656f5);
  if (_0x34a554) {
    return Buffer.from(_0x473973, "utf8");
  } else {
    return Buffer.from(_0x473973);
  }
}
class NodeHasher {
  constructor(_0x3249e6) {
    this.hash = _0x3249e6;
    this.result = undefined;
  }
  update(_0xe013ac) {
    if (this.result) {
      throw new Error(FINALIZE_ERROR);
    }
    this.hash.update(toNodeInput(_0xe013ac));
    return this;
  }
  finalize() {
    if (!this.result) {
      this.result = this.hash.digest();
      this.hash = undefined;
    }
  }
  hex() {
    this.finalize();
    return this.result.toString("hex");
  }
  toString() {
    return this.hex();
  }
  array() {
    this.finalize();
    return Array.from(this.result);
  }
  digest() {
    return this.array();
  }
  arrayBuffer() {
    return Uint8Array.from(this.array()).buffer;
  }
}
function addOutputMethods(_0x3087da, _0x4bc33a) {
  _0x3087da.hex = _0x3087da;
  _0x3087da.array = function (..._0x4c6dc4) {
    return _0x4bc33a(..._0x4c6dc4.slice(0, -1)).update(_0x4c6dc4[_0x4c6dc4.length - 1]).array();
  };
  _0x3087da.digest = _0x3087da.array;
  _0x3087da.arrayBuffer = function (..._0x50898f) {
    return _0x4bc33a(..._0x50898f.slice(0, -1)).update(_0x50898f[_0x50898f.length - 1]).arrayBuffer();
  };
  return _0x3087da;
}
function createNodeMethod(_0x313e67) {
  const _0x3affa7 = () => new NodeHasher(crypto.createHash(_0x313e67));
  const _0x588101 = function (_0x3ac070) {
    return _0x3affa7().update(_0x3ac070).hex();
  };
  addOutputMethods(_0x588101, _0x3affa7);
  _0x588101.create = _0x3affa7;
  _0x588101.update = function (_0x250a57) {
    return _0x588101.create().update(_0x250a57);
  };
  return _0x588101;
}
function createNodeHmacMethod(_0x1eb365) {
  const _0x1defc4 = _0x152f54 => new NodeHasher(crypto.createHmac(_0x1eb365, toNodeInput(_0x152f54)));
  const _0x18297e = function (_0x5c8d2f, _0x88ff01) {
    return _0x1defc4(_0x5c8d2f).update(_0x88ff01).hex();
  };
  addOutputMethods(_0x18297e, _0x1defc4);
  _0x18297e.create = _0x1defc4;
  _0x18297e.update = function (_0x40564c, _0x4be316) {
    return _0x18297e.create(_0x40564c).update(_0x4be316);
  };
  return _0x18297e;
}
const sha256 = createNodeMethod("sha256");
const sha224 = createNodeMethod("sha224");
sha256.sha256 = sha256;
sha256.sha224 = sha224;
sha256.hmac = createNodeHmacMethod("sha256");
sha224.hmac = createNodeHmacMethod("sha224");
module.exports = sha256;