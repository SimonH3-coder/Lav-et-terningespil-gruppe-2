import style from './Navigation.module.scss'


interface NavigationsProps{
    //void fordi den ikke returnere noget tilbage da det er en setfunction.
    setIsOpen:(isOpen:boolean) => void
}

export function Navigation({setIsOpen}:NavigationsProps){
return(

<nav className={style.navStyle}>
   
    <ul><button className={style.pointbuttonStyle} onClick={()=> setIsOpen(true)}>
        <b>PointSystem</b></button></ul>
    <ul>
    <button className={style.buttonStyle} onClick={()=> setIsOpen(true)}>
        <b>Spilleregler</b></button></ul>
       
</nav>
)
}