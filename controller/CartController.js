import express from 'express'
import bodyParser from 'body-parser'
import { carts } from '../model/index.js'

const cartRouter = express.Router()
cartRouter.use(bodyParser.json())


cartRouter.get('/', (req, res) => {
    carts.fetchCarts(req, res)
})
cartRouter.get('/:id/cart', (req, res) =>{
    carts.fetchuserCart(req, res)
})
cartRouter.post('/:id/cart', (req, res) =>{
    carts.fetchaddUserCart(req, res)
})
cartRouter.patch('/:id/cart/:productID', (req, res) =>{
    carts.fetchupdateUserCart(req, res)
})
cartRouter.delete('/:id/cart', (req, res) => {
    carts.deleteCart(req, res)
})
cartRouter.delete('/:id/cart/:productID',(req, res) =>{
    carts.deleteItem(req,res)
})

export {
    express,
    cartRouter
}