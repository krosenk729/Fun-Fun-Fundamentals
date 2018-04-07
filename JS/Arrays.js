/* Flatten an Array */
// create a function that takes in an array of arrays
// and returns a single 1-dimensional array 

function flatten(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}
// tests
var t1 = flatten( [ [1], [2, 3], [], [4] ] ) === [1, 2, 3, 4];
console.log(t1);


/* Create a Range */
// create a function that takes in a single array with two numeric values
// return an array that contains a range of those values and all values in between
// the lowest number will not always come first 

function rangeBetw(arr) {
  arr.sort( (a,b) => a - b ); //if A > B, move it to next position
  let newArr = [];
  for(let i = arr[0], v = arr[1]; i < v; i++){
    newArr.push(i);
  }
  return newArr;
}
// tests
var t1 = rangeBetw( [9, 10] )=== [9, 10];
var t2 = rangeBetw( [12, 1] ) === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(t1, t2);



/* Find the Trues */
// Looks through an array (first argument) 
// Returns the first element in the array that passes a truth test (second argument)
function findElement(arr, func) {
  let num = arr.filter( (item)=> func(item) );
  return num[0];
}
// tests
var t1 = findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }) === 2;
var t2 = findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) === undefined;
console.log( t1, t2 );


/* Starting With Truth */
// Drop the elements of an array (first argument), 
// starting from the front, until the predicate (second argument) returns true
// return the rest of the array, otherwise return an empty array
function dropElements(arr, func) {
  while( arr.length > 0){
    if( func(arr[0]) ){ return arr; }
    arr.shift();
  }
  return arr;
}
//tests
var t1 = typeof dropElements([], function(n) {return n < 3; }) === "array";
var t2 = dropElements([1, 2, 3], function(n) {return n < 3; }) === [1, 2, 3];
var t3 = dropElements([1, 2, 3, 4], function(n) {return n > 5;}) === [];
var t4 = dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) === [7, 4];
console.log(t1, t2, t3, t4);


/* Sum in a Range */
// create a function that takes in a single array with two numeric values
// return a single value which the sum of those two numbers and all numbers between them
// the lowest number will not always come first 

function sumAll(arr){
	arr.sort((a, b) => a - b);
	const gap = arr[1] - arr[0];
	let summed = arr[0] * ((gap || 1) + 1); //gap || 1 to handle case where numbers are equal
	for(let i = 1; i <= gap; i ++){
		summed += i;
	}
	return summed;
}
// tests 
var t1 = typeof sumAll( [5, 10] ) === "number";
var t2 = sumAll( [5, 10] ) === 45; 
var t3 = sumAll( [10, 5] ) === 45; 
var t4 = sumAll( [1, 1] ) === 2; 
console.log(t1, t2, t3, t4);


/* Max Difference */
// Given an array A[], write an algo­rithm to find Max­i­mum dif­fer­ence
// between two ele­ments where larger ele­ment appears after the smaller ele­ment
// or in other words find A[i] and A[j]
// such that A[j]-A[i] is max­i­mum where j > i

function findMaxDiff(arr){
  let smallest = arr[0], biggestDif = 0;

  for(let i = 0, x = arr.length; i < x ; i++){
    smallest = Math.min( arr[i], smallest );
    biggestDif = Math.max( arr[i] - smallest, biggestDif );
  }

  return biggestDif;
}
// tests
var t1 = findMaxDiff( [ 2, 5, 1, 7, 3, 9, 5] ) === 8;
var t2 = findMaxDiff( [ 22, 2, 12, 5, 4, 7 , 3, 19, 5] ) === 17;
var t3 = findMaxDiff( [ 10, 9, 8, 7, 6 ] ) === 0;
var t4 = findMaxDiff( [ 6, 7, 8, 9, 10 ] ) === 4;


/* Piano Keys */
// Write a function which will take an array of musical keys
// and transpose those keys a specified number of steps (1 - 9)
// In music the chromatic scale has the following notes [A, A#, B, C, C#, D, D#, E, F, F#, G, G#]
// A '#' is "sharp" notation. A#, or A sharp, is in between A and B
function pianoKeys(currKeys, steps ){
  let keyboard = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  let n = keyboard.length;

  return newKeys = currKeys.map(function(item){
    let i = (keyboard.indexOf(item) + steps) < n ? keyboard.indexOf(item) + steps : (keyboard.indexOf(item) + steps) %n ;
    return keyboard[i];
  });
}
// tests
var t1 = pianoKeys(['E', 'F'], 1) === ['F', 'F#'];
var t2 = pianoKeys(['A', 'G#', 'C'], 2) === ['B', 'A#', 'D'];
var t3 = pianoKeys(pianoKeys(['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'], 36)) === ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];


/* Local Minimum */
// Given an array of inte­gers, write an algo­rithm to find the local minima
// Local Min­ima: An ele­ment is con­sid­ered as local min­ima if it is less
// than both of its neigh­bors (if neigh­bors exist)
function localMins( arr ){
  return arr.filter(function(item, i, arr){
    if(item < (arr[i-1] || item+1) && item < (arr[i+1] || item+1) ){ 
      return item;
    }
  });
}
// tests
var t1 = localMins([0, 0, 0, -1, 0, -2, 0, -1, -1, -1, -2, -1, 0]) === [-1, -2, -2];
var t2 = localMins([100, 120, 130]) === [100];
var t3 = localMins([100, 50, 40]) === [40];
var t4 = localMins([100, 100, 100]) === [100];
var t5 = localMins([]) === [];
var t6 = localMins(['A', 'B', 'C','X','Y','Z', 'A']) === ['A', 'A'];//instructions say will be integers but this still works :)
