// Interface Driver, para tipar los servicios independiente de que sean HTTP o Memory, o lo que vengan en un futuro, sql
// dto: data transfer object, es un objeto o interface que se usa para transferir datos entre capas

import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { Product } from "./product.model";

export interface ProductService {
    getAll(): Product[] | Promise<Product[]>;
    update(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product>;
    create(dto: CreateProductDto): Product | Promise<Product>;
    findOne(id: Product['id']): Product | Promise<Product | undefined> | undefined;
}
