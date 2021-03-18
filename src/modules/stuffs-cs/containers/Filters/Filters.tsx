import React from "react";

import molo from "../../../../assets/icons/molo.png";
import flash from "../../../../assets/icons/flash.png";
import smoke from "../../../../assets/icons/smoke.png";

import { SwitchButton } from "../../../common-ui";
import { StuffTypes } from "../StuffsCS/StuffsCS";

import styles from "./styles.module.scss";

type FiltersProps = {
  selectedStuffTypes: StuffTypes;
  setSelectedStuffTypes: (s: StuffTypes) => void;
};

export const Filters = ({
  selectedStuffTypes,
  setSelectedStuffTypes,
}: FiltersProps) => {
  return (
    <div className={styles.filters}>
      <div>
        <img src={molo} alt="icon" className={styles.icon} />
        <SwitchButton
          state={selectedStuffTypes.molo}
          onChange={() =>
            setSelectedStuffTypes({
              ...selectedStuffTypes,
              molo: !selectedStuffTypes.molo,
            })
          }
          color="orange"
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
          color="yellow"
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
          color="lightgray"
        />
      </div>
    </div>
  );
};
