import {connection as db} from '../config/index.js'
class Carts{
    fetchCarts(req, res) {
        try{
            const strQry = `
            SELECT distinct c.userID, CONCAT(u.firstName, ' ', u.lastName) AS fullName,
                group_concat(DISTINCT p.productName) productName,
                sum(p.productPrice) price,
                sum(c.quantity) Quantity
            FROM Carts c
            JOIN Users u ON c.userID = u.userID
            JOIN Products p ON c.productID = p.productID
            group by c.userID;
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error(err)
                res.json({
                    status: res.statusCode,
                    results: results
                 })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    fetchuserCart(req, res) {
        try{
            const strQry = `
            SELECT c.userID, CONCAT(u.firstName, ' ', u.lastName) AS fullName,
                p.productID,
                p.productName 'Product',
                p.productPrice * c.quantity 'Total Price',
                c.quantity 'Quantity'
            FROM Carts c
            JOIN Users u ON c.userID = u.userID
            JOIN Products p ON c.productID = p.productID
            WHERE c.userID = ${req.params.id};
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error(err)
                res.json({
                    status: res.statusCode,
                    results
                 })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    fetchaddUserCart(req, res)  {
        console.log(req.body);
        
        try{
            const strQry = `
            INSERT INTO Carts
            SET ?;
            `
            console.log(req.body);
            db.query(strQry, [req.body], (err) => {
                if (err) throw new Error(err.message)
                res.json({
                    status: res.statusCode,
                    msg : 'added to cart '
                })
            })
        }  catch (e){
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
    fetchupdateUserCart(req, res) {
        try{
            const strQry = `
            UPDATE Carts
            SET quantity = ${req.body.quantity}
            WHERE productID = ${req.params.productID} AND userID = ${req.params.id};
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to update cart')
                res.json({
                    status: res.statusCode,
                    msg: 'The quantity has been updated. Aragato:grin:'
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
    deleteItem(req, res) {
        try{
            const strQry = `
            DELETE FROM Carts
            WHERE productID = ${req.params.productID} AND userID = ${req.params.id};
            `
            db.query(strQry, (err) => {
                if (err) throw new Error('Unable to delete item')
                res.json({
            status: res.statusCode,
            msg: 'An item was removed'
            })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
    deleteCart(req,res){
        try{
            const strQry = `
            DELETE FROM Carts
            WHERE userID = ${req.params.id};
            `
            db.query(strQry, (err) => {
                if (err) throw new Error('Unable to delete this Cart')
                res.json({
            status: res.statusCode,
            msg: 'A cart was removed'
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
    Carts
}