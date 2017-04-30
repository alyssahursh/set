# Set
Single-page application. [Set](https://en.wikipedia.org/wiki/Set_(game)) card game using the JavaScript framework Backbone. Play it [here](https://alyssahursh.github.io/set).

<kbd>![Set card game](/set.png?raw=true "Set card game")</kbd>

## Technologies
* Primary language: Javascript
* Framework: [Backbone](http://backbonejs.org/)
* Deployed with Github pages

## How do I play?
[Head on over to the app](https://alyssahursh.github.io/set)
Select three cards that are part of a set. You can tell you've selected a card when the card turns gray.

A set is comprised of three cards where:
* The color of the cards are either all the same or all different (i.e. all green, or one green, one red, one blue).
* The shape on on the cards are either all the same or all different (i.e. all ovals, or one oval, one diamond, one rectangle).
* The fill of the shapes is either all the same or all different (i.e. all solid fill, or one empty, one stripe, one solid).
* The count on each card is either all the same or all different (i.e all have only one shape, or they have one, two, and three shapes).

When you select three cards that are part of a set, those cards will be replaced with three new cards from the deck. If your selection doesn't form a set, the cards will deselect themselves so that you can try again.

If there are only 12 cards on the table, you can click "Draw Cards" to add three more cards to the table (and increase your odds of finding a set).

Need help finding a set? Click the Hint button, which will shake the card that belongs to the most sets currently on the board. If there are no sets on the board, getting a hint will shake the "Are There Sets" button instead. 

## Why did you build this?
* Our assignment was to build tic-tac-toe as a single-page application, but I couldn't make sense of the instruction or the assignment

## If I had more time
* I'd fix the responsiveness of the site, so that you can resize the screen without unexpected behavior.
* I'd add the ability to score points and game wins by player.
* I'd add a deck counter to tell you how many more cards are left in the deck.
