import mysql from "mysql"

export const db = mysql.createConnection({
    host :"localhost",
    port : 3350,
    user: "root",
    password:"pankaj123",
    database:"blog"
})


