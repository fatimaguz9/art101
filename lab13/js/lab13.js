/*
   lab.js - Lab 13- Loops
   Author: Fatima Guzman
   Date: 11.18.2024
*/

// Constants

// Functions
function fizzBuzz() {
  let output = '';
for (i = 1; i <= 200; i++) {
  let str = '';
  if (i % 3 == 0) str += 'Fizz';
   else if (i % 5 == 0) str += 'Buzz';
   else if (i % 7 == 0) str += 'Boom';

   output += '${i} ${str}<br>';
}
$("#output").html(output);
}

fizzBuzz();