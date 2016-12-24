import Backbone from 'backbone';
import Card from 'app/models/card';


// this should maybe be a model instead???
const InPlay = Backbone.Collection.extend({
  model: Card,

  initialize: function() {
  },

  // THIS ENTIRE THING COULD BE DRIED UP TO ONLY BE ONE FUNCTION, BUT I WENT THE LONG ROUTE TO START
  checkColors: function(cards) {
    // check if they all have the same color
    var colorAllSame =
      cards[0].get("color") === cards[1].get("color") &&
      cards[1].get("color") === cards[2].get("color");

    // check if they all have different colors
    this.colorAllDifferent = function(cards) {
      var sortedValues = [cards[0].get("color"), cards[1].get("color"), cards[2].get("color")].sort();
      return sortedValues[0] === "green" && sortedValues[1] === "purple" && sortedValues[2] === "red";
    };

    return colorAllSame || this.colorAllDifferent(cards);
  },

  // Check if all numbers match or are different
  checkShapes: function(cards) {
    // check if they all have the same fill
    var shapeAllSame =
      cards[0].get("shape") === cards[1].get("shape") &&
      cards[1].get("shape") === cards[2].get("shape");

    // check if they all have different shapes
    this.shapeAllDifferent = function(cards) {
      var sortedValues = [cards[0].get("shape"), cards[1].get("shape"), cards[2].get("shape")].sort();
      return sortedValues[0] === "diamond" && sortedValues[1] === "oval" && sortedValues[2] === "rectangle";
    };

    return shapeAllSame || this.shapeAllDifferent(cards);
  },

  // Check if all numbers match or are different
  checkNumbers: function(cards) {
    // check if they all have the same number
    var numberAllSame =
      cards[0].get("number") === cards[1].get("number") &&
      cards[1].get("number") === cards[2].get("number");

    // check if they all have different numbers
    this.numberAllDifferent = function(cards) {
      var sortedValues = [cards[0].get("number"), cards[1].get("number"), cards[2].get("number")].sort();
      return sortedValues[0] === 1 && sortedValues[1] === 2 && sortedValues[2] === 3;
    };

    return numberAllSame || this.numberAllDifferent(cards);
  },

  // Check if all fills match or are different
  checkFills: function(cards) {
    // check if they all have the same fill
    var fillAllSame =
      cards[0].get("fill") === cards[1].get("fill") &&
      cards[1].get("fill") === cards[2].get("fill");

    // check if they all have different fills
    this.fillAllDifferent = function(cards) {
      var sortedValues = [cards[0].get("fill"), cards[1].get("fill"), cards[2].get("fill")].sort();
      return sortedValues[0] === "empty" && sortedValues[1] === "solid" && sortedValues[2] === "stripe";
    };

    return fillAllSame || this.fillAllDifferent(cards);
  },

  // We need a function to tell us if three clicked cards are a set
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
            console.log(this.at(x).attributes, this.at(y).attributes, this.at(z).attributes);
            setCount += 1;
          }
        }
      }
    }
    console.log("There are " + setCount + " possible wins on the table");
    console.log(sets);
    return setCount;
  }
});

export default InPlay;
