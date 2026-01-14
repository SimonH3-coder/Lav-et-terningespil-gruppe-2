import { useState } from 'react'
import {Navigation} from './Components/Navigation/Navigation'
import { Modal } from './Components/Modal_Regler/Modal_Regler'



function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <Navigation setIsOpen ={setIsOpen}/>
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1>Sådan spiller man Yatzy</h1>
      <p>Du skal bruge et raflebæger og 5 terninger.</p>
      <p> Den spiller som opnår flest points vinder.</p>
      <p>Når en spiller står for tur, får denne højst 3 kast med et valgfrit antal terninger.</p>
      <p>Spilleren må selv bestemme hvilke og hvor mange terninger</p>
      <p>der skal kastes om for at forsøge at matche en</p>
      <p>ikke udfyldt kombination på yatzy-tavlen.</p>

     </Modal>
   
    </>
    )}




export default App
