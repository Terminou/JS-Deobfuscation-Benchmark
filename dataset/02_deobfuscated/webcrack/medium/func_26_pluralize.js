(function (_0x17b55f, _0x3888a3) {
  if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
    module.exports = _0x3888a3();
  } else if (typeof define === "function" && define.amd) {
    define(function () {
      return _0x3888a3();
    });
  } else {
    _0x17b55f.pluralize = _0x3888a3();
  }
})(this, function () {
  var _0x202083 = [];
  var _0x364fc2 = [];
  var _0x1c5e2a = {};
  var _0x53dfca = {};
  var _0x54fc42 = {};
  function _0xe3eb55(_0x394d0f) {
    if (typeof _0x394d0f === "string") {
      return new RegExp("^" + _0x394d0f + "$", "i");
    }
    return _0x394d0f;
  }
  function _0x469e78(_0x4d5da6, _0x16df17) {
    if (_0x4d5da6 === _0x16df17) {
      return _0x16df17;
    }
    if (_0x4d5da6 === _0x4d5da6.toLowerCase()) {
      return _0x16df17.toLowerCase();
    }
    if (_0x4d5da6 === _0x4d5da6.toUpperCase()) {
      return _0x16df17.toUpperCase();
    }
    if (_0x4d5da6[0] === _0x4d5da6[0].toUpperCase()) {
      return _0x16df17.charAt(0).toUpperCase() + _0x16df17.substr(1).toLowerCase();
    }
    return _0x16df17.toLowerCase();
  }
  function _0x107271(_0x20f9d5, _0xb9c571) {
    return _0x20f9d5.replace(/\$(\d{1,2})/g, function (_0x416d7d, _0x56118b) {
      return _0xb9c571[_0x56118b] || "";
    });
  }
  function _0x303171(_0x580432, _0x1aa347) {
    return _0x580432.replace(_0x1aa347[0], function (_0x40a0de, _0x3ce95f) {
      var _0x3d84de = _0x107271(_0x1aa347[1], arguments);
      if (_0x40a0de === "") {
        return _0x469e78(_0x580432[_0x3ce95f - 1], _0x3d84de);
      }
      return _0x469e78(_0x40a0de, _0x3d84de);
    });
  }
  function _0x7a15d9(_0x134312, _0x313c79, _0x1ab0fd) {
    if (!_0x134312.length || _0x1c5e2a.hasOwnProperty(_0x134312)) {
      return _0x313c79;
    }
    var _0x145b3c = _0x1ab0fd.length;
    while (_0x145b3c--) {
      var _0x4bf0a7 = _0x1ab0fd[_0x145b3c];
      if (_0x4bf0a7[0].test(_0x313c79)) {
        return _0x303171(_0x313c79, _0x4bf0a7);
      }
    }
    return _0x313c79;
  }
  function _0x429aaa(_0x11ef62, _0x283f1a, _0x432f80) {
    return function (_0x1d5e08) {
      var _0x1d4f01 = _0x1d5e08.toLowerCase();
      if (_0x283f1a.hasOwnProperty(_0x1d4f01)) {
        return _0x469e78(_0x1d5e08, _0x1d4f01);
      }
      if (_0x11ef62.hasOwnProperty(_0x1d4f01)) {
        return _0x469e78(_0x1d5e08, _0x11ef62[_0x1d4f01]);
      }
      return _0x7a15d9(_0x1d4f01, _0x1d5e08, _0x432f80);
    };
  }
  function _0x195242(_0x2033c4, _0x279c00, _0x557867, _0x19735b) {
    return function (_0x5b673b) {
      var _0x4a941e = _0x5b673b.toLowerCase();
      if (_0x279c00.hasOwnProperty(_0x4a941e)) {
        return true;
      }
      if (_0x2033c4.hasOwnProperty(_0x4a941e)) {
        return false;
      }
      return _0x7a15d9(_0x4a941e, _0x4a941e, _0x557867) === _0x4a941e;
    };
  }
  function _0x3e998f(_0x355fe0, _0x4a1c1a, _0x22fdc4) {
    var _0xf431ff = _0x4a1c1a === 1 ? _0x3e998f.singular(_0x355fe0) : _0x3e998f.plural(_0x355fe0);
    return (_0x22fdc4 ? _0x4a1c1a + " " : "") + _0xf431ff;
  }
  _0x3e998f.plural = _0x429aaa(_0x54fc42, _0x53dfca, _0x202083);
  _0x3e998f.isPlural = _0x195242(_0x54fc42, _0x53dfca, _0x202083);
  _0x3e998f.singular = _0x429aaa(_0x53dfca, _0x54fc42, _0x364fc2);
  _0x3e998f.isSingular = _0x195242(_0x53dfca, _0x54fc42, _0x364fc2);
  _0x3e998f.addPluralRule = function (_0xaefd12, _0x1eea8d) {
    _0x202083.push([_0xe3eb55(_0xaefd12), _0x1eea8d]);
  };
  _0x3e998f.addSingularRule = function (_0x55e825, _0x822723) {
    _0x364fc2.push([_0xe3eb55(_0x55e825), _0x822723]);
  };
  _0x3e998f.addUncountableRule = function (_0xceb82e) {
    if (typeof _0xceb82e === "string") {
      _0x1c5e2a[_0xceb82e.toLowerCase()] = true;
      return;
    }
    _0x3e998f.addPluralRule(_0xceb82e, "$0");
    _0x3e998f.addSingularRule(_0xceb82e, "$0");
  };
  _0x3e998f.addIrregularRule = function (_0x5c41c8, _0x51edf6) {
    _0x51edf6 = _0x51edf6.toLowerCase();
    _0x5c41c8 = _0x5c41c8.toLowerCase();
    _0x54fc42[_0x5c41c8] = _0x51edf6;
    _0x53dfca[_0x51edf6] = _0x5c41c8;
  };
  [["I", "we"], ["me", "us"], ["he", "they"], ["she", "they"], ["them", "them"], ["myself", "ourselves"], ["yourself", "yourselves"], ["itself", "themselves"], ["herself", "themselves"], ["himself", "themselves"], ["themself", "themselves"], ["is", "are"], ["was", "were"], ["has", "have"], ["this", "these"], ["that", "those"], ["echo", "echoes"], ["dingo", "dingoes"], ["volcano", "volcanoes"], ["tornado", "tornadoes"], ["torpedo", "torpedoes"], ["genus", "genera"], ["viscus", "viscera"], ["stigma", "stigmata"], ["stoma", "stomata"], ["dogma", "dogmata"], ["lemma", "lemmata"], ["schema", "schemata"], ["anathema", "anathemata"], ["ox", "oxen"], ["axe", "axes"], ["die", "dice"], ["yes", "yeses"], ["foot", "feet"], ["eave", "eaves"], ["goose", "geese"], ["tooth", "teeth"], ["quiz", "quizzes"], ["human", "humans"], ["proof", "proofs"], ["carve", "carves"], ["valve", "valves"], ["looey", "looies"], ["thief", "thieves"], ["groove", "grooves"], ["pickaxe", "pickaxes"], ["passerby", "passersby"]].forEach(function (_0x1fa820) {
    return _0x3e998f.addIrregularRule(_0x1fa820[0], _0x1fa820[1]);
  });
  [[/s?$/i, "s"], [/[^\u0000-\u007F]$/i, "$0"], [/([^aeiou]ese)$/i, "$1"], [/(ax|test)is$/i, "$1es"], [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"], [/(e[mn]u)s?$/i, "$1s"], [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"], [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"], [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"], [/(seraph|cherub)(?:im)?$/i, "$1im"], [/(her|at|gr)o$/i, "$1oes"], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"], [/sis$/i, "ses"], [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"], [/([^aeiouy]|qu)y$/i, "$1ies"], [/([^ch][ieo][ln])ey$/i, "$1ies"], [/(x|ch|ss|sh|zz)$/i, "$1es"], [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"], [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"], [/(pe)(?:rson|ople)$/i, "$1ople"], [/(child)(?:ren)?$/i, "$1ren"], [/eaux$/i, "$0"], [/m[ae]n$/i, "men"], ["thou", "you"]].forEach(function (_0x473541) {
    return _0x3e998f.addPluralRule(_0x473541[0], _0x473541[1]);
  });
  [[/s$/i, ""], [/(ss)$/i, "$1"], [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"], [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"], [/ies$/i, "y"], [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, "$1ie"], [/\b(mon|smil)ies$/i, "$1ey"], [/\b((?:tit)?m|l)ice$/i, "$1ouse"], [/(seraph|cherub)im$/i, "$1"], [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, "$1"], [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"], [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"], [/(test)(?:is|es)$/i, "$1is"], [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"], [/(alumn|alg|vertebr)ae$/i, "$1a"], [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"], [/(matr|append)ices$/i, "$1ix"], [/(pe)(rson|ople)$/i, "$1rson"], [/(child)ren$/i, "$1"], [/(eau)x?$/i, "$1"], [/men$/i, "man"]].forEach(function (_0x496e2a) {
    return _0x3e998f.addSingularRule(_0x496e2a[0], _0x496e2a[1]);
  });
  ["adulthood", "advice", "agenda", "aid", "aircraft", "alcohol", "ammo", "analytics", "anime", "athletics", "audio", "bison", "blood", "bream", "buffalo", "butter", "carp", "cash", "chassis", "chess", "clothing", "cod", "commerce", "cooperation", "corps", "debris", "diabetes", "digestion", "elk", "energy", "equipment", "excretion", "expertise", "firmware", "flounder", "fun", "gallows", "garbage", "graffiti", "hardware", "headquarters", "health", "herpes", "highjinks", "homework", "housework", "information", "jeans", "justice", "kudos", "labour", "literature", "machinery", "mackerel", "mail", "media", "mews", "moose", "music", "mud", "manga", "news", "only", "personnel", "pike", "plankton", "pliers", "police", "pollution", "premises", "rain", "research", "rice", "salmon", "scissors", "series", "sewage", "shambles", "shrimp", "software", "species", "staff", "swine", "tennis", "traffic", "transportation", "trout", "tuna", "wealth", "welfare", "whiting", "wildebeest", "wildlife", "you", /pok[eé]mon$/i, /[^aeiou]ese$/i, /deer$/i, /fish$/i, /measles$/i, /o[iu]s$/i, /pox$/i, /sheep$/i].forEach(_0x3e998f.addUncountableRule);
  return _0x3e998f;
});