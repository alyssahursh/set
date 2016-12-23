import Backbone from 'backbone';
import Card from 'app/models/card';

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
    console.log("There are " + this.possibleWins + " possible wins on the table");

    this.listenTo(this.inPlay, 'change', this.checkWin);
  },

  checkWin: function() {
    if (this.areThreeSelected()) {
      if (this.inPlay.isSet(this.currentlySelected())) {
        setTimeout(() => {this.replaceWinningCards()}, 1000);
        this.possibleWins = this.inPlay.checkAllCombinations();
        console.log("There are " + this.possibleWins + " possible wins on the table");
      }
      else {
        setTimeout(() => {this.deselectCards()}, 1000);
        // this.deselectCards();
      }
    }
  },

  deselectCards: function() {
    for (var d = 0; d < this.inPlay.length; d++) {
      this.inPlay.at(d).set("selected", false);
    }
  },

  replaceWinningCards: function() {
    for (var d = 0; d < this.inPlay.length; d++) {
      if (this.inPlay.at(d).get("selected") === true) {
        this.inPlay.remove(this.inPlay.at(d));
        this.drawCard(d);
      }
      this.inPlay.trigger('change');
    }
  },


  // return an array of the currently selected cards
  currentlySelected: function() {
    var selectedCards = this.inPlay.where({"selected": true});
    return selectedCards;
  },

  // determine if three cards are selected (returns boolean)
  areThreeSelected: function() {
    return this.currentlySelected().length === 3;
  },

  dealThreeMore: function() {
    if (this.inPlay.length < 16) {
      for (var d = 0; d < 3; d++ ) {
        this.drawCard();
      }
    }
  },


  drawCard: function(index = this.inPlay.length) {
    if (this.deck.length !== 0) {
      // get a random index
      var randomIndex = randomNumber(0, this.deck.length - 1);

      // grab that card!
      var selectedCard = this.deck.remove(this.deck.at(randomIndex));

      // add that card to the inPlay collection
      this.inPlay.add(new Card({
        'color': selectedCard.get('color'),
        'number': selectedCard.get('number'),
        'shape': selectedCard.get('shape'),
        'fill': selectedCard.get('fill'),
        'selected': false
      }), {at: index});
    }
    else {
      console.log("No more cards");
    }
  }

});

export default Board;
