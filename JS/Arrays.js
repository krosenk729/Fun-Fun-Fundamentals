/********************************************* 
Flatten an Array 
*/

function flatten(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}
// tests
var t1 = flatten( [ [1], [2, 3], [], [4] ] ) === [1, 2, 3, 4];
console.log(t1);


/*********************************************
 Create a Range
*/

function rangeBetw(min, max) {
  return new Array(max + 1 - min)
    .fill(min)
    .map((item, index) => item + index);
}

function rangeTo(max) {
  return new Array(max)
  .fill(1)
  .map((item, index) => item + index);
}

/*********************************************
 Last Item
*/
function last(arr){
  return arr[arr.length -1];
}