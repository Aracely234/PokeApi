//se traen los atributos del html a una constante para utilizarlos
const input = document.querySelector('input');
const button = document.querySelector('button');
const pokemonContainer = document.querySelector('.card');

button.addEventListener('click', (e)=>{
    e.preventDefault();
    traerPokemon(input.value);
})

function traerPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((res) => res.json())
    .then((data)=> {
        crearPokemon(data);
        console.log(data);
    });
    
}


function crearPokemon(pokemon){
const img = document.getElementById('imagenpok');
img.src=pokemon.sprites.front_default;

const nombre= document.getElementById('nombre');
nombre.textContent=pokemon.name;

const experiencia= document.getElementById('exp');
experiencia.textContent=pokemon.base_experience;

const tipo= document.getElementById('tipo');
tipo.textContent="Type:"+pokemon.types[0].type.name;

const defensa = document.getElementById('defensa');
defensa.textContent= pokemon.stats[2].base_stat;

const ataque = document.getElementById('ataque');
ataque.textContent= pokemon.stats[1].base_stat;

const puntosvida = document.getElementById('hp');
puntosvida.textContent= pokemon.stats[0].base_stat;

const card = document.getElementsByClassName('card');
card.appendChild(img);
card.appendChild(nombre);
card.appendChild(experiencia);
card.appendChild(tipo);
card.appendChild(defensa);
card.appendChild(ataque);
card.appendChild(puntosvida);

pokemonContainer.appendChild(card)
}
