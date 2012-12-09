// Joshua Wisecup
// SDI 1211
// Thursday, December 6, 2012 
// Assignment - Project 3
// Thanksgiving Holiday Trip Part 3

//alert("JavaScript works!");

var tripCity = function (name) {
		var distance = function (miles) {
			return { "name":name,"distance":[] };
		}
};

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
} 
];

var key = "name";

console.log (city);
console.log (city[0]);


var averageGasPrice = function avgGas() {
		for (var i = 0; i < city[0].gasPrices.length; i++) {
    		var sum = parseInt(city[0].gasPrices[i]); 
			var avg = sum/city[0].gasPrices.length;
		}
		return avg;
}

var averageGas=averageGasPrice();

console.log (averageGas);



var handleData = function (json) {
	for (var i = 0; i < json.weatherForecast.length; i++) {
		var weatherForecast = json.weatherForecast[i];
		console.log("On " + weatherForecast.day + " it will be " + weatherForecast.temperature + " degrees and " + weatherForecast.conditions + ".");
		};
};

handleData(json);







/*var jsonstring = JSON.stringify(json);
	console.log(jsonstring);
	
var receivedjson = JSON.parse(jsonstring);
	console.log(receivedjson); */