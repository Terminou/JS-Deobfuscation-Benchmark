'use strict';

module.exports = function (_0x55582d) {
  return flat(_0x55582d, []);
};
function flat(_0x2249ba, _0x42f4e1) {
  var _0x1e427d = 0;
  var _0x5dfbfb;
  var _0x94dbe0 = _0x2249ba.length;
  for (; _0x1e427d < _0x94dbe0; _0x1e427d++) {
    _0x5dfbfb = _0x2249ba[_0x1e427d];
    if (Array.isArray(_0x5dfbfb)) {
      flat(_0x5dfbfb, _0x42f4e1);
    } else {
      _0x42f4e1.push(_0x5dfbfb);
    }
  }
  return _0x42f4e1;
}