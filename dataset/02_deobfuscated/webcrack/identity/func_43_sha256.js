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
function formatMessage(_0x425664) {
  var _0x53abf3 = typeof _0x425664;
  if (_0x53abf3 === "string") {
    return [_0x425664, true];
  }
  if (Array.isArray(_0x425664)) {
    return [_0x425664, false];
  }
  if (ARRAY_BUFFER && _0x425664) {
    if (_0x425664.constructor === ArrayBuffer) {
      return [new Uint8Array(_0x425664), false];
    } else if (ArrayBuffer.isView(_0x425664)) {
      return [_0x425664, false];
    }
  }
  throw new Error(INPUT_ERROR);
}
function toNodeInput(_0x55c331) {
  const [_0x4f5196, _0x546616] = formatMessage(_0x55c331);
  if (_0x546616) {
    return Buffer.from(_0x4f5196, "utf8");
  } else {
    return Buffer.from(_0x4f5196);
  }
}
class NodeHasher {
  constructor(_0x5b388c) {
    this.hash = _0x5b388c;
    this.result = undefined;
  }
  update(_0x203eb0) {
    if (this.result) {
      throw new Error(FINALIZE_ERROR);
    }
    this.hash.update(toNodeInput(_0x203eb0));
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
function addOutputMethods(_0x24f25b, _0x21047f) {
  _0x24f25b.hex = _0x24f25b;
  _0x24f25b.array = function (..._0x53cdfc) {
    return _0x21047f(..._0x53cdfc.slice(0, -1)).update(_0x53cdfc[_0x53cdfc.length - 1]).array();
  };
  _0x24f25b.digest = _0x24f25b.array;
  _0x24f25b.arrayBuffer = function (..._0x40ff46) {
    return _0x21047f(..._0x40ff46.slice(0, -1)).update(_0x40ff46[_0x40ff46.length - 1]).arrayBuffer();
  };
  return _0x24f25b;
}
function createNodeMethod(_0x1a9ae6) {
  const _0x1c7434 = () => new NodeHasher(crypto.createHash(_0x1a9ae6));
  const _0x1b82cb = function (_0xd8f375) {
    return _0x1c7434().update(_0xd8f375).hex();
  };
  addOutputMethods(_0x1b82cb, _0x1c7434);
  _0x1b82cb.create = _0x1c7434;
  _0x1b82cb.update = function (_0x44fae0) {
    return _0x1b82cb.create().update(_0x44fae0);
  };
  return _0x1b82cb;
}
function createNodeHmacMethod(_0xb5f3df) {
  const _0x5b5206 = _0x1f4953 => new NodeHasher(crypto.createHmac(_0xb5f3df, toNodeInput(_0x1f4953)));
  const _0xedfafe = function (_0x441fd8, _0x192f24) {
    return _0x5b5206(_0x441fd8).update(_0x192f24).hex();
  };
  addOutputMethods(_0xedfafe, _0x5b5206);
  _0xedfafe.create = _0x5b5206;
  _0xedfafe.update = function (_0x566b09, _0x3564ca) {
    return _0xedfafe.create(_0x566b09).update(_0x3564ca);
  };
  return _0xedfafe;
}
const sha256 = createNodeMethod("sha256");
const sha224 = createNodeMethod("sha224");
sha256.sha256 = sha256;
sha256.sha224 = sha224;
sha256.hmac = createNodeHmacMethod("sha256");
sha224.hmac = createNodeHmacMethod("sha224");
module.exports = sha256;