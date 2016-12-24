import Backbone from 'backbone';
import TableView from 'app/views/table_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.board = options.board;
  },

  render: function() {
    var table = new TableView({
      board: this.board,
      el: "#gameboard"
    });

    table.render();
  }
});

export default ApplicationView;
