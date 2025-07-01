// Public: Las propiedades y métodos son públicos por defecto, desde fuera se puede acceder y modificar
// readonly: Las propiedades son solo lectura, ya sea desde fuera o desde dentro no se puede modificar ni por sus propios métodos
// Private: Las propiedades y métodos son privados, desde fuera no se puede acceder ni modificar, no se puede acceder desde las clases heredadas, solo donde fue creada
// Protected: las propiedades y métodos son protegidos, desde fuera no se puede acceder ni modificar, desde dentro si se puede acceder, se puede acceder desde las clases heredadas

export class MyDate {
    year: number;
    month: number;
    private day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    printFormat(): string {
        const month = this.addPadding(this.month);
        const day = this.addPadding(this.day);
        return `${day}/${month}/${this.year}`;
    }

    private addPadding(value: number): string { // por Private no se puede acceder desde fuera
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
// console.log(myDate.day); // al ser Private no se puede acceder desde fuera
console.log(myDate.getDay());
// myDate.day = 12;
// console.log(myDate.day);

// console.log(myDate.addPadding(1));
console.log(myDate.printFormat());
