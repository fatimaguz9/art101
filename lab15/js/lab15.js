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
    var evChain = data.chain;
    var pokemonNames = [];
    
    // Traverse and collect Pokémon names from each stage of the evolution chain
    while (evChain) {
      console.log(evChain.species.name);
      pokemonNames.push(evChain.species.name); 
      evChain = evChain.evolves_to[0];
    }
     document.getElementById("output").textContent = "Evolution Chain ${chainId}:" + pokemonNames.join(", ") + "\n";
  },

  error: function (jqXHR, textStatus, errorThrown) {
    console.error("AJAX Error:", textStatus, errorThrown); 
     }
  });
});
document.getElementById('fetchDataBtn').addEventListener('click', function() {
  fetchPokemonEvolutionChain(7); // Fetch evolution chain for ID 7
  fetchPokemonEvolutionChain(8); // Fetch evolution chain for ID 8
});