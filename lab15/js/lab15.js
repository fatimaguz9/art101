/*
   lab.js - Lab 15- AJAX
   Author: Fatima Guzman
   Date: 11.25.2024
*/
//API info
document.getElementById('fetchDataBtn').addEventListener('click', function() {
$.ajax({
  method: "GET", 
  url: "https://pokeapi.co/api/v2/evolution-chain/7",
  data: {
    id:7
  }, 
  success: function (data) {
    console.log(data);
    var evChain = data.chain;
    var pokemonNames = [];
    
    // Rattata stage of evolution chain
    while (evChain) {
      console.log(evChain.species.name);
      pokemonNames.push(evChain.species.name); 
      evChain = evChain.evolves_to[0];
    }
     document.getElementById("output").textContent = "Evolution Chain: " + pokemonNames.join(", ") + "\n";
  },
//error if it doesn't work
  error: function (jqXHR, textStatus, errorThrown) {
    console.error("AJAX Error:", textStatus, errorThrown); 
     }
  });
});
document.getElementById('fetchDataBtn').addEventListener('click', function() {
});