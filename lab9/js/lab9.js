/* 
lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
 Requirements: jQuerry must be loaded for this script to work.
Author: Fatima Guzman
Date: 11.1.2024
*/

//add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button"); 

//add a click listener to the challenge button
$("button-challenge").click(function(){
  $("#challenge").toggleClass("special");
});

// Functions

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
