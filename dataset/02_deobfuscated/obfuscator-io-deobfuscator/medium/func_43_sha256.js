/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 1.0.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2026
 * @license MIT
 */
'use strict';

(function (_0x559595, _0x536bb1) {
  const _0x1c433c = _0x559595();
  while (true) {
    try {
      const _0x30513d = parseInt(_0x4f51(309, 0x126)) / 1 + -parseInt(_0x4f51(333, 0x147)) / 2 * (parseInt(_0x4f51(275, 0xf2)) / 3) + parseInt(_0x4f51(338, -0x159)) / 4 + -parseInt(_0x4f51(322, -0x174)) / 5 * (-parseInt(_0x4f51(342, -0x155)) / 6) + parseInt(_0x4f51(303, -0x172)) / 7 + -parseInt(_0x4f51(294, -0x180)) / 8 + -parseInt(_0x4f51(302, 0x140)) / 9 * (-parseInt(_0x4f51(278, -0x1a6)) / 10);
      if (_0x30513d === _0x536bb1) {
        break;
      } else {
        _0x1c433c.push(_0x1c433c.shift());
      }
    } catch (_0x35b22b) {
      _0x1c433c.push(_0x1c433c.shift());
    }
  }
})(_0x55c3, 448800);
var crypto = require(_0x4f51(330, 0x435));
var INPUT_ERROR = _0x4f51(311, 0x439) + _0x4f51(334, 0x43d) + 'e';
var FINALIZE_ERROR = "finalize a" + _0x4f51(332, 0x470) + _0x4f51(290, 0x41d);
var ARRAY_BUFFER = typeof ArrayBuffer !== _0x4f51(293, 0x447);
var formatMessage = function (_0x2a58d9) {
  const _0x43ad95 = {
    'WAKbx': function (_0x506dad, ..._0x36cca1) {
      return _0x506dad(..._0x36cca1);
    },
    'hxpbX': function (_0x296592, _0x34a57a) {
      return _0x296592 - _0x34a57a;
    },
    'qqyna': function (_0x2fd755, _0x861b6) {
      return _0x2fd755(_0x861b6);
    },
    'YzmmI': function (_0x2abbae, _0x17375f) {
      return _0x2abbae === _0x17375f;
    },
    'lswRR': function (_0x12912f, _0x55e579) {
      return _0x12912f && _0x55e579;
    },
    'SSvuM': _0x4f51(281, -0x6a),
    'CsoXk': function (_0x37106f, _0x1ec963) {
      return _0x37106f === _0x1ec963;
    },
    'vdPED': function (_0x39e04b, _0x52837e) {
      return _0x39e04b !== _0x52837e;
    },
    'xxKFn': _0x4f51(295, -0x282),
    'DNbMd': _0x4f51(328, -0x251)
  };
  var _0x2b7eb7 = typeof _0x2a58d9;
  if (_0x43ad95[_0x4f51(329, -0x48)](_0x2b7eb7, _0x4f51(272, -0x7f))) {
    return [_0x2a58d9, true];
  }
  if (Array[_0x4f51(283, -0x28b)](_0x2a58d9)) {
    return [_0x2a58d9, false];
  }
  if (_0x43ad95[_0x4f51(308, -0x20)](ARRAY_BUFFER, _0x2a58d9)) {
    if (_0x43ad95.SSvuM !== _0x4f51(299, -0x3e)) {
      if (_0x43ad95[_0x4f51(291, -0x62)](_0x2a58d9[_0x4f51(301, -0x4f) + 'r'], ArrayBuffer)) {
        return _0x43ad95[_0x4f51(326, -0x255)](_0x43ad95[_0x4f51(316, -0x24)], _0x43ad95.DNbMd) ? [new Uint8Array(_0x2a58d9), false] : _0x43ad95[_0x4f51(286, -0x2a3)](_0x4fd267, ..._0x5b42fc.slice(0, -1)).update(_0x245c38[_0x43ad95[_0x4f51(336, 0x5)](_0x22fb2c.length, 1)])[_0x4f51(344, -0x25f) + 'r']();
      } else {
        if (ArrayBuffer[_0x4f51(274, -0x287)](_0x2a58d9)) {
          return [_0x2a58d9, false];
        }
      }
    } else {
      if (this[_0x4f51(277, -0x2a1)]) {
        throw new _0x416f67(_0x2e68b3);
      }
      this[_0x4f51(315, -0x16)][_0x4f51(287, -0x2a5)](_0x43ad95[_0x4f51(276, -0x29e)](_0x101199, _0x5c9c4c));
      return this;
    }
  }
  throw new Error(INPUT_ERROR);
};
function toNodeInput(_0x4801d7) {
  const [_0x4c3a67, _0x3c7c10] = formatMessage(_0x4801d7);
  return _0x3c7c10 ? Buffer[_0x4f51(341, 0x26b)](_0x4c3a67, _0x4f51(305, 0x254)) : Buffer.from(_0x4c3a67);
}
class NodeHasher {
  constructor(_0x11d10b) {
    this[_0x4f51(315, 0x28c)] = _0x11d10b;
    this.result = undefined;
  }
  [_0x4f51(287, 0x432)](_0x5833aa) {
    const _0x758b09 = {
      'tryRp': function (_0x5cecbc, _0x20bd0c) {
        return _0x5cecbc !== _0x20bd0c;
      },
      'fSFLs': _0x4f51(313, -0x158),
      'IOiDE': _0x4f51(280, 0x16e),
      'YiccK': function (_0x2fae9a, _0x3198e4) {
        return _0x2fae9a(_0x3198e4);
      }
    };
    if (this.result) {
      if (_0x758b09[_0x4f51(304, 0x161)](_0x758b09[_0x4f51(339, -0x141)], _0x758b09[_0x4f51(337, -0x104)])) {
        throw new Error(FINALIZE_ERROR);
      } else {
        return _0x1a9e10[_0x4f51(289, -0x14e)]()[_0x4f51(287, 0x16b)](_0x3efacb);
      }
    }
    this[_0x4f51(315, -0x121)].update(toNodeInput(_0x5833aa));
    return this;
  }
  [_0x4f51(306, 0x426)]() {
    const _0x2ebb09 = {
      [_0x4f51(292, 0xca)]: function (_0x1a9ad4, _0x253390) {
        return _0x1a9ad4 !== _0x253390;
      },
      [_0x4f51(335, 0x10e)]: _0x4f51(340, 0x121)
    };
    if (!this[_0x4f51(277, 0x6e)]) {
      if (_0x2ebb09[_0x4f51(292, 0x77)](_0x2ebb09.MzqYz, _0x4f51(288, 0xa7))) {
        this[_0x4f51(277, 0xcf)] = this.hash[_0x4f51(318, 0xae)]();
        this.hash = undefined;
      } else {
        return [_0x1b82cb, false];
      }
    }
  }
  [_0x4f51(298, 0x45d)]() {
    this[_0x4f51(306, 0x1e8)]();
    return this.result.toString(_0x4f51(298, 0x1ee));
  }
  [_0x4f51(327, 0x464)]() {
    return this.hex();
  }
  ['array']() {
    this.finalize();
    return Array[_0x4f51(341, 0x49c)](this[_0x4f51(277, -0xa0)]);
  }
  ['digest']() {
    return this.array();
  }
  ["arrayBuffer"]() {
    return Uint8Array[_0x4f51(341, 0x414)](this[_0x4f51(300, 0x3e6)]())[_0x4f51(284, -0x161)];
  }
}
function _0x55c3() {
  const _0x118cee = ['Cxf5BMe', 'CMvZDwX0', 'ndi4ntbpyMTqvfi', 'y3HIz3i', 'u0P1vu8', 'C3ftyKO', 'A2HSuNe', 'AxnbCNjHEq', 'yNvMzMvY', 'ENPMBxi', 'v0flyNG', 'DxbKyxrL', 'CuH2vMK', 'y3jLyxrL', 'BgvK', 'q3nVwgS', 'BfL3wwe', 'Dw5KzwzPBMvK', 'nJmXmtK5mLbks2TLsW', 'zLfJr0W', 'tMnwC0K', 'Ag1HyW', 'Agv4', 'A0nzqva', 'yxjYyxK', 'y29UC3rYDwn0BW', 'otblCeHkuNe', 'mZuZnJy4mgrWEuXbEq', 'Dhj5uNa', 'DxrMoa', 'zMLUywXPEMu', 'B2DTANe', 'Bhn3uLi', 'nJmXnJeWEKjuDwfl', 'vwzTqMC', 'Aw5WDxqGAxmGAq', 'C2HHmJu2', 's2zkzMq', 'C2HHmJi0', 'AgfZAa', 'EhHlrM4', 'y3jLyxrLsgfZAa', 'zgLNzxn0', 'BMTOBLm', 'D2TWvNq', 'rhrhC1C', 'mtq3nuXishnMuG', 'zxHWB3j0CW', 's1fssM8', 'C2XPy2u', 'DMrqruq', 'Dg9tDhjPBMC', 'turgyw8', 'wxPTBuK', 'y3j5ChrV', 'BgvUz3rO', 'BhjLywr5ignHBa', 'ndyYota4zLPOzwPP', 'BNzHBgLKihr5Ca', 'txPXwxO', 'AhHWyLG', 'su9Preu', 'mtaWmZyZmNLssMLmsW', 'zLngthm', 'weTmExC', 'zNjVBq', 'nZG2r3bQtKzz', 'Axj0DgC', 'yxjYyxLcDwzMzq', 'C3rYAw5N', 'rLnjDxm', 'AxnwAwv3', 'm3jdr254Eq'];
  _0x55c3 = function () {
    return _0x118cee;
  };
  return _0x55c3();
}
function addOutputMethods(_0x3780a5, _0x5cb169) {
  const _0x29eb9a = {
    'UfmBg': function (_0x770a3b, ..._0x58493b) {
      return _0x770a3b(..._0x58493b);
    },
    'KQRJo': function (_0x1e148c, _0x19b3e6) {
      return _0x1e148c - _0x19b3e6;
    },
    'khlRq': function (_0x34385a, ..._0x1a6369) {
      return _0x34385a(..._0x1a6369);
    },
    'ogmjq': function (_0x2449ee, _0x2981bb) {
      return _0x2449ee === _0x2981bb;
    },
    'irttg': 'hfqWa',
    'nkhnS': _0x4f51(285, 0x2f0),
    'FSIus': function (_0x36e9b9, ..._0x59c3ae) {
      return _0x36e9b9(..._0x59c3ae);
    }
  };
  _0x3780a5.hex = _0x3780a5;
  _0x3780a5[_0x4f51(300, 0x213)] = function (..._0x5e09f4) {
    return _0x29eb9a[_0x4f51(310, -0x2ab)](_0x5cb169, ..._0x5e09f4[_0x4f51(325, 0x87)](0, -1))[_0x4f51(287, -0x2d4)](_0x5e09f4[_0x29eb9a[_0x4f51(324, 0x7b)](_0x5e09f4[_0x4f51(331, -0x296)], 1)])[_0x4f51(300, -0x2b3)]();
  };
  _0x3780a5.digest = _0x3780a5[_0x4f51(300, 0x310)];
  _0x3780a5.arrayBuffer = function (..._0x33b17b) {
    const _0x5af5cf = {
      'DtGsW': function (_0x79668d, ..._0x1a341c) {
        return _0x29eb9a.khlRq(_0x79668d, ..._0x1a341c);
      },
      'sNKlx': function (_0x32dfa2, _0x2f8e5e) {
        return _0x32dfa2 - _0x2f8e5e;
      }
    };
    if (_0x29eb9a[_0x4f51(307, 0x393)](_0x29eb9a[_0x4f51(343, 0x3dd)], _0x29eb9a[_0x4f51(319, -0x1d6)])) {
      const _0x465b14 = {
        'vUPJV': function (_0x5403f0, ..._0x1ef65a) {
          return _0x29eb9a[_0x4f51(282, -0x1bb)](_0x5403f0, ..._0x1ef65a);
        },
        'DtjwR': function (_0x25c0b1, _0x39eec7) {
          return _0x29eb9a[_0x4f51(324, 0x60)](_0x25c0b1, _0x39eec7);
        }
      };
      _0x27a863[_0x4f51(298, -0x1d3)] = _0x4e8fca;
      _0x5acbbf[_0x4f51(300, 0x3b6)] = function (..._0x1ceaaf) {
        return _0x465b14.vUPJV(_0x57f241, ..._0x1ceaaf[_0x4f51(325, 0x12b)](0, -1))[_0x4f51(287, 0x40b)](_0x1ceaaf[_0x29eb9a[_0x4f51(324, 0x60)](_0x1ceaaf[_0x4f51(331, 0x432)], 1)]).array();
      };
      _0x2f2908[_0x4f51(318, 0x397)] = _0x64dda2[_0x4f51(300, 0x37c)];
      _0x3b298c[_0x4f51(344, -0x1a1) + 'r'] = function (..._0x553190) {
        return _0x5af5cf[_0x4f51(321, 0x4b6)](_0x285db8, ..._0x553190[_0x4f51(325, 0x4e2)](0, -1))[_0x4f51(287, 0x4c6)](_0x553190[_0x553190.length - 1])[_0x4f51(344, 0x4f6) + 'r']();
      };
      return _0x2dda52;
    } else {
      return _0x29eb9a[_0x4f51(273, 0x365)](_0x5cb169, ..._0x33b17b[_0x4f51(325, -0x1d0)](0, -1)).update(_0x33b17b[_0x33b17b[_0x4f51(331, 0x3a7)] - 1])[_0x4f51(344, 0x3c2) + 'r']();
    }
  };
  return _0x3780a5;
}
function createNodeMethod(_0x3c876f) {
  const _0x53e56b = {
    'wkpVt': function (_0x3047f6, _0x3e8b55, _0x39f1c9) {
      return _0x3047f6(_0x3e8b55, _0x39f1c9);
    }
  };
  const _0x3182e7 = () => new NodeHasher(crypto[_0x4f51(317, 0x299)](_0x3c876f));
  const _0xcfd63e = function (_0x51c2de) {
    return new NodeHasher(crypto[_0x4f51(317, 0x299)](_0x3c876f))[_0x4f51(287, 0x412)](_0x51c2de)[_0x4f51(298, 0x409)]();
  };
  _0x53e56b[_0x4f51(320, 0x2b6)](addOutputMethods, _0xcfd63e, _0x3182e7);
  _0xcfd63e.create = _0x3182e7;
  _0xcfd63e[_0x4f51(287, 0x2b2)] = function (_0x10a51c) {
    return _0xcfd63e[_0x4f51(289, -0x5b)]()[_0x4f51(287, -0x24a)](_0x10a51c);
  };
  return _0xcfd63e;
}
function createNodeHmacMethod(_0x55b0f0) {
  const _0x4ea568 = {
    'NcVsI': function (_0x5b85a9, _0x4d5bcf) {
      return _0x5b85a9(_0x4d5bcf);
    },
    'cxbgr': function (_0x34eac3, _0x11dcc3, _0x1b8f6d) {
      return _0x34eac3(_0x11dcc3, _0x1b8f6d);
    }
  };
  const _0x47c882 = _0xcaa956 => new NodeHasher(crypto.createHmac(_0x55b0f0, toNodeInput(_0xcaa956)));
  const _0x4ab426 = function (_0x58f8d8, _0xe9b5ea) {
    return _0x4ea568[_0x4f51(296, 0x397)](_0x47c882, _0x58f8d8)[_0x4f51(287, 0x379)](_0xe9b5ea)[_0x4f51(298, 0x39c)]();
  };
  _0x4ea568[_0x4f51(279, 0x39c)](addOutputMethods, _0x4ab426, _0x47c882);
  _0x4ab426[_0x4f51(289, 0x54)] = _0x47c882;
  _0x4ab426[_0x4f51(287, 0x45)] = function (_0x4db0f5, _0x43b4f2) {
    return _0x4ab426[_0x4f51(289, 0x26d)](_0x4db0f5).update(_0x43b4f2);
  };
  return _0x4ab426;
}
function _0x567521(_0x2deeb6, _0x3e9dcc, _0x5e70ff, _0x3aa32c) {
  return _0x4f51(_0x3aa32c - 0x311, _0x2deeb6);
}
const sha256 = createNodeMethod('sha256');
const sha224 = createNodeMethod(_0x4f51(314, 0x43c));
sha256[_0x4f51(312, 0x462)] = sha256;
sha256[_0x4f51(314, 0x444)] = sha224;
sha256[_0x4f51(297, 0x440)] = createNodeHmacMethod(_0x4f51(312, 0x460));
function _0x29175a(_0x1881fe, _0x47d6e3, _0xc65c3c, _0x2edee0) {
  return _0x4f51(_0x1881fe - 0x307, _0xc65c3c);
}
function _0x4f51(_0x2dda52, _0x57f241) {
  _0x2dda52 = _0x2dda52 - 272;
  const _0x285db8 = _0x55c3();
  let _0x2d0f98 = _0x285db8[_0x2dda52];
  if (_0x4f51.RWFgHm === undefined) {
    var _0x9ecaaf = function (_0x4b1229) {
      let _0x13c4d7 = '';
      let _0x54b4bb = '';
      let _0xc5e8aa = 0;
      let _0x2e11be;
      let _0xe1f42;
      for (let _0x5d7b7c = 0; _0xe1f42 = _0x4b1229.charAt(_0x5d7b7c++); ~_0xe1f42 && (_0x2e11be = _0xc5e8aa % 4 ? _0x2e11be * 64 + _0xe1f42 : _0xe1f42, _0xc5e8aa++ % 4) ? _0x13c4d7 += String.fromCharCode(255 & _0x2e11be >> (-2 * _0xc5e8aa & 6)) : 0) {
        _0xe1f42 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0xe1f42);
      }
      let _0x117874 = 0;
      for (let _0x226f37 = _0x13c4d7.length; _0x117874 < _0x226f37; _0x117874++) {
        _0x54b4bb += '%' + ('00' + _0x13c4d7.charCodeAt(_0x117874).toString(16)).slice(-2);
      }
      return decodeURIComponent(_0x54b4bb);
    };
    _0x4f51.ePLWMu = _0x9ecaaf;
    _0x4f51.FzovGB = {};
    _0x4f51.RWFgHm = true;
  }
  const _0x40352b = _0x285db8[0];
  if (_0x4f51.kXrICo !== _0x40352b) {
    _0x4f51.FzovGB = {};
    _0x4f51.kXrICo = _0x40352b;
  }
  const _0x34c68d = _0x4f51.FzovGB[_0x2dda52];
  if (_0x34c68d === undefined) {
    _0x2d0f98 = _0x4f51.ePLWMu(_0x2d0f98);
    _0x4f51.FzovGB[_0x2dda52] = _0x2d0f98;
  } else {
    _0x2d0f98 = _0x34c68d;
  }
  return _0x2d0f98;
}
sha224[_0x4f51(297, 0x43e)] = createNodeHmacMethod(_0x4f51(314, 0x433));
module[_0x4f51(323, 0x428)] = sha256;