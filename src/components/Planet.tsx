
import { useState } from "react";
import PlanetType from "../models/planetTyp";
import "./styles/planet.css"
import { Link } from "react-router-dom";
  type PlanetProps={

    planet:PlanetType[];
  
  }
  
  function Planet({planet}:PlanetProps) {


    const [onHover, setOnHover]=useState<string>();
  
    const mouseOnEnter =(planetName:string)=>{
      setOnHover(planetName)
    }
  
    const mouseOnNotEnter =()=>{
      setOnHover('Solaris Space Center')
    }
  return (
  <section className="planets">
      <h1 className="nameDsiplayer">{onHover||'Solaris Space Center'} </h1>

<div className="planetWraper">
      {planet.map(planet=>(
        <Link to={'/planet/${planet.id}'} key={planet.id}>
<div
    key={planet.id}
    className={planet.name.toLowerCase()}
    onMouseEnter={()=>mouseOnEnter(planet.name)}
    onMouseLeave={mouseOnNotEnter}
>
</div>
</Link>
      ))}

</div>
  </section>
  )
}

export default Planet
