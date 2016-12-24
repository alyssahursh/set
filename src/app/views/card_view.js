import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const CardView = Backbone.View.extend({
  initalize: function(options) {
    // This finds the template in the html scripts
    this.model = options.model;
  },

  events: {
    'click': 'select',
  },

  render: function() {
    this.cardTemplate = _.template($('#card-template').html());

    // Create the new html using the options with key card and values of the card's attributes
    var html = this.cardTemplate({card: this.model});
    return this.$el.html(html);
  },

  select: function() {
    // This should toggle the selected status of any card on a click.
    this.model.set("selected", !this.model.get("selected"));
    this.render();
  }

});

export default CardView;
