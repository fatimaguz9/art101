/* 
lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
 Requirements:
Author: Fatima Guzman
Date: 11.7.2024
*/

// Constants

// Functions

function generateRandomText() {
  const text = "Hello welcome to the site. Here is a button :)";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#button").click(function(){
  $("#results").toggleClass("special");
});

const newText = generateRandomText();

$("#output").append('<div class="Hello welcome to the site. Here is a button :)"><p>' + newText + '</p></div>');

document.getElementById('myButton').addEventListener('click', handleClick);
