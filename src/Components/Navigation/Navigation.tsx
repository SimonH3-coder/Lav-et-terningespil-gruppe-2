import style from './Navigation.module.scss'


interface NavigationsProps{
    //void fordi den ikke returnere noget tilbage da det er en setfunction.
    setIsOpen:(isOpen:boolean) => void
}

export function Navigation({setIsOpen}:NavigationsProps){
return(

<nav className={style.navStyle}>
    <ul>
        <li className={style.liStyle}><a href="#">Home</a></li>
        </ul>
        <ul>
        <li  className={style.liStyle}><a href="#">Sådan spiller du Yatzy</a></li>
        </ul>
        <ul>
        <li  className={style.liStyle}><a href="#">PointSystemet</a></li>
        </ul>
        <ul>
        <li className={style.liStyle}><a href="#">Regler</a></li>
    </ul>
    <ul>
    <button className={style.buttonStyle} onClick={()=> setIsOpen(true)}>
        <b>Regler</b></button></ul>
</nav>
)
}