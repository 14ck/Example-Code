export interface Clock {
    id:number;
    name:string;
    component:string;
}

export const clocks:Clock[] = [
    {
        id:1,
        name:"EEOC Left",
        component:"ClockDisplay_1"
    },
    {
        id:2,
        name:"EEOC Right",
        component:"ClockDisplay_2"
    },
    {
        id:3,
        name:"Conference Front",
        component:"ClockDisplay_3"
    },
    {
        id:4,
        name:"Conference Back",
        component:"ClockDisplay_4"
    }
]