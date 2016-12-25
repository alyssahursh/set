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
    'click #hint': 'hintCard'
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

  hintCard: function() {
    if (this.board.inPlay.hintCard === undefined) {
      console.log("Trying to updated the button");
      this.$("#draw-cards").addClass('isHint');
      setTimeout(() => {this.$("#draw-cards").removeClass('isHint')}, 1000);
    }
    else {
      this.board.inPlay.hintCard.set({"hint": "isHint"});
      this.board.inPlay.trigger('drawCards');
      setTimeout(() => {
        this.board.inPlay.hintCard.set({"hint": "notHint"});
        this.board.inPlay.trigger('drawCards');
      }, 1000);
    }
  },

  render: function() {
  }
});

export default OptionsView;
