import { Users } from "./Users.js"
import { Products } from "./Products.js"
import { connection } from "../config/index.js"

const users = new Users()
const products = new Products()

export {
    users,
    products
}