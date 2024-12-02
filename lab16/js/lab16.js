// index.js - purpose and description here
// Author: Your Name
// Date:

// change the type of jquery if it doesn't work 

$.ajax({
  
  url: "https://xkcd.com/info.0.json",
  data: { 
    
        },
  // Whether this is a POST or GET request
  type: "GET",
  dataType : "json",
  success: function(data) {
      console.log(data);
  },

  error: function (jqXHR, textStatus, errorThrown) { 
      console.log("Error:", textStatus, errorThrown);
  }
})
