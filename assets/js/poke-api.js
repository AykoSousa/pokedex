const pokeApi = {}

pokeApi.getPokemons = () => {
    const offset = 0
    const limit = 10
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => error)
}