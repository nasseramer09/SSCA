import Planet from "../components/Planet";
import PlanetNav from "../components/PlanetNav"
import PlanetType from "../models/planetTyp";
import "./styles/homePage.css"

type HomePageProps={

  planets:PlanetType[];

}

function HomePage ({planets}:HomePageProps){
  return (
    <section className="homePage">
    <PlanetNav planet={planets}/> 
    <Planet planet={planets}/>
    {/* {
      planets.map((planet)=>(
        <Planet key={planet.id} planet={planet}/>
      ))
    } */}

      
    </section>
  )
}

export default HomePage
