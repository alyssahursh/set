'use strict';

var _in_play = require('./app/collections/in_play');

var _in_play2 = _interopRequireDefault(_in_play);

var _deck = require('./app/collections/deck');

var _deck2 = _interopRequireDefault(_deck);

var _card = require('./app/models/card');

var _card2 = _interopRequireDefault(_card);

var _board = require('./app/models/board');

var _board2 = _interopRequireDefault(_board);

var _table_view = require('./app/views/table_view');

var _table_view2 = _interopRequireDefault(_table_view);

var _application = require('./app/views/application');

var _application2 = _interopRequireDefault(_application);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        var card = new _card2.default({
          "color": color[c],
          "number": number[n],
          "shape": shape[s],
          "fill": fill[f],
          "hint": "notHint",
          "selected": false
        });
        allCards.push(card);
      }
    }
  }
}

// Just in case you want to console log anything when the page loads (mostly for debugging):
(0, _jquery2.default)(document).ready(function () {});

// Instantiate a new board with a full deck and the empty cards in play collection
var newBoard = new _board2.default({
  deck: new _deck2.default(allCards),
  inPlay: new _in_play2.default()
});

// Instantiate a new game!
var game = new _application2.default({
  board: newBoard,
  el: "#application"
});

// Render the game
game.render();