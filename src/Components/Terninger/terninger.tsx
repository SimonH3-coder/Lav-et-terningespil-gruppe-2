import { useState } from "react";
import "./Terninger.scss";

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
    <div className="game">
      <div className="dice-container">
        {dice.map((value, index) => (
          <div key={index} className={`die face-${value}`}>
            {[...Array(value)].map((_, i) => (
              <span key={i} className="dot"></span>
            ))}
          </div>
        ))}
      </div>

      <button onClick={rollDice}>Kast terninger</button>
    </div>
  );
};

export default DiceGame;
