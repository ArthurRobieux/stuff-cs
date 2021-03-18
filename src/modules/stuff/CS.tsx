import React, { useEffect, useState } from "react";
import classnames from "classnames";

import { CSData, Map, Stuff } from "./data";

import molo from "../../assets/icons/molo.png";
import flash from "../../assets/icons/flash.png";
import smoke from "../../assets/icons/smoke.png";
import cross from "../../assets/icons/cross.svg";

import styles from "./styles.module.scss";
import { Loader, SwitchButton } from "../common-ui";
import { getData, getIcon } from "./utils";

export const CS = () => {
  const [selectedMap, setSelectedMap] = useState(null as null | Map);
  const [selectedStuff, setSelectedStuff] = useState(null as null | Stuff);
  const [hoveredStuff, setHoveredStuff] = useState(null as null | Stuff);
  const [selectedStuffTypes, setSelectedStuffTypes] = useState({
    molo: true,
    flash: true,
    smoke: true,
  });
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

      <div>
        {selectedMap && (
          <div>
            <div className={styles.mapContainer}>
              <div className={styles.left}>
                <img
                  src={selectedMap.minimap}
                  alt="minimap"
                  className={styles.minimap}
                  onClick={() => setSelectedStuff(null)}
                />
                {selectedMap.stuffs
                  .filter(
                    (stuff) =>
                      (stuff.type.includes("molo") &&
                        selectedStuffTypes.molo) ||
                      (stuff.type.includes("flash") &&
                        selectedStuffTypes.flash) ||
                      (stuff.type.includes("smoke") && selectedStuffTypes.smoke)
                  )
                  .map((stuff) => (
                    <img
                      src={getIcon(stuff.type)}
                      alt="icon"
                      className={classnames(styles.minimapPointer, {
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
                      top: `${hoveredStuff.coordinates_throw.x}%`,
                      left: `${hoveredStuff.coordinates_throw.y}%`,
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
                      top: `${selectedStuff.coordinates_throw.x}%`,
                      left: `${selectedStuff.coordinates_throw.y}%`,
                    }}
                    key={`selected_${selectedStuff.name}`}
                  />
                )}
              </div>
              <div className={styles.center}>
                <div className={styles.filters}>
                  <img src={molo} alt="icon" className={styles.icon} />
                  <SwitchButton
                    state={selectedStuffTypes.molo}
                    onChange={() =>
                      setSelectedStuffTypes({
                        ...selectedStuffTypes,
                        molo: !selectedStuffTypes.molo,
                      })
                    }
                  />
                </div>
                <div>
                  <img src={flash} alt="icon" className={styles.icon} />
                  <SwitchButton
                    state={selectedStuffTypes.flash}
                    onChange={() =>
                      setSelectedStuffTypes({
                        ...selectedStuffTypes,
                        flash: !selectedStuffTypes.flash,
                      })
                    }
                  />
                </div>
                <div>
                  <img src={smoke} alt="icon" className={styles.icon} />
                  <SwitchButton
                    state={selectedStuffTypes.smoke}
                    onChange={() =>
                      setSelectedStuffTypes({
                        ...selectedStuffTypes,
                        smoke: !selectedStuffTypes.smoke,
                      })
                    }
                  />
                </div>
              </div>
              <div className={styles.right}>
                {selectedStuff && (
                  <>
                    <div className={styles.stuffName}>{selectedStuff.name}</div>
                    {selectedStuff.description && (
                      <div className={styles.stuffDescription}>
                        {selectedStuff.description}
                      </div>
                    )}
                    <video controls className={styles.video}>
                      <source
                        src={`https://drive.google.com/uc?export=download&id=${selectedStuff.video_url}`}
                        type="video/mp4"
                      />
                    </video>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
