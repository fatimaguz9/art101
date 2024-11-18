/*
   lab.js - Lab 13- Loops
   Author: Fatima Guzman
   Date: 11.18.2024
*/

// Constants

// Functions
function fizzBuzz() {
  let output = '';
  for (let i = 1; i <= 200; i++) {
    let str = '';
    if (i % 3 == 0) str += 'Fizz';
    if (i % 5 == 0) str += 'Buzz';
    if (i % 7 == 0) str += 'Boom';

    // Add number or some string
    oneLongString += i + ((str !== '') ? " " + str : "") + "<br>";
 }
}
