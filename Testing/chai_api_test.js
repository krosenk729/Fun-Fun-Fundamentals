const chai = require('chai');
const chaiHttp = require('chai-http');

// ==========================================================================================
// Setting up Chai

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();
chai.use(chaiHttp);


// ==========================================================================================
// Tests

const rhymeWith = 'https://api.datamuse.com/words?sl=elefint',
soundsLike = 'https://api.datamuse.com/words?rel_rhy=forgetful',
describes = 'https://api.datamuse.com/words?rel_jjb=ocean';
describe('Rhyme With API', ()=>{
	beforeEach((done)=>{
		// this is where you would usually stage data in database
		done();
	});

	it('should return json data', ()=>{
		chai.request(rhymeWith).get('/').end((err, res)=>{
			res.body.should.be.a('array');
		})
	});
	it('should have a score for each word', ()=>{
		chai.request(rhymeWith).get('/').end((err, res)=>{
			res.body[0].should.have.property('word').that.is.a('string');
			res.body[0].should.have.property('score').that.is.a('number');
		});
	});
	it('should have the highest scores first', ()=>{
		chai.request(rhymeWith).get('/').end((err, res)=>{
			res.body[0]['score'].should.be.gte(res.body[2]['score']);
			res.body[2]['score'].should.be.gte(res.body[4]['score']);
		})
	});
});