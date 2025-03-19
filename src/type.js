import PokeService from "./services/poke-service";
import TypePageComponent from "./components/type-page-component";

const pokeS = new PokeService();

const typePageC = new TypePageComponent(pokeS);

typePageC.start()