import Backbone from 'backbone';
import _ from 'underscore';


const Space_View = Backbone.View.extend({
  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

export default Space_View;
