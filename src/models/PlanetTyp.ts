

type PlanetType={
    id:number;
    type:string;
    name:string;
    latinName:string;
    rotation:number;
    circumference:number;
    temp:Temp
    distance:number;
    orbitalPeriod:number;
    desc:string;
    moons:string [];
    color:string;
}

type Temp={

    day:number;
    night:number;
}

export default PlanetType;