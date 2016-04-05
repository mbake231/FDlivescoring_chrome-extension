//Return % of baseball game left
function returnPercentGameLeftBaseball(ele) {

	
	//debugger;


	if ( ($(ele).find('.live-fixture__start-date').hasClass('ng-hide')) && ($(ele).find('.live-fixture__final').hasClass('ng-hide')) )
	{
		var inning = $(ele).find('.live-fixture__mlb-innings-remaining').html();

		inning = inning.trimLeft();
		inning = inning.substr(0,1);
		parseInt(inning);
		return (1-(inning/9));
		//doesnt account for OT
	}

	if( !$(ele).find('.live-fixture__start-date').hasClass('ng-hide') )
		return "ns";

	if( !$(ele).find('.live-fixture__final').hasClass('ng-hide') )
		return "f";

}
