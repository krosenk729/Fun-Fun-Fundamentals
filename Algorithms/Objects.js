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
  
  for(var i = 0, v = arguments.length; i < v; i++){
    arguments[i].forEach(function(item){ myC.addA(item); });
  }
  
  return myC.collection;
  
}

// tests
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


