/*
 * [js-sha1]{@link https://github.com/emn178/js-sha1}
 *
 * @version 0.7.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2024
 * @license MIT
 */
(function () {
  'use strict';
  var _0xbdc21e = 'input is invalid type';
  var _0x1c589f = 'finalize already called';
  var _0x138993 = typeof window === 'object';
  var _0x159221 = _0x138993 ? window : {};
  if (_0x159221.JS_SHA1_NO_WINDOW) {
    _0x138993 = false;
  }
  var _0x2e1b7a = !_0x138993 && typeof self === 'object';
  var _0x2249df = !_0x159221.JS_SHA1_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (_0x2249df) {
    _0x159221 = global;
  } else if (_0x2e1b7a) {
    _0x159221 = self;
  }
  var _0x280cfb = !_0x159221.JS_SHA1_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var _0x25b503 = typeof define === 'function' && define.amd;
  var _0x152dfb = !_0x159221.JS_SHA1_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var _0x380157 = [
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
  var _0x388685 = [
    -2147483648,
    8388608,
    32768,
    128
  ];
  var _0x20914e = [
    24,
    16,
    8,
    0
  ];
  var _0x28800e = [
    'hex',
    'array',
    'digest',
    'arrayBuffer'
  ];
  var _0x214521 = [];
  var _0x33e190 = Array.isArray;
  if (_0x159221.JS_SHA1_NO_NODE_JS || !_0x33e190) {
    _0x33e190 = function (_0x8a49be) {
      return Object.prototype.toString.call(_0x8a49be) === '[object Array]';
    };
  }
  var _0x2bc898 = ArrayBuffer.isView;
  if (_0x152dfb && (_0x159221.JS_SHA1_NO_ARRAY_BUFFER_IS_VIEW || !_0x2bc898)) {
    _0x2bc898 = function (_0x262313) {
      return typeof _0x262313 === 'object' && _0x262313.buffer && _0x262313.buffer.constructor === ArrayBuffer;
    };
  }
  var _0x3fd28c = function (_0x473894) {
    var _0x49fe61 = typeof _0x473894;
    if (_0x49fe61 === 'string') {
      return [
        _0x473894,
        true
      ];
    }
    if (_0x49fe61 !== 'object' || _0x473894 === null) {
      throw new Error('input is invalid type');
    }
    if (_0x152dfb && _0x473894.constructor === ArrayBuffer) {
      return [
        new Uint8Array(_0x473894),
        false
      ];
    }
    if (!_0x33e190(_0x473894) && !_0x2bc898(_0x473894)) {
      throw new Error('input is invalid type');
    }
    return [
      _0x473894,
      false
    ];
  };
  var _0x1531e7 = function (_0x260ef6) {
    return function (_0x39e17d) {
      return new _0x5d5d48(true).update(_0x39e17d)[_0x260ef6]();
    };
  };
  var _0x363951 = function () {
    var _0x62e7c0 = _0x1531e7('hex');
    if (_0x2249df) {
      _0x62e7c0 = _0xaba0db(_0x62e7c0);
    }
    _0x62e7c0.create = function () {
      return new _0x5d5d48();
    };
    _0x62e7c0.update = function (_0x2b4d32) {
      return _0x62e7c0.create().update(_0x2b4d32);
    };
    for (var _0x5091ec = 0; _0x5091ec < _0x28800e.length; ++_0x5091ec) {
      var _0x5c2017 = _0x28800e[_0x5091ec];
      _0x62e7c0[_0x5c2017] = _0x1531e7(_0x5c2017);
    }
    return _0x62e7c0;
  };
  var _0xaba0db = function (_0x5d28e1) {
    var _0x381b00 = require('crypto');
    var _0x27f5de = {
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
    var _0x39a30f;
    if ({
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
      }.Buffer.from && !_0x159221.JS_SHA1_NO_BUFFER_FROM) {
      _0x39a30f = {
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
      }.Buffer.from;
    } else {
      _0x39a30f = function (_0xb64afc) {
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
        }.Buffer(_0xb64afc);
      };
    }
    var _0x5c2a87 = function (_0x868b8) {
      if (typeof _0x868b8 === 'string') {
        return { _options: undefined }.update(_0x868b8, 'utf8').digest('hex');
      } else {
        if (_0x868b8 === null || _0x868b8 === undefined) {
          throw new Error('input is invalid type');
        } else if (_0x868b8.constructor === ArrayBuffer) {
          _0x868b8 = new Uint8Array(_0x868b8);
        }
      }
      if (_0x33e190(_0x868b8) || _0x2bc898(_0x868b8) || _0x868b8.constructor === {
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
        }.Buffer) {
        return { _options: undefined }.update(_0x39a30f(_0x868b8)).digest('hex');
      } else {
        return _0x5d28e1(_0x868b8);
      }
    };
    return _0x5c2a87;
  };
  var _0x1e3fb0 = function (_0x426bb0) {
    return function (_0x5a535e, _0x213e9d) {
      return new _0x19a1f8(_0x5a535e, true).update(_0x213e9d)[_0x426bb0]();
    };
  };
  var _0x4946e5 = function () {
    var _0x1141a1 = _0x1e3fb0('hex');
    _0x1141a1.create = function (_0x2a2934) {
      return new _0x19a1f8(_0x2a2934);
    };
    _0x1141a1.update = function (_0x37396f, _0x8990ff) {
      return _0x1141a1.create(_0x37396f).update(_0x8990ff);
    };
    for (var _0x583fd8 = 0; _0x583fd8 < _0x28800e.length; ++_0x583fd8) {
      var _0x65895d = _0x28800e[_0x583fd8];
      _0x1141a1[_0x65895d] = _0x1e3fb0(_0x65895d);
    }
    return _0x1141a1;
  };
  function _0x5d5d48(_0x4aba8b) {
    if (_0x4aba8b) {
      _0x214521[0] = _0x214521[16] = _0x214521[1] = _0x214521[2] = _0x214521[3] = _0x214521[4] = _0x214521[5] = _0x214521[6] = _0x214521[7] = _0x214521[8] = _0x214521[9] = _0x214521[10] = _0x214521[11] = _0x214521[12] = _0x214521[13] = _0x214521[14] = _0x214521[15] = 0;
      this.blocks = _0x214521;
    } else {
      this.blocks = [
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
    }
    this.h0 = 1732584193;
    this.h1 = 4023233417;
    this.h2 = 2562383102;
    this.h3 = 271733878;
    this.h4 = 3285377520;
    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }
  _0x5d5d48.prototype.update = function (_0x4ec27f) {
    if (this.finalized) {
      throw new Error('finalize already called');
    }
    var _0x3d9067 = _0x3fd28c(_0x4ec27f);
    _0x4ec27f = _0x3d9067[0];
    var _0x12bb61 = _0x3d9067[1];
    var _0x5a587b;
    var _0x340f05 = 0;
    var _0xe41e8b;
    var _0x514c09 = _0x4ec27f.length || 0;
    var _0x345b07 = this.blocks;
    while (_0x340f05 < _0x514c09) {
      if (this.hashed) {
        this.hashed = false;
        _0x345b07[0] = this.block;
        this.block = _0x345b07[16] = _0x345b07[1] = _0x345b07[2] = _0x345b07[3] = _0x345b07[4] = _0x345b07[5] = _0x345b07[6] = _0x345b07[7] = _0x345b07[8] = _0x345b07[9] = _0x345b07[10] = _0x345b07[11] = _0x345b07[12] = _0x345b07[13] = _0x345b07[14] = _0x345b07[15] = 0;
      }
      if (_0x3d9067[1]) {
        for (_0xe41e8b = this.start; _0x340f05 < _0x514c09 && _0xe41e8b < 64; ++_0x340f05) {
          _0x5a587b = _0x4ec27f.charCodeAt(_0x340f05);
          if (_0x5a587b < 128) {
            _0x345b07[_0xe41e8b >>> 2] |= _0x5a587b << _0x20914e[_0xe41e8b++ & 3];
          } else if (_0x5a587b < 2048) {
            _0x345b07[_0xe41e8b >>> 2] |= (192 | _0x5a587b >>> 6) << _0x20914e[_0xe41e8b++ & 3];
            _0x345b07[_0xe41e8b >>> 2] |= (128 | _0x5a587b & 63) << _0x20914e[_0xe41e8b++ & 3];
          } else if (_0x5a587b < 55296 || _0x5a587b >= 57344) {
            _0x345b07[_0xe41e8b >>> 2] |= (224 | _0x5a587b >>> 12) << _0x20914e[_0xe41e8b++ & 3];
            _0x345b07[_0xe41e8b >>> 2] |= (128 | _0x5a587b >>> 6 & 63) << _0x20914e[_0xe41e8b++ & 3];
            _0x345b07[_0xe41e8b >>> 2] |= (128 | _0x5a587b & 63) << _0x20914e[_0xe41e8b++ & 3];
          } else {
            _0x5a587b = 65536 + ((_0x5a587b & 1023) << 10 | _0x4ec27f.charCodeAt(++_0x340f05) & 1023);
            _0x345b07[_0xe41e8b >>> 2] |= (240 | _0x5a587b >>> 18) << _0x20914e[_0xe41e8b++ & 3];
            _0x345b07[_0xe41e8b >>> 2] |= (128 | _0x5a587b >>> 12 & 63) << _0x20914e[_0xe41e8b++ & 3];
            _0x345b07[_0xe41e8b >>> 2] |= (128 | _0x5a587b >>> 6 & 63) << _0x20914e[_0xe41e8b++ & 3];
            _0x345b07[_0xe41e8b >>> 2] |= (128 | _0x5a587b & 63) << _0x20914e[_0xe41e8b++ & 3];
          }
        }
      } else {
        for (_0xe41e8b = this.start; _0x340f05 < _0x514c09 && _0xe41e8b < 64; ++_0x340f05) {
          _0x345b07[_0xe41e8b >>> 2] |= _0x4ec27f[_0x340f05] << _0x20914e[_0xe41e8b++ & 3];
        }
      }
      this.lastByteIndex = _0xe41e8b;
      this.bytes += _0xe41e8b - this.start;
      if (_0xe41e8b >= 64) {
        this.block = _0x345b07[16];
        this.start = _0xe41e8b - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = _0xe41e8b;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };
  _0x5d5d48.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var _0x3fc621 = this.blocks;
    var _0x5cf135 = this.lastByteIndex;
    _0x3fc621[16] = this.block;
    _0x3fc621[this.lastByteIndex >>> 2] |= _0x388685[this.lastByteIndex & 3];
    this.block = _0x3fc621[16];
    if (this.lastByteIndex >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      _0x3fc621[0] = this.block;
      _0x3fc621[16] = _0x3fc621[1] = _0x3fc621[2] = _0x3fc621[3] = _0x3fc621[4] = _0x3fc621[5] = _0x3fc621[6] = _0x3fc621[7] = _0x3fc621[8] = _0x3fc621[9] = _0x3fc621[10] = _0x3fc621[11] = _0x3fc621[12] = _0x3fc621[13] = _0x3fc621[14] = _0x3fc621[15] = 0;
    }
    _0x3fc621[14] = this.hBytes << 3 | this.bytes >>> 29;
    _0x3fc621[15] = this.bytes << 3;
    this.hash();
  };
  _0x5d5d48.prototype.hash = function () {
    var _0x90142f = this.h0;
    var _0x4a22ae = this.h1;
    var _0xbd4537 = this.h2;
    var _0x34cc73 = this.h3;
    var _0x2b2aa9 = this.h4;
    var _0x39e05c;
    var _0xf0ef31;
    var _0x1f8729;
    var _0x450e3e = this.blocks;
    for (_0xf0ef31 = 16; _0xf0ef31 < 80; ++_0xf0ef31) {
      _0x1f8729 = _0x450e3e[_0xf0ef31 - 3] ^ _0x450e3e[_0xf0ef31 - 8] ^ _0x450e3e[_0xf0ef31 - 14] ^ _0x450e3e[_0xf0ef31 - 16];
      _0x450e3e[_0xf0ef31] = _0x1f8729 << 1 | _0x1f8729 >>> 31;
    }
    for (_0xf0ef31 = 0; _0xf0ef31 < 20; _0xf0ef31 += 5) {
      _0x39e05c = _0x4a22ae & _0xbd4537 | ~_0x4a22ae & _0x34cc73;
      _0x1f8729 = _0x90142f << 5 | _0x90142f >>> 27;
      _0x2b2aa9 = _0x1f8729 + _0x39e05c + _0x2b2aa9 + 1518500249 + _0x450e3e[_0xf0ef31] << 0;
      _0x4a22ae = _0x4a22ae << 30 | _0x4a22ae >>> 2;
      _0x39e05c = _0x90142f & _0x4a22ae | ~_0x90142f & _0xbd4537;
      _0x1f8729 = _0x2b2aa9 << 5 | _0x2b2aa9 >>> 27;
      _0x34cc73 = _0x1f8729 + _0x39e05c + _0x34cc73 + 1518500249 + _0x450e3e[_0xf0ef31 + 1] << 0;
      _0x90142f = _0x90142f << 30 | _0x90142f >>> 2;
      _0x39e05c = _0x2b2aa9 & _0x90142f | ~_0x2b2aa9 & _0x4a22ae;
      _0x1f8729 = _0x34cc73 << 5 | _0x34cc73 >>> 27;
      _0xbd4537 = _0x1f8729 + _0x39e05c + _0xbd4537 + 1518500249 + _0x450e3e[_0xf0ef31 + 2] << 0;
      _0x2b2aa9 = _0x2b2aa9 << 30 | _0x2b2aa9 >>> 2;
      _0x39e05c = _0x34cc73 & _0x2b2aa9 | ~_0x34cc73 & _0x90142f;
      _0x1f8729 = _0xbd4537 << 5 | _0xbd4537 >>> 27;
      _0x4a22ae = _0x1f8729 + _0x39e05c + _0x4a22ae + 1518500249 + _0x450e3e[_0xf0ef31 + 3] << 0;
      _0x34cc73 = _0x34cc73 << 30 | _0x34cc73 >>> 2;
      _0x39e05c = _0xbd4537 & _0x34cc73 | ~_0xbd4537 & _0x2b2aa9;
      _0x1f8729 = _0x4a22ae << 5 | _0x4a22ae >>> 27;
      _0x90142f = _0x1f8729 + _0x39e05c + _0x90142f + 1518500249 + _0x450e3e[_0xf0ef31 + 4] << 0;
      _0xbd4537 = _0xbd4537 << 30 | _0xbd4537 >>> 2;
    }
    for (; _0xf0ef31 < 40; _0xf0ef31 += 5) {
      _0x39e05c = _0x4a22ae ^ _0xbd4537 ^ _0x34cc73;
      _0x1f8729 = _0x90142f << 5 | _0x90142f >>> 27;
      _0x2b2aa9 = _0x1f8729 + _0x39e05c + _0x2b2aa9 + 1859775393 + _0x450e3e[_0xf0ef31] << 0;
      _0x4a22ae = _0x4a22ae << 30 | _0x4a22ae >>> 2;
      _0x39e05c = _0x90142f ^ _0x4a22ae ^ _0xbd4537;
      _0x1f8729 = _0x2b2aa9 << 5 | _0x2b2aa9 >>> 27;
      _0x34cc73 = _0x1f8729 + _0x39e05c + _0x34cc73 + 1859775393 + _0x450e3e[_0xf0ef31 + 1] << 0;
      _0x90142f = _0x90142f << 30 | _0x90142f >>> 2;
      _0x39e05c = _0x2b2aa9 ^ _0x90142f ^ _0x4a22ae;
      _0x1f8729 = _0x34cc73 << 5 | _0x34cc73 >>> 27;
      _0xbd4537 = _0x1f8729 + _0x39e05c + _0xbd4537 + 1859775393 + _0x450e3e[_0xf0ef31 + 2] << 0;
      _0x2b2aa9 = _0x2b2aa9 << 30 | _0x2b2aa9 >>> 2;
      _0x39e05c = _0x34cc73 ^ _0x2b2aa9 ^ _0x90142f;
      _0x1f8729 = _0xbd4537 << 5 | _0xbd4537 >>> 27;
      _0x4a22ae = _0x1f8729 + _0x39e05c + _0x4a22ae + 1859775393 + _0x450e3e[_0xf0ef31 + 3] << 0;
      _0x34cc73 = _0x34cc73 << 30 | _0x34cc73 >>> 2;
      _0x39e05c = _0xbd4537 ^ _0x34cc73 ^ _0x2b2aa9;
      _0x1f8729 = _0x4a22ae << 5 | _0x4a22ae >>> 27;
      _0x90142f = _0x1f8729 + _0x39e05c + _0x90142f + 1859775393 + _0x450e3e[_0xf0ef31 + 4] << 0;
      _0xbd4537 = _0xbd4537 << 30 | _0xbd4537 >>> 2;
    }
    for (; _0xf0ef31 < 60; _0xf0ef31 += 5) {
      _0x39e05c = _0x4a22ae & _0xbd4537 | _0x4a22ae & _0x34cc73 | _0xbd4537 & _0x34cc73;
      _0x1f8729 = _0x90142f << 5 | _0x90142f >>> 27;
      _0x2b2aa9 = _0x1f8729 + _0x39e05c + _0x2b2aa9 - 1894007588 + _0x450e3e[_0xf0ef31] << 0;
      _0x4a22ae = _0x4a22ae << 30 | _0x4a22ae >>> 2;
      _0x39e05c = _0x90142f & _0x4a22ae | _0x90142f & _0xbd4537 | _0x4a22ae & _0xbd4537;
      _0x1f8729 = _0x2b2aa9 << 5 | _0x2b2aa9 >>> 27;
      _0x34cc73 = _0x1f8729 + _0x39e05c + _0x34cc73 - 1894007588 + _0x450e3e[_0xf0ef31 + 1] << 0;
      _0x90142f = _0x90142f << 30 | _0x90142f >>> 2;
      _0x39e05c = _0x2b2aa9 & _0x90142f | _0x2b2aa9 & _0x4a22ae | _0x90142f & _0x4a22ae;
      _0x1f8729 = _0x34cc73 << 5 | _0x34cc73 >>> 27;
      _0xbd4537 = _0x1f8729 + _0x39e05c + _0xbd4537 - 1894007588 + _0x450e3e[_0xf0ef31 + 2] << 0;
      _0x2b2aa9 = _0x2b2aa9 << 30 | _0x2b2aa9 >>> 2;
      _0x39e05c = _0x34cc73 & _0x2b2aa9 | _0x34cc73 & _0x90142f | _0x2b2aa9 & _0x90142f;
      _0x1f8729 = _0xbd4537 << 5 | _0xbd4537 >>> 27;
      _0x4a22ae = _0x1f8729 + _0x39e05c + _0x4a22ae - 1894007588 + _0x450e3e[_0xf0ef31 + 3] << 0;
      _0x34cc73 = _0x34cc73 << 30 | _0x34cc73 >>> 2;
      _0x39e05c = _0xbd4537 & _0x34cc73 | _0xbd4537 & _0x2b2aa9 | _0x34cc73 & _0x2b2aa9;
      _0x1f8729 = _0x4a22ae << 5 | _0x4a22ae >>> 27;
      _0x90142f = _0x1f8729 + _0x39e05c + _0x90142f - 1894007588 + _0x450e3e[_0xf0ef31 + 4] << 0;
      _0xbd4537 = _0xbd4537 << 30 | _0xbd4537 >>> 2;
    }
    for (; _0xf0ef31 < 80; _0xf0ef31 += 5) {
      _0x39e05c = _0x4a22ae ^ _0xbd4537 ^ _0x34cc73;
      _0x1f8729 = _0x90142f << 5 | _0x90142f >>> 27;
      _0x2b2aa9 = _0x1f8729 + _0x39e05c + _0x2b2aa9 - 899497514 + _0x450e3e[_0xf0ef31] << 0;
      _0x4a22ae = _0x4a22ae << 30 | _0x4a22ae >>> 2;
      _0x39e05c = _0x90142f ^ _0x4a22ae ^ _0xbd4537;
      _0x1f8729 = _0x2b2aa9 << 5 | _0x2b2aa9 >>> 27;
      _0x34cc73 = _0x1f8729 + _0x39e05c + _0x34cc73 - 899497514 + _0x450e3e[_0xf0ef31 + 1] << 0;
      _0x90142f = _0x90142f << 30 | _0x90142f >>> 2;
      _0x39e05c = _0x2b2aa9 ^ _0x90142f ^ _0x4a22ae;
      _0x1f8729 = _0x34cc73 << 5 | _0x34cc73 >>> 27;
      _0xbd4537 = _0x1f8729 + _0x39e05c + _0xbd4537 - 899497514 + _0x450e3e[_0xf0ef31 + 2] << 0;
      _0x2b2aa9 = _0x2b2aa9 << 30 | _0x2b2aa9 >>> 2;
      _0x39e05c = _0x34cc73 ^ _0x2b2aa9 ^ _0x90142f;
      _0x1f8729 = _0xbd4537 << 5 | _0xbd4537 >>> 27;
      _0x4a22ae = _0x1f8729 + _0x39e05c + _0x4a22ae - 899497514 + _0x450e3e[_0xf0ef31 + 3] << 0;
      _0x34cc73 = _0x34cc73 << 30 | _0x34cc73 >>> 2;
      _0x39e05c = _0xbd4537 ^ _0x34cc73 ^ _0x2b2aa9;
      _0x1f8729 = _0x4a22ae << 5 | _0x4a22ae >>> 27;
      _0x90142f = _0x1f8729 + _0x39e05c + _0x90142f - 899497514 + _0x450e3e[_0xf0ef31 + 4] << 0;
      _0xbd4537 = _0xbd4537 << 30 | _0xbd4537 >>> 2;
    }
    this.h0 = this.h0 + _0x90142f << 0;
    this.h1 = this.h1 + _0x4a22ae << 0;
    this.h2 = this.h2 + _0xbd4537 << 0;
    this.h3 = this.h3 + _0x34cc73 << 0;
    this.h4 = this.h4 + _0x2b2aa9 << 0;
  };
  _0x5d5d48.prototype.hex = function () {
    this.finalize();
    var _0x3e88f5 = this.h0;
    var _0x567be8 = this.h1;
    var _0x37c558 = this.h2;
    var _0x4bd956 = this.h3;
    var _0x85c54c = this.h4;
    return _0x380157[this.h0 >>> 28 & 15] + _0x380157[this.h0 >>> 24 & 15] + _0x380157[this.h0 >>> 20 & 15] + _0x380157[this.h0 >>> 16 & 15] + _0x380157[this.h0 >>> 12 & 15] + _0x380157[this.h0 >>> 8 & 15] + _0x380157[this.h0 >>> 4 & 15] + _0x380157[this.h0 & 15] + _0x380157[this.h1 >>> 28 & 15] + _0x380157[this.h1 >>> 24 & 15] + _0x380157[this.h1 >>> 20 & 15] + _0x380157[this.h1 >>> 16 & 15] + _0x380157[this.h1 >>> 12 & 15] + _0x380157[this.h1 >>> 8 & 15] + _0x380157[this.h1 >>> 4 & 15] + _0x380157[this.h1 & 15] + _0x380157[this.h2 >>> 28 & 15] + _0x380157[this.h2 >>> 24 & 15] + _0x380157[this.h2 >>> 20 & 15] + _0x380157[this.h2 >>> 16 & 15] + _0x380157[this.h2 >>> 12 & 15] + _0x380157[this.h2 >>> 8 & 15] + _0x380157[this.h2 >>> 4 & 15] + _0x380157[this.h2 & 15] + _0x380157[this.h3 >>> 28 & 15] + _0x380157[this.h3 >>> 24 & 15] + _0x380157[this.h3 >>> 20 & 15] + _0x380157[this.h3 >>> 16 & 15] + _0x380157[this.h3 >>> 12 & 15] + _0x380157[this.h3 >>> 8 & 15] + _0x380157[this.h3 >>> 4 & 15] + _0x380157[this.h3 & 15] + _0x380157[this.h4 >>> 28 & 15] + _0x380157[this.h4 >>> 24 & 15] + _0x380157[this.h4 >>> 20 & 15] + _0x380157[this.h4 >>> 16 & 15] + _0x380157[this.h4 >>> 12 & 15] + _0x380157[this.h4 >>> 8 & 15] + _0x380157[this.h4 >>> 4 & 15] + _0x380157[this.h4 & 15];
  };
  _0x5d5d48.prototype.toString = _0x5d5d48.prototype.hex;
  _0x5d5d48.prototype.digest = function () {
    this.finalize();
    var _0x96ffdd = this.h0;
    var _0x4ccac2 = this.h1;
    var _0x1f8468 = this.h2;
    var _0x27228d = this.h3;
    var _0x59df97 = this.h4;
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
  _0x5d5d48.prototype.array = _0x5d5d48.prototype.digest;
  _0x5d5d48.prototype.arrayBuffer = function () {
    this.finalize();
    var _0x21c7ef = new ArrayBuffer(20);
    var _0x4e2a48 = new DataView(_0x21c7ef);
    _0x4e2a48.setUint32(0, this.h0);
    _0x4e2a48.setUint32(4, this.h1);
    _0x4e2a48.setUint32(8, this.h2);
    _0x4e2a48.setUint32(12, this.h3);
    _0x4e2a48.setUint32(16, this.h4);
    return _0x21c7ef;
  };
  function _0x19a1f8(_0x2341ea, _0x31301b) {
    var _0x4e5eb0;
    var _0x1a216f = _0x3fd28c(_0x2341ea);
    _0x2341ea = _0x1a216f[0];
    if (_0x1a216f[1]) {
      var _0x8b64b6 = [];
      var _0x56623a = _0x2341ea.length;
      var _0x3ce23b = 0;
      var _0x1ce3ca;
      for (_0x4e5eb0 = 0; _0x4e5eb0 < _0x2341ea.length; ++_0x4e5eb0) {
        _0x1ce3ca = _0x2341ea.charCodeAt(_0x4e5eb0);
        if (_0x1ce3ca < 128) {
          _0x8b64b6[_0x3ce23b++] = _0x1ce3ca;
        } else if (_0x1ce3ca < 2048) {
          _0x8b64b6[_0x3ce23b++] = 192 | _0x1ce3ca >>> 6;
          _0x8b64b6[_0x3ce23b++] = 128 | _0x1ce3ca & 63;
        } else if (_0x1ce3ca < 55296 || _0x1ce3ca >= 57344) {
          _0x8b64b6[_0x3ce23b++] = 224 | _0x1ce3ca >>> 12;
          _0x8b64b6[_0x3ce23b++] = 128 | _0x1ce3ca >>> 6 & 63;
          _0x8b64b6[_0x3ce23b++] = 128 | _0x1ce3ca & 63;
        } else {
          _0x1ce3ca = 65536 + ((_0x1ce3ca & 1023) << 10 | _0x2341ea.charCodeAt(++_0x4e5eb0) & 1023);
          _0x8b64b6[_0x3ce23b++] = 240 | _0x1ce3ca >>> 18;
          _0x8b64b6[_0x3ce23b++] = 128 | _0x1ce3ca >>> 12 & 63;
          _0x8b64b6[_0x3ce23b++] = 128 | _0x1ce3ca >>> 6 & 63;
          _0x8b64b6[_0x3ce23b++] = 128 | _0x1ce3ca & 63;
        }
      }
      _0x2341ea = _0x8b64b6;
    }
    if (_0x2341ea.length > 64) {
      _0x2341ea = new _0x5d5d48(true).update(_0x2341ea).array();
    }
    var _0x11ac84 = [];
    var _0x5e9ed8 = [];
    for (_0x4e5eb0 = 0; _0x4e5eb0 < 64; ++_0x4e5eb0) {
      var _0x169909 = _0x2341ea[_0x4e5eb0] || 0;
      _0x11ac84[_0x4e5eb0] = 92 ^ _0x169909;
      _0x5e9ed8[_0x4e5eb0] = 54 ^ _0x169909;
    }
    _0x5d5d48(_0x31301b);
    this.update(_0x5e9ed8);
    this.oKeyPad = _0x11ac84;
    this.inner = true;
    this.sharedMemory = _0x31301b;
  }
  _0x19a1f8.prototype = new _0x5d5d48();
  _0x19a1f8.prototype.finalize = function () {
    _0x5d5d48.prototype.finalize();
    if (this.inner) {
      this.inner = false;
      var _0x2f06bb = this.array();
      _0x5d5d48(this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(_0x2f06bb);
      _0x5d5d48.prototype.finalize();
    }
  };
  var _0x488ab7 = _0x363951();
  _0x488ab7.sha1 = _0x488ab7;
  _0x488ab7.sha1.hmac = _0x4946e5();
  if (_0x280cfb) {
    module.exports = _0x488ab7;
  } else {
    _0x159221.sha1 = _0x488ab7;
    if (_0x25b503) {
      define(function () {
        return _0x488ab7;
      });
    }
  }
}());