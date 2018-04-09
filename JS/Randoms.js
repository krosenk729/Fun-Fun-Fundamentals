let myRandom = function(min, max) {
	return Math.floor( Math.random() * (max-min) + min);
}

let getRand = function(min = 0, max = 1, shouldFloor = true){
	let t = (Math.random() * (max - min)) + min;
	return shouldFloor ? t : Math.floor(t); 
}

let arrayShuffle = function(a, b){
	return .5 - Math.random() > 0;
}

let randomArray = function(len = 10){
	return new Array(len).fill(0).map( i => Math.floor( Math.random() * 100 ));
}