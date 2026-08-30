module.exports = isUrl;
var protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
var localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
var nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;
function isUrl(_0x54a381) {
  if (typeof _0x54a381 !== "string") {
    return false;
  }
  var _0x1b2648 = _0x54a381.match(protocolAndDomainRE);
  if (!_0x1b2648) {
    return false;
  }
  var _0x6622d7 = _0x1b2648[1];
  if (!_0x6622d7) {
    return false;
  }
  if (localhostDomainRE.test(_0x6622d7) || nonLocalhostDomainRE.test(_0x6622d7)) {
    return true;
  }
  return false;
}