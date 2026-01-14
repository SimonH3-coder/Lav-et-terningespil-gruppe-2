import style from './Modal_Regler.module.scss'

interface ModalProps {
   setIsOpen: (isOpen: boolean) => void
}
export function Modal({setIsOpen}: ModalProps){
    return(
        <section className={style.modalStyle}>
            <button onClick={()=> setIsOpen(false)}>X</button>
        </section>
    )
}