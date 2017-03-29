function Pokemon(nombre,color,puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  this.nivelDeAmistad = 0;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;

  this.saludar = function(){
    "Hola, me llamo " + this.nombre;
  };

  this.pelear = function(pokemonObjeto){
    pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
  }

  this.beber = function(tipoAlcohol){
    if(tipoAlcohol == "chelas"){
      this.nivelDeAmistad += 80
    }
    else if (tipoAlcohol == "vodka") {
      this.nivelDeAmistad += 10
    }
  };

  function creaPokemon(){
      
    var nombre =document.getElementById("nombrePokemon");
    var color= document.getElementById("colorPokemon");
    var ataque= document.getElementById("poderAtaque");
    
    var pokemon = new Pokemon(nombre.value,color.value,parseInt(ataque.value));

 pokemons.push(pokemon); 
    mostrarPokemon()
    
}
 var listaPokemon=document.getElementById("listaPokemons");
 var opciones= document.createElement("select");
 var elemento=document.createElement("option");
 
function mostrarPokemon(pokemon){
         pokemons.forEach(function(pokemon){
         elemento.innerText=pokemon.nombre +" "+ pokemon.color +" "+ pokemon.ataque;
         listaPokemon.appendChild(elemento);
    })
}