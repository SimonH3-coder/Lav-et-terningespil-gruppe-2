import style from './Navigation.module.scss'


interface NavigationsProps{
    //void fordi den ikke returnere noget tilbage da det er en setfunction.
    setIsOpen:(isOpen:boolean) => void
    setIsOpen2:(isOpen:boolean) => void
    setIsOpen3:(isOpen:boolean) => void    
}

export function Navigation({setIsOpen, setIsOpen2, setIsOpen3}:NavigationsProps){
return(

<nav className={style.navStyle}>
   
    <ul><button className={style.pointbuttonStyle} onClick={()=> setIsOpen2(true)}>
        <b>PointSystem</b></button></ul>
    <ul>
    <button className={style.buttonStyle} onClick={()=> setIsOpen(true)}>
        <b>Spilleregler</b></button></ul>
    <ul>
       <button className={style.kombbuttonStyle} onClick={()=> setIsOpen3(true)}>
        <b>Kombinationer</b></button></ul>
</nav>
)
}