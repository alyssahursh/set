import Backbone from 'backbone';

const Card = Backbone.Model.extend({

  initalize: function(options){
    // This takes all of the original option parameters and saves them to the card. This should include color, number, shape, and fill. We also pass in a clicked and played status. NOTE: I think that the played status is probably unnecessary.
    this.set(options);

    // This is to listen for clicks on this card;
    this.on('click', select());
  },

  select: function() {
    // This should toggle the selected status of any card on a click.
    this.set("selected", !this.get("selected"));
  },
});

export default Card;
