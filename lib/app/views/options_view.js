'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = require('backbone');

var _backbone2 = _interopRequireDefault(_backbone);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionsView = _backbone2.default.View.extend({
  initialize: function initialize(options) {
    this.board = options.board;
    this.checkButton = this.$("#check-if-sets");
    this.listenTo(this.board.inPlay, 'drawCards', this.resetCheckSetsButton);
  },

  events: {
    'click #check-if-sets': 'checkSets',
    'click #draw-cards': 'drawCards',
    'click #reset-game': 'resetGame',
    'click #hint': 'hintCard'
  },

  checkSets: function checkSets() {
    if (this.board.possibleWins === 0) {
      this.checkButton.html("NOPE");
    } else {
      this.checkButton.html("YES");
    }
  },

  resetCheckSetsButton: function resetCheckSetsButton() {
    this.checkButton.html("ARE THERE SETS?");
  },

  drawCards: function drawCards() {
    this.board.dealThreeMore();
  },

  resetGame: function resetGame() {
    window.location.reload();
  },

  hintCard: function hintCard() {
    var _this = this;

    if (this.board.inPlay.hintCard === undefined) {
      console.log("Trying to updated the button");
      this.$("#draw-cards").addClass('isHint');
      setTimeout(function () {
        _this.$("#draw-cards").removeClass('isHint');
      }, 1000);
    } else {
      this.board.inPlay.hintCard.set({ "hint": "isHint" });
      this.board.inPlay.trigger('drawCards');
      setTimeout(function () {
        _this.board.inPlay.hintCard.set({ "hint": "notHint" });
        _this.board.inPlay.trigger('drawCards');
      }, 1000);
    }
  },

  render: function render() {}
});

exports.default = OptionsView;