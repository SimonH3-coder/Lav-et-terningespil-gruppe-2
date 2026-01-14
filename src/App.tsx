import { useState } from 'react'
import {Navigation} from './Components/Navigation/Navigation'
import { Modal } from './Components/Modal_Regler/Modal_Regler'



function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <Navigation setIsOpen ={setIsOpen}/>
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1>Regler for Yatzy</h1>
      <p>indsæt regler her....</p>
     </Modal>
   
    </>
    )}




export default App
