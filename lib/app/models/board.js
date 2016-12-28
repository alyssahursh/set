'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = require('backbone');

var _backbone2 = _interopRequireDefault(_backbone);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Board = _backbone2.default.Model.extend({
  initialize: function initialize(options) {
    this.deck = options.deck;
    this.inPlay = options.inPlay;
    while (this.inPlay.length < 12) {
      this.drawCard();
    }
    this.possibleWins = this.inPlay.checkAllCombinations();
    this.listenTo(this.inPlay, 'change', this.checkWin);
  },

  checkWin: function checkWin() {
    var _this = this;

    if (this.areThreeSelected()) {
      if (this.inPlay.isSet(this.currentlySelected())) {
        setTimeout(function () {
          _this.replaceWinningCards();
        }, 1000);
        this.possibleWins = this.inPlay.checkAllCombinations();
      } else {
        setTimeout(function () {
          _this.deselectCards();
        }, 1000);
      }
    }
  },

  deselectCards: function deselectCards() {
    for (var d = 0; d < this.inPlay.length; d++) {
      this.inPlay.at(d).set("selected", false);
    }
  },

  replaceWinningCards: function replaceWinningCards() {
    for (var d = 0; d < this.inPlay.length; d++) {
      if (this.inPlay.at(d).get("selected") !== true) {
        continue;
      }

      this.inPlay.remove(this.inPlay.at(d));

      if (this.inPlay.length >= 12) {
        d -= 1;
      } else if (this.inPlay.length < 12) {
        this.drawCard(d);
      }
    }
    this.inPlay.trigger('change');
    this.inPlay.trigger('drawCards');
    this.possibleWins = this.inPlay.checkAllCombinations();
  },

  // return an array of the currently selected cards
  currentlySelected: function currentlySelected() {
    return this.inPlay.where({ "selected": true });
  },

  // determine if three cards are selected (returns boolean)
  areThreeSelected: function areThreeSelected() {
    return this.currentlySelected().length === 3;
  },

  dealThreeMore: function dealThreeMore() {
    if (this.inPlay.length < 15) {
      for (var d = 0; d < 3; d++) {
        this.drawCard();
      }
    }
    this.inPlay.trigger('change');
    this.inPlay.trigger('drawCards');
    this.possibleWins = this.inPlay.checkAllCombinations();
  },

  drawCard: function drawCard() {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.inPlay.length;

    if (this.deck.length !== 0) {
      // get a random index
      var randomIndex = randomNumber(0, this.deck.length - 1);

      // grab that card!
      var selectedCard = this.deck.remove(this.deck.at(randomIndex));

      // add that card to the inPlay collection
      this.inPlay.add(_underscore2.default.assign(selectedCard, { 'selected': false }), { at: index });
    } else {
      console.log("No more cards");
    }
  }
});

exports.default = Board;