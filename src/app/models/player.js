import Backbone from 'backbone';

const Player = Backbone.Model.extend({
  initialize: function(options) {
    this.set("name", options.name);
    this.set("symbol", options.symbol);
  }

  }
});

export default Player;
