/**
 * 0 = clubs, 1 = diamonds, 2 = hearts, 3 = spades 
 * Cards are [suit, cardNumber] such that [0, 6] = seven of clubs 
 */
 export enum Suit{Clubs, Diamonds, Hearts, Spades};
 export enum CardNumber{Ace, Two, Three, Four, Five,Six, Seven, Eight, Nine, Ten,Jack, Queen, King}; 
 type Card = [Suit, CardNumber];

/**
 * Create a Deck of 52 cards
 */
function createDeck(): Card[] {
	let cards: Card[] = [];
	for(let s = 0; s < Object.keys(Suit).length; s += 2){
		for(let n = 0; n < Object.keys(CardNumber).length; n += 2){
			cards.push([s/2, n/2]);
		}
	}
	return cards;
}

/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]): void {
 	for (let i = a.length; i; i--) {
 		let j = Math.floor(Math.random() * i);
 		[a[i - 1], a[j]] = [a[j], a[i - 1]];
 	}
 }

/**
 * Dealer class 
 * dealHand( num_cards ) -> five random cards
 * getLength() -> cards left in deck
 * readCard( card ) -> "Seven of Spades"
 */

 export class Dealer{
 	cards: Card[] = [];
 	constructor(){
 		this.cards = createDeck();
 		shuffleArray(this.cards);
 	}

 	getLength = function(): number{
 		return this.cards.length;
 	}

 	dealHand = function(numCards: number): Card[]{
 		if(numCards > this.getLength()) throw new Error('No enough cards left');
 		if(numCards < 0) throw new Error('Nope');
 		return this.cards.splice(this.getLength() - numCards, numCards);
 	}

 	readCard(card: Card): string{
 		let [suit, cardNum] = card;
 		return `${CardNumber[cardNum]} of ${Suit[suit]}`;
 	}

}