// index.js - Lab 7 Functions
// Author: Fatima Guzman
// Date: 10.28.24


console.log("Main function started."); 

// Functions

function sortUserName() {
  var userName =  window.prompt("Hi. What is your name?");
  console.log("userName =", userName);
  //string to array
  var nameArray = userName.split('');
  console.log("nameArray=", nameArray);
  var nameArraySort = nameArray.sort();
  var nameSorted =nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//output
document.writeln(sortUserName(), "</br>");


