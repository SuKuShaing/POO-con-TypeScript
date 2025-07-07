console.log("Math.PI: ", Math.PI);
console.log("Math.max: ", Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

class MyMath {
    static readonly PI: number = 3.14;

    static max(...numbers: number[]): number {
        console.log("Números enviados: ", numbers);
        return numbers.reduce((max, item) => item > max ? item : max);
    }
}

// Al ser Static no se necesita esto:
// const myMath = new MyMath();
// console.log(myMath.PI);

console.log("MyMath.PI: ", MyMath.PI);

// Math.PI = 2.99; No lo permite

// MyMath.PI = 2.99; No lo permite al ser readonly

console.log("MyMath.max: ", MyMath.max(1, 2, 3, 4, 5, 10, 6, 7, 8, 9, 10));

const numeros = [2, 4, 6, 8, 10];
console.log("MyMath.max de numeros: ", MyMath.max(...numeros));

const negativos = [-1, -2, -3, -4, -5, -10, -6, -7, -8, -9, -10];
console.log("MyMath.max de negativos: ", MyMath.max(...negativos));