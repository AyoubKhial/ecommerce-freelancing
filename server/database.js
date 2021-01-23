const Sequelize = require("sequelize");
const config = require('./config/database');

// models
const Category = require('./app/category/model');
const Brand = require('./app/brand/model');

const sequelize = new Sequelize(config.name, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    operatorsAliases: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.categories = Category(sequelize, Sequelize);
db.brands = Brand(sequelize, Sequelize);

module.exports = db;