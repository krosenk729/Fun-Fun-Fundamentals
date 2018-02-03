/* ListCtrl */
angular.module('krApp')
.controller('ListCtrl', function ListCtrl(){
	this.title = "My List";
/*.controller('ListCtrl', function ListCtrl($scope,ListFactory){
	console.log('List controller loaded');
	$scope.meta = {
		title: 'My List'
	};

	ListFactory.getItems()
	.success(function(jsonData, statusMsg){
		console.log("Success ", jsonData, statusMsg);
		$scope.data = {
			items: jsonData
		};
	});*/

});