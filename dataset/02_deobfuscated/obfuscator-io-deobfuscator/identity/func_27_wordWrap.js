function trimEnd(_0x7c03fd) {
  let _0x10ea6d = _0x7c03fd.length - 0x1;
  let _0x2d0b6c = _0x7c03fd[_0x10ea6d];
  while (_0x2d0b6c === " " || _0x2d0b6c === "\t") {
    _0x2d0b6c = _0x7c03fd[--_0x10ea6d];
  }
  return _0x7c03fd.substring(0x0, _0x10ea6d + 0x1);
}
function trimTabAndSpaces(_0x2c35de) {
  const _0x1ba08d = _0x2c35de.split("\n");
  const _0x2bfd2f = _0x1ba08d.map(_0x207bab => trimEnd(_0x207bab));
  return _0x2bfd2f.join("\n");
}
module.exports = function (_0xd920ce, _0x157db5) {
  _0x157db5 = _0x157db5 || {};
  if (_0xd920ce == null) {
    return _0xd920ce;
  }
  var _0x56e32a = _0x157db5.width || 0x32;
  var _0xb5df6 = typeof _0x157db5.indent === 'string' ? _0x157db5.indent : "  ";
  var _0x212f14 = _0x157db5.newline || "\n" + _0xb5df6;
  var _0xd025dc = typeof _0x157db5.escape === 'function' ? _0x157db5.escape : identity;
  var _0x495254 = '.{1,' + _0x56e32a + '}';
  if (_0x157db5.cut !== true) {
    _0x495254 += "([\\s​]+|$)|[^\\s​]+?([\\s​]+|$)";
  }
  var _0x3e4631 = new RegExp(_0x495254, 'g');
  var _0x2659e9 = _0xd920ce.match(_0x3e4631) || [];
  var _0x39a549 = _0xb5df6 + _0x2659e9.map(function (_0x19a5ae) {
    if (_0x19a5ae.slice(-0x1) === "\n") {
      _0x19a5ae = _0x19a5ae.slice(0x0, _0x19a5ae.length - 0x1);
    }
    return _0xd025dc(_0x19a5ae);
  }).join(_0x212f14);
  if (_0x157db5.trim === true) {
    _0x39a549 = trimTabAndSpaces(_0x39a549);
  }
  return _0x39a549;
};
function identity(_0x1c9737) {
  return _0x1c9737;
}