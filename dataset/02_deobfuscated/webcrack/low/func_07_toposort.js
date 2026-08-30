module.exports = function (_0x103c1e) {
  return toposort(uniqueNodes(_0x103c1e), _0x103c1e);
};
module.exports.array = toposort;
function toposort(_0x573f04, _0x29ed0a) {
  var _0x4dfaf8 = _0x573f04.length;
  var _0x40d865 = new Array(_0x4dfaf8);
  var _0x30cfb1 = {};
  var _0x373781 = _0x4dfaf8;
  var _0x207a82 = makeOutgoingEdges(_0x29ed0a);
  var _0x5eb543 = makeNodesHash(_0x573f04);
  _0x29ed0a.forEach(function (_0x3534f7) {
    if (!_0x5eb543.has(_0x3534f7[0]) || !_0x5eb543.has(_0x3534f7[1])) {
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }
  });
  while (_0x373781--) {
    if (!_0x30cfb1[_0x373781]) {
      _0xca46c4(_0x573f04[_0x373781], _0x373781, new Set());
    }
  }
  return _0x40d865;
  function _0xca46c4(_0x317aa2, _0x19fcae, _0x336cd6) {
    if (_0x336cd6.has(_0x317aa2)) {
      var _0x5930c5;
      try {
        _0x5930c5 = ", node was:" + JSON.stringify(_0x317aa2);
      } catch (_0x7b3475) {
        _0x5930c5 = "";
      }
      throw new Error("Cyclic dependency" + _0x5930c5);
    }
    if (!_0x5eb543.has(_0x317aa2)) {
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(_0x317aa2));
    }
    if (_0x30cfb1[_0x19fcae]) {
      return;
    }
    _0x30cfb1[_0x19fcae] = true;
    var _0x310188 = _0x207a82.get(_0x317aa2) || new Set();
    _0x310188 = Array.from(_0x310188);
    if (_0x19fcae = _0x310188.length) {
      _0x336cd6.add(_0x317aa2);
      do {
        var _0x3e05fb = _0x310188[--_0x19fcae];
        _0xca46c4(_0x3e05fb, _0x5eb543.get(_0x3e05fb), _0x336cd6);
      } while (_0x19fcae);
      _0x336cd6.delete(_0x317aa2);
    }
    _0x40d865[--_0x4dfaf8] = _0x317aa2;
  }
}
function uniqueNodes(_0x5e7f95) {
  var _0xf44889 = new Set();
  for (var _0x4c27e4 = 0, _0x5adee8 = _0x5e7f95.length; _0x4c27e4 < _0x5adee8; _0x4c27e4++) {
    var _0x36155f = _0x5e7f95[_0x4c27e4];
    _0xf44889.add(_0x36155f[0]);
    _0xf44889.add(_0x36155f[1]);
  }
  return Array.from(_0xf44889);
}
function makeOutgoingEdges(_0x393265) {
  var _0x400966 = new Map();
  for (var _0x37c62b = 0, _0x3b2d62 = _0x393265.length; _0x37c62b < _0x3b2d62; _0x37c62b++) {
    var _0x26e393 = _0x393265[_0x37c62b];
    if (!_0x400966.has(_0x26e393[0])) {
      _0x400966.set(_0x26e393[0], new Set());
    }
    if (!_0x400966.has(_0x26e393[1])) {
      _0x400966.set(_0x26e393[1], new Set());
    }
    _0x400966.get(_0x26e393[0]).add(_0x26e393[1]);
  }
  return _0x400966;
}
function makeNodesHash(_0x5594fc) {
  var _0x538afd = new Map();
  for (var _0x53bfad = 0, _0x148b12 = _0x5594fc.length; _0x53bfad < _0x148b12; _0x53bfad++) {
    _0x538afd.set(_0x5594fc[_0x53bfad], _0x53bfad);
  }
  return _0x538afd;
}