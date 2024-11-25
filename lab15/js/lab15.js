/*
   lab.js - Lab 15- AJAX
   Author: Fatima Guzman
   Date: 11.24.2024
*/
document.getElementById('fetchDataBtn').addEventListener('click', function() {
$.ajax({
  method: "GET", 
  url: "https://pokeapi.co/api/v2/evolution-chain/7",
  data: {
    id:7
  }, 
  success: function (data) {
    console.log(data);  
  },
  error: function (jqXHR, textStatus, errorThrown) {
    console.error("AJAX Error:", textStatus, errorThrown); 
     }
  });
});
