// Un clase abstracta no permite crear una instancia, la única manera es crear una clase hija que herede de la clase abstracta
// y ahí permite crear una instancia
// solo permite la herencia al ser abstract 

export abstract class Animal {  // al colocarle abstract no se permite crear objetos directamente de esa clase, solo de sus hijos
	constructor(protected name: string) {}

	move(): void {
		console.log(`${this.name} is moving`);
	}

	greeting(): string {
		return `Hello, I'm ${this.name}`;
	}

	protected doSomething(): void {
		console.log('Doing something');
	}
}

export class Dog extends Animal { // de esta clase si se pueden crear instancias
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
        this.doSomething();
    }

    move(): void {
        console.log('Moving as a dog');
        super.move(); // se llama a un método del padre
    }
}


// const animal = new Animal('elite'); // al colocarle abstract no se permite crear objetos directamente de esa clase, solo de sus hijos

const cheis = new Dog('Cheis', "Seba");
cheis.woof(2)


/*
Las clases abstractas son tan 'genericas' que no tiene sentido que sean instanciadas. Usamos la keyword abstract.
*/