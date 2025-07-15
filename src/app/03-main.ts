import { ProductHttpService } from './services/product-http.service';

const productService = new ProductHttpService();

(async () => {
	try {
		console.log('--- getAll ---');
		const products = await productService.getAll();
		console.log(products.length);
		console.log(products.map((item) => item.price));

		console.log('--- update ---');
		const productId = products[0].id;
		console.log(products[0]);
		await productService.update(productId, {
			price: 100000,
			title: 'New Title Premium',
			description: 'New Description Premium',
			images: [
				'https://placehold.co/600x400',
				'https://placehold.co/601x401',
			],
		});

		console.log('--- findOne ---');
		const product = await productService.findOne(productId);
		console.log(product);
        
	} catch (error) {
		console.log(error);
	}
})();
