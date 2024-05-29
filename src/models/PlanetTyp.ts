

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
    mons:[];
}

type Temp={

    day:number;
    night:number;
}

export default PlanetType;