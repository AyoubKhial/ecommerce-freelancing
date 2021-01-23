const bodyParser = require("body-parser");
const cors = require('cors');
const express = require("express");
const fs = require('fs');
const path = require('path');
const connection = require('./database');

// routes
const categoryRoutes = require('./app/category/routes');
const brandRoutes = require('./app/brand/routes');
const variantRoutes = require('./app/variant/routes');
const featureRoutes = require('./app/feature/routes');
const productRoutes = require('./app/product/routes');
const app = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public/images')));

const PORT = process.env.PORT || 3000;

categoryRoutes(app);
brandRoutes(app);
variantRoutes(app);
featureRoutes(app);
productRoutes(app);
connection.sequelize.sync();

if (!fs.existsSync('./public'))fs.mkdirSync('./public');
if (!fs.existsSync('./public/images'))fs.mkdirSync('./public/images');

app.listen(PORT , () => console.log(`Server started, listening port: ${PORT}`));
