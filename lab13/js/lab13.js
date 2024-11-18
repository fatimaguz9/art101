/*
   lab.js - Lab 13- Loops
   Author: Fatima Guzman
   Date: 11.18.2024
*/

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function fizzBuzzBoom(maxNums, factorObj) {
  for (var num=0; num<maxNums; num++) {
    var outputStr = "";
    for (var factor in factorObj) {
      if (num % factor ==0) {
        outputStr += factorObj[factor];
      }
    }
    if (outputStr) {
      outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr)
  }
}

  function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
  }


