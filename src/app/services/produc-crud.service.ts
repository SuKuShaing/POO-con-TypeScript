import { UpdateProductDto } from "../dtos/product.dto"
import { Product } from "../models/product.model"
import { BaseHttpService } from "./base-http-2.service"

export class ProductCrudService {
    private url = 'https://api.escuelajs.co/api/v1/products'
    private http = new BaseHttpService<Product>(this.url)

    async update(id: Product['id'], dto: UpdateProductDto) {
        // permisos
        // lógica
        return this.http.update(id, dto)
    }
}