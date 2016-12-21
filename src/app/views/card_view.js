import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const CardView = Backbone.View.extend({
  initalize: function(options) {
    // This finds the template in the html scripts
    this.model = options.model;
    this.on('click', this.select());
  },

  render: function() {
    console.log(this.model.get("color"));
    console.log(this.model.get("shape"));
    console.log(this.model.get("number"));
    console.log(this.model.get("fill"));

    this.cardTemplate = _.template($('#card-template').html());


    // Create the new html using the options with key card and values of the card's attributes
    var html = this.cardTemplate({card: this.model});
    console.log(this.cardTemplate);
    console.log($('#card-template').html());

    // Put that html into the dom?
    this.$el.html(html);

    // I think this is just to allow another render to get this render:
    return this.$el.html(html);
  },

  select: function() {
    // This should toggle the selected status of any card on a click.
    this.model.set("selected", !this.get("selected"));
    console.log("You clicked a card and the cardview caught it!!");
    console.log(this.model.attributes)
  }

});

export default CardView;
