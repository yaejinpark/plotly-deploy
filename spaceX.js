// Set variable to spaceX url
const url = "https://api.spacexdata.com/v2/launchpads";

// .then() method ensures that the data is received before executing the arrow function
//d3.json(url).then(receivedData => console.log(receivedData));

// Print the first data's full name
//d3.json(url).then(receivedData => console.log(receivedData[0].full_name))

// Use map() to print only the latitude and longitude coordinates of each SpaceX launch station.
//d3.json(url).then(receivedData => receivedData.map(dataRow => console.log("Longitude: " + String(dataRow.location.longitude) + "\nLatitude" + String(dataRow.location.latitude))))

// Get data from provided samples.json instead of the url
// Get only the wfreq from the data
d3.json("samples.json").then(function(data) {
	wfreq = data.metadata.map(person => person.wfreq)
	console.log(wfreq)
});

// Get only the wfreq from the data and sort them in descending order
d3.json("samples.json").then(function(data) {
	wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
	console.log(wfreq)
});

// Get only the wfreq from the data, sort them in desc order and filter null
d3.json("samples.json").then(function(data) {
	wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
	filteredWfreq = wfreq.filter(element => element != null);
	console.log(filteredWfreq);
});

/* 
The id key identifies the ID number.

The otu_ids property is an array of the ID numbers of all the bacteria found in this person's navel. 
OTU stands for Operational Taxonomic Unit, and here it means species or bacterial type. 
In this instance, there were 80 bacterial types with distinct ID numbers.

The sample_values array contains the corresponding species name for each bacterial ID number. 
Some bacterial species have different ID numbers, but are clumped together under the same otu_label.
*/

// display the metadata of any individual from the dataset
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});