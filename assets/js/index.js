const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const maxRecords = 151
const limit = 10;
let offset = 0;

function loadPokemonItems(offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHTML = pokemons.map((pokemon) => `
            <li class="${pokemon.type} p-6 m-2 w-4/5 h-full rounded-3xl text-slate-50 text-left font-bold flex flex-col">
                <span class="my-px text-right text-black opacity-30">#0${pokemon.id}</span>
                <span class="text-lg mb-2">${pokemon.name}</span>
                <div class="flex items-center justify-between gap-4">
                    <ol class="flex flex-col gap-2">
                        ${pokemon.types.map((type) => `<li class="${type} brightness-110 p-2 text-center rounded-xl">${type}</li>`).join('')}
                    </ol>
                    <img class="w-24 lg:w-20" src="${pokemon.photo}"
                    alt="${pokemon.name}">
                </div>
            </li>
        `).join('')
        pokemonList.innerHTML += newHTML
    });
}

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordNextPage = offset + limit

    if(qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItems(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItems(offset, limit);
    }
});