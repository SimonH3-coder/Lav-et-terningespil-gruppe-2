import React from "react";
import SpillerOgTurer from "./Components/Spiller og turer/Spiller og turer";
import SplineBackground from "./Components/Baggrund/SplineBaggrund";
import Header from "./Components/Header/Header";
import { useState } from 'react'
import {Modal} from './Components/Modal_Regler/Modal_Regler'
import { Navigation } from './Components/Navigation/Navigation';




function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [ isOpen2, setIsOpen2] = useState(false)
  const [ isOpen3, setIsOpen3] = useState(false)

  return (
    <div>
      <SplineBackground />
      <Header />
      <SpillerOgTurer />
    </div>
  );
}
    <>
    <Navigation setIsOpen ={setIsOpen}setIsOpen2 = {setIsOpen2} setIsOpen3 = {setIsOpen3} />

    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1>Sådan spiller man Yatzy</h1>
      <p>Kast de 5 terninger, ved at trykke på kast knappen.</p>
      <p> Den spiller som opnår flest points vinder.</p>
      <p>Når en spiller står for tur, får denne højst 3 kast med et valgfrit antal terninger.</p>
      <p>Spilleren må selv bestemme hvilke og hvor mange terninger</p>
      <p>der skal kastes om for at forsøge at matche en</p>
      <p>ikke udfyldt kombination på yatzy-tavlen.</p>
     </Modal>

     <Modal isOpen={isOpen2} setIsOpen={setIsOpen2}>
      <h1>Pointsystem</h1>
      <p>Første kast af de 3 giver 1-4-4-6-3. Spilleren lader 4’erne ligge og kaster de øvrige terninger om, som nu giver 2-5-4. 4’eren bliver liggende og spilleren kaster de øvrige terninger om som giver 1-1. Resultatet bliver “hus” (4-4-4-1-1) pointtal 14, som noteres i rubrikken “hus”. Hvis det sidste kast havde været 3-1, så var resultatet blevet (4-4-4-3-1), pointtallet 12, som man kan notere i rubrikken 4-ere.</p>
      <p>Kan et pointtal ikke placeres, det vil sige at alle blokkens rubrikker hvor kastet kunne placeres er optaget, skrives 0 point i en af de øvrige rubrikker (spilleren kan selv vælge i hvilken rubrik, der skal skrives nul) eller også noteres det samlet pointtal i “chancen”.</p>
      <p>Hver rubrik må kun anvendes én gang. Ved et samlet pointantal på 63 eller mere på øverste sektion af yatzy-tavlen, tildeles en bonus på 50 point.</p>
     </Modal>

     <Modal isOpen={isOpen3} setIsOpen={setIsOpen3}>
      <h1>Kombinationer</h1>
      <p>ENERE: Det gælder om at slå et så stort antal ettere som muligt. Hver ener giver et point.</p>
      <p>TOERE-SEKSERE: Samme regel som for enerne. Hver ens terning giver point efter antal prikker.</p>
      <p>BONUS: En spiller som får en totalsum på 63 point eller over på øverste sektion af yatzy-tavlen får en bonus på 50 point ekstra.</p>
      <p>ET PAR: Det gælder om at slå et så højt par som muligt, antal prikker = point.</p>
      <p>TO PAR: Slå to forskellige par begge så høje som muligt, antal prikker = point.</p>
      <p>3 ENS: Slå tre ens terninger, så høje som muligt, prikker = point.</p>
      <p>4 ENS: Slå fire ens terninger, så høje som muligt, prikker = point.</p>
      <p>LILLE STRAIGHT: Slå fem terninger i rækkefølge fra 1 til 5, giver 15 point.</p>
      <p>STOR STRAIGHT: Slå fem terninger i rækkefølge fra 2 til 6, giver 20 point.</p>
      <p>FULDT HUS: Et par og tre ens, parret og de tre ens skal være forskellige, prikker = point.</p>
      <p>CHANCEN: Hvis et terningekast ikke kan anvendes til nogle af de ledige kombinationer, kan summen af prikkerne påføres i feltet “Chancen”.</p>
      <p>YATZY: Et kast, så alle terninger viser ens. Dette kast giver terningernes værdi + 50 point.</p>

     </Modal>
    </>
    );
    }




export default App;
