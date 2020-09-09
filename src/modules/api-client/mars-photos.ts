import { FetchApi } from "./utils";

const apiKey = "api_key=UTTGXxgbXU7cL66kAwvRrVdoJYRR6vtcYmmNE7Ok";

export const marsRessource = (fetchApi: ReturnType<FetchApi>) => ({
  getRoverList: () => fetchApi.get(`rovers?${apiKey}`),
  getRoverInfos: (params: { rover: string }) =>
    fetchApi.get(`rovers/${params.rover}?${apiKey}`),
  getRoverPhotos: (params: { rover: string; sol: number }) =>
    fetchApi.get(`rovers/${params.rover}/photos?sol=${params.sol}&${apiKey}`),
});
