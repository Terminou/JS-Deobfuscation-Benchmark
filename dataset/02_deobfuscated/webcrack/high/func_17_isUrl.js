module.exports = isUrl;
var protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
var localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
var nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;
function isUrl(_0x1b2648) {
  if (typeof _0x1b2648 !== "string") {
    return false;
  }
  var _0x489677 = _0x1b2648.match(protocolAndDomainRE);
  if (!_0x489677) {
    return false;
  }
  var _0x29b78f = _0x489677[1];
  if (!_0x29b78f) {
    return false;
  }
  if (localhostDomainRE.test(_0x29b78f) || nonLocalhostDomainRE.test(_0x29b78f)) {
    return true;
  }
  return false;
}