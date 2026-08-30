'use strict';

(function (_0x164241, _0x69bc90) {
  var _0x81b8b0 = _0x164241();
  while (true) {
    try {
      var _0x390d4b = -parseInt(_0x5e46(395, 0x1ea)) / 1 + parseInt(_0x5e46(366, 0x2a7)) / 2 + -parseInt(_0x5e46(410, 0x2d6)) / 3 + -parseInt(_0x5e46(382, 0x2b0)) / 4 * (-parseInt(_0x5e46(430, 0x2d5)) / 5) + -parseInt(_0x5e46(441, 0x240)) / 6 * (parseInt(_0x5e46(431, 0x2e5)) / 7) + -parseInt(_0x5e46(427, 0x2ff)) / 8 * (parseInt(_0x5e46(438, 0x304)) / 9) + -parseInt(_0x5e46(390, 0x22f)) / 10 * (-parseInt(_0x5e46(401, 0x1fc)) / 11);
      if (_0x390d4b === _0x69bc90) {
        break;
      } else {
        _0x81b8b0.push(_0x81b8b0.shift());
      }
    } catch (_0x1c9f0d) {
      _0x81b8b0.push(_0x81b8b0.shift());
    }
  }
})(_0x5c23, 101524);
function _0x53398e(_0x162d00, _0x591dc1, _0x7837df, _0x19f331) {
  return _0x5e46(_0x162d00 + 0x29e, _0x7837df);
}
function _0x5e46(_0x2eed54, _0x432d82) {
  _0x2eed54 = _0x2eed54 - 366;
  var _0x3aa3ec = _0x5c23();
  var _0x23a209 = _0x3aa3ec[_0x2eed54];
  if (_0x5e46.qHlpfa === undefined) {
    var _0x5c74a5 = function (_0x2a7355) {
      var _0x546e4e = '';
      var _0x15756f = '';
      var _0x556d21 = 0;
      var _0x2f6868;
      var _0x156d93;
      for (var _0x458ddd = 0; _0x156d93 = _0x2a7355.charAt(_0x458ddd++); ~_0x156d93 && (_0x2f6868 = _0x556d21 % 4 ? _0x2f6868 * 64 + _0x156d93 : _0x156d93, _0x556d21++ % 4) ? _0x546e4e += String.fromCharCode(255 & _0x2f6868 >> (-2 * _0x556d21 & 6)) : 0) {
        _0x156d93 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x156d93);
      }
      var _0x260b12 = 0;
      for (var _0xccab4e = _0x546e4e.length; _0x260b12 < _0xccab4e; _0x260b12++) {
        _0x15756f += '%' + ('00' + _0x546e4e.charCodeAt(_0x260b12).toString(16)).slice(-2);
      }
      return decodeURIComponent(_0x15756f);
    };
    _0x5e46.heeUdX = _0x5c74a5;
    _0x5e46.cNOOra = {};
    _0x5e46.qHlpfa = true;
  }
  var _0x136674 = _0x3aa3ec[0];
  if (_0x5e46.YeQbqh !== _0x136674) {
    _0x5e46.cNOOra = {};
    _0x5e46.YeQbqh = _0x136674;
  }
  var _0x1ffa2e = _0x5e46.cNOOra[_0x2eed54];
  if (_0x1ffa2e === undefined) {
    _0x23a209 = _0x5e46.heeUdX(_0x23a209);
    _0x5e46.cNOOra[_0x2eed54] = _0x23a209;
  } else {
    _0x23a209 = _0x1ffa2e;
  }
  return _0x23a209;
}
var dijkstra = {
  'single_source_shortest_paths': function (_0x4ffa40, _0x4e9613, _0x37def5) {
    var _0x5d0c65 = {
      TTTDK: "5|1|4|0|2|3",
      [_0x5e46(406, -0x180)]: function (_0x557227, _0x2582d0) {
        return _0x557227 || _0x2582d0;
      },
      AypUq: _0x5e46(413, 0x4bb),
      KjqgC: function (_0x197806, _0x2c977a) {
        return _0x197806 + _0x2c977a;
      },
      [_0x5e46(404, -0x16c)]: function (_0x5d0c10, _0x290f06) {
        return _0x5d0c10 === _0x290f06;
      },
      [_0x5e46(367, -0x194)]: _0x5e46(433, -0x11b),
      [_0x5e46(380, 0x4b0)]: function (_0x13cf1f, _0x47eafb) {
        return _0x13cf1f > _0x47eafb;
      },
      [_0x5e46(384, -0x187)]: _0x5e46(432, -0x125),
      [_0x5e46(442, 0x4ec)]: _0x5e46(439, -0x11f),
      [_0x5e46(412, 0x4cc)]: function (_0x21182d, _0x7a6cb9) {
        return _0x21182d !== _0x7a6cb9;
      },
      [_0x5e46(403, -0x153)]: _0x5e46(405, -0x158) + "find a pat" + _0x5e46(392, 0x4ae)
    };
    var _0x3406b1 = ('2|1|6|0|4|' + _0x5e46(377, -0x18d))[_0x5e46(400, 0x4b6)]('|');
    var _0x40437a = 0;
    while (true) {
      switch (_0x3406b1[_0x40437a++]) {
        case '0':
          _0x543347[_0x4e9613] = 0;
          continue;
        case '1':
          var _0x275f8c = {};
          continue;
        case '2':
          var _0x549812 = {
            'aQhFv': _0x5d0c65[_0x5e46(418, -0x16d)],
            'Mqnvu': function (_0x4408a8, _0x3327b3) {
              return _0x5d0c65[_0x5e46(406, 0x5)](_0x4408a8, _0x3327b3);
            }
          };
          continue;
        case '3':
          while (!_0x52f06d.empty()) {
            _0x1deae5 = _0x52f06d[_0x5e46(372, -0x154)]();
            _0x25c470 = _0x1deae5[_0x5e46(368, 0x47b)];
            _0x45fdc9 = _0x1deae5[_0x5e46(425, -0x139)];
            _0xc16380 = _0x4ffa40[_0x25c470] || {};
            for (_0x298c95 in _0xc16380) {
              if (_0xc16380['hasOwnProp' + _0x5e46(381, 0x4d1)](_0x298c95)) {
                if (_0x5e46(369, -0x19d) !== _0x5d0c65.AypUq) {
                  _0x1f0945 = _0xc16380[_0x298c95];
                  _0x31cde3 = _0x45fdc9 + _0x1f0945;
                  _0x4122c5 = _0x543347[_0x298c95];
                  _0x2ff38f = _0x5d0c65.RdtJv(typeof _0x543347[_0x298c95], _0x5d0c65[_0x5e46(367, 0x4b4)]);
                  if (_0x2ff38f || _0x5d0c65[_0x5e46(380, -0x18c)](_0x4122c5, _0x31cde3)) {
                    if (_0x5d0c65.Alkoy === _0x5d0c65.OqCiW) {
                      return this.queue[_0x5e46(423, -0x13a)]();
                    } else {
                      _0x543347[_0x298c95] = _0x31cde3;
                      _0x52f06d[_0x5e46(443, -0x15b)](_0x298c95, _0x31cde3);
                      _0x275f8c[_0x298c95] = _0x25c470;
                    }
                  }
                } else {
                  var _0x4e7bec = _0x549812[_0x5e46(434, -0x138)].split('|');
                  var _0xddf56 = 0;
                  while (true) {
                    switch (_0x4e7bec[_0xddf56++]) {
                      case '0':
                        _0x562824.queue = [];
                        continue;
                      case '1':
                        _0x3e7623 = _0x549812[_0x5e46(391, 0x4d2)](_0x5f4748, {});
                        continue;
                      case '2':
                        _0x562824[_0x5e46(429, 0x4ff)] = _0x4f1980[_0x5e46(429, -0x142)] || _0x4cedc7[_0x5e46(416, -0x141) + _0x5e46(419, -0x171)];
                        continue;
                      case '3':
                        return _0x562824;
                      case '4':
                        for (_0x500a3b in _0x4cedc7) {
                          if (_0x4cedc7[_0x5e46(374, -0x164) + _0x5e46(381, 0x487)](_0x500a3b)) {
                            _0x562824[_0x500a3b] = _0x4cedc7[_0x500a3b];
                          }
                        }
                        continue;
                      case '5':
                        var _0x4cedc7 = _0xb19c71[_0x5e46(421, -0x159) + _0x5e46(415, -0x167)];
                        var _0x562824 = {};
                        var _0x500a3b;
                        continue;
                    }
                    break;
                  }
                }
              }
            }
          }
          continue;
        case '4':
          var _0x52f06d = dijkstra[_0x5e46(421, -0x172) + _0x5e46(415, -0x13d)][_0x5e46(408, -0x16e)]();
          continue;
        case '5':
          var _0x1deae5;
          var _0x25c470;
          var _0x298c95;
          var _0x45fdc9;
          var _0xc16380;
          var _0x1f0945;
          var _0x31cde3;
          var _0x4122c5;
          var _0x2ff38f;
          continue;
        case '6':
          var _0x543347 = {};
          continue;
        case '7':
          return _0x275f8c;
        case '8':
          _0x52f06d[_0x5e46(443, -0x151)](_0x4e9613, 0);
          continue;
        case '9':
          if (_0x5d0c65[_0x5e46(412, 0x4cb)](typeof _0x37def5, _0x5d0c65.GAYRt) && typeof _0x543347[_0x37def5] === _0x5d0c65[_0x5e46(367, 0x48e)]) {
            var _0x41f8b3 = [_0x5d0c65.EbTRp, _0x4e9613, _0x5e46(402, 0x4db), _0x37def5, '.'][_0x5e46(411, 0x4b9)]('');
            throw new Error(_0x41f8b3);
          }
          continue;
      }
      break;
    }
  },
  'extract_shortest_path_from_predecessor_list': function (_0x3a0cd3, _0x499277) {
    var _0x409110 = {
      WsijT: _0x5e46(383, -0x39) + _0x5e46(375, -0x209),
      [_0x5e46(376, -0x1eb)]: function (_0x3f2836, _0xbde8f4) {
        return _0x3f2836 !== _0xbde8f4;
      },
      [_0x5e46(399, -0x1fb)]: _0x5e46(420, -0x1d4),
      ikbWQ: '2|1|0|3|4',
      [_0x5e46(373, -0x1b)]: _0x5e46(414, -0x1fb),
      [_0x5e46(371, -0x22c)]: function (_0xc3729c, _0x16fbab) {
        return _0xc3729c + _0x16fbab;
      },
      [_0x5e46(385, -0x44)]: function (_0x4b54bf, _0x2b5215) {
        return _0x4b54bf === _0x2b5215;
      }
    };
    _0x409110[_0x5e46(407, -0x1d9)] = 'undefined';
    var _0x32f08f = _0x409110[_0x5e46(378, -0x49)][_0x5e46(400, -0xc)]('|');
    var _0xeddc56 = 0;
    while (true) {
      switch (_0x32f08f[_0xeddc56++]) {
        case '0':
          var _0x1ab6a3;
          continue;
        case '1':
          var _0x17c10c = _0x499277;
          continue;
        case '2':
          return _0x49269b;
        case '3':
          while (_0x17c10c) {
            if (_0x409110[_0x5e46(376, -0x1f2)](_0x409110[_0x5e46(399, -0x1fb)], _0x409110[_0x5e46(399, -0x1dd)])) {
              var _0x16c836 = _0x465405[_0x5e46(387, -0x26)].split('|');
              var _0x2653d3 = 0;
              while (true) {
                switch (_0x16c836[_0x2653d3++]) {
                  case '0':
                    _0x17719e = _0x24f693.cost;
                    continue;
                  case '1':
                    _0x4de74b = _0x5d54a5[_0x5e46(368, -0x20b)];
                    continue;
                  case '2':
                    _0x44444f = _0x224d98[_0x5e46(372, -0x54)]();
                    continue;
                  case '3':
                    _0x44fb05 = _0xe31119[_0x59d7bc] || {};
                    continue;
                  case '4':
                    for (_0x8422ea in _0x12f29d) {
                      if (_0x2a908a[_0x5e46(374, -0x22c) + 'erty'](_0x262b00)) {
                        var _0x144883 = DXKoWr[_0x5e46(370, -0x1d)].split('|');
                        var _0x58a180 = 0;
                        while (true) {
                          switch (_0x144883[_0x58a180++]) {
                            case '0':
                              _0x216515 = _0x615b1f[_0x114700];
                              continue;
                            case '1':
                              if (_0x598280 || DXKoWr[_0x5e46(424, -0x27)](_0x24b985, _0x537797)) {
                                _0x136396[_0x227d09] = _0xd38dfd;
                                _0x26d3f4[_0x5e46(443, 0x16)](_0x4ceeb4, _0x5db1e4);
                                _0x5a05af[_0x979859] = _0x5b96e2;
                              }
                              continue;
                            case '2':
                              _0x5d09fb = _0x36aab7[_0x1c0bd8];
                              continue;
                            case '3':
                              _0x21ea24 = DXKoWr[_0x5e46(398, -0x202)](_0x1da4ab, _0x194362);
                              continue;
                            case '4':
                              _0xee1b8d = DXKoWr[_0x5e46(437, 0x20)](typeof _0x3e90b9[_0x2250fe], DXKoWr.myYXS);
                              continue;
                          }
                          break;
                        }
                      }
                    }
                    continue;
                }
                break;
              }
            } else {
              _0x49269b[_0x5e46(443, -0xb)](_0x17c10c);
              _0x1ab6a3 = _0x3a0cd3[_0x17c10c];
              _0x17c10c = _0x3a0cd3[_0x17c10c];
            }
          }
          continue;
        case '4':
          var _0x49269b = [];
          continue;
        case '5':
          _0x49269b[_0x5e46(426, -0x1e4)]();
          continue;
        case '6':
          var _0x465405 = {
            'TysHi': _0x409110[_0x5e46(396, -0x1eb)],
            'FkBvK': _0x409110.mCtKw,
            'zSfZi': function (_0x8991e5, _0x5ae7e8) {
              return _0x8991e5 > _0x5ae7e8;
            },
            'xzASI': function (_0x9109c3, _0xfd1757) {
              return _0x409110[_0x5e46(371, -0x269)](_0x9109c3, _0xfd1757);
            },
            'RlCRj': function (_0x4ff86f, _0x1218cd) {
              return _0x409110.CaywL(_0x4ff86f, _0x1218cd);
            },
            'myYXS': _0x409110.Zgszf
          };
          continue;
      }
      break;
    }
  },
  'find_path': function (_0x102e86, _0x46ecfc, _0x100473) {
    var _0x10d096 = dijkstra["single_source_shorte" + _0x5e46(386, -0x96)](_0x102e86, _0x46ecfc, _0x100473);
    return dijkstra[_0x5e46(444, -0x1c7) + _0x5e46(435, -0x1dc) + _0x5e46(417, -0x1cd) + 'decessor_l' + _0x5e46(440, -0x80)](_0x10d096, _0x100473);
  },
  'PriorityQueue': {
    'make': function (_0x34d2ce) {
      var _0x4fee06 = {
        'ILqjj': function (_0x420489, _0x29ff34) {
          return _0x420489 + _0x29ff34;
        }
      };
      _0x4fee06[_0x5e46(379, 0x311)] = _0x5e46(433, 0x385);
      _0x4fee06[_0x5e46(409, 0x35c)] = function (_0x2a4c0b, _0x242823) {
        return _0x2a4c0b > _0x242823;
      };
      _0x4fee06[_0x5e46(428, 0x362)] = function (_0xab7800, _0x317fe8) {
        return _0xab7800 || _0x317fe8;
      };
      _0x4fee06.OpRJY = function (_0x446015, _0x5240ae) {
        return _0x446015 === _0x5240ae;
      };
      _0x4fee06.RYZol = 'eScJC';
      var _0x5588f9 = dijkstra[_0x5e46(421, 0x361) + _0x5e46(415, 0x366)];
      var _0x39f550 = {};
      var _0x3ed1b0;
      _0x34d2ce = _0x4fee06.CKZYp(_0x34d2ce, {});
      for (_0x3ed1b0 in _0x5588f9) {
        if (_0x4fee06.OpRJY(_0x4fee06[_0x5e46(388, 0x352)], _0x4fee06.RYZol)) {
          if (_0x5588f9.hasOwnProperty(_0x3ed1b0)) {
            _0x39f550[_0x3ed1b0] = _0x5588f9[_0x3ed1b0];
          }
        } else if (_0x49ecf3[_0x5e46(374, 0x310) + 'erty'](_0x40f608)) {
          _0x10efc7 = _0x434c12[_0x4f74f1];
          _0x121372 = ltDdJU[_0x5e46(422, 0x352)](_0x16ad4e, _0xdd6b9e);
          _0x929b66 = _0x333429[_0x4a3659];
          _0x31097a = typeof _0x43e059[_0x165d25] === ltDdJU[_0x5e46(379, 0x31b)];
          if (_0x37a069 || ltDdJU.sqmqr(_0x2404a5, _0x436f74)) {
            _0x3a9f55[_0x2adcf4] = _0x16baef;
            _0xcd418a[_0x5e46(443, 0x393)](_0x56bbac, _0x24adc2);
            _0x2d3a5d[_0x4eeffe] = _0x3603d6;
          }
        }
      }
      _0x39f550[_0x5e46(445, 0x393)] = [];
      _0x39f550.sorter = _0x34d2ce[_0x5e46(429, 0x38a)] || _0x5588f9['default_so' + _0x5e46(419, 0x372)];
      return _0x39f550;
    },
    'default_sorter': function (_0x5c4b24, _0x471ae1) {
      var _0xd5fee = {
        [_0x5e46(436, 0x4c8)]: function (_0x3bda22, _0x40a686) {
          return _0x3bda22 - _0x40a686;
        }
      };
      return _0xd5fee.lLjMk(_0x5c4b24.cost, _0x471ae1[_0x5e46(425, -0x88)]);
    },
    'push': function (_0x2bbba9, _0x3fc059) {
      var _0x4aee37 = {
        [_0x5e46(368, 0x3a2)]: _0x2bbba9,
        cost: _0x3fc059
      };
      this[_0x5e46(445, 0x2cc)][_0x5e46(443, 0x296)](_0x4aee37);
      this[_0x5e46(445, 0x2e3)][_0x5e46(394, 0x39a)](this[_0x5e46(429, 0x297)]);
    },
    'pop': function () {
      return this[_0x5e46(445, 0x3cf)].shift();
    },
    'empty': function () {
      var _0x16410f = {
        [_0x5e46(397, 0x134)]: function (_0x377d94, _0x2e9e61) {
          return _0x377d94 === _0x2e9e61;
        }
      };
      return _0x16410f[_0x5e46(397, -0x1fc)](this.queue[_0x5e46(393, -0x1e2)], 0);
    }
  }
};
function _0x2803fc(_0x2595a6, _0x5cfa13, _0x5b836f, _0x2fce9a) {
  return _0x5e46(_0x5cfa13 - 0x38c, _0x2595a6);
}
function _0x5c23() {
  var _0x4e119a = ['BeXQtwS', 'uMXduMO', 'nJCWnw1ztLL1yq', 's0ziELq', 'Axn0', 'mZzzBeXIBuC', 't3fdAvC', 'ChvZAa', 'zxH0CMfJDf9ZAa', 'CxvLDwu', 'mZK5mdCYCgrnBKzP', 'r0fzuNq', 'DMfSDwu', 'zLrxvfO', 'rMTcDKS', 'EfvbAxi', 'Cg9W', 'Bun0s3C', 'AgfZt3DUuhjVCa', 'nxWY', 'Cvv2wMG', 'ohW1Fdn8oxW3', 'v3nPALq', 'C01qruq', 'zfDRDLm', 'zxj0Eq', 'mte2nhDYzhbiAq', 'nNW0Fdf8mhWZFa', 'qwXRB3K', 'q2f5D0W', 'C3rFCgf0Ahm', 'vhLZsgK', 'uLLAB2W', 'zxHWB3j0CW', 'mtb5DNjhu3e', 'txfUDNu', 'AcbMCM9Tia', 'BgvUz3rO', 'C29YDa', 'mZmZodv5Bu50u0q', 'AwTIv1e', 'z3nVCei', 'EhPbu0K', 'tgPhA2W', 'C3bSAxq', 'mtG0mte5mwDzugD1Da', 'ihrVia', 'rwjuuNa', 'uMr0sNy', 'q291BgqGBM90ia', 'uhLSCvq', 'wMDZEMy', 'BwfRzq', 'C3fTCxi', 'ndq5mdfWuK5wCLy', 'AM9PBG', 'v0Lxuwy', 'wM5StMu', 'mNWZFdb8nhWX', 'zxvL', 'zgvMyxvSDf9ZBW', 'Af9MCM9Tx3bYzq', 'vfrureS', 'CNrLCG', 'qMHvDKe', 'uhjPB3jPDhLrDq', 'suXXAMO', 'C2HPzNq', 'ELnMwMK', 'y29ZDa', 'CMv2zxjZzq', 'mtq2nhr4AerVBG', 'q0TAwxa', 'C29YDgvY', 'nJmWwg1jvNfY', 'mtm2otm0BMnqwuHQ', 'vfPSDem', 'Dw5KzwzPBMvK', 'yvfOrNy', 'B3j0zxn0x3bHDa'];
  _0x5c23 = function () {
    return _0x4e119a;
  };
  return _0x5c23();
}
if (typeof module !== _0x5e46(433, -0xd8)) {
  module[_0x5e46(389, -0x141)] = dijkstra;
}