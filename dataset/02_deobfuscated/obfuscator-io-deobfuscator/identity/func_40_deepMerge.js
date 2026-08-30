'use strict';

var isMergeableObject = function isMergeableObject(_0x3f7c75) {
  return !!_0x3f7c75 && typeof _0x3f7c75 === 'object' && !isSpecial(_0x3f7c75);
};
function isNonNullObject(_0x5cedbe) {
  return !!_0x5cedbe && typeof _0x5cedbe === 'object';
}
function isSpecial(_0x36b5c0) {
  var _0x32d5ca = Object.prototype.toString.call(_0x36b5c0);
  return _0x32d5ca === "[object RegExp]" || _0x32d5ca === "[object Date]" || _0x36b5c0.$$typeof === REACT_ELEMENT_TYPE;
}
var canUseSymbol = typeof Symbol === 'function' && Symbol['for'];
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol['for']('react.element') : 0xeac7;
function isReactElement(_0x2ffd90) {
  return _0x2ffd90.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(_0x257fd3) {
  return Array.isArray(_0x257fd3) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(_0x298582, _0x5caf2c) {
  return _0x5caf2c.clone !== false && _0x5caf2c.isMergeableObject(_0x298582) ? deepmerge(Array.isArray(_0x298582) ? [] : {}, _0x298582, _0x5caf2c) : _0x298582;
}
function defaultArrayMerge(_0x3b9e64, _0x17955c, _0x2005e8) {
  return _0x3b9e64.concat(_0x17955c).map(function (_0x1c8966) {
    return _0x2005e8.clone !== false && _0x2005e8.isMergeableObject(_0x1c8966) ? deepmerge(Array.isArray(_0x1c8966) ? [] : {}, _0x1c8966, _0x2005e8) : _0x1c8966;
  });
}
function getMergeFunction(_0x1ed533, _0x5e07ed) {
  if (!_0x5e07ed.customMerge) {
    return deepmerge;
  }
  var _0x436517 = _0x5e07ed.customMerge(_0x1ed533);
  return typeof _0x436517 === 'function' ? _0x436517 : deepmerge;
}
function getEnumerableOwnPropertySymbols(_0x471fe7) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(_0x471fe7).filter(function (_0x2d6d33) {
    return Object.propertyIsEnumerable.call(_0x471fe7, _0x2d6d33);
  }) : [];
}
function getKeys(_0x2c8a08) {
  return Object.keys(_0x2c8a08).concat(getEnumerableOwnPropertySymbols(_0x2c8a08));
}
function propertyIsOnObject(_0x5a7216, _0x569c27) {
  try {
    return _0x569c27 in _0x5a7216;
  } catch (_0x1da32a) {
    return false;
  }
}
function propertyIsUnsafe(_0x98a2d4, _0x5df07a) {
  return propertyIsOnObject(_0x98a2d4, _0x5df07a) && !(Object.hasOwnProperty.call(_0x98a2d4, _0x5df07a) && Object.propertyIsEnumerable.call(_0x98a2d4, _0x5df07a));
}
function mergeObject(_0x3a04f7, _0x37c959, _0x2251a2) {
  var _0x52dc07 = {};
  if (_0x2251a2.isMergeableObject(_0x3a04f7)) {
    Object.keys(_0x3a04f7).concat(getEnumerableOwnPropertySymbols(_0x3a04f7)).forEach(function (_0x39168d) {
      _0x52dc07[_0x39168d] = _0x2251a2.clone !== false && _0x2251a2.isMergeableObject(_0x3a04f7[_0x39168d]) ? deepmerge(Array.isArray(_0x3a04f7[_0x39168d]) ? [] : {}, _0x3a04f7[_0x39168d], _0x2251a2) : _0x3a04f7[_0x39168d];
    });
  }
  Object.keys(_0x37c959).concat(getEnumerableOwnPropertySymbols(_0x37c959)).forEach(function (_0xcdbba2) {
    if (propertyIsOnObject(_0x3a04f7, _0xcdbba2) && !(Object.hasOwnProperty.call(_0x3a04f7, _0xcdbba2) && Object.propertyIsEnumerable.call(_0x3a04f7, _0xcdbba2))) {
      return;
    }
    if (propertyIsOnObject(_0x3a04f7, _0xcdbba2) && _0x2251a2.isMergeableObject(_0x37c959[_0xcdbba2])) {
      _0x52dc07[_0xcdbba2] = getMergeFunction(_0xcdbba2, _0x2251a2)(_0x3a04f7[_0xcdbba2], _0x37c959[_0xcdbba2], _0x2251a2);
    } else {
      _0x52dc07[_0xcdbba2] = _0x2251a2.clone !== false && _0x2251a2.isMergeableObject(_0x37c959[_0xcdbba2]) ? deepmerge(Array.isArray(_0x37c959[_0xcdbba2]) ? [] : {}, _0x37c959[_0xcdbba2], _0x2251a2) : _0x37c959[_0xcdbba2];
    }
  });
  return _0x52dc07;
}
function deepmerge(_0x150351, _0x55023e, _0x36ef73) {
  _0x36ef73 = _0x36ef73 || {};
  _0x36ef73.arrayMerge = _0x36ef73.arrayMerge || defaultArrayMerge;
  _0x36ef73.isMergeableObject = _0x36ef73.isMergeableObject || isMergeableObject;
  _0x36ef73.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var _0x261ea4 = Array.isArray(_0x55023e);
  var _0x46ec56 = Array.isArray(_0x150351);
  var _0x3fef10 = _0x261ea4 === _0x46ec56;
  if (!_0x3fef10) {
    return _0x36ef73.clone !== false && _0x36ef73.isMergeableObject(_0x55023e) ? deepmerge(Array.isArray(_0x55023e) ? [] : {}, _0x55023e, _0x36ef73) : _0x55023e;
  } else if (_0x261ea4) {
    return _0x36ef73.arrayMerge(_0x150351, _0x55023e, _0x36ef73);
  } else {
    return mergeObject(_0x150351, _0x55023e, _0x36ef73);
  }
}
deepmerge.all = function deepmergeAll(_0x26a4d7, _0x11b729) {
  if (!Array.isArray(_0x26a4d7)) {
    throw new Error("first argument should be an array");
  }
  return _0x26a4d7.reduce(function (_0x42b1f0, _0x2f9d08) {
    return deepmerge(_0x42b1f0, _0x2f9d08, _0x11b729);
  }, {});
};
module.exports = deepmerge;