'use strict';
function _0x2c53(_0x4ee2b6, _0x546a8a) {
  _0x4ee2b6 = _0x4ee2b6 - 418;
  var _0x1a46f4 = [
    'length',
    '170WvHsvr',
    'message',
    '830809aRSQwS',
    '5979hWsyhh',
    'call',
    'toString',
    'prototype',
    'reduce',
    '522665ULSuyI',
    'null',
    'indexOf',
    '4153sDeLNX',
    '6kADJdv',
    '26jLWZMt',
    'sort',
    'function',
    'object',
    '15352ofmhdV',
    '2655880QgyBIo',
    'valueOf',
    '[valueOf exception]',
    '1709361YAqLlU',
    '84lFUFNm',
    '8GlBFpY'
  ];
  var _0x2c533a = _0x1a46f4[_0x4ee2b6];
  return _0x1a46f4[_0x4ee2b6];
}
function _0x1a46() {
  return [
    'length',
    '170WvHsvr',
    'message',
    '830809aRSQwS',
    '5979hWsyhh',
    'call',
    'toString',
    'prototype',
    'reduce',
    '522665ULSuyI',
    'null',
    'indexOf',
    '4153sDeLNX',
    '6kADJdv',
    '26jLWZMt',
    'sort',
    'function',
    'object',
    '15352ofmhdV',
    '2655880QgyBIo',
    'valueOf',
    '[valueOf exception]',
    '1709361YAqLlU',
    '84lFUFNm',
    '8GlBFpY'
  ];
}
function pad(_0xde0821, _0x2532a1) {
  while (_0xde0821.length < _0x2532a1) {
    _0xde0821 = '0' + _0xde0821;
  }
  return _0xde0821;
}
function fold(_0x2f10d1, _0x2dc146) {
  var _0x63f572;
  var _0x38d283;
  var _0x27fae9;
  if (_0x2dc146.length === 0)
    return _0x2f10d1;
  for (_0x63f572 = 0, _0x27fae9 = _0x2dc146.length; _0x63f572 < _0x27fae9; _0x63f572++) {
    _0x38d283 = _0x2dc146.charCodeAt(_0x63f572);
    _0x2f10d1 = (_0x2f10d1 << 5) - _0x2f10d1 + _0x38d283;
    _0x2f10d1 |= 0;
  }
  return _0x2f10d1 < 0 ? _0x2f10d1 * -2 : _0x2f10d1;
}
function foldObject(_0x4ac41a, _0x421a04, _0x196ad9) {
  return Object.keys(_0x421a04).sort().reduce(_0x15b945, _0x4ac41a);
  function _0x15b945(_0x5bb526, _0x2f3458) {
    return foldValue(_0x5bb526, _0x421a04[_0x2f3458], _0x2f3458, _0x196ad9);
  }
}
function foldValue(_0x1847ae, _0x465dc2, _0x3d9ef4, _0x1dcfed) {
  var _0x4bbce1 = fold(fold(fold(_0x1847ae, _0x3d9ef4), toString(_0x465dc2)), typeof _0x465dc2);
  if (_0x465dc2 === null)
    return fold(_0x4bbce1, 'null');
  if (_0x465dc2 === undefined)
    return fold(_0x4bbce1, 'undefined');
  if (typeof _0x465dc2 === 'object' || typeof _0x465dc2 === 'function') {
    if (_0x1dcfed.indexOf(_0x465dc2) !== -1)
      return fold(_0x4bbce1, '[Circular]' + _0x3d9ef4);
    _0x1dcfed.push(_0x465dc2);
    var _0x22a35f = foldObject(_0x4bbce1, _0x465dc2, _0x1dcfed);
    if (!('valueOf' in _0x465dc2) || typeof _0x465dc2.valueOf !== 'function')
      return _0x22a35f;
    try {
      return fold(_0x22a35f, String(_0x465dc2.valueOf()));
    } catch (_0x38ec2f) {
      return fold(_0x22a35f, '[valueOf exception]' + (_0x38ec2f.stack || _0x38ec2f.message));
    }
  }
  return fold(_0x4bbce1, _0x465dc2.toString());
}
function toString(_0x38e45d) {
  return Object.prototype.toString.call(_0x38e45d);
}
function sum(_0x4bb2e5) {
  return pad(foldValue(0, _0x4bb2e5, '', []).toString(16), 8);
}
module.exports = sum;