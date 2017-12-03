'use strict';

var _mad = require('./mad');

var _mad2 = _interopRequireDefault(_mad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mad = new _mad2.default(10, 'mad');

/* eslint-disable no-console */

console.log(mad.test());