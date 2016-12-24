import Backbone from 'backbone';
import $ from 'jquery';

const OptionsView = Backbone.View.extend({
  initialize: function(options) {
    this.board = options.board;
    this.checkButton = this.$("#check-if-sets");
    this.listenTo(this.board.inPlay, 'drawCards', this.resetCheckSetsButton);
  },

  events: {
    'click #check-if-sets': 'checkSets',
    'click #draw-cards': 'drawCards',
    'click #reset-game': 'resetGame',
  },

  checkSets: function() {
    if (this.board.possibleWins === 0) {
      this.checkButton.html("NOPE");
    }
    else {
      this.checkButton.html("YES");
    }
  },

  resetCheckSetsButton: function() {
    this.checkButton.html("ARE THERE SETS?");
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
