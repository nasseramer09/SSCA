import PlanetDetails from "../components/PlanetDetails"
import PlanetType from "../models/planetTyp"
import'./styles/planetPage.css'

type PlanetPageProps={
    planets:PlanetType[];
    planetFavoList:PlanetType[];
    togglePlanetFavoList:(Planet:PlanetType)=>void;
}

function PlanetPage({planets, planetFavoList, togglePlanetFavoList }:PlanetPageProps) {
   
  return (
   <section className="planetSection">
    <PlanetDetails planets={planets} planetFavoList={planetFavoList} togglePlanetFavoList={togglePlanetFavoList}/>
   </section>
  )
}

export default PlanetPage
