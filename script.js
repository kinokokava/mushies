// script.js

// Card Deck Management
class CardDeck {
    constructor() {
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
    }

    removeCard(card) {
        this.cards = this.cards.filter(c => c !== card);
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}

// Collection Management
class Collection {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
    }

    getAllItems() {
        return this.items;
    }
}

// Search Functionality
function searchCollection(collection, query) {
    return collection.filter(item => item.toLowerCase().includes(query.toLowerCase()));
}

// Example Usage
const myDeck = new CardDeck();
myDeck.addCard('Card 1');
myDeck.addCard('Card 2');
myDeck.shuffle();

const myCollection = new Collection();
myCollection.addItem('Item 1');
myCollection.addItem('Item 2');

const searchResults = searchCollection(myCollection.getAllItems(), '1');
console.log(searchResults);
