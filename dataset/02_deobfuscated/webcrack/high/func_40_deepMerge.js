'use strict';

var isMergeableObject = function isMergeableObject(_0x23c79f) {
  return isNonNullObject(_0x23c79f) && !isSpecial(_0x23c79f);
};
function isNonNullObject(_0x12856c) {
  return !!_0x12856c && typeof _0x12856c === "object";
}
function isSpecial(_0x318e7b) {
  var _0x5e23fa = Object.prototype.toString.call(_0x318e7b);
  return _0x5e23fa === "[object RegExp]" || _0x5e23fa === "[object Date]" || isReactElement(_0x318e7b);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(_0x2394e7) {
  return _0x2394e7.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(_0xa25db2) {
  if (Array.isArray(_0xa25db2)) {
    return [];
  } else {
    return {};
  }
}
function cloneUnlessOtherwiseSpecified(_0x44bd8a, _0x50717c) {
  if (_0x50717c.clone !== false && _0x50717c.isMergeableObject(_0x44bd8a)) {
    return deepmerge(emptyTarget(_0x44bd8a), _0x44bd8a, _0x50717c);
  } else {
    return _0x44bd8a;
  }
}
function defaultArrayMerge(_0x27778e, _0x4f756b, _0x5252f6) {
  return _0x27778e.concat(_0x4f756b).map(function (_0x423d25) {
    return cloneUnlessOtherwiseSpecified(_0x423d25, _0x5252f6);
  });
}
function getMergeFunction(_0x537466, _0x4703b5) {
  if (!_0x4703b5.customMerge) {
    return deepmerge;
  }
  var _0xf2e3c1 = _0x4703b5.customMerge(_0x537466);
  if (typeof _0xf2e3c1 === "function") {
    return _0xf2e3c1;
  } else {
    return deepmerge;
  }
}
function getEnumerableOwnPropertySymbols(_0xd30bc3) {
  if (Object.getOwnPropertySymbols) {
    return Object.getOwnPropertySymbols(_0xd30bc3).filter(function (_0x87aae1) {
      return Object.propertyIsEnumerable.call(_0xd30bc3, _0x87aae1);
    });
  } else {
    return [];
  }
}
function getKeys(_0x38aaed) {
  return Object.keys(_0x38aaed).concat(getEnumerableOwnPropertySymbols(_0x38aaed));
}
function propertyIsOnObject(_0x137ed8, _0x299f34) {
  try {
    return _0x299f34 in _0x137ed8;
  } catch (_0x309612) {
    return false;
  }
}
function propertyIsUnsafe(_0x5ddc19, _0x1dfbe4) {
  return propertyIsOnObject(_0x5ddc19, _0x1dfbe4) && (!Object.hasOwnProperty.call(_0x5ddc19, _0x1dfbe4) || !Object.propertyIsEnumerable.call(_0x5ddc19, _0x1dfbe4));
}
function mergeObject(_0x5321e7, _0x4885bf, _0x1d175f) {
  var _0x2fbfcb = {};
  if (_0x1d175f.isMergeableObject(_0x5321e7)) {
    getKeys(_0x5321e7).forEach(function (_0x1a5d9c) {
      _0x2fbfcb[_0x1a5d9c] = cloneUnlessOtherwiseSpecified(_0x5321e7[_0x1a5d9c], _0x1d175f);
    });
  }
  getKeys(_0x4885bf).forEach(function (_0x316a75) {
    if (propertyIsUnsafe(_0x5321e7, _0x316a75)) {
      return;
    }
    if (propertyIsOnObject(_0x5321e7, _0x316a75) && _0x1d175f.isMergeableObject(_0x4885bf[_0x316a75])) {
      _0x2fbfcb[_0x316a75] = getMergeFunction(_0x316a75, _0x1d175f)(_0x5321e7[_0x316a75], _0x4885bf[_0x316a75], _0x1d175f);
    } else {
      _0x2fbfcb[_0x316a75] = cloneUnlessOtherwiseSpecified(_0x4885bf[_0x316a75], _0x1d175f);
    }
  });
  return _0x2fbfcb;
}
function deepmerge(_0x3c2441, _0x57dd6a, _0x5e4ccd) {
  _0x5e4ccd = _0x5e4ccd || {};
  _0x5e4ccd.arrayMerge = _0x5e4ccd.arrayMerge || defaultArrayMerge;
  _0x5e4ccd.isMergeableObject = _0x5e4ccd.isMergeableObject || isMergeableObject;
  _0x5e4ccd.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var _0x5bdfbc = Array.isArray(_0x57dd6a);
  var _0x2b1dad = Array.isArray(_0x3c2441);
  var _0x21bc66 = _0x5bdfbc === _0x2b1dad;
  if (!_0x21bc66) {
    return cloneUnlessOtherwiseSpecified(_0x57dd6a, _0x5e4ccd);
  } else if (_0x5bdfbc) {
    return _0x5e4ccd.arrayMerge(_0x3c2441, _0x57dd6a, _0x5e4ccd);
  } else {
    return mergeObject(_0x3c2441, _0x57dd6a, _0x5e4ccd);
  }
}
deepmerge.all = function deepmergeAll(_0x4769be, _0x429897) {
  if (!Array.isArray(_0x4769be)) {
    throw new Error("first argument should be an array");
  }
  return _0x4769be.reduce(function (_0x365230, _0xcc6537) {
    return deepmerge(_0x365230, _0xcc6537, _0x429897);
  }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;