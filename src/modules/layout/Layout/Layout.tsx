import React, { ReactNode } from "react";
import { Header } from "../../stuffs-cs";
import styles from "./styles.module.scss";

export type LayoutProps = { children: ReactNode };

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
};
