'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = require('backbone');

var _backbone2 = _interopRequireDefault(_backbone);

var _card = require('../models/card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InPlay = _backbone2.default.Collection.extend({
  model: _card2.default,

  initialize: function initialize() {
    this.hintCard = null;
  },

  // Check if all colors match or are different
  checkColors: function checkColors(cards) {
    var colorSet = new Set([cards[0].get("color"), cards[1].get("color"), cards[2].get("color")]);
    return colorSet.size === 1 || colorSet.size === 3;
  },

  // Check if all numbers match or are different
  checkShapes: function checkShapes(cards) {
    var shapeSet = new Set([cards[0].get("shape"), cards[1].get("shape"), cards[2].get("shape")]);
    return shapeSet.size === 1 || shapeSet.size === 3;
  },

  // Check if all numbers match or are different
  checkNumbers: function checkNumbers(cards) {
    var numberSet = new Set([cards[0].get("number"), cards[1].get("number"), cards[2].get("number")]);
    return numberSet.size === 1 || numberSet.size === 3;
  },

  // Check if all fills match or are different
  checkFills: function checkFills(cards) {
    var fillSet = new Set([cards[0].get("fill"), cards[1].get("fill"), cards[2].get("fill")]);
    return fillSet.size === 1 || fillSet.size === 3;
  },

  // Check if an array of three cards is a set
  isSet: function isSet(cards) {
    return this.checkColors(cards) && this.checkShapes(cards) && this.checkNumbers(cards) && this.checkFills(cards);
  },

  checkAllCombinations: function checkAllCombinations() {
    var setCount = 0;
    var sets = [];
    var hints = [];
    for (var x = 0; x < this.length - 2; x++) {
      for (var y = x + 1; y < this.length - 1; y++) {
        for (var z = y + 1; z < this.length; z++) {
          if (this.isSet([this.at(x), this.at(y), this.at(z)])) {
            setCount += 1;
            sets.push([x, y, z]);
            hints.push(x, y, z);
          }
        }
      }
    }
    this.hintCard = this.at(this.mode(hints));
    // this.hintCard = this.at(undefined);
    console.log(JSON.stringify(sets));
    return setCount;
  },

  mode: function mode(array) {
    if (array.length === 0) {
      return null;
    }

    var modeMap = {};
    var maxEl = array[0];
    var maxCount = 1;

    for (var i = 0; i < array.length; i++) {
      var el = array[i];
      if (modeMap[el] === undefined) {
        modeMap[el] = 1;
      } else {
        modeMap[el]++;
        if (modeMap[el] > maxCount) {
          maxEl = el;
          maxCount = modeMap[el];
        }
      }
    }
    return maxEl;
  }

});

exports.default = InPlay;