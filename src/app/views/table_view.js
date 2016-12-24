import Backbone from 'backbone';
import CardView from 'app/views/card_view';
import $ from 'jquery';
import _ from 'underscore';

const TableView = Backbone.View.extend({
  initialize: function(options) {
    this.board = options.board;
    this.gameBoardElement = this.$el;
    this.listenTo(this.board.inPlay, 'change', this.render);
  },

  render: function() {
    console.log("Rendering the table");
    this.gameBoardElement.empty();

    for (var i = 0; i < this.board.inPlay.length; i++) {
      var card = new CardView({
        model: this.board.inPlay.at(i),
      });

      // add the generated html to the gameboardelement
      this.gameBoardElement.append(card.render());
    }
  }
});

export default TableView;
