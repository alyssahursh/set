'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = require('backbone');

var _backbone2 = _interopRequireDefault(_backbone);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardView = _backbone2.default.View.extend({
  initalize: function initalize(options) {
    // This finds the template in the html scripts
    this.model = options.model;
    this.listenTo(this.model, 'hint', this.shakeHint);
  },

  events: {
    'click': 'select'
  },

  render: function render() {
    this.cardTemplate = _underscore2.default.template((0, _jquery2.default)('#card-template').html());

    // Create the new html using the options with key card and values of the card's attributes
    var html = this.cardTemplate({ card: this.model });
    return this.$el.html(html);
  },

  select: function select() {
    // This should toggle the selected status of any card on a click.
    this.model.set("selected", !this.model.get("selected"));
    this.render();
  },

  shakeHint: function shakeHint() {
    var _this = this;

    console.log("Trying to shake this card:");
    console.log(this.model);
    setTimeout(function () {
      _this.model.set({ "hint": "notHint" });
    }, 1000);
    this.board.inPlay.trigger('change');
    this.board.inPlay.trigger('drawCards');
  }

});

exports.default = CardView;