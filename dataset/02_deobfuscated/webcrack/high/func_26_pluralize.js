(function (_0x339de3, _0x43503a) {
  if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
    module.exports = _0x43503a();
  } else if (typeof define === "function" && define.amd) {
    define(function () {
      return _0x43503a();
    });
  } else {
    _0x339de3.pluralize = _0x43503a();
  }
})(this, function () {
  var _0x1a2041 = [];
  var _0x39f9e8 = [];
  var _0x89a0f6 = {};
  var _0xe0e17f = {};
  var _0x2c47cd = {};
  function _0x5eabce(_0x1ea54f) {
    if (typeof _0x1ea54f === "string") {
      return new RegExp("^" + _0x1ea54f + "$", "i");
    }
    return _0x1ea54f;
  }
  function _0x27be8b(_0x23bce0, _0x4f38c5) {
    if (_0x23bce0 === _0x4f38c5) {
      return _0x4f38c5;
    }
    if (_0x23bce0 === _0x23bce0.toLowerCase()) {
      return _0x4f38c5.toLowerCase();
    }
    if (_0x23bce0 === _0x23bce0.toUpperCase()) {
      return _0x4f38c5.toUpperCase();
    }
    if (_0x23bce0[0] === _0x23bce0[0].toUpperCase()) {
      return _0x4f38c5.charAt(0).toUpperCase() + _0x4f38c5.substr(1).toLowerCase();
    }
    return _0x4f38c5.toLowerCase();
  }
  function _0x2dd871(_0x1506e6, _0xf731a1) {
    return _0x1506e6.replace(/\$(\d{1,2})/g, function (_0x4607c8, _0xfae30b) {
      return _0xf731a1[_0xfae30b] || "";
    });
  }
  function _0x3d890d(_0x4c9c5b, _0x4c4525) {
    return _0x4c9c5b.replace(_0x4c4525[0], function (_0x17bf90, _0xbbaf11) {
      var _0x2ae136 = _0x2dd871(_0x4c4525[1], arguments);
      if (_0x17bf90 === "") {
        return _0x27be8b(_0x4c9c5b[_0xbbaf11 - 1], _0x2ae136);
      }
      return _0x27be8b(_0x17bf90, _0x2ae136);
    });
  }
  function _0x501047(_0x402b5c, _0x59238a, _0x2297dc) {
    if (!_0x402b5c.length || _0x89a0f6.hasOwnProperty(_0x402b5c)) {
      return _0x59238a;
    }
    var _0x3ee7c = _0x2297dc.length;
    while (_0x3ee7c--) {
      var _0x46f924 = _0x2297dc[_0x3ee7c];
      if (_0x46f924[0].test(_0x59238a)) {
        return _0x3d890d(_0x59238a, _0x46f924);
      }
    }
    return _0x59238a;
  }
  function _0x239af9(_0x257a87, _0x4d0f01, _0x572185) {
    return function (_0x26204d) {
      var _0x2d11d3 = _0x26204d.toLowerCase();
      if (_0x4d0f01.hasOwnProperty(_0x2d11d3)) {
        return _0x27be8b(_0x26204d, _0x2d11d3);
      }
      if (_0x257a87.hasOwnProperty(_0x2d11d3)) {
        return _0x27be8b(_0x26204d, _0x257a87[_0x2d11d3]);
      }
      return _0x501047(_0x2d11d3, _0x26204d, _0x572185);
    };
  }
  function _0x58cf1a(_0x3e7e86, _0x11b4b0, _0x523444, _0x4d2c7f) {
    return function (_0x3d62ad) {
      var _0x49325c = _0x3d62ad.toLowerCase();
      if (_0x11b4b0.hasOwnProperty(_0x49325c)) {
        return true;
      }
      if (_0x3e7e86.hasOwnProperty(_0x49325c)) {
        return false;
      }
      return _0x501047(_0x49325c, _0x49325c, _0x523444) === _0x49325c;
    };
  }
  function _0x413266(_0x2eb76b, _0x592d11, _0x5a58cf) {
    var _0xe47ba8 = _0x592d11 === 1 ? _0x413266.singular(_0x2eb76b) : _0x413266.plural(_0x2eb76b);
    return (_0x5a58cf ? _0x592d11 + " " : "") + _0xe47ba8;
  }
  _0x413266.plural = _0x239af9(_0x2c47cd, _0xe0e17f, _0x1a2041);
  _0x413266.isPlural = _0x58cf1a(_0x2c47cd, _0xe0e17f, _0x1a2041);
  _0x413266.singular = _0x239af9(_0xe0e17f, _0x2c47cd, _0x39f9e8);
  _0x413266.isSingular = _0x58cf1a(_0xe0e17f, _0x2c47cd, _0x39f9e8);
  _0x413266.addPluralRule = function (_0x125bd0, _0x10d5c5) {
    _0x1a2041.push([_0x5eabce(_0x125bd0), _0x10d5c5]);
  };
  _0x413266.addSingularRule = function (_0x133fda, _0x51723c) {
    _0x39f9e8.push([_0x5eabce(_0x133fda), _0x51723c]);
  };
  _0x413266.addUncountableRule = function (_0x415646) {
    if (typeof _0x415646 === "string") {
      _0x89a0f6[_0x415646.toLowerCase()] = true;
      return;
    }
    _0x413266.addPluralRule(_0x415646, "$0");
    _0x413266.addSingularRule(_0x415646, "$0");
  };
  _0x413266.addIrregularRule = function (_0x47b7a8, _0x5ce570) {
    _0x5ce570 = _0x5ce570.toLowerCase();
    _0x47b7a8 = _0x47b7a8.toLowerCase();
    _0x2c47cd[_0x47b7a8] = _0x5ce570;
    _0xe0e17f[_0x5ce570] = _0x47b7a8;
  };
  [["I", "we"], ["me", "us"], ["he", "they"], ["she", "they"], ["them", "them"], ["myself", "ourselves"], ["yourself", "yourselves"], ["itself", "themselves"], ["herself", "themselves"], ["himself", "themselves"], ["themself", "themselves"], ["is", "are"], ["was", "were"], ["has", "have"], ["this", "these"], ["that", "those"], ["echo", "echoes"], ["dingo", "dingoes"], ["volcano", "volcanoes"], ["tornado", "tornadoes"], ["torpedo", "torpedoes"], ["genus", "genera"], ["viscus", "viscera"], ["stigma", "stigmata"], ["stoma", "stomata"], ["dogma", "dogmata"], ["lemma", "lemmata"], ["schema", "schemata"], ["anathema", "anathemata"], ["ox", "oxen"], ["axe", "axes"], ["die", "dice"], ["yes", "yeses"], ["foot", "feet"], ["eave", "eaves"], ["goose", "geese"], ["tooth", "teeth"], ["quiz", "quizzes"], ["human", "humans"], ["proof", "proofs"], ["carve", "carves"], ["valve", "valves"], ["looey", "looies"], ["thief", "thieves"], ["groove", "grooves"], ["pickaxe", "pickaxes"], ["passerby", "passersby"]].forEach(function (_0x48ced6) {
    return _0x413266.addIrregularRule(_0x48ced6[0], _0x48ced6[1]);
  });
  [[/s?$/i, "s"], [/[^\u0000-\u007F]$/i, "$0"], [/([^aeiou]ese)$/i, "$1"], [/(ax|test)is$/i, "$1es"], [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"], [/(e[mn]u)s?$/i, "$1s"], [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"], [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"], [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"], [/(seraph|cherub)(?:im)?$/i, "$1im"], [/(her|at|gr)o$/i, "$1oes"], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"], [/sis$/i, "ses"], [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"], [/([^aeiouy]|qu)y$/i, "$1ies"], [/([^ch][ieo][ln])ey$/i, "$1ies"], [/(x|ch|ss|sh|zz)$/i, "$1es"], [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"], [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"], [/(pe)(?:rson|ople)$/i, "$1ople"], [/(child)(?:ren)?$/i, "$1ren"], [/eaux$/i, "$0"], [/m[ae]n$/i, "men"], ["thou", "you"]].forEach(function (_0x35f23f) {
    return _0x413266.addPluralRule(_0x35f23f[0], _0x35f23f[1]);
  });
  [[/s$/i, ""], [/(ss)$/i, "$1"], [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"], [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"], [/ies$/i, "y"], [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, "$1ie"], [/\b(mon|smil)ies$/i, "$1ey"], [/\b((?:tit)?m|l)ice$/i, "$1ouse"], [/(seraph|cherub)im$/i, "$1"], [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, "$1"], [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"], [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"], [/(test)(?:is|es)$/i, "$1is"], [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"], [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"], [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"], [/(alumn|alg|vertebr)ae$/i, "$1a"], [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"], [/(matr|append)ices$/i, "$1ix"], [/(pe)(rson|ople)$/i, "$1rson"], [/(child)ren$/i, "$1"], [/(eau)x?$/i, "$1"], [/men$/i, "man"]].forEach(function (_0xc36a51) {
    return _0x413266.addSingularRule(_0xc36a51[0], _0xc36a51[1]);
  });
  ["adulthood", "advice", "agenda", "aid", "aircraft", "alcohol", "ammo", "analytics", "anime", "athletics", "audio", "bison", "blood", "bream", "buffalo", "butter", "carp", "cash", "chassis", "chess", "clothing", "cod", "commerce", "cooperation", "corps", "debris", "diabetes", "digestion", "elk", "energy", "equipment", "excretion", "expertise", "firmware", "flounder", "fun", "gallows", "garbage", "graffiti", "hardware", "headquarters", "health", "herpes", "highjinks", "homework", "housework", "information", "jeans", "justice", "kudos", "labour", "literature", "machinery", "mackerel", "mail", "media", "mews", "moose", "music", "mud", "manga", "news", "only", "personnel", "pike", "plankton", "pliers", "police", "pollution", "premises", "rain", "research", "rice", "salmon", "scissors", "series", "sewage", "shambles", "shrimp", "software", "species", "staff", "swine", "tennis", "traffic", "transportation", "trout", "tuna", "wealth", "welfare", "whiting", "wildebeest", "wildlife", "you", /pok[eé]mon$/i, /[^aeiou]ese$/i, /deer$/i, /fish$/i, /measles$/i, /o[iu]s$/i, /pox$/i, /sheep$/i].forEach(_0x413266.addUncountableRule);
  return _0x413266;
});