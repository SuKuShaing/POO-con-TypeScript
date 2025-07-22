import { Dog } from "./09-protected"

/*
function getValue(value: number | string) {
    return value;
}

getValue(12).toFixed(); // lanza error porque no sabe sí es number o string
getValue("12").toFixed();
getValue([]).toFixed();


function getValue(value: unknown) {
    return value;
}

getValue(12).toFixed();
getValue("12").toFixed();
getValue([]).toFixed();
// Requieren validaciones para poder ser usados

*/

function getValue<myType>(value: myType) {
    return value;
}


getValue(12).toFixed(); // aquí funciona puesto que Ts infiere el tipo
getValue("12").toLocaleLowerCase();
getValue([]).forEach;
getValue<number>(12).toFixed(); // aquí funciona puesto que le decimos el tipo
getValue<string>("12").toLocaleLowerCase();
getValue<number[]>([1,2,3]).forEach;
const fifi = new Dog('fifi', 'Seba')
getValue<Dog>(fifi).greeting();

// Promise<boolean>;
// axios.get<string[]>();