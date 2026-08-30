'use strict';

module.exports = function hexColorRegex(_0x5a1249) {
  _0x5a1249 = _0x5a1249 && typeof _0x5a1249 === "object" ? _0x5a1249 : {};
  if (_0x5a1249.strict) {
    return /^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/i;
  } else {
    return /#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})\b/gi;
  }
};