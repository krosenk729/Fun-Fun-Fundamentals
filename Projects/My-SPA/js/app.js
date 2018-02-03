var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/landing',{
		templateUrl: 'views/landingFooter.html'
	})
	// .when('/',{
	// 	templateUrl: ''
	// })
	// .otherwise({
	// 	redirectTo: '/'
	// })
});

