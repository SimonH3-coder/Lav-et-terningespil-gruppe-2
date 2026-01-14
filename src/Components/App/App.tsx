import { useState } from 'react'
import './App.module.scss'
import {Navigation} from '../Navigation/Navigation'
import { Modalwrapper } from '../Modal_Regler/ModalWrapper'
import { Modal } from '../Modal_Regler/Modal_Regler'



function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <Navigation setIsOpen ={setIsOpen}/>
    {isOpen=== true &&(
    <>
    <Modalwrapper></Modalwrapper>
     <Modal setIsOpen={setIsOpen}>
      <h1>Regler for Yatzy</h1>
      <p>indsæt regler her....</p>
     </Modal>
   
    </>
    )}
    </>
  )
}

export default App
