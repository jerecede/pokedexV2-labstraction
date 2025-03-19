import PokeService from "./services/poke-service";
import HomePageComponent from "./components/home-page-component";
import StorageService from "./services/storage-service";

const pokeS = new PokeService(100);

const storageS = new StorageService()

const homePageC = new HomePageComponent(pokeS, storageS);

homePageC.start()