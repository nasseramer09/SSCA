import { useParams } from "react-router-dom";
import PlanetType from "../models/planetTyp"
import"./styles/planetDetails.css"

type PlanetDetailsProps={
   planets:PlanetType[];
  
  }
 

function PlanetDetails({planets}:PlanetDetailsProps) {
  const {planetId} = useParams<{planetId:string}>();
    
  if(!planetId){
      return <div>Planet Id not found </div>
  }
const planet=planets.find((p: { id: number; })=>p.id===parseInt(planetId));

if(!planet){
      return <div>Planet not found </div>
  }
  return (
    <article className="detailsWraper">
    <h1>{planet.name}</h1>
    <p>{planet.desc}</p>
   
    </article>
  )
}

export default PlanetDetails
