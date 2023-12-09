function convertPokemonToListItem(pokemon) {
    return `
        <li class="p-6 m-2 w-max h-full bg-green-500 rounded-3xl text-slate-50 text-left font-bold flex flex-col">
            <span class="my-px text-right text-black opacity-30">#001</span>
            <span class="text-lg mb-2">${pokemon.name}</span>
            <div class="flex items-center">
                <ol class="flex flex-col gap-2">
                    <li class="p-1 rounded-xl bg-neutral-100">grass</li>
                    <li class="p-1 rounded-xl bg-neutral-300">poison</li>
                </ol>
                <img class="w-full" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/35.png"
                alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')


pokeApi.getPokemons().then((pokemons) => {
    pokemonList.innerHTML += pokemons.map((pokemon) => convertPokemonToListItem(pokemon)).join('')
});