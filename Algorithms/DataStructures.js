/* Set Up for Success */
// write functions for Set collections
// to calculate isSuperSet, union, intersection and difference 

Set.prototype.isSuperSet = function(subset){
  for(var e of subset){
    if(!this.has(e)){ return false; }
  }
  return true;
}
Set.prototype.union = function(nextset){
  for(var e of nextset){
    this.add(e); //add() already checks for duplicates
  }
}

Set.prototype.intersection = function(nextset){
  var interSet = new Set();
  for(var e of nextset){
    if(this.has(e)){ interSet.add(e); }
  }
  return interSet;
}

Set.prototype.difference = function(nextset){
  var interSet = new Set(this);
  for(var e of nextset){
    interSet.delete(e); //delete() runs even if e is not in interSet
  }
  return interSet;
}

//tests 


/*  */
// 
// 