/*
   lab.js - Lab 13- Loops
   Author: Fatima Guzman
   Date: 11.18.2024
*/


$(document).ready(function() {
  function fizzBuzz() {
    let oneLongString = '';
    for (let i = 1; i <= 200; i++) {
      if (i % 105 == 0) {
        console.log("fizzbuzzboom");
        oneLongString += "fizzbuzzboom\n"; 
      } 
      if (i % 174 == 0) {
        console.log("fizzboombuzz");
        oneLongString += "\n"; 
     } 
     if (i % 120 == 0) { 
       console.log("fizzbuzzboom");
       oneLongString += "fizzbuzzboom\n"; 
     } 
     else if (i % 56 == 0) {
      console.log("boombuzz");
      oneLongString += "boombuzz\n"; 
    } else if (i % 40 == 0) {
      console.log("buzzboom");
      oneLongString += "buzzboom\n"; 
   } else if (i % 35 == 0) { 
     console.log("boombuzz");
     oneLongString += "Boombuzz\n"; 
   }
   if (i % 21 == 0) {
    console.log("fizzboom");
    oneLongString += "fizzboom\n"; 
  } else if (i % 15 == 0) {
    console.log("fizzbuzz");
    oneLongString += "fizzbuzz\n"; 
  } else if (i % 7 == 0) {
    console.log("boom");
    oneLongString += "boom\n"; 
 } else if (i % 5 == 0) { 
   console.log("buzz");
   oneLongString += "buzz\n"; 
 }
 if (i % 3 == 0) {
  console.log("fizz");
  oneLongString += "fizz\n"; 
} else {     
 console.log(i);
 oneLongString += i + "\n"; 
}
   }

   $("#output").append("<pre><p>" + oneLongString + "</p></pre>"); 
}

document.getElementById("submit").addEventListener("click", fizzBuzz);
})