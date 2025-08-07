import { faker } from '@faker-js/faker';

import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';

export class ProductMemoryService implements ProductService {
	private arrayProducts: Product[] = []; // variable privada para guardar en memoria

	create(data: CreateProductDto): Product {
		const newProduct = {				// esparce los datos enviados por el usuario y añade los datos que debería generar el backend
			...data,
			id: faker.number.int(),
			creationAt: faker.date.recent(),
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

	add(product: Product): Product {
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

	findOne(id: Product['id']): Product | undefined {
		return this.arrayProducts.find((item) => item.id === id);
	}

	getAll(): Product[] {
		return this.arrayProducts;
	}
}
