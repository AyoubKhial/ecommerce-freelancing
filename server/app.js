const bodyParser = require("body-parser");
const express = require("express");
const connection = require('./database');

const app = express();

app.use(express.json({ limit: "10kb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

app.listen(PORT , () => console.log(`Server started, listening port: ${PORT}`));
