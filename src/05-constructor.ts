export class MyDate {
    /*
    year: number;
    month: number;
    private day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    Se puede abreviar de la siguiente manera, la cual tipa las variables en el constructor y la asigna directamente
    */

    // define y asigna
    constructor(
        public year: number = 1993, // la asignación se hace sí y solo sí se define el acceso explícitamente 
        public month: number = 7,  // la asignación se hace sí y solo sí se define el acceso explícitamente
        private day: number = 9 // la asignación se hace sí y solo sí se define el acceso explícitamente
    ) {}

    printFormat(): string {
        const month = this.addPadding(this.month);
        const day = this.addPadding(this.day);
        return `${day}/${month}/${this.year}`;
    }

    private addPadding(value: number): string {
        return value < 10 ? `0${value}` : `${value}`;
    }

    add(amount: number, type: 'days' | 'months' | 'years'): void {
        if (type === 'days') {
            this.day += amount;
        } else if (type === 'months') {
            this.month += amount;
        } else {
            this.year += amount;
        }
    }

    getDay(): number {
        return this.day;
    }

    getMonth(): number {
        return this.month;
    }

    getYear(): number {
        return this.year;
    }
}

const myDate = new MyDate(1993, 10, 10);
console.log("getDay() => ", myDate.getDay());
console.log("(10/10/1993) => ", myDate.printFormat());

const myDate2 = new MyDate();
console.log("() => ", myDate2.printFormat());

const myDate3 = new MyDate(2022);
console.log("(2022) => ", myDate3.printFormat());

const myDate4 = new MyDate(2022, 3);
console.log("(2022, 3) => ", myDate4.printFormat());

const myDate5 = new MyDate(3);  // Se asigna el número al primer parámetro, en este caso el año
console.log("(3) => ", myDate5.printFormat());

const myDate6 = new MyDate(3, 5);  // Se asignan los números al primer y segundo parámetro, en este caso el año y el mes
console.log("(3, 5) => ", myDate6.printFormat());

const myDate7 = new MyDate(undefined, undefined, 4);  // Para asignar un valor al último parámetros, el día, se debe usar undefined en los parámetros anteriores
console.log("(undefined, undefined, 4) => ", myDate7.printFormat());
