/*
   lab.js - Lab 13- Loops
   Author: Fatima Guzman
   Date: 11.18.2024
*/


$(document).ready(function() {
  function fizzBuzz() {
    let oneLongString = '';
    for (let i = 1; i <= 200; i++) {
      if (i % 3 == 0) {
        console.log("fizz");
        oneLongString += "Fizz\n"; 
      } else if (i % 5 == 0) {
        console.log("buzz");
        oneLongString += "Buzz\n"; 
     } else if (i % 7 == 0) { 
       console.log("boom");
       oneLongString += "Boom\n"; 
     } else {     
       console.log(i);
       oneLongString += i + "\n"; 
     }
   }

   $("#output").append("<pre><p>" + oneLongString + "</p></pre>"); 
}

document.getElementById("submit").addEventListener("click", fizzBuzz);
})