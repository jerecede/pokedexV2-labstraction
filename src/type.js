import PokeService from "./services/poke-service";
import TypePageComponent from "./components/type-page-component";
import StorageService from "./services/storage-service"

const pokeS = new PokeService();

const storageS = new StorageService();

const typePageC = new TypePageComponent(pokeS, storageS);

typePageC.start()