/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 1.0.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2026
 * @license MIT
 */
'use strict';
var crypto = require('crypto');
var INPUT_ERROR = 'input is invalid type';
var FINALIZE_ERROR = 'finalize already called';
var ARRAY_BUFFER = typeof ArrayBuffer !== 'undefined';
var formatMessage = function (_0x40ff46) {
  var _0x1a9ae6 = typeof _0x40ff46;
  if (_0x1a9ae6 === 'string')
    return [
      _0x40ff46,
      true
    ];
  if (Array.isArray(_0x40ff46))
    return [
      _0x40ff46,
      false
    ];
  if (ARRAY_BUFFER && _0x40ff46) {
    if (_0x40ff46.constructor === ArrayBuffer)
      return [
        new Uint8Array(_0x40ff46),
        false
      ];
    else {
      if (ArrayBuffer.isView(_0x40ff46))
        return [
          _0x40ff46,
          false
        ];
    }
  }
  throw new Error('input is invalid type');
};
function toNodeInput(_0x1c7434) {
  const [_0x1b82cb, _0xd8f375] = formatMessage(_0x1c7434);
  return _0xd8f375 ? Buffer.from(_0x1b82cb, 'utf8') : Buffer.from(_0x1b82cb);
}
class NodeHasher {
  constructor(_0x44fae0) {
    this.hash = _0x44fae0;
    this.result = undefined;
  }
  update(_0xb5f3df) {
    if (this.result)
      throw new Error('finalize already called');
    this.hash.update(toNodeInput(_0xb5f3df));
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
    return this.result.toString('hex');
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
function addOutputMethods(_0x5b5206, _0xedfafe) {
  _0x5b5206.hex = _0x5b5206;
  _0x5b5206.array = function (..._0x1f4953) {
    return _0xedfafe(..._0x1f4953.slice(0, -1)).update(_0x1f4953[_0x1f4953.length - 1]).array();
  };
  _0x5b5206.digest = _0x5b5206.array;
  _0x5b5206.arrayBuffer = function (..._0x441fd8) {
    return _0xedfafe(..._0x441fd8.slice(0, -1)).update(_0x441fd8[_0x441fd8.length - 1]).arrayBuffer();
  };
  return _0x5b5206;
}
function createNodeMethod(_0x192f24) {
  const _0x566b09 = () => new NodeHasher(crypto.createHash(_0x192f24));
  const _0x3564ca = function (_0x5641f0) {
    return _0x566b09().update(_0x5641f0).hex();
  };
  addOutputMethods(_0x3564ca, _0x566b09);
  _0x3564ca.create = _0x566b09;
  _0x3564ca.update = function (_0x24bed6) {
    return _0x3564ca.create().update(_0x24bed6);
  };
  return _0x3564ca;
}
function _0x55c3() {
  return [
    'sha224',
    '5tbRrEd',
    '491076YJzvTe',
    'hmac',
    'hex',
    'crypto',
    '170jsRdtt',
    'create',
    'buffer',
    'utf8',
    'toString',
    '9nkECUb',
    'slice',
    '3168599dGmyVw',
    'arrayBuffer',
    'from',
    '11621007kUgzaY',
    'createHash',
    'result',
    'undefined',
    '1328823gcIHYi',
    '6ovQXEz',
    '2093696pQnxgh',
    'array',
    'sha256',
    'finalize already called',
    'string',
    'hash',
    '4549364eQsUre',
    'isView',
    'length',
    'digest',
    'finalize',
    'update',
    '2144584yfJCOT',
    'constructor'
  ];
}
function createNodeHmacMethod(_0x2e4837) {
  const _0x212147 = _0x1390df => new NodeHasher(crypto.createHmac(_0x2e4837, toNodeInput(_0x1390df)));
  const _0x5b13a5 = function (_0x325297, _0x253e5f) {
    return _0x212147(_0x325297).update(_0x253e5f).hex();
  };
  addOutputMethods(_0x5b13a5, _0x212147);
  _0x5b13a5.create = _0x212147;
  _0x5b13a5.update = function (_0x121a37, _0x4b707b) {
    return _0x5b13a5.create(_0x121a37).update(_0x4b707b);
  };
  return _0x5b13a5;
}
const sha256 = createNodeMethod('sha256');
const sha224 = createNodeMethod('sha224');
function _0x4f51(_0x425664, _0x53abf3) {
  _0x425664 = _0x425664 - 272;
  const _0x55c331 = [
    'sha224',
    '5tbRrEd',
    '491076YJzvTe',
    'hmac',
    'hex',
    'crypto',
    '170jsRdtt',
    'create',
    'buffer',
    'utf8',
    'toString',
    '9nkECUb',
    'slice',
    '3168599dGmyVw',
    'arrayBuffer',
    'from',
    '11621007kUgzaY',
    'createHash',
    'result',
    'undefined',
    '1328823gcIHYi',
    '6ovQXEz',
    '2093696pQnxgh',
    'array',
    'sha256',
    'finalize already called',
    'string',
    'hash',
    '4549364eQsUre',
    'isView',
    'length',
    'digest',
    'finalize',
    'update',
    '2144584yfJCOT',
    'constructor'
  ];
  let _0x4f5196 = _0x55c331[_0x425664];
  return _0x55c331[_0x425664];
}
sha256.sha256 = sha256;
sha256.sha224 = sha224;
sha256.hmac = createNodeHmacMethod('sha256');
sha224.hmac = createNodeHmacMethod('sha224');
module.exports = sha256;