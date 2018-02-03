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
			name: 'LuckyVitamin',
			link: 'http://class.ps/gL2CR',
			linkName: 'Order Some Protein',
			uvp: `Healthier products at lower prices`,
			desc: `Get the protein bars, snacks and organic beauty brands you love in pretty much any quantity without shrinking your wallet.`,
			img: ''
		}, 
		{
			name: 'Fitbit',
			link: 'http://class.ps/gL2CR',
			linkName: 'Get a Tracker',
			uvp: `Healthier products at lower prices`,
			desc: `Get the protein bars, snacks and organic beauty brands you love in pretty much any quantity without shrinking your wallet.`,
			img: ''
		}, 
		{
			name: 'Athleta',
			link: 'http://class.ps/gL2CR',
			linkName: 'Dress Like You Workout',
			uvp: `Healthier products at lower prices`,
			desc: `Get the protein bars, snacks and organic beauty brands you love in pretty much any quantity without shrinking your wallet.`,
			img: ''
		}]
	},
	{
		name: 'Tech',
		order: 1,
		contents: [
		{
			name: 'BlueHost',
			link: 'http://class.ps/gL2CR',
			linkName: 'Start Hosting',
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
			name: 'Sublime'
		}]
	},
	{
		name: 'Life',
		order: 2,
		contents: [
		{
			name: 'Instacart',
			link: 'http://class.ps/gL2CR',
			linkName: 'Get Groceries',
			uvp: `Groceries at your door -- from your store -- instantly`,
			desc: `Need a place to sweat? People to do it with? Paying less than a million $$$ on repeat each month?`,
			img: ''
		}, 
		{
			name: 'Postmates'
		}, 
		{
			name: 'Audible'
		}, 
		{
			name: 'FlyWheel'
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