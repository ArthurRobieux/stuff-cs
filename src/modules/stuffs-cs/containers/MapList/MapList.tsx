import React from "react";
import { CSData, Map } from "../../data";

import styles from "./styles.module.scss";

type MapListProps = { data: CSData; setSelectedMap: (m: Map) => void };

export const MapList = ({ data, setSelectedMap }: MapListProps) => {
  return (
    <div className={styles.mapChoices}>
      {data.maps.map((map) => (
        <div
          onClick={() => setSelectedMap(map)}
          className={styles.mapChoice}
          key={map.name}
        >
          {map.name}
        </div>
      ))}
    </div>
  );
};
