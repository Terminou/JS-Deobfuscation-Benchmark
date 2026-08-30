'use strict';

var isMergeableObject = function isMergeableObject(_0x2005e8) {
  return isNonNullObject(_0x2005e8) && !isSpecial(_0x2005e8);
};
function isNonNullObject(_0x1c8966) {
  return !!_0x1c8966 && typeof _0x1c8966 === "object";
}
function isSpecial(_0x1ed533) {
  var _0x5e07ed = Object.prototype.toString.call(_0x1ed533);
  return _0x5e07ed === "[object RegExp]" || _0x5e07ed === "[object Date]" || isReactElement(_0x1ed533);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(_0x436517) {
  return _0x436517.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(_0x471fe7) {
  if (Array.isArray(_0x471fe7)) {
    return [];
  } else {
    return {};
  }
}
function cloneUnlessOtherwiseSpecified(_0x2d6d33, _0x2c8a08) {
  if (_0x2c8a08.clone !== false && _0x2c8a08.isMergeableObject(_0x2d6d33)) {
    return deepmerge(emptyTarget(_0x2d6d33), _0x2d6d33, _0x2c8a08);
  } else {
    return _0x2d6d33;
  }
}
function defaultArrayMerge(_0x5a7216, _0x569c27, _0x1da32a) {
  return _0x5a7216.concat(_0x569c27).map(function (_0x98a2d4) {
    return cloneUnlessOtherwiseSpecified(_0x98a2d4, _0x1da32a);
  });
}
function getMergeFunction(_0x5df07a, _0x3a04f7) {
  if (!_0x3a04f7.customMerge) {
    return deepmerge;
  }
  var _0x37c959 = _0x3a04f7.customMerge(_0x5df07a);
  if (typeof _0x37c959 === "function") {
    return _0x37c959;
  } else {
    return deepmerge;
  }
}
function getEnumerableOwnPropertySymbols(_0x2251a2) {
  if (Object.getOwnPropertySymbols) {
    return Object.getOwnPropertySymbols(_0x2251a2).filter(function (_0x52dc07) {
      return Object.propertyIsEnumerable.call(_0x2251a2, _0x52dc07);
    });
  } else {
    return [];
  }
}
function getKeys(_0x39168d) {
  return Object.keys(_0x39168d).concat(getEnumerableOwnPropertySymbols(_0x39168d));
}
function propertyIsOnObject(_0xcdbba2, _0x150351) {
  try {
    return _0x150351 in _0xcdbba2;
  } catch (_0x55023e) {
    return false;
  }
}
function propertyIsUnsafe(_0x36ef73, _0x261ea4) {
  return propertyIsOnObject(_0x36ef73, _0x261ea4) && (!Object.hasOwnProperty.call(_0x36ef73, _0x261ea4) || !Object.propertyIsEnumerable.call(_0x36ef73, _0x261ea4));
}
function mergeObject(_0x46ec56, _0x3fef10, _0x26a4d7) {
  var _0x11b729 = {};
  if (_0x26a4d7.isMergeableObject(_0x46ec56)) {
    getKeys(_0x46ec56).forEach(function (_0x42b1f0) {
      _0x11b729[_0x42b1f0] = cloneUnlessOtherwiseSpecified(_0x46ec56[_0x42b1f0], _0x26a4d7);
    });
  }
  getKeys(_0x3fef10).forEach(function (_0x2f9d08) {
    if (propertyIsUnsafe(_0x46ec56, _0x2f9d08)) {
      return;
    }
    if (propertyIsOnObject(_0x46ec56, _0x2f9d08) && _0x26a4d7.isMergeableObject(_0x3fef10[_0x2f9d08])) {
      _0x11b729[_0x2f9d08] = getMergeFunction(_0x2f9d08, _0x26a4d7)(_0x46ec56[_0x2f9d08], _0x3fef10[_0x2f9d08], _0x26a4d7);
    } else {
      _0x11b729[_0x2f9d08] = cloneUnlessOtherwiseSpecified(_0x3fef10[_0x2f9d08], _0x26a4d7);
    }
  });
  return _0x11b729;
}
function deepmerge(_0x5c7806, _0x5616d3, _0x16445a) {
  _0x16445a = _0x16445a || {};
  _0x16445a.arrayMerge = _0x16445a.arrayMerge || defaultArrayMerge;
  _0x16445a.isMergeableObject = _0x16445a.isMergeableObject || isMergeableObject;
  _0x16445a.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var _0x4d590e = Array.isArray(_0x5616d3);
  var _0x16e28a = Array.isArray(_0x5c7806);
  var _0xbcfcc3 = _0x4d590e === _0x16e28a;
  if (!_0xbcfcc3) {
    return cloneUnlessOtherwiseSpecified(_0x5616d3, _0x16445a);
  } else if (_0x4d590e) {
    return _0x16445a.arrayMerge(_0x5c7806, _0x5616d3, _0x16445a);
  } else {
    return mergeObject(_0x5c7806, _0x5616d3, _0x16445a);
  }
}
deepmerge.all = function deepmergeAll(_0x6750fd, _0x34613a) {
  if (!Array.isArray(_0x6750fd)) {
    throw new Error("first argument should be an array");
  }
  return _0x6750fd.reduce(function (_0x5d78d7, _0x27f5c2) {
    return deepmerge(_0x5d78d7, _0x27f5c2, _0x34613a);
  }, {});
};
var deepmerge_1 = deepmerge;
module.exports = deepmerge_1;