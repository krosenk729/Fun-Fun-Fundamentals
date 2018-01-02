/* Factorialize a Number */
// Return the factorial of the provided integer (n!)
// factorial is the product of all positive integers less than or equal to itself 

function factorialize(num) {
  if(num <= 1){return 1;}
  return num * factorialize(num-1);
}

// tests
var t1 = typeof factorialize(10) === "number";
var t2 = factorialize(10) === 3628800;
var t3 = factorialize(1) === 1;
var t4 = factorialize(0) === 1;
var t5 = factorialize(-1) === 1;
console.log(t1, t2, t3, t4, t5);



/* Fibanacci */
// The Fibonacci Sequence is the series of numbers: 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
// Each subsequent number is the sum of the previous two
// Find the sum of the first n numbers in the fibanacci series 

function fib( n ){
	if( n <= 1) return 1;
	return fib(n-1) + fib(n-2);
}
// tests
var t1 = fib(1) === 1;


/* Deep Flattened Array */
// Given a multi-dimensional array, return a
// one-dimensional array of all contents 
function flatDeep( arr ){
	if( arr instanceof Array ){ 
		return arr.reduce((t,i) => {
			return (t instanceof Array) ? t.(flatDeep(i)) : Array.of(t).concat(flatDeep(i)); 
		},);
	}
	return arr; //terminating
}

// tests
var t1 = flatDeep([1, [2, [3, [4, [5]]]]]) === [1, 2, 3, 4, 5];
var t2 = flatDeep([[1, 2], [3, 4], [5, 6]]) === [1, 2, 3, 4, 5, 6];
var t3 = flatDeep([[1, 2, 3, 4, 5, 6]]) === [1, 2, 3, 4, 5, 6];
var t4 = flatDeep(["hello"]) === ["hello"];
console.log(t1, t2, t3, t4)

/* Path Finding */
// Count all paths from top left to bottom right of a mXn matrix
// Given two dimen­sional matrix, write an algo­rithm to count all pos­si­ble paths from top left cor­ner to bottom-right cor­ner. 
// You are allowed to move only in two direc­tions, move right OR move down
function pathFind(m, n){
	if( m === 1 && n === 1){ // cannot move down or right
		return 1; 
	} 
	else if ( m === 1 || n === 1 ){ // can only move one way - either down or right
		return pathFind( m - 1 || 1, n - 1 || 1  );
	}
	else { // can move down and can move right 
		return pathFind( m - 1 , n ) + pathFind( m , n -1 );
	}
}

// test 
var t1 = typeof pathFind( 1, 1 ) === 'number';
var t2 = pathFind( 2, 4 ) === 4;
var t3 = pathFind( 3, 3 ) === 6;
var t4 = pathFind( 10, 1 ) === 1;
console.log(t1, t2, t3, t4);

/* Path Printing */
// Print all the paths from left top cor­ner 
// to right bot­tom cor­ner in two dimen­sional array.


/* Traveling Robot */
// Given two dimen­sional matrix, write an algo­rithm to count all pos­si­ble paths 
// from top left cor­ner to bottom-right cor­ner. You are allowed to move only in two direc­tions, 
// move right OR move down. 
// There are few obstruc­tions as well, which means few cells are blocked 
// and you can­not travel that cell.

/* Longest Snake */
// Given two dimen­sional matrix, write an algo­rithm to find out the snake sequence which has the max­i­mum length. 
// There could be many snake sequence in the matrix, you need to return the one with the max­i­mum length
// http://algorithms.tutorialhorizon.com/find-longest-snake-sequence-in-a-given-matrix/