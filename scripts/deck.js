/*
1. // Define a Card
    // - Properties: suit (string), icon(string, see below), color (string), rank (string or number), value (its point value), faceUp (boolean), currentOwner (string)
    // ---> The current owner should be set to "dealer" by default.

    // - Constructor to initialize suit and rank

    // - Method: method flip() to invert the current state of faceUp.
    // - Method: toString() to return a string representation of the card. EX: "2 of Hearts", "Ace of Spades"
    // - Method: compare() to compare two Card objects. It should return TRUE if the current card point value is greater than the other card's, and FALSE otherwise.


2. // Define a Deck
    // - Property: cards (array of Card objects)
    // - Method: initialize() to populate the deck with 52 unique cards
    // - Method: shuffle() to randomize the order of cards
    // - Method: draw() to remove and return the top card
    // - Method: reset() to restore the deck to a full, ordered state

3. // Instantiate a Deck object and export it as 'deck'

*/

const suitIcons = {
    hearts: "♥",
    diamonds: "♦",
    clubs: "♣",
    spades: "♠"
};


// Here's an example deck with just one card in it
let deck = {
    cards: [{suit: "hearts", icon: "♥", color: "red", rank: "2", value: 2, faceUp: true, currentOwner: "dealer"}],
}

export default deck;