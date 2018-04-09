/*
new Promise( function (resolve, reject) { ... } );
*/

function delay(num){
	return new Promise((resolve, reject)=>{
		setTimeout(resolve, num);
	});
}

delay(400)
.then(()=>{
	console.log("delaying...");
	return delay(800);
})
.then(()=>{
	console.log("delaying...");
	return delay(1200);
})
.then(()=>{
	console.log("all done");
});


/*
Auto-Chaining Promises
*/

[400, 800, 1200]
.map(delay)
.reduce((accum, curr) => {
	return accum.then(() => curr).then(()=> console.log("delaying..."));
}, Promise.resolve())
.then(()=> console.log("all done"));


/*
Promise.all()
*/

var promises = [400, 800, 1200].map(  t => delay(t).then( () => console.log("delaying...") ));

Promise
.all(promises)
.then(results => console.log("all done"));