const {Dealer, CardNumber, Suit} = require("./cards-enums");
const chai = require('chai');  

// ==========================================================================================
// Setting up Chai

const expect = chai.expect;
// const assert = chai.assert;
// const should = chai.should();


// ==========================================================================================
// Tests
describe('Named exports to be available', function () {
	it('CardNumber', ()=>{
		expect(CardNumber).to.exist;
	});

	it('Suit', ()=>{
		expect(Suit).to.exist;
	});

	it('Dealer', ()=>{
		expect(Dealer).to.exist;
	});
});

describe('Enums to be set up with defaults', function () {
	it('13 members in CardNumber enum', ()=>{
		expect(Object.keys(CardNumber).length /2).to.equal(13);
	});

	it('4 members in Suit enum', ()=>{
		expect(Object.keys(Suit).length /2).to.equal(4);
	});
});

describe('Dealer to deal cards', function () {
	it('initialize with 52 cards', ()=>{
		let dealer = new Dealer();
		expect(dealer.getLength()).to.equal(52);
	});

	it('dealer readCard [0,6] to be Seven of Clubs', ()=>{
		let dealer = new Dealer();
		expect(dealer.readCard([0, 6])).to.equal('Seven of Clubs');
	});
});
