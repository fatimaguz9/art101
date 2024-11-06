/* 
lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
 Requirements:
Author: Fatima Guzman
Date: 11.7.2024
*/

// Constants

// Functions

function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
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

function handleClick() {
const newText = generateRandomText();
document.getElementById('output').innerHTML = '<div class= "text"><p>' + newText + '</p></div>';
}

$("#output").append('<div class="text"><p>' + newText + '</p></div>');


