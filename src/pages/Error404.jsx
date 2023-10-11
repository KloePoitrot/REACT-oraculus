import { Link } from "react-router-dom"
import Header from "../components/header"

function Error404(){

    return(
        <>
            <Header />
            <div className="maxwidth">
                <h1 className="titleHeader">404</h1>
                <h2 className="secondHeader">La page demandé n'existe pas</h2>
                <Link href="/">Retour a l'accueil</Link>
            </div>
        </>
    )
}

export default Error404