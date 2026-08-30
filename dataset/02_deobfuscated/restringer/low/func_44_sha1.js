/*
 * [js-sha1]{@link https://github.com/emn178/js-sha1}
 *
 * @version 0.7.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2024
 * @license MIT
 */
(function (_0x293a39, _0x435f40) {
  var _0x47a449 = _0x293a39();
  while (true) {
    try {
      var _0x17caa1 = 386375;
      if (386375 === _0x435f40)
        break;
      else
        _0x47a449.push(_0x47a449.shift());
    } catch (_0x3e9cd7) {
      _0x47a449.push(_0x47a449.shift());
    }
  }
}(_0x1389, 386375));
(function () {
  'use strict';
  var _0x388685 = 'input is invalid type';
  var _0x20914e = 'finalize already called';
  var _0x28800e = typeof window === 'object';
  var _0x214521 = _0x28800e ? window : {};
  if (_0x214521.JS_SHA1_NO_WINDOW) {
    _0x28800e = false;
  }
  var _0x33e190 = !_0x28800e && typeof self === 'object';
  var _0x2bc898 = !_0x214521.JS_SHA1_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (_0x2bc898)
    _0x214521 = global;
  else if (_0x33e190) {
    _0x214521 = self;
  }
  var _0x3fd28c = !_0x214521.JS_SHA1_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var _0x1531e7 = typeof define === 'function' && define.amd;
  var _0x363951 = !_0x214521.JS_SHA1_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var _0xaba0db = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
  ];
  var _0x1e3fb0 = [
    -2147483648,
    8388608,
    32768,
    128
  ];
  var _0x4946e5 = [
    24,
    16,
    8,
    0
  ];
  var _0x5d5d48 = [
    'hex',
    'array',
    'digest',
    'arrayBuffer'
  ];
  var _0x19a1f8 = [];
  var _0x488ab7 = Array.isArray;
  if (_0x214521.JS_SHA1_NO_NODE_JS || !_0x488ab7) {
    _0x488ab7 = function (_0x5d28e1) {
      return Object.prototype.toString.call(_0x5d28e1) === '[object Array]';
    };
  }
  var _0x8a49be = ArrayBuffer.isView;
  if (_0x363951 && (_0x214521.JS_SHA1_NO_ARRAY_BUFFER_IS_VIEW || !_0x8a49be)) {
    _0x8a49be = function (_0x381b00) {
      return typeof _0x381b00 === 'object' && _0x381b00.buffer && _0x381b00.buffer.constructor === ArrayBuffer;
    };
  }
  var _0x262313 = function (_0x27f5de) {
    var _0x39a30f = typeof _0x27f5de;
    if (_0x39a30f === 'string')
      return [
        _0x27f5de,
        true
      ];
    if (_0x39a30f !== 'object' || _0x27f5de === null)
      throw new Error('input is invalid type');
    if (_0x363951 && _0x27f5de.constructor === ArrayBuffer)
      return [
        new Uint8Array(_0x27f5de),
        false
      ];
    if (!_0x488ab7(_0x27f5de) && !_0x8a49be(_0x27f5de))
      throw new Error('input is invalid type');
    return [
      _0x27f5de,
      false
    ];
  };
  var _0x473894 = function (_0x5c2a87) {
    return function (_0xb64afc) {
      return new _0x5091ec(true).update(_0xb64afc)[_0x5c2a87]();
    };
  };
  var _0x49fe61 = function () {
    var _0x868b8 = _0x473894('hex');
    if (_0x2bc898) {
      _0x868b8 = _0x260ef6(_0x868b8);
    }
    _0x868b8.create = function () {
      return new _0x5091ec();
    };
    _0x868b8.update = function (_0x213e9d) {
      return _0x868b8.create().update(_0x213e9d);
    };
    for (var _0x426bb0 = 0; _0x426bb0 < _0x5d5d48.length; ++_0x426bb0) {
      var _0x5a535e = _0x5d5d48[_0x426bb0];
      _0x868b8[_0x5a535e] = _0x473894(_0x5a535e);
    }
    return _0x868b8;
  };
  var _0x260ef6 = function (_0x1141a1) {
    var _0x583fd8 = require('crypto');
    var _0x65895d = {
      Buffer: function Buffer(arg, encodingOrOffset, length) {
        showFlaggedDeprecation();
        if (typeof arg === 'number') {
          if (typeof encodingOrOffset === 'string') {
            throw new ERR_INVALID_ARG_TYPE('string', 'string', arg);
          }
          return Buffer.alloc(arg);
        }
        return Buffer.from(arg, encodingOrOffset, length);
      },
      SlowBuffer: function deprecated(...args) {
        if (!process.noDeprecation) {
          emitDeprecationWarning();
        }
        if (new.target) {
          return ReflectConstruct(fn, args, new.target);
        }
        return ReflectApply(fn, this, args);
      },
      transcode: function transcode(source, fromEncoding, toEncoding) {
        if (!isUint8Array(source)) {
          throw new ERR_INVALID_ARG_TYPE('source', [
            'Buffer',
            'Uint8Array'
          ], source);
        }
        if (source.length === 0)
          return new FastBuffer();
        fromEncoding = normalizeEncoding(fromEncoding) || fromEncoding;
        toEncoding = normalizeEncoding(toEncoding) || toEncoding;
        const result = _transcode(source, fromEncoding, toEncoding);
        if (typeof result !== 'number')
          return result;
        const code = icuErrName(result);
        const err = genericNodeError(`Unable to transcode Buffer [${ code }]`, {
          code: code,
          errno: result
        });
        throw err;
      },
      isUtf8: function isUtf8(input) {
        if (isTypedArray(input) || isAnyArrayBuffer(input)) {
          return bindingIsUtf8(input);
        }
        throw new ERR_INVALID_ARG_TYPE('input', [
          'ArrayBuffer',
          'Buffer',
          'TypedArray'
        ], input);
      },
      isAscii: function isAscii(input) {
        if (isTypedArray(input) || isAnyArrayBuffer(input)) {
          return bindingIsAscii(input);
        }
        throw new ERR_INVALID_ARG_TYPE('input', [
          'ArrayBuffer',
          'Buffer',
          'TypedArray'
        ], input);
      },
      kMaxLength: 9007199254740991,
      kStringMaxLength: 536870888,
      btoa: function btoa(input) {
        if (arguments.length === 0) {
          throw new ERR_MISSING_ARGS('input');
        }
        const result = _btoa(`${ input }`);
        if (result === -1) {
          throw lazyDOMException('Invalid character', 'InvalidCharacterError');
        }
        return result;
      },
      atob: function atob(input) {
        if (arguments.length === 0) {
          throw new ERR_MISSING_ARGS('input');
        }
        const result = _atob(`${ input }`);
        switch (result) {
        case -2:
          throw lazyDOMException('Invalid character', 'InvalidCharacterError');
        case -1:
          throw lazyDOMException('The string to be decoded is not correctly encoded.', 'InvalidCharacterError');
        case -3:
          assert.fail('Unrecognized simdutf error');
          break;
        default:
          return result;
        }
      },
      constants: {
        MAX_LENGTH: 9007199254740991,
        MAX_STRING_LENGTH: 536870888
      },
      INSPECT_MAX_BYTES: 50,
      Blob: class Blob {
        constructor(sources = [], options) {
          markTransferMode(this, true, false);
          const sources_ = sourcesConverter(sources);
          validateDictionary(options, 'options');
          let {endings = 'transparent', type = ''} = options ?? kEmptyObject;
          endings = `${ endings }`;
          if (endings !== 'transparent' && endings !== 'native')
            throw new ERR_INVALID_ARG_VALUE('options.endings', endings);
          let length = 0;
          for (let i = 0; i < sources_.length; ++i) {
            const {
              0: len,
              1: src
            } = getSource(sources_[i], endings);
            length += len;
            sources_[i] = src;
          }
          if (length > kMaxLength)
            throw new ERR_BUFFER_TOO_LARGE(kMaxLength);
          this[kHandle] = _createBlob(sources_, length);
          this[kLength] = length;
          type = `${ type }`;
          this[kType] = RegExpPrototypeExec(disallowedTypeCharacters, type) !== null ? '' : StringPrototypeToLowerCase(type);
        }
        [kInspect](depth, options) {
          if (depth < 0)
            return this;
          const opts = {
            ...options,
            depth: options.depth == null ? null : options.depth - 1
          };
          return `Blob ${ inspect({
            size: this.size,
            type: this.type
          }, opts) }`;
        }
        [kClone]() {
          if (this[kNotCloneable]) {
            throw new ERR_INVALID_STATE.TypeError('File-backed Blobs are not cloneable');
          }
          const handle = this[kHandle];
          const type = this[kType];
          const length = this[kLength];
          return {
            data: {
              handle,
              type,
              length
            },
            deserializeInfo: 'internal/blob:Blob'
          };
        }
        [kDeserialize]({handle, type, length}) {
          this[kHandle] = handle;
          this[kType] = type;
          this[kLength] = length;
        }
        get type() {
          if (!isBlob(this))
            throw new ERR_INVALID_THIS('Blob');
          return this[kType];
        }
        get size() {
          if (!isBlob(this))
            throw new ERR_INVALID_THIS('Blob');
          return this[kLength];
        }
        slice(start = 0, end = this[kLength], contentType = '') {
          if (!isBlob(this))
            throw new ERR_INVALID_THIS('Blob');
          start = converters['long long'](start, {
            __proto__: null,
            context: 'start'
          });
          end = converters['long long'](end, {
            __proto__: null,
            context: 'end'
          });
          if (start < 0) {
            start = MathMax(this[kLength] + start, 0);
          } else {
            start = MathMin(start, this[kLength]);
          }
          if (end < 0) {
            end = MathMax(this[kLength] + end, 0);
          } else {
            end = MathMin(end, this[kLength]);
          }
          contentType = `${ contentType }`;
          if (RegExpPrototypeExec(disallowedTypeCharacters, contentType) !== null) {
            contentType = '';
          } else {
            contentType = StringPrototypeToLowerCase(contentType);
          }
          const span = MathMax(end - start, 0);
          return createBlob(this[kHandle].slice(start, start + span), span, contentType);
        }
        arrayBuffer() {
          if (!isBlob(this))
            return PromiseReject(new ERR_INVALID_THIS('Blob'));
          return arrayBuffer(this);
        }
        text() {
          if (!isBlob(this))
            return PromiseReject(new ERR_INVALID_THIS('Blob'));
          dec ??= new TextDecoder();
          return PromisePrototypeThen(arrayBuffer(this), buffer => dec.decode(buffer));
        }
        bytes() {
          if (!isBlob(this))
            return PromiseReject(new ERR_INVALID_THIS('Blob'));
          return PromisePrototypeThen(arrayBuffer(this), buffer => new Uint8Array(buffer));
        }
        stream() {
          if (!isBlob(this))
            throw new ERR_INVALID_THIS('Blob');
          return createBlobReaderStream(this[kHandle].getReader());
        }
        textStream() {
          if (!isBlob(this))
            throw new ERR_INVALID_THIS('Blob');
          const stream = createBlobReaderStream(this[kHandle].getReader());
          const decoder = lazyTextDecoderStream();
          return stream.pipeThrough(decoder);
        }
      },
      resolveObjectURL: function resolveObjectURL(url) {
        url = `${ url }`;
        try {
          const parsed = new URL(url);
          const split = StringPrototypeSplit(parsed.pathname, ':', 3);
          if (split.length !== 2)
            return;
          if (base !== 'nodedata')
            return;
          const ret = getDataObject(id);
          if (ret === undefined)
            return;
          if (handle !== undefined)
            return createBlob(handle, length, type);
        } catch {
        }
      },
      File: class File extends Blob {
        constructor(fileBits, fileName, options = kEmptyObject) {
          if (arguments.length < 2) {
            throw new ERR_MISSING_ARGS('fileBits', 'fileName');
          }
          super(fileBits, options);
          let {lastModified} = options ?? kEmptyObject;
          if (lastModified !== undefined) {
            lastModified = +lastModified;
            if (NumberIsNaN(lastModified)) {
              lastModified = 0;
            }
          } else {
            lastModified = DateNow();
          }
          this[kState] = new FileState(StringPrototypeToWellFormed(`${ fileName }`), lastModified);
        }
        get name() {
          if (!isFile(this))
            throw new ERR_INVALID_THIS('File');
          return this[kState].name;
        }
        get lastModified() {
          if (!isFile(this))
            throw new ERR_INVALID_THIS('File');
          return this[kState].lastModified;
        }
        [kInspect](depth, options) {
          if (depth < 0) {
            return this;
          }
          const opts = {
            ...options,
            depth: options.depth == null ? null : options.depth - 1
          };
          return `File ${ inspect({
            size: this.size,
            type: this.type,
            name: this[kState].name,
            lastModified: this[kState].lastModified
          }, opts) }`;
        }
        [kClone]() {
          return {
            data: {
              ...super[kClone]().data,
              ...this[kState]
            },
            deserializeInfo: 'internal/file:TransferableFile'
          };
        }
        [kDeserialize](data) {
          super[kDeserialize](data);
          this[kState] = new FileState(data.name, data.lastModified);
        }
      }
    }.Buffer;
    var _0x2a2934;
    ({
      Buffer: function Buffer(arg, encodingOrOffset, length) {
        showFlaggedDeprecation();
        if (typeof arg === 'number') {
          if (typeof encodingOrOffset === 'string') {
            throw new ERR_INVALID_ARG_TYPE('string', 'string', arg);
          }
          return Buffer.alloc(arg);
        }
        return Buffer.from(arg, encodingOrOffset, length);
      },
      SlowBuffer: function deprecated(...args) {
        if (!process.noDeprecation) {
          emitDeprecationWarning();
        }
        if (new.target) {
          return ReflectConstruct(fn, args, new.target);
        }
        return ReflectApply(fn, this, args);
      },
      transcode: function transcode(source, fromEncoding, toEncoding) {
        if (!isUint8Array(source)) {
          throw new ERR_INVALID_ARG_TYPE('source', [
            'Buffer',
            'Uint8Array'
          ], source);
        }
        if (source.length === 0)
          return new FastBuffer();
        fromEncoding = normalizeEncoding(fromEncoding) || fromEncoding;
        toEncoding = normalizeEncoding(toEncoding) || toEncoding;
        const result = _transcode(source, fromEncoding, toEncoding);
        if (typeof result !== 'number')
          return result;
        const code = icuErrName(result);
        const err = genericNodeError(`Unable to transcode Buffer [${ code }]`, {
          code: code,
          errno: result
        });
        throw err;
      },
      isUtf8: function isUtf8(input) {
        if (isTypedArray(input) || isAnyArrayBuffer(input)) {
          return bindingIsUtf8(input);
        }
        throw new ERR_INVALID_ARG_TYPE('input', [
          'ArrayBuffer',
          'Buffer',
          'TypedArray'
        ], input);
      },
      isAscii: function isAscii(input) {
        if (isTypedArray(input) || isAnyArrayBuffer(input)) {
          return bindingIsAscii(input);
        }
        throw new ERR_INVALID_ARG_TYPE('input', [
          'ArrayBuffer',
          'Buffer',
          'TypedArray'
        ], input);
      },
      kMaxLength: 9007199254740991,
      kStringMaxLength: 536870888,
      btoa: function btoa(input) {
        if (arguments.length === 0) {
          throw new ERR_MISSING_ARGS('input');
        }
        const result = _btoa(`${ input }`);
        if (result === -1) {
          throw lazyDOMException('Invalid character', 'InvalidCharacterError');
        }
        return result;
      },
      atob: function atob(input) {
        if (arguments.length === 0) {
          throw new ERR_MISSING_ARGS('input');
        }
        const result = _atob(`${ input }`);
        switch (result) {
        case -2:
          throw lazyDOMException('Invalid character', 'InvalidCharacterError');
        case -1:
          throw lazyDOMException('The string to be decoded is not correctly encoded.', 'InvalidCharacterError');
        case -3:
          assert.fail('Unrecognized simdutf error');
          break;
        default:
          return result;
        }
      },
      constants: {
        MAX_LENGTH: 9007199254740991,
        MAX_STRING_LENGTH: 536870888
      },
      INSPECT_MAX_BYTES: 50,
      Blob: class Blob {
        constructor(sources = [], options) {
          markTransferMode(this, true, false);
          const sources_ = sourcesConverter(sources);
          validateDictionary(options, 'options');
          let {endings = 'transparent', type = ''} = options ?? kEmptyObject;
          endings = `${ endings }`;
          if (endings !== 'transparent' && endings !== 'native')
            throw new ERR_INVALID_ARG_VALUE('options.endings', endings);
          let length = 0;
          for (let i = 0; i < sources_.length; ++i) {
            const {
              0: len,
              1: src
            } = getSource(sources_[i], endings);
            length += len;
            sources_[i] = src;
          }
          if (length > kMaxLength)
            throw new ERR_BUFFER_TOO_LARGE(kMaxLength);
          this[kHandle] = _createBlob(sources_, length);
          this[kLength] = length;
          type = `${ type }`;
          this[kType] = RegExpPrototypeExec(disallowedTypeCharacters, type) !== null ? '' : StringPrototypeToLowerCase(type);
        }
        [kInspect](depth, options) {
          if (depth < 0)
            return this;
          const opts = {
            ...options,
            depth: options.depth == null ? null : options.depth - 1
          };
          return `Blob ${ inspect({
            size: this.size,
            type: this.type
          }, opts) }`;
        }
        [kClone]() {
          if (this[kNotCloneable]) {
            throw new ERR_INVALID_STATE.TypeError('File-backed Blobs are not cloneable');
          }
          const handle = this[kHandle];
          const type = this[kType];
          const length = this[kLength];
          return {
            data: {
              handle,
              type,
              length
            },
            deserializeInfo: 'internal/blob:Blob'
          };
        }
        [kDeserialize]({handle, type, length}) {
          this[kHandle] = handle;
          this[kType] = type;
          this[kLength] = length;
        }
        get type() {
          if (!isBlob(this))
            throw new ERR_INVALID_THIS('Blob');
          return this[kType];
        }
        get size() {
          if (!isBlob(this))
            throw new ERR_INVALID_THIS('Blob');
          return this[kLength];
        }
        slice(start = 0, end = this[kLength], contentType = '') {
          if (!isBlob(this))
            throw new ERR_INVALID_THIS('Blob');
          start = converters['long long'](start, {
            __proto__: null,
            context: 'start'
          });
          end = converters['long long'](end, {
            __proto__: null,
            context: 'end'
          });
          if (start < 0) {
            start = MathMax(this[kLength] + start, 0);
          } else {
            start = MathMin(start, this[kLength]);
          }
          if (end < 0) {
            end = MathMax(this[kLength] + end, 0);
          } else {
            end = MathMin(end, this[kLength]);
          }
          contentType = `${ contentType }`;
          if (RegExpPrototypeExec(disallowedTypeCharacters, contentType) !== null) {
            contentType = '';
          } else {
            contentType = StringPrototypeToLowerCase(contentType);
          }
          const span = MathMax(end - start, 0);
          return createBlob(this[kHandle].slice(start, start + span), span, contentType);
        }
        arrayBuffer() {
          if (!isBlob(this))
            return PromiseReject(new ERR_INVALID_THIS('Blob'));
          return arrayBuffer(this);
        }
        text() {
          if (!isBlob(this))
            return PromiseReject(new ERR_INVALID_THIS('Blob'));
          dec ??= new TextDecoder();
          return PromisePrototypeThen(arrayBuffer(this), buffer => dec.decode(buffer));
        }
        bytes() {
          if (!isBlob(this))
            return PromiseReject(new ERR_INVALID_THIS('Blob'));
          return PromisePrototypeThen(arrayBuffer(this), buffer => new Uint8Array(buffer));
        }
        stream() {
          if (!isBlob(this))
            throw new ERR_INVALID_THIS('Blob');
          return createBlobReaderStream(this[kHandle].getReader());
        }
        textStream() {
          if (!isBlob(this))
            throw new ERR_INVALID_THIS('Blob');
          const stream = createBlobReaderStream(this[kHandle].getReader());
          const decoder = lazyTextDecoderStream();
          return stream.pipeThrough(decoder);
        }
      },
      resolveObjectURL: function resolveObjectURL(url) {
        url = `${ url }`;
        try {
          const parsed = new URL(url);
          const split = StringPrototypeSplit(parsed.pathname, ':', 3);
          if (split.length !== 2)
            return;
          if (base !== 'nodedata')
            return;
          const ret = getDataObject(id);
          if (ret === undefined)
            return;
          if (handle !== undefined)
            return createBlob(handle, length, type);
        } catch {
        }
      },
      File: class File extends Blob {
        constructor(fileBits, fileName, options = kEmptyObject) {
          if (arguments.length < 2) {
            throw new ERR_MISSING_ARGS('fileBits', 'fileName');
          }
          super(fileBits, options);
          let {lastModified} = options ?? kEmptyObject;
          if (lastModified !== undefined) {
            lastModified = +lastModified;
            if (NumberIsNaN(lastModified)) {
              lastModified = 0;
            }
          } else {
            lastModified = DateNow();
          }
          this[kState] = new FileState(StringPrototypeToWellFormed(`${ fileName }`), lastModified);
        }
        get name() {
          if (!isFile(this))
            throw new ERR_INVALID_THIS('File');
          return this[kState].name;
        }
        get lastModified() {
          if (!isFile(this))
            throw new ERR_INVALID_THIS('File');
          return this[kState].lastModified;
        }
        [kInspect](depth, options) {
          if (depth < 0) {
            return this;
          }
          const opts = {
            ...options,
            depth: options.depth == null ? null : options.depth - 1
          };
          return `File ${ inspect({
            size: this.size,
            type: this.type,
            name: this[kState].name,
            lastModified: this[kState].lastModified
          }, opts) }`;
        }
        [kClone]() {
          return {
            data: {
              ...super[kClone]().data,
              ...this[kState]
            },
            deserializeInfo: 'internal/file:TransferableFile'
          };
        }
        [kDeserialize](data) {
          super[kDeserialize](data);
          this[kState] = new FileState(data.name, data.lastModified);
        }
      }
    }.Buffer.from && !_0x214521.JS_SHA1_NO_BUFFER_FROM ? _0x2a2934 = {
      Buffer: function Buffer(arg, encodingOrOffset, length) {
        showFlaggedDeprecation();
        if (typeof arg === 'number') {
          if (typeof encodingOrOffset === 'string') {
            throw new ERR_INVALID_ARG_TYPE('string', 'string', arg);
          }
          return Buffer.alloc(arg);
        }
        return Buffer.from(arg, encodingOrOffset, length);
      },
      SlowBuffer: function deprecated(...args) {
        if (!process.noDeprecation) {
          emitDeprecationWarning();
        }
        if (new.target) {
          return ReflectConstruct(fn, args, new.target);
        }
        return ReflectApply(fn, this, args);
      },
      transcode: function transcode(source, fromEncoding, toEncoding) {
        if (!isUint8Array(source)) {
          throw new ERR_INVALID_ARG_TYPE('source', [
            'Buffer',
            'Uint8Array'
          ], source);
        }
        if (source.length === 0)
          return new FastBuffer();
        fromEncoding = normalizeEncoding(fromEncoding) || fromEncoding;
        toEncoding = normalizeEncoding(toEncoding) || toEncoding;
        const result = _transcode(source, fromEncoding, toEncoding);
        if (typeof result !== 'number')
          return result;
        const code = icuErrName(result);
        const err = genericNodeError(`Unable to transcode Buffer [${ code }]`, {
          code: code,
          errno: result
        });
        throw err;
      },
      isUtf8: function isUtf8(input) {
        if (isTypedArray(input) || isAnyArrayBuffer(input)) {
          return bindingIsUtf8(input);
        }
        throw new ERR_INVALID_ARG_TYPE('input', [
          'ArrayBuffer',
          'Buffer',
          'TypedArray'
        ], input);
      },
      isAscii: function isAscii(input) {
        if (isTypedArray(input) || isAnyArrayBuffer(input)) {
          return bindingIsAscii(input);
        }
        throw new ERR_INVALID_ARG_TYPE('input', [
          'ArrayBuffer',
          'Buffer',
          'TypedArray'
        ], input);
      },
      kMaxLength: 9007199254740991,
      kStringMaxLength: 536870888,
      btoa: function btoa(input) {
        if (arguments.length === 0) {
          throw new ERR_MISSING_ARGS('input');
        }
        const result = _btoa(`${ input }`);
        if (result === -1) {
          throw lazyDOMException('Invalid character', 'InvalidCharacterError');
        }
        return result;
      },
      atob: function atob(input) {
        if (arguments.length === 0) {
          throw new ERR_MISSING_ARGS('input');
        }
        const result = _atob(`${ input }`);
        switch (result) {
        case -2:
          throw lazyDOMException('Invalid character', 'InvalidCharacterError');
        case -1:
          throw lazyDOMException('The string to be decoded is not correctly encoded.', 'InvalidCharacterError');
        case -3:
          assert.fail('Unrecognized simdutf error');
          break;
        default:
          return result;
        }
      },
      constants: {
        MAX_LENGTH: 9007199254740991,
        MAX_STRING_LENGTH: 536870888
      },
      INSPECT_MAX_BYTES: 50,
      Blob: class Blob {
        constructor(sources = [], options) {
          markTransferMode(this, true, false);
          const sources_ = sourcesConverter(sources);
          validateDictionary(options, 'options');
          let {endings = 'transparent', type = ''} = options ?? kEmptyObject;
          endings = `${ endings }`;
          if (endings !== 'transparent' && endings !== 'native')
            throw new ERR_INVALID_ARG_VALUE('options.endings', endings);
          let length = 0;
          for (let i = 0; i < sources_.length; ++i) {
            const {
              0: len,
              1: src
            } = getSource(sources_[i], endings);
            length += len;
            sources_[i] = src;
          }
          if (length > kMaxLength)
            throw new ERR_BUFFER_TOO_LARGE(kMaxLength);
          this[kHandle] = _createBlob(sources_, length);
          this[kLength] = length;
          type = `${ type }`;
          this[kType] = RegExpPrototypeExec(disallowedTypeCharacters, type) !== null ? '' : StringPrototypeToLowerCase(type);
        }
        [kInspect](depth, options) {
          if (depth < 0)
            return this;
          const opts = {
            ...options,
            depth: options.depth == null ? null : options.depth - 1
          };
          return `Blob ${ inspect({
            size: this.size,
            type: this.type
          }, opts) }`;
        }
        [kClone]() {
          if (this[kNotCloneable]) {
            throw new ERR_INVALID_STATE.TypeError('File-backed Blobs are not cloneable');
          }
          const handle = this[kHandle];
          const type = this[kType];
          const length = this[kLength];
          return {
            data: {
              handle,
              type,
              length
            },
            deserializeInfo: 'internal/blob:Blob'
          };
        }
        [kDeserialize]({handle, type, length}) {
          this[kHandle] = handle;
          this[kType] = type;
          this[kLength] = length;
        }
        get type() {
          if (!isBlob(this))
            throw new ERR_INVALID_THIS('Blob');
          return this[kType];
        }
        get size() {
          if (!isBlob(this))
            throw new ERR_INVALID_THIS('Blob');
          return this[kLength];
        }
        slice(start = 0, end = this[kLength], contentType = '') {
          if (!isBlob(this))
            throw new ERR_INVALID_THIS('Blob');
          start = converters['long long'](start, {
            __proto__: null,
            context: 'start'
          });
          end = converters['long long'](end, {
            __proto__: null,
            context: 'end'
          });
          if (start < 0) {
            start = MathMax(this[kLength] + start, 0);
          } else {
            start = MathMin(start, this[kLength]);
          }
          if (end < 0) {
            end = MathMax(this[kLength] + end, 0);
          } else {
            end = MathMin(end, this[kLength]);
          }
          contentType = `${ contentType }`;
          if (RegExpPrototypeExec(disallowedTypeCharacters, contentType) !== null) {
            contentType = '';
          } else {
            contentType = StringPrototypeToLowerCase(contentType);
          }
          const span = MathMax(end - start, 0);
          return createBlob(this[kHandle].slice(start, start + span), span, contentType);
        }
        arrayBuffer() {
          if (!isBlob(this))
            return PromiseReject(new ERR_INVALID_THIS('Blob'));
          return arrayBuffer(this);
        }
        text() {
          if (!isBlob(this))
            return PromiseReject(new ERR_INVALID_THIS('Blob'));
          dec ??= new TextDecoder();
          return PromisePrototypeThen(arrayBuffer(this), buffer => dec.decode(buffer));
        }
        bytes() {
          if (!isBlob(this))
            return PromiseReject(new ERR_INVALID_THIS('Blob'));
          return PromisePrototypeThen(arrayBuffer(this), buffer => new Uint8Array(buffer));
        }
        stream() {
          if (!isBlob(this))
            throw new ERR_INVALID_THIS('Blob');
          return createBlobReaderStream(this[kHandle].getReader());
        }
        textStream() {
          if (!isBlob(this))
            throw new ERR_INVALID_THIS('Blob');
          const stream = createBlobReaderStream(this[kHandle].getReader());
          const decoder = lazyTextDecoderStream();
          return stream.pipeThrough(decoder);
        }
      },
      resolveObjectURL: function resolveObjectURL(url) {
        url = `${ url }`;
        try {
          const parsed = new URL(url);
          const split = StringPrototypeSplit(parsed.pathname, ':', 3);
          if (split.length !== 2)
            return;
          if (base !== 'nodedata')
            return;
          const ret = getDataObject(id);
          if (ret === undefined)
            return;
          if (handle !== undefined)
            return createBlob(handle, length, type);
        } catch {
        }
      },
      File: class File extends Blob {
        constructor(fileBits, fileName, options = kEmptyObject) {
          if (arguments.length < 2) {
            throw new ERR_MISSING_ARGS('fileBits', 'fileName');
          }
          super(fileBits, options);
          let {lastModified} = options ?? kEmptyObject;
          if (lastModified !== undefined) {
            lastModified = +lastModified;
            if (NumberIsNaN(lastModified)) {
              lastModified = 0;
            }
          } else {
            lastModified = DateNow();
          }
          this[kState] = new FileState(StringPrototypeToWellFormed(`${ fileName }`), lastModified);
        }
        get name() {
          if (!isFile(this))
            throw new ERR_INVALID_THIS('File');
          return this[kState].name;
        }
        get lastModified() {
          if (!isFile(this))
            throw new ERR_INVALID_THIS('File');
          return this[kState].lastModified;
        }
        [kInspect](depth, options) {
          if (depth < 0) {
            return this;
          }
          const opts = {
            ...options,
            depth: options.depth == null ? null : options.depth - 1
          };
          return `File ${ inspect({
            size: this.size,
            type: this.type,
            name: this[kState].name,
            lastModified: this[kState].lastModified
          }, opts) }`;
        }
        [kClone]() {
          return {
            data: {
              ...super[kClone]().data,
              ...this[kState]
            },
            deserializeInfo: 'internal/file:TransferableFile'
          };
        }
        [kDeserialize](data) {
          super[kDeserialize](data);
          this[kState] = new FileState(data.name, data.lastModified);
        }
      }
    }.Buffer.from : _0x2a2934 = function (_0x8990ff) {
      return new {
        Buffer: function Buffer(arg, encodingOrOffset, length) {
          showFlaggedDeprecation();
          if (typeof arg === 'number') {
            if (typeof encodingOrOffset === 'string') {
              throw new ERR_INVALID_ARG_TYPE('string', 'string', arg);
            }
            return Buffer.alloc(arg);
          }
          return Buffer.from(arg, encodingOrOffset, length);
        },
        SlowBuffer: function deprecated(...args) {
          if (!process.noDeprecation) {
            emitDeprecationWarning();
          }
          if (new.target) {
            return ReflectConstruct(fn, args, new.target);
          }
          return ReflectApply(fn, this, args);
        },
        transcode: function transcode(source, fromEncoding, toEncoding) {
          if (!isUint8Array(source)) {
            throw new ERR_INVALID_ARG_TYPE('source', [
              'Buffer',
              'Uint8Array'
            ], source);
          }
          if (source.length === 0)
            return new FastBuffer();
          fromEncoding = normalizeEncoding(fromEncoding) || fromEncoding;
          toEncoding = normalizeEncoding(toEncoding) || toEncoding;
          const result = _transcode(source, fromEncoding, toEncoding);
          if (typeof result !== 'number')
            return result;
          const code = icuErrName(result);
          const err = genericNodeError(`Unable to transcode Buffer [${ code }]`, {
            code: code,
            errno: result
          });
          throw err;
        },
        isUtf8: function isUtf8(input) {
          if (isTypedArray(input) || isAnyArrayBuffer(input)) {
            return bindingIsUtf8(input);
          }
          throw new ERR_INVALID_ARG_TYPE('input', [
            'ArrayBuffer',
            'Buffer',
            'TypedArray'
          ], input);
        },
        isAscii: function isAscii(input) {
          if (isTypedArray(input) || isAnyArrayBuffer(input)) {
            return bindingIsAscii(input);
          }
          throw new ERR_INVALID_ARG_TYPE('input', [
            'ArrayBuffer',
            'Buffer',
            'TypedArray'
          ], input);
        },
        kMaxLength: 9007199254740991,
        kStringMaxLength: 536870888,
        btoa: function btoa(input) {
          if (arguments.length === 0) {
            throw new ERR_MISSING_ARGS('input');
          }
          const result = _btoa(`${ input }`);
          if (result === -1) {
            throw lazyDOMException('Invalid character', 'InvalidCharacterError');
          }
          return result;
        },
        atob: function atob(input) {
          if (arguments.length === 0) {
            throw new ERR_MISSING_ARGS('input');
          }
          const result = _atob(`${ input }`);
          switch (result) {
          case -2:
            throw lazyDOMException('Invalid character', 'InvalidCharacterError');
          case -1:
            throw lazyDOMException('The string to be decoded is not correctly encoded.', 'InvalidCharacterError');
          case -3:
            assert.fail('Unrecognized simdutf error');
            break;
          default:
            return result;
          }
        },
        constants: {
          MAX_LENGTH: 9007199254740991,
          MAX_STRING_LENGTH: 536870888
        },
        INSPECT_MAX_BYTES: 50,
        Blob: class Blob {
          constructor(sources = [], options) {
            markTransferMode(this, true, false);
            const sources_ = sourcesConverter(sources);
            validateDictionary(options, 'options');
            let {endings = 'transparent', type = ''} = options ?? kEmptyObject;
            endings = `${ endings }`;
            if (endings !== 'transparent' && endings !== 'native')
              throw new ERR_INVALID_ARG_VALUE('options.endings', endings);
            let length = 0;
            for (let i = 0; i < sources_.length; ++i) {
              const {
                0: len,
                1: src
              } = getSource(sources_[i], endings);
              length += len;
              sources_[i] = src;
            }
            if (length > kMaxLength)
              throw new ERR_BUFFER_TOO_LARGE(kMaxLength);
            this[kHandle] = _createBlob(sources_, length);
            this[kLength] = length;
            type = `${ type }`;
            this[kType] = RegExpPrototypeExec(disallowedTypeCharacters, type) !== null ? '' : StringPrototypeToLowerCase(type);
          }
          [kInspect](depth, options) {
            if (depth < 0)
              return this;
            const opts = {
              ...options,
              depth: options.depth == null ? null : options.depth - 1
            };
            return `Blob ${ inspect({
              size: this.size,
              type: this.type
            }, opts) }`;
          }
          [kClone]() {
            if (this[kNotCloneable]) {
              throw new ERR_INVALID_STATE.TypeError('File-backed Blobs are not cloneable');
            }
            const handle = this[kHandle];
            const type = this[kType];
            const length = this[kLength];
            return {
              data: {
                handle,
                type,
                length
              },
              deserializeInfo: 'internal/blob:Blob'
            };
          }
          [kDeserialize]({handle, type, length}) {
            this[kHandle] = handle;
            this[kType] = type;
            this[kLength] = length;
          }
          get type() {
            if (!isBlob(this))
              throw new ERR_INVALID_THIS('Blob');
            return this[kType];
          }
          get size() {
            if (!isBlob(this))
              throw new ERR_INVALID_THIS('Blob');
            return this[kLength];
          }
          slice(start = 0, end = this[kLength], contentType = '') {
            if (!isBlob(this))
              throw new ERR_INVALID_THIS('Blob');
            start = converters['long long'](start, {
              __proto__: null,
              context: 'start'
            });
            end = converters['long long'](end, {
              __proto__: null,
              context: 'end'
            });
            if (start < 0) {
              start = MathMax(this[kLength] + start, 0);
            } else {
              start = MathMin(start, this[kLength]);
            }
            if (end < 0) {
              end = MathMax(this[kLength] + end, 0);
            } else {
              end = MathMin(end, this[kLength]);
            }
            contentType = `${ contentType }`;
            if (RegExpPrototypeExec(disallowedTypeCharacters, contentType) !== null) {
              contentType = '';
            } else {
              contentType = StringPrototypeToLowerCase(contentType);
            }
            const span = MathMax(end - start, 0);
            return createBlob(this[kHandle].slice(start, start + span), span, contentType);
          }
          arrayBuffer() {
            if (!isBlob(this))
              return PromiseReject(new ERR_INVALID_THIS('Blob'));
            return arrayBuffer(this);
          }
          text() {
            if (!isBlob(this))
              return PromiseReject(new ERR_INVALID_THIS('Blob'));
            dec ??= new TextDecoder();
            return PromisePrototypeThen(arrayBuffer(this), buffer => dec.decode(buffer));
          }
          bytes() {
            if (!isBlob(this))
              return PromiseReject(new ERR_INVALID_THIS('Blob'));
            return PromisePrototypeThen(arrayBuffer(this), buffer => new Uint8Array(buffer));
          }
          stream() {
            if (!isBlob(this))
              throw new ERR_INVALID_THIS('Blob');
            return createBlobReaderStream(this[kHandle].getReader());
          }
          textStream() {
            if (!isBlob(this))
              throw new ERR_INVALID_THIS('Blob');
            const stream = createBlobReaderStream(this[kHandle].getReader());
            const decoder = lazyTextDecoderStream();
            return stream.pipeThrough(decoder);
          }
        },
        resolveObjectURL: function resolveObjectURL(url) {
          url = `${ url }`;
          try {
            const parsed = new URL(url);
            const split = StringPrototypeSplit(parsed.pathname, ':', 3);
            if (split.length !== 2)
              return;
            if (base !== 'nodedata')
              return;
            const ret = getDataObject(id);
            if (ret === undefined)
              return;
            if (handle !== undefined)
              return createBlob(handle, length, type);
          } catch {
          }
        },
        File: class File extends Blob {
          constructor(fileBits, fileName, options = kEmptyObject) {
            if (arguments.length < 2) {
              throw new ERR_MISSING_ARGS('fileBits', 'fileName');
            }
            super(fileBits, options);
            let {lastModified} = options ?? kEmptyObject;
            if (lastModified !== undefined) {
              lastModified = +lastModified;
              if (NumberIsNaN(lastModified)) {
                lastModified = 0;
              }
            } else {
              lastModified = DateNow();
            }
            this[kState] = new FileState(StringPrototypeToWellFormed(`${ fileName }`), lastModified);
          }
          get name() {
            if (!isFile(this))
              throw new ERR_INVALID_THIS('File');
            return this[kState].name;
          }
          get lastModified() {
            if (!isFile(this))
              throw new ERR_INVALID_THIS('File');
            return this[kState].lastModified;
          }
          [kInspect](depth, options) {
            if (depth < 0) {
              return this;
            }
            const opts = {
              ...options,
              depth: options.depth == null ? null : options.depth - 1
            };
            return `File ${ inspect({
              size: this.size,
              type: this.type,
              name: this[kState].name,
              lastModified: this[kState].lastModified
            }, opts) }`;
          }
          [kClone]() {
            return {
              data: {
                ...super[kClone]().data,
                ...this[kState]
              },
              deserializeInfo: 'internal/file:TransferableFile'
            };
          }
          [kDeserialize](data) {
            super[kDeserialize](data);
            this[kState] = new FileState(data.name, data.lastModified);
          }
        }
      }.Buffer(_0x8990ff);
    });
    var _0x37396f = function (_0x4aba8b) {
      if (typeof _0x4aba8b === 'string')
        return { _options: undefined }.update(_0x4aba8b, 'utf8').digest('hex');
      else {
        if (_0x4aba8b === null || _0x4aba8b === undefined)
          throw new Error('input is invalid type');
        else if (_0x4aba8b.constructor === ArrayBuffer) {
          _0x4aba8b = new Uint8Array(_0x4aba8b);
        }
      }
      return _0x488ab7(_0x4aba8b) || _0x8a49be(_0x4aba8b) || _0x4aba8b.constructor === {
        Buffer: function Buffer(arg, encodingOrOffset, length) {
          showFlaggedDeprecation();
          if (typeof arg === 'number') {
            if (typeof encodingOrOffset === 'string') {
              throw new ERR_INVALID_ARG_TYPE('string', 'string', arg);
            }
            return Buffer.alloc(arg);
          }
          return Buffer.from(arg, encodingOrOffset, length);
        },
        SlowBuffer: function deprecated(...args) {
          if (!process.noDeprecation) {
            emitDeprecationWarning();
          }
          if (new.target) {
            return ReflectConstruct(fn, args, new.target);
          }
          return ReflectApply(fn, this, args);
        },
        transcode: function transcode(source, fromEncoding, toEncoding) {
          if (!isUint8Array(source)) {
            throw new ERR_INVALID_ARG_TYPE('source', [
              'Buffer',
              'Uint8Array'
            ], source);
          }
          if (source.length === 0)
            return new FastBuffer();
          fromEncoding = normalizeEncoding(fromEncoding) || fromEncoding;
          toEncoding = normalizeEncoding(toEncoding) || toEncoding;
          const result = _transcode(source, fromEncoding, toEncoding);
          if (typeof result !== 'number')
            return result;
          const code = icuErrName(result);
          const err = genericNodeError(`Unable to transcode Buffer [${ code }]`, {
            code: code,
            errno: result
          });
          throw err;
        },
        isUtf8: function isUtf8(input) {
          if (isTypedArray(input) || isAnyArrayBuffer(input)) {
            return bindingIsUtf8(input);
          }
          throw new ERR_INVALID_ARG_TYPE('input', [
            'ArrayBuffer',
            'Buffer',
            'TypedArray'
          ], input);
        },
        isAscii: function isAscii(input) {
          if (isTypedArray(input) || isAnyArrayBuffer(input)) {
            return bindingIsAscii(input);
          }
          throw new ERR_INVALID_ARG_TYPE('input', [
            'ArrayBuffer',
            'Buffer',
            'TypedArray'
          ], input);
        },
        kMaxLength: 9007199254740991,
        kStringMaxLength: 536870888,
        btoa: function btoa(input) {
          if (arguments.length === 0) {
            throw new ERR_MISSING_ARGS('input');
          }
          const result = _btoa(`${ input }`);
          if (result === -1) {
            throw lazyDOMException('Invalid character', 'InvalidCharacterError');
          }
          return result;
        },
        atob: function atob(input) {
          if (arguments.length === 0) {
            throw new ERR_MISSING_ARGS('input');
          }
          const result = _atob(`${ input }`);
          switch (result) {
          case -2:
            throw lazyDOMException('Invalid character', 'InvalidCharacterError');
          case -1:
            throw lazyDOMException('The string to be decoded is not correctly encoded.', 'InvalidCharacterError');
          case -3:
            assert.fail('Unrecognized simdutf error');
            break;
          default:
            return result;
          }
        },
        constants: {
          MAX_LENGTH: 9007199254740991,
          MAX_STRING_LENGTH: 536870888
        },
        INSPECT_MAX_BYTES: 50,
        Blob: class Blob {
          constructor(sources = [], options) {
            markTransferMode(this, true, false);
            const sources_ = sourcesConverter(sources);
            validateDictionary(options, 'options');
            let {endings = 'transparent', type = ''} = options ?? kEmptyObject;
            endings = `${ endings }`;
            if (endings !== 'transparent' && endings !== 'native')
              throw new ERR_INVALID_ARG_VALUE('options.endings', endings);
            let length = 0;
            for (let i = 0; i < sources_.length; ++i) {
              const {
                0: len,
                1: src
              } = getSource(sources_[i], endings);
              length += len;
              sources_[i] = src;
            }
            if (length > kMaxLength)
              throw new ERR_BUFFER_TOO_LARGE(kMaxLength);
            this[kHandle] = _createBlob(sources_, length);
            this[kLength] = length;
            type = `${ type }`;
            this[kType] = RegExpPrototypeExec(disallowedTypeCharacters, type) !== null ? '' : StringPrototypeToLowerCase(type);
          }
          [kInspect](depth, options) {
            if (depth < 0)
              return this;
            const opts = {
              ...options,
              depth: options.depth == null ? null : options.depth - 1
            };
            return `Blob ${ inspect({
              size: this.size,
              type: this.type
            }, opts) }`;
          }
          [kClone]() {
            if (this[kNotCloneable]) {
              throw new ERR_INVALID_STATE.TypeError('File-backed Blobs are not cloneable');
            }
            const handle = this[kHandle];
            const type = this[kType];
            const length = this[kLength];
            return {
              data: {
                handle,
                type,
                length
              },
              deserializeInfo: 'internal/blob:Blob'
            };
          }
          [kDeserialize]({handle, type, length}) {
            this[kHandle] = handle;
            this[kType] = type;
            this[kLength] = length;
          }
          get type() {
            if (!isBlob(this))
              throw new ERR_INVALID_THIS('Blob');
            return this[kType];
          }
          get size() {
            if (!isBlob(this))
              throw new ERR_INVALID_THIS('Blob');
            return this[kLength];
          }
          slice(start = 0, end = this[kLength], contentType = '') {
            if (!isBlob(this))
              throw new ERR_INVALID_THIS('Blob');
            start = converters['long long'](start, {
              __proto__: null,
              context: 'start'
            });
            end = converters['long long'](end, {
              __proto__: null,
              context: 'end'
            });
            if (start < 0) {
              start = MathMax(this[kLength] + start, 0);
            } else {
              start = MathMin(start, this[kLength]);
            }
            if (end < 0) {
              end = MathMax(this[kLength] + end, 0);
            } else {
              end = MathMin(end, this[kLength]);
            }
            contentType = `${ contentType }`;
            if (RegExpPrototypeExec(disallowedTypeCharacters, contentType) !== null) {
              contentType = '';
            } else {
              contentType = StringPrototypeToLowerCase(contentType);
            }
            const span = MathMax(end - start, 0);
            return createBlob(this[kHandle].slice(start, start + span), span, contentType);
          }
          arrayBuffer() {
            if (!isBlob(this))
              return PromiseReject(new ERR_INVALID_THIS('Blob'));
            return arrayBuffer(this);
          }
          text() {
            if (!isBlob(this))
              return PromiseReject(new ERR_INVALID_THIS('Blob'));
            dec ??= new TextDecoder();
            return PromisePrototypeThen(arrayBuffer(this), buffer => dec.decode(buffer));
          }
          bytes() {
            if (!isBlob(this))
              return PromiseReject(new ERR_INVALID_THIS('Blob'));
            return PromisePrototypeThen(arrayBuffer(this), buffer => new Uint8Array(buffer));
          }
          stream() {
            if (!isBlob(this))
              throw new ERR_INVALID_THIS('Blob');
            return createBlobReaderStream(this[kHandle].getReader());
          }
          textStream() {
            if (!isBlob(this))
              throw new ERR_INVALID_THIS('Blob');
            const stream = createBlobReaderStream(this[kHandle].getReader());
            const decoder = lazyTextDecoderStream();
            return stream.pipeThrough(decoder);
          }
        },
        resolveObjectURL: function resolveObjectURL(url) {
          url = `${ url }`;
          try {
            const parsed = new URL(url);
            const split = StringPrototypeSplit(parsed.pathname, ':', 3);
            if (split.length !== 2)
              return;
            if (base !== 'nodedata')
              return;
            const ret = getDataObject(id);
            if (ret === undefined)
              return;
            if (handle !== undefined)
              return createBlob(handle, length, type);
          } catch {
          }
        },
        File: class File extends Blob {
          constructor(fileBits, fileName, options = kEmptyObject) {
            if (arguments.length < 2) {
              throw new ERR_MISSING_ARGS('fileBits', 'fileName');
            }
            super(fileBits, options);
            let {lastModified} = options ?? kEmptyObject;
            if (lastModified !== undefined) {
              lastModified = +lastModified;
              if (NumberIsNaN(lastModified)) {
                lastModified = 0;
              }
            } else {
              lastModified = DateNow();
            }
            this[kState] = new FileState(StringPrototypeToWellFormed(`${ fileName }`), lastModified);
          }
          get name() {
            if (!isFile(this))
              throw new ERR_INVALID_THIS('File');
            return this[kState].name;
          }
          get lastModified() {
            if (!isFile(this))
              throw new ERR_INVALID_THIS('File');
            return this[kState].lastModified;
          }
          [kInspect](depth, options) {
            if (depth < 0) {
              return this;
            }
            const opts = {
              ...options,
              depth: options.depth == null ? null : options.depth - 1
            };
            return `File ${ inspect({
              size: this.size,
              type: this.type,
              name: this[kState].name,
              lastModified: this[kState].lastModified
            }, opts) }`;
          }
          [kClone]() {
            return {
              data: {
                ...super[kClone]().data,
                ...this[kState]
              },
              deserializeInfo: 'internal/file:TransferableFile'
            };
          }
          [kDeserialize](data) {
            super[kDeserialize](data);
            this[kState] = new FileState(data.name, data.lastModified);
          }
        }
      }.Buffer ? { _options: undefined }.update(_0x2a2934(_0x4aba8b)).digest('hex') : _0x1141a1(_0x4aba8b);
    };
    return _0x37396f;
  };
  var _0x39e17d = function (_0x4ec27f) {
    return function (_0x3d9067, _0x12bb61) {
      return new _0x5c2017(_0x3d9067, true).update(_0x12bb61)[_0x4ec27f]();
    };
  };
  var _0x62e7c0 = function () {
    var _0x5a587b = _0x39e17d('hex');
    _0x5a587b.create = function (_0x514c09) {
      return new _0x5c2017(_0x514c09);
    };
    _0x5a587b.update = function (_0x345b07, _0x3fc621) {
      return _0x5a587b.create(_0x345b07).update(_0x3fc621);
    };
    for (var _0x340f05 = 0; _0x340f05 < _0x5d5d48.length; ++_0x340f05) {
      var _0xe41e8b = _0x5d5d48[_0x340f05];
      _0x5a587b[_0xe41e8b] = _0x39e17d(_0xe41e8b);
    }
    return _0x5a587b;
  };
  function _0x5091ec(_0x5cf135) {
    _0x5cf135 ? (_0x19a1f8[0] = _0x19a1f8[16] = _0x19a1f8[1] = _0x19a1f8[2] = _0x19a1f8[3] = _0x19a1f8[4] = _0x19a1f8[5] = _0x19a1f8[6] = _0x19a1f8[7] = _0x19a1f8[8] = _0x19a1f8[9] = _0x19a1f8[10] = _0x19a1f8[11] = _0x19a1f8[12] = _0x19a1f8[13] = _0x19a1f8[14] = _0x19a1f8[15] = 0, this.blocks = _0x19a1f8) : this.blocks = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ];
    this.h0 = 1732584193;
    this.h1 = 4023233417;
    this.h2 = 2562383102;
    this.h3 = 271733878;
    this.h4 = 3285377520;
    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }
  _0x5091ec.prototype.update = function (_0x90142f) {
    if (this.finalized)
      throw new Error('finalize already called');
    var _0x4a22ae = _0x262313(_0x90142f);
    _0x90142f = _0x4a22ae[0];
    var _0xbd4537 = _0x4a22ae[1];
    var _0x34cc73;
    var _0x2b2aa9 = 0;
    var _0x39e05c;
    var _0xf0ef31 = _0x90142f.length || 0;
    var _0x1f8729 = this.blocks;
    while (_0x2b2aa9 < _0xf0ef31) {
      if (this.hashed) {
        this.hashed = false;
        _0x1f8729[0] = this.block;
        this.block = _0x1f8729[16] = _0x1f8729[1] = _0x1f8729[2] = _0x1f8729[3] = _0x1f8729[4] = _0x1f8729[5] = _0x1f8729[6] = _0x1f8729[7] = _0x1f8729[8] = _0x1f8729[9] = _0x1f8729[10] = _0x1f8729[11] = _0x1f8729[12] = _0x1f8729[13] = _0x1f8729[14] = _0x1f8729[15] = 0;
      }
      if (_0x4a22ae[1])
        for (_0x39e05c = this.start; _0x2b2aa9 < _0xf0ef31 && _0x39e05c < 64; ++_0x2b2aa9) {
          _0x34cc73 = _0x90142f.charCodeAt(_0x2b2aa9);
          if (_0x34cc73 < 128)
            _0x1f8729[_0x39e05c >>> 2] |= _0x34cc73 << _0x4946e5[_0x39e05c++ & 3];
          else {
            if (_0x34cc73 < 2048) {
              _0x1f8729[_0x39e05c >>> 2] |= (192 | _0x34cc73 >>> 6) << _0x4946e5[_0x39e05c++ & 3];
              _0x1f8729[_0x39e05c >>> 2] |= (128 | _0x34cc73 & 63) << _0x4946e5[_0x39e05c++ & 3];
            } else
              _0x34cc73 < 55296 || _0x34cc73 >= 57344 ? (_0x1f8729[_0x39e05c >>> 2] |= (224 | _0x34cc73 >>> 12) << _0x4946e5[_0x39e05c++ & 3], _0x1f8729[_0x39e05c >>> 2] |= (128 | _0x34cc73 >>> 6 & 63) << _0x4946e5[_0x39e05c++ & 3], _0x1f8729[_0x39e05c >>> 2] |= (128 | _0x34cc73 & 63) << _0x4946e5[_0x39e05c++ & 3]) : (_0x34cc73 = 65536 + ((_0x34cc73 & 1023) << 10 | _0x90142f.charCodeAt(++_0x2b2aa9) & 1023), _0x1f8729[_0x39e05c >>> 2] |= (240 | _0x34cc73 >>> 18) << _0x4946e5[_0x39e05c++ & 3], _0x1f8729[_0x39e05c >>> 2] |= (128 | _0x34cc73 >>> 12 & 63) << _0x4946e5[_0x39e05c++ & 3], _0x1f8729[_0x39e05c >>> 2] |= (128 | _0x34cc73 >>> 6 & 63) << _0x4946e5[_0x39e05c++ & 3], _0x1f8729[_0x39e05c >>> 2] |= (128 | _0x34cc73 & 63) << _0x4946e5[_0x39e05c++ & 3]);
          }
        }
      else
        for (_0x39e05c = this.start; _0x2b2aa9 < _0xf0ef31 && _0x39e05c < 64; ++_0x2b2aa9) {
          _0x1f8729[_0x39e05c >>> 2] |= _0x90142f[_0x2b2aa9] << _0x4946e5[_0x39e05c++ & 3];
        }
      this.lastByteIndex = _0x39e05c;
      this.bytes += _0x39e05c - this.start;
      _0x39e05c >= 64 ? (this.block = _0x1f8729[16], this.start = _0x39e05c - 64, this.hash(), this.hashed = true) : this.start = _0x39e05c;
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };
  _0x5091ec.prototype.finalize = function () {
    if (this.finalized)
      return;
    this.finalized = true;
    var _0x450e3e = this.blocks;
    var _0x3e88f5 = this.lastByteIndex;
    _0x450e3e[16] = this.block;
    _0x450e3e[this.lastByteIndex >>> 2] |= _0x1e3fb0[this.lastByteIndex & 3];
    this.block = _0x450e3e[16];
    if (this.lastByteIndex >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      _0x450e3e[0] = this.block;
      _0x450e3e[16] = _0x450e3e[1] = _0x450e3e[2] = _0x450e3e[3] = _0x450e3e[4] = _0x450e3e[5] = _0x450e3e[6] = _0x450e3e[7] = _0x450e3e[8] = _0x450e3e[9] = _0x450e3e[10] = _0x450e3e[11] = _0x450e3e[12] = _0x450e3e[13] = _0x450e3e[14] = _0x450e3e[15] = 0;
    }
    _0x450e3e[14] = this.hBytes << 3 | this.bytes >>> 29;
    _0x450e3e[15] = this.bytes << 3;
    this.hash();
  };
  _0x5091ec.prototype.hash = function () {
    var _0x567be8 = this.h0;
    var _0x37c558 = this.h1;
    var _0x4bd956 = this.h2;
    var _0x85c54c = this.h3;
    var _0x96ffdd = this.h4;
    var _0x4ccac2;
    var _0x1f8468;
    var _0x27228d;
    var _0x59df97 = this.blocks;
    for (_0x1f8468 = 16; _0x1f8468 < 80; ++_0x1f8468) {
      _0x27228d = _0x59df97[_0x1f8468 - 3] ^ _0x59df97[_0x1f8468 - 8] ^ _0x59df97[_0x1f8468 - 14] ^ _0x59df97[_0x1f8468 - 16];
      _0x59df97[_0x1f8468] = _0x27228d << 1 | _0x27228d >>> 31;
    }
    for (_0x1f8468 = 0; _0x1f8468 < 20; _0x1f8468 += 5) {
      _0x4ccac2 = _0x37c558 & _0x4bd956 | ~_0x37c558 & _0x85c54c;
      _0x27228d = _0x567be8 << 5 | _0x567be8 >>> 27;
      _0x96ffdd = _0x27228d + _0x4ccac2 + _0x96ffdd + 1518500249 + _0x59df97[_0x1f8468] << 0;
      _0x37c558 = _0x37c558 << 30 | _0x37c558 >>> 2;
      _0x4ccac2 = _0x567be8 & _0x37c558 | ~_0x567be8 & _0x4bd956;
      _0x27228d = _0x96ffdd << 5 | _0x96ffdd >>> 27;
      _0x85c54c = _0x27228d + _0x4ccac2 + _0x85c54c + 1518500249 + _0x59df97[_0x1f8468 + 1] << 0;
      _0x567be8 = _0x567be8 << 30 | _0x567be8 >>> 2;
      _0x4ccac2 = _0x96ffdd & _0x567be8 | ~_0x96ffdd & _0x37c558;
      _0x27228d = _0x85c54c << 5 | _0x85c54c >>> 27;
      _0x4bd956 = _0x27228d + _0x4ccac2 + _0x4bd956 + 1518500249 + _0x59df97[_0x1f8468 + 2] << 0;
      _0x96ffdd = _0x96ffdd << 30 | _0x96ffdd >>> 2;
      _0x4ccac2 = _0x85c54c & _0x96ffdd | ~_0x85c54c & _0x567be8;
      _0x27228d = _0x4bd956 << 5 | _0x4bd956 >>> 27;
      _0x37c558 = _0x27228d + _0x4ccac2 + _0x37c558 + 1518500249 + _0x59df97[_0x1f8468 + 3] << 0;
      _0x85c54c = _0x85c54c << 30 | _0x85c54c >>> 2;
      _0x4ccac2 = _0x4bd956 & _0x85c54c | ~_0x4bd956 & _0x96ffdd;
      _0x27228d = _0x37c558 << 5 | _0x37c558 >>> 27;
      _0x567be8 = _0x27228d + _0x4ccac2 + _0x567be8 + 1518500249 + _0x59df97[_0x1f8468 + 4] << 0;
      _0x4bd956 = _0x4bd956 << 30 | _0x4bd956 >>> 2;
    }
    for (; _0x1f8468 < 40; _0x1f8468 += 5) {
      _0x4ccac2 = _0x37c558 ^ _0x4bd956 ^ _0x85c54c;
      _0x27228d = _0x567be8 << 5 | _0x567be8 >>> 27;
      _0x96ffdd = _0x27228d + _0x4ccac2 + _0x96ffdd + 1859775393 + _0x59df97[_0x1f8468] << 0;
      _0x37c558 = _0x37c558 << 30 | _0x37c558 >>> 2;
      _0x4ccac2 = _0x567be8 ^ _0x37c558 ^ _0x4bd956;
      _0x27228d = _0x96ffdd << 5 | _0x96ffdd >>> 27;
      _0x85c54c = _0x27228d + _0x4ccac2 + _0x85c54c + 1859775393 + _0x59df97[_0x1f8468 + 1] << 0;
      _0x567be8 = _0x567be8 << 30 | _0x567be8 >>> 2;
      _0x4ccac2 = _0x96ffdd ^ _0x567be8 ^ _0x37c558;
      _0x27228d = _0x85c54c << 5 | _0x85c54c >>> 27;
      _0x4bd956 = _0x27228d + _0x4ccac2 + _0x4bd956 + 1859775393 + _0x59df97[_0x1f8468 + 2] << 0;
      _0x96ffdd = _0x96ffdd << 30 | _0x96ffdd >>> 2;
      _0x4ccac2 = _0x85c54c ^ _0x96ffdd ^ _0x567be8;
      _0x27228d = _0x4bd956 << 5 | _0x4bd956 >>> 27;
      _0x37c558 = _0x27228d + _0x4ccac2 + _0x37c558 + 1859775393 + _0x59df97[_0x1f8468 + 3] << 0;
      _0x85c54c = _0x85c54c << 30 | _0x85c54c >>> 2;
      _0x4ccac2 = _0x4bd956 ^ _0x85c54c ^ _0x96ffdd;
      _0x27228d = _0x37c558 << 5 | _0x37c558 >>> 27;
      _0x567be8 = _0x27228d + _0x4ccac2 + _0x567be8 + 1859775393 + _0x59df97[_0x1f8468 + 4] << 0;
      _0x4bd956 = _0x4bd956 << 30 | _0x4bd956 >>> 2;
    }
    for (; _0x1f8468 < 60; _0x1f8468 += 5) {
      _0x4ccac2 = _0x37c558 & _0x4bd956 | _0x37c558 & _0x85c54c | _0x4bd956 & _0x85c54c;
      _0x27228d = _0x567be8 << 5 | _0x567be8 >>> 27;
      _0x96ffdd = _0x27228d + _0x4ccac2 + _0x96ffdd - 1894007588 + _0x59df97[_0x1f8468] << 0;
      _0x37c558 = _0x37c558 << 30 | _0x37c558 >>> 2;
      _0x4ccac2 = _0x567be8 & _0x37c558 | _0x567be8 & _0x4bd956 | _0x37c558 & _0x4bd956;
      _0x27228d = _0x96ffdd << 5 | _0x96ffdd >>> 27;
      _0x85c54c = _0x27228d + _0x4ccac2 + _0x85c54c - 1894007588 + _0x59df97[_0x1f8468 + 1] << 0;
      _0x567be8 = _0x567be8 << 30 | _0x567be8 >>> 2;
      _0x4ccac2 = _0x96ffdd & _0x567be8 | _0x96ffdd & _0x37c558 | _0x567be8 & _0x37c558;
      _0x27228d = _0x85c54c << 5 | _0x85c54c >>> 27;
      _0x4bd956 = _0x27228d + _0x4ccac2 + _0x4bd956 - 1894007588 + _0x59df97[_0x1f8468 + 2] << 0;
      _0x96ffdd = _0x96ffdd << 30 | _0x96ffdd >>> 2;
      _0x4ccac2 = _0x85c54c & _0x96ffdd | _0x85c54c & _0x567be8 | _0x96ffdd & _0x567be8;
      _0x27228d = _0x4bd956 << 5 | _0x4bd956 >>> 27;
      _0x37c558 = _0x27228d + _0x4ccac2 + _0x37c558 - 1894007588 + _0x59df97[_0x1f8468 + 3] << 0;
      _0x85c54c = _0x85c54c << 30 | _0x85c54c >>> 2;
      _0x4ccac2 = _0x4bd956 & _0x85c54c | _0x4bd956 & _0x96ffdd | _0x85c54c & _0x96ffdd;
      _0x27228d = _0x37c558 << 5 | _0x37c558 >>> 27;
      _0x567be8 = _0x27228d + _0x4ccac2 + _0x567be8 - 1894007588 + _0x59df97[_0x1f8468 + 4] << 0;
      _0x4bd956 = _0x4bd956 << 30 | _0x4bd956 >>> 2;
    }
    for (; _0x1f8468 < 80; _0x1f8468 += 5) {
      _0x4ccac2 = _0x37c558 ^ _0x4bd956 ^ _0x85c54c;
      _0x27228d = _0x567be8 << 5 | _0x567be8 >>> 27;
      _0x96ffdd = _0x27228d + _0x4ccac2 + _0x96ffdd - 899497514 + _0x59df97[_0x1f8468] << 0;
      _0x37c558 = _0x37c558 << 30 | _0x37c558 >>> 2;
      _0x4ccac2 = _0x567be8 ^ _0x37c558 ^ _0x4bd956;
      _0x27228d = _0x96ffdd << 5 | _0x96ffdd >>> 27;
      _0x85c54c = _0x27228d + _0x4ccac2 + _0x85c54c - 899497514 + _0x59df97[_0x1f8468 + 1] << 0;
      _0x567be8 = _0x567be8 << 30 | _0x567be8 >>> 2;
      _0x4ccac2 = _0x96ffdd ^ _0x567be8 ^ _0x37c558;
      _0x27228d = _0x85c54c << 5 | _0x85c54c >>> 27;
      _0x4bd956 = _0x27228d + _0x4ccac2 + _0x4bd956 - 899497514 + _0x59df97[_0x1f8468 + 2] << 0;
      _0x96ffdd = _0x96ffdd << 30 | _0x96ffdd >>> 2;
      _0x4ccac2 = _0x85c54c ^ _0x96ffdd ^ _0x567be8;
      _0x27228d = _0x4bd956 << 5 | _0x4bd956 >>> 27;
      _0x37c558 = _0x27228d + _0x4ccac2 + _0x37c558 - 899497514 + _0x59df97[_0x1f8468 + 3] << 0;
      _0x85c54c = _0x85c54c << 30 | _0x85c54c >>> 2;
      _0x4ccac2 = _0x4bd956 ^ _0x85c54c ^ _0x96ffdd;
      _0x27228d = _0x37c558 << 5 | _0x37c558 >>> 27;
      _0x567be8 = _0x27228d + _0x4ccac2 + _0x567be8 - 899497514 + _0x59df97[_0x1f8468 + 4] << 0;
      _0x4bd956 = _0x4bd956 << 30 | _0x4bd956 >>> 2;
    }
    this.h0 = this.h0 + _0x567be8 << 0;
    this.h1 = this.h1 + _0x37c558 << 0;
    this.h2 = this.h2 + _0x4bd956 << 0;
    this.h3 = this.h3 + _0x85c54c << 0;
    this.h4 = this.h4 + _0x96ffdd << 0;
  };
  _0x5091ec.prototype.hex = function () {
    this.finalize();
    var _0x21c7ef = this.h0;
    var _0x4e2a48 = this.h1;
    var _0x2341ea = this.h2;
    var _0x31301b = this.h3;
    var _0x4e5eb0 = this.h4;
    return _0xaba0db[this.h0 >>> 28 & 15] + _0xaba0db[this.h0 >>> 24 & 15] + _0xaba0db[this.h0 >>> 20 & 15] + _0xaba0db[this.h0 >>> 16 & 15] + _0xaba0db[this.h0 >>> 12 & 15] + _0xaba0db[this.h0 >>> 8 & 15] + _0xaba0db[this.h0 >>> 4 & 15] + _0xaba0db[this.h0 & 15] + _0xaba0db[this.h1 >>> 28 & 15] + _0xaba0db[this.h1 >>> 24 & 15] + _0xaba0db[this.h1 >>> 20 & 15] + _0xaba0db[this.h1 >>> 16 & 15] + _0xaba0db[this.h1 >>> 12 & 15] + _0xaba0db[this.h1 >>> 8 & 15] + _0xaba0db[this.h1 >>> 4 & 15] + _0xaba0db[this.h1 & 15] + _0xaba0db[this.h2 >>> 28 & 15] + _0xaba0db[this.h2 >>> 24 & 15] + _0xaba0db[this.h2 >>> 20 & 15] + _0xaba0db[this.h2 >>> 16 & 15] + _0xaba0db[this.h2 >>> 12 & 15] + _0xaba0db[this.h2 >>> 8 & 15] + _0xaba0db[this.h2 >>> 4 & 15] + _0xaba0db[this.h2 & 15] + _0xaba0db[this.h3 >>> 28 & 15] + _0xaba0db[this.h3 >>> 24 & 15] + _0xaba0db[this.h3 >>> 20 & 15] + _0xaba0db[this.h3 >>> 16 & 15] + _0xaba0db[this.h3 >>> 12 & 15] + _0xaba0db[this.h3 >>> 8 & 15] + _0xaba0db[this.h3 >>> 4 & 15] + _0xaba0db[this.h3 & 15] + _0xaba0db[this.h4 >>> 28 & 15] + _0xaba0db[this.h4 >>> 24 & 15] + _0xaba0db[this.h4 >>> 20 & 15] + _0xaba0db[this.h4 >>> 16 & 15] + _0xaba0db[this.h4 >>> 12 & 15] + _0xaba0db[this.h4 >>> 8 & 15] + _0xaba0db[this.h4 >>> 4 & 15] + _0xaba0db[this.h4 & 15];
  };
  _0x5091ec.prototype.toString = _0x5091ec.prototype.hex;
  _0x5091ec.prototype.digest = function () {
    this.finalize();
    var _0x1a216f = this.h0;
    var _0x8b64b6 = this.h1;
    var _0x56623a = this.h2;
    var _0x3ce23b = this.h3;
    var _0x1ce3ca = this.h4;
    return [
      this.h0 >>> 24 & 255,
      this.h0 >>> 16 & 255,
      this.h0 >>> 8 & 255,
      this.h0 & 255,
      this.h1 >>> 24 & 255,
      this.h1 >>> 16 & 255,
      this.h1 >>> 8 & 255,
      this.h1 & 255,
      this.h2 >>> 24 & 255,
      this.h2 >>> 16 & 255,
      this.h2 >>> 8 & 255,
      this.h2 & 255,
      this.h3 >>> 24 & 255,
      this.h3 >>> 16 & 255,
      this.h3 >>> 8 & 255,
      this.h3 & 255,
      this.h4 >>> 24 & 255,
      this.h4 >>> 16 & 255,
      this.h4 >>> 8 & 255,
      this.h4 & 255
    ];
  };
  _0x5091ec.prototype.array = _0x5091ec.prototype.digest;
  _0x5091ec.prototype.arrayBuffer = function () {
    this.finalize();
    var _0x11ac84 = new ArrayBuffer(20);
    var _0x5e9ed8 = new DataView(_0x11ac84);
    _0x5e9ed8.setUint32(0, this.h0);
    _0x5e9ed8.setUint32(4, this.h1);
    _0x5e9ed8.setUint32(8, this.h2);
    _0x5e9ed8.setUint32(12, this.h3);
    _0x5e9ed8.setUint32(16, this.h4);
    return _0x11ac84;
  };
  function _0x5c2017(_0x169909, _0x2f06bb) {
    var _0x952fb6;
    var _0xb7c98d = _0x262313(_0x169909);
    _0x169909 = _0xb7c98d[0];
    if (_0xb7c98d[1]) {
      var _0x339869 = [];
      var _0x4ffc0d = _0x169909.length;
      var _0x3d0116 = 0;
      var _0x206e82;
      for (_0x952fb6 = 0; _0x952fb6 < _0x169909.length; ++_0x952fb6) {
        _0x206e82 = _0x169909.charCodeAt(_0x952fb6);
        if (_0x206e82 < 128)
          _0x339869[_0x3d0116++] = _0x206e82;
        else {
          if (_0x206e82 < 2048) {
            _0x339869[_0x3d0116++] = 192 | _0x206e82 >>> 6;
            _0x339869[_0x3d0116++] = 128 | _0x206e82 & 63;
          } else
            _0x206e82 < 55296 || _0x206e82 >= 57344 ? (_0x339869[_0x3d0116++] = 224 | _0x206e82 >>> 12, _0x339869[_0x3d0116++] = 128 | _0x206e82 >>> 6 & 63, _0x339869[_0x3d0116++] = 128 | _0x206e82 & 63) : (_0x206e82 = 65536 + ((_0x206e82 & 1023) << 10 | _0x169909.charCodeAt(++_0x952fb6) & 1023), _0x339869[_0x3d0116++] = 240 | _0x206e82 >>> 18, _0x339869[_0x3d0116++] = 128 | _0x206e82 >>> 12 & 63, _0x339869[_0x3d0116++] = 128 | _0x206e82 >>> 6 & 63, _0x339869[_0x3d0116++] = 128 | _0x206e82 & 63);
        }
      }
      _0x169909 = _0x339869;
    }
    if (_0x169909.length > 64) {
      _0x169909 = new _0x5091ec(true).update(_0x169909).array();
    }
    var _0x1f9545 = [];
    var _0x2d2db0 = [];
    for (_0x952fb6 = 0; _0x952fb6 < 64; ++_0x952fb6) {
      var _0x1d9e7d = _0x169909[_0x952fb6] || 0;
      _0x1f9545[_0x952fb6] = 92 ^ _0x1d9e7d;
      _0x2d2db0[_0x952fb6] = 54 ^ _0x1d9e7d;
    }
    _0x5091ec(_0x2f06bb);
    this.update(_0x2d2db0);
    this.oKeyPad = _0x1f9545;
    this.inner = true;
    this.sharedMemory = _0x2f06bb;
  }
  _0x5c2017.prototype = new _0x5091ec();
  _0x5c2017.prototype.finalize = function () {
    _0x5091ec.prototype.finalize();
    if (this.inner) {
      this.inner = false;
      var _0xd0f157 = this.array();
      _0x5091ec(this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(_0xd0f157);
      _0x5091ec.prototype.finalize();
    }
  };
  var _0x2b4d32 = _0x49fe61();
  _0x2b4d32.sha1 = _0x2b4d32;
  _0x2b4d32.sha1.hmac = _0x62e7c0();
  _0x3fd28c ? module.exports = _0x2b4d32 : (_0x214521.sha1 = _0x2b4d32, _0x1531e7 && define(function () {
    return _0x2b4d32;
  }));
}());
function _0x1592(_0xbdc21e, _0x1c589f) {
  _0xbdc21e = _0xbdc21e - 102;
  var _0x138993 = _0x1389();
  var _0x159221 = _0x138993[_0xbdc21e];
  return _0x138993[_0xbdc21e];
}
function _0x1389() {
  var _0xb850b = [
    'hBytes',
    'JS_SHA1_NO_WINDOW',
    '384223VfvoHO',
    'finalize already called',
    'blocks',
    'array',
    'node',
    'createHash',
    'charCodeAt',
    'isArray',
    'input is invalid type',
    'constructor',
    'finalize',
    '2444240PjpXoi',
    '2951352LFbJIg',
    'function',
    'first',
    'crypto',
    'toString',
    'sha1',
    'from',
    'prototype',
    'block',
    'object',
    '393303UGyEBk',
    'hashed',
    'JS_SHA1_NO_BUFFER_FROM',
    'lastByteIndex',
    'sharedMemory',
    'create',
    'undefined',
    'buffer',
    'exports',
    'inner',
    'hex',
    'arrayBuffer',
    '8SRbBrZ',
    'versions',
    'hash',
    '2318964mcBHPK',
    'string',
    '0123456789abcdef',
    '664440hGmGpp',
    '456275oAeheY',
    'call',
    'finalized',
    'bytes',
    'start',
    'digest',
    'JS_SHA1_NO_NODE_JS',
    'JS_SHA1_NO_COMMON_JS',
    'hmac',
    'split',
    'update',
    'length',
    'setUint32'
  ];
  _0x1389 = function () {
    return _0xb850b;
  };
  return _0x1389();
}