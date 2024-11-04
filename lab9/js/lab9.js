/* 
lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
 Requirements: jQuerry must be loaded for this script to work.
Author: Fatima Guzman
Date: 11.1.2024
*/

//add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button"); 
$("#problem").append("<button id='button-problem'>Make Special</button"); 
$("#results").append("<button id='button-results'>Make Special</button"); 

//add a click listener to the challenge button
$("button-challenge").click(function(){
  $("#challenge").toggleClass("special");
});
$("button-challenge").click(function(){
  $("#Problem").toggleClass("special");
});
$("button-challenge").click(function(){
  $("#results").toggleClass("special");
});


// Functions

function handleClick(){
  console.log("Button was clicked");
}
document.getElementById('myButton').addEventListender('click', handleClick);
    console.log('YIPPIE!');

// let's get this party started
main();
