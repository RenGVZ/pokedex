const pokedex = document.getElementById('pokedex');
console.log(pokedex);

const fetchPokemon = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon?/limit=150`;
  const res = await fetch(url);
  const data = await res.json();
  const pokemon = data.results.map((result, index)
  => ({
      name: data.name,
      id = index + 1,
  })
  )
};

const displayPokemon = (pokemon) => {
  const pokemonHtmlString = pokemon.map(pokeman => `
  <li class="card">
    <img class="card-image" src="${pokeman.image}" />
    <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
    <p class="card-subtitle">Type: ${pokeman.type}</p>
  </li>
  `
    )
    .join('');
  pokedex.innerHTML = pokemonHtmlString;
}
fetchPokemon();