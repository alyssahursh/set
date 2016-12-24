import InPlay from 'app/collections/in_play';
import Deck from 'app/collections/deck';
import Card from 'app/models/card';
import Board from 'app/models/board';
import TableView from 'app/views/table_view';
import ApplicationView from 'app/views/application';
import $ from 'jquery';

// The app should start by creating all of the cards and storing them in a model

// First, store arrays of each of the attribues and their possible values
var color = ['red', 'purple', 'green'];
var number = [1, 2, 3];
var shape = ['rectangle', 'oval', 'diamond'];
var fill = ['empty', 'stripe', 'solid'];

// Create an empty array of cards (later we will put this into the deck?)
var allCards = [];

for (var c = 0; c < color.length; c++) {
  for (var n = 0; n < number.length; n++) {
    for (var s = 0; s < shape.length; s++) {
      for (var f = 0; f < fill.length; f++) {
        var card = new Card({
          "color": color[c],
          "number": number[n],
          "shape": shape[s],
          "fill": fill[f],
          "played": false,
          "selected": false
        });
        allCards.push(card);
      }
    }
  }
}

// Just in case you want to console log anything when the page loads (mostly for debugging):
$(document).ready(function(){
});

// Instantiate a new board with a full deck and the empty cards in play collection
var newBoard = new Board({
  deck: new Deck(allCards),
  inPlay: new InPlay()
});

// Instantiate a new game!
var game = new ApplicationView({
  board: newBoard,
  el: "#application"
});

// Render the game
game.render();
