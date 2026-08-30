module.exports = function (_0x27a1eb) {
  return toposort(uniqueNodes(_0x27a1eb), _0x27a1eb);
};
module.exports.array = toposort;
function toposort(_0x46c747, _0x335471) {
  var _0x2b6ca6 = _0x46c747.length;
  var _0xc9ef79 = new Array(_0x2b6ca6);
  var _0x9ea177 = {};
  var _0x56dc79 = _0x2b6ca6;
  var _0x50237e = makeOutgoingEdges(_0x335471);
  var _0x5b0ade = makeNodesHash(_0x46c747);
  _0x335471.forEach(function (_0x5a61d5) {
    if (!_0x5b0ade.has(_0x5a61d5[0]) || !_0x5b0ade.has(_0x5a61d5[1])) {
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }
  });
  while (_0x56dc79--) {
    if (!_0x9ea177[_0x56dc79]) {
      _0x1009ff(_0x46c747[_0x56dc79], _0x56dc79, new Set());
    }
  }
  return _0xc9ef79;
  function _0x1009ff(_0x5f09a1, _0x3b3dec, _0x136eb5) {
    if (_0x136eb5.has(_0x5f09a1)) {
      var _0x33f8d8;
      try {
        _0x33f8d8 = ", node was:" + JSON.stringify(_0x5f09a1);
      } catch (_0x336eda) {
        _0x33f8d8 = "";
      }
      throw new Error("Cyclic dependency" + _0x33f8d8);
    }
    if (!_0x5b0ade.has(_0x5f09a1)) {
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(_0x5f09a1));
    }
    if (_0x9ea177[_0x3b3dec]) {
      return;
    }
    _0x9ea177[_0x3b3dec] = true;
    var _0x40697d = _0x50237e.get(_0x5f09a1) || new Set();
    _0x40697d = Array.from(_0x40697d);
    if (_0x3b3dec = _0x40697d.length) {
      _0x136eb5.add(_0x5f09a1);
      do {
        var _0x5f2ffb = _0x40697d[--_0x3b3dec];
        _0x1009ff(_0x5f2ffb, _0x5b0ade.get(_0x5f2ffb), _0x136eb5);
      } while (_0x3b3dec);
      _0x136eb5.delete(_0x5f09a1);
    }
    _0xc9ef79[--_0x2b6ca6] = _0x5f09a1;
  }
}
function uniqueNodes(_0x5252e9) {
  var _0x5a45a6 = new Set();
  for (var _0x2281cd = 0, _0xca831a = _0x5252e9.length; _0x2281cd < _0xca831a; _0x2281cd++) {
    var _0x58dc7d = _0x5252e9[_0x2281cd];
    _0x5a45a6.add(_0x58dc7d[0]);
    _0x5a45a6.add(_0x58dc7d[1]);
  }
  return Array.from(_0x5a45a6);
}
function makeOutgoingEdges(_0x3a3b0d) {
  var _0x70c683 = new Map();
  for (var _0x1781a6 = 0, _0xe697d5 = _0x3a3b0d.length; _0x1781a6 < _0xe697d5; _0x1781a6++) {
    var _0x5b5780 = _0x3a3b0d[_0x1781a6];
    if (!_0x70c683.has(_0x5b5780[0])) {
      _0x70c683.set(_0x5b5780[0], new Set());
    }
    if (!_0x70c683.has(_0x5b5780[1])) {
      _0x70c683.set(_0x5b5780[1], new Set());
    }
    _0x70c683.get(_0x5b5780[0]).add(_0x5b5780[1]);
  }
  return _0x70c683;
}
function makeNodesHash(_0x4ce518) {
  var _0x46d4df = new Map();
  for (var _0x30d1b2 = 0, _0x558306 = _0x4ce518.length; _0x30d1b2 < _0x558306; _0x30d1b2++) {
    _0x46d4df.set(_0x4ce518[_0x30d1b2], _0x30d1b2);
  }
  return _0x46d4df;
}