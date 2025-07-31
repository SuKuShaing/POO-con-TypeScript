// Public: Las propiedades y métodos son públicos por defecto, desde fuera se puede acceder y modificar
// readonly: Las propiedades son solo lectura, ya sea desde fuera o desde dentro no se puede modificar ni por sus propios métodos
// Private: Las propiedades y métodos son privados, desde fuera no se puede acceder ni modificar, desde dentro se puede modificar solo en la clase en la que fue creada, no se puede acceder desde las clases heredadas, solo donde fue creada
// Protected: las propiedades y métodos son protegidos, desde fuera no se puede acceder ni modificar, desde dentro si se puede acceder, se puede acceder desde las clases heredadas. Es como un privado con herencia


export class Animal {
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

const fifi = new Animal('fifi');
fifi.move();                        // fifi is moving
console.log(fifi.greeting());       // Hello, I'm fifi

export class Dog extends Animal {

    constructor(                    // sí se desea añadir una nueva propiedad (owner): se debe colocar las propiedades del padre y luego las propiedades del hijo
        name: string,               // no se le coloca el acceso porque eso lo hace el constructor del padre
        public owner: string,
    ) {
        super(name);                // y enviar las propiedades del padre al constructor del padre
    }

    woof(times: number): void {     // en la herencia permite añadir métodos
        for (let i = 0; i < times; i++) {
            console.log(`${this.name}: woof!`);
        }
        this.doSomething();          // se llama a un método del padre con this puesto que no está sobreescrito dicho método
    }

    move(): void {                  // se sobreescribe el método del padre, pero no desaparece el método del padre
        console.log('Moving as a dog');
        super.move();               // se llama a un método del padre con super
        // this.move();             // ejecuta este mismo método haciendo una recursión infinita
    }
}

const cheis = new Dog('cheis', "Seba");
cheis.move();                        // Moving as a dog -> cheis is moving
console.log(cheis.greeting());       // Hello, I'm cheis
cheis.woof(1);                       // cheis: woof! -> Doing something
console.log('Owner: ', cheis.owner); // Owner:  Seba
// cheis.name = 'Cambié el nombre';  // no se puede porque es protected
cheis.woof(1);                       // cheis: woof! -> Doing something
cheis.move();                        // Moving as a dog -> cheis is moving