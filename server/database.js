const Sequelize = require("sequelize");
const config = require('./config/database');

// models
const Category = require('./app/category/model');
const Brand = require('./app/brand/model');
const Variant = require('./app/variant/model');
const Feature = require('./app/feature/model');
const Product = require('./app/product/model');

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
db.variants = Variant(sequelize, Sequelize);
db.features = Feature(sequelize, Sequelize);
db.products = Product(sequelize, Sequelize);

/* db.products.belongsToMany(db.features, {
    through: "product_feature",
    as: "features",
    foreignKey: "productId"
});
  
db.features.belongsToMany(db.products, {
    through: "product_feature",
    as: "products",
    foreignKey: "featureId"
}); */

(async () => {
    await db.variants.findOrCreate({
        where: { name: 'Body size' },
        defaults: {
            name: 'Body size',
            values: 'XS,S,M,L,XL'
        }
    });
    await db.variants.findOrCreate({
        where: { name: 'Color' },
        defaults: {
            name: 'Color',
            values: 'RED,GREEN,BLUE,WHITE,BLACK'
        }
    });
    await db.variants.findOrCreate({
        where: { name: 'Capacity' },
        defaults: {
            name: 'Capacity',
            values: '64 GB, 256 GB'
        }
    });
})();

module.exports = db;