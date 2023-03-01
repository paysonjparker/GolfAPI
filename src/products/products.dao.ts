import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Product } from './products.model';
import { productsQueries } from './products.queries';

export const readProducts =async () => {
    return execute<Product[]>(productsQueries.readProducts, []);
};

export const readProductsByNameSearch =async (productName:string) => {
    console.log('search param', productName);
    return execute<Product[]>(productsQueries.readProductsByNameSearch, [productName]);
};

export const readProductsByDescriptionSearch =async (productDescription:string) => {
    console.log('search param', productDescription);
    return execute<Product[]>(productsQueries.readProductsByDescriptionSearch, [productDescription]);
};

export const readProductsById =async (productId:number) => {
    console.log('search param', productId);
    return execute<Product[]>(productsQueries.readProductsByProductId, [productId]);
};

export const createProduct =async (product:Product) => {
    return execute<OkPacket>(productsQueries.createProduct, 
        [product.name, product.description, product.brand, product.price]);
};

export const updateProduct =async (product:Product) => {
    return execute<OkPacket>(productsQueries.updateProduct,
        [product.name, product.description, product.brand, product.price, product.productId]);
};

export const deleteProduct =async (productId:number) => {
    return execute<OkPacket>(productsQueries.deleteProduct, [productId]);
};