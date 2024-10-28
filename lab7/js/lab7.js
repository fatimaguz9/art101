// index.js - Lab 7 Functions
// Author: Fatima Guzman
// Date: 10.28.24

// Constants

// Functions

function sortUserName() {
  var userName =  window.prompt("Hi. What is your name?");
  console.log("userName=", userName);

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted =nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

document.writeln("This is your name actually: ",
sortUserName(), "</br>");

