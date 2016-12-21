import Backbone from 'backbone';
import CardView from 'app/views/card_view';
import $ from 'jquery';
import _ from 'underscore';

const TableView = Backbone.View.extend({
  initialize: function(options) {
    console.log("1. You are trying to initialize the table view");
    this.collection = options.collection;
    this.gameBoardElement = this.$("#gameboard");
  },

  render: function() {
    console.log("2. You are in the render function before the loop");

    for (var i = 0; i < this.collection.length; i++) {
      console.log("You are in the render function loop at element: " + i);
      console.log(this.collection.at(i));
      var card = new CardView({
        model: this.collection.at(i),
      });
      console.log("You just created the card at element: " +i +" which is the following:");
      console.log(card);
      
      // add the rendered html to the gameboardelement
      this.gameBoardElement.append(card.render());
    }
  }
});

export default TableView;
