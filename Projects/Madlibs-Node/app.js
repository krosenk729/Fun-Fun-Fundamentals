//https://github.com/smakosh/node-todo-app/tree/master/views
var express = require('express');
var app = express();

// app.set('view engine', ejs);
// app.use(express.static('./public'));


// 1. get mad lib paragraph and needs (nouns, verbs, etc)
// 2. show madlib inputs / forms
// 3. on submit, validate
// 4. show user their story 
app.get('/madlibs/', function(){
	var userInputs = {};
});


app.listen(8080);
console.log('listening on 8080');