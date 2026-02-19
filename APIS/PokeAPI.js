

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

async function fetchPokemon(id) {
    try {
        const response = await fetch(`${API_URL}${id}`);
        if (!response.ok) throw new Error('Respuesta no válida');
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}

async function displayPokemon(id) {
    const pokemon = await fetchPokemon(id);
    if (pokemon) {
        const pokemonDiv = document.createElement('div');
        pokemonDiv.innerHTML = `
            <h2>${pokemon.name} (ID: ${pokemon.id})</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p>Types: ${pokemon.types.map(t => t.type.name).join(', ')}</p>
        `;
        document.body.appendChild(pokemonDiv);
    }
}

async function loadPokemons() {
    for (let i = 1; i <= 4; i++) {
        await displayPokemon(i);
    }
}

async function loadMorePokemons() {
    const currentCount = document.querySelectorAll('div').length;
    for (let i = currentCount + 1; i <= currentCount + 4; i++) {
        await displayPokemon(i);
    }
}

async function searchPokemon(name) {
    try {
        const response = await fetch(`${API_URL}${name.toLowerCase()}`);
        if (!response.ok) throw new Error('Pokémon no encontrado');
        const pokemon = await response.json();
        displayPokemon(pokemon.id);
    } catch (error) {
        console.error('Search error:', error);
        alert('Pokémon no encontrado');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadPokemons();
    const searchInput = document.createElement('input');
    searchInput.placeholder = 'Buscar Pokémon por nombre';
    const searchButton = document.createElement('button');
    searchButton.textContent = 'Buscar';
   searchButton.addEventListener('click', () => {
       const name = searchInput.value.trim();
       if (name) searchPokemon(name);
   });

   document.body.appendChild(searchInput);
   document.body.appendChild(searchButton);
});

