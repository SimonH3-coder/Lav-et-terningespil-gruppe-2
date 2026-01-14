
interface NavigationsProps{
    //void fordi den ikke returnere noget tilbage da det er en setfunction.
    setIsOpen:(isOpen:boolean) => void
}

export function Navigation({setIsOpen}:NavigationsProps){
return(

<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sådan spiller du Yatzy</a></li>
        <li><a href="#">PointSystemet</a></li>
        <li><a href="#">Regler</a></li>
    </ul>
    <button onClick={()=> setIsOpen(true)}>Regler</button>
</nav>
)
}