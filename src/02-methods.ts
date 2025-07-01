export class MyDate {
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    printFormat(): string {
        const month = this.month < 10 ? `0${this.month}` : this.month;
        const day = this.day < 10 ? `0${this.day}` : this.day;
        return `${day}/${month}/${this.year}`;
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
}

const myDate = new MyDate(1993, 5, 1);
console.log(myDate.printFormat());
myDate.add(5, 'days');
console.log(myDate.printFormat());
myDate.add(1, 'months');
console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);
