// index.js - purpose and description here
// Author: Your Name
// Date:

// change the type of jquery if it doesn't work 

$.ajax({
  
  url: "https://imgs.xkcd.com/comics/advent_calendar_advent_calendar.png",
  data: { 
          // here is where any data required by the api 
          //   goes (check the api docs)
          id: 123,
          api_key: "blahblahblah",
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
