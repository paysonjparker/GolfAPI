import { Request, RequestHandler, response, Response } from 'express';
import { Product } from './products.model';
import * as ProductDao from './products.dao';
import { OkPacket } from 'mysql';

const PRODUCTS = [
    { productId: 1, name: 'M1 Driver', description: '2016 Taylormade M1. 9.5 degree. Stiff shaft.', brand: 'TaylorMade', price: 400 },
    { productId: 2, name: 'TS1 Driver', description: '2022 Titleist TS1 driver. 10.5 degree. Extra-stiff shaft.', brand: 'Titleist', price: 600 },
];

export const getProducts = (req: Request, res: Response) => {
    res.send(PRODUCTS);
};

export const readProducts: RequestHandler =async (req:Request, res: Response) => {
    try {
        let products;
        let productId = parseInt(req.query.productId as string);

        console.log('productId', productId);
        if(Number.isNaN(productId)){
            products = await ProductDao.readProducts();
        } else {
            products = await ProductDao.readProductsById(productId);
        }
        
        res.status(200).json(
            products
        );
    } catch (error) {
        console.error('[products.controller][readProducts][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching products.'
        });
    }
}

export const readProductsByNameSearch: RequestHandler =async (req:Request, res: Response) => {
    try{
        const products = await ProductDao.readProductsByNameSearch('%' + req.params.productName + '%');

        res.status(200).json(
            products
        );
    } catch(error){
        console.error('[products.controller][readProducts][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching products.'
        });
    }
}

export const readProductsByDescriptionSearch: RequestHandler =async (req:Request, res: Response) => {
    try{
        const products = await ProductDao.readProductsByDescriptionSearch('%' + req.params.productDescription + '%');

        res.status(200).json(
            products
        );
    } catch(error){
        console.error('[products.controller][readProducts][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching products.'
        });
    }
}

export const createProduct: RequestHandler =async (req:Request, res: Response) => {
    try{
        const okPacket: OkPacket = await ProductDao.createProduct(req.body);

        console.log('req.body', req.body);
        console.log('product', okPacket);
        
        res.status(200).json(
            okPacket
        );
    } catch(error) {
        console.error('[products.controller][createProduct][Error] ', error);
        res.status(500).json({
            message: 'There was an error when creating product.'
        });
    }
}

export const updateProduct: RequestHandler =async (req:Request, res: Response) => {
    try{
        const okPacket: OkPacket = await ProductDao.updateProduct(req.body);

        console.log('req.body', req.body);
        console.log('product', okPacket);
        
        res.status(200).json(
            okPacket
        );
    } catch(error) {
        console.error('[products.controller][updateProduct][Error] ', error);
        res.status(500).json({
            message: 'There was an error when updating product.'
        });
    }
}

export const deleteProduct: RequestHandler =async (req:Request, res: Response) => {
    try{
        let productId = parseInt(req.params.productId as string);

        console.log('productId', productId);
        if(!Number.isNaN(productId)) {
            const response = await ProductDao.deleteProduct(productId);
        
            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for productId");
        }
    } catch(error) {
        console.error('[products.controller][deleteProduct][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting product.'
        });
    }
}