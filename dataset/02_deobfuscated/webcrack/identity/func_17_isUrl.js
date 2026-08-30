module.exports = isUrl;
var protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
var localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
var nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;
function isUrl(_0x327715) {
  if (typeof _0x327715 !== "string") {
    return false;
  }
  var _0x1bda5a = _0x327715.match(protocolAndDomainRE);
  if (!_0x1bda5a) {
    return false;
  }
  var _0x15521d = _0x1bda5a[1];
  if (!_0x15521d) {
    return false;
  }
  if (localhostDomainRE.test(_0x15521d) || nonLocalhostDomainRE.test(_0x15521d)) {
    return true;
  }
  return false;
}