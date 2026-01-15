import React, { useState } from "react";
import styles from "./Spiller og turer.module.scss";
import DiceGame from "../Terninger/terninger";

export default function SpillerOgTurer() {
  const [players, setPlayers] = useState<string[]>([]);
  const [newPlayer, setNewPlayer] = useState<string>("");
  const [started, setStarted] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const addPlayer = () => {
    const name = newPlayer.trim();
    if (!name) return;
    setPlayers((p) => [...p, name]);
    setNewPlayer("");
  };

  const removePlayer = (index: number) => {
    setPlayers((p) => p.filter((_, i) => i !== index));
  };

  const startGame = () => {
    if (players.length === 0) return;
    setCurrentIndex(0);
    setStarted(true);
  };

  const nextTurn = () => {
    if (players.length === 0) return;
    setCurrentIndex((i) => (i + 1) % players.length);
  };

  const resetSetup = () => {
    setStarted(false);
    setPlayers([]);
    setNewPlayer("");
    setCurrentIndex(0);
  };

  return (
    <div className={styles.container}>
      {!started ? (
        <div className={styles.setup}>
          <h2>Opret spillere</h2>
          <div className={styles.formRow}>
            <input
              value={newPlayer}
              onChange={(e) => setNewPlayer(e.target.value)}
              placeholder="Spillernavn"
            />
            <button onClick={addPlayer}>Tilføj</button>
          </div>

          <ul className={styles.playerList}>
            {players.map((p, idx) => (
              <li key={idx} className={styles.playerItem}>
                <span>{p}</span>
                <button onClick={() => removePlayer(idx)}>Fjern</button>
              </li>
            ))}
          </ul>

          <div className={styles.controls}>
            <button onClick={startGame} disabled={players.length === 0}>
              Start spil
            </button>
            <button onClick={resetSetup}>Nulstil</button>
          </div>
        </div>
      ) : (
        <div className={styles.gameArea}>
          <div className={styles.turnInfo}>
            <strong>Nuværende spiller:</strong> {players[currentIndex]}
          </div>

          <div className={styles.diceWrapper}>
            <DiceGame />
          </div>

          <div className={styles.controls}>
            <button onClick={nextTurn}>Næste tur</button>
            <button onClick={resetSetup}>Afslut / Tilbage</button>
          </div>
        </div>
      )}
    </div>
  );
}
