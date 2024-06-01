import { ArrowLeft } from "@phosphor-icons/react";
import PlanetType from "../models/planetTyp"
import "./styles/favoritePage.css"
import { Link } from "react-router-dom"

type FavoritePageProps={
  planetFavoList:PlanetType[];
}

function FavoritePage({planetFavoList}:FavoritePageProps) {
  if(planetFavoList.length===0){
    return <div className="noFavo"> 
            Inga Favoriter att se här 
    <br />
            <Link className="homeLink" to={"/"}> Tillbaka </Link>

    </div>
  }
  return (
    <section className="favo">
      <Link className="homeLink" to={"/"}><ArrowLeft size={32} /></Link>
        <h1>Favorite Planeter </h1>

        <div className="favoWraper">
          {planetFavoList.map(planet=>(
            <div className="favoPlanetListCard "  key={planet.id} >
                <h2 className="favPlanetName">{planet.name}</h2>
                <p>{planet.desc}</p>
                <Link className="detailsLink" to={`/PlanetDetails/${planet.id}`} key={planet.id}>Vissa detailjer</Link>
            </div>
          ))}
        </div>
    </section>
  )
}

export default FavoritePage
