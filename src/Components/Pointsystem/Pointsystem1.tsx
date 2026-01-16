// Import af useState hook og styles
import { useState } from "react";
import styles from "./pointsystem1.module.scss";

// Funktion til at beregne point baseret på tal array og type
function beregnPoint(tal: number[], type: string) {
  // Return "-" hvis ingen tal er givet
  if (!tal || tal.length === 0) return "-";
  // Default: summer alle talene og returner summen
  return tal.reduce((a, b) => a + b, 0);
}

// Array af point typer i Yatzy
const pointTypes = ["et'ere", "to'ere", "tre'ere", "fire'ere", "femmer'ere", "sekser'ere", "bonus", "to par", "tre par", "tre ens", "to gang tre ens", "fire ens", "lille straight", "stor straight", "royal straight", "fuldt hus", "chance", "yatzy", "sum"];

// Pointsystem1 komponent til at håndtere point indtastning og beregning
export function Pointsystem1() {
  // State for input felter, et for hver point type
  const [inputs, setInputs] = useState<string[]>(Array(pointTypes.length).fill(""));

  // Hjælpefunktion til at opdatere et specifikt input
  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  //Regner pointValues og sum HER, før return (som sætte midlertidligt til 0)
  const pointValues = pointTypes.map((type, index) => {
    if (type === "sum") return 0; // Sum beregnes separat
    const arr = inputs[index]
      .split(",")
      .map((str) => parseInt(str.trim(), 10))
      .filter((n) => !isNaN(n));
    const val = beregnPoint(arr, type);
    return typeof val === "number" ? val : 0;
  });

  // Summer alle point (undtagen bonus hvis ønsket) og gem total
  const total = pointValues.reduce((acc, v, index) => {
    if (pointTypes[index] === "bonus") return acc;
    return acc + v;
  }, 0);

  return (
    <div className={styles.container}>
      <h2>Pointsystem:</h2>
      <div className={styles.inputsGrid}>
        {/* Map over point typer og render input og værdi */}
        {pointTypes.map((type, idx) => {
          const arr = inputs[idx]
            .split(",")
            .map((str) => parseInt(str.trim(), 10))
            .filter((n) => !isNaN(n));
          return (
            <div key={type} className={styles.inputContainer}>
              <p>
                {type.charAt(0).toUpperCase() + type.slice(1)}: {type === "sum" ? total : beregnPoint(arr, type)}
              </p>
              {/* Input felt hvis ikke sum */}
              {type !== "sum" && <input value={inputs[idx]} onChange={(e) => handleInputChange(idx, e.target.value)} placeholder="Indtast Tal" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pointsystem1;
