/*
 * index.js - Lab 6 Arrays and Objects
 * Author: Fatima G
 * Created: 10.24.2024
*/

// Define Variables 
// my transport object
myTransport = ["Kia Sorento", "bike", "on foot"];

// my main ride object
myMainRide = {
make : "Kia",
model : "Sorento",
color : "White",
year : 2003,
age : function() {
    return 2024 - this.year; }
}


//output
document.writeln("How I get around: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre");
