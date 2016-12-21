import Backbone from 'backbone';

// The app should start by creating all of the cards and storing them in a model

// First, store arrays of each of the attribues and their possible values
var color = ['red', 'purple', 'green'];
var number = [1, 2, 3];
var shape = ['rectangle', 'oval', 'diamond'];
var fill = ['empty', 'stripe', 'solid'];

// Create an empty array of cards (later we will put this into the deck?)
var allCards = []
