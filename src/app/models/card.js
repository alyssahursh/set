import Backbone from 'backbone';

const Card = Backbone.Model.extend({

  initalize: function(options){
    // This takes all of the original option parameters and saves them to the card. This should include color, number, shape, and fill. We also pass in a selected status
    this.set(options);
  },
});

export default Card;
