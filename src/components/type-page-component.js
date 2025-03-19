class TypePageComponent {


    constructor(pokeService) {
        this.pokeService = pokeService;
    }

    async start(){

        const params = new URLSearchParams(window.location.search);

        const type = params.get('name');

        const pokemons = await this.pokeService.getPokemonDataByType(type);

        this.render(pokemons)
    }
    

    render(pokemons) {
        const mainContainer = document.querySelector('#main-container');
        mainContainer.innerHTML = '';

        for (const pokemon of pokemons) {
            
            const pokeContainer = document.createElement('a');
            pokeContainer.href = './detail.html?id=' + pokemon.id;

            const html = `
                <img src="${pokemon.sprites.front_default}" alt="">
                <h3>${pokemon.name}</h3>
            `
            pokeContainer.innerHTML = html;

            mainContainer.appendChild(pokeContainer);
        }
    }

}

export default TypePageComponent;