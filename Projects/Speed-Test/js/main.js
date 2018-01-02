import * as TESTFACTORY from './test.js';
import * as YOURCODE from './your-code.js';

$(document).ready(function(){

	$('button').click(function(){
		let testRun = ($(this).parent().attr('id') === 1) 
			? new SpeedTest(testThisCode, paramsFor1) 
			: new SpeedTest(testOtherCode, paramsFor2);

		console.log(testRun);
		switch($(this).data('type')){
			case "quick":
			default:
				testRun.runQuick();
				break;
			case "avg":
				testRun.runTotalTest();
				break;
			case "detail":
				testRun.runAvgTest();
				break;
		}

		$(this).nextUntil('.test-results').text('Check the console for the results!');
	});

});