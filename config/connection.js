const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
   console.log("connected: ", connection.threadId) 
});

module.exports = connection;