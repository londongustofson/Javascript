// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
//console log the data
console.log(data); 

//looping through the data//
data.forEach(function(UFOreport) { 
    console.log(UFOreport);
    });

//appending one table for each report object//
data.forEach(function(UFOreport) {
        console.log(UFOreport);
        var row = tbody.append("tr");
         });

//console logging each value//
data.forEach(function(UFOReport) {
        console.log(UFOReport);
        var row = tbody.append("tr");
Object.entries(UFOReport).forEach(function([key, value]) {
        });
        });
//Appending one cell per report//
 data.forEach(function(UFOReport) {
console.log(UFOReport);
var row = tbody.append("tr");

Object.entries(UFOReport).forEach(function([key, value]) {
    console.log(key, value);

    var cell = tbody.append("td");
});
});

//Updating each cells text with the values//
data.forEach(function(UFOReport) {
    console.log(UFOReport);
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(function([key, value]) {
    console.log(key, value);

    var cell = tbody.append("td");
    cell.text(value);
   });
   });


