export class Animal {
	constructor(public name: string) {}

	move(): void {
		console.log(`${this.name} is moving}`);
	}

	greeting(): string {
		return `Hello, I'm ${this.name}`;
	}
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

export class Dog extends Animal {

    constructor( // sí se desea añadir una nueva propiedad (owner): se debe colocar las propiedades del padre y luego las propiedades del hijo
        name: string, // no se le coloca el acceso porque eso lo hace el constructor del padre
        public owner: string,
    ) {
        super(name); // y enviar las propiedades del padre al constructor del padre
    }

    woof(times: number): void {  // en la herencia permite añadir métodos
        for (let i = 0; i < times; i++) {
            console.log(`${this.name}: woof!`);
        }
    }
}

const cheis = new Dog('cheis', "Seba");
cheis.move();
console.log(cheis.greeting());
cheis.woof(3);
console.log('Owner: ', cheis.owner);