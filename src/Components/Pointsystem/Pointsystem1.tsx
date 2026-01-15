import { useState } from "react";
import styles from "./pointsystem1.module.scss";

function beregnPoint(tal: number[], type: string) {
  if (type === "") return "-";
}

const pointTypes = ["et'ere", "to'ere", "tre'ere", "fire'ere", "femmer'ere", "sekser'ere", "bonus", "to par", "tre par", "tre ens", "to gang tre ens", "fire ens", "lille straight", "stor straight", "royal straight", "fuldt hus", "chance", "yatzy"];

export function Pointsystem1() {
  // One input per point type
  const [inputs, setInputs] = useState<string[]>(Array(pointTypes.length).fill(""));

  // Helper to update a specific input
  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div className={styles.container}>
      <h2>Pointsystem:</h2>
      {pointTypes.map((type, idx) => {
        const arr = inputs[idx]
          .split(",")
          .map((str) => parseInt(str.trim(), 10))
          .filter((n) => !isNaN(n));
        return (
          <div key={type}>
            <p>
              {type.charAt(0).toUpperCase() + type.slice(1)}: {beregnPoint(arr, type)}
            </p>
            <input value={inputs[idx]} onChange={(e) => handleInputChange(idx, e.target.value)} placeholder="Indtast terninger her (fx 1,2,3,4,5,6)" />

            
          </div>
          
            const pointValues = pointTypes.map((type, index) => {
            const arr = inputs[index]
              .split(",")
              .map((str) => parseInt(str.trim(), 10))
              .filter((n) => !isNaN(n));
            const val = beregnPoint(arr, type);
            return typeof val === "number" ? val : 0;
          });

          const sum = pointValues.reduce((acc, v, index) => {
            if (pointTypes[index] === "bonus") return acc; 
            return acc + v;
          }, 0); 
        );
      })}
    </div>
  );
}

export default Pointsystem1;
