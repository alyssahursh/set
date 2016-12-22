import Backbone from 'backbone';
import CardView from 'app/views/card_view';
import $ from 'jquery';
import _ from 'underscore';

const TableView = Backbone.View.extend({
  initialize: function(options) {
    this.collection = options.collection;
    this.gameBoardElement = this.$("#gameboard");
  },

  render: function() {
    for (var i = 0; i < this.collection.length; i++) {
      var card = new CardView({
        model: this.collection.at(i),
      });

      // add the rendered html to the gameboardelement
      this.gameBoardElement.append(card.render());
    }
  }
});

export default TableView;
