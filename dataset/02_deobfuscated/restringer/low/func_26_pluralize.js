function _0x2e59(_0x3b5ded, _0x3e2a8f) {
  _0x3b5ded = _0x3b5ded - 208;
  var _0x9c1726 = _0x9c17();
  var _0x2e5970 = _0x9c1726[_0x3b5ded];
  return _0x9c1726[_0x3b5ded];
}
(function (_0x4ed5bd, _0x3a2798) {
  var _0x1abb7b = _0x4ed5bd();
  while (true) {
    try {
      var _0x11d7be = 996439;
      if (996439 === _0x3a2798)
        break;
      else
        _0x1abb7b.push(_0x1abb7b.shift());
    } catch (_0x49f540) {
      _0x1abb7b.push(_0x1abb7b.shift());
    }
  }
}(_0x9c17, 996439));
(function (_0x3622d3, _0x27b5eb) {
  if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object')
    module.exports = _0x27b5eb();
  else
    typeof define === 'function' && define.amd ? define(function () {
      return _0x27b5eb();
    }) : _0x3622d3.pluralize = _0x27b5eb();
}(this, function () {
  var _0x363743 = [];
  var _0x4a8572 = [];
  var _0x3b8d47 = {};
  var _0x3d0d15 = {};
  var _0x5f4c66 = {};
  function _0x204478(_0x604831) {
    if (typeof _0x604831 === 'string')
      return new RegExp('^' + _0x604831 + '$', 'i');
    return _0x604831;
  }
  function _0xabbe24(_0x1cbb9a, _0x2f99aa) {
    if (_0x1cbb9a === _0x2f99aa)
      return _0x2f99aa;
    if (_0x1cbb9a === _0x1cbb9a.toLowerCase())
      return _0x2f99aa.toLowerCase();
    if (_0x1cbb9a === _0x1cbb9a.toUpperCase())
      return _0x2f99aa.toUpperCase();
    if (_0x1cbb9a[0] === _0x1cbb9a[0].toUpperCase())
      return _0x2f99aa.charAt(0).toUpperCase() + _0x2f99aa.substr(1).toLowerCase();
    return _0x2f99aa.toLowerCase();
  }
  function _0x2e2786(_0xb8e55c, _0x57c197) {
    return _0xb8e55c.replace(/\$(\d{1,2})/g, function (_0x4fbbdf, _0x2711c0) {
      return _0x57c197[_0x2711c0] || '';
    });
  }
  function _0x1f2992(_0x3f73e8, _0x4c9657) {
    return _0x3f73e8.replace(_0x4c9657[0], function (_0x1bcae3, _0x44e72e) {
      var _0x37b4c0 = _0x2e2786(_0x4c9657[1], arguments);
      if (_0x1bcae3 === '')
        return _0xabbe24(_0x3f73e8[_0x44e72e - 1], _0x37b4c0);
      return _0xabbe24(_0x1bcae3, _0x37b4c0);
    });
  }
  function _0x10bbc4(_0x1c2757, _0x37af2d, _0xa4c3d9) {
    if (!_0x1c2757.length || _0x3b8d47.hasOwnProperty(_0x1c2757))
      return _0x37af2d;
    var _0x479093 = _0xa4c3d9.length;
    while (_0x479093--) {
      var _0xd5c616 = _0xa4c3d9[_0x479093];
      if (_0xa4c3d9[_0x479093][0].test(_0x37af2d))
        return _0x1f2992(_0x37af2d, _0xa4c3d9[_0x479093]);
    }
    return _0x37af2d;
  }
  function _0x14525c(_0x73316a, _0x2d0459, _0x249139) {
    return function (_0x193756) {
      var _0x55c309 = _0x193756.toLowerCase();
      if (_0x2d0459.hasOwnProperty(_0x55c309))
        return _0xabbe24(_0x193756, _0x55c309);
      if (_0x73316a.hasOwnProperty(_0x55c309))
        return _0xabbe24(_0x193756, _0x73316a[_0x55c309]);
      return _0x10bbc4(_0x55c309, _0x193756, _0x249139);
    };
  }
  function _0x52649f(_0x366cb0, _0x1b63d2, _0x3464b3, _0x4c1f83) {
    return function (_0x29f26f) {
      var _0x1e3add = _0x29f26f.toLowerCase();
      if (_0x1b63d2.hasOwnProperty(_0x1e3add))
        return true;
      if (_0x366cb0.hasOwnProperty(_0x1e3add))
        return false;
      return _0x10bbc4(_0x1e3add, _0x1e3add, _0x3464b3) === _0x1e3add;
    };
  }
  function _0x14569f(_0x20ab78, _0x4127d0, _0x4dc249) {
    var _0x5bb006 = _0x4127d0 === 1 ? _0x14569f.singular(_0x20ab78) : _0x14569f.plural(_0x20ab78);
    return (_0x4dc249 ? _0x4127d0 + ' ' : '') + _0x5bb006;
  }
  _0x14569f.plural = _0x14525c(_0x5f4c66, _0x3d0d15, _0x363743);
  _0x14569f.isPlural = _0x52649f(_0x5f4c66, _0x3d0d15, _0x363743);
  _0x14569f.singular = _0x14525c(_0x3d0d15, _0x5f4c66, _0x4a8572);
  _0x14569f.isSingular = _0x52649f(_0x3d0d15, _0x5f4c66, _0x4a8572);
  _0x14569f.addPluralRule = function (_0x2de1c8, _0x5016da) {
    _0x363743.push([
      _0x204478(_0x2de1c8),
      _0x5016da
    ]);
  };
  _0x14569f.addSingularRule = function (_0x4fee55, _0x5b0562) {
    _0x4a8572.push([
      _0x204478(_0x4fee55),
      _0x5b0562
    ]);
  };
  _0x14569f.addUncountableRule = function (_0x3af84e) {
    if (typeof _0x3af84e === 'string') {
      _0x3b8d47[_0x3af84e.toLowerCase()] = true;
      return;
    }
    _0x14569f.addPluralRule(_0x3af84e, '$0');
    _0x14569f.addSingularRule(_0x3af84e, '$0');
  };
  _0x14569f.addIrregularRule = function (_0xb25a62, _0x5363a7) {
    _0x5363a7 = _0x5363a7.toLowerCase();
    _0xb25a62 = _0xb25a62.toLowerCase();
    _0x5f4c66[_0xb25a62] = _0x5363a7;
    _0x3d0d15[_0x5363a7] = _0xb25a62;
  };
  [
    [
      'I',
      'we'
    ],
    [
      'me',
      'us'
    ],
    [
      'he',
      'they'
    ],
    [
      'she',
      'they'
    ],
    [
      'them',
      'them'
    ],
    [
      'myself',
      'ourselves'
    ],
    [
      'yourself',
      'yourselves'
    ],
    [
      'itself',
      'themselves'
    ],
    [
      'herself',
      'themselves'
    ],
    [
      'himself',
      'themselves'
    ],
    [
      'themself',
      'themselves'
    ],
    [
      'is',
      'are'
    ],
    [
      'was',
      'were'
    ],
    [
      'has',
      'have'
    ],
    [
      'this',
      'these'
    ],
    [
      'that',
      'those'
    ],
    [
      'echo',
      'echoes'
    ],
    [
      'dingo',
      'dingoes'
    ],
    [
      'volcano',
      'volcanoes'
    ],
    [
      'tornado',
      'tornadoes'
    ],
    [
      'torpedo',
      'torpedoes'
    ],
    [
      'genus',
      'genera'
    ],
    [
      'viscus',
      'viscera'
    ],
    [
      'stigma',
      'stigmata'
    ],
    [
      'stoma',
      'stomata'
    ],
    [
      'dogma',
      'dogmata'
    ],
    [
      'lemma',
      'lemmata'
    ],
    [
      'schema',
      'schemata'
    ],
    [
      'anathema',
      'anathemata'
    ],
    [
      'ox',
      'oxen'
    ],
    [
      'axe',
      'axes'
    ],
    [
      'die',
      'dice'
    ],
    [
      'yes',
      'yeses'
    ],
    [
      'foot',
      'feet'
    ],
    [
      'eave',
      'eaves'
    ],
    [
      'goose',
      'geese'
    ],
    [
      'tooth',
      'teeth'
    ],
    [
      'quiz',
      'quizzes'
    ],
    [
      'human',
      'humans'
    ],
    [
      'proof',
      'proofs'
    ],
    [
      'carve',
      'carves'
    ],
    [
      'valve',
      'valves'
    ],
    [
      'looey',
      'looies'
    ],
    [
      'thief',
      'thieves'
    ],
    [
      'groove',
      'grooves'
    ],
    [
      'pickaxe',
      'pickaxes'
    ],
    [
      'passerby',
      'passersby'
    ]
  ].forEach(function (_0x37131b) {
    return _0x14569f.addIrregularRule(_0x37131b[0], _0x37131b[1]);
  });
  [
    [
      /s?$/i,
      's'
    ],
    [
      /[^\u0000-\u007F]$/i,
      '$0'
    ],
    [
      /([^aeiou]ese)$/i,
      '$1'
    ],
    [
      /(ax|test)is$/i,
      '$1es'
    ],
    [
      /(alias|[^aou]us|t[lm]as|gas|ris)$/i,
      '$1es'
    ],
    [
      /(e[mn]u)s?$/i,
      '$1s'
    ],
    [
      /([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,
      '$1'
    ],
    [
      /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
      '$1i'
    ],
    [
      /(alumn|alg|vertebr)(?:a|ae)$/i,
      '$1ae'
    ],
    [
      /(seraph|cherub)(?:im)?$/i,
      '$1im'
    ],
    [
      /(her|at|gr)o$/i,
      '$1oes'
    ],
    [
      /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
      '$1a'
    ],
    [
      /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
      '$1a'
    ],
    [
      /sis$/i,
      'ses'
    ],
    [
      /(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,
      '$1$2ves'
    ],
    [
      /([^aeiouy]|qu)y$/i,
      '$1ies'
    ],
    [
      /([^ch][ieo][ln])ey$/i,
      '$1ies'
    ],
    [
      /(x|ch|ss|sh|zz)$/i,
      '$1es'
    ],
    [
      /(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,
      '$1ices'
    ],
    [
      /\b((?:tit)?m|l)(?:ice|ouse)$/i,
      '$1ice'
    ],
    [
      /(pe)(?:rson|ople)$/i,
      '$1ople'
    ],
    [
      /(child)(?:ren)?$/i,
      '$1ren'
    ],
    [
      /eaux$/i,
      '$0'
    ],
    [
      /m[ae]n$/i,
      'men'
    ],
    [
      'thou',
      'you'
    ]
  ].forEach(function (_0x2d481a) {
    return _0x14569f.addPluralRule(_0x2d481a[0], _0x2d481a[1]);
  });
  [
    [
      /s$/i,
      ''
    ],
    [
      /(ss)$/i,
      '$1'
    ],
    [
      /(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,
      '$1fe'
    ],
    [
      /(ar|(?:wo|[ae])l|[eo][ao])ves$/i,
      '$1f'
    ],
    [
      /ies$/i,
      'y'
    ],
    [
      /\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,
      '$1ie'
    ],
    [
      /\b(mon|smil)ies$/i,
      '$1ey'
    ],
    [
      /\b((?:tit)?m|l)ice$/i,
      '$1ouse'
    ],
    [
      /(seraph|cherub)im$/i,
      '$1'
    ],
    [
      /(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,
      '$1'
    ],
    [
      /(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,
      '$1sis'
    ],
    [
      /(movie|twelve|abuse|e[mn]u)s$/i,
      '$1'
    ],
    [
      /(test)(?:is|es)$/i,
      '$1is'
    ],
    [
      /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
      '$1us'
    ],
    [
      /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,
      '$1um'
    ],
    [
      /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,
      '$1on'
    ],
    [
      /(alumn|alg|vertebr)ae$/i,
      '$1a'
    ],
    [
      /(cod|mur|sil|vert|ind)ices$/i,
      '$1ex'
    ],
    [
      /(matr|append)ices$/i,
      '$1ix'
    ],
    [
      /(pe)(rson|ople)$/i,
      '$1rson'
    ],
    [
      /(child)ren$/i,
      '$1'
    ],
    [
      /(eau)x?$/i,
      '$1'
    ],
    [
      /men$/i,
      'man'
    ]
  ].forEach(function (_0x222f05) {
    return _0x14569f.addSingularRule(_0x222f05[0], _0x222f05[1]);
  });
  [
    'adulthood',
    'advice',
    'agenda',
    'aid',
    'aircraft',
    'alcohol',
    'ammo',
    'analytics',
    'anime',
    'athletics',
    'audio',
    'bison',
    'blood',
    'bream',
    'buffalo',
    'butter',
    'carp',
    'cash',
    'chassis',
    'chess',
    'clothing',
    'cod',
    'commerce',
    'cooperation',
    'corps',
    'debris',
    'diabetes',
    'digestion',
    'elk',
    'energy',
    'equipment',
    'excretion',
    'expertise',
    'firmware',
    'flounder',
    'fun',
    'gallows',
    'garbage',
    'graffiti',
    'hardware',
    'headquarters',
    'health',
    'herpes',
    'highjinks',
    'homework',
    'housework',
    'information',
    'jeans',
    'justice',
    'kudos',
    'labour',
    'literature',
    'machinery',
    'mackerel',
    'mail',
    'media',
    'mews',
    'moose',
    'music',
    'mud',
    'manga',
    'news',
    'only',
    'personnel',
    'pike',
    'plankton',
    'pliers',
    'police',
    'pollution',
    'premises',
    'rain',
    'research',
    'rice',
    'salmon',
    'scissors',
    'series',
    'sewage',
    'shambles',
    'shrimp',
    'software',
    'species',
    'staff',
    'swine',
    'tennis',
    'traffic',
    'transportation',
    'trout',
    'tuna',
    'wealth',
    'welfare',
    'whiting',
    'wildebeest',
    'wildlife',
    'you',
    /pok[eé]mon$/i,
    /[^aeiou]ese$/i,
    /deer$/i,
    /fish$/i,
    /measles$/i,
    /o[iu]s$/i,
    /pox$/i,
    /sheep$/i
  ].forEach(_0x14569f.addUncountableRule);
  return _0x14569f;
}));
function _0x9c17() {
  var _0x2da903 = [
    'kudos',
    'housework',
    'carve',
    '219639ZWivRN',
    'alcohol',
    '6nlfxRZ',
    'agenda',
    'feet',
    'thieves',
    'firmware',
    'looey',
    'length',
    'transportation',
    'stigma',
    'fun',
    'music',
    '$1ren',
    'goose',
    '$1sis',
    'manga',
    'trout',
    'itself',
    'tornado',
    '$1a',
    '11305614LNVrvU',
    '470OKezbt',
    'myself',
    'grooves',
    '7cNqLKd',
    'anime',
    'media',
    'species',
    '$1ies',
    'toLowerCase',
    'pluralize',
    'equipment',
    'pike',
    'geese',
    'pollution',
    'forEach',
    'addUncountableRule',
    'volcano',
    'wildebeest',
    'groove',
    'hardware',
    'carves',
    'singular',
    'quiz',
    'welfare',
    'has',
    'was',
    'machinery',
    '$1fe',
    'research',
    'volcanoes',
    'have',
    '$1oes',
    'elk',
    '123935kuOhPG',
    'themselves',
    '$1rson',
    '$1s',
    'proofs',
    '$1ices',
    'sewage',
    'isSingular',
    'ammo',
    'audio',
    'tuna',
    'viscus',
    'isPlural',
    'these',
    '$1um',
    'highjinks',
    'pliers',
    'yes',
    'bream',
    'police',
    'replace',
    'tennis',
    'energy',
    'buffalo',
    'software',
    'series',
    '$1is',
    'teeth',
    'bison',
    'humans',
    '$1ople',
    'yourselves',
    '$1ae',
    'dice',
    'traffic',
    'health',
    'axes',
    'commerce',
    '$1ey',
    'literature',
    'athletics',
    'information',
    'gallows',
    'themself',
    'were',
    '6262408blzPMP',
    'axe',
    'jeans',
    'graffiti',
    'addSingularRule',
    'object',
    '$1us',
    'aid',
    'diabetes',
    'thief',
    'adulthood',
    'passerby',
    'pickaxes',
    '$1ie',
    'corps',
    'passersby',
    'rice',
    'yourself',
    'those',
    '$1on',
    '45089143ksyJBd',
    'she',
    'yeses',
    'eaves',
    'looies',
    'man',
    'eave',
    '$1f',
    'toUpperCase',
    'you',
    '12cnOxFv',
    'addPluralRule',
    'wealth',
    '$1i',
    'stoma',
    'human',
    'plankton',
    'pickaxe',
    'cash',
    'push',
    'blood',
    'wildlife',
    'genera',
    'swine',
    'chassis',
    'tornadoes',
    'ses',
    'torpedoes',
    'genus',
    'die',
    '$1im',
    'plural',
    'lemmata',
    'this',
    'butter',
    'echo',
    'schemata',
    'function',
    'torpedo',
    '347346AXFwoe',
    '$1$2ves',
    'hasOwnProperty',
    'foot',
    '$1es',
    '$1ex',
    'flounder',
    'ourselves',
    'garbage',
    'clothing',
    'echoes',
    'salmon',
    '$1ice',
    'aircraft',
    'anathema',
    'viscera',
    'are',
    'mail',
    'whiting',
    'expertise',
    '1192104baAyCt',
    'advice',
    'them',
    'dogmata',
    'anathemata',
    'rain',
    'justice'
  ];
  _0x9c17 = function () {
    return _0x2da903;
  };
  return _0x9c17();
}