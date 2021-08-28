// Get the top five cities with the highest 2016 increase
var topFiveCities = cityGrowths.sort((cityA,cityB) => cityA.Increase_from_2016 - cityB.Increase_from_2016).reverse();

// Get the top five cities' names
var topFiveCityNames = topFiveCities.map(city => city.City).splice(0,5);

// Get the cities' growths - growths' datatype is string, so convert to Int
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016)).splice(0,5);

// Create a bar chart with the arrays
var trace = {
	x: topFiveCityNames,
	y: topFiveCityGrowths,
	type:'bar'
};

var data = [trace];

var layout = {
  title: "Most Rapidly Growing Cities",
  xaxis: { title: "City" },
  yaxis: { title: "Population Growth, 2016-2017"}
};

Plotly.newPlot('bar-plot',data,layout);