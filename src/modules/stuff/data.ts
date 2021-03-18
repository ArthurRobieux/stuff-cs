import dust2 from "../../assets/maps/dust2.png";
import nuke_upper from "../../assets/maps/nuke_upper.png";
import overpass from "../../assets/maps/overpass.png";
import inferno from "../../assets/maps/inferno.png";
import train from "../../assets/maps/train.png";
import mirage from "../../assets/maps/mirage.png";

export type StuffType = "molo" | "flash" | "smoke";

export type Stuff = {
  type: StuffType;
  name: string;
  video_url: string;
  description?: string;
  coordinates: { x: number; y: number };
  coordinates_throw: { x: number; y: number };
};

export type Map = {
  name: string;
  minimap: string;
  stuffs: Stuff[];
};

export type CSData = { maps: Map[] };

export const emptyData: CSData = {
  maps: [
    {
      name: "Dust 2",
      minimap: dust2,
      stuffs: [],
    },
    {
      name: "Nuke",
      minimap: nuke_upper,
      stuffs: [],
    },
    {
      name: "Overpass",
      minimap: overpass,
      stuffs: [],
    },
    {
      name: "Inferno",
      minimap: inferno,
      stuffs: [],
    },
    {
      name: "Train",
      minimap: train,
      stuffs: [],
    },
    {
      name: "Mirage",
      minimap: mirage,
      stuffs: [],
    },
  ],
};

export const exempleData: CSData = {
  maps: [
    {
      name: "Dust 2",
      minimap: dust2,
      stuffs: [
        {
          type: "molo",
          name: "molo antirush long a double porte",
          video_url: "1fkAKero5E2J9_qh6jh9bY6NDByOSdc99",
          coordinates: { x: 27, y: 85 },
          coordinates_throw: { x: 27, y: 85 },
        },
        {
          type: "molo",
          name: "molo ct short",
          video_url: "1Xzsdg4Kd1gurPPRFSrySdtFw8NdHaCXH",
          coordinates: { x: 40, y: 50 },
          coordinates_throw: { x: 40, y: 50 },
        },

        {
          type: "smoke",
          name: "smoke pression long A",
          video_url: "18GjnYEXcxtFhnJ60Ijcfyw0yHAt7PHMH",
          coordinates: { x: 50, y: 72 },
          coordinates_throw: { x: 50, y: 72 },
        },
        {
          type: "smoke",
          name: "smoke antirush long A",
          video_url: "1pHSDwOCphrPqnt_nmGT7Z3cqsMY55I4b",
          coordinates: { x: 53, y: 68 },
          coordinates_throw: { x: 50, y: 72 },
        },

        {
          type: "flash",
          name: "flash-pop_defense-B_fond-B",
          video_url: "11GEy4pXPQbhvS_LoxvUlG1sQDE10BTCM",
          coordinates: { x: 15, y: 80 },
          coordinates_throw: { x: 50, y: 72 },
        },
        {
          type: "flash",
          name: "flash_antirush(1'48)-long-A_long_2",
          video_url: "1JcJYPsDyKqY6SqbgSPJGtxq9SV79dj33",
          coordinates: { x: 22, y: 47 },
          coordinates_throw: { x: 50, y: 72 },
        },
      ],
    },
    {
      name: "Nuke",
      minimap: nuke_upper,
      stuffs: [
        {
          type: "molo",
          name: "molo_toit-cab_toit-lobby_RJS",
          video_url: "1-MjOOhcI9JcUq1BO8oZRbWkdpC58Euyw",
          description: "Jump Throw nécessaire",
          coordinates: { x: 53, y: 52 },
          coordinates_throw: { x: 50, y: 72 },
        },
      ],
    },
  ],
};
