import { useState } from 'react';
import PlanetType from '../models/planetTyp';
import   './styles/planetNav.css'
type NavPageProps={

  planets:PlanetType[];

}

function PlanetNav({planets}:NavPageProps) {

  const [onHover, setOnHover]=useState<string>();
  
  const mouseOnEnter =(planetName:string)=>{
    setOnHover(planetName)
  }

  const mouseOnNotEnter =()=>{
    setOnHover('Solaris Space Center')
  }


  return (
   <nav className="planetNav">
    <div className="navbuttons">
    <ul className="buttons">
        <li> Home page </li>
        <li>Favorite Planets </li>
      </ul>
    </div>
     <h1 className="nameDsiplayer">{onHover||'Solaris Space Center'} </h1>

<div className="planetWraper">
      {planets.map(planet=>(
<div
    key={planet.id}
    className={planet.name.toLowerCase()}
    onMouseEnter={()=>mouseOnEnter(planet.name)}
    onMouseLeave={mouseOnNotEnter}
>
</div>

      ))}

</div>
   </nav>
  )
}

export default PlanetNav
