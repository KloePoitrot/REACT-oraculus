import { Link } from "react-router-dom"
import Logo from "../assets/logo-oraculus.png"
import { useHoroscope } from "./datas";

function Header(){

    const { horoscope, currentId, setCurrentId } = useHoroscope()

    let before = currentId === 0 ? Object.keys(horoscope).length - 1 : currentId - 1;
    let after = currentId === Object.keys(horoscope).length - 1 ? 0 : currentId + 1;

    function changeNav(direction){
        if(direction == "prev"){
            setCurrentId(before)
        }
        if(direction == "next"){
            setCurrentId(after)
        }
    }
    
    console.log()

    return(
        <header>
            <Link><img src={Logo} alt="Logo du site"/></Link>
            <nav>
                <ul className="nav">
                    <li><Link href="#">Horoscope</Link></li>
                    <li><Link href="#">A propos</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </ul>
            </nav>
            <nav>
                <ul className="horosNav">
                    <li onClick={() => changeNav("prev")}><Link id="before" href="#"><i className="fas fa-chevron-left"></i></Link></li>
                    <li onClick={() => changeNav("next")}><Link id="after" href="#"><i className="fas fa-chevron-right"></i></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header