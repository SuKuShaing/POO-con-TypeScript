import axios from 'axios';
import { Category } from './../models/category';
import { Product } from '../models/product.model';

export class BaseHttpService<TypeClass> {
	// data: TypeClass[] = [];

	constructor(private url: string) {}

	async getAll() {
		const { data } = await axios.get<TypeClass[]>(this.url);
		return data;
	}
}

// const service = new BaseHttpService<string>();
// // service.data
// service.getAll()

// const service1 = new BaseHttpService<number>();
// // service1.data
// service1.getAll()

(async () => {
	const productsService = new BaseHttpService<Product>('https://api.escuelajs.co/api/v1/products');
	const rta = await productsService.getAll();
	console.log("products:", rta.length);

	const categoryService = new BaseHttpService<Category>('https://api.escuelajs.co/api/v1/categories');
	const rta2 = await categoryService.getAll();
	console.log("categories:", rta2.length);
})();
