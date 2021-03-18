import axios from "axios";

import { emptyData, Stuff, StuffType } from "./data";
import molo from "../../assets/icons/molo.png";
import flash from "../../assets/icons/flash.png";
import smoke from "../../assets/icons/smoke.png";

export const getIcon = (type: StuffType) => {
  if (type.includes("molo")) return molo;
  if (type.includes("flash")) return flash;
  else return smoke;
};

const checkMapName = (mapName: string, stuff: Stuff) => {
  const isValid =
    mapName.toLowerCase().replace(" ", "") ===
    stuff.name.split("_")[0].toLowerCase().replace(" ", "");
  if (isValid) return true;
  return false;
};

export const getData = () => {
  return axios
    .get(
      "https://docs.google.com/spreadsheets/u/1/d/1vB38X1CzpMCcaenttrq85R8DXWdPBHMj5Q1azflLhvU/export?format=csv&id=1vB38X1CzpMCcaenttrq85R8DXWdPBHMj5Q1azflLhvU&gid=0"
    )
    .then((response: { data: string }) => {
      const data = emptyData;
      const lines = response.data.split("\n");

      lines.forEach((line: string) => {
        const splitted = line.split(",");
        const stuff: Stuff = {
          name: splitted[0],
          type: splitted[0].split("_")[1] as StuffType,
          description: splitted[1],
          coordinates: {
            x: +splitted[2].split("-")[0],
            y: +splitted[2].split("-")[1],
          },
          coordinates_throw: {
            x: +splitted[3].split("-")[0],
            y: +splitted[3].split("-")[1],
          },
          video_url: splitted[4],
        };

        const currentMap = data.maps.find((map) =>
          checkMapName(map.name, stuff)
        );

        if (currentMap) {
          const mapIndex = data.maps.indexOf(currentMap);
          if (mapIndex !== -1) data.maps[mapIndex].stuffs.push(stuff);
        }
      });

      return data;
    });
};
