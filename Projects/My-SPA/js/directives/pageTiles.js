app.directive('pageTiles', function(){
	return {
		restrict: 'E',
		scope: {
			tile: '='
		},
		templateUrl: 'js/directives/pageTiles.html'
	}
});