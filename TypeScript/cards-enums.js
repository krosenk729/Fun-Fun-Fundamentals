"use strict";
exports.__esModule = true;
/**
 * 0 = clubs, 1 = diamonds, 2 = hearts, 3 = spades
 * Cards are [suit, cardNumber] such that [0, 6] = seven of clubs
 */
var Suit;
(function (Suit) {
    Suit[Suit["Clubs"] = 0] = "Clubs";
    Suit[Suit["Diamonds"] = 1] = "Diamonds";
    Suit[Suit["Hearts"] = 2] = "Hearts";
    Suit[Suit["Spades"] = 3] = "Spades";
})(Suit = exports.Suit || (exports.Suit = {}));
;
var CardNumber;
(function (CardNumber) {
    CardNumber[CardNumber["Ace"] = 0] = "Ace";
    CardNumber[CardNumber["Two"] = 1] = "Two";
    CardNumber[CardNumber["Three"] = 2] = "Three";
    CardNumber[CardNumber["Four"] = 3] = "Four";
    CardNumber[CardNumber["Five"] = 4] = "Five";
    CardNumber[CardNumber["Six"] = 5] = "Six";
    CardNumber[CardNumber["Seven"] = 6] = "Seven";
    CardNumber[CardNumber["Eight"] = 7] = "Eight";
    CardNumber[CardNumber["Nine"] = 8] = "Nine";
    CardNumber[CardNumber["Ten"] = 9] = "Ten";
    CardNumber[CardNumber["Jack"] = 10] = "Jack";
    CardNumber[CardNumber["Queen"] = 11] = "Queen";
    CardNumber[CardNumber["King"] = 12] = "King";
})(CardNumber = exports.CardNumber || (exports.CardNumber = {}));
;
/**
 * Create a Deck of 52 cards
 */
function createDeck() {
    var cards = [];
    for (var s = 0; s < Object.keys(Suit).length; s += 2) {
        for (var n = 0; n < Object.keys(CardNumber).length; n += 2) {
            cards.push([s / 2, n / 2]);
        }
    }
    return cards;
}
/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a) {
    for (var i = a.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
    }
    var _a;
}
/**
 * Dealer class
 * dealHand( num_cards ) -> five random cards
 * getLength() -> cards left in deck
 * readCard( card ) -> "Seven of Spades"
 */
var Dealer = /** @class */ (function () {
    function Dealer() {
        this.cards = [];
        this.getLength = function () {
            return this.cards.length;
        };
        this.dealHand = function (numCards) {
            if (numCards > this.getLength())
                throw new Error('No enough cards left');
            if (numCards < 0)
                throw new Error('Nope');
            return this.cards.splice(this.getLength() - numCards, numCards);
        };
        this.cards = createDeck();
        shuffleArray(this.cards);
    }
    Dealer.prototype.readCard = function (card) {
        var suit = card[0], cardNum = card[1];
        return CardNumber[cardNum] + " of " + Suit[suit];
    };
    return Dealer;
}());
exports.Dealer = Dealer;
