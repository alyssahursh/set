import Backbone from 'backbone';
import CardView from 'app/views/card_view';
import $ from 'jquery';
import _ from 'underscore';

const TableView = Backbone.View.extend({
  initialize: function(options) {
    this.board = options.board;
    this.firstRow = this.$("#first-row");
    this.secondRow = this.$("#second-row");
    this.thirdRow = this.$("#third-row");
    this.listenTo(this.board.inPlay, 'change', this.render);
  },

  render: function() {
    console.log("Rendering the table");
    this.firstRow.empty();
    this.secondRow.empty();
    this.thirdRow.empty();

    for (var i = 0; i < this.board.inPlay.length; i++) {
      var card = new CardView({
        model: this.board.inPlay.at(i),
      });

      if (i % 3 === 0) {
        this.firstRow.append(card.render());
      }
      else if (i % 3 === 1) {
        this.secondRow.append(card.render());
      }
      else if (i % 3 === 2) {
        this.thirdRow.append(card.render());
      }
      // add the generated html to the gameboardelement
    }



  }
});

export default TableView;
