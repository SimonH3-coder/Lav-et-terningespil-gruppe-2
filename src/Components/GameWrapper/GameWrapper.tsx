// Import af React og komponenter
import { Pointsystem1 } from "../Pointsystem/Pointsystem1";
import styles from "./GameWrapper.module.scss";
import SpillerOgTurer from "../Spiller og turer/Spiller og turer";

// GameWrapper komponent der indeholder pointsystem og spiller/tur komponent
export function GameWrapper() {
  return (
    <div className={styles.wrapper}>
      {/* Venstre sektion med pointsystem */}
      <div className={styles.leftSection}>
        <Pointsystem1 />
      </div>
      {/* Højre sektion med spiller og turer */}
      <div className={styles.rightSection}>
        <SpillerOgTurer />
      </div>
    </div>
  );
}
