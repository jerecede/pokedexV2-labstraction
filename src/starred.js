import StarredPageComponent from "./components/starred-page-component.js";
import StorageService from "./services/storage-service.js";

const storageS = new StorageService()

const starredPageC = new StarredPageComponent(storageS);

starredPageC.start()