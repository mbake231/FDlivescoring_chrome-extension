//Gets actual clock and returns timeleft of that period via str
function getBasketballClock (ele){

	
	if ( !$(ele).find('.live-fixture__start-date').hasClass('ng-hide') )
		return null;

	else if ( !$(ele).find('.live-fixture__time-status').hasClass('ng-hide') )
		return null;

	else if ( !$(ele).find('.live-fixture__final').hasClass('ng-hide') )
		return "6:00";

}

//Grabs first char of score string to check period
function getBasketballPeriod (ele){

	
	if ( !$(ele).find('.live-fixture__start-date').hasClass('ng-hide') )
		return null;

	else if ( !$(ele).find('.live-fixture__time-status').hasClass('ng-hide') )
	{
		//
		var str = $(ele).find('.live-fixture__time-status').innerHTML();
		str = str.substring(0,1);
		return parseInt(str);

	}
	else if ( !$(ele).find('.live-fixture__final').hasClass('ng-hide') )
		return null;

}

function returnPercentGameLeftBasketBall(segmentOfGame, timeLeft) {

	var total = (segmentOfGame-1)*12;

	if (timeLeft.length == 5)
		return total += parseInt(timeLeft.substring(0,2));

	else if (timeLeft.length == 4)
		return total += parseInt(timeLeft.substring(0,1));

	else
		return 1-(total/48);
}
