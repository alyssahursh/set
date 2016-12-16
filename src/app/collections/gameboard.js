import Backbone from 'backbone';
import Space from 'app/models/space';

const GameBoard = Backbone.Collection.extend({
  model: Space
});

export default GameBoard;
