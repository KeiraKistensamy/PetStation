import { connection as db } from '../config/index.js'

class Products {
    fetchProducts(req, res) {
        try {
            const strQry = `
            SELECT *
            FROM Products;
            `
            db.query(strQry, (err, results) => {
                if (err) {
                    // console.error('Error details:', err); // Log the exact MySQL error
                    // throw new Error('Unable to fetch all products');
                    throw err
                } else (
                res.json({  
                    status: res.statusCode,
                    results
                }));
            });
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            });
        }
    }

    recentProducts(req, res) {
        try {
            const strQry = `
            SELECT *
            FROM Products
            ORDER BY productID DESC
            LIMIT 5;
            `
            db.query(strQry, (err, results) => {
                if (err) {
                    console.error('Error details:', err); // Log the exact MySQL error
                    throw new Error('Unable to retrieve recent products');
                }
                res.json({
                    status: res.statusCode,
                    results
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            });
        }
    }

    fetchProduct(req, res) {
        try {
            const strQry = `
            SELECT *
            FROM Products
            WHERE productID = ?;
            `
            db.query(strQry, [req.params.id], (err, result) => {
                if (err) {
                    console.error('Error details:', err); // Log the exact MySQL error
                    throw new Error('Unable to retrieve a product');
                }
                res.json({
                    status: res.statusCode,
                    result: result[0]
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            });
        }
    }

    addProduct(req, res) {
        try {
            const strQry = `
            INSERT INTO Products
            SET ?
            `
            db.query(strQry, [req.body], (err) => {
                if (err) {
                    console.error('Error details:', err); // Log the exact MySQL error
                    throw new Error('Unable to add a new product');
                }
                res.json({
                    status: res.statusCode,
                    msg: 'Product was added'
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            });
        }
    }

    updateProduct(req, res) {
        try {
            const strQry = `
            UPDATE Products
            SET ?
            WHERE productID = ?;
            `
            db.query(strQry, [req.body, req.params.id], (err) => {
                if (err) {
                    console.error('Error details:', err); // Log the exact MySQL error
                    throw new Error('Unable to update a product');
                }
                res.json({
                    status: res.statusCode,
                    msg: 'Product was updated.'
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            });
        }
    }

    deleteProduct(req, res) {
        try{
            const strQry = `
            DELETE FROM Products
            WHERE productID = ${req.params.id};
            `
            db.query (strQry, (err) => {
                if(err) throw new Error('To delete a product, please review your delete query.')
                    res.json({
                        status: res.statusCode,
                        msg: 'A product was successfully removed!'
                })
            })
        } catch(e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
}

export {
    Products
}
