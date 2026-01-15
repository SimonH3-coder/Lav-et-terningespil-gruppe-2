import { useState } from "react";
import styles from "./terninger.module.scss";

type DieValue = 1 | 2 | 3 | 4 | 5 | 6;
type Die = { value: DieValue; held: boolean };

const DiceGame = () => {
  const [dice, setDice] = useState<Die[]>(
    Array.from({ length: 5 }, () => ({ value: 1 as DieValue, held: false }))
  );

  const rollDice = () => {
    setDice((prev) =>
      prev.map((d) =>
        d.held ? d : { ...d, value: (Math.floor(Math.random() * 6) + 1) as DieValue }
      )
    );
  };

  const toggleHold = (index: number) => {
    setDice((prev) => prev.map((d, i) => (i === index ? { ...d, held: !d.held } : d)));
  };

  const releaseAll = () => {
    setDice((prev) => prev.map((d) => ({ ...d, held: false })));
  };

  return (
    <div className={styles.game}>
      <div className={styles.diceContainer}>
        {dice.map((d, index) => (
          <div
            key={index}
            className={`${styles.die} ${styles[`face-${d.value}`]} ${d.held ? styles.held : ""}`}
            onClick={() => toggleHold(index)}
            role="button"
            aria-pressed={d.held}
          >
            {[...Array(d.value)].map((_, i) => (
              <span key={i} className={styles.dot}></span>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button onClick={rollDice}>Kast terninger</button>
        <button onClick={releaseAll}>Frigiv alle</button>
      </div>
    </div>
  );
};

export default DiceGame;
