module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        category: {
            type: Sequelize.INTEGER,
            references: {
                model: "categories",
                key: "id",
            },
        },
        brand: {
            type: Sequelize.INTEGER,
            references: {
                model: "brands",
                key: "id",
            },
        },
        price: {
            type: Sequelize.FLOAT,
        },
        vtaIncluded: {
            type: Sequelize.BOOLEAN,
        },
        vtaUnit: {
            type: Sequelize.INTEGER,
        },
        stockCode: {
            type: Sequelize.STRING,
        },
        barCode: {
            type: Sequelize.BOOLEAN,
        },
        stockQuantity: {
            type: Sequelize.INTEGER,
        },
        cargoWeight: {
            type: Sequelize.FLOAT,
        },
        condition: {
            type: Sequelize.ENUM("ACTIVE", "PASSIVE"),
        },
        price2: {
            type: Sequelize.FLOAT,
        },
        price3: {
            type: Sequelize.FLOAT,
        },
        price4: {
            type: Sequelize.FLOAT,
        },
        price5: {
            type: Sequelize.FLOAT,
        },
        purchasePrice: {
            type: Sequelize.FLOAT,
        },
        VAT: {
            type: Sequelize.FLOAT,
        },
        marketPrice: {
            type: Sequelize.FLOAT,
        },
        discountType: {
            type: Sequelize.ENUM("PERCENTAGE", "PRICE"),
        },
        transfer: {
            type: Sequelize.FLOAT,
        },
        shippingCost: {
            type: Sequelize.FLOAT,
        },
        productFeature: {
            type: Sequelize.STRING,
        },
        moreInformation: {
            type: Sequelize.TEXT,
        },
        detailedInformation: {
            type: Sequelize.TEXT,
        },
        privateInformationArea: {
            type: Sequelize.FLOAT,
        },
        hood: {
            type: Sequelize.STRING,
        },
        content: {
            type: Sequelize.TEXT,
        },
        shortDescription: {
            type: Sequelize.TEXT,
        },
        SiteSearchTags: {
            type: Sequelize.TEXT,
        },
        warrantyPeriod: {
            type: Sequelize.STRING,
        },
        gifted: {
            type: Sequelize.STRING,
        },
        usingN11Integration: {
            type: Sequelize.BOOLEAN,
        },
        usingGGIntegration: {
            type: Sequelize.BOOLEAN,
        },
        usingHBIntegration: {
            type: Sequelize.BOOLEAN,
        },
        usingAmazonIntegration: {
            type: Sequelize.BOOLEAN,
        },
        picture1: {
            type: Sequelize.STRING,
        },
        picture2: {
            type: Sequelize.STRING,
        },
        picture3: {
            type: Sequelize.STRING,
        },
        picture4: {
            type: Sequelize.STRING,
        },
        picture5: {
            type: Sequelize.STRING,
        },
        picture6: {
            type: Sequelize.STRING,
        },
        picture7: {
            type: Sequelize.STRING,
        },
        picture8: {
            type: Sequelize.STRING,
        },
        productPageTitle: {
            type: Sequelize.STRING
        },
        keywords: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue("keywords")?.split(",");
            },
            set(val) {
                if (Array.isArray(val)) this.setDataValue("keywords", val.join(","));
                else this.setDataValue("keywords", val);
            },
        },
        explanation: {
            type: Sequelize.TEXT
        },
        seoTagging: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue("seoTagging")?.split(",");
            },
            set(val) {
                if (Array.isArray(val)) this.setDataValue("seoTagging", val.join(","));
                else this.setDataValue("seoTagging", val);
            },
        },
        countdownFeature: {
            type: Sequelize.BOOLEAN
        },
        countdownStart: {
            type: Sequelize.INTEGER
        },
        countdownEnd: {
            type: Sequelize.INTEGER
        },
        throwProduct: {
            type: Sequelize.INTEGER
        },
        customize: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue("customize")?.split(",");
            },
            set(val) {
                if (Array.isArray(val)) this.setDataValue("customize", val.join(","));
                else this.setDataValue("customize", val);
            }
        },
        recommendedProducts: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue("recommendedProducts")?.split(",");
            },
            set(val) {
                if (Array.isArray(val)) this.setDataValue("recommendedProducts", val.join(","));
                else this.setDataValue("recommendedProducts", val);
            },
        },
        combinedProducts: {
            type: Sequelize.STRING,
            get() {
                return this.getDataValue("combinedProducts")?.split(",");
            },
            set(val) {
                if (Array.isArray(val)) this.setDataValue("combinedProducts", val.join(","));
                else this.setDataValue("combinedProducts", val);
            },
        },
    });
    return Product;
};
