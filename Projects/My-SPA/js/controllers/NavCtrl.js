app.controller('NavCtrl', 
	['$scope', function($scope){
		this.curNav = webContents[0].order;
		this.isSet = function( check ){
			return this.curNav === check;
		};
		this.changeTo = function( n ){
			this.curNav = n;
		};

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
			}
			, {name: 'LuckyVitamin'}, {name: 'Fitbit'}, {name: 'Athleta'}
			]
		},
		{
			name: 'Techy',
			order: 1,
			contents: [{name: 'CodeSchool'}, {name: 'BlueHost'}, {name: 'Amazon'}, {name: ''}]
		}
		];

	}]);