import Backbone from 'backbone';

const Card = Backbone.Model.extend({

  initalize: function(options){
    // This takes all of the original option parameters and saves them to the card. This should include color, number, shape, and fill
    this.set(options);

    // This could be used to determine if the card has already been used?
    this.set("played", false);

    // This is so that the card knows whether it is currently selected
    this.set("selected", false);

    // This is to listen for clicks on this card;
    this.on('click', select());
  },

  select: function() {
    // This should toggle the selected status of any card on a click.
    this.set("selected", !this.get("selected"));
  },
});

export default Card;
