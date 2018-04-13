/*******************************************
 Factorialize a Number 
 */
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



/*******************************************
 Fibanacci 
 */
// The Fibonacci Sequence is the series of numbers: 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
// Each subsequent number is the sum of the previous two
// Find the sum of the first n numbers in the fibanacci series 

function fib( n ){
	if( n <= 1) return 1;
	return fib(n-1) + fib(n-2);
}
// tests
var t1 = fib(1) === 1;


/*******************************************
 Deep Flattened Array
 */
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

/*******************************************
 Path Finding
  */
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

// Given the size of a grid (X rows and Y columns),
// write a function that returns the number of possible
// paths one can take starting at the top left of the grid
// and ending at the bottom right, assuming you can only
// move to the right and down.
function countSteps(x, y){
	console.log(`x is ${x}, y is ${y}`);
	if(x <= 1 && y <= 1){
		return 0;
	}
	const down = y <= 1 ? 0 : 1 + countSteps( x, Math.max(1, --y)) ;
	const right = x <= 1 ? 0 : 1 + countSteps( Math.max(1, --x), y ) ;
	return right + down;
}

/*******************************************
 Greatest Divisor
*/
// Write a function that takes two numbers and returns the greatest common divisor

function greatestDivisor(num1, num2){
	const min = Math.min(num1, num2);
	const max = Math.max(num1, num2);
	if( max % min === 0){ return min }
	return greatestDivisor(min, max % min);
}

// test 
var t1 = typeof greatestDivisor( 1, 1 ) === 'number';
var t2 = greatestDivisor( 54, 24 ) === 6;
var t3 = greatestDivisor( 89, 15 ) === 1;
var t4 = greatestDivisor( 90, 15 ) === 15;
console.log(t1, t2, t3, t4);


/*******************************************
 Color Fill
*/
// Implement a function that takes in a two-dimensional screen represented as a 2-d array of color numbers,
// a point in the array, and a color. The function will change the original color of the point
// to the new color and will fill surrounding neighbors with the new color *if* the neighbor has 
// the same original color as the point

function colorFill(screen, point, color){
	const original = screen[point[0]][point[1]];
	const recurse = function(row, column){
		screen[row][column] = color;
		if(screen[row - 1] && screen[row - 1][column] === original) recurse(row - 1, column);
		if(screen[row + 1] && screen[row + 1][column] === original) recurse(row + 1, column);
		if(screen[row][column - 1] === original) recurse(row, column - 1);
		if(screen[row][column + 1] === original) recurse(row, column + 1);
	}
	recurse([point[0]][point[1]]);
	return screen;
}


var screen1 = [
  [1,1,1,1,1,1,1],
  [1,2,2,2,2,1,1],
  [3,3,3,2,2,2,1],
  [1,1,2,2,2,3,3],
  [1,1,1,1,3,3,3]
];
console.log(paintFill(screen1, [4, 5], 5));
var screen2 = [
  [1,1,1,1,1,1,1],
  [1,2,2,2,2,1,1],
  [3,3,3,2,2,2,1],
  [1,1,2,2,2,5,5],
  [1,1,1,1,5,5,5]
];

console.log(paintFill(screen1, [0, 0], 5));
var screen3 = [
  [5,5,5,5,5,5,5],
  [5,2,2,2,2,5,5],
  [3,3,3,2,2,2,5],
  [1,1,2,2,2,5,5],
  [1,1,1,1,5,5,5]
];

