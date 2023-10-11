
import Header from "../components/header"
import HorosContent from "../components/horoscopecontent"
import HorosNav from "../components/navigation"

import "../css/style.css"
import { useHoroscope } from "../components/datas"


function Home(){
    const { horoscope, currentId, setCurrentId } = useHoroscope()
    

    return(
        <>
            <Header />
            <main>
                <div className="maxwidth">
                    <HorosNav/>
                    <div>
                        <HorosContent />
                    </div>
                </div>
            </main>
        </>
    )
    
}

export default Home