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
var t1 = rangeBetw( [9, 10] ); // [9, 10]
var t2 = rangeBetw( [20, 1] ); // [1, 2, 3, 4, 5, .., 19, 20]



/* Sum in a Range */
// create a function that takes in a single array with two numeric values
// return a single value which the sum of those two numbers and all numbers between them
// the lowest number will not always come first 

// attempt 1 -- does not handle two equal numbers
/*
function sumAll(arr) {
  arr.sort((a, b) => a - b );
  let newV = 0;
  for(let i = arr[0], v = arr[1]; i <= v; i++){
    newV += i;
  }
  return newV;
}
*/

// attempt 2
// formula: (max(gap, 1) + 1)* n1 + sum of (1... gap)
function sumAll(arr){
	arr.sort((a, b) => a - b);
	const gap = arr[1] - arr[0];
	let summed = arr[0] * ((gap || 1) + 1);
	for(let i = 1; i <= gap; i ++){
		summed += i;
	}
	return summed;
}


// 1 + 2 + 3 = 6
// 10 + 11 + 12 + 13 = (13 - 10)
// tests 
var t1 = typeof sumAll( [5, 10] ) === "number";
var t2 = sumAll( [5, 10] ) === 45; 
var t3 = sumAll( [10, 5] ) === 45; 
var t4 = sumAll( [1, 1] ) === 2; 
