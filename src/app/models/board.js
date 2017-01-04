import Backbone from 'backbone';
import Card from 'app/models/card';
import _ from 'underscore';

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Board = Backbone.Model.extend({
  initialize: function(options) {
    this.deck = options.deck;
    this.inPlay = options.inPlay;
    while (this.inPlay.length < 12) {
      this.drawCard();
    }
    this.possibleWins = this.inPlay.checkAllCombinations();
    this.listenTo(this.inPlay, 'change', this.checkWin);
  },

  checkWin: function() {
    if (this.areThreeSelected()) {
      if (this.inPlay.isSet(this.currentlySelected())) {
        setTimeout(() => {this.replaceWinningCards()}, 1000);
        this.possibleWins = this.inPlay.checkAllCombinations();
      }
      else {
        console.log("I'm trying to deselect");
        setTimeout(() => {this.deselectCards()}, 1000);
      }
    }
  },

  deselectCards: function() {
    for (var d = 0; d < this.inPlay.length; d++) {
      console.log(this.inPlay.at(d));
      this.inPlay.at(d).set("selected", false);
    }
    this.inPlay.trigger('ReRender');
  },

  replaceWinningCards: function() {
    for (var d = 0; d < this.inPlay.length; d++) {
      if (this.inPlay.at(d).get("selected") !== true) {
        continue;
      }

      this.inPlay.remove(this.inPlay.at(d));

      if (this.inPlay.length >= 12) {
        d -= 1;
      }
      else if (this.inPlay.length < 12) {
        this.drawCard(d);
      }
    }
    this.inPlay.trigger('change');
    this.inPlay.trigger('ReRender');
    this.possibleWins = this.inPlay.checkAllCombinations();
  },


  // return an array of the currently selected cards
  currentlySelected: function() {
    return this.inPlay.where({"selected": true});
  },

  // determine if three cards are selected (returns boolean)
  areThreeSelected: function() {
    return this.currentlySelected().length === 3;
  },

  dealThreeMore: function() {
    if (this.inPlay.length < 15) {
      for (var d = 0; d < 3; d++ ) {
        this.drawCard();
      }
    }
    this.inPlay.trigger('change');
    this.inPlay.trigger('ReRender');
    this.possibleWins = this.inPlay.checkAllCombinations();
   },

  drawCard: function(index = this.inPlay.length) {
    if (this.deck.length !== 0) {
      // get a random index
      var randomIndex = randomNumber(0, this.deck.length - 1);

      // grab that card!
      var selectedCard = this.deck.remove(this.deck.at(randomIndex));

      // add that card to the inPlay collection
      this.inPlay.add(_.assign(selectedCard, {'selected': false}), {at: index});
    }
    else {
      console.log("No more cards");
    }
  }
});

export default Board;
