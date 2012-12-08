// Joshua Wisecup
// SDI 1211
// Thursday, December 6, 2012 
// Assignment - Project 3
// Thanksgiving Holiday Trip Part 3

//alert("JavaScript works!");


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