// Import af useState hook og styles
import { useState } from "react";
import styles from "./terninger.module.scss";

// Type for terning værdi
type DieValue = 1 | 2 | 3 | 4 | 5 | 6;
// Type for terning objekt
type Die = { value: DieValue; held: boolean };

// DiceGame komponent til at håndtere terning kast og hold
const DiceGame = () => {
  // State for array af terninger
  const [dice, setDice] = useState<Die[]>(
    Array.from({ length: 5 }, () => ({ value: 1 as DieValue, held: false }))
  );

  // Funktion til at kaste terninger
  const rollDice = () => {
    setDice((prev) =>
      prev.map((d) =>
        d.held ? d : { ...d, value: (Math.floor(Math.random() * 6) + 1) as DieValue }
      )
    );
  };

  // Funktion til at toggle hold på en terning
  const toggleHold = (index: number) => {
    setDice((prev) => prev.map((d, i) => (i === index ? { ...d, held: !d.held } : d)));
  };

  // Funktion til at frigive alle terninger
  const releaseAll = () => {
    setDice((prev) => prev.map((d) => ({ ...d, held: false })));
  };

  return (
    <div className={styles.game}>
      {/* Container for terninger */}
      <div className={styles.diceContainer}>
        {dice.map((d, index) => (
          <div
            key={index}
            className={`${styles.die} ${styles[`face-${d.value}`]} ${d.held ? styles.held : ""}`}
            onClick={() => toggleHold(index)}
            role="button"
            aria-pressed={d.held}
          >
            {/* Render prikker for terning værdi */}
            {[...Array(d.value)].map((_, i) => (
              <span key={i} className={styles.dot}></span>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        {/* Knap til at kaste terninger */}
        <button onClick={rollDice}>Kast terninger</button>
        {/* Knap til at frigive alle */}
        <button onClick={releaseAll}>Frigiv alle</button>
      </div>
    </div>
  );
};

export default DiceGame;
