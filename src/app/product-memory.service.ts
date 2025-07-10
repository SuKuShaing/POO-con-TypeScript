import { faker } from '@faker-js/faker';

import { Product } from './models/product.model';
import { CreateProductDto, UpdateProductDto } from './dtos/product.dto';

export class ProductMemoryService {
	private arrayProducts: Product[] = [];

	create(data: CreateProductDto): Product {
		const newProduct = {
			...data,
			id: faker.number.int(),
			createdAt: faker.date.recent(),
			updatedAt: faker.date.recent(),
			category: {
				id: faker.number.int(),
				name: faker.commerce.department(),
				slug: faker.commerce.department(),
				image: faker.image.url(),
				creationAt: faker.date.recent(),
				updatedAt: faker.date.recent(),
			},
		};
		return this.add(newProduct);
	};

	add(product: Product) {
		this.arrayProducts.push(product);
		return product;
	};

	update(id: Product['id'], changes: UpdateProductDto): Product {
		const index = this.arrayProducts.findIndex((item) => item.id === id);
		const prevData = this.arrayProducts[index];
		this.arrayProducts[index] = {
			...prevData,
			...changes,
		};
		return this.arrayProducts[index];
	};

	findOne(id: Product['id']) {
		return this.arrayProducts.find((item) => item.id === id);
	}
}
