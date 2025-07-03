/* 
get day(): number {
        // puede ir más código
        return this._day;
    }
set month(newValue: number) {
        this._month = newValue;
    }

Sí los getter y los setter son así de simple, lo mejor es dejar public la propiedad, ya que es más simple y se ocupa menos código.
Pero como en este caso a los meses no se le puede asignar un valor mayor a 12, entonces ahí conviene usa un setter para validar que el 
valor sea válido antes de asignar
*/

export class MyDate {
	// define y asigna
	constructor(
		public year: number = 1993, // la asignación se hace sí y solo sí se define el acceso explícitamente
		private _month: number = 7, // la asignación se hace sí y solo sí se define el acceso explícitamente
		private _day: number = 9 // el _ es una convención para indicar que es una propiedad privada
	) {}

	printFormat(): string {
		const month = this.addPadding(this._month);
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
			this._month += amount;
		} else {
			this.year += amount;
		}
	}

	get day(): number {
		// puede ir más código
		return this._day;
	}

	get month(): number {
		return this._month;
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
	get isLeapYear(): boolean {
		// leap year = año bisiesto
		if (this.year % 400 === 0) return true;
		if (this.year % 100 === 0) return false;
		return this.year % 4 === 0;
	}

	// Los setters no retornan nada, : void 
    //son simplemente para asignar valores
	set month(newValue: number) {
		if (newValue >= 1 && newValue <= 12) {
            this._month = newValue;
		} else {
            throw new Error('Mes fuera de rango');
        }
	}
}

const myDate = new MyDate(1993, 10, 10);
console.log('(10/10/1993) => ', myDate.printFormat());

myDate.month = 4;
console.log("myDate.month = 4 => ", myDate.month);

myDate.month = 78;
console.log("myDate.month = 78 => ", myDate.month);
