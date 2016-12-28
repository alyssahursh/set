'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = require('backbone');

var _backbone2 = _interopRequireDefault(_backbone);

var _card_view = require('./card_view');

var _card_view2 = _interopRequireDefault(_card_view);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableView = _backbone2.default.View.extend({
  initialize: function initialize(options) {
    this.board = options.board;
    this.firstRow = this.$("#first-row");
    this.secondRow = this.$("#second-row");
    this.thirdRow = this.$("#third-row");
    this.listenTo(this.board.inPlay, 'drawCards', this.render);
  },

  render: function render() {
    this.firstRow.empty();
    this.secondRow.empty();
    this.thirdRow.empty();

    for (var i = 0; i < this.board.inPlay.length; i++) {
      var card = new _card_view2.default({
        model: this.board.inPlay.at(i)
      });

      if (i % 3 === 0) {
        this.firstRow.append(card.render());
      } else if (i % 3 === 1) {
        this.secondRow.append(card.render());
      } else if (i % 3 === 2) {
        this.thirdRow.append(card.render());
      }
      // add the generated html to the gameboardelement
    }
  }
});

exports.default = TableView;