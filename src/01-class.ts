const date = new Date();
console.log(date.toLocaleDateString()); // 30-07-2025
console.log(date.getTime());            // 1753901328544
console.log(date.toISOString());        // 2025-07-30T18:48:48.544Z
console.log(date.getHours());           // 14
console.log(date.getTime());            // 1753901328544

console.log("----------------")

const date2 = new Date(1993, 1, 12);
console.log(date2.toLocaleDateString());    // 12-02-1993
console.log(date2.getTime());               // 729486000000
console.log(date2.toISOString());           // 1993-02-12T03:00:00.000Z
console.log(date2.getHours());              // 0
console.log(date2.getTime());               // 729486000000

console.log("----------------")

let myVar;

export class MyDate {
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
}

const myDate = new MyDate(1993, 4, 1);
console.log(myDate);