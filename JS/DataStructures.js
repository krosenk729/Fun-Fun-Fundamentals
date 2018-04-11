/********************************************* 
SET
*/

export class Set{
  constructor(){
    this.values = [];
    this.numberofValues = 0;
  }

  length(){
    return this.numberofValues;
  }

  add(value){
    if(!~this.values.indexOf(value)){
      this.values.push(value);
      this.numberofValues++;
    }
  }

  has(value){
    return this.values.indexOf(value) !== -1;
  }
}

Set.prototype.isSuperSet = function(subset){
  for(let e of subset){
    if(!this.has(e)){ return false; }
  }
  return true;
}

Set.prototype.union = function(nextset){
  for(let e of nextset){
    this.add(e); //add() already checks for duplicates
  }
}

Set.prototype.intersection = function(nextset){
  let interSet = new Set();
  for(let e of nextset){
    if(this.has(e)){ interSet.add(e); }
  }
  return interSet;
}

Set.prototype.difference = function(nextset){
  let interSet = new Set(this);
  for(let e of nextset){
    interSet.delete(e); //delete() runs even if e is not in interSet
  }
  return interSet;
}

/********************************************* 
STACK

LIFO - Last in, first out
Collection of elements with enqueue and dequeue operations
*/

export class Stack = {
  constructor(capacity){
    this._capacity = capacity || Infinity;
    this._storage = [];
    this._count = 0;
  }

  push(value){
    if(this._count < this._capacity){
      this._storage[this.count++] = value;
      return this._count;
    }
    return 'Max capacity reached; remove element before adding a new one';
  }

  peek(){
    if(this._count > 0){
      return this._storage[this._count - 1];
    }
    return 'No element in stack; add element before peeking';
  }

  pop(){
    if(this._count > 0){
      const val = this._storage[--this._count];
      delete this._storage[this._count];
      if(this._count < 0) this.count = 0;

      return val;
    }
    return 'No element in stack; add element before poping';
  }

  count(){
    return this._count;
  }
}

/********************************************* 
QUEUE

FIFO - First in, first out
Collection of elements with enqueue and dequeue operations
*/

export class Queue = {
  constructor(capacity){
    this._capacity = capacity || Infinity;
    this._storage = [];
    this._head = 0;
    this._tail = 0;
  }

  enqueue(value){
    if(this.count() < this._capacity){
      this._storage[this._tail++] = value;
      return this.count();
    }
    return 'Max capacity reached; remove element before enqueuing a new one';
  }

  dequeue(value){
    if(this.count() > 0){
      const val = this._storage[this._head];
      delete this.storage[this._head];
      if(this._head < this._tail) this._head++;
      return val;
    }
    return 'No element in queue; add element before dequeuing';
  }

  peek(){
    return this._storage[this._head];
  }

  count(){
    return this._head - this._tail;
  }

}

Queue.prototype.contains = function(val){
  for(let i = this._head; i < this._tail; i++){
    if(this._storage[i] === val) return true;
  }
  return false;
}

Queue.prototype.until = function(val){
  for(let i = this._head; i < this._tail; i++){
    if(this._storage[i] === val) return (i - this._head + 1);
  }
  return null;
}

/********************************************* 
ARRAY LIST
*/

// https://codepen.io/btholt/pen/dGOaXX?editors=001


/********************************************* 
LINKED LIST 
*/

// https://codepen.io/btholt/pen/eJBBEY?editors=001


/********************************************* 
MAP
*/

/********************************************* 
TREE
*/


// BST https://codepen.io/btholt/pen/EPPWmy?editors=001 
// AVL https://codepen.io/btholt/pen/EPPWmy?editors=001