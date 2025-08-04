/**
* Singleton
* Este patrón nos permite crear una única instancia de una clase.
* Esto es útil cuando queremos que una clase tenga un único punto de acceso.   
* El patron Singleton evita que se creen multiples instancias
*/
export class MyService {

    private constructor(private name: string) { } // Constructor privado para establecer el patron singleton

    getName() {
        return this.name;
    }

    private static instance: MyService | null = null; // para guardar sí existe una instancia

    static create(name: string) {
        if (MyService.instance === null) { // verifica sí existe, sí no existe, la crea
            console.log('Debería entrar una vez')
            MyService.instance = new MyService(name); // puedo llamar al constructor desde aquí
        }
        return MyService.instance; // sí existe, retorna la que ya estaba
    }
}

// const myService1 = new MyService('MyServiceInstance 1');  // no se puede crear una instancia de esta clase porque el constructor es privado
const myService1 = MyService.create('MyServiceInstance 1');
console.log(myService1.getName());  // sí se puede llamar al método getName() porque es público, retorna MyServiceInstance 1

const myService2 = MyService.create('MyServiceInstance 2');
console.log(myService2.getName());  // retorna MyServiceInstance 1, porque al ya existir una instancia, devuelve la instancia que ya existe

const myService3 = MyService.create('MyServiceInstance 3');
console.log(myService3.getName());  // retorna MyServiceInstance 1

console.log(myService1 === myService2);  // true, porque ambas instancias son la misma
console.log(myService1 === myService3);  // true
console.log(myService2 === myService3);  // true
