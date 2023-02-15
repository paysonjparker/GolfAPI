import { Router } from 'express';
import { getProducts } from './products.controller';
import * as ProductsController from './products.controller';

const router = Router();
router
    .route('/products')
    .get(ProductsController.readProducts);
router
    .route('/products/search/name/:productName')
    .get(ProductsController.readProductsByNameSearch);
router
    .route('/products/search/description/:productDescription')
    .get(ProductsController.readProductsByDescriptionSearch);
router
    .route('/products')
    .get(ProductsController.createProduct);
router
    .route('/products')
    .get(ProductsController.updateProduct);
router
    .route('/products/:productId')
    .get(ProductsController.deleteProduct);

export default router;