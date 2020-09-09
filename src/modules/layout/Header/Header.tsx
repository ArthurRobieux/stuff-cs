import React from "react";
import styles from "./styles.module.scss";
import logoNasa from "../../../assets/logoNasa.png";

export const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logoNasa} alt="logoNasa" className={styles.logoNasa} />
      <div>Mars Rover Photos</div>
    </div>
  );
};
