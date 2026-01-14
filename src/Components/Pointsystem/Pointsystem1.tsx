import {usestate} from "react"
import styles from "./components/pointsystem1.module.scss"

export const pointsystem1 = ( tal, kategori ) => {
    const counts = countDice(tal);
    const values = Object.values(counts).map(([v, c])) => ({value: +v, count: c}));

    switch (kategori) {
        case "eter":
        case "toer":
        case "treer":
        case "firer":
        case "femer":
        case "sekser":
        const num = [eter, toer, treer, firer, femer, sekser].indexOf(kategori) + 1
        return dice.filter(d => d === num).reduce((a,b)) => a+b, 0)
}

case "et par": {
    const par = values.filter(v => v.count >= 2).sort((a,b) => b.value - a.value)[0];
    return par ? par.value * 2 : 0;
}

case "to par": {
    const par = values.filter(v => v.count >= 2).sort((a,b) => b.value - a.value);
    return par.length >=2 ?(par[0].value * 2 + par[1].value * 2) : 0;
}

case "tre ens": {
    const v = values.find(v => v.count >= 3);
    return v ? v.value * 3 : 0;
}

case "fire ens": {
    const v = values.find(v => v.count >= 4);
    return v ? v.value * 4 : 0;
}

case "lille straight": 
return [1,2,3,4,5].every(n=> tal.includes(n)) ? 15 : 0;

case "stor straight":
return [2,3,4,5,6].every(n=> tal.includes(n)) ? 20 : 0;

case "fuldt hus": {
    const hasThree = values.find(v => v.count === 3);
    const hasTwo = values.find(v => v.count === 2);
    return hasThree && hasTwo ? hasThree.value * 3 + hasTwo.value * 2 : 0;
}

case "chance":
    return tal.reduce((a,b) => a+b, 0);
case "yatzy": 
    return values.some(v => v.count === 5) ? 50 : 0;

default:
    return 0;

}
};

export default function yatzy() {
    const [tal, setTal] = usestate([1,2,3,4,5]);
    return (
        <div>
            <h2>Terninger: {tal.join(", ")}</h2>
            <p>Et par: {pointsystem1(tal, "et par")}</p>
            <p>Chance: {pointsystem1(tal, "chance")}</p>
            <p>Yatzy: {pointsystem1(tal, "yatzy")}</p>
        </div>
    );

}