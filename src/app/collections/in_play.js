import Backbone from 'backbone';
import Card from 'app/models/card';


// this should maybe be a model instead???
const InPlay = Backbone.Collection.extend({
  model: Card
});

export default InPlay;
