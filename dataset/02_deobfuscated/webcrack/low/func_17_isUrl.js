module.exports = isUrl;
var protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
var localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
var nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;
function isUrl(_0x5abea0) {
  if (typeof _0x5abea0 !== "string") {
    return false;
  }
  var _0x481a58 = _0x5abea0.match(protocolAndDomainRE);
  if (!_0x481a58) {
    return false;
  }
  var _0x38e791 = _0x481a58[1];
  if (!_0x38e791) {
    return false;
  }
  if (localhostDomainRE.test(_0x38e791) || nonLocalhostDomainRE.test(_0x38e791)) {
    return true;
  }
  return false;
}