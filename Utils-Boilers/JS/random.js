function myRandom(min, max) {
	return Math.floor( Math.random() * (max-min) + min);
}


let getRand = function(min = 0, max = 1, shouldFloor = true){
	let t = (Math.random() * (max - min)) + min;
	return shouldFloor ? t : Math.floor(t); 
}