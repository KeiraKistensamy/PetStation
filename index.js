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

app.use('/users', userRouter)
app.use('/products', userProducts)

app.listen(port,()=>{
    console.log('http://localhost:' +port);
})