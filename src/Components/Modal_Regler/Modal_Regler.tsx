import style from './Modal_Regler.module.scss'
import { Modalwrapper } from './ModalWrapper'

interface ModalProps {
   setIsOpen: (isOpen: boolean) => void
   isOpen:boolean
   children:React.ReactNode
}

export function Modal({setIsOpen, isOpen, children}: ModalProps){
    return(
        isOpen === true &&(
    <>

    <Modalwrapper></Modalwrapper>
        <section className={style.modalStyle}>
            <button onClick={()=> setIsOpen(false)}>X</button>
            {children}
        </section>
        </>
                )
    )
}
