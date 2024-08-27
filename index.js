import { createPool } from "mysql2";
import 'dotenv/config.js' //to access all files in .env

let connection = createPool ({
    host: process.env.hostDb,
    user: process.env.userDb,
    password: process.env.password,
    database: process.env.dbName,
    multipleStatement: true,
    connectionLimit: 30
})

// if it doesnt work(error message below)
connection.on('connection', (err)=>{
    if(err) throw new Error('Could not connect to the database, please try again later.')
})

export {
    connection
}