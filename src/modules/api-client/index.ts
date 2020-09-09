import { marsRessource } from "./mars-photos";
import { fetchApi } from "./utils";

export const initApiClient = (host: string) => ({
  mars: marsRessource(fetchApi(host)),
});

export const apiClient = initApiClient(
  "https://api.nasa.gov/mars-photos/api/v1/"
);
