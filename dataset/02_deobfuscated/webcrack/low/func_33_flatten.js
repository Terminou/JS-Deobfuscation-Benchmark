'use strict';

module.exports = function (_0x31c39f) {
  return flat(_0x31c39f, []);
};
function flat(_0x23402d, _0x24d3ad) {
  var _0xbeb95c = 0;
  var _0x247f76;
  var _0x1363b6 = _0x23402d.length;
  for (; _0xbeb95c < _0x1363b6; _0xbeb95c++) {
    _0x247f76 = _0x23402d[_0xbeb95c];
    if (Array.isArray(_0x247f76)) {
      flat(_0x247f76, _0x24d3ad);
    } else {
      _0x24d3ad.push(_0x247f76);
    }
  }
  return _0x24d3ad;
}