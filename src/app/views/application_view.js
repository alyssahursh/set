import Backbone from 'backbone';

import GameBoard_View from 'app/views/gameboard_view';
import Score_View from 'app/views/score_view';


const ApplicationView = Backbone.View.extend({
  render: function() {
    const gameBoard = new GameBoard_View({
      el: "gameboard"
      // model: UNKNOWN
    });

    gameBoard.render();
    
    return this;
  }

});

export default ApplicationView;
