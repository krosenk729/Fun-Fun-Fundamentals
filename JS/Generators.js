/*
Pause / play generator
*/

function* gen(){
	console.log("hello");
	yield;
	console.log("world");
}

var it = gen(); // nothing happens 
it.next(); // hello
it.next(); // world

/*
Yield a value
*/

function* main(){
	yield 1;
	yield 2;
	yield 3;
}

var it = main(); 

it.next(); // {value: 1, done: false}
it.next(); // {value: 2, done: false}
it.next(); // {value: 3, done: false}

it.next(); // {value: undefined, done: true}
