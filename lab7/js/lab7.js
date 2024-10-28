// index.js - Lab 7 Functions
// Author: Fatima Guzman
// Date: 10.28.24

// Constants

// Functions

function lab7function() {
  var username = window.prompt("Hi. What is your name?");
  console.log("username=", username);

  var nameArray = username.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted =nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

document.writeln("This is your name actually:")
sortUsername(), ("</br>");

