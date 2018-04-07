/* Fibanacci */
// The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
// Each subsequent number is the sum of the previous two

function fib( n ){
	if( n < 1) return [0];

	let f = [0, 1], l = f.length;
	
	while( l < n ){
		f.push( f[l-1] + f[l-2] );
		l++;
	}
	return f;
}
// tests
var t1 = fib(1) === [1];
var t2  fib(10) === [1, 1, 2, 3, 5, 8, 13, 21, 34];
var t3 = fibAnOdd( 1 ) === 1;

/* Fib an Odd Cci*/
// Given a positive integer num, return the sum
// of all odd Fibonacci numbers that are less than or equal to num
// The first two numbers in the Fibonacci sequence are 1 and 1 
// Every additional number in the sequence is the sum of the two previous numbers

// For example, num of 10 should return 10 
// because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

function fibAnOdd( num ){
	let oddSum = 0, fib1 = 0, fib2 = fib1 + 1;
	while( fib2 <= num ){
		if(fib2 %2 === 1){ oddSum += fib2 ; }
		[fib1, fib2] = [fib2, fib1 + fib2];
	}
	return oddSum;
}

// tests
var t1 = typeof fibAnOdd( 10 ) === 'number';
var t2 = fibAnOdd( 10 ) === 1 + 1 + 3 + 5;
var t3 = fibAnOdd( 1 ) === 1;
var t4 = fibAnOdd( 2 ) === 2;
var t5 = fibAnOdd( 4 ) === 5;
var t6 = fibAnOdd( 4000000 ) === 4613732;
console.log( t1, t2, t3, t4, t5, t6 );


/* Is Truthy  */
// Write a function isTruthy that accepts a single argument
// and returns true if that argument is "truthy"
// and false if the value is falsey
function isTruthy( val ){
  return val ? true : false;
}
//tests
var t1 = isTruthy('Hello!') === true;
var t2 = isTruthy('') === false;
var t3 = isTruthy(NaN) === false;
var t4 = isTruthy() === false;
var t5 = isTruthy(10) === true;
console.log( t1, t2, t3, t4, t5 );

/* Flipped Bits */
// Given two num­bers x and y, write an algo­rithm
// to find the num­ber of bits which are to be flipped to con­vert num­ber x to y
function flippBits(x, y){
	let v = 0;
	x = Number(x).toString(2).split('');
	y = Number(y).toString(2).split('');

	if(x.length > y.length){
		y = [Array( x.length - y.length ).fill(0), ...y];
	} else if (x.length < y.length){
		x = [Array( y.length - x.length ).fill(0), ...x];
	}

	for(let i = 0, t = x.length; i < t; i++){
		if(x[i] !== y[i]){ v++ ;}
	}

	return v;
}
//tests 
var t1 = flippBits(10, 20) === 4; //x: 0 1 0 1 0, y: 1 0 1 0 0
var t2 = flippBits(20, 10) === 4; //x: 0 1 0 1 0, y: 1 0 1 0 0

