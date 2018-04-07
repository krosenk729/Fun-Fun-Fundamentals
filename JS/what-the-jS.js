/* Here are all my favorite JS Gotchas */

/* How is Your NaN? */
// what is crazy about NaN? let me tell you
function notAisA(){
	let a = 'NaN === NaN is false';
	let b = 'which means NaN !== NaN is true';
	let c = 'NaN can exist in an array';
	let d = 'but [NaN, NaN, NaN].indexOf(NaN) returns -1';
	let e = 'How about a set? mySet = new Set([NaN])';
	let f = 'Well at least mySet.has(NaN) is true';
}

/* See You Later Alegator */
// those alegators are out of control 
function greatLessThan(){
	let a = 3 > 2 > 1; //false
	let b = 1 < 2 < 3; //true 
}

/* Object, Array or Nay? */
// {} is an empty code block
// = {} is an empty object
// let's see it in action
function objArray(){
	let a = [] + {}; // "[object Object]"
	let b = {} + []; // 0
}

/* Equally Unequal Arrays */
// Objects and equality get funky 
function ohMyArray(){
	let a = [] == ![]; //true
	let b = [1, 2] === [1, 2]; //false
	let c = [1, 2] === ![1, 2]; //false

	let d = [1, 2];
	let e = d;
	let f = d === e; //true

	let g = d[-1] === undefined; // true
	let e = d[0] > d[-1]; // false
	let f = d[0] < d[-1]; // false
}

/* Zero Games */
// Negative zero? Great. Or, er,... negative great. 
function zeroSomeGame(){
	let a = -1 * 0; // -0 
	let b = -0 * 0; // -0
	let c = -0 + 0; // 0 

	let d = JSON.parse("-0"); // -0
	let e = JSON.stringify(-0); // '0'
	let f = String(-0); // 0 
}

/* Casting to a Number */
// This speaks for itself
function numCasted(){
	let a = Number("0."); // 0
	let b = Number(".0"); // 0
	let c = Number(".");  // Nan

	let d = Number(undefined); // NaN
	let e = Number(null); // 0

	let f = Number("O0O"); // NaN
	let g = Number("0O0"); // 0
	let h = Number("XXX"); // NaN
	let i = Number("0X0"); // 0

	let j = Number({}); // NaN
	let k = Number([]); // 0
}

/* Stringing Along */
// Let's take a number intermission 
// To look at string casting
function stringBreak(){
	let a = String({}); // "[object Object]" -- compare this to Number({}) <-- NaN
	let b = String([]); // "" -- compare this to Number([]) <-- 0

	let c = String(null); // "null"
	let d = String([null]); // ""
	let e = String([null, null]); //","

	let f = String(undefined); // "undefined"
	let g = String([undefined]); // ""
	let h = String([undefined, undefined]); //","

	let i = String([,]); //""
	let j = String([,,]); //","


}

/* Float, Float, Float Your Binary Point Values */
// Binary Floating Point Values get crazy in javascript 
// This one has no words
// But just so you know...
function binaryFloatingPointValues(){
	console.log(0.1 + 0.2); // 0.30000000000000004
	console.log(0.1 + 0.2 + 0.3); // 0.6000000000000001
	console.log((0.1 + 0.2) + 0.3); // 0.6000000000000001
	console.log(0.1 + (0.2 + 0.3)); // 0.6 

}

/* to Fix or not to Fix */
// So you saw the above floats and were like
// "Hm, let's fix a number"
// The toFixed() method converts a number into a string, 
// keeping a specified number of decimals
function whatTheFixed(){
	const F = 15;
	let a = F.toFixed(2);    // 15.00
	let b = 15.toFixed(2);   // SyntaxError
	let c = 15. toFixed(2);  // SyntaxError
	let d = 15 .toFixed(2);  // 15.00
	let e = 15 . toFixed(2); // 15.00
	let f = 15.0.toFixed(2); // 15.00
	let g = 15..toFixed(2);  // 15.00 ... whattt?
}
function parseIntIsntBetter(){
	const E = 88;
	let a = parseInt(E); // 88
	let b = parseInt( String(E) ); // 88
	let c = parseInt(E + " is now a string"); // 88
	let d = parseInt("A string is now " + E); // NaN

	let e = parseInt(9.9999999); // 10
	let f = parseInt('9.9999999'); // 9

}


/* Finally Try to Catch Return */
// See what I did there?
// Return statements in finally blocks always win. always.
function cantSayIdidntTry(){
	tryOnce: {
		try{
			console.log('Trying... trying... trying...')
			if( .5 - Math.random() > 0 ){
				throw new Error('Wow, 50% chance and you got an error');
			}
			return 'Can\'t say you didn\'t try right?';
		}catch(error){
			console.log('\*Tap\* \*tap\* ...is this thing on?', error);
			return 'Things are getting weird';
		}finally{
			console.log('3, 2, 1: blastoff! Finally');
			return('You did it! Finally!');
		}
	};
	// what does this return?
	// that's right... the last return
	// against all odds and reason 

	tryTwice: {
		try{
			console.log('Trying... trying... trying...')
			if( .5 - Math.random() > 0 ){
				throw new Error('Wow, 50% chance and you got an error');
			}
			return 'Can\'t say you didn\'t try right?';
		}catch(error){
			console.log('\*Tap\* \*tap\* ...is this thing on?', error);
			return 'Things are getting weird';
		}finally{
			console.log('3, 2, 1: blastoff! Finally');
			break tryTwice;
		}
	};
	// what does this return?
	// NOTHING. so your nice little returns
	// didn't run. because finally broke it. cool.
}

/* Hoisting
===================================================================================
*/
{
	/* Here are some hoisting things */

	/* First Things Not First */
	// First come declarations 
	// Function declarations before variable declarations
	// Then come the rest -- not reordered by hoisting 

	function firstNotFirst(){
		// Declarations hoist first -- so aVar is declared
		var aVar;
		console.log(typeof aVar); //undefined
		console.log('because you need a sanity check that the variable declaration worked');
		console.log('(aka you didn\'t get a ReferenceError)');

		// Declarations hoist first -- so myVar is declared 
		// Function declarations take precidence over variable declarations 
		// So myVar() becommes a function. great. 
		var myVar;
		function myVar(){};
		var myVar;

		console.log(typeof myVar); //function
		console.log('because declarations hoisted -- with function taking priority');

		// Declarations hoist first
		// Function declarations take precidence over variable declarations 
		// And then variable assignments & function assignments (neither are hoisted)
		// So myOtherVar becomes a string (it was the last thing assigned)
		var myOtherVar = function(){};
		var myOtherVar = 'I\'m a string!';

		console.log(typeof myOtherVar); //string
		console.log('because variable assignment comes last - and they are not hoisted');

		// Declarations hoist first 
		// Function declarations take precidence over variable declarations 
		// And then variable assignments & function assignments (neither are hoisted)
		// So myOtherestVar becomes a function (it was the last thing assigned)
		var myOtherestVar = 'I\'m a string!';
		var myOtherestVar = function(){};

		console.log(typeof myOtherestVar); //function
		console.log('because variable assignment comes last - and they are not hoisted');

		// Declarations hoist first  
		// Function declarations take precidence over variable declarations
		// (so myLastOtherest becomes a function type)
		// And then variable assignments & function assignments (neither are hoisted)
		// So myLastOtherest is left being a string 
		var myLastOtherestVar = 'I\'m a string!';
		function myLastOtherestVar(){};

		console.log(typeof myLastOtherestVar); //string
		console.log('because just in case you needed another check for function assignment going before declarations');
	}


	/* Hoising Can Be Trouble */
	// if you don't put things in the right order
	// sometimes hoisting makes it okay but sometimes no
	// yikes!
	function wheresTheTrouble(){
		// its cool to do this...
		var myX = 5;
		var myY = 10; 
		console.log(myX, myY); //5 10

		// it's not cool to do this...
		console.log(urX, urY); // valid syntax but gives undefined, undefined 
		var urX = 5;
		var urY = 10;

		// this is even cool. I mean I wouldn't do it but it's still okay...
		ourX = 5;
		ourY = 10;
		console.log(ourX, ourY); //5 10
		var ourX, ourY;
	}

	function foundTheTrouble(){
		thisCray(); // runs just fine! thanks hoisting... but logs undefined

		var x;
		function thisCray(){console.log(x);};
		thisCray(); // undefined... still

		x = 5;
		thisCray(); // 5

	}

	/* Block-Level Scope */
	// you know how curly braces define a code block?
	// what does that mean for your variable scopes? 
	// (okay, cheating, this isn't totally hoisting related)
	function blockScope() {
		var myVar = 'hello!';
		{
			var myVar = 'hi!';
		}
		console.log(myVar); //hi
		console.log('because block-level scope isn\'t a thing in og javascript');
	}

	function ES6fixedBlockScope() {
		var myVar = 'hello!';
		{
			let myVar = 'hi!';
		}
		console.log(myVar); //hello
		console.log('because let is block-level scope is kinda a big deal in ES6');
	}


}