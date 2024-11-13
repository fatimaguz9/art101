/*
   lab.js - Lab 11- JavaScript Events and Forms

   Requirements: jQuery must be loaded for this script to work.

   Author: Fatima Guzman
   Date: 11.10.2024
*/

function sortingHat(str) {
var len = str.length; 
var mod = len % 4; 
  if (mod == 0) {
    return { house: "Lannister", description: " HEAR ME ROAR! House Lannister is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties." };
  }
  else if (mod == 1) { 
    return { house: "House Targaryen", description: " Fire and Blood. House Targaryen is one of the former Great Houses of Westeros and known for thier dragons/fiery blood." };
  }
  else if (mod == 2) {
    return { house: "House Stark", description: " House Stark is the noble house ruling The North. They trace their lineage back to the First Men." };
  }
  else if (mod == 3) {
    return { house: "House Baratheon", description: " Ours is the Fury. House Baratheon is one of the Great Houses of Westeros, although also one of the youngest. It is the current royal house." };
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p> You are part of  " + house.house + "." + house.description + "</p";
  document.getElementById("output").innerHTML = newText;
})
