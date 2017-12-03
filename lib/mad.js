'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import includes from 'lodash.includes'

var Mad = function () {

  /*
   alg(a: number, b: number, c: number): number {
    return a / b * c
  }
   */

  function Mad(val, currency) {
    _classCallCheck(this, Mad);

    if (val === null || val === undefined || val === 0 || !Number.isFinite(val)) {
      throw new ReferenceError('Please define a valid val');
    }

    if (currency === null || currency === undefined) {
      throw new ReferenceError('Please define a valid morrocan subcurrency');
    }

    this.fromValue = val;
    this.fromCurrency = currency;
    this.mad = {
      centime: {
        alias: ['centimes', 'centime', 'santims', 'santims'],
        val: 1
      },
      rial: {
        alias: ['rials', 'riels', 'ryals', 'ryels', 'rial', 'riel', 'ryal', 'ryel'],
        val: 5
      },
      dh: {
        alias: ['dirham', 'dirhem', 'dh', 'mad'],
        val: 100
      }
    };
  }

  _createClass(Mad, [{
    key: 'test',
    value: function test() {
      return this.fromValue + ' ' + this.fromCurrency;
    }
  }]);

  return Mad;
}();

exports.default = Mad;