'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = require('backbone');

var _backbone2 = _interopRequireDefault(_backbone);

var _table_view = require('./table_view');

var _table_view2 = _interopRequireDefault(_table_view);

var _options_view = require('./options_view');

var _options_view2 = _interopRequireDefault(_options_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApplicationView = _backbone2.default.View.extend({
  initialize: function initialize(options) {
    this.board = options.board;
  },

  render: function render() {
    var options = new _options_view2.default({
      board: this.board,
      el: "#options"
    });

    var table = new _table_view2.default({
      board: this.board,
      el: "#gameboard"
    });

    options.render();
    table.render();
  }
});

exports.default = ApplicationView;