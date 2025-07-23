import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http-2.service";

export class ProductHttpService extends BaseHttpService<Product> {
    otroRequest() {
        this.url;
    }
}