import PlanetNav from "../components/PlanetNav"
import PlanetType from "../models/planetTyp";
import "./styles/homePage.css"

type HomePageProps={

  planets:PlanetType[];

}

function HomePage ({planets}:HomePageProps){
  return (
    <section className="homePage">
       <PlanetNav planets={planets}/>
    </section>
  )
}

export default HomePage
