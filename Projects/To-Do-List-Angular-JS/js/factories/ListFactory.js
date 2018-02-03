/* Factory ListFactory */

angular.module('krApp')
.factory('ListFactory', function ListFactory($q, $http, $location){
	var exports = {};
	exports.items = [];

	exports.goToItem = function(id){
		if(angular.isNumber(id)){

			console.log('list/item/' + id)
			$location.path('list/item/' + id)
		}
	}

	exports.deleteItem = function(id, index){
		this.items.splice(index, 1);
	}

	exports.getItems = function(){
		if(items){
			// return promise
			return $q.when(items);
		}
		return $http.get('json/items.json')
		.success(function(data){
			return items = data;
		})
		.error(function(data){
			console.log('Error! ', data);
			return items;
		});
	};

	/*exports.getItems = function(){
		var deferred = $q.defer();
		return $http.get('json/items.json')
		.success(function(data){
			exports.items = data;
			deferred.resolve(data);
		})
		.error(function(data){
			console.log('Error! ', data);
			deferred.reject(data);
		});

		return deferred.promise;
	};*/

	return exports;
});