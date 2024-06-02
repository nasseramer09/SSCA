import { useParams } from "react-router-dom";
import PlanetType from "../models/planetTyp"
import"./styles/planetDetails.css"
import { useEffect, useState } from "react";
import BackgroundColor from "./BackgroundColor";
import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";


type PlanetDetailsProps={
   planets:PlanetType[];
   planetFavoList:PlanetType[];
   togglePlanetFavoList:(planet:PlanetType)=>void;
  
  }

function PlanetDetails({planets, planetFavoList,togglePlanetFavoList}:PlanetDetailsProps) {
  const {planetId} = useParams<{planetId:string}>();
  const [planet, setPlanet]=useState<PlanetType>();
  const [backgroundColor, setBackGroundColor]=useState<string>("");
    useEffect(()=>{
     
      if(planetId){
          const foundPlanet= planets.find((p)=>p.id===parseInt(planetId));
          setPlanet(foundPlanet);
          
     }
     },[planetId, planets]);

     useEffect(()=>{
      if(backgroundColor){
        document.documentElement.style.background=backgroundColor;
      }
      return ()=>{
        document.documentElement.style.background="";
      }
     },[backgroundColor]);
  
    if(!planet){
        return <div>Planet not found </div>
    }

    const isFavorite=planetFavoList.some((p)=>p.id===planet.id)
    const onFavoriteButtonClick=()=>{
      togglePlanetFavoList(planet)
    }
  return (
    <> 
    
    <BackgroundColor planet={planet} onColorChange={setBackGroundColor}/>
    <Link className="homeLink" to={"/"}><ArrowLeft size={32} /></Link>
    
    <article className="detailsWraper" style={{background:backgroundColor}}>
    <h1 className="planetName" style={{background:backgroundColor}}>{planet.name}</h1>
    
   <div className="infoWraper">
   <div className="leftInfo">

<h4>Detaljer</h4>
<ul>
 <li> Typ: {planet.type } </li>
 <li>Omkrets: {planet.circumference}</li>
 <li>Latinska namn: {planet.latinName}</li>
 <li>Distans från solen: {planet.distance} </li>
 <li>Omloppstid: {planet.orbitalPeriod} </li>
 <li>Dagstemperatur: {planet.temp.day} </li>
 <li>Nattemperatur: {planet.temp.night} </li>
</ul>
</div>
<div className="rightInfo">
  <p>
<h4>Månar</h4>


{planet.moons.length > 0 ? (
 planet.moons.length ===1 ? (
 "Planeten har 1 måne"
 ):
 (
 `Planeten har ${planet.moons.length} månar`)
 ):
 (
 "planeten har inga månar"
 )
}

  </p>
</div>
   </div>

      
    
      
      <hr />
      <div className="planetDesc">
        {planet.desc}
      </div>
      <button className="addToFavo" onClick={onFavoriteButtonClick}>
              <i className='material-icons'>favorite</i> 
              <br />
              {isFavorite? `${planet.name} har lagts till favoriter `: "Favoretisera "}
      </button>

    
  
   
    </article>
    </>
  );
}

export default PlanetDetails
