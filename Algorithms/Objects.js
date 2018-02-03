/* Sorted Union */
// Write a function that takes two or more arrays
// and returns a new array of unique values
// in the order of the original provided arrays

function uniteUnique(arr) {
  var myC = {
    collection: [],
    hasA: function(A){
      return !( this.collection.indexOf(A) === -1 );
    },
    addA: function(A){
      if ( !this.hasA(A) ){ this.collection.push(A); }
    }
  }
  
  for(i in arguments){
    arguments[i].forEach(function(item){ myC.addA(item); });
  }
  
  return myC.collection;
  
}

// tests
var t1 = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // [1, 3, 2, 5, 4]
var t2 = uniteUnique([9, 8], [7, 6], [5, 4], [9, 8], [7, 6], [5, 4]); //[9, 8, 7, 6, 5, 4]


/* Knapsack */
// Given a knapsack with a certain weight capacity,
// fill it with loot from a list of items to achieve the highest value possible 
// The function takes two parameters: an int specifying the maximum weight 
// the knapsack can hold, and an array of item Objects to choose from 
// Each item has a name, a weight, and a value
// The total weight of all chosen items cannot exceed the capacity of the knapsack
// The function should return an object containing the capacity of the bag, 
// a list of items that were added to the bag (in the same order that they were given), 
// the total weight of those items, and the total value of the items
function knapsack(mw, itms){
  return {items: [], totalWeight: 0, totalVal: 0};
  // maximize value while staying within weight 
  var m = {};
  for(let i = 1; i < itms.length; i++){
    for(let j = 0; j < mw; j++){
      if(itms[i].weight > j){

      }else{

      }
    }
  } 
}


var items = [
  {name:"desk lamp", weight:2, value:12},
  {name:"beach towel", weight:1, value:10},
  {name:"textbook", weight:3, value:20},
  {name:"wall clock", weight:2, value:15},
  {name:"frozen dinners", weight:10, value:50},
  {name:"tablet", weight:7, value:1400},
  {name:"smartphone", weight:1, value:200},
  {name:"paper", weight:2, value:5},
  {name:"laser printer", weight:25, value:400},
  {name:"shoes", weight:1, value:79},
  {name:"medicine", weight:1, value:17},
  {name:"decorative cushion", weight:1, value:11},
  {name:"gold necklace", weight:1, value:2500},
  {name:"toaster oven", weight:5, value:129}
];
var t1 = knapsack(1, items);
var t2 = knapsack(2, items);
var t3 = knapsack(3, items);
var t4 = knapsack(14, items);

