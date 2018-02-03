// APIs are crazee
// https://github.com/toddmotto/public-apis
var numCards = 3; 

/* Songs / Music */
// https://genius.com/developers
function getSongs(){
	let u = 'https://api.genius.com/web_pages/lookup?canonical_url='
	let k = 'TJf3WFiX-leYmEVzN3IyiOn1tG1CYBVhS67ICo6KteQkJq5tfrsbVvWDBCql_D9Z'
}

/* Twitter Cards */
// Gets trending hash tags and trending tweets 
// from twitter and adds cards to the page

/* Weather Card */
// Gets weather and adds a card to page
function getWeather(){
	let weatherReq = new requestMaker();

}

/* Giph Cards */
// Gets trending hash tags and trending tweets 
// from twitter and adds cards to the page
function getGiphy(isNew = true){
	let giphOffSet = Math.floor( Math.random() *50 );
	let giphyReq = new requestMaker('giph', 'http://api.giphy.com/v1/gifs/trending', {api_key: '4wWV4TLvFLl2A737YNO3ZM2DNpMq66iw', rating: 'g', limit:1, offset: giphOffSet});

	giphyReq.makeRequest().then(function(res){
		let b = `<a href="${res.data[0].url}" target="_blank">${res.data[0].title}</a>
		<img src="${res.data[0].images.downsized.url}" width="${res.data[0].images.downsized_still.width}">`
		giphyReq.buildCard( 'Get Your Giphy On', b , 'New Jiffy Giphy' , '#', isNew);
	});
}

function newGiphy(){
	getGiphy(false);
	$(this).remove();
	// do stuff to get giph card prepend and replaced 
}


/* Quote Cards */
// Gets JSON quote from quotesondesign.com
// and adds it to a page (always 1)
// also creates function for replacing a card 
// with a newly refreshed quote
function getQuotes(){
	let quoteReq = new requestMaker('quote', `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?&callback=`);
	
	quoteReq.makeJSONRequest().then(function(res){
		quoteReq.buildCard(res.title, res.content, 'Get New Quote', '', true);
	});

}

function getNewQuote(){
	let quoteReq = new requestMaker('quote', `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?&callback=`);

	quoteReq.makeJSONRequest().then(function(res){
		let c = quoteReq.buildCard(res.title, res.content, 'Get New Quote', '', false);

		// replace the card that invoked this function with the card we just created
		$(this).parents('.outer-card').prepend(c).remove();
	});

}


/* Gets News */
// Gets news stories from the guardian 
// and adds them to the page
function getNews(){
	let guardianReq = new requestMaker('news', 'http://content.guardianapis.com/search', {'api-key': '2bb257ed-f08e-4513-82b5-9cd03d684f57'});

	guardianReq.makeRequest().then(function(res){
		for(let i of res.response.results.slice(0,numCards)){
			guardianReq.buildCard(i.sectionName, i.webTitle, 'Read About It', i.webUrl, true);
		}
	});

}

/* Gets Reddit Front-Page Info */
// Gets three reddits from popular
// and adds cards to the page
function getReddits(){
	let redditReq = new requestMaker('reddit', 'https://www.reddit.com/r/popular.json?limit='+numCards);

	redditReq.makeRequest().then(function(res){
		for(let i of res.data.children){
			i.data.tempHeader = i.data.title.substring(0, 50) + '...' ;
			i.data.tempCardBody = i.data.title.substring(50) || '';
			i.data.tempCardBody += `From Subreddit r/${i.data.subreddit} with ${i.data.num_comments} comments.`;
			i.data.tempCardBody += (i.data.thumbnail_width || i.data.thumbnail_height ) ? `<img src="${i.data.thumbnail}" alt="thumbnail of reddit story" width="${i.data.thubnail_width}">` : '';
			
			redditReq.buildCard(i.data.tempHeader, i.data.tempCardBody, 'See It On Reddit', 'reddit.com/' + i.data.permalink,true);
		}
	});

}

/* Request Object */
// used to make ajax requests 
function requestMaker(type, url, options){
	this.type = type;
	this.url = url;
	this.options = options || {};
	this.cards = [{
		title: '',
		body: '',
		btntext: '',
		btndest: ''
	}]
}

requestMaker.prototype.makeRequest = function(){
	return $.ajax({'url': this.url, 'data': this.options});
}

requestMaker.prototype.makeJSONRequest = function(){
	return $.getJSON(this.url);
}

requestMaker.prototype.buildCard = function( title, body, btntext, btndest = '#', shouldAdd = false ){
	let fragment = 
	`<div class="col outer-card">
		<div class="card card-${this.type}">
			<div class="card-body">
				<h4 class="card-title">${title}</h4>
				<p class="card-text">${body}</p>
				<button href="${btndest}" class="btn btn-info">${btntext}</button>
				<a href="#" class="text-danger">Delete Card</a>
			</div>
		</div>
	</div><!--col-->`;
	if(shouldAdd){ 
		$('.row.center').append( fragment );
	}
	return fragment; 
}

/* Deciding if I should append a card to the object... seems like overkill */

/*requestMaker.prototype.addCard = function(title, body, btntext, btndest = '#'){
	this.cards.push({
		title: title,
		body: body,
		btntext: btntext,
		btndest: btndest
	});

	this.buildCard( this.cards[ this.cards.length -1 ] );
}

requestMaker.prototype.buildCard = function( n , shouldAdd = false ){
	let building = this.cards[n];
	let fragment = 
	`<div class="col outer-card">
		<div class="card card-${this.type}">
			<div class="card-body">
				<h4 class="card-title">${building.title}</h4>
				<p class="card-text">${building.body}</p>
				<button href="${building.btndest}" class="btn btn-info">${building.btntext}</button>
				<a href="#" class="text-danger">Delete Card</a>
			</div>
		</div>
	</div><!--col-->`;

	this.cards[n].card = fragment;
}*/

