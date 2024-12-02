/*
   lab.js - Lab 16- JSON and APIs
   Author: Fatima Guzman
   Date: 12.2.2024
*/
// change the type of jquery if it doesn't work 

let endpoint = "https://api.allorigins.win/raw?url=https://xkcd.com/info.0.json";
let comicObj;

// Configure the AJAX request
let ajaxConfig = {
  url: endpoint, // API URL
  method: "GET", // HTTP method
  success: function(response) { // Success handler
    console.log(response);
    comicObj = response;
   $("#output").append("<h2>" + comicObj.title);
   $("#output").append("<p>Day: " + comicObj.day);
   $("#output").append("<p>Transript: " + comicObj.alt);
   $("#output").append(`<img src='${comicObj.img}' alt='${comicObj.alt}'/>`);
},
  error: function(xhr, status, error) { // Error handler
    console.error(error);
  }
};

// Send the AJAX request
$.ajax(ajaxConfig);
