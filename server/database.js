const mysql = require("mysql2");
const config = require('./config/database');

// Create a connection to the database
const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.name,
});

module.exports = connection;
