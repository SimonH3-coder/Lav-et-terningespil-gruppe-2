// Import af React, useState hook, styles og DiceGame komponent
import { useState } from "react";
import styles from "./Spiller og turer.module.scss";
import DiceGame from "../Terninger/terninger";

// SpillerOgTurer komponent til at håndtere spiller setup og tur skift
export default function SpillerOgTurer() {
  // State for liste af spillere
  const [players, setPlayers] = useState<string[]>([]);
  // State for nyt spiller navn input
  const [newPlayer, setNewPlayer] = useState<string>("");
  // State for om spillet er startet
  const [started, setStarted] = useState<boolean>(false);
  // State for index af nuværende spiller
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Funktion til at tilføje en ny spiller
  const addPlayer = () => {
    const name = newPlayer.trim();
    if (!name) return;
    setPlayers((p) => [...p, name]);
    setNewPlayer("");
  };

  // Funktion til at fjerne en spiller
  const removePlayer = (index: number) => {
    setPlayers((p) => p.filter((_, i) => i !== index));
  };

  // Funktion til at starte spillet
  const startGame = () => {
    if (players.length === 0) return;
    setCurrentIndex(0);
    setStarted(true);
  };

  // Funktion til at gå til næste tur
  const nextTurn = () => {
    if (players.length === 0) return;
    setCurrentIndex((i) => (i + 1) % players.length);
  };

  // Funktion til at nulstille setup
  const resetSetup = () => {
    setStarted(false);
    setPlayers([]);
    setNewPlayer("");
    setCurrentIndex(0);
  };

  return (
    <div className={styles.container}>
      {/* Hvis ikke startet, vis setup */}
      {!started ? (
        <div className={styles.setup}>
          <h2>Opret spillere</h2>
          <div className={styles.formRow}>
            {/* Input for nyt spiller navn */}
            <input
              value={newPlayer}
              onChange={(e) => setNewPlayer(e.target.value)}
              placeholder="Spillernavn"
            />
            {/* Knap til at tilføje spiller */}
            <button onClick={addPlayer}>Tilføj</button>
          </div>

          {/* Liste af spillere */}
          <ul className={styles.playerList}>
            {players.map((p, idx) => (
              <li key={idx} className={styles.playerItem}>
                <span>{p}</span>
                {/* Knap til at fjerne spiller */}
                <button onClick={() => removePlayer(idx)}>Fjern</button>
              </li>
            ))}
          </ul>

          <div className={styles.controls}>
            {/* Knap til at starte spil */}
            <button onClick={startGame} disabled={players.length === 0}>
              Start spil
            </button>
            {/* Knap til at nulstille */}
            <button onClick={resetSetup}>Nulstil</button>
          </div>
        </div>
      ) : (
        <div className={styles.gameArea}>
          <div className={styles.turnInfo}>
            <strong>Nuværende spiller:</strong> {players[currentIndex]}
          </div>

          {/* Wrapper for terning spil */}
          <div className={styles.diceWrapper}>
            <DiceGame />
          </div>

          <div className={styles.controls}>
            {/* Knap til næste tur */}
            <button onClick={nextTurn}>Næste tur</button>
            {/* Knap til at afslutte og tilbage */}
            <button onClick={resetSetup}>Afslut / Tilbage</button>
          </div>
        </div>
      )}
    </div>
  );
}
