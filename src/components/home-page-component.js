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
            
            const pokeContainer = document.createElement('a');
            pokeContainer.href = './detail.html?id=' + pokemon.id;

            const html = `
                <img src="${pokemon.sprites.front_default}" alt="">
                <h3>${pokemon.name}</h3>
            `
            pokeContainer.innerHTML = html;

            const saveBtn = document.createElement('button');

            saveBtn.addEventListener('click', (event) => this.savePokemon(event, i))

            const node = document.createTextNode('salva');

            saveBtn.appendChild(node);

            pokeContainer.appendChild(saveBtn);

            mainContainer.appendChild(pokeContainer);
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