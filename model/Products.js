import {pool} from '../config/config.js'


// ****************PRODUCTS***********************
class Products {

// Get all products

fetchProdutcs(req, res) {
    try {
        const strQry = `
        SELECT productID, prodName, category, prodDescription, prodURL, amount
        FROM Products
        `
        db.query(strQry, (err, results) => {
            if(err) throw new Error('Unable to fetch product')
                res.json({
                    status: res.statusCode,
                    results: results
                })
        })
    } catch(e) {
        res.json({
            status:404,
            msg: e.message
        })
    }
}

// Get a single product

fetchProduct(req, res) {
    try {
        const strQry = `
        SELECT productID, prodName, category, prodDescription, prodURL, amount
        FROM Products
        WHERE productID = ${req.params.id}
        `
        db.query(strQry, (err, results) => {
            if(err) throw new Error('Unable to fetch product')
                res.json({
                    status: res.statusCode,
                    results: results[0]
                })
        })
    } catch(e) {
        res.json({
            status:404,
            msg: e.message
        })
    }
}

// Register a product

addProduct(req, res) {
    try {
        const strQry = `
        INSERT INTO Products
        SET?
        `
    db.query(strQry, [req.body], (err)=>{
        if(err) throw new Error('Unable to add product')
        res.json({
    status:res.statusCode,
    msg: 'Product was successfully added'
    })})
     } catch(e) {
    res.json({
        status: 404,
        err: e.message
    })
}
}

// Update a product

updateProduct(req, res) {
    try {
        const strQry = `
        UPDATE Products
        SET ?
        WHERE productID = ${req.params.id}
        `
        db.query(strQry, [req.body], (err) => {
            if (err) throw new Error('Unable to update a product')
                res.json({
                    status: res.statusCode,
                    msg: 'The product record was updated'
                })
        })
    } catch (e) {
        res.json({
            status: 400,
            err: e.message
        })
    }
}

// Delete a product

deleteProduct(req, res) {
    try {
        const strQry = `
        DELETE FROM Products
        WHERE productID = ${req.params.id};
        `
        db.query(strQry, (err) => {
            if(err) throw new Error('Unable to delete product')
                res.json({
                    status: res.statusCode,
                    msg: 'Product\'s information was removed'
                })
        })
    } catch (e) {
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



// ****************CART***********************

// Get cart



// Register a cart



// Update cart



// Delete cart



