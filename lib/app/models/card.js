'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = require('backbone');

var _backbone2 = _interopRequireDefault(_backbone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = _backbone2.default.Model.extend({

  initalize: function initalize(options) {
    // This takes all of the original option parameters and saves them to the card. This should include color, number, shape, and fill. We also pass in a selected status
    this.set(options);
  }
});

exports.default = Card;