/*
   lab.js - Lab 12- Conditionals
   Author: Fatima Guzman
   Date: 11.14.2024
*/

function sortingHat(str) {
var len = str.length; 
var mod = len % 4; 
  if (mod == 0) {
    return { 
      house: "Lannister", 
      description: " HEAR ME ROAR! House Lannister is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties.", 
      image: "lannister.jpg" };
  }
  else if (mod == 1) { 
    return { house: "House Targaryen", description: " Fire and Blood. House Targaryen is one of the former Great Houses of Westeros and known for thier dragons/fiery blood.",image:"targaryen.jpg" };
  }
  else if (mod == 2) {
    return { house: "House Stark", description: " WINTER IS COMING. House Stark is the noble house ruling The North. They trace their lineage back to the First Men.", image:"stark.jpg"};
  }
  else if (mod == 3) {
    return { house: "House Baratheon", description: " Ours is the Fury. House Baratheon is one of the Great Houses of Westeros, although also one of the youngest. It is the current royal house.", image: "baratheon.jpg"};
  }
}

var myButton = $("#button");
myButton.click(function() {
  var name = $("#input").val();
  var houseData = sortingHat(name);
  newText = "<p> You are part of " + houseData.house + "." + houseData.description + "</p>";
  
  newText += "<img src='img/" + houseData.image + "' alt='House Image'>";
  console.log("newText:" + newText)
  $("#output").html(newText);
});

var outputArea = $("input");
outputArea.focus(function() {
  $("#baratheon").addClass("hidden");
  $("#lannister").addClass("hidden");
  $("#stark").addClass("hidden");
  $("#targaryen").addClass("hidden");
});