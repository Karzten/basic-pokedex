async function getPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const data = await response.json()
    return data
}

async function init() {
    const pokemon = await getPokemon(150)
    updatePokemon(pokemon)
}

function updatePokemon(pokemon){
    window.pokemon.textContent = pokemon.name
    window.image.setAttribute('src', pokemon.sprites.front_default)
}

window.search.addEventListener('change', async () => {
    const pokemon = await getPokemon(window.search.value)
    updatePokemon(pokemon)
})