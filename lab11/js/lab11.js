/*
   lab.js - Lab 11- JavaScript Events and Forms

   Requirements: jQuery must be loaded for this script to work.

   Author: Fatima Guzman
   Date: 11.10.2024
*/


// Functions

function sortString(inputString){
  return inputString.split('').sort().join('');
}

$("#submit").click(function() {
    const userName = $("#user-name").val();
    userNameSorted = sortString(userName);
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

document.getElementById('glitchButton');
