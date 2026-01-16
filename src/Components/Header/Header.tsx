// Import af styles
import styles from "./header.module.scss";

// Header komponent der viser titlen
export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Space Yatzy</h1>
    </header>
  );
}
