import PlanetDetails from "../components/PlanetDetails"
import PlanetType from "../models/planetTyp"

type PlanetPageProps={
    planets:PlanetType[]
}

function PlanetPage({planets}:PlanetPageProps) {
   
  return (
   <section>
    <PlanetDetails planets={planets}/>
   </section>
  )
}

export default PlanetPage
