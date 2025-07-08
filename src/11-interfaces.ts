// las interfaces typan objetos, pero también pueden tipar clases y funcionan como contratos, debes tener esto
// en este caso se hace una interfaz de Driver y las clases la implementan
// no es una herencia solo define estructura básica de la clase
// las clases pueden añadir más propiedades y métodos, pero los que están la interfaz implementada
// deber ser colocadas si o si dentro de la clase

export interface Driver {
    // todo lo que está aquí dentro es public, el acceso se ve en las clases
    // Aquí no podemos utilizar encapsulamiento, por defecto todos los atributos y métodos son públicos.
    database: string;
    password: string;
    port: number;

    connect(): void;

    disconnect(): void;

    isConnected(name: string): boolean;
}

// const driver: Driver = {
//     database: 'mydb',
//     password: '123456',
//     port: 3306,
// }

class PostgresDriver implements Driver {
    constructor(
        public database: string,
        public password: string,
        public port: number,
        private host: number
    ) {
        
    }

    connect(): void {
        
    }

    disconnect(): void {
        
    }

    isConnected(name: string): boolean {
        return true;
    }
}

class OracleDriver implements Driver {
    constructor(
        public database: string,
        public password: string,
        public port: number,
    ) {

    }

    connect(): void {
        
    }

    disconnect(): void {
        
    }

    isConnected(name: string): boolean {
        return true
    }
}