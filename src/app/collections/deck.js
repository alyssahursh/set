import Backbone from 'backbone';
import Card from 'app/models/card';


const Deck = Backbone.Collection.extend({
  model: Card
});

export default Deck;
