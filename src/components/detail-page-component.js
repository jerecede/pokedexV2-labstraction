class DetailPageComponent {


    constructor(pokeService) {
        this.pokeService = pokeService;
    }

    async start(){

        const params = new URLSearchParams(window.location.search);

        const id = params.get('id');

        const pokemon = await this.pokeService.getPokemonByID(id);

        this.render(pokemon)
    }
    

    render(pokemon) {
        document.getElementById('pokemon-container').innerHTML = `<h1>${pokemon.name}</h1>`
    }

}

export default DetailPageComponent;