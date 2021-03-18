import React from "react";

import { Stuff } from "../../data";

import styles from "./styles.module.scss";

type StuffDetailProps = { selectedStuff: Stuff };

export const StuffDetail = ({ selectedStuff }: StuffDetailProps) => {
  return (
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
  );
};
