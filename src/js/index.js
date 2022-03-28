const listSelectionPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.card-pokemon')

listSelectionPokemon.forEach(pokemon => {
  pokemon.addEventListener('click', () => {
    const cardPokemonOpen = document.querySelector('.open')
    cardPokemonOpen.classList.remove('open')

    const idPokemonSelected = pokemon.attributes.id.value

    const idOfCardPokemonForOpen = 'card-' + idPokemonSelected

    const cardPokemonForOpen = document.getElementById(idOfCardPokemonForOpen)
    cardPokemonForOpen.classList.add('open')

    const pokemonActiveInListing = document.querySelector('.active')
    pokemonActiveInListing.classList.remove('active')

    const pokemonSelectedInListing = document.getElementById(idPokemonSelected)
    pokemonSelectedInListing.classList.add('active')
  })
})
