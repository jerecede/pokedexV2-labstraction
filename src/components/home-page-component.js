import PokeCardComponent from "./poke-card-component.js";

class HomePageComponent {

    constructor(pokeService, storageService) {
        this.pokeService = pokeService;
        this.storageService = storageService;
    }

    async start(){
        const nextBtn = document.getElementById('next-btn');
        nextBtn.addEventListener('click', () => this.nextPressed())

        const prevBtn = document.getElementById('prev-btn');
        prevBtn.addEventListener('click', () => this.previousPressed())

        this.pokemons = await this.pokeService.getPokemonData();
        this.render(this.pokemons)
    }
    

    render(pokemons) {
        const mainContainer = document.querySelector('#main-container');
        mainContainer.innerHTML = '';

        for (let i = 0; i < pokemons.length; i++) {

            const pokemon = pokemons[i]

            const cardComponent = new PokeCardComponent(pokemon, this.storageService);

            const card = cardComponent.render();

            mainContainer.appendChild(card);
        }
    }

    async nextPressed(){
        this.pokeService.nextPage();
        this.pokemons = await this.pokeService.getPokemonData();
        this.render(this.pokemons)
    }

    async previousPressed(){
        this.pokeService.previousPage();
        this.pokemons = await this.pokeService.getPokemonData();
        this.render(this.pokemons)
    }

    savePokemon(event, index){
        event.preventDefault();
        const selectedPokemon = this.pokemons[index]
        this.storageService.save(selectedPokemon);
    }

}

export default HomePageComponent;