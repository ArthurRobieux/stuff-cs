import React, { useEffect, useState } from "react";

import { CSData, Map, Stuff } from "../../data";

import { Loader } from "../../../common-ui";
import { getData } from "../../utils";

import styles from "./styles.module.scss";
import { MapList } from "../MapList";
import { StuffDetail } from "../StuffDetail";
import { Filters } from "../Filters";
import { MapDetail } from "../MapDetail";

export type StuffTypes = {
  molo: boolean;
  flash: boolean;
  smoke: boolean;
};

export const StuffsCS = () => {
  const [selectedMap, setSelectedMap] = useState(null as null | Map);
  const [selectedStuff, setSelectedStuff] = useState(null as null | Stuff);
  const [hoveredStuff, setHoveredStuff] = useState(null as null | Stuff);
  const [selectedStuffTypes, setSelectedStuffTypes] = useState({
    molo: true,
    flash: true,
    smoke: true,
  } as StuffTypes);
  const [data, setData] = useState(null as CSData | null);

  useEffect(() => {
    getData().then((response: CSData) => {
      setData(response);
    });
  }, []);

  useEffect(() => {
    setSelectedStuff(null);
  }, [selectedMap]);

  if (!data) return <Loader />;

  return (
    <div className={styles.container}>
      <MapList data={data} setSelectedMap={setSelectedMap} />

      {selectedMap && (
        <div className={styles.mapContainer}>
          <div className={styles.mapDetail}>
            <MapDetail
              selectedMap={selectedMap}
              selectedStuff={selectedStuff}
              setSelectedStuff={setSelectedStuff}
              selectedStuffTypes={selectedStuffTypes}
              hoveredStuff={hoveredStuff}
              setHoveredStuff={setHoveredStuff}
            />
          </div>
          <div className={styles.filters}>
            <Filters
              selectedStuffTypes={selectedStuffTypes}
              setSelectedStuffTypes={setSelectedStuffTypes}
            />
          </div>
          <div className={styles.stuffDetail}>
            {selectedStuff && <StuffDetail selectedStuff={selectedStuff} />}
          </div>
        </div>
      )}
    </div>
  );
};
