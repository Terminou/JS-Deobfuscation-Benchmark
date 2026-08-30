'use strict';

module.exports = function hexColorRegex(_0x49dd17) {
  _0x49dd17 = _0x49dd17 && typeof _0x49dd17 === "object" ? _0x49dd17 : {};
  if (_0x49dd17.strict) {
    return /^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/i;
  } else {
    return /#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})\b/gi;
  }
};