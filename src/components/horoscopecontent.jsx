import { useHoroscope } from "./datas"

function HorosContent(){
    const { horoscope, currentId } = useHoroscope()

    const index = currentId > Object.keys(horoscope).length ? 0 : currentId;
    const data = horoscope.find(el => el.id == index + 1)

    return(
        <>
            <img src={data.image} id="imgHoros" className="imageright" alt="Image du Capricorne" />
            <section data-id="1">
                <div className="header">
                    <h1 className="secondHeader" id="datejour">-- Horoscope du 28/09/2023</h1>
                    <h2 id="horoscope" className="titleHeader">{data.signe}</h2>
                    <h3 id="date" className="secondHeader">Du {data.date}</h3>
                </div>

                <p id="amour"><span>Amour: </span> {data.amour}</p>
                <p id="travail"><span>Travail: </span> {data.travail}</p>
                <p id="argent"><span>Argent: </span> {data.argent}</p>
                <p id="sante"><span>Santé: </span> {data.sante}</p>
                <p id="famille"><span>Famille et amis: </span> {data.famille}</p>
                <p id="conseil"><span>Conseil: </span> {data.conseil}</p>
            </section>
        </>
    )
}

export default HorosContent