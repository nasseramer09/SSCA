

type Planet={
    id:number;
    type:string;
    name:string;
    latinName:string;
    rotation:number;
    circumference:number;
    temp:Temp
    distnce:number;
    orbitalPeriod:number;
    dec:string;
    mons:[];
}

type Temp={

    day:number;
    night:number;
}