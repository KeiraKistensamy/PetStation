import express from 'express'
import bodyParser from 'body-parser'
import { users } from '../model/index.js'
import { carts } from '../model/index.js'
// import { verifyAToken } from '../middleware/AuthenticateUser.js'

const userRouter = express.Router()
userRouter.use(bodyParser.json())
userRouter.get('/', (req, res) => {
    users.fetchUsers(req, res)
})
userRouter.get('/one/:id', (req, res) => {
    users.fetchUser(req, res)
})
userRouter.post('/register', (req, res) => {
    users.registerUser(req, res)
})
userRouter.patch('/:id', (req, res) => {
    users.updateUser(req, res)
})
userRouter.delete('/:id', (req, res) => {
    users.deleteUser(req, res)
})
userRouter.post('/login', (req, res) => {
    users.login(req, res)
})

userRouter.get('/carts', (req, res) => {
    carts.fetchCarts(req, res)
})
userRouter.get('/:id/cart', (req, res) =>{
    carts.fetchuserCart(req, res)
})
userRouter.post('/:id/cart', (req, res) =>{
    carts.fetchaddUserCart(req, res)
})
userRouter.patch('/:id/cart/:productID', (req, res) =>{
    carts.fetchupdateUserCart(req, res)
})
userRouter.delete('/:id/cart', (req, res) => {
    carts.deleteCart(req, res)
})
userRouter.delete('/:id/cart/:productID',(req, res) =>{
    carts.deleteItem(req,res)
})


export {
    express,
    userRouter
}











