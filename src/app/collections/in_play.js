import Backbone from 'backbone';
import Card from 'app/models/card';

const InPlay = Backbone.Collection.extend({
  model: Card,

  // Check if all colors match or are different
  checkColors: function(cards) {
    var colorSet = new Set([ cards[0].get("color"), cards[1].get("color"), cards[2].get("color") ]);
    return colorSet.size === 1 || colorSet.size === 3;
  },

  // Check if all numbers match or are different
  checkShapes: function(cards) {
    var shapeSet = new Set([ cards[0].get("shape"), cards[1].get("shape"), cards[2].get("shape") ]);
    return shapeSet.size === 1 || shapeSet.size === 3;
  },

  // Check if all numbers match or are different
  checkNumbers: function(cards) {
    var numberSet = new Set([ cards[0].get("number"), cards[1].get("number"), cards[2].get("number") ]);
    return numberSet.size === 1 || numberSet.size === 3;
  },

  // Check if all fills match or are different
  checkFills: function(cards) {
    var fillSet = new Set([ cards[0].get("fill"), cards[1].get("fill"), cards[2].get("fill") ]);
    return fillSet.size === 1 || fillSet.size === 3;
  },

  // Check if an array of three cards is a set
  isSet: function(cards) {
    return (this.checkColors(cards) && this.checkShapes(cards) && this.checkNumbers(cards) && this.checkFills(cards));
  },

  checkAllCombinations: function() {
    var setCount = 0;
    var sets = [];
    for (var x = 0; x < this.length - 2; x++) {
      for (var y = x + 1; y < this.length - 1; y++) {
        for (var z = y + 1; z < this.length; z++) {
          if (this.isSet([this.at(x), this.at(y), this.at(z)])) {
            sets.push([x, y, z]);
            setCount += 1;
          }
        }
      }
    }
    return setCount;
  }

});

export default InPlay;
