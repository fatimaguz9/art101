/*
   lab.js - Lab 11- JavaScript Events and Forms

   Requirements: jQuery must be loaded for this script to work.

   Author: Fatima Guzman
   Date: 11.7.2024
*/


// Functions

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
});

// get value of input field
const userName = $("#user-name").val();
userNameSorted = sortString(userName);
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
