const colorfun = require("./color-functions");
const chai = require('chai');  

// ==========================================================================================
// Setting up Chai

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();


// ==========================================================================================
// Tests

describe('hexToRgb', function () {
	it('should be a function', ()=>{
		expect(colorfun.hexToRgb).to.be.a('function');
		expect(typeof colorfun.hexToRgb).to.equal('function');

		colorfun.hexToRgb.should.be.a('function');

		assert.typeOf(colorfun.hexToRgb, 'function');

	});


	it('hexToRgb("f00") -> {red: 255, green: 0, blue: 0}', ()=>{
		/* red */
		expect(colorfun.hexToRgb('f00')).to.have.property('red', 255);
		expect(colorfun.hexToRgb('f00')).to.have.property('red').that.is.equal(255);

		colorfun.hexToRgb('f00').should.have.property('red', 255);
		colorfun.hexToRgb('f00').should.have.property('red').that.is.equal(255);

		assert.strictEqual(colorfun.hexToRgb('f00').red, 255, 'red was not 255 number');
		assert.property(colorfun.hexToRgb('f00'), 'red');
		assert.propertyVal(colorfun.hexToRgb('f00'), 'red', 255);

		/* green */
		expect(colorfun.hexToRgb('f00')).to.have.property('green', 0);
		expect(colorfun.hexToRgb('f00')).to.have.property('green').that.is.equal(0);

		colorfun.hexToRgb('f00').should.have.property('green', 0);
		colorfun.hexToRgb('f00').should.have.property('green').that.is.equal(0);

		assert.strictEqual(colorfun.hexToRgb('f00').green, 0, 'green was not 0 number');
		assert.property(colorfun.hexToRgb('f00'), 'green');
		assert.propertyVal(colorfun.hexToRgb('f00'), 'green', 0);

		/* blue */
		expect(colorfun.hexToRgb('f00')).to.have.property('blue', 0);
		expect(colorfun.hexToRgb('f00')).to.have.property('blue').that.is.equal(0);

		colorfun.hexToRgb('f00').should.have.property('blue', 0);
		colorfun.hexToRgb('f00').should.have.property('blue').that.is.equal(0);

		assert.strictEqual(colorfun.hexToRgb('f00').blue, 0, 'blue was not 0 number');
		assert.property(colorfun.hexToRgb('f00'), 'blue');
		assert.propertyVal(colorfun.hexToRgb('f00'), 'blue', 0);
	});
});

