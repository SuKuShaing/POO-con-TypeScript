import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
    title: 'Product 1',
    price: 10,
    description: 'Description',
    slug: 'product-1',
    categoryId: 1,
    images: ['image1', 'image2'],
});

const products = productService.getAll();
console.log(products);

const productId = products[0].id;

productService.update(productId, {
    title: 'Product 1 Premium',
    price: 100,
})

const rta = productService.findOne(productId);
console.log(rta);