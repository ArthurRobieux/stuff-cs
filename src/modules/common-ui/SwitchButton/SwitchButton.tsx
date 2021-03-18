import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

export type SwitchButtonProps = {
  disabled?: boolean;
  state: boolean;
  onChange: (val: boolean) => void;
  color?: string;
};

export const SwitchButton = ({
  disabled,
  state,
  onChange,
  color,
}: SwitchButtonProps) => {
  return (
    <span
      className={classNames(styles.container, {
        [styles.disabled]: disabled,
      })}
    >
      <span
        onClick={
          !disabled
            ? () => {
                onChange(!state);
              }
            : undefined
        }
        className={classNames("switch", styles.switch, {
          switchActive: state,
          [styles.active]: state,
        })}
        style={{ ...(color && state && { background: color }) }}
        tabIndex={0}
        role="button"
      >
        <span className={styles.circle} />
      </span>
    </span>
  );
};
