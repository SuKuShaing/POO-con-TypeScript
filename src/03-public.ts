// Public: Las propiedades y métodos son públicos por defecto, desde fuera se puede acceder y modificar
// readonly: Las propiedades son solo lectura, ya sea desde fuera o desde dentro no se puede modificar ni por sus propios métodos
// Private: en el siguiente archivo 04
// Protected: en el siguiente archivo 09

export class MyDate {
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    public printFormat(): string {
        const month = this.month < 10 ? `0${this.month}` : this.month;
        const day = this.day < 10 ? `0${this.day}` : this.day;
        return `${day}/${month}/${this.year}`;
    }

    public add(amount: number, type: 'days' | 'months' | 'years'): void {
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
console.log(myDate.day);    // 1
myDate.day = 12;            // Se puede modificar porque es publico
console.log(myDate.day);    // 12

