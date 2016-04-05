function getProjectedPoints(ele) {

	var EHINGER_CONSTANT = 4.2;


	var livePts = parseFloat( $(ele).find('.lineup__player-score').find('.definition__value').html());

	var initialProjection = ((salaryToInt(  $(ele).find('.lineup__player-salary').find('.definition__value').html()))*.001) * EHINGER_CONSTANT;
	var timeLeft;	//sport specific
	var segmentOfGame; //sport specific
	var sportId=getSportID(); //need to get somehow
	//Basketball
	if (sportId==1)
	{

		//timeLeft = getBasketballTimeLeft(ele);
		timeLeft = "6:00";
		segmentOfGame = 2;
		var pctLeft = returnPercentGameLeftBasketBall(segmentOfGame, timeLeft);
		return calcProjectedPoints(livePts, 
									initialProjection, 
									segmentOfGame, 
									pctLeft
								);
	}

	//Baseball
	if (sportId==2)
	{
		timeLeft = returnPercentGameLeftBaseball(ele);
		segmentOfGame = 2;

		if (timeLeft=="ns")
			return  Math.round(initialProjection); 

		else if (timeLeft=="f")
			return  livePts;
		else
			return  Math.round(calcProjectedPoints(livePts, initialProjection, segmentOfGame, timeLeft),1);
	}

}

function getSportID()
{

	var ele = $.find('.live-contest-entry-summary');

	//debugger;
	var sport = $(ele).find('.icon');

	//debugger;
	if ($(ele).find('.icon')[1] == undefined )
		var sport = $(ele).find('.icon');
	else
		var sport = $(ele).find('.icon')[1];


	sport = $(sport).attr('data-sport-icon');
	
	if (sport == "nba")
		return 1;

	else if (sport == "mlb")
		return 2;

	else
		return null;
}

function calcProjectedPoints(livePts, initialProjection, segmentOfGame, pctLeft) {

	//Get percentage of game left

	var gameLeft = pctLeft;

	var pointsToGet = initialProjection*gameLeft;

	var weightedProjetion = parseFloat(pointsToGet)+ parseFloat(livePts);
	var pacingProjection = parseFloat(getPacingProjection(livePts, gameLeft ));

	return Math.round( (weightedProjetion+pacingProjection)/2, 1);
}

function getPacingProjection (livePts, percentageLeft) {

	return parseFloat( livePts/(1-percentageLeft));
}


