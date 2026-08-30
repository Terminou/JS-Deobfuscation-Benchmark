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
function formatMessage(_0x2a58d9) {
  var _0x2b7eb7 = typeof _0x2a58d9;
  if (_0x2b7eb7 === "string") {
    return [_0x2a58d9, true];
  }
  if (Array.isArray(_0x2a58d9)) {
    return [_0x2a58d9, false];
  }
  if (ARRAY_BUFFER && _0x2a58d9) {
    if (_0x2a58d9.constructor === ArrayBuffer) {
      return [new Uint8Array(_0x2a58d9), false];
    } else if (ArrayBuffer.isView(_0x2a58d9)) {
      return [_0x2a58d9, false];
    }
  }
  throw new Error(INPUT_ERROR);
}
function toNodeInput(_0x4801d7) {
  const [_0x4c3a67, _0x3c7c10] = formatMessage(_0x4801d7);
  if (_0x3c7c10) {
    return Buffer.from(_0x4c3a67, "utf8");
  } else {
    return Buffer.from(_0x4c3a67);
  }
}
class NodeHasher {
  constructor(_0x11d10b) {
    this.hash = _0x11d10b;
    this.result = undefined;
  }
  update(_0x5833aa) {
    if (this.result) {
      throw new Error(FINALIZE_ERROR);
    }
    this.hash.update(toNodeInput(_0x5833aa));
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
function addOutputMethods(_0x3780a5, _0x5cb169) {
  _0x3780a5.hex = _0x3780a5;
  _0x3780a5.array = function (..._0x5e09f4) {
    return _0x5cb169(..._0x5e09f4.slice(0, -1)).update(_0x5e09f4[_0x5e09f4.length - 1]).array();
  };
  _0x3780a5.digest = _0x3780a5.array;
  _0x3780a5.arrayBuffer = function (..._0x33b17b) {
    return _0x5cb169(..._0x33b17b.slice(0, -1)).update(_0x33b17b[_0x33b17b.length - 1]).arrayBuffer();
  };
  return _0x3780a5;
}
function createNodeMethod(_0x3c876f) {
  const _0x3182e7 = () => new NodeHasher(crypto.createHash(_0x3c876f));
  const _0xcfd63e = function (_0x51c2de) {
    return _0x3182e7().update(_0x51c2de).hex();
  };
  addOutputMethods(_0xcfd63e, _0x3182e7);
  _0xcfd63e.create = _0x3182e7;
  _0xcfd63e.update = function (_0x10a51c) {
    return _0xcfd63e.create().update(_0x10a51c);
  };
  return _0xcfd63e;
}
function createNodeHmacMethod(_0x55b0f0) {
  const _0x47c882 = _0xcaa956 => new NodeHasher(crypto.createHmac(_0x55b0f0, toNodeInput(_0xcaa956)));
  const _0x4ab426 = function (_0x58f8d8, _0xe9b5ea) {
    return _0x47c882(_0x58f8d8).update(_0xe9b5ea).hex();
  };
  addOutputMethods(_0x4ab426, _0x47c882);
  _0x4ab426.create = _0x47c882;
  _0x4ab426.update = function (_0x4db0f5, _0x43b4f2) {
    return _0x4ab426.create(_0x4db0f5).update(_0x43b4f2);
  };
  return _0x4ab426;
}
const sha256 = createNodeMethod("sha256");
const sha224 = createNodeMethod("sha224");
sha256.sha256 = sha256;
sha256.sha224 = sha224;
sha256.hmac = createNodeHmacMethod("sha256");
sha224.hmac = createNodeHmacMethod("sha224");
module.exports = sha256;