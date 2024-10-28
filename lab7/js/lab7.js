// index.js - Lab 7 Functions
// Author: Fatima Guzman
// Date: 10.28.24

// Constants

// Functions

function sortUserName() {
  var person =  prompt("Hi. What is your name?");
  console.log("userName=", userName);

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  var shuffledArray = shuffledArray(nameArray);
  console.log("shuffledArray =", shuffledArray);
  var shuffledString = shuffledArray.join("");
  return newName;
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted =nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}
function main(){
document.writeln("This is your name actually: " + sortedName + 
  "</br></br>");
  var randomName = randomizeName(userName);
  document.writeln("This is your new  name.");
  document.writeln("<div class= 'name'>" + randomName + "</div>")

}
main();
