import Backbone from 'backbone';
import TableView from 'app/views/table_view';
import OptionsView from 'app/views/options_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.board = options.board;
  },

  render: function() {
    var options = new OptionsView ({
      board: this.board,
      el: "#options"
    });

    var table = new TableView({
      board: this.board,
      el: "#gameboard"
    });

    options.render();
    table.render();
  }
});

export default ApplicationView;
