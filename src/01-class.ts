const date = new Date();
console.log(date.toLocaleDateString());
console.log(date.getTime());
console.log(date.toISOString());
console.log(date.getHours());
console.log(date.getTime());

console.log("----------------")

const date2 = new Date(1993, 1, 12);
console.log(date2.toLocaleDateString());
console.log(date2.getTime());
console.log(date2.toISOString());
console.log(date2.getHours());
console.log(date2.getTime());

console.log("----------------")

let myVar;

class MyDate {
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