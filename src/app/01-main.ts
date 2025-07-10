import axios from "axios";

import { Product } from "./models/product.model";

let anyVar: any = 12;
let barVar: boolean = anyVar;

(async () => {
    // async function getProducts(): Promise<Product[]> { // tipado hacia afuera
    async function getProducts() {
        // const rta = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products'); // se puede tipar sí la librería lo permite
        // es lo ideal puesto que internamente se puede trabajar con el valor
        const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
        const data = rta.data as Product[]; // le decimos a TypeScript que el tipo de data es Product[]
        // forzar el tipado con el "as" para poder trabajar internamente con el valor
        return data;
    }

    const products = await getProducts();
    console.log(products.map((item) => `${item.id} - ${item.title} - ${item.price}`));
})();