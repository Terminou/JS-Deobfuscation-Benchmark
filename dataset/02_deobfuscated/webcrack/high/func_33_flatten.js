'use strict';

module.exports = function (_0x47057b) {
  return flat(_0x47057b, []);
};
function flat(_0x2d530d, _0x534b45) {
  var _0x5bbe2c = 0;
  var _0x41006b;
  var _0x570855 = _0x2d530d.length;
  for (; _0x5bbe2c < _0x570855; _0x5bbe2c++) {
    _0x41006b = _0x2d530d[_0x5bbe2c];
    if (Array.isArray(_0x41006b)) {
      flat(_0x41006b, _0x534b45);
    } else {
      _0x534b45.push(_0x41006b);
    }
  }
  return _0x534b45;
}