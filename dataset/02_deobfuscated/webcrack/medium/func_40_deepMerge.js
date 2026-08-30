'use strict';

var isMergeableObject = function isMergeableObject(_0x3ae608) {
  return isNonNullObject(_0x3ae608) && !isSpecial(_0x3ae608);
};
function isNonNullObject(_0x14547d) {
  return !!_0x14547d && typeof _0x14547d === "object";
}
function isSpecial(_0x1fb599) {
  var _0x441b7e = Object.prototype.toString.call(_0x1fb599);
  return _0x441b7e === "[object RegExp]" || _0x441b7e === "[object Date]" || isReactElement(_0x1fb599);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(_0x2ebc98) {
  return _0x2ebc98.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(_0x6f546d) {
  if (Array.isArray(_0x6f546d)) {
    return [];
  } else {
    return {};
  }
}
function cloneUnlessOtherwiseSpecified(_0x252642, _0x1118cc) {
  if (_0x1118cc.clone !== false && _0x1118cc.isMergeableObject(_0x252642)) {
    return deepmerge(emptyTarget(_0x252642), _0x252642, _0x1118cc);
  } else {
    return _0x252642;
  }
}
function defaultArrayMerge(_0x2b7a95, _0x4f857a, _0x502eca) {
  return _0x2b7a95.concat(_0x4f857a).map(function (_0x2de958) {
    return cloneUnlessOtherwiseSpecified(_0x2de958, _0x502eca);
  });
}
function getMergeFunction(_0x3bd9d9, _0x5c7de5) {
  if (!_0x5c7de5.customMerge) {
    return deepmerge;
  }
  var _0x2fa71b = _0x5c7de5.customMerge(_0x3bd9d9);
  if (typeof _0x2fa71b === "function") {
    return _0x2fa71b;
  } else {
    return deepmerge;
  }
}
function getEnumerableOwnPropertySymbols(_0x2e008c) {
  if (Object.getOwnPropertySymbols) {
    return Object.getOwnPropertySymbols(_0x2e008c).filter(function (_0xe2065e) {
      return Object.propertyIsEnumerable.call(_0x2e008c, _0xe2065e);
    });
  } else {
    return [];
  }
}
function getKeys(_0x4b0772) {
  return Object.keys(_0x4b0772).concat(getEnumerableOwnPropertySymbols(_0x4b0772));
}
function propertyIsOnObject(_0x192b04, _0x4cf817) {
  try {
    return _0x4cf817 in _0x192b04;
  } catch (_0xe948c7) {
    return false;
  }
}
function propertyIsUnsafe(_0x36fd5e, _0x2ae9ca) {
  return propertyIsOnObject(_0x36fd5e, _0x2ae9ca) && (!Object.hasOwnProperty.call(_0x36fd5e, _0x2ae9ca) || !Object.propertyIsEnumerable.call(_0x36fd5e, _0x2ae9ca));
}
function mergeObject(_0x302f26, _0x58d2c6, _0x473eed) {
  var _0x54cb98 = {};
  if (_0x473eed.isMergeableObject(_0x302f26)) {
    getKeys(_0x302f26).forEach(function (_0x38ec2c) {
      _0x54cb98[_0x38ec2c] = cloneUnlessOtherwiseSpecified(_0x302f26[_0x38ec2c], _0x473eed);
    });
  }
  getKeys(_0x58d2c6).forEach(function (_0x33c632) {
    if (propertyIsUnsafe(_0x302f26, _0x33c632)) {
      return;
    }
    if (propertyIsOnObject(_0x302f26, _0x33c632) && _0x473eed.isMergeableObject(_0x58d2c6[_0x33c632])) {
      _0x54cb98[_0x33c632] = getMergeFunction(_0x33c632, _0x473eed)(_0x302f26[_0x33c632], _0x58d2c6[_0x33c632], _0x473eed);
    } else {
      _0x54cb98[_0x33c632] = cloneUnlessOtherwiseSpecified(_0x58d2c6[_0x33c632], _0x473eed);
    }
  });
  return _0x54cb98;
}
function deepmerge(_0x2285ae, _0x21029d, _0x3e84d8) {
  _0x3e84d8 = _0x3e84d8 || {};
  _0x3e84d8.arrayMerge = _0x3e84d8.arrayMerge || defaultArrayMerge;
  _0x3e84d8.isMergeableObject = _0x3e84d8.isMergeableObject || isMergeableObject;
  _0x3e84d8.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var _0x535482 = Array.isArray(_0x21029d);
  var _0x4279f0 = Array.isArray(_0x2285ae);
  var _0xcff7c0 = _0x535482 === _0x4279f0;
  if (!_0xcff7c0) {
    return cloneUnlessOtherwiseSpecified(_0x21029d, _0x3e84d8);
  } else if (_0x535482) {
    return _0x3e84d8.arrayMerge(_0x2285ae, _0x21029d, _0x3e84d8);
  } else {
    return mergeObject(_0x2285ae, _0x21029d, _0x3e84d8);
  }
}
deepmerge.all = function deepmergeAll(_0x7fcd93, _0x134ba6) {
  if (!Array.isArray(_0x7fcd93)) {
    throw new Error("first argument should be an array");
  }
  return _0x7fcd93.reduce(function (_0xd833e5, _0x50ca99) {
    return deepmerge(_0xd833e5, _0x50ca99, _0x134ba6);
  }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;