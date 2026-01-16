// Import af styles
import style from './Navigation.module.scss'

// Interface for Navigation komponentens props
interface NavigationsProps{
    // setIsOpen funktioner til at åbne modals, returnerer void
    setIsOpen:(isOpen:boolean) => void
    setIsOpen2:(isOpen:boolean) => void
    setIsOpen3:(isOpen:boolean) => void    
}

// Navigation komponent med knapper til at åbne forskellige modals
export function Navigation({setIsOpen, setIsOpen2, setIsOpen3}:NavigationsProps){
return(

<nav className={style.navStyle}>
   
    {/* Knap til at åbne pointsystem modal */}
    <ul><button className={style.pointbuttonStyle} onClick={()=> setIsOpen2(true)}>
        <b>PointSystem</b></button></ul>
    {/* Knap til at åbne spilleregler modal */}
    <ul>
    <button className={style.buttonStyle} onClick={()=> setIsOpen(true)}>
        <b>Spilleregler</b></button></ul>
    {/* Knap til at åbne kombinationer modal */}
    <ul>
       <button className={style.kombbuttonStyle} onClick={()=> setIsOpen3(true)}>
        <b>Kombinationer</b></button></ul>
</nav>
)
}