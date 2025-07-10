import { Category } from '../models/category';
import { Product } from '../models/product.model';

export interface CreateProductDto
	extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
	categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
