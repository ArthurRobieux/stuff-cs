import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { apiClient } from "../../../api-client";
import { Loader } from "../../../common-ui";

import styles from "./styles.module.scss";
import { Photo } from "../../components/Photo";

export type RoverProps = { roverName: string };

export const Rover = ({ roverName }: RoverProps) => {
  const [roverPhotos, setRoverPhotos] = useState(null as any);
  const [roverInfos, setRoverInfos] = useState(null as any);
  const [loading, setLoading] = useState(true);
  const [typedSol, setTypedSol] = useState("1");
  const [sol, setSol] = useState(1);
  const [selectedCamera, setSelectedCamera] = useState(null as any);

  const onFetchData = () => {
    setLoading(true);

    const p1 = apiClient.mars
      .getRoverPhotos({ rover: roverName, sol })
      .then((response) => {
        setRoverPhotos(response.photos);
      });

    const p2 = apiClient.mars
      .getRoverInfos({ rover: roverName })
      .then((response) => {
        setRoverInfos(response.rover);
      });

    Promise.all([p1, p2]).then(() => setLoading(false));
  };

  useEffect(() => {
    if (!loading) {
      const input = document.getElementById("input");
      if (input)
        input.addEventListener("keyup", function (event) {
          if (event.keyCode === 13) {
            event.preventDefault();
            const button = document.getElementById("button");
            if (button) button.click();
          }
        });
    }
  }, [loading]);

  useEffect(() => {
    setTypedSol("1");
    setSol(1);
    setSelectedCamera(null);
    onFetchData();
  }, [roverName]);

  useEffect(() => {
    onFetchData();
  }, [sol]);

  const onSolSubmit = () => {
    setSol(+typedSol);
  };

  if (loading) return <Loader />;

  let photos = roverPhotos;
  if (selectedCamera)
    photos = photos.filter(
      (photo: any) => photo.camera.name === selectedCamera.name
    );

  return (
    <div>
      <div className={styles.inputContainer}>
        <div>Choose a sol stp</div> 
        <input
          value={typedSol}
          onChange={(evt) => setTypedSol(evt.target.value)}
          type="number"
          id="input"
        />
        <button onClick={onSolSubmit} id="button">
          Submit
        </button>
      </div>

      <div className={styles.inputContainer}>
        <div>Choose a camera</div>
        <span
          onClick={() => setSelectedCamera(null)}
          className={classnames(styles.camera, {
            [styles.selectedCamera]: selectedCamera === null,
          })}
        >
          All
        </span>
        {roverInfos.cameras.map((camera: any) => (
          <span
            className={classnames(styles.camera, {
              [styles.selectedCamera]:
                selectedCamera && selectedCamera.name === camera.name,
            })}
            onClick={() => setSelectedCamera(camera)}
          >
            {camera.name} test
          </span>
        ))}
      </div>

      <div className={styles.test}>
        <div>Max sol : {roverInfos.max_sol}</div>
        <div>Status : {roverInfos.status}</div>
        <div>
          Launch date : {new Date(roverInfos.launch_date).toLocaleDateString()}
        </div>
        <div>Total photos : {roverInfos.total_photos}</div>
        <div>Selected sol : {sol}</div>
        <div>
          Selected camera : {selectedCamera ? selectedCamera.name : "All"}
        </div>
        <div>Landing date : {new Date(roverInfos.landing_date).toLocaleDateString()} </div>
        <div>max date : {new Date(roverInfos.max_date).toLocaleDateString()} </div>
        <div>total photos : {roverInfos.total_photos}</div>
      </div>

      {photos.map((photo: any) => (
        <Photo photo={photo} />
      ))}
    </div>
  );
};
