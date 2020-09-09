import React, { useState } from "react";
import ReactModal from "react-modal";

import styles from "./styles.module.scss";

export type PhotoProps = { photo: any };

export const Photo = ({ photo }: PhotoProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overflow: "visible",
      padding: "5px",
      display: "flex",
      justifyContent: "center",
    },
    overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  };

  return (
    <>
      <div
        className={styles.photoContainer}
        onClick={() => setModalIsOpen(true)}
      >
        <img src={photo.img_src} alt="img" className={styles.image} />
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <img src={photo.img_src} alt="img" className={styles.largeImage} />
      </ReactModal>
    </>
  );
};
