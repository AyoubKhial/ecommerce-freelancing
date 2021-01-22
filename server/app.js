const bodyParser = require("body-parser");
const cors = require('cors');
const express = require("express");
const connection = require('./database');

// routes
const categoryRoutes = require('./app/category/routes');

const app = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

categoryRoutes(app);
connection.sequelize.sync();

app.listen(PORT , () => console.log(`Server started, listening port: ${PORT}`));
