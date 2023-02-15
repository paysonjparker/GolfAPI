export const productsQueries = {
    readProducts: `
        SELECT 
            productId AS productId, name AS name, description AS description,
            brand AS brand, price AS price
        FROM golf_inventory.products;
    `,
    readProductsByNameSearch: `
        SELECT 
            productId AS productId, name AS name, description AS description,
            brand AS brand, price AS price
        FROM golf_inventory.products
        WHERE golf_inventory.products.name LIKE ?;
    `,
    readProductsByDescriptionSearch: `
        SELECT 
            productId AS productId, name AS name, description AS description,
            brand AS brand, price AS price
        FROM golf_inventory.products
        WHERE golf_inventory.products.description LIKE ?;
    `,
    readProductsByProductId: `
        SELECT 
            productId AS productId, name AS name, description AS description,
            brand AS brand, price AS price
        FROM golf_inventory.products
        WHERE golf_inventory.products.productId = ?;
    `,
    createProduct: `
        INSERT INTO golf_inventory.products(name, description, brand, price) VALUES(?,?,?,?);
    `,
    updateProduct: `
        UPDATE golf_inventory.products
        SET name = ?, description = ?, brand = ?, price = ?
        WHERE productId = ?;
    `,
    deleteProduct: `
        DELETE FROM golf_inventory.products
        WHERE productId = ?;
    `,
}