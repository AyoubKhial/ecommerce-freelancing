const Sequelize = require("sequelize");
const config = require('./config/database');

const sequelize = new Sequelize(config.name, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    operatorsAliases: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;