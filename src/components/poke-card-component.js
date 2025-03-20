class PokeCardComponent {
    constructor(pokemon, storageService) {
        this.pokemon = pokemon;
        this.storageService = storageService;
    }

    render(){
        const pokeContainer = document.createElement('a');
        pokeContainer.href = './detail.html?id=' + this.pokemon.id;

        const html = `
                <img src="${this.pokemon.image}" alt="">
                <h3>${this.pokemon.name}</h3>
            `
        pokeContainer.innerHTML = html;

        const saveBtn = document.createElement('button');

        saveBtn.addEventListener('click', (event) => this.savePokemon(event))

        const node = document.createTextNode('salva');

        saveBtn.appendChild(node);

        pokeContainer.appendChild(saveBtn);

        return pokeContainer;
    }

    savePokemon(event, storageService){
        event.preventDefault();
        this.storageService.save(this.pokemon);
    }

}

export default PokeCardComponent;