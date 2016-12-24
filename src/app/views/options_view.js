import Backbone from 'backbone';
import $ from 'jquery';

const OptionsView = Backbone.View.extend({
  initialize: function(options) {
    this.board = options.board;
    // this.checkButton = this.$("#check-if-sets");
    // this.drawButton = this.$("#draw-cards");
    // this.resetButton = this.$("#reset-cards");
  },

  events: {
    'click #check-if-sets': 'checkSets',
    'click #draw-cards': 'drawCards',
    'click #reset-game': 'resetGame',
  },

  checkSets: function() {
    console.log(this.board.possibleWins);
  },

  drawCards: function() {
    this.board.dealThreeMore();
  },

  resetGame: function() {
    window.location.reload();
  },

  render: function() {
    console.log("render function of options view");
  }
});

export default OptionsView;
