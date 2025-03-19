import PokeService from "./services/poke-service";
import DetailPageComponent from "./components/detail-page-component";

const pokeS = new PokeService();

const detailPageC = new DetailPageComponent(pokeS);

detailPageC.start()