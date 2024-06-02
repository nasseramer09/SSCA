import Planet from "../components/Planet";
import PlanetType from "../models/planetTyp";
import "./styles/homePage.css"

type HomePageProps={

  planets:PlanetType[];
  planetFavoList:PlanetType[];
  togglePlanetFavoList:(planet:PlanetType)=>void

}

function HomePage ({planets, planetFavoList, togglePlanetFavoList}:HomePageProps){
  return (
    <section className="homePage">
    <Planet planet={planets} planetFavoList={planetFavoList} togglePlanetFavoList={togglePlanetFavoList}/>
    </section>
  )
}

export default HomePage
