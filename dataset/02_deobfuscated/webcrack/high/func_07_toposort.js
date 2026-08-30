module.exports = function (_0x251acb) {
  return toposort(uniqueNodes(_0x251acb), _0x251acb);
};
module.exports.array = toposort;
function toposort(_0x3d2dff, _0x4ba3df) {
  var _0x110023 = _0x3d2dff.length;
  var _0x26f043 = new Array(_0x110023);
  var _0x51a854 = {};
  var _0x1754f4 = _0x110023;
  var _0x5c4b95 = makeOutgoingEdges(_0x4ba3df);
  var _0x2f7647 = makeNodesHash(_0x3d2dff);
  _0x4ba3df.forEach(function (_0x26cf5b) {
    if (!_0x2f7647.has(_0x26cf5b[0]) || !_0x2f7647.has(_0x26cf5b[1])) {
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }
  });
  while (_0x1754f4--) {
    if (!_0x51a854[_0x1754f4]) {
      _0x434fe0(_0x3d2dff[_0x1754f4], _0x1754f4, new Set());
    }
  }
  return _0x26f043;
  function _0x434fe0(_0x59dc47, _0x38a72b, _0x5cb979) {
    if (_0x5cb979.has(_0x59dc47)) {
      var _0x2ae511;
      try {
        _0x2ae511 = ", node was:" + JSON.stringify(_0x59dc47);
      } catch (_0x3caac5) {
        _0x2ae511 = "";
      }
      throw new Error("Cyclic dependency" + _0x2ae511);
    }
    if (!_0x2f7647.has(_0x59dc47)) {
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(_0x59dc47));
    }
    if (_0x51a854[_0x38a72b]) {
      return;
    }
    _0x51a854[_0x38a72b] = true;
    var _0x554d66 = _0x5c4b95.get(_0x59dc47) || new Set();
    _0x554d66 = Array.from(_0x554d66);
    if (_0x38a72b = _0x554d66.length) {
      _0x5cb979.add(_0x59dc47);
      do {
        var _0x52163f = _0x554d66[--_0x38a72b];
        _0x434fe0(_0x52163f, _0x2f7647.get(_0x52163f), _0x5cb979);
      } while (_0x38a72b);
      _0x5cb979.delete(_0x59dc47);
    }
    _0x26f043[--_0x110023] = _0x59dc47;
  }
}
function uniqueNodes(_0x32166d) {
  var _0x33f48f = new Set();
  for (var _0x9d7c7f = 0, _0x231cd7 = _0x32166d.length; _0x9d7c7f < _0x231cd7; _0x9d7c7f++) {
    var _0x547fb2 = _0x32166d[_0x9d7c7f];
    _0x33f48f.add(_0x547fb2[0]);
    _0x33f48f.add(_0x547fb2[1]);
  }
  return Array.from(_0x33f48f);
}
function makeOutgoingEdges(_0x21543a) {
  var _0x412383 = new Map();
  for (var _0x4afe2c = 0, _0xbbfbc5 = _0x21543a.length; _0x4afe2c < _0xbbfbc5; _0x4afe2c++) {
    var _0xd74a1a = _0x21543a[_0x4afe2c];
    if (!_0x412383.has(_0xd74a1a[0])) {
      _0x412383.set(_0xd74a1a[0], new Set());
    }
    if (!_0x412383.has(_0xd74a1a[1])) {
      _0x412383.set(_0xd74a1a[1], new Set());
    }
    _0x412383.get(_0xd74a1a[0]).add(_0xd74a1a[1]);
  }
  return _0x412383;
}
function makeNodesHash(_0x5f569c) {
  var _0x49aee1 = new Map();
  for (var _0x598658 = 0, _0x23f6d6 = _0x5f569c.length; _0x598658 < _0x23f6d6; _0x598658++) {
    _0x49aee1.set(_0x5f569c[_0x598658], _0x598658);
  }
  return _0x49aee1;
}