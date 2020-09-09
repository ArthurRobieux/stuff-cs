import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import { Header } from "../Header";

export type LayoutProps = { children: ReactNode };

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
};
