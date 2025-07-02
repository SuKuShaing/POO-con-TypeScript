export class MyDate {

    // define y asigna
    constructor(
        public year: number = 1993, // la asignación se hace sí y solo sí se define el acceso explícitamente 
        public month: number = 7,  // la asignación se hace sí y solo sí se define el acceso explícitamente
        private _day: number = 9 // el _ es una convención para indicar que es una propiedad privada
    ) {}

    printFormat(): string {
        const month = this.addPadding(this.month);
        const day = this.addPadding(this._day);
        return `${day}/${month}/${this.year}`;
    }

    private addPadding(value: number): string {
        return value < 10 ? `0${value}` : `${value}`;
    }

    add(amount: number, type: 'days' | 'months' | 'years'): void {
        if (type === 'days') {
            this._day += amount;
        } else if (type === 'months') {
            this.month += amount;
        } else {
            this.year += amount;
        }
    }

    get day(): number {
        // puede ir más código
        return this._day;
    }

    getMonth(): number {
        return this.month;
    }

    getYear(): number {
        return this.year;
    }

    // Como método
    // isLeapYear(): boolean { // leap year = año bisiesto
    //     // code
    //     return true;
    // }

    // Como getter
    // Los getters no aceptan parámetros a diferencia de los métodos
    // Los getters deben retornar algo
    get isLeapYear(): boolean { // leap year = año bisiesto
        if (this.year % 400 === 0) return true;
        if (this.year % 100 === 0) return false;
        return this.year % 4 === 0;
    }
}

const myDate = new MyDate(1993, 10, 10);
// console.log("getDay() => ", myDate.getDay());
console.log("(10/10/1993) => ", myDate.printFormat());

// myDate.day = 12; // Error: La propiedad 'day' es privada y solo se puede acceder desde dentro de la clase 'MyDate'.
myDate.day; // Podemos acceder a la propiedad privada a través del getter
console.log("🚀 ~ myDate.day:", myDate.day) // se puede acceder
// myDate.day = 20; // no podemos modificar la propiedad privada a través del getter

// myDate.isLeapYear(); // es un método
myDate.isLeapYear; // Podemos acceder al método como si fuera una propiedad

console.log("🚀 ~ myDate.isLeapYear:", myDate.isLeapYear) // se puede acceder

const myDate2 = new MyDate(2024, 10, 10);
console.log("🚀 ~ myDate2.isLeapYear:", myDate2.isLeapYear);

const myDate3 = new MyDate(2023, 10, 10);
console.log("🚀 ~ myDate3.isLeapYear:", myDate3.isLeapYear);

const myDate4 = new MyDate(2022, 10, 10);
console.log("🚀 ~ myDate4.isLeapYear:", myDate4.isLeapYear);
