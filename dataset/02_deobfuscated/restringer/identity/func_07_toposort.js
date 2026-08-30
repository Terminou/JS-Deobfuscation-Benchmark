module.exports = function (_0x4eaf18) {
  return toposort(uniqueNodes(_0x4eaf18), _0x4eaf18);
};
module.exports.array = toposort;
function toposort(_0x11e16c, _0x166ee5) {
  var _0x43437b = _0x11e16c.length;
  var _0x3c83fd = new Array(_0x43437b);
  var _0x40c5a9 = {};
  var _0x3ca5ae = _0x43437b;
  var _0x237ec5 = makeOutgoingEdges(_0x166ee5);
  var _0x2c8b0d = makeNodesHash(_0x11e16c);
  _0x166ee5.forEach(function (_0x103c1e) {
    if (!_0x2c8b0d.has(_0x103c1e[0]) || !_0x2c8b0d.has(_0x103c1e[1])) {
      throw new Error('Unknown node. There is an unknown node in the supplied edges.');
    }
  });
  while (_0x3ca5ae--) {
    if (!_0x40c5a9[_0x3ca5ae])
      _0x568498(_0x11e16c[_0x3ca5ae], _0x3ca5ae, new Set());
  }
  return _0x3c83fd;
  function _0x568498(_0x573f04, _0x29ed0a, _0x4dfaf8) {
    if (_0x4dfaf8.has(_0x573f04)) {
      var _0x40d865;
      try {
        _0x40d865 = ', node was:' + JSON.stringify(_0x573f04);
      } catch (_0x207a82) {
        _0x40d865 = '';
      }
      throw new Error('Cyclic dependency' + _0x40d865);
    }
    if (!_0x2c8b0d.has(_0x573f04)) {
      throw new Error('Found unknown node. Make sure to provided all involved nodes. Unknown node: ' + JSON.stringify(_0x573f04));
    }
    if (_0x40c5a9[_0x29ed0a])
      return;
    _0x40c5a9[_0x29ed0a] = true;
    var _0x30cfb1 = _0x237ec5.get(_0x573f04) || new Set();
    _0x30cfb1 = Array.from(_0x30cfb1);
    if (_0x29ed0a = _0x30cfb1.length) {
      _0x4dfaf8.add(_0x573f04);
      do {
        var _0x373781 = _0x30cfb1[--_0x29ed0a];
        _0x568498(_0x30cfb1[--_0x29ed0a], _0x2c8b0d.get(_0x30cfb1[--_0x29ed0a]), _0x4dfaf8);
      } while (_0x29ed0a);
      _0x4dfaf8.delete(_0x573f04);
    }
    _0x3c83fd[--_0x43437b] = _0x573f04;
  }
}
function uniqueNodes(_0x5eb543) {
  var _0xca46c4 = new Set();
  for (var _0x3534f7 = 0, _0x317aa2 = _0x5eb543.length; _0x3534f7 < _0x317aa2; _0x3534f7++) {
    var _0x19fcae = _0x5eb543[_0x3534f7];
    _0xca46c4.add(_0x5eb543[_0x3534f7][0]);
    _0xca46c4.add(_0x5eb543[_0x3534f7][1]);
  }
  return Array.from(_0xca46c4);
}
function makeOutgoingEdges(_0x336cd6) {
  var _0x5930c5 = new Map();
  for (var _0x310188 = 0, _0x3e05fb = _0x336cd6.length; _0x310188 < _0x3e05fb; _0x310188++) {
    var _0x7b3475 = _0x336cd6[_0x310188];
    if (!_0x5930c5.has(_0x336cd6[_0x310188][0]))
      _0x5930c5.set(_0x336cd6[_0x310188][0], new Set());
    if (!_0x5930c5.has(_0x336cd6[_0x310188][1]))
      _0x5930c5.set(_0x336cd6[_0x310188][1], new Set());
    _0x5930c5.get(_0x336cd6[_0x310188][0]).add(_0x336cd6[_0x310188][1]);
  }
  return _0x5930c5;
}
function makeNodesHash(_0x5e7f95) {
  var _0xf44889 = new Map();
  for (var _0x4c27e4 = 0, _0x5adee8 = _0x5e7f95.length; _0x4c27e4 < _0x5adee8; _0x4c27e4++) {
    _0xf44889.set(_0x5e7f95[_0x4c27e4], _0x4c27e4);
  }
  return _0xf44889;
}