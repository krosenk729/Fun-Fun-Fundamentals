$(document).ready(function(){
	// On load, retrieve storage 
	// These functions get items from storage
	// Save what was stored to the object (overwrite if there was anything there somehow)
	// And show them on the screen
	currentStore.retrieveLocal();
	currentStore.retrieveSession();
	currentStore.retrieveCookies();
	currentStore.retrieveIndexed();

	$('#store-form').on('submit', function(event){
		event.preventDefault();
		let newName = $('#new-name').val();
		let newVal = $('#new-val').val(); 

		currentStore.storeToLocal(newName, newVal);
		currentStore.storeToSession(newName, newVal);
		currentStore.storeCookies(newName, newVal);
		currentStore.storeIndexed(newName, newVal);
		addToScreen({[newName]: newVal}, '.store-items');
		
		$('#new-name, #new-val').val('');

	});

});

const myStorageName = 'mySavedStorageName';
let currentStore = {
	localStore: {},
	sessStore: {},
	cookieStore: {},
	indexedStore: {},
	storeToLocal: function(newName, newVal){
		this.localStore[newName] = newVal;

		localStorage.setItem(myStorageName, JSON.stringify( this.localStore ));
		return true;
	},

	storeToSession: function(newName, newVal){
		this.sessStore[newName] = newVal;

		sessionStorage.setItem(myStorageName, JSON.stringify( this.sessStore ));
		return true;
	},

	storeCookies: function(newName, newVal){
		this.cookieStore[newName] = newVal;

		let d = new Date();
		d.setDate( d.getDate() + 7 ); // cookie will expire in seven days

		document.cookie = myStorageName + '=' + JSON.stringify( this.cookieStore ) + '; expires=' + d + 'path=/';
		return true;
	},

	storeIndexed: function(newName, newVal){
		this.indexedStore[newName] = newVal;

		window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
		let request = window.indexedDB.open(myStorageName, 1);
		let db;

		request.onupgradeneeded = function(event){
			console.log('upgrade needed');
			db = request.result; 
			let objStore = db.createObjectStore(myStorageName, {keyPath: 'names'}); 
			let indx = objStore.createIndex('by_vals', 'values' , {unique: false}); 

			// for(let i in currentStore.storeIndexed){
			// 	objStore.put({i: currentStore.storeIndexed[i]});
			// }
			console.log({'names': newName, 'values': newVal});
			objStore.put({'names': newName, 'values': newVal});
		};

		request.onsuccess = function(event){
			console.log('db success');
			// db = request.result;
			db = event.target.result;
			// console.log(db);
			// console.log(event);
			let transxtion = db.transaction(myStorageName, 'readwrite');
			console.log('transaction', transxtion);
			let objStore = transxtion.objectStore(myStorageName);
			console.log(objStore);
			
			// for(let i in currentStore.storeIndexed){
			// 	objStore.put({i: currentStore.storeIndexed[i]});
			// }
			console.log({'names': newName, 'values': newVal});
			objStore.put({'names': newName, 'values': newVal});
			
		};

		request.onerror = function(err){
			console.log('There was a local storage error: ', err);
		};

		// db.close();
	},

	retrieveIndexed: function(){
		window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
		let request = window.indexedDB.open(myStorageName, 1); 
		let db;

		if(!request){ return false; }

		request.onupgradeneeded = function(event){
			console.log('upgrade needed');
			db = request.result; 
			let objStore = db.createObjectStore(myStorageName, {keyPath: 'names'}); 
			let indx = objStore.createIndex('by_vals', 'values' , {unique: false}); 

			// for(let i in currentStore.storeIndexed){
			// 	objStore.put({i: currentStore.storeIndexed[i]});
			// }
			console.log({'names': newName, 'values': newVal});
			objStore.put({'names': newName, 'values': newVal});
		};

		request.onsuccess = function(event){
			db = request.result;
			console.log(db);

			if( db.objectStoreNames.length > 0 ){

				let transact = db.transaction(myStorageName, 'readonly');
				console.log('data found');

				let objStore = transact.objectStore(myStorageName);
				let cursorRequest = store['names'].openCursor();

				cursorRequest.onsuccess = function(event){
					let c = event.target.result ;
					if(c){
						currentStore.indexedStore[c.name] = c.value;
						c.continue();
					}
				};

			} else {
				console.log('data not found');
				this.indexedStore = {};
			}
			
			db.close();
		};

		addToScreen(this.indexedStore, '#index-items');
		return this.indexedStore;
	},

	retrieveLocal: function(){
		this.localStore = JSON.parse( localStorage.getItem(myStorageName) ) || {};
		addToScreen(this.localStore, '#local-items');
		return this.localStore;
	},

	retrieveSession: function(){
		this.sessStore = JSON.parse( sessionStorage.getItem(myStorageName) ) || {};
		addToScreen(this.sessStore, '#sess-items');
		return this.sessStore;
	},

	retrieveCookies: function(){
		let c = decodeURIComponent( document.cookie ).split(';');
		this.cookieStore = c[myStorageName] || {};
		addToScreen(this.cookieStore, '#cookie-items');
		return this.cookieStore;
	}
};

function addToScreen(v, s){
	// console.log('adding to screen: ', v, s);
	for(let property in v){
		$(s).append(`<p>${property}: ${v[property]}`);
	}
	return true;
}