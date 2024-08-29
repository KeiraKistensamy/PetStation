// Importing

import express from 'express'
import path from 'path'
import {pool} from './config/index.js'

// Creating an express app

const app = express()
const port = +process.env.PORT || 2000
const router = express.Router()

// The middleWare

app.use(router, express.static('./static'),
express.json(),
express.urlencoded({
    extended: true
}))

// The Endpoints

router.get('^/$|/PetStation', (req, res) =>{
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})

// ****************USERS***********************

// Get all users

router.get('/users', (req, res) => {
    try {
        const strQry = `
        SELECT userID, firstName, lastName, age, emailAdd
        FROM Users;
        `
        connection.query(strQry, (err, results) => {
            if (err) throw new Error('Not able to fetch all users')
                res.json({
            status: res.statusCode,
            results
            })
        })
    } catch(e) {
        res.json({
            status: 404,
            msg: e.message
        })
    }
})

// Get a single user

router.get('/user/:id', (req, res) => {
    try {
        const strQry = `
        SELECT userID, firstName, lastName, age, emailAdd
        FROM Users
        WHERE userID = ${req.params.id}
        `
        connection.query(strQry, (err, results) => {
            if (err) throw new Error('Not able to fetch user')
                res.json({
            status: res.statusCode,
            results
            })
        })
    } catch(e) {
        res.json({
            status: 404,
            msg: e.message
        })
    }
})

// Register a user



// Update a user



// Login a user



// Delete a user



// ****************PRODUCTS***********************

// Get all products

router.get('/products', (req, res) => {
    try{
        `
        SELECT productID, productName, productCategory, productDescription, productURL, productPrice
        FROM Products;
        `
        connection.query(strQry, (err, results)=>{
            if(err) throw new Error('Not able to fetch products')
            res.json({
                status: res.statusCode,
                results
            })
        })
    } catch(e) {
        res.json({
            status:404,
            msg: e.message
        })
    }
})

// Get a single product

router.get('/product/:id', (req, res) => {
    try{
        `
        SELECT productID, productName, productCategory, productDescription, productURL, productPrice
        FROM Product
        WHERE productID = ${req.params.id}
        `
        connection.query(strQry, (err, results)=>{
            if(err) throw new Error('Not able to fetch a single product')
            res.json({
                status: res.statusCode,
                results
            })
        })
    } catch(e) {
        res.json({
            status:404,
            msg: e.message
        })
    }
})

// Register a product



// Update a product



// Delete a product



// ****************CART***********************

// Get cart



// Register a cart



// Update cart



// Delete cart



app.listen(port,()=>{
    console.log('http://localhost:' +port);
})