// APIs are crazee
// https://github.com/toddmotto/public-apis


/* Get Quote */
// Gets quote from quotesondesign.com 
// Adds 1 card to the UI with 3 quotes
// http://quotesondesign.com/api-v4-0/
$('#btn1').click(function(){
	let getQuotes = $.getJSON('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?&callback=');
	getQuotes.then(function(res){
		for(let i of res){
			buildCard(i.title, i.content, 'Get New Quote', '#', true);
		}
	});
});


/* Get Front Page Reddit Posts */
// Gets posts from Reddit 
// Adds Card to UI
// https://www.reddit.com/dev/api
function makeRedditCard() {
	let url = '';
	let key = '';
	$.get(url, );

	makeRedCard( posts ){
		let redditCard = ``;

		$('.row.center').append(redditCard);
	}
}

/* Get Tweets and Show in a Card */
// Gets tweets from twitter  
// Loads into a card and adds to UI
// 
function makeTweetCard() {
	let tweetyCard = `<div class="col"><div class="card news-card"><div class="card-body">
		<h4 class="card-title">
		<a href="" target="_blank">${}</a>
		</h4>
		<p class="card-text">${}</p>
		<button class="btn btn-info">Get New Trends</button>
		<a href="#" class="text-danger">Delete Card</a>
		</div></div></div>`;

	let url = '';
	let key = '';

	$.get()
}


/* Get Giphs and Show in a Card */
// Gets giphs from giphy  
// Adds Card to UI
// https://developers.giphy.com/
function makeGiphyCard() {
	let url = '';
	let key = '4wWV4TLvFLl2A737YNO3ZM2DNpMq66iw';

	$.get()
}



/* Get News from Guardian */
// Gets info from Guardian API
// Adds 3 new cards to the UI 
// http://open-platform.theguardian.com/documentation/
function makeNewsCard( ) {
	let url = 'http://content.guardianapis.com/search';
	let key = '2bb257ed-f08e-4513-82b5-9cd03d684f57';

	$.ajax({
		url: url,
		data: {'api-key': key},
		success: function(result){
			let r = result.response.results.slice(0, 3);
			r.forEach( (item)=> prettyNews(item) );
		}
	});

	function prettyNews(newsPiece){

		let newCard = `<div class="col"><div class="card news-card"><div class="card-body">
		<h4 class="card-title">News: ${newsPiece.sectionName}</h4>
		<p class="card-text">${newsPiece.webTitle}</p>
		<a href="${newsPiece.webUrl}" target="blank" class="btn btn-info">Read About It</a>
		<a href="#" class="text-danger">Delete Card</a>
		</div></div></div>`;

		$('.row.center').append( newCard );
	}
}

/* Last FM Tracks */
//
// 
var getTracks = ()=> {
	let key = 'f5d2e7d05946d421c6f425039cf1906b';
	let sharedSec = '4dfc52a4cf04f00b8c9517cdcbcd02b0';
	let url = 'http://ws.audioscrobbler.com/2.0/?';

	return $.ajax({
		url: '',
		data: {
			'api_key': key,
			'method': 'track.getsimilar',
			'artist': 'the+chainsmokers',
			'format': 'json'
		}
	});
};
getTracks.then(function(data){
	let v = buildCard(data[0].name, data[0].artist.name ,'Listen to More', data[0]url);
})

let getSpots = $.ajax({
	url: 'https://api.spotify.com',
	data: {
		key: '36dfe71599c14b03bc328f2d90beeed4'
	}

});

/* Tweety Promise? */
var getTweet = $.ajax({ 
// ajax options here with success: option removed 
}); 
getTweet.done(function(response, textStatus, jqXHR) { 
// Handle successful response here 
});

/* Get News from Guardian */
// Gets info from Guardian API
// Adds 3 new cards to the UI 
// http://open-platform.theguardian.com/documentation/

$('#btn2-test').click(function(){
	let numStories = 3;
	let getNews = $.ajax({
		url: 'http://content.guardianapis.com/search',
		data: {'api-key': '2bb257ed-f08e-4513-82b5-9cd03d684f57'}
			// let r = result.response.results.slice(0, 3);
	});
	getNews.then(function(res){
		for(let i of res.response.results.slice(0,numStories)){
			console.log(i);
			buildCard(i.sectionName, i.webTitle, 'Read About It', i.webUrl, true);
		}
	});
});


/* Build a Card */
// Does what you would think
// Given a title, body text and button text
// Returns a html DOM element 
function buildCard( title, body, btntext, btndest = # ){
	let fragment = `<div class="col">
					<div class="card">
						<div class="card-body">
							<h4 class="card-title">${title}</h4>
							<p class="card-text">${body}</p>
							<button href="${btndest}" class="btn btn-info">${btntext}</button>
							<a href="#" class="text-danger">Delete Card</a>
						</div>
					</div>
				</div><!--col-->`;
	return fragment; 
}

/* Add a Card */
// Appends HTML to the DOM
function addCard( card ){
	$('row.center').append( card );
}

