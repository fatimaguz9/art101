// index.js - purpose and description here
// Author: Your Name
// Date:

// change the type of jquery if it doesn't work 

let endpoint = "https://api.allorigins.win/raw?url=https://xkcd.com/info.0.json";

// Configure the AJAX request
let ajaxConfig = {
  url: endpoint, // API URL
  method: "GET", // HTTP method
  success: function(response) { // Success handler
    console.log(response); 
  }, 
  error: function(xhr, status, error) { // Error handler
    console.error(error); 
  } 
};

// Send the AJAX request
$.ajax(ajaxConfig);
