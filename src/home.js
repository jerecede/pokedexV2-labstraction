import PokeService from "./services/poke-service";
import HomePageComponent from "./components/home-page-component";

const pokeS = new PokeService(100);

const homePageC = new HomePageComponent(pokeS);

homePageC.start()