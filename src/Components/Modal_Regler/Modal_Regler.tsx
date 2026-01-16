// Import af styles og ModalWrapper komponent
import style from './Modal_Regler.module.scss'
import { Modalwrapper } from './ModalWrapper'

// Interface for Modal komponentens props
interface ModalProps {
   setIsOpen: (isOpen: boolean) => void
   isOpen:boolean
   children:React.ReactNode
}

// Modal komponent der viser indhold når isOpen er true
export function Modal({setIsOpen, isOpen, children}: ModalProps){
    return(
        // Kun render hvis isOpen er true
        isOpen === true &&(
    <>
    {/* Modal wrapper baggrund */}
    <Modalwrapper></Modalwrapper>
        {/* Modal container med luk knap og children indhold */}
        <section className={style.modalStyle}>
            <button onClick={()=> setIsOpen(false)}>X</button>
            {children}
        </section>
        </>
                )
    )
}
