import StarredPageComponent from "./components/starred-page-component";
import StorageService from "./services/storage-service";

const storageS = new StorageService()

const starredPageC = new StarredPageComponent(storageS);

starredPageC.start()