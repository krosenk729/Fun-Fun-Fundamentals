/********************************************
 Here are some hoisting things
*/

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


/********************************************
 Hoising Can Be Trouble
 */
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

/********************************************
 Block-Level Scope 
*/
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
	let myVar = 'hello!';
	{
		let myVar = 'hi!';
	}
	console.log(myVar); //hello
	console.log('because let is block-level scope is kinda a big deal in ES6');
}

