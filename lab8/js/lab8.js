// index.js - Lab 8 Anon Functions and Callbacks 
// Author: Fatima
// Date: 10.31.24

// Constants

// Functions

function thisLabfunction(x) {
  return x + 5;
}

console.log("7 + 5", thisLabfunction(7));
console.log("20 + 5", thisLabfunction(25));
console.log("800 + 5", thisLabfunction(800));

array = [60, 58, 29, 92, 1, 76]
console.log("My array", array);

var result = array.map(thisLabfunction);
// should return [65, 63, 34, 97, 6, 81]
console.log("Solve function with array", result);

var result = array.map(function(x){
  return x - 21;
})
// should return [39, 37, 8, 71, -20, 55]

console.log("subtract 21 from array:", result);


// Your map results data
var mapResults = "Your map results here";

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);

