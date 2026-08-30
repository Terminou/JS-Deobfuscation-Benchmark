'use strict';

module.exports = function hexColorRegex(_0x1cfb03) {
  _0x1cfb03 = _0x1cfb03 && typeof _0x1cfb03 === 'object' ? _0x1cfb03 : {};
  return _0x1cfb03.strict ? /^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/i : /#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})\b/gi;
};