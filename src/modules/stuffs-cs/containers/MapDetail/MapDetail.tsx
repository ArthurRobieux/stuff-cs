import React from "react";
import classnames from "classnames";

import { getIcon } from "../../utils";

import cross from "../../../../assets/icons/cross.svg";

import styles from "./styles.module.scss";
import { Map, Stuff } from "../../data";
import { StuffTypes } from "../StuffsCS/StuffsCS";

type MapDetailProps = {
  selectedMap: Map;
  selectedStuff: Stuff | null;
  setSelectedStuff: (s: Stuff | null) => void;
  selectedStuffTypes: StuffTypes;
  hoveredStuff: Stuff | null;
  setHoveredStuff: (s: Stuff | null) => void;
};

export const MapDetail = ({
  selectedMap,
  selectedStuff,
  setSelectedStuff,
  selectedStuffTypes,
  hoveredStuff,
  setHoveredStuff,
}: MapDetailProps) => {
  return (
    <div>
      <img
        src={selectedMap.minimap}
        alt="minimap"
        className={styles.minimap}
        onClick={() => setSelectedStuff(null)}
      />
      {selectedMap.stuffs
        .filter(
          (stuff) =>
            (stuff.type.includes("molo") && selectedStuffTypes.molo) ||
            (stuff.type.includes("flash") && selectedStuffTypes.flash) ||
            (stuff.type.includes("smoke") && selectedStuffTypes.smoke)
        )
        .map((stuff) => (
          <img
            src={getIcon(stuff.type)}
            alt="icon"
            className={classnames(styles.minimapPointer, {
              [styles.moloPointer]: stuff.type.includes("molo"),
              [styles.flashPointer]: stuff.type.includes("flash"),
              [styles.smokePointer]: stuff.type.includes("smoke"),
              [styles.activePointer]:
                selectedStuff && stuff.name === selectedStuff.name,
            })}
            style={{
              top: `${stuff.coordinates.x}%`,
              left: `${stuff.coordinates.y}%`,
            }}
            onClick={() => {
              setSelectedStuff(null);
              setTimeout(() => {
                setSelectedStuff(stuff);
              }, 1);
            }}
            key={stuff.name}
            onMouseOver={() => setHoveredStuff(stuff)}
            onMouseLeave={() => setHoveredStuff(null)}
          />
        ))}

      {hoveredStuff && (
        <img
          src={cross}
          alt="cross"
          className={styles.cross}
          style={{
            top: `${hoveredStuff.coordinates_throw.x + 1}%`,
            left: `${hoveredStuff.coordinates_throw.y + 1}%`,
          }}
          key={`hover_${hoveredStuff.name}`}
        />
      )}

      {selectedStuff && (
        <img
          src={cross}
          alt="cross"
          className={classnames(styles.cross, styles.selectedCross)}
          style={{
            top: `${selectedStuff.coordinates_throw.x + 1}%`,
            left: `${selectedStuff.coordinates_throw.y + 1}%`,
          }}
          key={`selected_${selectedStuff.name}`}
        />
      )}
    </div>
  );
};
