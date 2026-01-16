import React from "react";
import { Pointsystem1 } from "../Pointsystem/Pointsystem1";
import styles from "./GameWrapper.module.scss";
import SpillerOgTurer from "../Spiller og turer/Spiller og turer";

export function GameWrapper() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSection}>
        <Pointsystem1 />
      </div>
      <div className={styles.rightSection}>
        <SpillerOgTurer />
      </div>
    </div>
  );
}
