class StarredPageComponent {


    constructor( storageService) {

        this.storageService = storageService;
    }

    async start(){

        this.pokemons = await this.storageService.getStarredPokemonData();
        this.render(this.pokemons)
    }
    

    render(pokemons) {
        const mainContainer = document.querySelector('#main-container');
        mainContainer.innerHTML = '';

        for (let i = 0; i < pokemons.length; i++) {

            const pokemon = pokemons[i]
            
            const pokeContainer = document.createElement('a');
            pokeContainer.href = './detail.html?id=' + pokemon.id;

            const html = `
                <img src="${pokemon.image}" alt="">
                <h3>${pokemon.name}</h3>
            `
            pokeContainer.innerHTML = html;

            mainContainer.appendChild(pokeContainer);
        }
    }


}

export default StarredPageComponent;