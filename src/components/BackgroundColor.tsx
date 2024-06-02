import { useEffect } from "react";
import PlanetType from "../models/planetTyp"

type BackgroundColorProps={
    planet:PlanetType;
    onColorChange:(color:string)=>void;
}

function BackgroundColor({planet, onColorChange}:BackgroundColorProps) {

    useEffect(()=>{
        let gradientColor="";

        switch(planet.name){

            case "Solen": gradientColor="#FFD029";
            break;

            case 'Merkurius': gradientColor="#8C8B85";
            break;

            case 'Venus': gradientColor="#E7CCCB";
            break;

            case 'Jorden': gradientColor="#428ED5";
            break;

            case 'Mars': gradientColor="#EF5F5E";
            break;

            case 'Jupiter': gradientColor="#E29468";
            break;

            case 'Saturnus': gradientColor="#C7AA72";
            break;

            case 'Uranus': gradientColor="#C9D4F1";
            break;

            case 'Neptunus': gradientColor="#7A91A7";
            break;

            default: gradientColor=( '#131135');
            break;
        }
     
       onColorChange(gradientColor);

        return ()=>{
           
            onColorChange("")
        }
    }, [planet, onColorChange])
  return null;
}

export default BackgroundColor
