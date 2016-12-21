import Backbone from 'backbone';

import Space_View from 'app/views/space_view';


const GameBoard_View = Backbone.View.extend({
  intialize: function() {
    var boardSpaces = [];
    for (var i = 0; i < 9; i++) {
      var space = new Space_View();
      this.el.append(space.render());
    }
    
  }

});

export default GameBoard_View;
