import { useHoroscope } from "./datas";

function HorosNav(){
    const { horoscope, currentId, setCurrentId } = useHoroscope()

    let before = currentId === 0 ? Object.keys(horoscope).length - 1 : currentId - 1;
    let after = currentId === Object.keys(horoscope).length - 1 ? 0 : currentId + 1;

    const signeAvant = horoscope.find(el => el.id == (before + 1));
    const signeApres = horoscope.find(el => el.id == (after + 1));

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
        <div className="mainNav">
            <article id='mainNavBefore' onClick={() => changeNav("prev")}>
                <h2 id="bHoroscope">{signeAvant?.signe}</h2>
                <p id="bDate">{signeAvant?.date}</p>
            </article>
            <article id="mainNavAfter" onClick={() => changeNav("next")}>
                <h2 id="aHoroscope">{signeApres?.signe}</h2>
                <p id="aDate">{signeApres?.date}</p>
            </article>
        </div>
    )
}

export default HorosNav