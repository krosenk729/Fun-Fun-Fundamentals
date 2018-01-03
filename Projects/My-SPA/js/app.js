(function(){
	var app = angular.module('myApp', []);

	app.controller('NavCtrl', ['$scope', function($scope){
		$scope.webContents = [
		{
			name: 'Fitness',
			order: 0,
			contents: [
			{
				name: 'ClassPass',
				link: 'http://class.ps/gL2CR',
				linkName: 'Become a ClassPasser',
				uvp: `Workout somewhere new without paying for memberships`,
				desc: `Need a place to sweat? People to do it with? Paying less than a million $$$ on repeat each month?`,
				img: ''
			}, 
			{
				name: 'LuckyVitamin'
			}, 
			{
				name: 'Fitbit'
			}, 
			{
				name: 'Athleta'
			}]
		},
		{
			name: 'Tech',
			order: 1,
			contents: [
			{
				name: 'BlueHost',
				link: 'http://class.ps/gL2CR',
				linkName: 'Become a ClassPasser',
				uvp: `Workout somewhere new without paying for memberships`,
				desc: `Need a place to sweat? People to do it with? Paying less than a million $$$ on repeat each month?`,
				img: ''
			}, 
			{
				name: 'Code School'
			}, 
			{
				name: 'Amazon'
			}, 
			{
				name: 'Athleta'
			}]
		}];


		$scope.curNav = 0;
		$scope.isSet = function( check ){
			return $scope.curNav === check;
		};
		$scope.changeTo = function( n ){
			$scope.curNav = n;
		};

	}]);

})();