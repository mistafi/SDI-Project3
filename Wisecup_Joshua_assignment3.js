// Joshua Wisecup
// SDI 1211
// Thursday, December 6, 2012 
// Assignment - Project 3
// Thanksgiving Holiday Trip Part 3

//alert("JavaScript works!");


// my variables


/*var tripCity = function (name) {
		var distance = function (miles) {
			return { "name":name,"distance":[] };
		}
};*/

var city = [
{ 
	name: "Denver",
	distance: 1852,
	tripCost: 450,
	gasPrices: [
		3.25,
		3.48,
		3.35,
		3.28
	]
},
{
	name: "Germantown",
	distance: 125,
	tripCost: 120,
	gasPrices: [
		3.15,
		3.14,
		3.18,
		3.45
	]
},
{
	name: "Georgetown",
	distance: 18,
	tripCost: 40,
	gasPrices: [
		3.10,
		3.09,
		3.12,
		3.25
	]
/*	calculateGasAvg: function () {
		console.log("The average.");
		var sum = 0;
		for (var i = 0; i < city[2].gasPrices.length; i++) {
    		sum += parseInt(city[2].gasPrices[i]); 
			var avg = sum/city[2].gasPrices.length;
			console.log("The sum is " + sum + " . The average gas price is $" + avg + " per gallon.");
		}
	}*/
} 
];

var readyForTrip = true;

var checkWeather = true;

var handleData = function (json) {
	for (var i = 0; i < json.weatherForecast.length; i++) {
		var weatherForecast = json.weatherForecast[i];
		console.log("On " + weatherForecast.day + " it will be " + weatherForecast.temperature + " degrees and " + weatherForecast.conditions + ".");
		};
	var weatherForecastday = json.weatherForecast.day;
	if (checkWeather == true) {
		console.log("We should leave on Friday.")
	};
};

var key = "gasPrices";

var bigTripPlan = function() {

	if ( readyForTrip ==  true) {
		console.log("Do we have enough money?");
		var moneyOnHand = prompt('How much money do we have for a trip?', '');
		if (moneyOnHand >= (city[0].tripCost)) {
			console.log("We have $" + moneyOnHand + ". We should go to " + city[0].name + ".")
		} else if (moneyOnHand >= (city[1].tripCost)) {
			console.log("We have $" + moneyOnHand + ". We should go to " + city[1].name + ".")
		} else if (moneyOnHand >= (city[2].tripCost)) {
			console.log("We have $" + moneyOnHand + ". We should go to " + city[2].name + ".")
		} else {
			console.log("Looks like we\'re not going on a trip this year.")
		}
	return true;
	};
	
};

var onTheRoad = bigTripPlan();

var milesPerGallon = function(totalMiles, milesPerTank, costPerTank) {
	var numberStops;
	var totalmiles;
	numberStops = Math.floor(totalMiles / milesPerTank);
	var costPerStop;
	costPerStop = numberStops * costPerTank;
		if (numberStops > 0) {
			console.log("If our drive is " + totalMiles + " miles, then we will have to stop " + numberStops + " times for gas.");
			console.log("That will cost about $" + costPerStop + " in gas for " + numberStops + " stops.");
		} else {
			console.log("We won't have to fill-up until after we get there.")
		};
	return numberStops;
};

var motivation = function(driving,message, message1, message2) {
	if (driving==true) {
		var traveling = ["I am driving."]
		console.log(message + message1);
	} else {
		console.log(message2)
	};
	return traveling;
};

var milesRemain = function(milesThisTrip, destination) {
	for (var miles = 0; miles < milesThisTrip; miles += 300) {
			var milesRemain = milesThisTrip - miles;
			console.log("We have " + milesRemain + " miles left. We have gone " + miles + " miles.");
	}
	console.log("We made it to " + destination + ".");
	return milesThisTrip;
};

var gasStops = function(destination, numberStops) {
	var stopPoints = ["St. Louis, MO", "Odessa, MO", "Kansas City, MO", "Salina, KS", "Hays, KS", "Burlington, CO"];
		console.log("On our way to " + destination + " we made " + numberStops + " stops.")
		for (var i = 0; i < stopPoints.length; i++) {
				console.log("We stopped at " + stopPoints[i] + ". ")
		}
	console.log("It was a great trip!")
	return stopPoints;
};

// my output


handleData(json);

milesPerGallon(1852,300,35);

motivation(true, "Now that you've started your trip, stay alert."," Keep up the good work!", "No worries. We\'ll be on the road soon.");

milesRemain(1852,"Denver");

gasStops("Denver", 6);


/*console.log (city);

console.log (city[0].gasPrices);

console.log (city[0]);*/





/*var averageGasPrice = function avgGas() {
		for (var i = 0; i < city[0].gasPrices.length; i++) {
    		var sum = parseInt(city[0].gasPrices[i]); 
			var avg = sum/city[0].gasPrices.length;
		}
		return avg;
}

var averageGas=averageGasPrice();

console.log (averageGas);
*/


/*var jsonstring = JSON.stringify(json);
	console.log(jsonstring);
	
var receivedjson = JSON.parse(jsonstring);
	console.log(receivedjson); */