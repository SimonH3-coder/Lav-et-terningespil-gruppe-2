import { useState } from "react";
import styles from "./terninger.module.scss";

type DieValue = 1 | 2 | 3 | 4 | 5 | 6;

const DiceGame = () => {
  const [dice, setDice] = useState<DieValue[]>([1, 1, 1, 1, 1]);

  const rollDice = () => {
    const newDice = dice.map(
      () => (Math.floor(Math.random() * 6) + 1) as DieValue
    );
    setDice(newDice);
  };

  return (
    <div className={styles.game}>
      <div className={styles.diceContainer}>
        {dice.map((value: DieValue, index: number) => (
          <div key={index} className={`${styles.die} ${styles[`face-${value}`]}`}>
            {[...Array(value)].map((_: unknown, i: number) => (
              <span key={i} className={styles.dot}></span>
            ))}
          </div>
        ))}
      </div>

      <button onClick={rollDice}>Kast terninger</button>
    </div>
  );
};

export default DiceGame;
