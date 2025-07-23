import axios from 'axios';
import { Category } from '../models/category';
import { Product } from '../models/product.model';
import { UpdateProductDto } from '../dtos/product.dto';

export class BaseHttpService<TypeClass> {
	// data: TypeClass[] = [];

	constructor(private url: string) {}

	async getAll() {
		const { data } = await axios.get<TypeClass[]>(this.url);
		return data;
	}

	async update<ID, DTO>(id: ID, changes: DTO) {
		const array: TypeClass[] = [];
		const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
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
	productsService.update<Product['id'], UpdateProductDto>(1, {
		title: 'New title',
	});
	
	const categoryService = new BaseHttpService<Category>('https://api.escuelajs.co/api/v1/categories');
	const rta2 = await categoryService.getAll();
	console.log("categories:", rta2.length);
})();
