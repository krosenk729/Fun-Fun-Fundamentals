angular.module('krApp')
.factory('ItemFactory', function($q, $http, $routeParams){
	var exports = {};

	exports.reply = function(message){
		if(message){
			// in more advanced, would store to db etc
			alert('item content '+ message);
		}
	};

	exports.getMessage = function(params){
		if(params.id){
			var deferred = $q.defer();
			$http.get('json/items/'+params.id+'.json')
			.success(function(data){
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});
		}
		return deferred.promise;
	};

	return exports;
});