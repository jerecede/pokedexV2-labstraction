class PokeService {

    static BASE_URL = 'https://pokeapi.co/api/v2/'
    static POKEMON_URL = 'pokemon/'
    static TYPE_URL = 'type/'

    constructor(limit = 20, offset = 0) {
        this.limit = limit;
        this.offset = offset;
    }


    async getPokemonData(){

        const url = PokeService.BASE_URL + 
                    PokeService.POKEMON_URL + 
                    '?limit=' + this.limit +
                    '&offset=' + this.offset;


        // return fetch(url).then(res => res.json())
        //                  .then(data => data)
        //                  .catch(err => console.log(err));

        const response =  await fetch(url);

        const data = await response.json();

        const results = data.results;

        const requests = [];

        for (const partialPokemon of results) {
            
            const pokeUrl = partialPokemon.url;

            const request = fetch(pokeUrl)
                            .then(res => res.json())
                            .then(data => {
                                const littlePokemon = {
                                    id: data.id,
                                    name: data.name,
                                    image: data.sprites.front_default
                                };
                                return littlePokemon;
                            })
                            .catch(err => console.log(err));
                            

            requests.push(request);
        }

        return Promise.all(requests);
    }

    nextPage(){
        this.offset += this.limit;
    }

    previousPage(){
        this.offset -= this.limit;
    }


    async getPokemonByID(id){

        const url = PokeService.BASE_URL + 
                    PokeService.POKEMON_URL + id;

        const response =  await fetch(url);

        const data = await response.json();
            
        return data;
    }

    async getPokemonDataByType(type){

        const url = PokeService.BASE_URL + 
                    PokeService.TYPE_URL + type;



        const response =  await fetch(url);

        const data = await response.json();

        console.log(data);

        const results = data.pokemon;

        const requests = [];

        for (const element of results) {
            
            const partialPokemon = element.pokemon;

            const pokeUrl = partialPokemon.url;

            const request = fetch(pokeUrl)
                            .then(res => res.json())
                            .then(data => {
                                const littlePokemon = {
                                    id: data.id,
                                    name: data.name,
                                    image: data.sprites.front_default
                                };
                                return littlePokemon;
                            })
                            .catch(err => console.log(err));
                            

            requests.push(request);
        }

        return Promise.all(requests);
    }



}

export default PokeService;