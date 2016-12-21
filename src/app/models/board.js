import Backbone from 'backbone';

// THIS IS THE BOARD MODEL!


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const Board = Backbone.Model.extend({
  initialize: function(options) {
    this.deck = options.deck;
    this.inPlay = options.inPlay;

    for (var c = 0; c < 12; c++) {
      console.log(this.deck);
      // get a random index
      var randomIndex = randomNumber(0, this.deck.length - 1);

      // grab that card!
      var selectedCard = this.deck.remove(this.deck.at(randomIndex));

      // add that card to the inPlay collection
      this.inPlay.add({
        'color': selectedCard.get('color'),
        'number': selectedCard.get('number'),
        'shape': selectedCard.get('shape'),
        'fill': selectedCard.get('fill'),
        'clicked': false
      });
    }
  },
});

export default Board;
