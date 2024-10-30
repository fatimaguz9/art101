// index.js - Lab 8 Anon Functions and Callbacks 
// Author: Fatima
// Date: 10.31.24
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

$('#output').html('Original Array: [60, 58, 29, 92, 1, 76]<br>Array With Function: [65, 63, 34, 97, 6, 81]<br>Array (-21) : [39 ,37 ,8 ,71 ,-20 ,55]');



