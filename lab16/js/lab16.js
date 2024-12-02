// index.js - purpose and description here
// Author: Your Name
// Date:

// change the type of jquery if it doesn't work 

let endpoint = "https://imgs.xkcd.com/comics/second_stage.png";

let ajaxConfrig = {
  url: endpoint,
  method: "GET", 
  dataType: "json", 
  data: {
    count: 1, 
  }, 
success: function(data) {
  $("#output").append("<h2>" + data.title);
  $("#output").append("<p>" + data.explanation);
  $("#output").append(`<img src='${data.url}' />`);
},
error: function(xhr, status, error) {
  console.error(error);
}
};
