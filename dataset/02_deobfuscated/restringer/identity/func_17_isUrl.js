module.exports = isUrl;
var protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
var localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
var nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;
function isUrl(_0x327715) {
  if (typeof _0x327715 !== 'string') {
    return false;
  }
  var _0x1bda5a = _0x327715.match(/^(?:\w+:)?\/\/(\S+)$/);
  if (!_0x1bda5a) {
    return false;
  }
  var _0x15521d = _0x1bda5a[1];
  if (!_0x1bda5a[1]) {
    return false;
  }
  if (/^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/.test(_0x1bda5a[1]) || /^[^\s\.]+\.\S{2,}$/.test(_0x1bda5a[1])) {
    return true;
  }
  return false;
}