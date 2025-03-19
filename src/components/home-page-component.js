class HomePageComponent {


    constructor(pokeService) {
        this.pokeService = pokeService;
    }

    async start(){
        const nextBtn = document.getElementById('next-btn');
        nextBtn.addEventListener('click', () => this.nextPressed())

        const prevBtn = document.getElementById('prev-btn');
        prevBtn.addEventListener('click', () => this.previousPressed())

        const pokemons = await this.pokeService.getPokemonData();
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

    async nextPressed(){
        this.pokeService.nextPage();
        const pokemons = await this.pokeService.getPokemonData();
        this.render(pokemons)
    }

    async previousPressed(){
        this.pokeService.previousPage();
        const pokemons = await this.pokeService.getPokemonData();
        this.render(pokemons)
    }

}

export default HomePageComponent;