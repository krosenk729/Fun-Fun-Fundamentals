// ********************************************
// Callback Grossness

// Vanilla
setTimeout(function(){
	console.log("this is a callback");
}, 1000);

// Nested
setTimeout(function(){
	console.log("this is a callback");

	setTimeout(function(){
		console.log("this is another callback");

		setTimeout(function(){
			console.log("this is a third callback");
		}, 1000);

	}, 1000);
}, 1000);


// Cleaned up
function is_a_callback(cb){
	console.log("this is a callback");
	setTimeout(cb, 1000);	
}

function is_another_callback(cb){
	console.log("this is another callback");
	setTimeout(cb, 1000);	
}

function is_a_third_callback(cb){
	console.log("this is a third callback");
	setTimeout(cb, 1000);	
}

is_a_callback(function(){
	is_another_callback(function(){
		is_a_third_callback();
	});
});

// ********************************************
// Async / Await

function getQuote() {
	return new Promise(function(resolve, reject) {
		$.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(response) {
			resolve(response);
		});
	});
}

async function ajaxasync() {
	try {
		var quote = await getQuote();
		console.log(quote[0]);
	} catch(error) {
		console.error(error);
	}
}

ajaxasync();
console.log('Ron once said,');