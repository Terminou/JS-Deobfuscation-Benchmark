(function (_0x3b5ded, _0x3e2a8f) {
  if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
    module.exports = _0x3e2a8f();
  } else if (typeof define === "function" && define.amd) {
    define(function () {
      return _0x3e2a8f();
    });
  } else {
    _0x3b5ded.pluralize = _0x3e2a8f();
  }
}(this, function () {
  var _0x9c1726 = [];
  var _0x2e5970 = [];
  var _0x4b5251 = {};
  var _0x2edc85 = {};
  var _0x4687c0 = {};
  function _0x5a5162(_0x3d0d15) {
    if (typeof _0x3d0d15 === "string") {
      return new RegExp("^" + _0x3d0d15 + "$", "i");
    }
    return _0x3d0d15;
  }
  function _0x50a6ff(_0x5f4c66, _0x204478) {
    if (_0x5f4c66 === _0x204478) return _0x204478;
    if (_0x5f4c66 === _0x5f4c66.toLowerCase()) return _0x204478.toLowerCase();
    if (_0x5f4c66 === _0x5f4c66.toUpperCase()) return _0x204478.toUpperCase();
    if (_0x5f4c66[0] === _0x5f4c66[0].toUpperCase()) {
      return _0x204478.charAt(0).toUpperCase() + _0x204478.substr(1).toLowerCase();
    }
    return _0x204478.toLowerCase();
  }
  function _0x42330e(_0xabbe24, _0x2e2786) {
    return _0xabbe24.replace(/\$(\d{1,2})/g, function (_0x1f2992, _0x10bbc4) {
      return _0x2e2786[_0x10bbc4] || "";
    });
  }
  function _0x3622d3(_0x14525c, _0x52649f) {
    return _0x14525c.replace(_0x52649f[0], function (_0x14569f, _0x604831) {
      var _0x1cbb9a = _0x42330e(_0x52649f[1], arguments);
      if (_0x14569f === "") {
        return _0x50a6ff(_0x14525c[_0x604831 - 1], _0x1cbb9a);
      }
      return _0x50a6ff(_0x14569f, _0x1cbb9a);
    });
  }
  function _0x27b5eb(_0x2f99aa, _0xb8e55c, _0x57c197) {
    if (!_0x2f99aa.length || _0x4b5251.hasOwnProperty(_0x2f99aa)) {
      return _0xb8e55c;
    }
    var _0x4fbbdf = _0x57c197.length;
    while (_0x4fbbdf--) {
      var _0x2711c0 = _0x57c197[_0x4fbbdf];
      if (_0x2711c0[0].test(_0xb8e55c)) return _0x3622d3(_0xb8e55c, _0x2711c0);
    }
    return _0xb8e55c;
  }
  function _0x363743(_0x3f73e8, _0x4c9657, _0x1bcae3) {
    return function (_0x44e72e) {
      var _0x37b4c0 = _0x44e72e.toLowerCase();
      if (_0x4c9657.hasOwnProperty(_0x37b4c0)) {
        return _0x50a6ff(_0x44e72e, _0x37b4c0);
      }
      if (_0x3f73e8.hasOwnProperty(_0x37b4c0)) {
        return _0x50a6ff(_0x44e72e, _0x3f73e8[_0x37b4c0]);
      }
      return _0x27b5eb(_0x37b4c0, _0x44e72e, _0x1bcae3);
    };
  }
  function _0x4a8572(_0x1c2757, _0x37af2d, _0xa4c3d9, _0x479093) {
    return function (_0xd5c616) {
      var _0x73316a = _0xd5c616.toLowerCase();
      if (_0x37af2d.hasOwnProperty(_0x73316a)) return true;
      if (_0x1c2757.hasOwnProperty(_0x73316a)) return false;
      return _0x27b5eb(_0x73316a, _0x73316a, _0xa4c3d9) === _0x73316a;
    };
  }
  function _0x3b8d47(_0x2d0459, _0x249139, _0x193756) {
    var _0x55c309 = _0x249139 === 1 ? _0x3b8d47.singular(_0x2d0459) : _0x3b8d47.plural(_0x2d0459);
    return (_0x193756 ? _0x249139 + " " : "") + _0x55c309;
  }
  _0x3b8d47.plural = _0x363743(_0x4687c0, _0x2edc85, _0x9c1726);
  _0x3b8d47.isPlural = _0x4a8572(_0x4687c0, _0x2edc85, _0x9c1726);
  _0x3b8d47.singular = _0x363743(_0x2edc85, _0x4687c0, _0x2e5970);
  _0x3b8d47.isSingular = _0x4a8572(_0x2edc85, _0x4687c0, _0x2e5970);
  _0x3b8d47.addPluralRule = function (_0x366cb0, _0x1b63d2) {
    _0x9c1726.push([_0x5a5162(_0x366cb0), _0x1b63d2]);
  };
  _0x3b8d47.addSingularRule = function (_0x3464b3, _0x4c1f83) {
    _0x2e5970.push([_0x5a5162(_0x3464b3), _0x4c1f83]);
  };
  _0x3b8d47.addUncountableRule = function (_0x29f26f) {
    if (typeof _0x29f26f === "string") {
      _0x4b5251[_0x29f26f.toLowerCase()] = true;
      return;
    }
    _0x3b8d47.addPluralRule(_0x29f26f, "$0");
    _0x3b8d47.addSingularRule(_0x29f26f, "$0");
  };
  _0x3b8d47.addIrregularRule = function (_0x1e3add, _0x20ab78) {
    _0x20ab78 = _0x20ab78.toLowerCase();
    _0x1e3add = _0x1e3add.toLowerCase();
    _0x4687c0[_0x1e3add] = _0x20ab78;
    _0x2edc85[_0x20ab78] = _0x1e3add;
  };
  [["I", "we"], ["me", "us"], ["he", "they"], ["she", "they"], ["them", "them"], ["myself", "ourselves"], ["yourself", "yourselves"], ["itself", "themselves"], ["herself", "themselves"], ["himself", "themselves"], ["themself", "themselves"], ["is", "are"], ["was", "were"], ["has", "have"], ["this", "these"], ["that", "those"], ["echo", "echoes"], ["dingo", "dingoes"], ["volcano", "volcanoes"], ["tornado", "tornadoes"], ["torpedo", "torpedoes"], ["genus", "genera"], ["viscus", "viscera"], ["stigma", "stigmata"], ["stoma", "stomata"], ["dogma", "dogmata"], ["lemma", "lemmata"], ["schema", "schemata"], ["anathema", "anathemata"], ["ox", "oxen"], ["axe", "axes"], ["die", "dice"], ["yes", "yeses"], ["foot", "feet"], ["eave", "eaves"], ["goose", "geese"], ["tooth", "teeth"], ["quiz", "quizzes"], ["human", "humans"], ["proof", "proofs"], ["carve", "carves"], ["valve", "valves"], ["looey", "looies"], ["thief", "thieves"], ["groove", "grooves"], ["pickaxe", "pickaxes"], ["passerby", "passersby"]].forEach(function (_0x4127d0) {
    return _0x3b8d47.addIrregularRule(_0x4127d0[0], _0x4127d0[1]);
  });
  [[/s?$/i, "s"], [/[^\u0000-\u007F]$/i, "$0"], [/([^aeiou]ese)$/i, "$1"], [/(ax|test)is$/i, "$1es"], [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"], [/(e[mn]u)s?$/i, "$1s"], [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"], [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"], [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"], [/(seraph|cherub)(?:im)?$/i, "$1im"], [/(her|at|gr)o$/i, "$1oes"], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"], [/sis$/i, "ses"], [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"], [/([^aeiouy]|qu)y$/i, "$1ies"], [/([^ch][ieo][ln])ey$/i, "$1ies"], [/(x|ch|ss|sh|zz)$/i, "$1es"], [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"], [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"], [/(pe)(?:rson|ople)$/i, "$1ople"], [/(child)(?:ren)?$/i, "$1ren"], [/eaux$/i, "$0"], [/m[ae]n$/i, "men"], ["thou", "you"]].forEach(function (_0x4dc249) {
    return _0x3b8d47.addPluralRule(_0x4dc249[0], _0x4dc249[1]);
  });
  [[/s$/i, ""], [/(ss)$/i, "$1"], [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"], [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"], [/ies$/i, "y"], [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, "$1ie"], [/\b(mon|smil)ies$/i, "$1ey"], [/\b((?:tit)?m|l)ice$/i, "$1ouse"], [/(seraph|cherub)im$/i, "$1"], [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, "$1"], [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"], [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"], [/(test)(?:is|es)$/i, "$1is"], [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"], [/(alumn|alg|vertebr)ae$/i, "$1a"], [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"], [/(matr|append)ices$/i, "$1ix"], [/(pe)(rson|ople)$/i, "$1rson"], [/(child)ren$/i, "$1"], [/(eau)x?$/i, "$1"], [/men$/i, "man"]].forEach(function (_0x5bb006) {
    return _0x3b8d47.addSingularRule(_0x5bb006[0], _0x5bb006[1]);
  });
  ["adulthood", "advice", "agenda", "aid", "aircraft", "alcohol", "ammo", "analytics", "anime", "athletics", "audio", "bison", "blood", "bream", "buffalo", "butter", "carp", "cash", "chassis", "chess", "clothing", "cod", "commerce", "cooperation", "corps", "debris", "diabetes", "digestion", "elk", "energy", "equipment", "excretion", "expertise", "firmware", "flounder", "fun", "gallows", "garbage", "graffiti", "hardware", "headquarters", "health", "herpes", "highjinks", "homework", "housework", "information", "jeans", "justice", "kudos", "labour", "literature", "machinery", "mackerel", "mail", "media", "mews", "moose", "music", "mud", "manga", "news", "only", "personnel", "pike", "plankton", "pliers", "police", "pollution", "premises", "rain", "research", "rice", "salmon", "scissors", "series", "sewage", "shambles", "shrimp", "software", "species", "staff", "swine", "tennis", "traffic", "transportation", "trout", "tuna", "wealth", "welfare", "whiting", "wildebeest", "wildlife", "you", /pok[eé]mon$/i, /[^aeiou]ese$/i, /deer$/i, /fish$/i, /measles$/i, /o[iu]s$/i, /pox$/i, /sheep$/i].forEach(_0x3b8d47.addUncountableRule);
  return _0x3b8d47;
}));
