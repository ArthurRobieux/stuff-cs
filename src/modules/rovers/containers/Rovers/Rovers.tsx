import React, { useEffect, useState } from "react";
import classnames from "classnames";

import { apiClient } from "../../../api-client";
import { Loader } from "../../../common-ui";

import styles from "./styles.module.scss";
import { Rover } from "../Rover/Rover";

export const Rovers = () => {
  const [selectedRover, setSelectedRover] = useState(null as any);
  const [roverList, setRoverList] = useState(null as any);

  const onFetchData = () => {
    apiClient.mars.getRoverList().then((response) => {
      setRoverList(response.rovers);
    });
  };

  useEffect(() => {
    onFetchData();
  }, []);

  if (!roverList)
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );

  return (
    <div className={styles.rovers}>
      <div className={styles.title}>Choose a rover : </div>

      <div className={styles.roverList}>
        {roverList.map((rover: any) => (
          <div
            onClick={() => setSelectedRover(rover)}
            key={rover.name}
            className={classnames(styles.roverName, {
              [styles.selectedRover]:
                selectedRover && rover.name === selectedRover.name,
            })}
          >
            {rover.name}
          </div>
        ))}
      </div>

      {selectedRover && <Rover roverName={selectedRover.name.toLowerCase()} />}
    </div>
  );
};
