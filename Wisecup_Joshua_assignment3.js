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
	};
	
};


// my output

console.log("Do we have enough money?");

bigTripPlan();

handleData(json);

console.log (city);

console.log (city[0].gasPrices);

console.log (city[0]);







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